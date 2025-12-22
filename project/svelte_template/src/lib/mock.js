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
            locationName: "성산일출봉",
            locationStatus: 3,
            coordinate: {
                lat: 33.458,
                lng: 126.942
            },
            timeTable: [
                { time: "09시", congestion: 2 },
                { time: "10시", congestion: 3 },
                { time: "11시", congestion: 4 },
                { time: "12시", congestion: 5 },
                { time: "13시", congestion: 4 },
                { time: "14시", congestion: 3 },
                { time: "15시", congestion: 3 },
                { time: "16시", congestion: 2 },
                { time: "17시", congestion: 2 }
            ]
        },
        {
            type: "recommendation",
            locationName: "비자림 숲",
            story: "성산일출봉이 혼잡하니 비자림 숲에서 조용히 산책하시는 것을 추천드려요. 평화롭고 치유되는 시간을 보내실 수 있습니다.",
            coordinate: {
                lat: 33.491,
                lng: 126.811
            }
        },
        {
            type: "navigation",
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
            type: "places",
            around: [
                { name: "만장굴", reason: "신비로운 용암 동굴", coordinate: { lat: 33.527, lng: 126.772 } },
                { name: "섭지코지", reason: "아름다운 해안 산책로", coordinate: { lat: 33.429, lng: 126.925 } },
                { name: "우도", reason: "평화로운 섬 여행", coordinate: { lat: 33.502, lng: 126.951 } }
            ]
        },
        {
            type: "coupon",
            coupons: [
                { name: "비자림 숲 입장료 20% 할인", barcode: "BIJARIM20" },
                { name: "제주 카페 10% 할인", barcode: "CAFE10" }
            ]
        }
    ]
};