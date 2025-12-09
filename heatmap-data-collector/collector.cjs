// collector.cjs
// CommonJS 버전 - Node.js 모든 버전에서 동작

const https = require('https');
const fs = require('fs').promises;
const path = require('path');

/**
 * API 설정
 */
const API_CONFIG = {
    baseUrl: 'https://mms.gislab.co.kr:444/heatmap_api/php/API.php',
    params: {
        GET: 'TRUE',
        DB: 'sql_file',
        TABLE: 'mms_cell_new_최신유동인구',
        SELECT: '(M_POP_00+M_POP_10+M_POP_20+M_POP_30+M_POP_40+M_POP_50+M_POP_60+M_POP_70+M_POP_80+M_POP_90+W_POP_00+W_POP_10+W_POP_20+W_POP_30+W_POP_40+W_POP_50+W_POP_60+W_POP_70+W_POP_80+W_POP_90) as total_pop,MEGA_CD,CELL_ID,LAT,LON',
        METHOD: '11',
        EXTENT_PRJ: '3',  // 좌표계 (3 = WGS84)
        SEARCH_R: '10',   // 검색 반경
    }
};

/**
 * 지역별 바운딩 박스 (위도/경도)
 */
const REGION_BOUNDS = {
    // 제주도 전체 영역
    '50': {
        BOTTOM_X: 126.15,  // 서쪽 경계
        BOTTOM_Y: 33.10,   // 남쪽 경계
        TOP_X: 127.00,     // 동쪽 경계
        TOP_Y: 33.65,      // 북쪽 경계
        W: 1920,           // 이미지 너비 (px)
        H: 1080            // 이미지 높이 (px)
    },
    // 서울 (예시)
    '11': {
        BOTTOM_X: 126.76,
        BOTTOM_Y: 37.42,
        TOP_X: 127.18,
        TOP_Y: 37.70,
        W: 1920,
        H: 1080
    },
    // 기본값 (제주도)
    'default': {
        BOTTOM_X: 126.15,
        BOTTOM_Y: 33.10,
        TOP_X: 127.00,
        TOP_Y: 33.65,
        W: 1920,
        H: 1080
    }
};

/**
 * HTTPS GET 요청
 */
function httpsGet(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                resolve({
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: data
                });
            });
        }).on('error', reject);
    });
}

/**
 * URL 구성
 */
function buildApiUrl(regionCode = '50') {
    // 지역별 바운딩 박스 가져오기
    const bounds = REGION_BOUNDS[regionCode] || REGION_BOUNDS['default'];
    
    const params = new URLSearchParams({
        ...API_CONFIG.params,
        WHERE: `mega_cd IN ('${regionCode}')`,
        // EXTENT 파라미터 추가
        BOTTOM_X: bounds.BOTTOM_X,
        BOTTOM_Y: bounds.BOTTOM_Y,
        TOP_X: bounds.TOP_X,
        TOP_Y: bounds.TOP_Y,
        W: bounds.W,
        H: bounds.H
    });

    return `${API_CONFIG.baseUrl}?${params.toString()}`;
}

/**
 * 데이터 수집
 */
async function fetchPopulationData(regionCode = '50') {
    const url = buildApiUrl(regionCode);
    
    console.log(`\n🔍 데이터 수집 시작: ${regionCode}`);
    console.log(`URL: ${url.substring(0, 200)}...\n`);

    try {
        const response = await httpsGet(url);
        
        if (response.statusCode !== 200) {
            throw new Error(`HTTP ${response.statusCode}`);
        }

        const contentType = response.headers['content-type'] || '';
        const text = response.body;

        // 에러 메시지 체크
        if (text.includes('ERROR:')) {
            console.error(`❌ API 에러: ${text}`);
            throw new Error(`API Error: ${text}`);
        }

        // JSON 파싱 시도
        if (contentType.includes('application/json') || text.trim().startsWith('{') || text.trim().startsWith('[')) {
            try {
                return JSON.parse(text);
            } catch (e) {
                console.warn('⚠️  JSON 파싱 실패');
            }
        }

        // 파이프 구분 데이터
        if (text.includes('|')) {
            return parsePipeDelimitedData(text);
        }

        // 원본 텍스트 반환
        return { raw: text };

    } catch (error) {
        console.error(`❌ 데이터 수집 실패: ${error.message}`);
        throw error;
    }
}

/**
 * 파이프 구분 데이터 파싱
 */
