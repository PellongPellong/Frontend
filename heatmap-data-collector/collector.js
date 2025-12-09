// collector.js
// 제주도 실시간 유동인구 데이터 수집기

import https from 'https';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 설정
const API_BASE_URL = 'jeju.mms.gislab.co.kr';
const API_PATH = '/mms_new/GEONET.getAreaWeekInfoByLatlng.php';
const DATA_DIR = path.join(__dirname, 'data');
const HISTORY_DIR = path.join(DATA_DIR, 'history');
const LOCATIONS_FILE = path.join(__dirname, 'locations.json');
const LATEST_FILE = path.join(DATA_DIR, 'latest.json');

// 데이터 디렉토리 생성
async function ensureDirectories() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.mkdir(HISTORY_DIR, { recursive: true });
}

// 장소 목록 로드
async function loadLocations() {
  try {
    const data = await fs.readFile(LOCATIONS_FILE, 'utf-8');
    const { locations } = JSON.parse(data);
    return locations;
  } catch (error) {
    console.error('❌ locations.json 파일을 읽을 수 없습니다:', error.message);
    process.exit(1);
  }
}

// API 호출 (SSL 검증 우회)
function fetchPopulationData(lng, lat, radius) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: API_BASE_URL,
      path: `${API_PATH}?X=${lng}&Y=${lat}&R=${radius}`,
      method: 'GET',
      headers: {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'ko-KR,ko;q=0.9',
      },
      // SSL 인증서 검증 우회 (자체 서명 인증서 대응)
      rejectUnauthorized: false
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          if (res.statusCode !== 200) {
            reject(new Error(`HTTP ${res.statusCode}`));
            return;
          }
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

// 데이터 파싱
function parsePopulationData(rawData) {
  if (!rawData || rawData.length < 8) {
    return null;
  }

  // 현재 도민 데이터 (인덱스 0)
  const residentNow = rawData[0];
  
  // 현재 관광객 데이터 (인덱스 7)
  const touristNow = rawData[7];

  // 연령별 합계 계산
  const ages = ['00', '10', '20', '30', '40', '50', '60', '70', '80', '90'];
  
  const residentByAge = ages.map(age => ({
    age: age === '00' ? '10세 미만' : age === '90' ? '90세 이상' : `${age}대`,
    male: Math.round(residentNow[`IN_NOW_M_POP_${age}`] || 0),
    female: Math.round(residentNow[`IN_NOW_W_POP_${age}`] || 0),
    total: Math.round(
      (residentNow[`IN_NOW_M_POP_${age}`] || 0) + 
      (residentNow[`IN_NOW_W_POP_${age}`] || 0)
    )
  }));

  const touristByAge = ages.map(age => ({
    age: age === '00' ? '10세 미만' : age === '90' ? '90세 이상' : `${age}대`,
    male: Math.round(touristNow[`OUT_NOW_M_POP_${age}`] || 0),
    female: Math.round(touristNow[`OUT_NOW_W_POP_${age}`] || 0),
    total: Math.round(
      (touristNow[`OUT_NOW_M_POP_${age}`] || 0) + 
      (touristNow[`OUT_NOW_W_POP_${age}`] || 0)
    )
  }));

  // 요일별 데이터 (인덱스 1-6: 도민, 8-13: 관광객)
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const weeklyResident = rawData.slice(1, 7).map((dayData, idx) => ({
    day: weekDays[idx],
    hourly: Object.keys(dayData)
      .filter(key => key !== 'IN_WEEK')
      .map(hour => ({
        hour: parseInt(hour),
        population: Math.round(dayData[hour])
      }))
      .sort((a, b) => a.hour - b.hour)
  }));

  const weeklyTourist = rawData.slice(8, 14).map((dayData, idx) => ({
    day: weekDays[idx],
    hourly: Object.keys(dayData)
      .filter(key => key !== 'OUT_WEEK')
      .map(hour => ({
        hour: parseInt(hour),
        population: Math.round(dayData[hour])
      }))
      .sort((a, b) => a.hour - b.hour)
  }));  

  return {
    current: {
      resident: {
        total: Math.round(residentNow.IN_NOW_POP_SUM || 0),
        male: Math.round(ages.reduce((sum, age) => 
          sum + (residentNow[`IN_NOW_M_POP_${age}`] || 0), 0)),
        female: Math.round(ages.reduce((sum, age) => 
          sum + (residentNow[`IN_NOW_W_POP_${age}`] || 0), 0)),
        byAge: residentByAge
      },
      tourist: {
        total: Math.round(touristNow.OUT_NOW_POP_SUM || 0),
        male: Math.round(ages.reduce((sum, age) => 
          sum + (touristNow[`OUT_NOW_M_POP_${age}`] || 0), 0)),
        female: Math.round(ages.reduce((sum, age) => 
          sum + (touristNow[`OUT_NOW_W_POP_${age}`] || 0), 0)),
        byAge: touristByAge
      },
      total: Math.round(
        (residentNow.IN_NOW_POP_SUM || 0) + 
        (touristNow.OUT_NOW_POP_SUM || 0)
      )
    },
    weekly: {
      resident: weeklyResident,
      tourist: weeklyTourist
    }
  };
}

