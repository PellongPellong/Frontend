// heatmap-engine.js
// -------------------------------------------------------------
// 이 파일은 실제 히트맵 렌더링 로직을 담당합니다.
// - data.ijto.or.kr에서 사용하던 HM_* 함수들의 개념을 단순화해서 구현합니다.
// - Kakao 지도 객체를 받아서, 포인트 데이터를 캔버스 오버레이로 그립니다.

(function(window, document) {
    "use strict";

    // ---------------------------------------------------------
    // 히트맵 엔진 상태: 지도, 캔버스, 포인트 데이터, 옵션 등을 보관합니다.
    // ---------------------------------------------------------
    var map = null;                 // kakao.maps.Map 인스턴스
    var canvas = null;              // 히트맵을 그릴 HTMLCanvasElement
    var ctx = null;                 // 2D 컨텍스트
    var points = [];                // { lat, lng, weight } 배열
    var maxWeight = 1;              // weight 정규화를 위한 최대값

    // 히트맵 옵션: 반경, 색상, 투명도 등
    var options = {
        radius: 25,                 // 각 포인트의 영향 반경 (픽셀 단위)
        maxOpacity: 0.8,            // 혼잡도 최고일 때의 최대 불투명도
        minOpacity: 0.0,            // 최소 불투명도
        blur: 0.8                   // 블러 강도 (0~1)
    };

    // ---------------------------------------------------------
    // 지도 좌표 → 캔버스 픽셀 좌표로 변환하는 헬퍼 함수입니다.
    // ---------------------------------------------------------
    function project(lat, lng) {
        if (!map) return { x: 0, y: 0 };
        var latlng = new kakao.maps.LatLng(lat, lng);
        var point = map.getProjection().pointFromCoords(latlng);

        var bounds = map.getBounds();
        var sw = bounds.getSouthWest();
        var ne = bounds.getNorthEast();

        var swPoint = map.getProjection().pointFromCoords(sw);
        var nePoint = map.getProjection().pointFromCoords(ne);

        var mapWidth = nePoint.x - swPoint.x;
        var mapHeight = swPoint.y - nePoint.y;

        var relX = (point.x - swPoint.x) / mapWidth;
        var relY = (swPoint.y - point.y) / mapHeight;

        var x = relX * canvas.width;
        var y = relY * canvas.height;

        return { x: x, y: y };
    }

    // ---------------------------------------------------------
    // 캔버스를 현재 map 컨테이너와 동일한 크기로 리사이즈합니다.
    // ---------------------------------------------------------
    function resizeCanvas() {
        if (!map || !canvas) return;

        var container = map.getNode();
        var width = container.clientWidth;
        var height = container.clientHeight;

        canvas.width = width;
        canvas.height = height;
    }

    // ---------------------------------------------------------
    // 색상 맵핑: 0~1 사이의 값을 그라디언트 색상으로 변환합니다.
    // - 낮은 값은 녹색, 중간은 노랑/주황, 높은 값은 빨강으로 매핑합니다.
    // ---------------------------------------------------------
    function getColorForValue(value) {
        // value: 0~1 사이 실수 (정규화된 혼잡도)
        var r = 0, g = 0, b = 0;

        if (value < 0.25) {
            // 0.0 ~ 0.25: 초록색 계열 (#00FF00)
            g = 255;
            r = Math.floor(255 * (value / 0.25));
        } else if (value < 0.5) {
            // 0.25 ~ 0.5: 노란색으로 이동 (#FFFF00)
            r = 255;
            g = 255;
        } else if (value < 0.75) {
            // 0.5 ~ 0.75: 주황색 (#FF8800)
            r = 255;
            g = Math.floor(255 * (1 - (value - 0.5) / 0.25));
        } else {
            // 0.75 ~ 1.0: 빨간색 (#FF0000)
            r = 255;
            g = 0;
        }

        return { r: r, g: g, b: b };
    }

    // ---------------------------------------------------------
    // 히트맵 렌더링: 현재 points 배열을 바탕으로 캔버스에 그립니다.
    // - 1단계: 캔버스 초기화
    // - 2단계: 각 포인트에 대해 그라디언트 원을 그림
    // - 3단계: 알파값을 기반으로 색상 적용
    // ---------------------------------------------------------
    function render() {
        if (!canvas || !ctx || !map) return;

        resizeCanvas();

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (points.length === 0) return;

        // 임시 캔버스를 사용하여 알파 채널을 계산하고, 나중에 색상을 입힙니다.
        var tempCanvas = document.createElement("canvas");
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        var tempCtx = tempCanvas.getContext("2d");

        // 각 포인트에 대해 그라디언트 원을 그림
        points.forEach(function(p) {
            var projected = project(p.lat, p.lng);
            var value = maxWeight > 0 ? (p.weight / maxWeight) : 0;
            var radius = options.radius;

            var gradient = tempCtx.createRadialGradient(
                projected.x,
                projected.y,
                0,
                projected.x,
                projected.y,
                radius
            );

            gradient.addColorStop(0, "rgba(0, 0, 0," + options.maxOpacity * value + ")");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

            tempCtx.fillStyle = gradient;
            tempCtx.fillRect(
                projected.x - radius,
                projected.y - radius,
                radius * 2,
                radius * 2
            );
        });

        // 블러 효과: 간단히 캔버스 자체에 가우시안 비슷한 효과를 주기 위해 shadow를 활용할 수 있으나,
        // 여기서는 기본 드로잉만 구현합니다. 필요시 확장 가능합니다.

        var imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);
        var data = imageData.data;

        // 알파 채널을 기반으로 색상을 입히는 루프
        for (var i = 0; i < data.length; i += 4) {
            var alpha = data[i + 3] / 255; // 0~1
            if (alpha <= 0) continue;

            var color = getColorForValue(alpha);
            data[i] = color.r;
            data[i + 1] = color.g;
            data[i + 2] = color.b;
            data[i + 3] = Math.floor(alpha * 255);
        }

        ctx.putImageData(imageData, 0, 0);
    }

    // ---------------------------------------------------------
    // 포인트 데이터 설정: 외부에서 새로운 포인트 배열을 전달할 때 사용합니다.
    // - points 배열은 [{ location: [lng, lat], weight, content, label }] 구조를 가정합니다.
    // - HM_createPointFromDataString의 개념을 바닐라 객체 기반으로 재구현한 셈입니다.
    // ---------------------------------------------------------
    function setPoints(pointArray) {
        points = [];
        maxWeight = 1;

        if (!Array.isArray(pointArray)) return;

        pointArray.forEach(function(p) {
            if (!p || !p.location || p.location.length !== 2) return;
            var lng = p.location[0];
            var lat = p.location[1];
            var weight = typeof p.weight === "number" ? p.weight : 1;

            points.push({ lat: lat, lng: lng, weight: weight, raw: p });
            if (weight > maxWeight) maxWeight = weight;
        });

        render();
    }

    // ---------------------------------------------------------
    // 히트맵 초기화: Kakao Map 위에 캔버스 레이어를 하나 올립니다.
    // ---------------------------------------------------------
    function initHeatmap(kakaoMap, containerEl) {
        // kakaoMap: kakao.maps.Map 인스턴스
        // containerEl: 지도가 들어있는 DOM 요소 (예: document.getElementById('map'))
        map = kakaoMap;

        canvas = document.createElement("canvas");
        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.pointerEvents = "none"; // 클릭 이벤트를 지도에 그대로 전달하기 위해

        containerEl.appendChild(canvas);
        ctx = canvas.getContext("2d");

        resizeCanvas();

        // 지도 이동/줌 변경 시 히트맵 재렌더링
        kakao.maps.event.addListener(map, "zoom_changed", render);
        kakao.maps.event.addListener(map, "center_changed", render);
    }

    // ---------------------------------------------------------
    // 외부에서 사용할 수 있도록 전역 객체로 노출합니다.
    // ---------------------------------------------------------
    window.HeatmapEngine = {
        init: initHeatmap,
        setPoints: setPoints,
        render: render
    };

})(window, document);
