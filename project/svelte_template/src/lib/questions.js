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
        id: 'groupSize',
        title: '몇 명이서 여행하나요?',
        subtitle: '인원 수에 따라 자리/체험/동선을 조정해요',
        mascotSay: '인원에 따라\n편한 곳이 달라져요!',
        options: [
            { value: '1', label: '1명', emoji: '1️⃣' },
            { value: '2', label: '2명', emoji: '2️⃣' },
            { value: '3to4', label: '3~4명', emoji: '4️⃣' },
            { value: '5plus', label: '5명 이상', emoji: '🧑‍🤝‍🧑' }
        ]
    },
    {
        id: 'kidsAge',
        title: '아이 동반이 있나요?',
        subtitle: '아이 연령대에 따라 안전/편의성을 반영해요',
        mascotSay: '아이랑 같이면\n편한 코스로 바꿔드려요!',
        options: [
            { value: 'none', label: '없어요', emoji: '✅' },
            { value: 'toddler', label: '유아(미취학)', emoji: '👶' },
            { value: 'elementary', label: '초등', emoji: '🧒' },
            { value: 'teen', label: '청소년', emoji: '🧑' }
        ]
    },
    {
        id: 'seniorWith',
        title: '어르신과 함께하나요?',
        subtitle: '계단/경사/휴식 포인트 등을 더 신경 써요',
        mascotSay: '무리 없는 코스로\n편하게 다녀와요!',
        options: [
            { value: 'no', label: '아니요', emoji: '🙂' },
            { value: 'yesFit', label: '네 (활동 가능)', emoji: '💪' },
            { value: 'yesCare', label: '네 (편의 중요)', emoji: '🦯' },
            { value: 'notSure', label: '상황에 따라', emoji: '🧭' }
        ]
    },
    {
        id: 'petWith',
        title: '반려동물과 함께하나요?',
        subtitle: '반려동물 동반 가능 장소 위주로 추천할 수 있어요',
        mascotSay: '동반 가능 여부를\n잘 확인해드릴게요!',
        options: [
            { value: 'no', label: '아니요', emoji: '🙅' },
            { value: 'yesSmall', label: '네 (소형)', emoji: '🐶' },
            { value: 'yesBig', label: '네 (중대형)', emoji: '🐕' },
            { value: 'maybe', label: '아직 고민 중', emoji: '🤔' }
        ]
    },
    {
        id: 'celebration',
        title: '이번 여행, 특별한 이벤트가 있나요?',
        subtitle: '기념일이면 분위기 좋은 곳을 더 추천해요',
        mascotSay: '특별한 날이면\n특별한 장소가 필요하죠!',
        options: [
            { value: 'none', label: '없어요', emoji: '🙂' },
            { value: 'birthday', label: '생일/축하', emoji: '🎂' },
            { value: 'honeymoon', label: '허니문', emoji: '💍' },
            { value: 'proposal', label: '프로포즈/기념 촬영', emoji: '📸' }
        ]
    },
    {
        id: 'tripLength',
        title: '여행 일정은 얼마나 되나요?',
        subtitle: '일정 길이에 따라 동선 밀도를 조절해요',
        mascotSay: '일정이 짧으면\n가까운 곳 위주로 추천해요!',
        options: [
            { value: 'halfday', label: '반나절', emoji: '⏱️' },
            { value: 'oneday', label: '당일치기', emoji: '🗓️' },
            { value: 'twothree', label: '2~3일', emoji: '📆' },
            { value: 'long', label: '4일 이상', emoji: '🧳' }
        ]
    },
    {
        id: 'baseArea',
        title: '숙소/거점은 어디인가요?',
        subtitle: '거점 기준으로 이동 시간을 줄여드려요',
        mascotSay: '거점 근처부터\n효율적으로 묶어볼게요!',
        options: [
            { value: 'jejuCity', label: '제주시(공항 근처)', emoji: '🏙️' },
            { value: 'aewolHallim', label: '애월/한림', emoji: '🌊' },
            { value: 'gujwaJocheon', label: '구좌/조천', emoji: '🌿' },
            { value: 'seogwipoJungmun', label: '서귀포/중문', emoji: '🏝️' },
            { value: 'seongsanPyoseon', label: '성산/표선', emoji: '🌅' },
            { value: 'unsure', label: '아직 미정', emoji: '🧭' }
        ]
    },
    {
        id: 'moveRadius',
        title: '이동 반경은 어느 정도가 좋아요?',
        subtitle: '이동 시간을 줄이거나, 넓게 커버할지 결정해요',
        mascotSay: '멀리 이동이 싫으면\n근처만 골라드릴게요!',
        options: [
            { value: '30m', label: '30분 이내', emoji: '🕒' },
            { value: '60m', label: '1시간 이내', emoji: '🕐' },
            { value: '90m', label: '1시간 30분까지', emoji: '🕜' },
            { value: 'any', label: '상관없어요', emoji: '🌍' }
        ]
    },
    {
        id: 'dailyPace',
        title: '하루 일정 템포는 어떤 게 좋아요?',
        subtitle: '한 곳을 오래 vs 여러 곳을 빠르게',
        mascotSay: '템포에 맞춰\n코스 밀도를 맞출게요!',
        options: [
            { value: 'slow', label: '느긋하게', emoji: '🧘' },
            { value: 'normal', label: '보통', emoji: '🚶' },
            { value: 'packed', label: '빡빡하게', emoji: '⚡' },
            { value: 'mix', label: '상황 따라', emoji: '🧭' }
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
            { value: 'evening', label: '저녁 (일몰)', emoji: '🌇' },
            { value: 'night', label: '밤 (야경)', emoji: '🌙' }
        ]
    },
    {
        id: 'nightPreference',
        title: '밤에는 어떤 걸 하고 싶나요?',
        subtitle: '야경/드라이브/술/휴식을 반영해요',
        mascotSay: '밤 코스도\n취향대로 추천해요!',
        options: [
            { value: 'rest', label: '일찍 쉬기', emoji: '🛌' },
            { value: 'nightView', label: '야경/산책', emoji: '🌃' },
            { value: 'drive', label: '야간 드라이브', emoji: '🚗' },
            { value: 'bar', label: '술/펍/바', emoji: '🍺' }
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
        id: 'localVsTrendy',
        title: '로컬 감성 vs 핫플, 어디가 좋아요?',
        subtitle: '관광형/로컬형 추천 비중을 맞춰요',
        mascotSay: '취향에 맞는 결로\n골라드릴게요!',
        options: [
            { value: 'local', label: '로컬 감성', emoji: '🏡' },
            { value: 'mix', label: '반반', emoji: '🌓' },
            { value: 'trendy', label: '핫플/신상', emoji: '✨' },
            { value: 'classic', label: '클래식 명소', emoji: '🗺️' }
        ]
    },
    {
        id: 'indoorOutdoor',
        title: '실내/야외 중 어디가 더 좋아요?',
        subtitle: '비 오는 날에도 가능한 후보를 조정해요',
        mascotSay: '취향에 맞춰\n실내/야외 비중을 맞출게요!',
        options: [
            { value: 'indoor', label: '실내 위주', emoji: '🏠' },
            { value: 'outdoor', label: '야외 위주', emoji: '🌳' },
            { value: 'mix', label: '반반', emoji: '🌓' },
            { value: 'depends', label: '날씨 보고 결정', emoji: '🧭' }
        ]
    },
    {
        id: 'weatherSensitivity',
        title: '날씨 영향은 어느 정도 괜찮나요?',
        subtitle: '비/바람/파도에 민감한 코스를 조절해요',
        mascotSay: '날씨가 애매하면\n실내 플랜도 준비해요!',
        options: [
            { value: 'very', label: '날씨에 매우 민감', emoji: '🌧️' },
            { value: 'some', label: '조금 민감', emoji: '🌬️' },
            { value: 'ok', label: '크게 상관 없음', emoji: '🌤️' },
            { value: 'love', label: '오히려 즐김', emoji: '🌪️' }
        ]
    },
    {
        id: 'crowdTolerance',
        title: '사람 많은 곳은 어느 정도 괜찮나요?',
        subtitle: '혼잡한 스팟 감산/가산에 직접 반영돼요',
        mascotSay: '한적한 곳도\n많이 알고 있어요!',
        options: [
            { value: 'hate', label: '최대한 피하고 싶어요', emoji: '🙈' },
            { value: 'some', label: '가능하면 피하고 싶어요', emoji: '🚶' },
            { value: 'ok', label: '보통이에요', emoji: '🙂' },
            { value: 'love', label: '북적북적도 좋아요', emoji: '🎉' }
        ]
    },
    {
        id: 'waitTolerance',
        title: '웨이팅(대기)은 어느 정도까지?',
        subtitle: '대기 긴 맛집/핫플 후보를 조절해요',
        mascotSay: '기다림이 싫다면\n대안을 추천할게요!',
        options: [
            { value: 'none', label: '거의 못 기다려요', emoji: '⛔' },
            { value: 'short', label: '10~20분까지', emoji: '⏳' },
            { value: 'medium', label: '30~60분도 가능', emoji: '🕰️' },
            { value: 'long', label: '길어도 괜찮아요', emoji: '🧘' }
        ]
    },
    {
        id: 'reservationTolerance',
        title: '예약이 필요한 곳도 괜찮나요?',
        subtitle: '예약/티켓/시간 지정이 있는 코스를 반영해요',
        mascotSay: '예약 스트레스 없이\n갈 수 있는 곳도 있어요!',
        options: [
            { value: 'no', label: '예약 싫어요', emoji: '🙅' },
            { value: 'some', label: '가능하면 피하고 싶어요', emoji: '😅' },
            { value: 'ok', label: '상관 없어요', emoji: '🆗' },
            { value: 'prefer', label: '예약이 오히려 좋아요', emoji: '📌' }
        ]
    },
    {
        id: 'budgetLevel',
        title: '예산 감각은 어떤 편인가요?',
        subtitle: '입장료/체험비/식사 단가에 반영해요',
        mascotSay: '예산에 맞춰\n현실적인 코스로 짜볼게요!',
        options: [
            { value: 'free', label: '무료/저비용 선호', emoji: '🆓' },
            { value: 'low', label: '가성비 위주', emoji: '🪙' },
            { value: 'mid', label: '적당히', emoji: '💳' },
            { value: 'high', label: '경험이면 OK', emoji: '✨' }
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
            { value: 'active', label: '활동적', emoji: '🏋️' },
            { value: 'extreme', label: '아주 빡세게', emoji: '⚡' }
        ]
    },
    {
        id: 'walkingLimit',
        title: '총 걷는 양은 어느 정도가 좋아요?',
        subtitle: '산책/관광지 규모/동선 길이를 조절해요',
        mascotSay: '걷는 양에 맞춰\n코스를 줄이거나 늘려요!',
        options: [
            { value: 'min', label: '최소로', emoji: '🪑' },
            { value: 'some', label: '적당히', emoji: '🚶' },
            { value: 'much', label: '많이 걸어도 돼요', emoji: '🥾' },
            { value: 'trek', label: '트레킹 환영', emoji: '⛰️' }
        ]
    },
    {
        id: 'slopeStairs',
        title: '계단/오르막은 괜찮나요?',
        subtitle: '오름/전망대/절벽 코스 난이도 조절에 써요',
        mascotSay: '힘든 구간은\n미리 피해서 골라드려요!',
        options: [
            { value: 'avoid', label: '피하고 싶어요', emoji: '🚫' },
            { value: 'some', label: '조금은 괜찮아요', emoji: '😮‍💨' },
            { value: 'ok', label: '괜찮아요', emoji: '💪' },
            { value: 'love', label: '오르막도 좋아요', emoji: '🏔️' }
        ]
    },
    {
        id: 'mobilitySupport',
        title: '접근성/이동 보조가 필요한가요?',
        subtitle: '유모차/휠체어/보행 부담 등을 반영해요',
        mascotSay: '접근성 좋은 곳으로\n우선 추천할게요!',
        multiple: true,
        options: [
            { value: 'none', label: '해당 없음', emoji: '✅' },
            { value: 'stroller', label: '유모차', emoji: '👶' },
            { value: 'wheelchair', label: '휠체어', emoji: '♿' },
            { value: 'backPain', label: '허리/무릎 부담', emoji: '🦵' },
            { value: 'needRest', label: '자주 쉬어야 함', emoji: '🪑' }
        ]
    },
    {
        id: 'carSkill',
        title: '운전은 어떤 편인가요?',
        subtitle: '좁은 길/산간 도로/야간 운전을 반영해요',
        mascotSay: '운전 부담이 적은\n코스로 안내할게요!',
        options: [
            { value: 'noCar', label: '운전 안 해요', emoji: '🚫' },
            { value: 'cityOnly', label: '큰 길 위주로만', emoji: '🛣️' },
            { value: 'ok', label: '어느 정도 가능', emoji: '🚗' },
            { value: 'confident', label: '산길도 자신 있어요', emoji: '🏁' }
        ]
    },
    {
        id: 'parkingNeed',
        title: '주차는 얼마나 중요해요?',
        subtitle: '주차 빡센 곳을 덜 추천할 수 있어요',
        mascotSay: '주차 스트레스가 적은\n장소를 골라볼게요!',
        options: [
            { value: 'must', label: '주차 편한 곳만', emoji: '🅿️' },
            { value: 'prefer', label: '되면 좋겠어요', emoji: '👍' },
            { value: 'paidOk', label: '유료도 괜찮아요', emoji: '💰' },
            { value: 'none', label: '상관없어요', emoji: '🙂' }
        ]
    },
    {
        id: 'ferryOk',
        title: '배/도서(우도 등) 일정은 괜찮나요?',
        subtitle: '섬 투어/유람선 포함 여부를 결정해요',
        mascotSay: '멀미가 있다면\n배 코스는 빼드릴게요!',
        options: [
            { value: 'avoid', label: '피하고 싶어요', emoji: '🙅' },
            { value: 'short', label: '짧은 건 가능', emoji: '⏲️' },
            { value: 'ok', label: '괜찮아요', emoji: '⛴️' },
            { value: 'love', label: '섬 투어 좋아요', emoji: '🏝️' }
        ]
    },
    {
        id: 'waterActivity',
        title: '해양/물놀이 액티비티는 원하나요?',
        subtitle: '서핑/스노클링/카약 등을 반영해요',
        mascotSay: '물놀이 취향이면\n바다 쪽을 더 추천해요!',
        options: [
            { value: 'no', label: '원치 않아요', emoji: '🚫' },
            { value: 'light', label: '가볍게만', emoji: '🩴' },
            { value: 'yes', label: '해보고 싶어요', emoji: '🤿' },
            { value: 'love', label: '완전 좋아해요', emoji: '🏄' }
        ]
    },
    {
        id: 'heightsFear',
        title: '높은 곳/절벽 전망은 어때요?',
        subtitle: '전망대/절벽 산책로 추천에 반영돼요',
        mascotSay: '무서운 코스는\n피해서 추천할게요!',
        options: [
            { value: 'fear', label: '무서워요', emoji: '😨' },
            { value: 'some', label: '살짝 부담', emoji: '😬' },
            { value: 'ok', label: '괜찮아요', emoji: '🙂' },
            { value: 'love', label: '전망 최고!', emoji: '👀' }
        ]
    },
    {
        id: 'photoPriority',
        title: '사진/인생샷 비중은?',
        subtitle: '뷰/포토스팟 중심 추천 강도를 조절해요',
        mascotSay: '예쁜 뷰가 있는 곳을\n우선으로 묶어볼게요!',
        options: [
            { value: 'low', label: '크게 중요치 않아요', emoji: '🙂' },
            { value: 'mid', label: '적당히', emoji: '📷' },
            { value: 'high', label: '중요해요', emoji: '✨' },
            { value: 'very', label: '최우선!', emoji: '📸' }
        ]
    },
    {
        id: 'shopping',
        title: '쇼핑/기념품은 얼마나 할까요?',
        subtitle: '시장/편집샵/기념품 코스 비중을 맞춰요',
        mascotSay: '쇼핑이 싫으면\n그쪽은 빼드릴게요!',
        options: [
            { value: 'none', label: '거의 안 해요', emoji: '🚫' },
            { value: 'souvenir', label: '기념품 정도', emoji: '🎁' },
            { value: 'market', label: '시장 구경 좋아요', emoji: '🛍️' },
            { value: 'lots', label: '쇼핑도 메인!', emoji: '🧾' }
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
    },
    {
        id: 'mustEat',
        title: '특히 먹고 싶은 메뉴가 있나요?',
        subtitle: '선호 메뉴가 있으면 맛집 추천 정확도가 올라가요',
        mascotSay: '먹고 싶은 게 확실하면\n맞춤 추천이 쉬워요!',
        multiple: true,
        options: [
            { value: 'blackPork', label: '흑돼지', emoji: '🐖' },
            { value: 'gogiGuksu', label: '고기국수', emoji: '🍜' },
            { value: 'abalone', label: '전복', emoji: '🐚' },
            { value: 'cutlassfish', label: '갈치', emoji: '🐟' },
            { value: 'sashimi', label: '회/해산물', emoji: '🍣' },
            { value: 'none', label: '딱히 없어요', emoji: '🙂' }
        ]
    },
    {
        id: 'dietary',
        title: '식사 제한이 있나요?',
        subtitle: '알레르기/채식/비건 등은 강한 필터 조건이에요',
        mascotSay: '먹지 못하는 건\n확실히 빼고 추천해요!',
        multiple: true,
        options: [
            { value: 'none', label: '제한 없음', emoji: '✅' },
            { value: 'vegetarian', label: '채식(페스코/락토 등)', emoji: '🥗' },
            { value: 'vegan', label: '비건', emoji: '🌱' },
            { value: 'allergy', label: '알레르기 있음', emoji: '⚠️' },
            { value: 'noRaw', label: '날것(회 등) 어려움', emoji: '🚫' }
        ]
    },
    {
        id: 'spicyLevel',
        title: '매운 음식은 어느 정도?',
        subtitle: '매운 메뉴 추천 강도를 조절해요',
        mascotSay: '맵찔이/맵부심\n모두 맞춰드릴게요!',
        options: [
            { value: 'no', label: '거의 못 먹어요', emoji: '🥛' },
            { value: 'mild', label: '약간만', emoji: '🌶️' },
            { value: 'hot', label: '매운 거 좋아해요', emoji: '🔥' },
            { value: 'any', label: '상관 없어요', emoji: '🙂' }
        ]
    },
    {
        id: 'alcohol',
        title: '술/바(Bar)도 일정에 넣을까요?',
        subtitle: '술을 마시면 밤 코스 추천이 달라져요',
        mascotSay: '한 잔의 분위기까지\n맞춰드릴게요!',
        options: [
            { value: 'no', label: '안 마셔요', emoji: '🚫' },
            { value: 'light', label: '가볍게만', emoji: '🍷' },
            { value: 'yes', label: '좋아해요', emoji: '🍺' },
            { value: 'depends', label: '상황 봐서', emoji: '🧭' }
        ]
    },
    {
        id: 'cafeNeed',
        title: '카페는 어떤 스타일이 좋아요?',
        subtitle: '바다뷰/조용함/작업/디저트 중심을 반영해요',
        mascotSay: '카페 취향에 맞는 곳\n많이 알고 있어요!',
        options: [
            { value: 'view', label: '뷰 좋은 카페', emoji: '🌊' },
            { value: 'dessert', label: '디저트 맛집', emoji: '🍰' },
            { value: 'quiet', label: '조용한 카페', emoji: '📚' },
            { value: 'work', label: '작업하기 좋은 곳', emoji: '💻' }
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
        id: 'avoidMore',
        title: '추가로 피하고 싶은 게 있나요?',
        subtitle: '해당되는 것들을 모두 선택해주세요',
        mascotSay: '불편한 조건은\n최대한 피해갈게요!',
        multiple: true,
        options: [
            { value: 'stairs', label: '계단 많은 곳', emoji: '🪜' },
            { value: 'narrowRoad', label: '좁은 길/산길 운전', emoji: '🛣️' },
            { value: 'smell', label: '비린내/강한 냄새', emoji: '👃' },
            { value: 'insects', label: '벌레 많은 곳', emoji: '🦟' },
            { value: 'height', label: '절벽/높은 곳', emoji: '🧗' },
            { value: 'queue', label: '줄 서는 포토존', emoji: '📷' }
        ]
    }
]
