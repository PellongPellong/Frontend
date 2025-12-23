<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  export let onClose = () => {};
  export let onSelect = (place) => {};

  const KAKAO_API_KEY = '6a1893d4524b57143bd18ba93baa7bda';
  
  let map;
  let ps;
  let markers = [];
  let infowindows = [];
  let places = [];
  let selectedPlace = null;
  let userLocation = null;
  let isLoading = true;
  let searchDebounceTimer = null;

  onMount(async () => {
    await loadKakaoMapScript();
    await getUserLocation();
    initMap();
  });

  onDestroy(() => {
    if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
  });

  function loadKakaoMapScript() {
    return new Promise((resolve, reject) => {
      if (window.kakao && window.kakao.maps) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false&libraries=services`;
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(() => resolve());
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function getUserLocation() {
    return new Promise((resolve) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            resolve();
          },
          (error) => {
            console.warn('위치 정보를 가져올 수 없습니다:', error);
            // 제주도 중심 좌표로 폴백
            userLocation = { lat: 33.3846, lng: 126.5535 };
            resolve();
          }
        );
      } else {
        // 제주도 중심 좌표로 폴백
        userLocation = { lat: 33.3846, lng: 126.5535 };
        resolve();
      }
    });
  }

  function initMap() {
    const mapContainer = document.getElementById('location-modal-map');
    const mapOption = {
      center: new kakao.maps.LatLng(userLocation.lat, userLocation.lng),
      level: 6
    };
    
    map = new kakao.maps.Map(mapContainer, mapOption);
    ps = new kakao.maps.services.Places();

    // 사용자 위치 마커 표시
    const userMarker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(userLocation.lat, userLocation.lng),
      map: map,
      image: new kakao.maps.MarkerImage(
        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
        new kakao.maps.Size(24, 35)
      )
    });

    // 지도 이동/줌 이벤트 리스너
    kakao.maps.event.addListener(map, 'idle', handleMapChange);
    kakao.maps.event.addListener(map, 'zoom_changed', handleMapChange);

    // 초기 검색
    searchNearbyPlaces();
  }

  function handleMapChange() {
    // 디바운스를 적용하여 과도한 API 호출 방지
    if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
    
    searchDebounceTimer = setTimeout(() => {
      searchNearbyPlaces();
    }, 500);
  }

  function searchNearbyPlaces() {
    if (!map || !ps) return;

    const center = map.getCenter();
    const level = map.getLevel();
    
    // 지도 레벨에 따라 검색 반경 조정
    const radius = Math.min(level * 500, 20000); // 최대 20km

    const options = {
      location: center,
      radius: radius,
      size: 15
    };

    isLoading = true;

    // AT4 = 관광명소 카테고리 코드
    ps.categorySearch('AT4', function(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        places = data.map(place => ({
          id: place.id,
          name: place.place_name,
          address: place.address_name,
          roadAddress: place.road_address_name,
          phone: place.phone,
          lat: parseFloat(place.y),
          lng: parseFloat(place.x),
          distance: place.distance ? parseInt(place.distance) : null,
          category: place.category_name
        }));
        displayMarkers();
      } else {
        console.error('검색 실패:', status);
        places = [];
      }
      isLoading = false;
    }, options);
  }

  function clearMarkers() {
    markers.forEach(marker => marker.setMap(null));
    infowindows.forEach(infowindow => infowindow.close());
    markers = [];
    infowindows = [];
  }

  function displayMarkers() {
    clearMarkers();

    places.forEach((place, index) => {
      const position = new kakao.maps.LatLng(place.lat, place.lng);
      
      const marker = new kakao.maps.Marker({
        position: position,
        map: map
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px 10px;font-size:12px;white-space:nowrap;">${place.name}</div>`
      });

      kakao.maps.event.addListener(marker, 'click', () => {
        infowindows.forEach(iw => iw.close());
        infowindow.open(map, marker);
        handlePlaceSelect(place);
      });

      markers.push(marker);
      infowindows.push(infowindow);
    });
  }

  function handlePlaceSelect(place) {
    selectedPlace = place;
    
    // 지도 중심을 선택한 장소로 이동
    const position = new kakao.maps.LatLng(place.lat, place.lng);
    map.panTo(position);
  }

  function handlePlaceClick(place) {
    handlePlaceSelect(place);
    
    // 해당 마커의 인포윈도우 열기
    const markerIndex = places.findIndex(p => p.id === place.id);
    if (markerIndex !== -1) {
      infowindows.forEach(iw => iw.close());
      infowindows[markerIndex].open(map, markers[markerIndex]);
    }
  }

  function confirmSelection() {
    if (selectedPlace) {
      // 주소에서 행정동 추출 (간단한 방식)
      const addressParts = selectedPlace.address.split(' ');
      const adminDong = addressParts.length >= 3 ? addressParts[2] : addressParts[addressParts.length - 1];
      
      const locationData = {
        id: selectedPlace.id,
        name: selectedPlace.name,
        address: selectedPlace.address,
        roadAddress: selectedPlace.roadAddress,
        item_id: adminDong, // 백엔드에서 요구하는 행정동 명칭
        lat: selectedPlace.lat,
        lng: selectedPlace.lng,
        phone: selectedPlace.phone,
        category: selectedPlace.category
      };
      
      onSelect(locationData);
      dispatch('select', locationData);
    }
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
      dispatch('close');
    }
  }

  function formatDistance(distance) {
    if (!distance) return '';
    if (distance < 1000) return `${distance}m`;
    return `${(distance / 1000).toFixed(1)}km`;
  }
