export const allSuggestions = [
    { display: "🌊 바다 볼 수 있는 카페", text: "바다 볼 수 있는 카페" },
    { display: "⛰️ 오름 코스 추천", text: "오름 코스 추천" },
    { display: "👨‍👩‍👧 가족 여행 코스", text: "가족 여행 코스" },
    { display: "🍜 제주 맛집 추천", text: "제주 맛집 추천" },
    { display: "🏖️ 한적한 해변 찾기", text: "한적한 해변" },
    { display: "📸 사진 명소 추천", text: "사진 명소" },
    { display: "🌄 일출 명소 추천", text: "일출 명소" },
    { display: "🌃 일몽 보기 좋은 곳", text: "일몽 명소" },
    { display: "🚶 산책로 추천", text: "산책로 추천" },
    { display: "🏞️ 자연 휴양지", text: "자연 휴양지" },
    { display: "🚗 드라이브 코스", text: "드라이브 코스" },
    { display: "🏛️ 역사 유적지", text: "역사 유적지" },
    { display: "🧘 힐링 스파", text: "힐링 스파" },
    { display: "🎵 제주 축제 정보", text: "축제 정보" },
    { display: "🌺 꽃 명소 추천", text: "꽃 명소" },
];

export const mockResponses = {
    "성산": {
        session_id: "mock-session-001",
        cards: [
            {
                type: "status",
                locationName: "성산일출봉",
                locationStatus: 5,
                coordinate: {
                    lat: 33.4608,
                    lng: 126.9423
                },
                timeTable: [
                    { time: "9시", congestion: 5 },
                    { time: "10시", congestion: 5 },
                    { time: "11시", congestion: 4 },
                    { time: "12시", congestion: 3 },
                    { time: "13시", congestion: 4 },
                    { time: "14시", congestion: 5 },
                    { time: "15시", congestion: 4 },
                    { time: "16시", congestion: 3 },
                    { time: "17시", congestion: 2 },
                    { time: "18시", congestion: 2 },
                    { time: "19시", congestion: 1 },
                    { time: "20시", congestion: 1 },
                ],
            },
            {
                type: "recommendation",
                locationName: "월령지",
                story: "조선시대 목마장으로 조용하고 평화로운 산책로. 관광객이 적고 평화로운 분위기를 즐길 수 있어요.",
                coordinate: {
                    lat: 33.4512,
                    lng: 126.8234
                }
            },
            {
                type: "places",
                around: [
                    { 
                        name: "성읍도", 
                        reason: "한적한 해변",
                        coordinate: {
                            lat: 33.4123,
                            lng: 126.8567
                        }
                    },
                    { 
                        name: "광치기해변", 
                        reason: "로컬 비치",
                        coordinate: {
                            lat: 33.4234,
                            lng: 126.8678
                        }
                    },
                    { 
                        name: "표선해변", 
                        reason: "풀빌라",
                        coordinate: {
                            lat: 33.4345,
                            lng: 126.8789
                        }
                    },
                ],
            },
            {
                type: "coupon",
                coupons: [
                    { name: "월령지 20% 할인", barcode: "1234-5678-9012" },
                    { name: "카페 음료 무료", barcode: "9876-5432-1098" },
                ],
            },
        ],
    },
    "카페": {
        session_id: "mock-session-002",
        cards: [
            {
                type: "status",
                locationName: "성산일출봉",
                locationStatus: 5,
                coordinate: {
                    lat: 33.4608,
                    lng: 126.9423
                },
                timeTable: [
                    { time: "9시", congestion: 5 },
                    { time: "10시", congestion: 5 },
                    { time: "11시", congestion: 4 },
                    { time: "12시", congestion: 3 },
                    { time: "13시", congestion: 4 },
                    { time: "14시", congestion: 5 },
                    { time: "15시", congestion: 4 },
                    { time: "16시", congestion: 3 },
                    { time: "17시", congestion: 2 },
                    { time: "18시", congestion: 2 },
                    { time: "19시", congestion: 1 },
                    { time: "20시", congestion: 1 },
                ],
            },
            {
                type: "recommendation",
                locationName: "월령지",
                story: "조선시대 목마장으로 조용하고 평화로운 산책로. 관광객이 적고 평화로운 분위기를 즐길 수 있어요.",
                coordinate: {
                    lat: 33.4512,
                    lng: 126.8234
                }
            },
            {
                type: "places",
                around: [
                    { 
                        name: "성읍도", 
                        reason: "한적한 해변",
                        coordinate: {
                            lat: 33.4123,
                            lng: 126.8567
                        }
                    },
                    { 
                        name: "광치기해변", 
                        reason: "로컬 비치",
                        coordinate: {
                            lat: 33.4234,
                            lng: 126.8678
                        }
                    },
                    { 
                        name: "표선해변", 
                        reason: "풀빌라",
                        coordinate: {
                            lat: 33.4345,
                            lng: 126.8789
                        }
                    },
                ],
            },
            {
                type: "coupon",
                coupons: [
                    { name: "월령지 20% 할인", barcode: "1234-5678-9012" },
                    { name: "카페 음료 무료", barcode: "9876-5432-1098" },
                ],
            },
        ],
    },
    "default": {
        session_id: "mock-session-default",
        cards: [
            {
                type: "status",
                locationName: "성산일출봉",
                locationStatus: 5,
                coordinate: {
                    lat: 33.4608,
                    lng: 126.9423
                },
                timeTable: [
                    { time: "9시", congestion: 5 },
                    { time: "10시", congestion: 5 },
                    { time: "11시", congestion: 4 },
                    { time: "12시", congestion: 3 },
                    { time: "13시", congestion: 4 },
                    { time: "14시", congestion: 5 },
                    { time: "15시", congestion: 4 },
                    { time: "16시", congestion: 3 },
                    { time: "17시", congestion: 2 },
                    { time: "18시", congestion: 2 },
                    { time: "19시", congestion: 1 },
                    { time: "20시", congestion: 1 },
                ],
            },
            {
                type: "recommendation",
                locationName: "월령지",
                story: "조선시대 목마장으로 조용하고 평화로운 산책로. 관광객이 적고 평화로운 분위기를 즐길 수 있어요.",
                coordinate: {
                    lat: 33.4512,
                    lng: 126.8234
                }
            },
            {
                type: "places",
                around: [
                    { 
                        name: "성읍도", 
                        reason: "한적한 해변",
                        coordinate: {
                            lat: 33.4123,
                            lng: 126.8567
                        }
                    },
                    { 
                        name: "광치기해변", 
                        reason: "로컬 비치",
                        coordinate: {
                            lat: 33.4234,
                            lng: 126.8678
                        }
                    },
                    { 
                        name: "표선해변", 
                        reason: "풀빌라",
                        coordinate: {
                            lat: 33.4345,
                            lng: 126.8789
                        }
                    },
                ],
            },
            {
                type: "coupon",
                coupons: [
                    { name: "월령지 20% 할인", barcode: "1234-5678-9012" },
                    { name: "카페 음료 무료", barcode: "9876-5432-1098" },
                ],
            },
        ],
    },
};
