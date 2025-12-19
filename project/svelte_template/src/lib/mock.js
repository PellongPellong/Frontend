export const mockPlaces = [
    {
        id: 'p1',
        name: 'Seongsan Ilchulbong',
        category: 'nature',
        tags: ['nature', 'hiking', 'sunrise', 'scenery'],
        lat: 33.458,
        lng: 126.942,
        score: 0,
        aiSummary: 'A UNESCO World Heritage site known for its magnificent sunrise views.',
        congestion: 'high'
    },
    {
        id: 'p2',
        name: 'Manjanggul Cave',
        category: 'nature',
        tags: ['nature', 'unique', 'cool', 'history'],
        lat: 33.528,
        lng: 126.771,
        score: 0,
        congestion: 'medium'
    },
    {
        id: 'p3',
        name: 'Hallasan National Park',
        category: 'nature',
        tags: ['nature', 'hiking', 'mountain', 'active'],
        lat: 33.361,
        lng: 126.529,
        score: 0,
        congestion: 'high'
    },
    {
        id: 'p4',
        name: 'Jeongbang Waterfall',
        category: 'nature',
        tags: ['nature', 'waterfall', 'ocean', 'scenery'],
        lat: 33.244,
        lng: 126.568,
        score: 0,
        congestion: 'medium'
    },
    {
        id: 'p5',
        name: 'Oullim Market',
        category: 'culture',
        tags: ['culture', 'market', 'food', 'local'],
        lat: 33.513,
        lng: 126.526,
        score: 0,
        congestion: 'high'
    },
    {
        id: 'p6',
        name: 'Arte Museum',
        category: 'culture',
        tags: ['culture', 'art', 'indoor', 'photo'],
        lat: 33.396,
        lng: 126.345,
        score: 0,
        congestion: 'high'
    },
    {
        id: 'p7',
        name: 'Osulloc Tea Museum',
        category: 'culture',
        tags: ['culture', 'cafe', 'tea', 'relax'],
        lat: 33.306,
        lng: 126.289,
        score: 0,
        congestion: 'high'
    },
    {
        id: 'p8',
        name: 'Camellia Hill',
        category: 'nature',
        tags: ['nature', 'flowers', 'photo', 'relax'],
        lat: 33.290,
        lng: 126.369,
        score: 0,
        congestion: 'medium'
    },
    {
        id: 'p9',
        name: 'Udo Island',
        category: 'activity',
        tags: ['nature', 'bike', 'island', 'ocean'],
        lat: 33.504,
        lng: 126.953,
        score: 0,
        congestion: 'high'
    },
    {
        id: 'p10',
        name: 'Hyeopjae Beach',
        category: 'nature',
        tags: ['nature', 'beach', 'ocean', 'relax'],
        lat: 33.393,
        lng: 126.239,
        score: 0,
        congestion: 'medium'
    },
    {
        id: 'p11',
        name: 'Jeju Stone Park',
        category: 'culture',
        tags: ['culture', 'history', 'park', 'walk'],
        lat: 33.435,
        lng: 126.663,
        score: 0,
        congestion: 'low'
    },
    {
        id: 'p12',
        name: 'Bijarim Forest',
        category: 'nature',
        tags: ['nature', 'forest', 'healing', 'walk'],
        lat: 33.491,
        lng: 126.811,
        score: 0,
        congestion: 'medium'
    },
    {
        id: 'p13',
        name: 'Snoopy Garden',
        category: 'activity',
        tags: ['activity', 'theme', 'photo', 'family'],
        lat: 33.435,
        lng: 126.783,
        score: 0,
        congestion: 'medium'
    },
    {
        id: 'p14',
        name: 'Aewol Cafe Street',
        category: 'food',
        tags: ['food', 'cafe', 'ocean', 'trendy'],
        lat: 33.465,
        lng: 126.319,
        score: 0,
        congestion: 'high'
    },
    {
        id: 'p15',
        name: 'Sanbangsan Mountain',
        category: 'nature',
        tags: ['nature', 'scenery', 'flowers', 'mountain'],
        lat: 33.240,
        lng: 126.312,
        score: 0,
        congestion: 'low'
    },
    {
        id: 'p16',
        name: 'Yongmeori Coast',
        category: 'nature',
        tags: ['nature', 'geology', 'ocean', 'walk'],
        lat: 33.232,
        lng: 126.314,
        score: 0,
        congestion: 'medium'
    },
    {
        id: 'p17',
        name: '9.81 Park',
        category: 'activity',
        tags: ['activity', 'sports', 'racing', 'fun'],
        lat: 33.376,
        lng: 126.388,
        score: 0,
        congestion: 'medium'
    },
    {
        id: 'p18',
        name: 'Seopjikoji',
        category: 'nature',
        tags: ['nature', 'ocean', 'walk', 'scenery'],
        lat: 33.423,
        lng: 126.929,
        score: 0,
        congestion: 'medium'
    },
    {
        id: 'p19',
        name: 'Cheonjiyeon Waterfall',
        category: 'nature',
        tags: ['nature', 'waterfall', 'night', 'walk'],
        lat: 33.248,
        lng: 126.554,
        score: 0,
        congestion: 'high'
    },
    {
        id: 'p20',
        name: 'Dongmun Traditional Market',
        category: 'food',
        tags: ['food', 'market', 'night', 'seafood'],
        lat: 33.511,
        lng: 126.528,
        score: 0,
        congestion: 'high'
    }
];

// Mock chat API response for testing
export const mockChatResponse = {
    sessionId: "mock-session-123",
    cards: [
        {
            type: "status",
            title: "성산일출봉",
            subtitle: "혼잡도 75점",
            icon: "📍",
            content: "현재 혼잡도는 75점 입니다.",
            time_table: [
                { time: "09시", level: 40 },
                { time: "10시", level: 60 },
                { time: "11시", level: 75 },
                { time: "12시", level: 85 },
                { time: "13시", level: 80 },
                { time: "14시", level: 70 },
                { time: "15시", level: 55 },
                { time: "16시", level: 40 },
                { time: "17시", level: 30 }
            ]
        },
        {
            type: "recommendation",
            title: "비자림 숲",
            subtitle: "AI 추천",
            icon: "✨",
            content: "성산일출봉이 혼잡하니 비자림 숲에서 조용히 산책하시는 것을 추천드려요. 평화롭고 치유되는 시간을 보내실 수 있습니다."
        },
        {
            type: "places",
            title: "주변 명소",
            subtitle: "3곳 추천",
            icon: "🌿",
            content: "",
            places: [
                { name: "만장굴", tag: "신비로운 용암 동굴" },
                { name: "섹지코지", tag: "아름다운 해안 산책로" },
                { name: "우도", tag: "평화로운 섬 여행" }
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