const fs = require('fs');

// 1. 헤더 설정 (쿠키 만료시 갱신 필요)
const HEADERS = {
    "accept": "*/*",
    "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    // ▼ 실행 시점의 유효한 쿠키를 넣어주세요
    "cookie": "SCOUTER=x1mv1hdlcq2sj7; JSESSIONID=eDcxytwYP7XFraZvGtd4qK5varGVWpKGlVfhMC7q; JEX_UI_UUID=d67de2fe-35e3-4fd5-866f-5f7f1b3a3f30",
    "Referer": "https://www.zeropay.or.kr/UI_HP_009_03.act"
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
    const allResults = [];
    const baseUrl = "https://www.zeropay.or.kr/UI_HP_009_03.jct";

    // 수집할 행정구역 목록 (제주시, 서귀포시)
    const districtList = ["제주시", "서귀포시"];

    console.log("🚀 제주도 제로페이 전체 가맹점 크롤링 시작...");

    // 1. 행정구역 루프 (제주시 -> 서귀포시)
    for (const gu of districtList) {
        console.log(`\n📌 [${gu}] 수집 시작`);
        let page = 1;
        let isFinish = false;

        // 2. 페이지 무한 루프 (데이터 없을 때까지)
        while (!isFinish) {

            // 요청 파라미터 구성
            const requestParams = {
                "AFLT_ADDR_CITY": "제주특별자치도",
                "AFLT_ADDR_GU": gu,       // 현재 순회 중인 구 (제주시 or 서귀포시)
                "AFLT_NM": "",
                "AFLT_ROAD_ADDR": "",
                "BIZ_TYPE_CD": "",
                "PAGE_NUM": String(page), // 페이지 번호 증가
                "TRX_TP": "01"
            };

            // 이중 인코딩 처리
            const jsonString = JSON.stringify(requestParams);
            const bodyData = new URLSearchParams();
            bodyData.append('_JSON_', encodeURIComponent(jsonString));

            try {
                const response = await fetch(baseUrl, {
                    method: "POST",
                    headers: HEADERS,
                    body: bodyData
                });

                if (!response.ok) {
                    console.error(`❌ 요청 실패 [${gu} - ${page}p]: ${response.status}`);
                    // 에러 발생 시 일단 다음 페이지 시도 or 종료 (여기선 안전하게 종료 처리)
                    isFinish = true;
                    continue;
                }

                const data = await response.json();

                // 3. 종료 조건 검사 및 데이터 저장
                // LIST2가 없거나 비어있으면 더 이상 데이터가 없는 것 -> 루프 종료
                if (data.LIST2 && Array.isArray(data.LIST2) && data.LIST2.length > 0) {
                    allResults.push(...data.LIST2);
                    // 진행 상황 로그 (너무 많으면 주석 처리 하세요)
                    if (page % 10 === 0) {
                        process.stdout.write(` [${page}p..]`);
                    }
                    page++; // 다음 페이지로 이동
                } else {
                    console.log(`\n✅ [${gu}] 수집 완료 (총 ${page - 1} 페이지)`);
                    isFinish = true; // while 루프 종료
                }

            } catch (error) {
                console.error(`\n❌ 에러 발생 [${gu} - ${page}p]:`, error.message);
                // 네트워크 에러 등이면 잠시 쉬었다 재시도 로직을 넣을 수도 있으나, 여기선 스킵
                isFinish = true;
            }

            // 서버 부하 방지 (너무 빠르면 차단될 수 있음)
            await sleep(200);
        }
    }

    // 4. 최종 결과 저장
    const fileName = 'zeropay_jeju_final.json';
    fs.writeFileSync(fileName, JSON.stringify(allResults, null, 2), 'utf8');

    console.log("\n------------------------------------------------");
    console.log(`🎉 모든 크롤링 종료!`);
    console.log(`총 데이터 건수: ${allResults.length}건`);
    console.log(`저장 파일명: ${fileName}`);
}

main();
