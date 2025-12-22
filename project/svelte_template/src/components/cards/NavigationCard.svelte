<script>
    import { onMount } from "svelte";

    export let card;
    export let isCompact = true;

    const mockDestination = {
        name: card.placeName || "목적지",
        lat: card.lat || 33.450701,
        lng: card.lng || 126.570667,
    };

    // 주변 장소들 (card.additionalPlaces에서 가져옴)
    const additionalPlaces = card.additionalPlaces || [];

    let userLocation = null;
    let distance = null;
    let duration = null;
    let routeInfo = null;
    let error = null;
    let isLoading = true;
    let mapContainer;
    let map;

    // 카카오맵 SDK 로드
    function loadKakaoMapScript() {
        return new Promise((resolve, reject) => {
            if (window.kakao && window.kakao.maps) {
                resolve();
                return;
            }

            const script = document.createElement("script");
            script.src =
                "//dapi.kakao.com/v2/maps/sdk.js?appkey=6a1893d4524b57143bd18ba93baa7bda&autoload=false&libraries=services";
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
                reject(new Error("위치 정보를 지원하지 않는 브라우저입니다."));
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (err) => {
                    reject(new Error("위치 정보를 가져올 수 없습니다."));
                },
            );
        });
    }

    // 두 지점 간 거리 계산
    function calculateDistance(lat1, lng1, lat2, lng2) {
        const R = 6371;
        const dLat = ((lat2 - lat1) * Math.PI) / 180;
        const dLng = ((lng2 - lng1) * Math.PI) / 180;

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((lat1 * Math.PI) / 180) *
                Math.cos((lat2 * Math.PI) / 180) *
                Math.sin(dLng / 2) *
                Math.sin(dLng / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;

        return distance;
    }

    // 카카오 길찾기 API 호출 (실제 도로 경로)
    async function getCarRoute(startLat, startLng, endLat, endLng) {
        try {
            const REST_API_KEY = "91e8c3ec281cbbc9419ae9832d2ffe4d";
            const url = `https://apis-navi.kakaomobility.com/v1/directions?origin=${startLng},${startLat}&destination=${endLng},${endLat}&priority=RECOMMEND`;

            const response = await fetch(url, {
                headers: {
                    Authorization: `KakaoAK ${REST_API_KEY}`,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Route API failed");
            }

            const data = await response.json();

            if (data.routes && data.routes.length > 0) {
                const route = data.routes[0];
                const sections = route.sections[0];

                // 경로 좌표 추출
                const path = [];
                sections.roads.forEach((road) => {
                    road.vertexes.forEach((coord, i) => {
                        if (i % 2 === 0) {
                            path.push({
                                lng: coord,
                                lat: road.vertexes[i + 1],
                            });
                        }
                    });
                });

                return {
                    path: path,
                    distance: route.summary.distance,
                    duration: route.summary.duration,
                };
            }
        } catch (error) {
            console.warn(
                "Failed to get car route, using straight line:",
                error,
            );
            return null;
        }
    }

    // 카카오맵 초기화 및 경로 표시
    async function initializeMap() {
        if (!mapContainer || !userLocation) return;

        const kakao = window.kakao;

        // 중간 지점 계산
        const centerLat = (userLocation.lat + mockDestination.lat) / 2;
        const centerLng = (userLocation.lng + mockDestination.lng) / 2;

        const mapOption = {
            center: new kakao.maps.LatLng(centerLat, centerLng),
            level: 8,
        };

        map = new kakao.maps.Map(mapContainer, mapOption);

        // 현재 위치 마커 (기본 블루)
        const startMarker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(userLocation.lat, userLocation.lng),
            map: map,
        });

        const startInfowindow = new kakao.maps.InfoWindow({
            content: '<div style="padding:5px;font-size:12px;">현재 위치</div>',
        });
        startInfowindow.open(map, startMarker);

        // 목적지 마커 (기본 레드)
        const endMarker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(
                mockDestination.lat,
                mockDestination.lng,
            ),
            map: map,
        });

        const endInfowindow = new kakao.maps.InfoWindow({
            content: `<div style="padding:5px;font-size:12px;font-weight:bold;">${mockDestination.name}</div>`,
            zIndex: 1,
        });
        endInfowindow.open(map, endMarker);

        // 주변 장소 마커 추가 (초록색 커스텀 - z-index 낮게)
        if (additionalPlaces.length > 0) {
            additionalPlaces.forEach((place) => {
                const greenMarkerContent = `
                    <div style="
                        width: 17px;
                        height: 17px;
                        background: #22C55E;
                        border: 2px solid white;
                        border-radius: 50%;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                    "></div>
                `;

                const customOverlay = new kakao.maps.CustomOverlay({
                    position: new kakao.maps.LatLng(place.lat, place.lng),
                    content: greenMarkerContent,
                    yAnchor: 0.5,
                    zIndex: -1, // 가장 뒤로
                });
                customOverlay.setMap(map);

                // 정보창 (기본으로 표시, z-index 낮게)
                const infowindow = new kakao.maps.InfoWindow({
                    content: `<div style="padding:5px;font-size:11px;color:#16A34A;font-weight:600;">${place.name}</div>`,
                    position: new kakao.maps.LatLng(place.lat, place.lng),
                    zIndex: 0, // 목적지보다 낮게
                });
                infowindow.open(map);
            });
        }

        // 실제 차량 경로 가져오기
        const routeData = await getCarRoute(
            userLocation.lat,
            userLocation.lng,
            mockDestination.lat,
            mockDestination.lng,
        );

        let linePath;
        if (routeData && routeData.path) {
            // 실제 도로 경로 사용
            linePath = routeData.path.map(
                (coord) => new kakao.maps.LatLng(coord.lat, coord.lng),
            );
        } else {
            // 폴백: 직선 경로
            linePath = [
                new kakao.maps.LatLng(userLocation.lat, userLocation.lng),
                new kakao.maps.LatLng(mockDestination.lat, mockDestination.lng),
            ];
        }

        const polyline = new kakao.maps.Polyline({
            path: linePath,
            strokeWeight: 5,
            strokeColor: "#4F46E5",
            strokeOpacity: 0.8,
            strokeStyle: "solid",
        });

        polyline.setMap(map);

        // 지도 범위 조정 (모든 마커 포함)
        const bounds = new kakao.maps.LatLngBounds();
        bounds.extend(
            new kakao.maps.LatLng(userLocation.lat, userLocation.lng),
        );
        bounds.extend(
            new kakao.maps.LatLng(mockDestination.lat, mockDestination.lng),
        );

        // 주변 장소들도 bounds에 포함
        additionalPlaces.forEach((place) => {
            bounds.extend(new kakao.maps.LatLng(place.lat, place.lng));
        });

        map.setBounds(bounds);
    }

    // 길찾기 정보 가져오기
    async function getRouteInfo() {
        try {
            const [location] = await Promise.all([
                getCurrentLocation(),
                loadKakaoMapScript(),
            ]);

            userLocation = location;

            // 거리 계산
            const dist = calculateDistance(
                location.lat,
                location.lng,
                mockDestination.lat,
                mockDestination.lng,
            );

            distance =
                dist < 1
                    ? `${Math.round(dist * 1000)}m`
                    : `${dist.toFixed(1)}km`;

            // 예상 소요 시간
            const drivingTime = Math.ceil((dist / 40) * 60);
            duration =
                drivingTime < 60
                    ? `${drivingTime}분`
                    : `${Math.floor(drivingTime / 60)}시간 ${drivingTime % 60}분`;

            isLoading = false;

            // 지도 초기화
            setTimeout(() => initializeMap(), 100);
        } catch (err) {
            error = err.message;
            isLoading = false;
        }
    }

    onMount(() => {
        getRouteInfo();
    });
