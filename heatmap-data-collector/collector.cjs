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
        // 주요 지점 테이블 사용
        TABLE: 'mms_area_기준초과',  // 또는 'mms_area_기준이하'
        SELECT: '*',
        METHOD: '51',  // Polygon/Point 데이터
        EXTENT_PRJ: '3',
        SEARCH_R: '',  // 빈 값
    }
};

/**
 * 지역별 바운딩 박스
 */
const REGION_BOUNDS = {
    '50': {
        BOTTOM_X: 126.15,
        BOTTOM_Y: 33.10,
        TOP_X: 127.00,
        TOP_Y: 33.65,
        W: 1920,
        H: 1080
    },
    '11': {
        BOTTOM_X: 126.76,
        BOTTOM_Y: 37.42,
        TOP_X: 127.18,
        TOP_Y: 37.70,
        W: 1920,
        H: 1080
    },
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
    const bounds = REGION_BOUNDS[regionCode] || REGION_BOUNDS['default'];
    
    // WHERE 절 수정: CTY_CD 사용
    const whereClause = `CTY_CD IN ('${regionCode}')`;
    
    const params = new URLSearchParams({
        ...API_CONFIG.params,
        WHERE: whereClause,
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
            console.error(`❌ API 에러: ${text.substring(0, 500)}`);
            throw new Error(`API Error: ${text.substring(0, 200)}`);
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
        console.log('⚠️  예상치 못한 응답 형식:', text.substring(0, 200));
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
        points = rawData.map(item => {
            return {
                id: item.ID || item.id,
                name: item.NM || item.name || item.NAME,
                region_code: item.CTY_CD || item.cty_cd || item.MEGA_CD || item.mega_cd,
                latitude: parseFloat(item.LAT || item.lat || item.Y || item.y || 0),
                longitude: parseFloat(item.LON || item.lon || item.X || item.x || 0),
                population: parseInt(item['현재인구'] || item.current_pop || item.POP || 0),
                timestamp: timestamp,
                // 원본 데이터 포함
                raw: item
            };
        }).filter(p => p.latitude !== 0 && p.longitude !== 0);
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
    
    try {
        await fs.mkdir(outputDir, { recursive: true });
    } catch (error) {
        // 이미 존재하면 무시
    }

    if (!filename) {
        const now = new Date();
        const dateStr = now.toISOString().replace(/[:.]/g, '-').slice(0, -5);
        filename = `population_${dateStr}.json`;
    }

    const filepath = path.join(outputDir, filename);
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

        const rawData = await fetchPopulationData(regionCode);
        
        console.log('📦 원본 데이터 (Sample):');
        const sampleText = JSON.stringify(rawData, null, 2);
        console.log(sampleText.substring(0, 800) + (sampleText.length > 800 ? '\n...' : ''));
        
        const processedData = processData(rawData);
        const filepath = await saveToFile(processedData);

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
