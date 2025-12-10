// api-client.js
// -------------------------------------------------------------
// 원본 data.ijto.or.kr API 서버와 직접 통신합니다.
// - mms.gislab.co.kr:444 (Biz 파일)
// - heatmap2021.geocoding.kr (마스크 데이터)
// -------------------------------------------------------------

(function(window) {
    "use strict";

    // ---------------------------------------------------------
    // 원본 API 서버 URL 정의
    // ---------------------------------------------------------
    var BIZ_API_URL = "https://mms.gislab.co.kr:444/heatmap_api";
    var MASK_API_URL = "https://heatmap2021.geocoding.kr/mms";

    // ---------------------------------------------------------
    // 공통 fetch 래퍼: 에러 처리와 JSON 변환을 담당합니다.
    // ---------------------------------------------------------
    function request(url, options) {
        return fetch(url, options).then(function(response) {
            if (!response.ok) {
                throw new Error("API 요청 실패: " + response.status + " " + response.statusText);
            }

            var contentType = response.headers.get("Content-Type") || "";
            if (contentType.indexOf("application/json") !== -1) {
                return response.json();
            }

            return response.text();
        });
    }

    // ---------------------------------------------------------
    // 테이블 목록 조회: 원본 API의 tb_list.txt
    // ---------------------------------------------------------
    function getTableList() {
        var url = BIZ_API_URL + "/tb_list.txt";
        return request(url, {
            method: "GET",
            mode: "cors",
            credentials: "omit"
        }).then(function(text) {
            // 파이프 구분 텍스트를 파싱하여 배열로 변환
            var lines = text.split("\n").filter(function(line) {
                return line.trim() !== "";
            });

            return lines.map(function(line) {
                var parts = line.split("#|#");
                return {
                    name: parts[0] || "",
                    columns: parts[1] ? parts[1].split("|") : [],
                    whereColumns: parts[2] ? parts[2].split("|") : []
                };
            });
        });
    }

    // ---------------------------------------------------------
    // Biz 설정 조회: 레이어/범례/심볼 정보 반환
    // 예: getBiz.php?FILE=mms1_any_mega.biz
    // ---------------------------------------------------------
    function getBizConfig(fileName) {
        if (!fileName) {
            fileName = "mms1_any_mega.biz"; // 기본값
        }

        var url = BIZ_API_URL + "/biz/getBiz.php?FILE=" + encodeURIComponent(fileName);
        
        return request(url, {
            method: "GET",
            mode: "cors",
            credentials: "omit",
            headers: {
                "accept": "*/*"
            }
        });
    }

    // ---------------------------------------------------------
    // 포인트 데이터 조회
    // 원본 API는 직접 포인트 데이터를 제공하지 않고,
    // Biz 파일 내부에서 데이터 소스를 정의합니다.
    // 
    // 임시로 목업 데이터를 반환하거나,
    // 실제 원본 API의 데이터 엔드포인트가 있다면 여기서 호출합니다.
    // ---------------------------------------------------------
    function getPoints(params) {
        // 원본 API에서 실시간 포인트 데이터를 제공하는 엔드포인트가 있다면 사용
        // 현재는 목업 데이터를 반환합니다.
        
        console.warn("getPoints: 원본 API에 실시간 포인트 엔드포인트가 없어 목업 데이터 사용");
        
        // 제주 주요 관광지 샘플 데이터
        var mockPoints = [
            {
                content: "성산일출봉",
                label: "성산일출봉",
                weight: 85,
                location: [126.9419, 33.4595]
            },
            {
                content: "한라산",
                label: "한라산",
                weight: 72,
                location: [126.5333, 33.3616]
            },
            {
                content: "제주공항",
                label: "제주공항",
                weight: 90,
                location: [126.4930, 33.5066]
            },
            {
                content: "중문관광단지",
                label: "중문관광단지",
                weight: 68,
                location: [126.4167, 33.2500]
            },
            {
                content: "애월해안도로",
                label: "애월해안도로",
                weight: 55,
                location: [126.3194, 33.4647]
            },
            {
                content: "우도",
                label: "우도",
                weight: 45,
                location: [126.9508, 33.5022]
            },
            {
                content: "섭지코지",
                label: "섭지코지",
                weight: 62,
                location: [126.9289, 33.4242]
            },
            {
                content: "함덕해수욕장",
                label: "함덕해수욕장",
                weight: 58,
                location: [126.6694, 33.5433]
            }
        ];

        return Promise.resolve({
            point: mockPoints
        });
    }

    // ---------------------------------------------------------
    // 마스크 데이터 조회: 특정 영역을 제외하거나 강조할 때 사용
    // 예: getList.php?FILE=mms_mask_설정을위한_제외리스트_광역&WHERE=50
    // ---------------------------------------------------------
    function getMask(fileName, regionCode) {
        if (!fileName) {
            fileName = "mms_mask_설정을위한_제외리스트_광역";
        }
        if (!regionCode) {
            regionCode = "50"; // 제주도 코드
        }

        var url = MASK_API_URL + "/getList.php?FILE=" + 
                  encodeURIComponent(fileName) + 
                  "&WHERE=" + encodeURIComponent(regionCode);
        
        return request(url, {
            method: "GET",
            mode: "cors",
            credentials: "omit",
            headers: {
                "accept": "*/*",
                "cache-control": "no-cache",
                "pragma": "no-cache"
            }
        });
    }

    // ---------------------------------------------------------
    // 커스텀 데이터 업로드: 원본 API에는 없는 기능
    // 향후 내부 백엔드 구축 시 사용
    // ---------------------------------------------------------
    function uploadCustomLayer(layerName, points) {
        console.warn("uploadCustomLayer: 원본 API에는 업로드 기능이 없습니다.");
        return Promise.reject(new Error("Not implemented"));
    }

    // ---------------------------------------------------------
    // 외부에서 사용할 수 있도록 API 클라이언트를 window에 노출합니다.
    // ---------------------------------------------------------
    window.ApiClient = {
        getTableList: getTableList,
        getBizConfig: getBizConfig,
        getPoints: getPoints,
        getMask: getMask,
        uploadCustomLayer: uploadCustomLayer
    };

})(window);
