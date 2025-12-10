# 제주 실시간 혼잡도 히트맵 (heatmap-realtime) 기술 보고서

## 1. 프로젝트 개요

이 프로젝트는 **제주 지역 실시간 혼잡도(히트맵)를 시각화**하기 위해 만들어진 프론트엔드 전용 샘플/실험용 애플리케이션이다.

핵심 목표는 다음과 같다.
- 기존 관공서 서비스(예: `www.policymap.or.kr` 계열)에서 사용하던 **XRayMap 히트맵 라이브러리**를, 
- **카카오 지도 API** 기반의 커스텀 UI와 결합해서,
- **제주도 중심의 히트맵 레이어**를 띄우고,
- 향후에는 실제 실시간 데이터로 교체 가능한 구조를 만드는 것.

현재 상태 기준으로:
- **지도 렌더링**: 카카오 지도 SDK를 통해 정상 동작
- **히트맵 레이어**: 원본 XRayMap 라이브러리를 그대로 사용하여 Biz 파일(`mms1_any_mega.biz`)을 해석하고 지도 위에 표시
- **데이터 소스**: 실시간 API가 없으므로, `ApiClient`에서 **목업 포인트 데이터**를 생성해 지도 위 통계/포인트에 사용
- **UI**: 사이드바, 범례, 통계 영역, 새로고침/레이어 토글 등 기본 컨트롤 구성


## 2. 디렉터리 구조 및 주요 파일

루트 기준 주요 경로는 다음과 같다.

```text
heatmap-realtime/
  ├── index.html                  # 메인 진입 HTML
  ├── js/
  │   ├── app.js                  # 앱 엔트리포인트, 지도 및 XRayMap 연동
  │   ├── api-client.js           # 원본 API 래핑 + 목업 데이터 제공
  │   ├── heatmap-engine.js       # (확장용) 히트맵 엔진 래퍼
  │   └── ui-manager.js           # UI 상태 관리 및 렌더링
  ├── styles/
  │   └── main.css                # 커스텀 스타일
  └── www.policymap.or.kr/
      ├── lib_xraymap/
      │   ├── heatmap_20231212_geonet.js        # 원본 XRayMap 히트맵 라이브러리 핵심 파일
      │   ├── mapSyncForKakao_20231212_geonet.js
      │   ├── iframe_event_geonet.js
      │   └── ex_lib/              # 부가 라이브러리들(현재 직접 사용하지 않음)
      ├── lib/                     # (원본 구조 유지용, 현재 직접 사용 X)
      └── heatmap_api/             # (원본 서버 구조를 반영한 폴더, 실제 호출은 원격 URL 사용)
```

여기서 가장 중요한 파일은 `index.html`, `js/app.js`, `js/api-client.js`, 그리고 `www.policymap.or.kr/lib_xraymap/heatmap_20231212_geonet.js` 이 네 가지이다.


## 3. index.html: HTML 구조 및 외부 스크립트 로딩

### 3.1. 외부 라이브러리 로딩 순서

`index.html`의 `<head>`에서는 다음 순서로 스크립트를 로드한다.

1. **jQuery 1.8.2**
   - XRayMap 라이브러리가 의존하는 구버전 jQuery
   - CDN: `https://code.jquery.com/jquery-1.8.2.min.js`

2. **XRayMap 히트맵 라이브러리**
   - 로컬 커밋된 파일을 사용
   - 경로: `./www.policymap.or.kr/lib_xraymap/heatmap_20231212_geonet.js`

이 두 스크립트가 먼저 로드된 후, `<body>` 맨 아래에서 앱 내부 스크립트들이 로드된다.

```html
<script src="./js/api-client.js"></script>
<script src="./js/heatmap-engine.js"></script>
<script src="./js/ui-manager.js"></script>
<script src="./js/app.js"></script>
```

### 3.2. 메인 레이아웃 구조

`index.html`의 레이아웃은 크게 세 영역으로 나뉜다.

- **Header**: 제목, 새로고침 버튼, 레이어 토글 버튼, 지역 선택 드롭다운
- **Sidebar (레이어/통계 패널)**: 
  - 활성 레이어 목록 (`#layerList`)
  - 혼잡도 범례
  - 실시간 통계 (`#statsContainer`)
- **Map 영역**: 
  - 실제 카카오 지도가 들어가는 `#map` 컨테이너
  - 로딩 인디케이터 (`#loadingIndicator`)
  - 정보창 (`#infoWindow`)

### 3.3. XRayMap 호환용 더미 함수 및 DOM 요소

