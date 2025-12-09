// api-client.js
// -------------------------------------------------------------
// 이 파일은 백엔드 내부 API와 통신하는 책임만 가집니다.
// - fetch 기반으로 구현하고, Axios 등 외부 라이브러리는 사용하지 않습니다.
// - 실제 배포 시에는 BASE_URL만 바꿔서 사용할 수 있도록 설계합니다.

(function(window) {
    "use strict";

    // ---------------------------------------------------------
    // 내부 API의 기본 URL을 정의합니다.
    // ---------------------------------------------------------
    var BASE_URL = "/api/heatmap"; // 예: /api/heatmap/tb_list, /api/heatmap/getPoints 등

    // ---------------------------------------------------------
    // 공통 fetch 래퍼: 에러 처리와 JSON 변환을 담당합니다.
    // ---------------------------------------------------------
    function request(path, options) {
        // path: "/tb_list" 처럼 베이스 URL 이후 경로
        // options: fetch 옵션 (method, headers, body 등)
        var url = BASE_URL + path;

        return fetch(url, options).then(function(response) {
            if (!response.ok) {
                // HTTP 상태 코드가 200-299가 아니면 에러로 처리
                throw new Error("API 요청 실패: " + response.status + " " + response.statusText);
            }

            // JSON 응답을 기대하는 경우
            var contentType = response.headers.get("Content-Type") || "";
            if (contentType.indexOf("application/json") !== -1) {
                return response.json();
            }

            // 텍스트 응답인 경우 그대로 반환
            return response.text();
        });
    }

    // ---------------------------------------------------------
    // 테이블 목록 조회: tb_list.txt 역할을 내부 API로 구현한다고 가정합니다.
    // ---------------------------------------------------------
    function getTableList() {
        // GET /tb_list 요청 후, 서버에서 pipe 형태가 아니라 JSON으로 내려준다고 가정합니다.
        return request("/tb_list", {
            method: "GET"
        });
    }

    // ---------------------------------------------------------
    // Biz 설정 조회: 레이어/범례/심볼 정보 반환
    // ---------------------------------------------------------
    function getBizConfig(fileName) {
        // GET /getBiz?file={name}
        var query = "?file=" + encodeURIComponent(fileName || "");
        return request("/getBiz" + query, {
            method: "GET"
        });
    }

    // ---------------------------------------------------------
    // 포인트 데이터 조회: 실시간 혼잡도 데이터를 가져옵니다.
    // ---------------------------------------------------------
    function getPoints(params) {
        // params: { table, where, columns }
        // POST /getPoints
        return request("/getPoints", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params || {})
        });
    }

    // ---------------------------------------------------------
    // 마스크 데이터 조회: 특정 영역을 제외하거나 강조할 때 사용합니다.
    // ---------------------------------------------------------
    function getMask(fileName, regionCode) {
        // GET /getMask?file={fileName}&where={regionCode}
        var query = "?file=" + encodeURIComponent(fileName || "") +
                    "&where=" + encodeURIComponent(regionCode || "");

        return request("/getMask" + query, {
            method: "GET"
        });
    }

    // ---------------------------------------------------------
    // 커스텀 데이터 업로드: 추후 관리자 페이지 등에서 활용 가능
    // ---------------------------------------------------------
    function uploadCustomLayer(layerName, points) {
        // POST /uploadData
        var payload = {
            layerName: layerName,
            points: points || []
        };

        return request("/uploadData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
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
