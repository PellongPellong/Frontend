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
    // Promise.finally polyfill (구형 브라우저 지원)
    // ---------------------------------------------------------
    if (!Promise.prototype.finally) {
        Promise.prototype.finally = function(callback) {
            return this.then(
                function(value) {
                    return Promise.resolve(callback()).then(function() {
                        return value;
                    });
                },
                function(reason) {
                    return Promise.resolve(callback()).then(function() {
                        throw reason;
                    });
                }
            );
        };
    }

    // ---------------------------------------------------------
    // Kakao 지도 초기화 관련 설정값입니다.
    // ---------------------------------------------------------
    var centerLat = 33.3846;
    var centerLng = 126.5535;
    var defaultLevel = 10;

    var map = null;
    var mapContainer = null;

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
        mapContainer = document.getElementById("map");
        if (!mapContainer) {
            console.error('❌ #map 요소를 찾을 수 없습니다!');
            return;
        }

        var options = {
            center: new kakao.maps.LatLng(centerLat, centerLng),
            level: defaultLevel
        };

        map = new kakao.maps.Map(mapContainer, options);
        
        // XRayMap이 사용하는 전역 변수들 설정
        window.map = map;
        window.div_map = mapContainer;
        window.h_oMap = map;          // XRayMap 필수!
        window.h_divMap = mapContainer; // XRayMap 필수!
        
        console.log('✅ Kakao 지도 초기화 완료');

        // XRayMap 라이브러리를 사용하여 Biz 파일 로드
        setTimeout(function() {
            loadBizFileWithXRayMap();
        }, 100);

        // 포인트 데이터 로드
        refreshData();
    }

    // ---------------------------------------------------------
    // XRayMap 라이브러리를 사용하여 Biz 파일 로드
    // ---------------------------------------------------------
    function loadBizFileWithXRayMap() {
        if (!window.map || !window.div_map) {
            console.error('❌ 지도 객체가 아직 준비되지 않았습니다.');
            setTimeout(loadBizFileWithXRayMap, 100);
            return;
        }

        var bizUrl = BIZ_API_URL + "/biz/getBiz.php?FILE=" + encodeURIComponent(BIZ_FILE_NAME);
        
        console.log("📄 Biz 파일 로드 시도:", bizUrl);

        if (typeof window.HM_loadLayersByUrlFileAndRepalceTag === 'function') {
            console.log("✅ XRayMap 라이브러리로 히트맵 로드 시작");
            
            try {
                window.HM_loadLayersByUrlFileAndRepalceTag(bizUrl, '#CD#', REGION_CODE);
                console.log("✅ Biz 파일 로드 완료");
            } catch (error) {
                console.error("🚨 XRayMap 호출 중 오류:", error);
            }
        } else {
            console.error("🚨 XRayMap 라이브러리가 로드되지 않았습니다!");
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
        if (!window.ApiClient || !window.UiManager) {
            console.warn('⚠️ ApiClient 또는 UiManager가 로드되지 않았습니다.');
            return;
        }

        // 로딩 표시는 생략 (히트맵 라이브러리가 자체 로딩 표시)
        // window.UiManager.showLoading();

        fetchRealtimePoints()
            .then(function (pointsResponse) {
                var points = pointsResponse && pointsResponse.point
                    ? pointsResponse.point
                    : [];

                console.log("✅ 포인트 데이터 로드 성공:", points.length + "개");

                window.UiManager.setCurrentPointData(points);
                var stats = window.UiManager.calculateStats(points);
                window.UiManager.updateStatsUI(stats);
            })
            .catch(function (error) {
                console.error("🚨 데이터 로드 실패", error);
            })
            .finally(function () {
                // window.UiManager.hideLoading();
            });
    }

    // ---------------------------------------------------------
    // 카카오 지도 SDK 를 동적으로 로드하는 함수
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
    // 전역 컨트롤러
    // ---------------------------------------------------------
    window.AppController = {
        refreshData: refreshData,
        loadBizFile: loadBizFileWithXRayMap
    };

    // ---------------------------------------------------------
    // DOMContentLoaded 시점에 초기화
    // ---------------------------------------------------------
    document.addEventListener("DOMContentLoaded", function () {
        loadKakaoSdkAndInit();
    });

})(window, document);
