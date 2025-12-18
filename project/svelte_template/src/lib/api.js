
const API_URL = "https://internet-ecs-alb-1941197226.ap-northeast-2.elb.amazonaws.com/chats";

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
            // Handle non-created status if necessary, or just proceed if data is present
            console.warn("API returned status:", json.status);
        }

        const data = json.data;
        if (!data) {
            throw new Error("No data in API response");
        }

        return {
            sessionId: data.session_id,
            cards: transformResponseToCards(data)
        };

    } catch (error) {
        console.error("SendMessage Error:", error);
        throw error;
    }
}

function transformResponseToCards(data) {
    const cards = [];

    // bedrockresponse로 한 단계 더 감싸진 구조
    const bedrockData = data.bedrockresponse;
    
    if (!bedrockData) {
        console.warn("No bedrockresponse in API data");
        return cards;
    }

    // 1. Status Card
    if (bedrockData.status) {
        cards.push({
            type: "status",
            title: bedrockData.status.location_name || "여행지 현황",
            subtitle: `혼잡도 ${bedrockData.status.location_status}점`,
            icon: "📍",
            content: bedrockData.status.location_status || `현재 혼잡도는 ${bedrockData.status.location_status}점 입니다.`,
            time_table: (bedrockData.status.time_table || []).map(t => ({
                time: t.time.includes(":") ? t.time.split(":")[0] + "시" : t.time,
                level: t.혼잡도
            }))
        });
    }

    // 2. Recommendation Card
    if (bedrockData.recommendation) {
        cards.push({
            type: "recommendation",
            title: bedrockData.recommendation.location_name,
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
    if (bedrockData.coupones && bedrockData.coupones.length > 0) {
        cards.push({
            type: "coupon",
            title: "사용 가능 쿠폰",
            subtitle: `${bedrockData.coupones.length}개`,
            icon: "🎫",
            content: "할인 혜택을 확인하세요",
            coupons: bedrockData.coupones.map(c => ({
                name: c.name,
                code: c.barcode
            }))
        });
    }

    return cards;
}
