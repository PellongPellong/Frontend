// app.js
// -------------------------------------------------------------
// 이 파일은 전체 앱의 진입점입니다.
// - Kakao 지도를 초기화합니다.
// - XRayMap 라이브러리를 사용하여 Biz 파일을 로드합니다.
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
    var BIZ_FILE_NAME = "mms1_any_mega.biz";
    var REGION_CODE = "50"; // 제주도 코드

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

        // 히트맵 엔진 초기화 (원본 라이브러리가 있으면 생략 가능)
        if (window.HeatmapEngine) {
            window.HeatmapEngine.init(map, container);
        }

        // XRayMap 라이브러리를 사용하여 Biz 파일 로드
        loadBizFileWithXRayMap();

        // 포인트 데이터 로드
        refreshData();
    }

    // ---------------------------------------------------------
    // XRayMap 라이브러리를 사용하여 Biz 파일 로드
    // ---------------------------------------------------------
    function loadBizFileWithXRayMap() {
        var bizUrl = BIZ_API_URL + "/biz/getBiz.php?FILE=" + encodeURIComponent(BIZ_FILE_NAME);
        
        console.log("📄 Biz 파일 로드 시도:", bizUrl);

        // XRayMap 라이브러리 함수가 있는지 확인
        if (typeof window.HM_loadLayersByUrlFileAndRepalceTag === 'function') {
            console.log("✅ XRayMap 라이브러리 발견! 원본 방식으로 로드합니다.");
            
            // 원본 라이브러리 호출
            // 파라미터: (bizUrl, placeholderKey, replacementValue)
            window.HM_loadLayersByUrlFileAndRepalceTag(bizUrl, '#CD#', REGION_CODE);
            
            // 추가 플레이스홀더 치환 (필요시)
            // #COMPANY_ID# 같은 다른 플레이스홀더가 있다면 여기서 처리
            
            console.log("✅ Biz 파일 로드 완료");
        } else if (window.HeatmapEngine && window.HeatmapEngine.loadBizFile) {
            // XRayMap 라이브러리가 없으면 자체 구현 사용
            console.warn("⚠️ XRayMap 라이브러리가 없습니다. 자체 파싱을 사용합니다.");
            window.HeatmapEngine.loadBizFile(bizUrl);
        } else {
            console.error("🚨 Biz 파일을 로드할 방법이 없습니다!");
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
        if (!window.ApiClient || !window.UiManager) return;

        window.UiManager.showLoading();

        // 포인트 데이터만 가져옵니다 (Biz는 loadBizFileWithXRayMap에서 별도 처리)
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

                // 히트맵 엔진에 포인트 전달 (자체 HeatmapEngine 사용 시)
                if (window.HeatmapEngine && window.HeatmapEngine.setPoints) {
                    window.HeatmapEngine.setPoints(points);
                }
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
        loadBizFile: loadBizFileWithXRayMap
    };

    // ---------------------------------------------------------
    // DOMContentLoaded 시점에 Kakao SDK를 로드합니다.
    // ---------------------------------------------------------
    document.addEventListener("DOMContentLoaded", function () {
        loadKakaoSdkAndInit();
    });

})(window, document);
