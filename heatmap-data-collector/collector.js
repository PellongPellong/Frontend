// collector.js
// 실시간 유동인구 데이터를 수집하는 핵심 모듈

import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';

/**
 * API 설정
 */
const API_CONFIG = {
    baseUrl: 'https://mms.gislab.co.kr:444/heatmap_api/php/API.php',
    params: {
        GET: 'TRUE',
        DB: 'sql_file',
        TABLE: 'mms_cell_new_최신유동인구',
        // 남성/여성 모든 연령대 합계
        SELECT: '(M_POP_00+M_POP_10+M_POP_20+M_POP_30+M_POP_40+M_POP_50+M_POP_60+M_POP_70+M_POP_80+M_POP_90+W_POP_00+W_POP_10+W_POP_20+W_POP_30+W_POP_40+W_POP_50+W_POP_60+W_POP_70+W_POP_80+W_POP_90) as total_pop,MEGA_CD,CELL_ID,LAT,LON',
        METHOD: '11', // Point 데이터로 반환
    }
};

/**
 * 지역 코드 매핑
 */
const REGION_CODES = {
    jeju: '50',
    seoul: '11',
    busan: '26',
    daegu: '27',
    incheon: '28',
    gwangju: '29',
    daejeon: '30',
    ulsan: '31',
    sejong: '36',
    gyeonggi: '41',
    gangwon: '42',
    chungbuk: '43',
    chungnam: '44',
    jeonbuk: '45',
    jeonnam: '46',
    gyeongbuk: '47',
    gyeongnam: '48',
    jeju_full: '50'
};

/**
 * URL 가져오기 함수
 */
function buildApiUrl(regionCode = '50') {
    const params = new URLSearchParams({
        ...API_CONFIG.params,
        WHERE: `mega_cd IN ('${regionCode}')`
    });

    return `${API_CONFIG.baseUrl}?${params.toString()}`;
}

/**
 * API 호출 및 데이터 가져오기
 */
async function fetchPopulationData(regionCode = '50') {
    const url = buildApiUrl(regionCode);
    
    console.log(`🔍 데이터 수집 시작: ${regionCode}`);
    console.log(`URL: ${url}`);

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'User-Agent': 'Mozilla/5.0'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type');
        
        // JSON 응답
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            return data;
        }

        // 텍스트 응답 (파이프 구분 데이터일 수 있음)
        const text = await response.text();
        
        // 파이프 구분 데이터 파싱 시도
        if (text.includes('|')) {
            return parsePipeDelimitedData(text);
        }

        // JSON 파싱 시도
        try {
            return JSON.parse(text);
        } catch (e) {
            console.warn('⚠️  JSON 파싱 실패, 원본 텍스트 반환');
            return { raw: text };
        }

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

    // 첫 줄을 헤더로 가정
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
 * 데이터 가공 및 형식화
 */
function processData(rawData) {
    const timestamp = new Date().toISOString();
    
    let points = [];

    // 배열인 경우
    if (Array.isArray(rawData)) {
        points = rawData.map(item => ({
            cell_id: item.CELL_ID || item.cell_id,
            region_code: item.MEGA_CD || item.mega_cd,
            latitude: parseFloat(item.LAT || item.lat),
            longitude: parseFloat(item.LON || item.lon),
            population: parseInt(item.total_pop || item.TOTAL_POP || 0),
            timestamp: timestamp
        }));
    }
    // 객체인 경우
    else if (rawData && typeof rawData === 'object') {
        // 원본 데이터를 그대로 포함
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

    return {
        timestamp: timestamp,
        region_code: '50',
        data_count: points.length,
        points: points,
        summary: {
            total_population: totalPopulation,
            avg_population: avgPopulation,
            max_population: Math.max(...points.map(p => p.population || 0)),
            min_population: Math.min(...points.map(p => p.population || 0))
        }
    };
}

/**
 * JSON 파일로 저장
 */
async function saveToFile(data, filename = null) {
    const outputDir = path.join(process.cwd(), 'output');
    
    // output 폴더가 없으면 생성
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
 * 메인 실행 함수
 */
async function collect(regionCode = '50') {
    try {
        console.log('\n🚀 실시간 유동인구 데이터 수집 시작...');
        console.log(`지역 코드: ${regionCode} (${getRegionName(regionCode)})\n`);

        // 1. 데이터 수집
        const rawData = await fetchPopulationData(regionCode);
        
        // 2. 데이터 가공
        const processedData = processData(rawData);

        // 3. 파일 저장
        const filepath = await saveToFile(processedData);

        // 4. 결과 출력
        console.log('\n📊 수집 결과:');
        console.log(`  - 데이터 개수: ${processedData.data_count}`);
        console.log(`  - 총 인구: ${processedData.summary.total_population.toLocaleString()}명`);
        console.log(`  - 평균 인구: ${processedData.summary.avg_population.toLocaleString()}명`);
        console.log(`  - 저장 경로: ${filepath}\n`);

        return processedData;

    } catch (error) {
        console.error(`\n❌ 수집 실패: ${error.message}`);
        throw error;
    }
}

/**
 * 지역 코드로 지역명 얻기
 */
function getRegionName(code) {
    const entry = Object.entries(REGION_CODES).find(([_, value]) => value === code);
    return entry ? entry[0] : 'unknown';
}

/**
 * 모듈로 사용 시
 */
export { collect, fetchPopulationData, processData, saveToFile, REGION_CODES };

/**
 * 직접 실행 시
 */
if (import.meta.url === `file://${process.argv[1]}`) {
    const regionCode = process.argv[2] || '50';
    collect(regionCode)
        .then(() => {
            console.log('✨ 수집 완료!');
            process.exit(0);
        })
        .catch((error) => {
            console.error('🚨 수집 실패:', error);
            process.exit(1);
        });
}