</script>

<div class="modal-overlay" on:click={handleOverlayClick}>
  <div class="modal-content" on:click|stopPropagation>
    <!-- 헤더 -->
    <div class="modal-header">
      <h2 class="modal-title">📍 관광지 선택</h2>
      <button class="close-btn" on:click={() => { onClose(); dispatch('close'); }}>
        ✕
      </button>
    </div>

    <!-- 지도 영역 -->
    <div class="map-wrapper">
      <div id="location-modal-map" class="map-container"></div>
      {#if isLoading}
        <div class="loading-overlay">
          <div class="spinner"></div>
        </div>
      {/if}
    </div>

    <!-- 장소 리스트 -->
    <div class="places-list-wrapper">
      <div class="list-header">
        <span class="list-title">주변 관광지 ({places.length})</span>
        <span class="list-hint">지도를 이동하여 다른 지역 검색</span>
      </div>
      <div class="places-list">
        {#if places.length === 0 && !isLoading}
          <div class="empty-message">
            <p>이 지역에 관광지가 없습니다.</p>
            <p>지도를 이동하여 다른 지역을 검색해보세요.</p>
          </div>
        {:else}
          {#each places as place (place.id)}
            <div 
              class="place-item" 
              class:selected={selectedPlace?.id === place.id}
              on:click={() => handlePlaceClick(place)}
            >
              <div class="place-info">
                <h4 class="place-name">{place.name}</h4>
                <p class="place-address">{place.address}</p>
                {#if place.phone}
                  <p class="place-phone">📞 {place.phone}</p>
                {/if}
              </div>
              {#if place.distance}
                <div class="place-distance">
                  {formatDistance(place.distance)}
                </div>
              {/if}
            </div>
          {/each}
        {/if}
      </div>
    </div>

    <!-- 선택된 장소 정보 -->
    {#if selectedPlace}
      <div class="selected-info">
        <div class="selected-details">
          <span class="selected-icon">📍</span>
          <div>
            <p class="selected-name">{selectedPlace.name}</p>
            <p class="selected-address">{selectedPlace.address}</p>
          </div>
        </div>
      </div>
    {/if}

    <!-- 하단 버튼 -->
    <div class="modal-footer">
      <button class="btn btn-cancel" on:click={() => { onClose(); dispatch('close'); }}>
        취소
      </button>
      <button 
        class="btn btn-confirm" 
        disabled={!selectedPlace}
        on:click={confirmSelection}
      >
        선택 완료
      </button>
    </div>
  </div>
</div>

<style>
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    animation: fadeIn 0.2s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .modal-content {
    background: white;
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    animation: slideUp 0.3s ease-out;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid #e5e7eb;
  }

  .modal-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }

  .close-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: #f3f4f6;
    color: #6b7280;
    font-size: 1.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .close-btn:hover {
    background: #e5e7eb;
    color: #111827;
  }

  .map-wrapper {
    position: relative;
    height: 300px;
    background: #f9fafb;
  }

  .map-container {
    width: 100%;
    height: 100%;
  }

  .loading-overlay {
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #e5e7eb;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .places-list-wrapper {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #e5e7eb;
  }

  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
  }

  .list-title {
    font-weight: 600;
    color: #111827;
    font-size: 0.875rem;
  }

  .list-hint {
    font-size: 0.75rem;
    color: #6b7280;
  }

  .places-list {
    flex: 1;
    overflow-y: auto;
    padding: 0.5rem;
  }

  .empty-message {
    text-align: center;
    padding: 3rem 1.5rem;
    color: #6b7280;
  }

  .empty-message p {
    margin: 0.5rem 0;
    font-size: 0.875rem;
  }

  .place-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    border: 2px solid transparent;
  }

  .place-item:hover {
    background: #f9fafb;
  }

  .place-item.selected {
    background: #eff6ff;
    border-color: #3b82f6;
  }

  .place-info {
    flex: 1;
  }

  .place-name {
    font-size: 0.95rem;
    font-weight: 600;
    color: #111827;
    margin: 0 0 0.25rem 0;
  }

  .place-address {
    font-size: 0.8rem;
    color: #6b7280;
    margin: 0.25rem 0;
  }

  .place-phone {
    font-size: 0.75rem;
    color: #9ca3af;
    margin: 0.25rem 0 0 0;
  }

  .place-distance {
    font-size: 0.875rem;
    font-weight: 600;
    color: #3b82f6;
    padding: 0.25rem 0.75rem;
    background: #eff6ff;
    border-radius: 12px;
    white-space: nowrap;
  }

  .selected-info {
    padding: 1rem 1.5rem;
    background: #f0fdf4;
    border-top: 1px solid #dcfce7;
  }

  .selected-details {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .selected-icon {
    font-size: 1.5rem;
  }

  .selected-name {
    font-weight: 600;
    color: #166534;
    margin: 0;
    font-size: 0.95rem;
  }

  .selected-address {
    font-size: 0.8rem;
    color: #15803d;
    margin: 0.25rem 0 0 0;
  }

  .modal-footer {
    display: flex;
    gap: 0.75rem;
    padding: 1.25rem 1.5rem;
    border-top: 1px solid #e5e7eb;
    background: #f9fafb;
  }

  .btn {
    flex: 1;
    padding: 0.875rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
  }

  .btn-cancel {
    background: white;
    color: #6b7280;
    border: 1px solid #d1d5db;
  }

  .btn-cancel:hover {
    background: #f9fafb;
    border-color: #9ca3af;
  }

  .btn-confirm {
    background: #3b82f6;
    color: white;
  }

  .btn-confirm:hover:not(:disabled) {
    background: #2563eb;
  }

  .btn-confirm:disabled {
    background: #d1d5db;
    cursor: not-allowed;
  }

  /* 스크롤바 스타일 */
  .places-list::-webkit-scrollbar {
    width: 6px;
  }

  .places-list::-webkit-scrollbar-track {
    background: #f3f4f6;
  }

  .places-list::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 3px;
  }

  .places-list::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }
</style>