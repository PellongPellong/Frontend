// app.js
// -------------------------------------------------------------
// 이 파일은 전체 앱의 진입점입니다.
// - Kakao 지도를 초기화합니다.
// - 원본 API의 Biz 파일 URL을 HeatmapEngine에 전달합니다.
// - 포인트 데이터를 가져와서 히트맵에 표시합니다.
// -------------------------------------------------------------

(function (window, document) {
    "use strict";

    // ---------------------------------------------------------
    // Kakao 지도 초기화 관련 설정값입니다.
    // ---------------------------------------------------------
    var centerLat = 33.3846;
    var centerLng = 126.5535;
    var defaultLevel = 10;

    var map = null;

    // ---------------------------------------------------------
    // 원본 API 설정
    // ---------------------------------------------------------
    var BIZ_API_URL = "https://mms.gislab.co.kr:444/heatmap_api";
    var BIZ_FILE_NAME = "mms1_any_mega.biz"; // 실제 사용하는 Biz 파일명

    // ---------------------------------------------------------
    // 지도 초기화 함수
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
            
            // Biz 파일 URL을 직접 로드
            loadBizFile();
        }

        // 포인트 데이터 로드
        refreshData();
    }

    // ---------------------------------------------------------
    // Biz 파일 로드
    // HeatmapEngine이 내부적으로 Biz 파일을 처리하도록 URL만 전달합니다.
    // ---------------------------------------------------------
    function loadBizFile() {
        // 원본 API의 Biz 파일 전체 URL
        var bizUrl = BIZ_API_URL + "/biz/getBiz.php?FILE=" + encodeURIComponent(BIZ_FILE_NAME);
        
        console.log("📄 Biz 파일 로드 시도:", bizUrl);

        // HeatmapEngine이 XRayMap 라이브러리 함수를 사용하는 경우
        if (typeof HM_loadLayersByUrlFileAndRepalceTag === 'function') {
            // 원본 방식: HM_loadLayersByUrlFileAndRepalceTag 사용
            HM_loadLayersByUrlFileAndRepalceTag(bizUrl, '#CD#', '50'); // 50은 제주 지역코드
            console.log("✅ HM_loadLayersByUrlFileAndRepalceTag 호출 완료");
        } else {
            // 자체 HeatmapEngine을 사용하는 경우
            if (window.HeatmapEngine && window.HeatmapEngine.loadBizFile) {
                window.HeatmapEngine.loadBizFile(bizUrl);
                console.log("✅ HeatmapEngine.loadBizFile 호출 완료");
            } else {
                console.warn("⚠️ HeatmapEngine에 Biz 로딩 함수가 없습니다.");
            }
        }
    }

    // ---------------------------------------------------------
    // 실시간 혼잡도 데이터를 가져옵니다.
    // ---------------------------------------------------------
    function fetchRealtimePoints() {
        var region = window.UiManager && window.UiManager.getCurrentRegion
            ? window.UiManager.getCurrentRegion()
            : "";

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
    // 메인 새로고침 함수
    // ---------------------------------------------------------
    function refreshData() {
        if (!window.ApiClient || !window.HeatmapEngine || !window.UiManager) return;

        window.UiManager.showLoading();

        // 포인트 데이터만 가져옵니다 (Biz는 loadBizFile에서 별도 처리)
        fetchRealtimePoints()
            .then(function (pointsResponse) {
                var points = pointsResponse && pointsResponse.point
                    ? pointsResponse.point
                    : [];

                console.log("✅ 포인트 데이터 로드 성공:", points.length + "개");

                // UI 및 엔진 상태에 반영
                window.UiManager.setCurrentPointData(points);

                var stats = window.UiManager.calculateStats(points);
                window.UiManager.updateStatsUI(stats);

                // 히트맵 엔진에 포인트 전달
                window.HeatmapEngine.setPoints(points);
            })
            .catch(function (error) {
                console.error("🚨 데이터 로드 실패", error);
                
                var errorMsg = "데이터를 불러오는 중 오류가 발생했습니다.";
                if (error.message && error.message.indexOf("CORS") !== -1) {
                    errorMsg += "\n\nCORS 오류가 발생했습니다. 프록시 서버를 사용해주세요.";
                }
                alert(errorMsg);
            })
            .finally(function () {
                window.UiManager.hideLoading();
            });
    }

    // ---------------------------------------------------------
    // 카카오 지도 SDK 스크립트를 동적으로 로드하는 함수입니다.
    // ---------------------------------------------------------
    function loadKakaoSdkAndInit() {
        var script = document.createElement("script");
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=6a1893d4524b57143bd18ba93baa7bda&autoload=false";
        script.onload = function () {
            kakao.maps.load(function () {
                initMap();
            });
        };
        document.head.appendChild(script);
    }

    // ---------------------------------------------------------
    // 전역 컨트롤러 객체를 window에 노출합니다.
    // ---------------------------------------------------------
    window.AppController = {
        refreshData: refreshData,
        loadBizFile: loadBizFile
    };

    // ---------------------------------------------------------
    // DOMContentLoaded 시점에 Kakao SDK를 로드합니다.
    // ---------------------------------------------------------
    document.addEventListener("DOMContentLoaded", function () {
        loadKakaoSdkAndInit();
    });

})(window, document);