XRayMap 라이브러리는 원래의 관공서 서비스 환경을 가정하고 작성되어 있기 때문에, 여러 전역 함수와 특정 DOM ID를 기대한다. 실제 서비스에서 필요 없지만 에러 없이 라이브러리를 재사용하기 위해 **다음 더미 구현들이 추가되어 있다.**

#### 3.3.1. 더미 함수 목록

```javascript
// 지도 로드 완료
window.__sendMapLoaded = function() {};

// 지도 이동/줌 시작
window.__sendMapMoveStart = function() {};

// 지도 이동/줌 종료
window.__sendMapMoveEnd = function() {};

// 임시 마커 제거
window._user_h_removeTmpMapRightMarker = function() {};

// TOC(레이어 목록) 갱신 통지
window.__sendMessage_AddTOCRayer_From_HeatmapLib = function(layerInfo) {};
```

위 함수들은 XRayMap 내부에서 `존재 여부`를 전제하고 콜백처럼 호출되지만, 이 프로젝트에서는 별도 UI 연동이 없으므로 **빈 함수**로 둔다.

#### 3.3.2. 필수 DOM 요소 생성

XRayMap은 `legend`, `side` 등 특정 ID를 가진 DOM 요소를 참조하려고 한다. 이를 위해 DOMContentLoaded 시점에 최소한의 요소를 만들어 둔다.

```javascript
window.addEventListener('DOMContentLoaded', function() {
    if (!document.getElementById('legend')) {
        var legendDiv = document.createElement('div');
        legendDiv.id = 'legend';
        legendDiv.style.display = 'none';
        document.body.appendChild(legendDiv);
    }

    if (!document.getElementById('side')) {
        var sideDiv = document.createElement('div');
        sideDiv.id = 'side';
        sideDiv.style.display = 'none';
        document.body.appendChild(sideDiv);
    }
});
```

이 요소들은 화면에는 보이지 않지만, XRayMap 내부 코드에서 `null` 참조로 크래시 나는 것을 방지한다.


## 4. app.js: 카카오 지도 초기화 및 XRayMap 연동

`js/app.js`는 전체 앱의 엔트리 포인트로, 다음 역할을 수행한다.

1. Kakao 지도 SDK 로드 및 지도 초기화
2. XRayMap용 전역 객체/변수 설정
3. Biz 파일 로드 및 히트맵 생성
4. 실시간(목업) 포인트 데이터 로드 및 UI 반영

### 4.1. Kakao 지도 초기화 흐름

```javascript
function loadKakaoSdkAndInit() {
    var script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=...&autoload=false";
    script.onload = function () {
        kakao.maps.load(function () {
            initMap();
        });
    };
    document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function () {
    loadKakaoSdkAndInit();
});
```

`initMap()` 내부에서는 `#map` DOM 요소를 기준으로 지도를 생성하고, 중심/줌 레벨을 제주도로 설정한다.

```javascript
mapContainer = document.getElementById("map");
var options = {
    center: new kakao.maps.LatLng(33.3846, 126.5535),
    level: 10
};
map = new kakao.maps.Map(mapContainer, options);
```

### 4.2. XRayMap 전역 변수 연결

XRayMap은 내부적으로 `h_oMap`, `h_divMap` 등의 **전역 변수**를 통해 지도 객체에 접근한다. 따라서 카카오 지도 초기화 후 다음과 같이 연결해 준다.

```javascript
window.map = map;           // 카카오 지도 객체 (일반용)
window.div_map = mapContainer; // 지도 컨테이너 DOM

// XRayMap이 기대하는 전역 변수
window.h_oMap = map;
window.h_divMap = mapContainer;
```

이 작업을 하지 않으면, XRayMap 내부에서 `h_divMap.id` 등을 참조할 때 `null` 에러가 발생한다.

### 4.3. Biz 파일 로드 및 히트맵 생성

원본 서버(`https://mms.gislab.co.kr:444/heatmap_api`)에 존재하는 Biz 파일을 그대로 사용한다.

```javascript
var BIZ_API_URL = "https://mms.gislab.co.kr:444/heatmap_api";
var BIZ_FILE_NAME = "mms1_any_mega.biz";
var REGION_CODE = "50"; // 제주도 코드

function loadBizFileWithXRayMap() {
    if (!window.map || !window.div_map) {
        setTimeout(loadBizFileWithXRayMap, 100);
        return;
    }

    var bizUrl = BIZ_API_URL + "/biz/getBiz.php?FILE=" + encodeURIComponent(BIZ_FILE_NAME);

    if (typeof window.HM_loadLayersByUrlFileAndRepalceTag === 'function') {
        window.HM_loadLayersByUrlFileAndRepalceTag(bizUrl, '#CD#', REGION_CODE);
    }
}
```