</script>

<div class="flex flex-col h-full">
    <!-- 헤더 -->
    <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
            <div
                class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center"
            >
                <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
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
            <div
                class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"
            ></div>
        </div>
    {:else if error}
        <!-- 에러 상태 -->
        <div
            class="flex-1 flex flex-col items-center justify-center text-center px-4"
        >
            <svg
                class="w-16 h-16 text-red-500 mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
            </svg>
            <p class="text-sm text-gray-600">{error}</p>
        </div>
    {:else}
        <!-- 거리 및 경로 정보 -->
        <div class="flex-1 flex flex-col space-y-3">
            <!-- 거리 정보 -->
            <div class="grid grid-cols-2 gap-3">
                {#if distance}
                    <div
                        class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3"
                    >
                        <p class="text-xs text-gray-600 mb-1">거리</p>
                        <p class="text-xl font-bold text-indigo-600">
                            {distance}
                        </p>
                    </div>
                {/if}

                {#if duration}
                    <div
                        class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-3"
                    >
                        <p class="text-xs text-gray-600 mb-1">소요 시간</p>
                        <p class="text-xl font-bold text-purple-600">
                            {duration}
                        </p>
                    </div>
                {/if}
            </div>

            <!-- 카카오맵 임베드 -->
            <div
                class="flex-1 rounded-xl overflow-hidden border-2 border-gray-200"
                style="min-height: {isCompact ? '200px' : '400px'};"
            >
                <div bind:this={mapContainer} class="w-full h-full"></div>
            </div>
        </div>
    {/if}
</div>
