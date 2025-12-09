// heatmap-engine.js
// -------------------------------------------------------------
// 이 파일은 실제 히트맵 렌더링 로직을 담당합니다.
// - data.ijto.or.kr에서 사용하던 HM_* 함수들의 개념을 단순화해서 구현합니다.
// - Kakao 지도 객체를 받아서, 포인트 데이터를 캔버스 오버레이로 그립니다.
// - Biz 파일을 로드하여 레이어 설정을 처리합니다.

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
    var bizLayers = [];             // Biz 파일에서 로드한 레이어 정보

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
    // - 낮은 값은 녹색, 중간은 노랑/주황, 높은 값은 빨강으로 맵핑합니다.
    // ---------------------------------------------------------
    function getColorForValue(value) {
        var r = 0, g = 0, b = 0;

        if (value < 0.25) {
            g = 255;
            r = Math.floor(255 * (value / 0.25));
        } else if (value < 0.5) {
            r = 255;
            g = 255;
        } else if (value < 0.75) {
            r = 255;
            g = Math.floor(255 * (1 - (value - 0.5) / 0.25));
        } else {
            r = 255;
            g = 0;
        }

        return { r: r, g: g, b: b };
    }

    // ---------------------------------------------------------
    // 히트맵 렌더링: 현재 points 배열을 바탕으로 캔버스에 그립니다.
    // ---------------------------------------------------------
    function render() {
        if (!canvas || !ctx || !map) return;

        resizeCanvas();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (points.length === 0) return;

        var tempCanvas = document.createElement("canvas");
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        var tempCtx = tempCanvas.getContext("2d");

        points.forEach(function(p) {
            var projected = project(p.lat, p.lng);
            var value = maxWeight > 0 ? (p.weight / maxWeight) : 0;
            var radius = options.radius;

            var gradient = tempCtx.createRadialGradient(
                projected.x, projected.y, 0,
                projected.x, projected.y, radius
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

        var imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);
        var data = imageData.data;

        for (var i = 0; i < data.length; i += 4) {
            var alpha = data[i + 3] / 255;
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
    // 포인트 데이터 설정
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
    // Biz 파일 로딩 함수
    // 원본 API의 Biz 파일은 특수 포맷으로 되어 있습니다.
    // 여기서는 간단히 텍스트로 로드한 후, 원본 라이브러리가 있다면
    // 그쪽에 위임하고, 없다면 기본 처리만 합니다.
    // ---------------------------------------------------------
    function loadBizFile(bizUrl) {
        console.log("📄 Biz 파일 로드 시작:", bizUrl);

        // 원본 XRayMap 라이브러리 함수가 있는지 확인
        if (typeof window.HM_loadLayersByUrlFileAndRepalceTag === 'function') {
            // 원본 라이브러리 사용
            console.log("✅ XRayMap 라이브러리 함수 발견 - 원본 방식으로 처리");
            window.HM_loadLayersByUrlFileAndRepalceTag(bizUrl, '#CD#', '50');
            return;
        }

        // 원본 라이브러리가 없다면 직접 fetch하여 파싱
        fetch(bizUrl, {
            method: 'GET',
            mode: 'cors',
            credentials: 'omit'
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Biz 파일 로드 실패: ' + response.status);
            }
            return response.text();
        })
        .then(function(bizText) {
            console.log("✅ Biz 파일 로드 성공 (길이: " + bizText.length + ")");
            console.log("📝 Biz 내용 미리보기:", bizText.substring(0, 200));
            
            // Biz 파일 파싱 (간략하게)
            parseBizFile(bizText);
            
            // UI에 레이어 목록 표시
            if (window.UiManager && window.UiManager.updateLayerListUI) {
                window.UiManager.updateLayerListUI({ layers: bizLayers });
            }
        })
        .catch(function(error) {
            console.error("🚨 Biz 파일 로드 실패:", error);
        });
    }

    // ---------------------------------------------------------
    // Biz 파일 파싱 (간략 버전)
    // 원본 포맷: 
    // "NULL\n▶\nUID᛫number᛫1669273820477.7627\nsCallUrl᛫string᛫..."
    // 각 레이어는 "\n▶\n"로 구분되고, 필드는 "\n"으로 구분됩니다.
    // ---------------------------------------------------------
    function parseBizFile(bizText) {
        bizLayers = [];
        
        // "▶" 기호로 레이어 분리
        var layerBlocks = bizText.split('\n▶\n');
        
        console.log("🗒️ Biz 파일에서 " + layerBlocks.length + "개 레이어 블록 발견");
        
        layerBlocks.forEach(function(block, index) {
            if (!block || block.trim() === 'NULL') return;
            
            var layer = {};
            var lines = block.split('\n');
            
            lines.forEach(function(line) {
                if (!line || line.indexOf('᛫') === -1) return;
                
                var parts = line.split('᛫');
                if (parts.length >= 3) {
                    var key = parts[0];
                    var type = parts[1];
                    var value = parts.slice(2).join('᛫');
                    
                    // 주요 필드만 추출
                    if (key === 'sLayerNM') layer.name = value;
                    if (key === 'sCallUrl') layer.apiUrl = value;
                    if (key === 'sLegend') layer.legend = value;
                    if (key === 'bVisible') layer.visible = value === 'true';
                    if (key === 'zIndex') layer.zIndex = parseInt(value) || 0;
                }
            });
            
            if (layer.name) {
                bizLayers.push(layer);
                console.log("✅ 레이어 파싱 성공:", layer.name);
            }
        });
        
        console.log("🎯 최종 파싱된 레이어 개수:", bizLayers.length);
    }

    // ---------------------------------------------------------
    // 히트맵 초기화
    // ---------------------------------------------------------
    function initHeatmap(kakaoMap, containerEl) {
        map = kakaoMap;

        canvas = document.createElement("canvas");
        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.pointerEvents = "none";

        containerEl.appendChild(canvas);
        ctx = canvas.getContext("2d");

        resizeCanvas();

        kakao.maps.event.addListener(map, "zoom_changed", render);
        kakao.maps.event.addListener(map, "center_changed", render);
    }

    // ---------------------------------------------------------
    // 외부에서 사용할 수 있도록 전역 객체로 노출합니다.
    // ---------------------------------------------------------
    window.HeatmapEngine = {
        init: initHeatmap,
        setPoints: setPoints,
        render: render,
        loadBizFile: loadBizFile,
        getBizLayers: function() { return bizLayers; }
    };

})(window, document);
