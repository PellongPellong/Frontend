
const API_URL = "http://internet-ecs-alb-1941197226.ap-northeast-2.elb.amazonaws.com/chats";

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

    // 1. Status Card
    if (data.status) {
        cards.push({
            type: "status",
            title: data.status.locationName || "여행지 현황",
            subtitle: `혼잡도 ${data.status.locationStatus}점`,
            icon: "📍",
            content: `현재 혼잡도는 ${data.status.locationStatus}점 입니다.`, // General description
            time_table: (data.status.timeTable || []).map(t => ({
                time: t.time.includes(":") ? t.time.split(":")[0] + "시" : t.time, // "10:00" -> "10시"
                level: t.congestion
            }))
        });
    }

    // 2. Recommendation Card
    if (data.recommendation) {
        cards.push({
            type: "recommendation",
            title: data.recommendation.locationName,
            subtitle: "AI 추천",
            icon: "✨",
            content: data.recommendation.story
        });
    }

    // 3. Places Card
    if (data.around && data.around.length > 0) {
        cards.push({
            type: "places",
            title: "주변 명소",
            subtitle: `${data.around.length}곳 추천`,
            icon: "🌿",
            content: "",
            places: data.around.map(p => ({
                name: p.name,
                tag: p.reason
            }))
        });
    }

    // 4. Coupon Card
    if (data.coupons && data.coupons.length > 0) {
        cards.push({
            type: "coupon",
            title: "사용 가능 쿠폰",
            subtitle: `${data.coupons.length}개`,
            icon: "🎫",
            content: "할인 혜택을 확인하세요",
            coupons: data.coupons.map(c => ({
                name: c.name,
                code: c.barcode
            }))
        });
    }

    return cards;
}
