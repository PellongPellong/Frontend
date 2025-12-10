// collector.js
// 제주도 실시간 유동인구 데이터 수집기

import https from 'https';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 설정
const API_BASE_HOST = 'jeju.mms.gislab.co.kr';
const API_PATH = '/mms_new/GEONET.getAreaWeekInfoByLatlng.php';
const DATA_DIR = path.join(__dirname, 'data');
const HISTORY_DIR = path.join(DATA_DIR, 'history');
const RAW_DIR = path.join(DATA_DIR, 'raw');
const LOCATIONS_FILE = path.join(__dirname, 'locations.json');
const LATEST_FILE = path.join(DATA_DIR, 'latest.json');

// 데이터 디렉토리 생성
async function ensureDirectories() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.mkdir(HISTORY_DIR, { recursive: true });
  await fs.mkdir(RAW_DIR, { recursive: true });
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

// API 호출 (SSL 검증 우회) + raw 저장용 메타 포함
function fetchPopulationData(lng, lat, radius) {
  return new Promise((resolve, reject) => {
    const query = `X=${lng}&Y=${lat}&R=${radius}`;
    const options = {
      hostname: API_BASE_HOST,
      path: `${API_PATH}?${query}`,
      method: 'GET',
      headers: {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'ko-KR,ko;q=0.9',
      },
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
          resolve({
            json: jsonData,
            rawText: data,
            meta: {
              statusCode: res.statusCode,
              headers: res.headers,
              query,
            },
          });
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

// 데이터 파싱 (수정됨)
function parsePopulationData(rawData) {
  if (!rawData || !Array.isArray(rawData) || rawData.length < 16) {
    return null;
  }

  // 올바른 인덱스:
  // [0]: 현재 도민
  // [1-7]: 도민 일~토
  // [8]: 현재 관광객
  // [9-15]: 관광객 일~토
  const residentNow = rawData[0];
  const touristNow = rawData[8];

  const ages = ['00', '10', '20', '30', '40', '50', '60', '70', '80', '90'];

  const residentByAge = ages.map((age) => ({
    age: age === '00' ? '10세 미만' : age === '90' ? '90세 이상' : `${age}대`,
    male: Math.round(residentNow[`IN_NOW_M_POP_${age}`] || 0),
    female: Math.round(residentNow[`IN_NOW_W_POP_${age}`] || 0),
    total: Math.round(
      (residentNow[`IN_NOW_M_POP_${age}`] || 0) +
        (residentNow[`IN_NOW_W_POP_${age}`] || 0)
    ),
  }));

  const touristByAge = ages.map((age) => ({
    age: age === '00' ? '10세 미만' : age === '90' ? '90세 이상' : `${age}대`,
    male: Math.round(touristNow[`OUT_NOW_M_POP_${age}`] || 0),
    female: Math.round(touristNow[`OUT_NOW_W_POP_${age}`] || 0),
    total: Math.round(
      (touristNow[`OUT_NOW_M_POP_${age}`] || 0) +
        (touristNow[`OUT_NOW_W_POP_${age}`] || 0)
    ),
  }));

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // 도민 일~토 (1-7)
  const weeklyResident = rawData.slice(1, 8).map((dayData, idx) => ({
    day: weekDays[idx],
    hourly: Object.keys(dayData)
      .filter((key) => key !== 'IN_WEEK')
      .map((hour) => ({
        hour: parseInt(hour, 10),
        population: Math.round(dayData[hour]),
      }))
      .sort((a, b) => a.hour - b.hour),
  }));

  // 관광객 일~토 (9-15)
  const weeklyTourist = rawData.slice(9, 16).map((dayData, idx) => ({
    day: weekDays[idx],
    hourly: Object.keys(dayData)
      .filter((key) => key !== 'OUT_WEEK')
      .map((hour) => ({
        hour: parseInt(hour, 10),
        population: Math.round(dayData[hour]),
      }))
      .sort((a, b) => a.hour - b.hour),
  }));

  return {
    current: {
      resident: {
        total: Math.round(residentNow.IN_NOW_POP_SUM || 0),
        male: Math.round(
          ages.reduce(
            (sum, age) => sum + (residentNow[`IN_NOW_M_POP_${age}`] || 0),
            0
          )
        ),
        female: Math.round(
          ages.reduce(
            (sum, age) => sum + (residentNow[`IN_NOW_W_POP_${age}`] || 0),
            0
          )
        ),
        byAge: residentByAge,
      },
      tourist: {
        total: Math.round(touristNow.OUT_NOW_POP_SUM || 0),
        male: Math.round(
          ages.reduce(
            (sum, age) => sum + (touristNow[`OUT_NOW_M_POP_${age}`] || 0),
            0
          )
        ),
        female: Math.round(
          ages.reduce(
            (sum, age) => sum + (touristNow[`OUT_NOW_W_POP_${age}`] || 0),
            0
          )
        ),
        byAge: touristByAge,
      },
      total: Math.round(
        (residentNow.IN_NOW_POP_SUM || 0) +
          (touristNow.OUT_NOW_POP_SUM || 0)
      ),
    },
    weekly: {
      resident: weeklyResident,
      tourist: weeklyTourist,
    },
  };
}

// 원시 응답 저장
async function saveRawResponse(location, rawPayload) {
  try {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now
      .toTimeString()
      .split(' ')[0]
      .replace(/:/g, '-')
      .substring(0, 5);

    const dir = path.join(RAW_DIR, dateStr);
    await fs.mkdir(dir, { recursive: true });

    const filePath = path.join(dir, `${timeStr}_${location.id}.json`);

    const wrapped = {
      collectedAt: now.toISOString(),
      location: {
        id: location.id,
        name: location.name,
        lng: location.lng,
        lat: location.lat,
        radius: location.radius,
      },
      api: rawPayload.meta,
      data: rawPayload.json,
    };

    await fs.writeFile(filePath, JSON.stringify(wrapped, null, 2), 'utf-8');
    console.log(`   🔎 raw 저장: ${filePath}`);
  } catch (error) {
    console.log(`   ⚠️ raw 저장 실패 (${location.name}): ${error.message}`);
  }
}

// 단일 장소 데이터 수집
async function collectLocationData(location) {
  console.log(`📍 수집 중: ${location.name} (반경 ${location.radius}m)`);

  try {
    const rawPayload = await fetchPopulationData(
      location.lng,
      location.lat,
      location.radius
    );

    if (!rawPayload || !rawPayload.json) {
      console.log(`⚠️  ${location.name}: 데이터 없음`);
      return null;
    }

    // 원시 응답도 저장 (관광객 데이터 확인용)
    await saveRawResponse(location, rawPayload);

    const parsedData = parsePopulationData(rawPayload.json);

    if (!parsedData) {
      console.log(`⚠️  ${location.name}: 데이터 파싱 실패`);
      return null;
    }

    console.log(
      `✅ ${location.name}: 총 ${parsedData.current.total}명 (도민 ${parsedData.current.resident.total}, 관광객 ${parsedData.current.tourist.total})`
    );

    return {
      id: location.id,
      name: location.name,
      category: location.category,
      coordinates: {
        lng: location.lng,
        lat: location.lat,
        radius: location.radius,
      },
      ...parsedData,
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

  console.log(
    `\n🚀 데이터 수집 시작: ${new Date().toLocaleString('ko-KR', {
      timeZone: 'Asia/Seoul',
    })}`
  );
  console.log(`📊 총 ${locations.length}개 장소\n`);

  for (const location of locations) {
    const data = await collectLocationData(location);
    if (data) {
      results.push(data);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  const output = {
    timestamp,
    collectedAt: new Date().toLocaleString('ko-KR', {
      timeZone: 'Asia/Seoul',
    }),
    totalLocations: results.length,
    summary: {
      totalPopulation: results.reduce(
        (sum, loc) => sum + loc.current.total,
        0
      ),
      totalResident: results.reduce(
        (sum, loc) => sum + loc.current.resident.total,
        0
      ),
      totalTourist: results.reduce(
        (sum, loc) => sum + loc.current.tourist.total,
        0
      ),
    },
    locations: results,
  };

  return output;
}

// 데이터 저장
async function saveData(data) {
  await fs.writeFile(LATEST_FILE, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`\n💾 최신 데이터 저장: ${LATEST_FILE}`);

  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const timeStr = now
    .toTimeString()
    .split(' ')[0]
    .replace(/:/g, '-')
    .substring(0, 5);

  const historyDateDir = path.join(HISTORY_DIR, dateStr);
  await fs.mkdir(historyDateDir, { recursive: true });

  const historyFile = path.join(historyDateDir, `${timeStr}.json`);
  await fs.writeFile(historyFile, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`📁 히스토리 저장: ${historyFile}`);

  console.log('\n📊 수집 요약:');
  console.log(
    `   총 인구: ${data.summary.totalPopulation.toLocaleString()}명`
  );
  console.log(
    `   도민: ${data.summary.totalResident.toLocaleString()}명`
  );
  console.log(
    `   관광객: ${data.summary.totalTourist.toLocaleString()}명`
  );
  console.log(`   수집 장소: ${data.totalLocations}개\n`);
}

// 메인 실행
async function main() {
  await ensureDirectories();

  const args = process.argv.slice(2);
  const onceMode = args.includes('--once');
  const intervalArg = args.find((arg) => arg.startsWith('--interval='));
  const interval = intervalArg
    ? parseInt(intervalArg.split('=')[1], 10)
    : 3600000;

  if (onceMode) {
    const data = await collectAllData();
    await saveData(data);
    console.log('✨ 수집 완료!');
  } else {
    console.log(`⏰ 주기적 수집 모드 (간격: ${interval / 1000}초)`);
    console.log('   Ctrl+C로 종료할 수 있습니다.\n');

    const data = await collectAllData();
    await saveData(data);

    setInterval(async () => {
      const data = await collectAllData();
      await saveData(data);
    }, interval);
  }
}

process.on('unhandledRejection', (error) => {
  console.error('❌ 예상치 못한 오류:', error);
  process.exit(1);
});

main();
