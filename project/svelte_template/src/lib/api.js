const API_URL = "https://d3sy74e1kjyc2m.cloudfront.net/api/chats";

// 로컬 테스트용 fallback 데이터
const FALLBACK_RESPONSE = {
    status: "CREATED",
    data: {
        sessionId: "local-test-session",
        userInputText: "string",
        bedrockResponse: {
            status: {
                locationName: "성산",
                locationStatus: 5,
                timeTable: [
                    { time: "12:00", congestion: 3 },
                    { time: "13:00", congestion: 5 },
                    { time: "14:00", congestion: 2 },
                    { time: "15:00", congestion: 4 },
                    { time: "16:00", congestion: 1 },
                    { time: "17:00", congestion: 3 },
                    { time: "18:00", congestion: 5 },
                    { time: "19:00", congestion: 2 },
                    { time: "20:00", congestion: 4 },
                    { time: "21:00", congestion: 1 },
                    { time: "22:00", congestion: 3 },
                    { time: "23:00", congestion: 5 }
                ],
                coordinate: {
                    lat: 33.4645,
                    lng: 126.9418
                }
            },
            recommendation: {
                locationName: "김녕",
                story: "김녕은 조선시대에 무엇인가가 있었던 곳으로 유명합니다.",
                coordinate: {
                    lat: 33.5569,
                    lng: 126.7594
                }
            },
            around: [
                {
                    name: "고등어 식당",
                    reason: "고등어가 맛있어요, 별점도 높아요",
                    coordinate: {
                        lat: 33.5573,
                        lng: 126.7602
                    }
                },
                {
                    name: "흙돼지 식당",
                    reason: "제주에 왔으면 한번 먹어야죠",
                    coordinate: {
                        lat: 33.5565,
                        lng: 126.7585
                    }
                },
                {
                    name: "김녕카페",
                    reason: "아이스아메리카노 맛집",
                    coordinate: {
                        lat: 33.5580,
                        lng: 126.7610
                    }
                }
            ],
            coupons: [
                {
                    name: "고등어 식당",
                    barcode: "12391287498"
                },
                {
                    name: "아메리카노 쿠폰",
                    barcode: "9999999998"
                }
            ]
        }
    },
    errorMessage: null
};

function generateSessionId() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 9);
    return `session-${timestamp}-${random}`;
}

export async function sendMessage(sessionId, message) {
    try {
        const payload = {
            sessionId: sessionId || "",
            message: message
        };

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "accept": "*/*",
                "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json"
            },
            body: JSON.stringify(payload),
            mode: "cors"
            // credentials: "include" 제거 - CORS 이슈
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const json = await response.json();
        console.log("✅ API Response:", json);

        // errorMessage 체크
        if (json.errorMessage) {
            throw new Error(json.errorMessage);
        }

        const data = json.data;
        if (!data) {
            throw new Error("No data in API response");
        }

        return {
            sessionId: data.sessionId || sessionId || generateSessionId(),
            cards: transformResponseToCards(data.bedrockResponse)
        };

    } catch (error) {
        console.error("❌ API Error - Using fallback data:", error);
        
        // API 실패 시 fallback 데이터 사용
        console.log("🛠️ Using local test data for development");
        
        // 지연 시뮬레이션
        await new Promise(resolve => setTimeout(resolve, 500));
        
        return {
            sessionId: sessionId || generateSessionId(),
            cards: transformResponseToCards(FALLBACK_RESPONSE.data.bedrockResponse)
        };
    }
}

function transformResponseToCards(bedrockData) {
    const cards = [];

    if (!bedrockData) {
        console.warn("No bedrockResponse in API data");
        return cards;
    }

    // 1. Status Card
    if (bedrockData.status) {
        const status = bedrockData.status;
        cards.push({
            type: "status",
            locationName: status.locationName || "여행지 현황",
            locationStatus: status.locationStatus ?? 3,
            coordinate: status.coordinate || null,
            timeTable: (status.timeTable || []).map(t => ({
                time: t?.time?.includes(":") ? t.time.split(":")[0] + "시" : (t?.time || ""),
                congestion: t?.congestion ?? 0
            }))
        });
    }

    // 2. Recommendation Card
    if (bedrockData.recommendation) {
        const rec = bedrockData.recommendation;
        cards.push({
            type: "recommendation",
            locationName: rec.locationName || "추천 여행지",
            story: rec.story || "",
            coordinate: rec.coordinate || null
        });
    }

    // 3. Navigation Card (if recommendation has coordinates)
    if (bedrockData.recommendation) {
        const rec = bedrockData.recommendation;
        const lat = rec.coordinate?.lat ?? rec.lat ?? rec.latitude;
        const lng = rec.coordinate?.lng ?? rec.lon ?? rec.lng ?? rec.longitude;
        
        if (lat && lng) {
            // around 장소들의 좌표 수집 (추가 마커용)
            const additionalPlaces = [];
            if (bedrockData.around && Array.isArray(bedrockData.around)) {
                bedrockData.around.forEach(place => {
                    if (!place) return;
                    const placeLat = place.coordinate?.lat ?? place.lat ?? place.latitude;
                    const placeLng = place.coordinate?.lng ?? place.lon ?? place.lng ?? place.longitude;
                    
                    if (placeLat && placeLng && place.name) {
                        additionalPlaces.push({
                            name: place.name,
                            lat: placeLat,
                            lng: placeLng
                        });
                    }
                });
            }
            
            cards.push({
                type: "navigation",
                placeName: rec.locationName || "목적지",
                lat: lat,
                lng: lng,
                additionalPlaces: additionalPlaces
            });
        }
    }

    // 4. Places Card
    if (bedrockData.around && Array.isArray(bedrockData.around) && bedrockData.around.length > 0) {
        const validPlaces = bedrockData.around
            .filter(p => p && p.name)
            .map(p => ({
                name: p.name,
                reason: p.reason || "",
                coordinate: p.coordinate || null
            }));
        
        if (validPlaces.length > 0) {
            cards.push({
                type: "places",
                around: validPlaces
            });
        }
    }

    // 5. Coupon Card
    if (bedrockData.coupons && Array.isArray(bedrockData.coupons) && bedrockData.coupons.length > 0) {
        const validCoupons = bedrockData.coupons
            .filter(c => c && c.name)
            .map(c => ({
                name: c.name,
                barcode: c.barcode || ""
            }));
        
        if (validCoupons.length > 0) {
            cards.push({
                type: "coupon",
                coupons: validCoupons
            });
        }
    }

    return cards;
}