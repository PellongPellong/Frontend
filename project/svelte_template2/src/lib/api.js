const API_URL = "https://d3sy74e1kjyc2m.cloudfront.net/api/chats";

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
        });

        const json = await response.json();
        console.log("✅ API Response:", json);

        // errorMessage 체크 (Success Check보다 먼저 수행하여 서버 에러 메시지 우선 처리)
        if (json.errorMessage) {
            throw new Error(json.errorMessage);
        }

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
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
        console.error("❌ API Error:", error);
        throw error;
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