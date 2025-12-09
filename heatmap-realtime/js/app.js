// app.js
// -------------------------------------------------------------
// 이 파일은 전체 앱의 진입점입니다.
// - Kakao 지도를 초기화합니다.
// - ApiClient를 통해 내부 API에서 데이터를 가져옵니다.
// - HeatmapEngine과 UiManager를 호출해서 히트맵과 UI를 갱신합니다.

(function (window, document) {
    "use strict";

    // ---------------------------------------------------------
    // Kakao 지도 초기화 관련 설정값입니다.
    // - centerLat/lng: 기본 중심 좌표 (제주도 대략 중앙)
    // - level: 줌 레벨 (숫자가 클수록 넓은 영역)
    // ---------------------------------------------------------
    var centerLat = 33.3846;
    var centerLng = 126.5535;
    var defaultLevel = 10;

    var map = null; // kakao.maps.Map 인스턴스를 저장할 변수

    // ---------------------------------------------------------
    // 지도 초기화 함수입니다.
    // - HTML에서 id가 "map"인 div를 찾아 Kakao 지도 객체를 생성합니다.
    // - HeatmapEngine.init을 호출해 히트맵 캔버스를 지도 위에 올립니다.
    // ---------------------------------------------------------
    function initMap() {
        var container = document.getElementById("map");
        if (!container) return;

        var options = {
            center: new kakao.maps.LatLng(centerLat, centerLng),
            level: defaultLevel
        };

        map = new kakao.maps.Map(container, options);

        // 히트맵 엔진 초기화
        if (window.HeatmapEngine) {
            window.HeatmapEngine.init(map, container);
        }

        // 첫 로딩 시 데이터 요청
        refreshData();
    }

    // ---------------------------------------------------------
    // 실시간 혼잡도 데이터를 내부 API에서 가져옵니다.
    // - ApiClient.getPoints를 호출하여 포인트 데이터를 가져옵니다.
    // - 데이터 형식은 { point: [{ content, label, weight, location }] } 형태를 기대합니다.
    // ---------------------------------------------------------
    function fetchRealtimePoints() {
        // 현재 선택된 지역을 UI에서 가져옵니다.
        var region = window.UiManager && window.UiManager.getCurrentRegion
            ? window.UiManager.getCurrentRegion()
            : "";

        // 내부 API 설계에 따라 table/where/columns를 구성합니다.
        // 여기서는 예시로 "stores" 테이블과 region_code 조건을 사용합니다.
        var params = {
            table: "stores",
            where: {},
            columns: ["name", "latitude", "longitude", "weight", "region_code"]
        };

        if (region) {
            params.where.region_code = region;
        }

        return window.ApiClient.getPoints(params);
    }

    // ---------------------------------------------------------
    // Biz 설정(레이어 구성)을 내부 API에서 가져옵니다.
    // - data.ijto.or.kr의 getBiz.php 역할을 하는 엔드포인트라고 가정합니다.
    // - UI의 레이어 리스트를 구성할 때 사용합니다.
    // ---------------------------------------------------------
    function fetchBizConfig() {
        // 예시로 "jeju_congestion"이라는 비즈 파일명을 사용합니다.
        return window.ApiClient.getBizConfig("jeju_congestion");
    }

    // ---------------------------------------------------------
    // 메인 새로고침 함수: "새로고침" 버튼과 지역 변경 이벤트에서 호출됩니다.
    // - 1단계: 로딩 인디케이터 표시
    // - 2단계: Biz 설정과 포인트 데이터를 병렬로 요청
    // - 3단계: 레이어 UI/히트맵/통계 갱신
    // ---------------------------------------------------------
    function refreshData() {
        if (!window.ApiClient || !window.HeatmapEngine || !window.UiManager) return;

        window.UiManager.showLoading();

        // Biz 설정과 포인트 데이터를 동시에 요청합니다.
        var bizPromise = fetchBizConfig();
        var pointsPromise = fetchRealtimePoints();

        Promise.all([bizPromise, pointsPromise])
            .then(function (results) {
                var bizConfig = results[0];
                var pointsResponse = results[1];

                // 포인트 배열 추출: { point: [...] } 형태를 가정합니다.
                var points = pointsResponse && pointsResponse.point
                    ? pointsResponse.point
                    : [];

                // UI 및 엔진 상태에 반영
                window.UiManager.setCurrentPointData(points);
                window.UiManager.updateLayerListUI(bizConfig);

                var stats = window.UiManager.calculateStats(points);
                window.UiManager.updateStatsUI(stats);

                window.HeatmapEngine.setPoints(points);
            })
            .catch(function (error) {
                console.error("데이터 로드 실패", error);
                alert("데이터를 불러오는 중 오류가 발생했습니다.");
            })
            .finally(function () {
                window.UiManager.hideLoading();
            });
    }

    // ---------------------------------------------------------
    // 카카오 지도 SDK 스크립트를 동적으로 로드하는 함수입니다.
    // - HTML에서 직접 script 태그를 쓰지 않고, JS로만 Kakao SDK를 로드합니다.
    // - appkey는 실제 서비스 키로 교체해야 합니다.
    // ---------------------------------------------------------
    function loadKakaoSdkAndInit() {
        var script = document.createElement("script");
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=6a1893d4524b57143bd18ba93baa7bda&autoload=false";
        script.onload = function () {
            // autoload=false로 설정했기 때문에, kakao.maps.load로 초기화를 해야 합니다.
            kakao.maps.load(function () {
                initMap();
            });
        };
        document.head.appendChild(script);
    }

    // ---------------------------------------------------------
    // 전역 컨트롤러 객체를 window에 노출합니다.
    // - UiManager나 다른 모듈에서 refreshData를 호출할 수 있도록 합니다.
    // ---------------------------------------------------------
    window.AppController = {
        refreshData: refreshData
    };

    // ---------------------------------------------------------
    // DOMContentLoaded 시점에 Kakao SDK를 로드합니다.
    // ---------------------------------------------------------
    document.addEventListener("DOMContentLoaded", function () {
        loadKakaoSdkAndInit();
    });

})(window, document);
