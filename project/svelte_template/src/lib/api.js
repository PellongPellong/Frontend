import { mockChatResponse } from './mock.js';

const API_URL = "https://d3sy74e1kjyc2m.cloudfront.net/api/chats";

// Mock 모드 설정 (true: mock 사용, false: 실제 API 사용)
// 환경 변수로 설정하려면: import.meta.env.VITE_USE_MOCK === 'true'
const USE_MOCK_DATA = true;

function generateMockSessionId() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 9);
    return `mock-${timestamp}-${random}`;
}

export async function sendMessage(sessionId, message) {
    // Mock 모드 활성화 시
    if (USE_MOCK_DATA) {
        console.log('🧪 Using mock data (test mode)');
        // 실제 API 호출처럼 지연 시뮤레이션
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // sessionId가 없으면 새로 생성, 있으면 그대로 유지
        const finalSessionId = sessionId || generateMockSessionId();
        
        return {
            ...mockChatResponse,
            sessionId: finalSessionId
        };
    }

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
            mode: "cors",
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const json = await response.json();
        console.log("API Response:", json);

        if (json.status !== "CREATED") {
            console.warn("API returned status:", json.status);
        }

        const data = json.data;
        if (!data) {
            throw new Error("No data in API response");
        }

        return {
            sessionId: data.sessionId,
            cards: transformResponseToCards(data)
        };

    } catch (error) {
        console.error("SendMessage Error:", error);
        throw error;
    }
}

function transformResponseToCards(data) {
    const cards = [];

    const bedrockData = data.bedrockResponse;

    if (!bedrockData) {
        console.warn("No bedrockResponse in API data", data);
        return cards;
    }

    // 1. Status Card
    if (bedrockData.status) {
        cards.push({
            type: "status",
            locationName: bedrockData.status.locationName || "여행지 현황",
            locationStatus: bedrockData.status.locationStatus || 3,
            coordinate: bedrockData.status.coordinate || null,
            timeTable: (bedrockData.status.timeTable || []).map(t => ({
                time: t.time.includes(":") ? t.time.split(":")[0] + "시" : t.time,
                congestion: t.congestion
            }))
        });
    }

    // 2. Recommendation Card
    if (bedrockData.recommendation) {
        cards.push({
            type: "recommendation",
            locationName: bedrockData.recommendation.locationName,
            story: bedrockData.recommendation.story,
            coordinate: bedrockData.recommendation.coordinate || null
        });
    }

    // 3. Navigation Card (if recommendation has coordinates)
    if (bedrockData.recommendation && 
        (bedrockData.recommendation.coordinate?.lat || bedrockData.recommendation.lat || bedrockData.recommendation.latitude) && 
        (bedrockData.recommendation.coordinate?.lng || bedrockData.recommendation.lon || bedrockData.recommendation.lng || bedrockData.recommendation.longitude)) {
        
        const lat = bedrockData.recommendation.coordinate?.lat || bedrockData.recommendation.lat || bedrockData.recommendation.latitude;
        const lng = bedrockData.recommendation.coordinate?.lng || bedrockData.recommendation.lon || bedrockData.recommendation.lng || bedrockData.recommendation.longitude;
        
        // around 장소들의 좌표 수집 (추가 마커용)
        const additionalPlaces = [];
        if (bedrockData.around && bedrockData.around.length > 0) {
            bedrockData.around.forEach(place => {
                const placeLat = place.coordinate?.lat || place.lat || place.latitude;
                const placeLng = place.coordinate?.lng || place.lon || place.lng || place.longitude;
                
                if (placeLat && placeLng) {
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
            placeName: bedrockData.recommendation.locationName,
            lat: lat,
            lng: lng,
            additionalPlaces: additionalPlaces  // 주변 장소들 좌표
        });
    }

    // 4. Places Card
    if (bedrockData.around && bedrockData.around.length > 0) {
        cards.push({
            type: "places",
            around: bedrockData.around.map(p => ({
                name: p.name,
                reason: p.reason,
                coordinate: p.coordinate || null
            }))
        });
    }

    // 5. Coupon Card
    if (bedrockData.coupons && bedrockData.coupons.length > 0) {
        cards.push({
            type: "coupon",
            coupons: bedrockData.coupons.map(c => ({
                name: c.name,
                barcode: c.barcode
            }))
        });
    }

    return cards;
}