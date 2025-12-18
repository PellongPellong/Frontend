
const API_URL = "https://d3sy74e1kjyc2m.cloudfront.net/api/chats";

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
            mode: "cors",
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const json = await response.json();
        console.log("API Response:", json); // Debugging

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

    // bedrockResponse로 한 단계 더 감싸진 구조 (camelCase)
    const bedrockData = data.bedrockResponse;
    
    if (!bedrockData) {
        console.warn("No bedrockResponse in API data", data);
        return cards;
    }

    // 1. Status Card
    if (bedrockData.status) {
        cards.push({
            type: "status",
            title: bedrockData.status.locationName || "여행지 현황",
            subtitle: `혼잡도 ${bedrockData.status.locationStatus}점`,
            icon: "📍",
            content: `현재 혼잡도는 ${bedrockData.status.locationStatus}점 입니다.`,
            time_table: (bedrockData.status.timeTable || []).map(t => ({
                time: t.time.includes(":") ? t.time.split(":")[0] + "시" : t.time,
                level: t.congestion
            }))
        });
    }

    // 2. Recommendation Card
    if (bedrockData.recommendation) {
        cards.push({
            type: "recommendation",
            title: bedrockData.recommendation.locationName,
            subtitle: "AI 추천",
            icon: "✨",
            content: bedrockData.recommendation.story
        });
    }

    // 3. Places Card
    if (bedrockData.around && bedrockData.around.length > 0) {
        cards.push({
            type: "places",
            title: "주변 명소",
            subtitle: `${bedrockData.around.length}곳 추천`,
            icon: "🌿",
            content: "",
            places: bedrockData.around.map(p => ({
                name: p.name,
                tag: p.reason
            }))
        });
    }

    // 4. Coupon Card
    if (bedrockData.coupons && bedrockData.coupons.length > 0) {
        cards.push({
            type: "coupon",
            title: "사용 가능 쿠폰",
            subtitle: `${bedrockData.coupons.length}개`,
            icon: "🎫",
            content: "할인 혜택을 확인하세요",
            coupons: bedrockData.coupons.map(c => ({
                name: c.name,
                code: c.barcode
            }))
        });
    }

    return cards;
}
