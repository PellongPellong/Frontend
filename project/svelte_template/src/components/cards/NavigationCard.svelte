<script>
    import { onMount } from 'svelte';
    
    export let card;
    export let isCompact = true;

    // 모킹된 목적지 좌표 (실제로는 서버에서 받아올 데이터)
    const mockDestination = {
        name: card.placeName || "목적지",
        lat: 33.450701,  // 제주시청 좌표
        lng: 126.570667
    };

    let userLocation = null;
    let distance = null;
    let duration = null;
    let routeInfo = null;
    let error = null;
    let isLoading = true;

    // 카카오맵 SDK 로드
    function loadKakaoMapScript() {
        return new Promise((resolve, reject) => {
            if (window.kakao && window.kakao.maps) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=6a1893d4524b57143bd18ba93baa7bda&autoload=false&libraries=services";
            script.onload = () => {
                window.kakao.maps.load(() => resolve());
            };
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // 현재 위치 가져오기
    function getCurrentLocation() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('위치 정보를 지원하지 않는 브라우저입니다.'));
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (err) => {
                    reject(new Error('위치 정보를 가져올 수 없습니다.'));
                }
            );
        });
    }

    // 두 지점 간 거리 계산 (Haversine formula 사용)
    function calculateDistance(lat1, lng1, lat2, lng2) {
        const R = 6371; // 지구 반지름 (km)
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLng = (lng2 - lng1) * Math.PI / 180;
        
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLng/2) * Math.sin(dLng/2);
        
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const distance = R * c;
        
        return distance;
    }

    // 길찾기 정보 가져오기
    async function getRouteInfo() {
        try {
            const [location] = await Promise.all([
                getCurrentLocation(),
                loadKakaoMapScript()
            ]);

            userLocation = location;

            // 거리 계산
            const dist = calculateDistance(
                location.lat,
                location.lng,
                mockDestination.lat,
                mockDestination.lng
            );
            
            distance = dist < 1 
                ? `${Math.round(dist * 1000)}m`
                : `${dist.toFixed(1)}km`;

            // 예상 소요 시간 계산 (도보: 4km/h, 자동차: 40km/h 가정)
            const walkingTime = Math.ceil(dist / 4 * 60); // 분
            const drivingTime = Math.ceil(dist / 40 * 60); // 분
            
            duration = {
                walking: walkingTime < 60 ? `${walkingTime}분` : `${Math.floor(walkingTime/60)}시간 ${walkingTime%60}분`,
                driving: drivingTime < 60 ? `${drivingTime}분` : `${Math.floor(drivingTime/60)}시간 ${drivingTime%60}분`
            };

            // 방향 계산
            const bearing = calculateBearing(
                location.lat,
                location.lng,
                mockDestination.lat,
                mockDestination.lng
            );

            routeInfo = {
                direction: getDirectionText(bearing),
                bearing: bearing
            };

            isLoading = false;

        } catch (err) {
            error = err.message;
            isLoading = false;
        }
    }

    // 방향 계산 (각도)
    function calculateBearing(lat1, lng1, lat2, lng2) {
        const dLng = (lng2 - lng1) * Math.PI / 180;
        const y = Math.sin(dLng) * Math.cos(lat2 * Math.PI / 180);
        const x = Math.cos(lat1 * Math.PI / 180) * Math.sin(lat2 * Math.PI / 180) -
                  Math.sin(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.cos(dLng);
        
        let bearing = Math.atan2(y, x) * 180 / Math.PI;
        bearing = (bearing + 360) % 360;
        
        return bearing;
    }

    // 방향을 텍스트로 변환
    function getDirectionText(bearing) {
        const directions = ['북', '북동', '동', '남동', '남', '남서', '서', '북서'];
        const index = Math.round(bearing / 45) % 8;
        return directions[index];
    }

    // 카카오맵으로 길찾기 실행
    function openKakaoNavigation() {
        const url = `https://map.kakao.com/link/to/${encodeURIComponent(mockDestination.name)},${mockDestination.lat},${mockDestination.lng}`;
        window.open(url, '_blank');
    }

    onMount(() => {
        getRouteInfo();
    });
</script>

<div class="flex flex-col h-full">
    <!-- 헤더 -->
    <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
            </div>
            <div>
                <h3 class="text-lg font-bold text-gray-800">길찾기</h3>
                <p class="text-xs text-gray-500">{mockDestination.name}</p>
            </div>
        </div>
    </div>

    {#if isLoading}
        <!-- 로딩 상태 -->
        <div class="flex-1 flex items-center justify-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
    {:else if error}
        <!-- 에러 상태 -->
        <div class="flex-1 flex flex-col items-center justify-center text-center px-4">
            <svg class="w-16 h-16 text-red-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            <p class="text-sm text-gray-600">{error}</p>
        </div>
    {:else}
        <!-- 거리 및 경로 정보 -->
        <div class="flex-1 space-y-4">
            <!-- 거리 정보 -->
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-gray-600 mb-1">현재 위치에서</p>
                        <p class="text-3xl font-bold text-indigo-600">{distance}</p>
                    </div>
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                        <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- 예상 소요 시간 -->
            <div class="grid grid-cols-2 gap-3">
                <div class="bg-gray-50 rounded-xl p-3">
                    <div class="flex items-center gap-2 mb-2">
                        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        <span class="text-xs text-gray-600 font-medium">도보</span>
                    </div>
                    <p class="text-lg font-bold text-gray-800">{duration.walking}</p>
                </div>
                <div class="bg-gray-50 rounded-xl p-3">
                    <div class="flex items-center gap-2 mb-2">
                        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                        </svg>
                        <span class="text-xs text-gray-600 font-medium">차량</span>
                    </div>
                    <p class="text-lg font-bold text-gray-800">{duration.driving}</p>
                </div>
            </div>

            <!-- 방향 안내 -->
            <div class="bg-white border-2 border-gray-200 rounded-xl p-4">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-xs text-gray-500 mb-1">이동 방향</p>
                        <p class="text-xl font-bold text-gray-800">{routeInfo.direction}쪽</p>
                    </div>
                    <div class="relative w-12 h-12">
                        <div 
                            class="absolute inset-0 flex items-center justify-center"
                            style="transform: rotate({routeInfo.bearing}deg);"
                        >
                            <svg class="w-12 h-12 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 길찾기 버튼 -->
            <button 
                on:click={openKakaoNavigation}
                class="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                카카오맵에서 길찾기
            </button>
        </div>
    {/if}
</div>