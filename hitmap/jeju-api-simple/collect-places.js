// 제주도 전체 장소 ID 수집 스크립트
// 사용법: collect-places.html에서 실행

// 제주도를 그리드로 분할
function generateJejuGrid() {
    const grids = [];
    
    // 제주도 범위 (대략적)
    const bounds = {
        minLat: 33.1, maxLat: 33.6,  // 위도
        minLng: 126.1, maxLng: 126.9  // 경도
    };
    
    // 5km 간격으로 그리드 생성 (반경 2.5km씩 검색)
    const step = 0.045; // 약 5km
    
    for (let lat = bounds.minLat; lat <= bounds.maxLat; lat += step) {
        for (let lng = bounds.minLng; lng <= bounds.maxLng; lng += step) {
            grids.push({ lat, lng });
        }
    }
    
    console.log(`생성된 그리드 수: ${grids.length}개`);
    return grids;
}

// 딜레이 함수
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 특정 그리드 영역에서 장소 검색
function searchGridArea(ps, grid, categoryCode) {
    return new Promise((resolve) => {
        const options = {
            location: new kakao.maps.LatLng(grid.lat, grid.lng),
            radius: 2500, // 2.5km
            size: 15
        };
        
        ps.categorySearch(categoryCode, function(data, status) {
            if (status === kakao.maps.services.Status.OK) {
                const places = data.map(place => ({
                    id: place.id,
                    name: place.place_name,
                    address: place.address_name,
                    road_address: place.road_address_name || '',
                    phone: place.phone || '',
                    category_name: place.category_name,
                    x: place.x,
                    y: place.y,
                    place_url: place.place_url
                }));
                resolve(places);
            } else {
                resolve([]);
            }
        }, options);
    });
}

// 전체 장소 ID 수집
async function collectAllPlaceIds(ps, updateProgress) {
    const categories = {
        'AT4': '관광지',
        'FD6': '음식점',
        'CE7': '카페'
    };
    
    const grids = generateJejuGrid();
    const allPlaces = new Map(); // 중복 제거용 (key: place.id)
    
    let totalProcessed = 0;
    const totalTasks = grids.length * Object.keys(categories).length;
    
    for (const [categoryCode, categoryName] of Object.entries(categories)) {
        console.log(`\n[${categoryName}] 수집 시작...`);
        
        for (let i = 0; i < grids.length; i++) {
            const grid = grids[i];
            const places = await searchGridArea(ps, grid, categoryCode);
            
            places.forEach(place => {
                if (!allPlaces.has(place.id)) {
                    allPlaces.set(place.id, {
                        ...place,
                        category: categoryCode,
                        category_name_kr: categoryName,
                        review_url: `https://place.map.kakao.com/${place.id}#review`
                    });
                }
            });
            
            totalProcessed++;
            const progress = ((totalProcessed / totalTasks) * 100).toFixed(1);
            
            if (updateProgress) {
                updateProgress(progress, categoryName, allPlaces.size);
            }
            
            console.log(`진행률: ${progress}% | ${categoryName} - 그리드 ${i+1}/${grids.length} | 총 장소: ${allPlaces.size}개`);
            
            // Rate Limiting: 0.5초 대기
            await sleep(500);
        }
    }
    
    return Array.from(allPlaces.values());
}

// JSON 파일로 다운로드
function downloadJSON(data, filename) {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// 메인 실행 함수
async function startCollection(ps, updateProgress) {
    console.log('=== 제주도 장소 ID 수집 시작 ===\n');
    
    const startTime = Date.now();
    const places = await collectAllPlaceIds(ps, updateProgress);
    const endTime = Date.now();
    
    const duration = ((endTime - startTime) / 1000 / 60).toFixed(1);
    
    console.log(`\n=== 수집 완료 ===`);
    console.log(`총 장소 수: ${places.length}개`);
    console.log(`소요 시간: ${duration}분`);
    
    // 카테고리별 통계
    const stats = {
        '관광지': places.filter(p => p.category === 'AT4').length,
        '음식점': places.filter(p => p.category === 'FD6').length,
        '카페': places.filter(p => p.category === 'CE7').length
    };
    
    console.log('\n카테고리별 통계:');
    Object.entries(stats).forEach(([cat, count]) => {
        console.log(`  ${cat}: ${count}개`);
    });
    
    // JSON 파일로 다운로드
    const result = {
        collected_at: new Date().toISOString(),
        total_count: places.length,
        categories: stats,
        places: places
    };
    
    downloadJSON(result, 'jeju-places.json');
    
    return result;
}
