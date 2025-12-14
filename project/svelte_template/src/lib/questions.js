export const questions = [
    {
        id: 'transport',
        title: '어떻게 이동할 거예요?',
        subtitle: '주로 사용할 교통수단을 알려주세요',
        mascotSay: '이동 방법에 따라\n가까운 곳을 추천해드려요!',
        options: [
            { value: 'walk', label: '걸어서 이동', emoji: '🚶' },
            { value: 'public', label: '대중교통', emoji: '🚌' },
            { value: 'car', label: '렌터카', emoji: '🚗' },
            { value: 'bike', label: '자전거/스쿠터', emoji: '🚴' }
        ]
    },
    {
        id: 'companion',
        title: '누구랑 함께인가요?',
        subtitle: '함께 여행하는 동행자를 알려주세요',
        mascotSay: '동행자에 따라\n더 잘 맞는 곳을 찾아볼게요!',
        options: [
            { value: 'solo', label: '혼자 여행', emoji: '🧘' },
            { value: 'couple', label: '연인과 함께', emoji: '💑' },
            { value: 'family', label: '가족과 함께', emoji: '👨‍👩‍👧' },
            { value: 'friends', label: '친구들과', emoji: '👯' }
        ]
    },
    {
        id: 'timeOfDay',
        title: '언제 가고 싶으세요?',
        subtitle: '선호하는 시간대를 알려주세요',
        mascotSay: '시간대별로\n다른 매력이 있답니다!',
        options: [
            { value: 'morning', label: '아침 (일출)', emoji: '🌅' },
            { value: 'afternoon', label: '오후 (점심)', emoji: '☀️' },
            { value: 'evening', label: '저녁 (일몽)', emoji: '🌇' },
            { value: 'night', label: '밤 (야경)', emoji: '🌙' }
        ]
    },
    {
        id: 'mood',
        title: '어떤 분위기를 원하세요?',
        subtitle: '원하는 여행 스타일을 골라주세요',
        mascotSay: '분위기에 딱 맞는\n장소를 추천해드릴게요!',
        options: [
            { value: 'nature', label: '자연 & 힐링', emoji: '🌿' },
            { value: 'culture', label: '문화 & 역사', emoji: '🏛️' },
            { value: 'activity', label: '액티비티 & 재미', emoji: '🎪' },
            { value: 'relax', label: '편안한 휴식', emoji: '☕' }
        ]
    },
    {
        id: 'avoid',
        title: '피하고 싶은 게 있나요?',
        subtitle: '해당하는 것들을 모두 선택해주세요',
        mascotSay: '피하고 싶은 것들은\n제외하고 추천할게요!',
        multiple: true,
        options: [
            { value: 'crowd', label: '사람 많은 곳', emoji: '👥' },
            { value: 'walking', label: '많이 걷기', emoji: '🚶‍♂️' },
            { value: 'cost', label: '비용 부담', emoji: '💸' },
            { value: 'weather', label: '날씨 영향', emoji: '☁️' }
        ]
    },
    {
        id: 'intensity',
        title: '얼마나 움직일거예요?',
        subtitle: '활동 강도를 선택해주세요',
        mascotSay: '체력에 맞는\n장소를 찾아드릴게요!',
        options: [
            { value: 'light', label: '가볍게', emoji: '🎈' },
            { value: 'moderate', label: '보통', emoji: '🚶' },
            { value: 'active', label: '활동적', emoji: '🏋️' }
        ]
    },
    {
        id: 'food',
        title: '어떤 음식을 좋아하세요?',
        subtitle: '근처에서 먹고 싶은 음식을 골라주세요',
        mascotSay: '맛있는 음식이 있는\n곳으로 안내할게요!',
        options: [
            { value: 'seafood', label: '해산물', emoji: '🦐' },
            { value: 'meat', label: '고기/구이', emoji: '🥩' },
            { value: 'cafe', label: '카페 & 디저트', emoji: '🍰' },
            { value: 'traditional', label: '제주 전통 음식', emoji: '🍜' }
        ]
    }
];
