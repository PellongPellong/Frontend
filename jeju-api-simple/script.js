// 카카오 지도 API 로드
const script = document.createElement('script');
script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=6a1893d4524b57143bd18ba93baa7bda&autoload=false&libraries=services";
script.async = true;
document.head.appendChild(script);

let map;
let ps;
let markers = [];
let infowindows = [];

script.onload = function() {
    kakao.maps.load(function() {
        initMap();
        getWeatherInfo();
    });
};

function initMap() {
    // 제주도 중심 좌표
    const jejuCenter = new kakao.maps.LatLng(33.3846, 126.5535);
    
    const mapContainer = document.getElementById('map');
    const mapOption = {
        center: jejuCenter,
        level: 9
    };
    
    map = new kakao.maps.Map(mapContainer, mapOption);
    ps = new kakao.maps.services.Places();
    
    // 지도 타입 컨트롤 추가
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    
    // 줌 컨트롤 추가
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}

// 날씨 정보 가져오기 (간단한 버전 - 실제로는 날씨 API 필요)
function getWeatherInfo() {
    const weatherInfo = document.getElementById('weatherInfo');
    
    // 실제 구현시에는 OpenWeatherMap API 등을 사용
    // 여기서는 시뮬레이션
    setTimeout(() => {
        const temp = Math.floor(Math.random() * 10) + 15; // 15-25도
        const conditions = ['맑음 ☀️', '구름 조금 ⛅', '흐림 ☁️'];
        const condition = conditions[Math.floor(Math.random() * conditions.length)];
        
        weatherInfo.innerHTML = `
            <span>제주시 ${temp}°C ${condition}</span>
        `;
    }, 1000);
}

// 마커 초기화
function clearMarkers() {
    markers.forEach(marker => marker.setMap(null));
    infowindows.forEach(infowindow => infowindow.close());
    markers = [];
    infowindows = [];
}

// 검색 결과 표시
function displayPlaces(places) {
    clearMarkers();
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    
    if (places.length === 0) {
        resultsList.innerHTML = '<p class="empty-message">검색 결과가 없습니다</p>';
        return;
    }
    
    const bounds = new kakao.maps.LatLngBounds();
    
    places.forEach((place, index) => {
        const marker = addMarker(place, index);
        bounds.extend(new kakao.maps.LatLng(place.y, place.x));
        
        const resultItem = createResultItem(place, index);
        resultsList.appendChild(resultItem);
    });
    
    map.setBounds(bounds);
}

// 마커 추가
function addMarker(place, index) {
    const position = new kakao.maps.LatLng(place.y, place.x);
    
    const marker = new kakao.maps.Marker({
        position: position,
        map: map
    });
    
    const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:12px;">${place.place_name}</div>`
    });
    
    kakao.maps.event.addListener(marker, 'click', function() {
        infowindows.forEach(iw => iw.close());
        infowindow.open(map, marker);
        highlightResultItem(index);
    });
    
    markers.push(marker);
    infowindows.push(infowindow);
    
    return marker;
}

// 검색 결과 아이템 생성
function createResultItem(place, index) {
    const item = document.createElement('div');
    item.className = 'result-item';
    item.dataset.index = index;
    
    const distance = place.distance ? `${place.distance}m` : '';
    
    item.innerHTML = `
        <h4>${place.place_name}</h4>
        <p>${place.address_name}</p>
        ${place.phone ? `<p>📞 ${place.phone}</p>` : ''}
        ${distance ? `<p class="distance">📍 ${distance}</p>` : ''}
    `;
    
    item.addEventListener('click', function() {
        const marker = markers[index];
        const infowindow = infowindows[index];
        
        map.setCenter(marker.getPosition());
        map.setLevel(3);
        
        infowindows.forEach(iw => iw.close());
        infowindow.open(map, marker);
        
        highlightResultItem(index);
    });
    
    return item;
}

// 결과 아이템 하이라이트
function highlightResultItem(index) {
    document.querySelectorAll('.result-item').forEach(item => {
        item.classList.remove('active');
    });
    const targetItem = document.querySelector(`[data-index="${index}"]`);
    if (targetItem) {
        targetItem.classList.add('active');
        targetItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// 키워드 검색
function searchPlaces(keyword) {
    if (!keyword.trim()) {
        alert('검색어를 입력하세요');
        return;
    }
    
    // 제주도 내에서 검색
    const options = {
        location: new kakao.maps.LatLng(33.3846, 126.5535),
        radius: 50000, // 50km
        size: 15
    };
    
    ps.keywordSearch(keyword + ' 제주', function(data, status) {
        if (status === kakao.maps.services.Status.OK) {
            displayPlaces(data);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            alert('검색 결과가 없습니다.');
            document.getElementById('resultsList').innerHTML = '<p class="empty-message">검색 결과가 없습니다</p>';
        } else {
            alert('검색 중 오류가 발생했습니다.');
        }
    }, options);
}

// 카테고리 검색
function searchCategory(categoryCode) {
    const options = {
        location: new kakao.maps.LatLng(33.3846, 126.5535),
        radius: 50000,
        size: 15
    };
    
    ps.categorySearch(categoryCode, function(data, status) {
        if (status === kakao.maps.services.Status.OK) {
            displayPlaces(data);
        } else {
            alert('검색 중 오류가 발생했습니다.');
        }
    }, options);
}

// 이벤트 리스너
document.getElementById('searchBtn').addEventListener('click', function() {
    const keyword = document.getElementById('searchInput').value;
    searchPlaces(keyword);
});

document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const keyword = document.getElementById('searchInput').value;
        searchPlaces(keyword);
    }
});

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // 활성화 상태 토글
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.dataset.category;
        searchCategory(category);
    });
});