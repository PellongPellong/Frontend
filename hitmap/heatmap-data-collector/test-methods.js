// test-methods.js
// METHOD 값을 바꿔가며 API 응답 테스트

const https = require('https');

/**
 * BASE64 인코딩된 파라미터로 API 호출
 */
function testMethod(method) {
    return new Promise((resolve, reject) => {
        // 기본 파라미터
        const params = [
            'GET=TRUE',
            'DB=sql_file',
            'TABLE=mms_cell_new_최신유동인구',
            'SELECT=(M_POP_00+M_POP_10+M_POP_20+M_POP_30+M_POP_40+M_POP_50+M_POP_60+M_POP_70+M_POP_80+M_POP_90+W_POP_00+W_POP_10+W_POP_20+W_POP_30+W_POP_40+W_POP_50+W_POP_60+W_POP_70+W_POP_80+W_POP_90)',
            'CUSTOM_SQL_TAG=논산시계룡시금산군|',
            `WHERE=mega_cd IN ('50')`,
            `METHOD=${method}`,
            'CLASS_MODE=3',
            'CLASS_CNT=10',
            'COLOR_RAMP=YlOrRd',
            'COLOR_REVERSE=TRUE',
            'EXTENT_PRJ=3',
            'SEARCH_R=10',
            'BOTTOM_X=126.365',
            'BOTTOM_Y=33.192',
            'TOP_X=126.979',
            'TOP_Y=33.557',
            'W=894',
            'H=630'
        ].join('&');

        // BASE64 인코딩
        const base64 = Buffer.from(params).toString('base64');
        const url = `https://mms.gislab.co.kr:444/heatmap_api/php/API.php?BASE64=${base64}`;

        console.log(`\n🔍 METHOD=${method} 테스트 중...`);

        https.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                const contentType = res.headers['content-type'] || '';
                const size = Buffer.byteLength(data);
                
                // 결과 분석
                const result = {
                    method: method,
                    statusCode: res.statusCode,
                    contentType: contentType,
                    size: size,
                    preview: data.substring(0, 200)
                };

                // 성공 판단
                if (res.statusCode === 200) {
                    if (contentType.includes('json')) {
                        console.log(`✅ METHOD=${method}: JSON 응답! (${size} bytes)`);
                        result.success = true;
                        result.dataType = 'JSON';
                    } else if (contentType.includes('image')) {
                        console.log(`🖼️ METHOD=${method}: 이미지 응답 (${size} bytes)`);
                        result.success = true;
                        result.dataType = 'IMAGE';
                    } else if (data.includes('|')) {
                        console.log(`📊 METHOD=${method}: 파이프 구분 데이터! (${size} bytes)`);
                        result.success = true;
                        result.dataType = 'PIPE';
                    } else if (data.includes('ERROR')) {
                        console.log(`❌ METHOD=${method}: 에러 - ${data.substring(0, 100)}`);
                        result.success = false;
                        result.error = data.substring(0, 100);
                    } else {
                        console.log(`⚠️ METHOD=${method}: 알 수 없는 형식 (${size} bytes)`);
                        result.success = false;
                        result.dataType = 'UNKNOWN';
                    }
                } else {
                    console.log(`❌ METHOD=${method}: HTTP ${res.statusCode}`);
                    result.success = false;
                }

                resolve(result);
            });
        }).on('error', (err) => {
            console.log(`❌ METHOD=${method}: 네트워크 에러 - ${err.message}`);
            resolve({
                method: method,
                success: false,
                error: err.message
            });
        });
    });
}

/**
 * 여러 METHOD를 순차적으로 테스트
 */
async function testMultipleMethods(methods) {
    console.log('🚀 API METHOD 테스트 시작...\n');
    console.log(`테스트할 METHOD: ${methods.join(', ')}\n`);

    const results = [];

    for (const method of methods) {
        const result = await testMethod(method);
        results.push(result);
        
        // API 부하 방지 (0.5초 대기)
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    // 결과 요약
    console.log('\n\n' + '='.repeat(80));
    console.log('📊 테스트 결과 요약');
    console.log('='.repeat(80) + '\n');

    const successful = results.filter(r => r.success);
    const jsonResults = results.filter(r => r.dataType === 'JSON');
    const pipeResults = results.filter(r => r.dataType === 'PIPE');
    const imageResults = results.filter(r => r.dataType === 'IMAGE');

    console.log(`✅ 성공: ${successful.length}/${results.length}`);
    console.log(`📊 JSON 응답: ${jsonResults.length}개`);
    console.log(`📄 파이프 구분: ${pipeResults.length}개`);
    console.log(`🖼️ 이미지: ${imageResults.length}개`);

    if (jsonResults.length > 0) {
        console.log('\n🎉 JSON 응답을 받은 METHOD:');
        jsonResults.forEach(r => {
            console.log(`   - METHOD=${r.method} (${r.size} bytes)`);
        });
    }

    if (pipeResults.length > 0) {
        console.log('\n📊 파이프 구분 데이터를 받은 METHOD:');
        pipeResults.forEach(r => {
            console.log(`   - METHOD=${r.method} (${r.size} bytes)`);
            console.log(`     Preview: ${r.preview.substring(0, 100)}...`);
        });
    }

    return results;
}

/**
 * 메인 실행
 */
async function main() {
    // 테스트할 METHOD 목록
    const methodsToTest = [
        // 알려진 METHOD
        1,   // 히트맵 이미지
        11,  // 우리가 시도했던 것
        51,  // Polygon/Point
        
        // 추가 후보
        2, 3, 4, 5, 6, 7, 8, 9, 10,
        12, 13, 14, 15,
        21, 22, 23, 24, 25,
        31, 32, 33,
        41, 42,
        52, 53,
        61, 71, 81, 91,
        99, 100, 101
    ];

    const results = await testMultipleMethods(methodsToTest);

    // 결과를 JSON 파일로 저장
    const fs = require('fs');
    const outputPath = './output/method-test-results.json';
    
    fs.mkdirSync('./output', { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
    
    console.log(`\n\n💾 결과 저장: ${outputPath}`);
}

// 실행
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { testMethod, testMultipleMethods };
