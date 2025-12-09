// ui-manager.js
// -------------------------------------------------------------
// 이 파일은 UI 요소와 히트맵 엔진, API 클라이언트 사이의 연결을 담당합니다.
// - 버튼/셀렉트 박스/사이드바/정보창을 제어합니다.
// - 도메인 로직 (예: 통계 계산, 레이어 리스트 구성)을 포함합니다.

(function(window, document) {
    "use strict";

    // ---------------------------------------------------------
    // DOM 참조: 자주 사용하는 요소를 미리 찾아둡니다.
    // ---------------------------------------------------------
    var refreshBtn = document.getElementById("refreshBtn");
    var toggleLayerBtn = document.getElementById("toggleLayerBtn");
    var locationSelect = document.getElementById("locationSelect");
    var closeSidebarBtn = document.getElementById("closeSidebarBtn");

    var layerListEl = document.getElementById("layerList");
    var statsContainerEl = document.getElementById("statsContainer");

    var loadingIndicatorEl = document.getElementById("loadingIndicator");
    var infoWindowEl = document.getElementById("infoWindow");
    var infoTitleEl = document.getElementById("infoTitle");
    var infoBodyEl = document.getElementById("infoBody");

    var sidebarEl = document.querySelector(".sidebar");

    // ---------------------------------------------------------
    // 내부 상태: 현재 선택된 지역, 활성 레이어, 마지막 포인트 데이터 등
    // ---------------------------------------------------------
    var currentRegion = "";          // 예: "jeju", "seogwipo"
    var currentLayerConfig = null;    // Biz 설정에서 내려온 레이어 구성 정보
    var currentPointData = [];        // 마지막으로 로드된 포인트 배열

    // ---------------------------------------------------------
    // 통계 계산: 포인트 데이터를 기반으로 간단한 집계를 수행합니다.
    // ---------------------------------------------------------
    function calculateStats(points) {
        // 이 함수는 포인트 배열에서 총 개수, 평균 weight, 최고/최저 weight 등을 계산합니다.
        var totalCount = points.length;
        var sumWeight = 0;
        var maxWeight = 0;

        points.forEach(function(p) {
            var w = typeof p.weight === "number" ? p.weight : 1;
            sumWeight += w;
            if (w > maxWeight) maxWeight = w;
        });

        var avgWeight = totalCount > 0 ? (sumWeight / totalCount) : 0;

        return {
            totalCount: totalCount,
            avgWeight: avgWeight,
            maxWeight: maxWeight
        };
    }

    // ---------------------------------------------------------
    // 통계 UI 갱신: 계산된 통계를 화면에 출력합니다.
    // ---------------------------------------------------------
    function updateStatsUI(stats) {
        // stats는 { totalCount, avgWeight, maxWeight } 형태입니다.
        statsContainerEl.innerHTML = "";

        var items = [
            { label: "포인트 개수", value: stats.totalCount },
            { label: "평균 혼잡도", value: stats.avgWeight.toFixed(1) },
            { label: "최대 혼잡도", value: stats.maxWeight }
        ];

        items.forEach(function(item) {
            var div = document.createElement("div");
            div.className = "stat-item";

            var labelEl = document.createElement("div");
            labelEl.className = "stat-label";
            labelEl.textContent = item.label;

            var valueEl = document.createElement("div");
            valueEl.className = "stat-value";
            valueEl.textContent = item.value;

            div.appendChild(labelEl);
            div.appendChild(valueEl);
            statsContainerEl.appendChild(div);
        });
    }

    // ---------------------------------------------------------
    // 레이어 목록 UI 구성: Biz 설정 정보를 사용하여 체크박스 리스트 생성
    // ---------------------------------------------------------
    function updateLayerListUI(bizConfig) {
        // bizConfig는 getBiz.php에서 내려오는 레이어 구성 정보라고 가정합니다.
        // 이 함수는 각 레이어를 토글할 수 있는 체크박스 목록을 생성합니다.
        layerListEl.innerHTML = "";

        if (!bizConfig || !Array.isArray(bizConfig.layers)) return;

        bizConfig.layers.forEach(function(layer, index) {
            var item = document.createElement("div");
            item.className = "layer-item";

            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = true;
            checkbox.dataset.layerIndex = String(index);

            var label = document.createElement("label");
            label.className = "layer-label";
            label.textContent = layer.name || ("Layer " + (index + 1));

            // 체크박스를 클릭했을 때 레이어 토글
            checkbox.addEventListener("change", function() {
                // 실제 레이어 필터링 로직은 여기서 구현할 수 있습니다.
                // 지금은 단순히 콘솔만 출력합니다.
                console.log("레이어 토글", layer.name, checkbox.checked);
            });

            item.appendChild(checkbox);
            item.appendChild(label);
            layerListEl.appendChild(item);
        });
    }

    // ---------------------------------------------------------
    // 정보 창 표시: 특정 포인트에 대한 상세 정보를 보여줍니다.
    // ---------------------------------------------------------
    function showInfoWindow(point) {
        // point는 { content, label, weight, location } 형태입니다.
        // content 문자열을 사람이 읽기 쉬운 형태로 나누어 표시합니다.
        infoTitleEl.textContent = point.label || "상세 정보";

        var lines = (point.content || "").split("|");
        infoBodyEl.innerHTML = "";

        lines.forEach(function(line) {
            if (!line) return;
            var p = document.createElement("p");
            p.textContent = line;
            infoBodyEl.appendChild(p);
        });

        infoWindowEl.classList.remove("hidden");
    }

    function hideInfoWindow() {
        infoWindowEl.classList.add("hidden");
    }

    // ---------------------------------------------------------
    // 로딩 인디케이터 제어
    // ---------------------------------------------------------
    function showLoading() {
        loadingIndicatorEl.classList.remove("hidden");
    }

    function hideLoading() {
        loadingIndicatorEl.classList.add("hidden");
    }

    // ---------------------------------------------------------
    // 지역 선택 변경 핸들러: 셀렉트 박스 값에 따라 API 파라미터 업데이트
    // ---------------------------------------------------------
    function handleRegionChange() {
        currentRegion = locationSelect.value || "";
        // 지역이 바뀌면 즉시 데이터 새로 로드 요청
        window.AppController && window.AppController.refreshData();
    }

    // ---------------------------------------------------------
    // 사이드바 토글: 모바일에서만 사용 (CSS media query 참고)
    // ---------------------------------------------------------
    function toggleSidebar() {
        if (!sidebarEl) return;
        sidebarEl.classList.toggle("active");
    }

    // ---------------------------------------------------------
    // 외부에서 사용할 수 있도록 UI 관련 메소드를 노출합니다.
    // ---------------------------------------------------------
    window.UiManager = {
        calculateStats: calculateStats,
        updateStatsUI: updateStatsUI,
        updateLayerListUI: updateLayerListUI,
        showInfoWindow: showInfoWindow,
        hideInfoWindow: hideInfoWindow,
        showLoading: showLoading,
        hideLoading: hideLoading,
        toggleSidebar: toggleSidebar,
        getCurrentRegion: function() { return currentRegion; },
        setCurrentPointData: function(points) { currentPointData = points || []; },
        getCurrentPointData: function() { return currentPointData; }
    };

    // ---------------------------------------------------------
    // 이벤트 바인딩: DOM 요소에 클릭/변경 핸들러를 연결합니다.
    // ---------------------------------------------------------
    function bindEvents() {
        if (refreshBtn) {
            refreshBtn.addEventListener("click", function() {
                window.AppController && window.AppController.refreshData();
            });
        }

        if (toggleLayerBtn) {
            toggleLayerBtn.addEventListener("click", function() {
                toggleSidebar();
            });
        }

        if (locationSelect) {
            locationSelect.addEventListener("change", handleRegionChange);
        }

        if (closeSidebarBtn) {
            closeSidebarBtn.addEventListener("click", function() {
                sidebarEl && sidebarEl.classList.remove("active");
            });
        }

        if (infoWindowEl) {
            var closeBtn = infoWindowEl.querySelector(".close-btn");
            if (closeBtn) {
                closeBtn.addEventListener("click", hideInfoWindow);
            }
        }
    }

    // 초기 이벤트 바인딩 실행
    bindEvents();

})(window, document);