// 단일 장소 데이터 수집
async function collectLocationData(location) {
  console.log(`📍 수집 중: ${location.name} (반경 ${location.radius}m)`);
  
  try {
    const rawData = await fetchPopulationData(location.lng, location.lat, location.radius);
    
    if (!rawData) {
      console.log(`⚠️  ${location.name}: 데이터 없음`);
      return null;
    }

    const parsedData = parsePopulationData(rawData);
    
    if (!parsedData) {
      console.log(`⚠️  ${location.name}: 데이터 파싱 실패`);
      return null;
    }

    console.log(`✅ ${location.name}: 총 ${parsedData.current.total}명 (도민 ${parsedData.current.resident.total}, 관광객 ${parsedData.current.tourist.total})`);

    return {
      id: location.id,
      name: location.name,
      category: location.category,
      coordinates: {
        lng: location.lng,
        lat: location.lat,
        radius: location.radius
      },
      ...parsedData
    };
  } catch (error) {
    console.log(`❌ ${location.name}: ${error.message}`);
    return null;
  }
}

// 모든 장소 데이터 수집
async function collectAllData() {
  const locations = await loadLocations();
  const timestamp = new Date().toISOString();
  const results = [];

  console.log(`\n🚀 데이터 수집 시작: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}`);
  console.log(`📊 총 ${locations.length}개 장소\n`);

  for (const location of locations) {
    const data = await collectLocationData(location);
    if (data) {
      results.push(data);
    }
    // API 부하 방지를 위한 딜레이
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  const output = {
    timestamp,
    collectedAt: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
    totalLocations: results.length,
    summary: {
      totalPopulation: results.reduce((sum, loc) => sum + loc.current.total, 0),
      totalResident: results.reduce((sum, loc) => sum + loc.current.resident.total, 0),
      totalTourist: results.reduce((sum, loc) => sum + loc.current.tourist.total, 0),
    },
    locations: results
  };

  return output;
}

// 데이터 저장
async function saveData(data) {
  // latest.json 저장
  await fs.writeFile(LATEST_FILE, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`\n💾 최신 데이터 저장: ${LATEST_FILE}`);

  // 히스토리 저장
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-').substring(0, 5); // HH-mm
  
  const historyDateDir = path.join(HISTORY_DIR, dateStr);
  await fs.mkdir(historyDateDir, { recursive: true });
  
  const historyFile = path.join(historyDateDir, `${timeStr}.json`);
  await fs.writeFile(historyFile, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`📁 히스토리 저장: ${historyFile}`);

  // 요약 출력
  console.log('\n📊 수집 요약:');
  console.log(`   총 인구: ${data.summary.totalPopulation.toLocaleString()}명`);
  console.log(`   도민: ${data.summary.totalResident.toLocaleString()}명`);
  console.log(`   관광객: ${data.summary.totalTourist.toLocaleString()}명`);
  console.log(`   수집 장소: ${data.totalLocations}개\n`);
}

// 메인 실행
async function main() {
  await ensureDirectories();

  const args = process.argv.slice(2);
  const onceMode = args.includes('--once');
  const intervalArg = args.find(arg => arg.startsWith('--interval='));
  const interval = intervalArg ? parseInt(intervalArg.split('=')[1]) : 3600000; // 기본 1시간

  if (onceMode) {
    // 1회 수집 모드
    const data = await collectAllData();
    await saveData(data);
    console.log('✨ 수집 완료!');
  } else {
    // 주기적 수집 모드
    console.log(`⏰ 주기적 수집 모드 (간격: ${interval / 1000}초)`);
    console.log('   Ctrl+C로 종료할 수 있습니다.\n');

    // 즉시 1회 실행
    const data = await collectAllData();
    await saveData(data);

    // 주기적 실행
    setInterval(async () => {
      const data = await collectAllData();
      await saveData(data);
    }, interval);
  }
}

// 에러 핸들링
process.on('unhandledRejection', (error) => {
  console.error('❌ 예상치 못한 오류:', error);
  process.exit(1);
});

// 실행
main();