function parsePipeDelimitedData(text) {
    const lines = text.trim().split('\n');
    
    if (lines.length === 0) {
        return [];
    }

    const headers = lines[0].split('|');
    const data = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split('|');
        const row = {};

        headers.forEach((header, index) => {
            row[header.trim()] = values[index] ? values[index].trim() : null;
        });

        data.push(row);
    }

    return data;
}

/**
 * 데이터 가공
 */
function processData(rawData) {
    const timestamp = new Date().toISOString();
    
    let points = [];

    // 배열인 경우
    if (Array.isArray(rawData)) {
        points = rawData.map(item => ({
            cell_id: item.CELL_ID || item.cell_id,
            region_code: item.MEGA_CD || item.mega_cd,
            latitude: parseFloat(item.LAT || item.lat || 0),
            longitude: parseFloat(item.LON || item.lon || 0),
            population: parseInt(item.total_pop || item.TOTAL_POP || 0),
            timestamp: timestamp
        })).filter(p => p.latitude !== 0 && p.longitude !== 0); // 유효한 좌표만
    } else if (rawData && typeof rawData === 'object') {
        return {
            timestamp: timestamp,
            region_code: '50',
            data_count: 0,
            raw_data: rawData,
            summary: {
                total_population: 0,
                avg_population: 0
            }
        };
    }

    // 통계 계산
    const totalPopulation = points.reduce((sum, p) => sum + (p.population || 0), 0);
    const avgPopulation = points.length > 0 ? Math.round(totalPopulation / points.length) : 0;
    const maxPopulation = points.length > 0 ? Math.max(...points.map(p => p.population || 0)) : 0;
    const minPopulation = points.length > 0 ? Math.min(...points.map(p => p.population || 0)) : 0;

    return {
        timestamp: timestamp,
        region_code: '50',
        data_count: points.length,
        points: points,
        summary: {
            total_population: totalPopulation,
            avg_population: avgPopulation,
            max_population: maxPopulation,
            min_population: minPopulation
        }
    };
}

/**
 * JSON 파일로 저장
 */
async function saveToFile(data, filename = null) {
    const outputDir = path.join(process.cwd(), 'output');
    
    // output 폴더 생성
    try {
        await fs.mkdir(outputDir, { recursive: true });
    } catch (error) {
        // 이미 존재하면 무시
    }

    // 파일명 생성
    if (!filename) {
        const now = new Date();
        const dateStr = now.toISOString().replace(/[:.]/g, '-').slice(0, -5);
        filename = `population_${dateStr}.json`;
    }

    const filepath = path.join(outputDir, filename);

    // JSON 파일로 저장
    await fs.writeFile(filepath, JSON.stringify(data, null, 2), 'utf-8');

    console.log(`✅ 파일 저장 완료: ${filepath}`);

    return filepath;
}

/**
 * 메인 실행
 */
async function collect(regionCode = '50') {
    try {
        console.log('\n🚀 실시간 유동인구 데이터 수집 시작...');

        // 1. 데이터 수집
        const rawData = await fetchPopulationData(regionCode);
        
        console.log('📦 원본 데이터 (Sample):');
        const sampleText = JSON.stringify(rawData, null, 2);
        console.log(sampleText.substring(0, 500) + (sampleText.length > 500 ? '...' : ''));
        
        // 2. 데이터 가공
        const processedData = processData(rawData);

        // 3. 파일 저장
        const filepath = await saveToFile(processedData);

        // 4. 결과 출력
        console.log('\n📊 수집 결과:');
        console.log(`  - 데이터 개수: ${processedData.data_count.toLocaleString()}`);
        console.log(`  - 총 인구: ${processedData.summary.total_population.toLocaleString()}명`);
        console.log(`  - 평균 인구: ${processedData.summary.avg_population.toLocaleString()}명`);
        console.log(`  - 최대 인구: ${processedData.summary.max_population.toLocaleString()}명`);
        console.log(`  - 최소 인구: ${processedData.summary.min_population.toLocaleString()}명`);
        console.log(`  - 저장 경로: ${filepath}\n`);

        return processedData;

    } catch (error) {
        console.error(`\n❌ 수집 실패: ${error.message}`);
        console.error(error.stack);
        throw error;
    }
}

/**
 * 명령줄 실행
 */
if (require.main === module) {
    const regionCode = process.argv[2] || '50';
    
    collect(regionCode)
        .then(() => {
            console.log('✨ 수집 완료!');
            process.exit(0);
        })
        .catch((error) => {
            console.error('🚨 수집 실패:', error.message);
            process.exit(1);
        });
}

module.exports = { collect, fetchPopulationData, processData, saveToFile };
