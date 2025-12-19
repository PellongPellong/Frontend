// Simplified mock place data for testing
export const mockPlaces = [
    {
        id: 'p1',
        name: '성산일출봉',
        category: 'nature',
        tags: ['nature', 'hiking', 'sunrise', 'scenery'],
        lat: 33.458,
        lng: 126.942,
        score: 0,
        aiSummary: '유네스코 세계문화유산으로 일출 풍경이 아름다운 곳입니다.',
        congestion: 'medium'
    }
];

// Mock chat API response for testing
export const mockChatResponse = {
    sessionId: "mock-session-123",
    cards: [
        {
            type: "status",
            title: "성산일출봉",
            subtitle: "혼잡도 3점",
            icon: "📍",
            content: "현재 혼잡도는 3점 입니다.",
            time_table: [
                { time: "09시", level: 2 },
                { time: "10시", level: 3 },
                { time: "11시", level: 4 },
                { time: "12시", level: 5 },
                { time: "13시", level: 4 },
                { time: "14시", level: 3 },
                { time: "15시", level: 3 },
                { time: "16시", level: 2 },
                { time: "17시", level: 2 }
            ]
        },
        {
            type: "recommendation",
            title: "비자림 숲",
            subtitle: "AI 추천",
            icon: "✨",
            content: "성산일출봉이 혼잡하니 비자림 숲에서 조용히 산책하시는 것을 추천드려요. 평화롭고 치유되는 시간을 보내실 수 있습니다.",
            lat: 33.491,
            lng: 126.811
        },
        {
            type: "places",
            title: "주변 명소",
            subtitle: "3곳 추천",
            icon: "🌿",
            content: "",
            places: [
                { name: "만장굴", tag: "신비로운 용암 동굴", lat: 33.527, lng: 126.772 },
                { name: "섭지코지", tag: "아름다운 해안 산책로", lat: 33.429, lng: 126.925 },
                { name: "우도", tag: "평화로운 섬 여행", lat: 33.502, lng: 126.951 }
            ]
        },
        {
            type: "navigation",
            title: "길찾기",
            subtitle: "비자림 숲",
            icon: "🗺️",
            placeName: "비자림 숲",
            lat: 33.491,
            lng: 126.811,
            additionalPlaces: [
                { name: "만장굴", lat: 33.527, lng: 126.772 },
                { name: "섭지코지", lat: 33.429, lng: 126.925 },
                { name: "우도", lat: 33.502, lng: 126.951 }
            ]
        },
        {
            type: "coupon",
            title: "사용 가능 쿠폰",
            subtitle: "2개",
            icon: "🎫",
            content: "할인 혜택을 확인하세요",
            coupons: [
                { name: "비자림 숲 입장료 20% 할인", code: "BIJARIM20" },
                { name: "제주 카페 10% 할인", code: "CAFE10" }
            ]
        }
    ]
};