`HM_loadLayersByUrlFileAndRepalceTag`는 XRayMap 라이브러리에서 제공하는 핵심 함수로, Biz 파일 내 설정(레이어, 심볼, 범례, 데이터 소스 등)을 읽어 히트맵 레이어를 자동 생성한다.

### 4.4. 실시간 포인트 데이터 로드 (목업)

히트맵 레이어는 Biz 파일과 XRayMap에서 처리하지만, 통계/포인트용 데이터는 별도로 `ApiClient`를 통해 가져온다.

```javascript
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
```

새로고침 로직에서는 이 포인트 데이터를 가져와 UI 및 통계에 반영한다.

```javascript
function refreshData() {
    if (!window.ApiClient || !window.UiManager) return;

    fetchRealtimePoints()
        .then(function (pointsResponse) {
            var points = pointsResponse && pointsResponse.point ? pointsResponse.point : [];

            window.UiManager.setCurrentPointData(points);
            var stats = window.UiManager.calculateStats(points);
            window.UiManager.updateStatsUI(stats);
        })
        .catch(function (error) {
            console.error("데이터 로드 실패", error);
        });
}
```


## 5. api-client.js: 원본 API 래핑 및 목업 데이터

`js/api-client.js`는 원래의 백엔드 API(`mms.gislab.co.kr`, `heatmap2021.geocoding.kr`)를 래핑하는 역할을 하며, 현재는 실시간 엔드포인트 부재로 인해 **목업 데이터**를 직접 반환한다.

### 5.1. 핵심 상수

```javascript
var BIZ_API_URL = "https://mms.gislab.co.kr:444/heatmap_api";
var MASK_API_URL = "https://heatmap2021.geocoding.kr/mms";
```

### 5.2. 공통 request 함수

`fetch`를 사용해 응답의 Content-Type을 보고 JSON 또는 텍스트로 변환하는 간단한 래퍼.

```javascript
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
```

### 5.3. 목업 포인트 데이터

현재 `getPoints`는 실제 원본 API가 제공하는 실시간 포인트 엔드포인트가 없기 때문에 **하드코딩된 제주 주요 지점 데이터를 반환**한다.

```javascript
function getPoints(params) {
    console.warn("getPoints: 원본 API에 실시간 포인트 엔드포인트가 없어 목업 데이터 사용");

    var mockPoints = [
        { content: "성산일출봉", label: "성산일출봉", weight: 85, location: [126.9419, 33.4595] },
        { content: "한라산",     label: "한라산",     weight: 72, location: [126.5333, 33.3616] },
        { content: "제주공항",   label: "제주공항",   weight: 90, location: [126.4930, 33.5066] },
        { content: "중문관광단지", label: "중문관광단지", weight: 68, location: [126.4167, 33.2500] },
        { content: "애월해안도로", label: "애월해안도로", weight: 55, location: [126.3194, 33.4647] },
        { content: "우도",       label: "우도",       weight: 45, location: [126.9508, 33.5022] },
        { content: "섭지코지",   label: "섭지코지",   weight: 62, location: [126.9289, 33.4242] },
        { content: "함덕해수욕장", label: "함덕해수욕장", weight: 58, location: [126.6694, 33.5433] }
    ];

    return Promise.resolve({
        point: mockPoints
    });
}
```

향후 실제 실시간 API가 준비되면, 이 함수만 교체하면 된다.


## 6. XRayMap 라이브러리(heatmap_20231212_geonet.js)와의 연동 포인트 정리

이 프로젝트에서 XRayMap을 정상적으로 동작시키기 위해 적용한 핵심 포인트는 다음과 같다.

1. **jQuery 1.8.2 필수 로드**
   - 라이브러리가 구버전 jQuery에 의존하고 있으므로, CDN으로 로드한다.

2. **전역 지도 객체 연결**
   - `h_oMap` → 카카오 지도 객체
   - `h_divMap` → 지도 컨테이너 DOM

   ```javascript
   window.h_oMap = map;
   window.h_divMap = mapContainer;
   ```

3. **콜백/훅용 전역 함수 더미 구현**
   - `__sendMapLoaded`
   - `__sendMapMoveStart`
   - `__sendMapMoveEnd`
   - `_user_h_removeTmpMapRightMarker`
   - `__sendMessage_AddTOCRayer_From_HeatmapLib`

   이 함수들이 없으면 XRayMap 내부에서 `ReferenceError`가 발생하므로, 최소한의 빈 구현으로 막아둔다.

4. **필수 DOM 요소 제공**
   - `#legend`, `#side` 등의 ID를 가진 요소 생성
   - 실제 화면에는 숨겨진 상태로 존재

5. **Biz 파일 URL 및 파라미터 설정**
   - `HM_loadLayersByUrlFileAndRepalceTag(bizUrl, '#CD#', REGION_CODE)` 방식 사용
   - Biz 파일 내부에서 `#CD#` 플레이스홀더를 지역 코드(예: `50`)로 치환해 사용


## 7. 콘솔에 남는 404/경고 로그에 대한 설명

브라우저 콘솔에는 여전히 몇 가지 404 및 MIME 관련 경고가 남는다. 이는 원본 서비스에서 사용하던 부가 기능 파일들이 이 프로젝트에는 포함되지 않았기 때문이다.

대표적인 예:

- `user_map_distance_measurement.css` (404)
- `user_copyClipboard_map.css` (404)
- `user_mouseMenu_20231212.js` (404)
- `user_copyClipboard_map.js` (404)
- `getWaterMarkStringFromSession.php` (404)

이 파일들은 다음과 같은 기능을 담당했을 가능성이 높다.

- 지도 거리 측정 UI
- 지도 우클릭 메뉴 및 클립보드 복사 기능
- 워터마크 텍스트 표시

현재 프로젝트의 목표(히트맵 시각화)에는 **핵심적이지 않으며**, 이 파일들이 없어도 히트맵 레이어와 카카오 지도는 정상적으로 동작한다. 따라서, 

- 콘솔에 남는 404는 "원본 환경 대비 일부 부가 기능 비활성화" 정도로 이해하면 된다.


## 8. 향후 확장/리팩터링 포인트

이 프로젝트를 기반으로 실제 서비스로 발전시키려면 다음과 같은 작업을 고려할 수 있다.

1. **실시간 데이터 API 연동**
   - `ApiClient.getPoints`의 목업 데이터를 실제 백엔드 API 호출로 교체
   - 필요 시 CORS 프록시 또는 동일 도메인 백엔드 구성

2. **XRayMap 의존성 축소 또는 대체**
   - 현재는 Biz 파일 파싱 및 히트맵 생성 로직을 `heatmap_20231212_geonet.js`에 전적으로 의존
   - 장기적으로는:
     - Biz 파일 형식 분석 후 자체 파서 구현,
     - 또는 카카오/Leaflet/Mapbox용 히트맵 플러그인으로 교체

3. **더미 함수/DOM 요소 정리**
   - XRayMap 내부 동작을 더 정확히 파악해, 실제 필요한 것만 남기고 나머지 더미/숨김 요소를 최소화

4. **UI/UX 개선**
   - 레이어 목록(`#layerList`)을 XRayMap 레이어 정보와 실제 연동하여 On/Off 제어
   - 통계 영역(`statsContainer`)에 구간별 밀도, 지역별 랭킹 등 추가 표시

5. **에러/로그 핸들링 일원화**
   - 현재는 콘솔 로그 중심의 디버깅 구조
   - 향후에는 사용자에게 노출하는 에러 토스트/알림 컴포넌트 추가 가능


## 9. 정리 및 요약

- 이 프로젝트는 **카카오 지도 + XRayMap(원본 관공서 히트맵 라이브러리)**를 결합한 제주도 혼잡도 히트맵 데모이다.
- `index.html`은 기본 레이아웃을 제공하고, jQuery 및 XRayMap 라이브러리를 로드하며, XRayMap 호환을 위한 최소한의 더미 함수/DOM 요소를 만든다.
- `app.js`는 카카오 지도 초기화, XRayMap과의 브리지(전역 변수/함수), Biz 파일 로드, 목업 포인트 데이터 로드 및 UI 반영을 담당한다.
- `api-client.js`는 원본 API 서버를 흉내 내는 래퍼이자, 현재는 목업 데이터 공급자 역할을 수행한다.
- XRayMap 관련 에러들은 대부분 **전역 변수/함수, 특정 DOM ID 미존재**에서 발생했으며, 이를 더미 구현과 전역 변수 연결로 해결했다.

이 보고서만 읽어도, 

1. 이 프로젝트가 어떤 구조로 되어 있는지,
2. 카카오 지도와 XRayMap이 어떻게 연결되는지,
3. 어떤 부분이 임시(목업/더미)이고,
4. 어디를 손대면 실제 서비스로 확장 가능한지

를 빠르게 이해할 수 있도록 정리되어 있다.
