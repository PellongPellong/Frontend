# Design Document

## Overview

제주 관광 분산 추천 데모 서비스의 프론트엔드 아키텍처 설계 문서이다. Svelte 5 + Vite 7 + Tailwind CSS 기반으로 구현하며, 외부 라우터 없이 App.svelte의 로컬 state로 화면 전환을 관리한다. 백엔드 없이도 Mock 데이터와 Rule Engine으로 완전히 동작하며, 백엔드 연동 시 자연스럽게 대체된다.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        App.svelte                           │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Local State: page, selectedPlace                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                            │                                │
│  ┌─────────┬─────────┬─────────┬─────────┐                │
│  │  Intro  │ Survey  │ Result  │ Detail  │  ← Screens     │
│  └─────────┴─────────┴─────────┴─────────┘                │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│    Stores    │   │  Rule Engine │   │   Adapter    │
│ preferences  │   │  scoring.js  │   │   api.js     │
│ recommendations│  │              │   │   mock.js    │
│ ui           │   │              │   │              │
└──────────────┘   └──────────────┘   └──────────────┘
```

### 폴더 구조

```
src/
├── App.svelte              # 메인 앱, 라우팅 상태 관리
├── main.js                 # 엔트리 포인트
├── app.css                 # Tailwind 임포트 + 글로벌 스타일
├── screens/
│   ├── IntroScreen.svelte  # 인트로 화면
│   ├── SurveyScreen.svelte # 설문 화면
│   ├── ResultScreen.svelte # 결과 화면
│   └── DetailScreen.svelte # 상세 화면
├── components/
│   ├── ProgressBar.svelte  # 설문 진행률
│   ├── QuestionCard.svelte # 설문 질문 카드
│   ├── PlaceCard.svelte    # 장소 추천 카드
│   └── LoadingSpinner.svelte # 로딩 인디케이터
├── stores/
│   ├── preferences.js      # 사용자 선호도 store
│   ├── recommendations.js  # 추천 결과 store
│   └── ui.js               # UI 상태 (loading, error)
├── lib/
│   ├── mock.js             # Mock 데이터 (20개 Place)
│   ├── api.js              # 백엔드 API 호출
│   ├── adapter.js          # API/Mock 전환 어댑터
│   ├── scoring.js          # Rule Engine 점수 계산
│   ├── questions.js        # 설문 질문 데이터
│   └── deeplink.js         # 지도앱 딥링크 생성
└── assets/
    ├── deer-natural.png    # 자연 흰사슴 이미지
    ├── deer-mascot.png     # 마스코트 캐릭터
    └── bg-baekrokdam.jpg   # 백록담 배경
```

## Components and Interfaces

### App.svelte (Router)

```javascript
// Local State (Svelte 기본 문법 - 룬즈 미사용)
let page = 'intro'; // 'intro' | 'survey' | 'result' | 'detail'
let selectedPlace = null; // Detail 화면용

// Navigation Functions
function goTo(target, place = null) {
  page = target;
  if (place) selectedPlace = place;
}
```

### Stores Interface

```javascript
// stores/preferences.js
export const preferences = writable({
  transport: null,    // 'walk' | 'public' | 'car' | 'bike'
  companion: null,    // 'solo' | 'couple' | 'family' | 'friends'
  timeOfDay: null,    // 'morning' | 'afternoon' | 'evening' | 'night'
  mood: null,         // 'nature' | 'culture' | 'activity' | 'relax'
  avoid: [],          // ['crowd', 'walking', 'cost', 'weather']
  intensity: null,    // 'light' | 'moderate' | 'active'
  food: null          // 'seafood' | 'meat' | 'cafe' | 'traditional'
});

// stores/recommendations.js
export const recommendations = writable([]);

// stores/ui.js
export const ui = writable({
  loading: false,
  error: null
});
```

### Adapter Interface

```javascript
// lib/adapter.js
// Adapter는 데이터만 반환, loading/error는 호출측(ResultScreen)에서 관리

export async function getRecommendations(prefs) {
  try {
    const result = await fetchWithTimeout(API_ENDPOINT, prefs, 1500);
    return { success: true, data: result.places };
  } catch (e) {
    // Fallback to mock + rule engine
    const mockPlaces = getMockPlaces();
    const scored = applyRuleEngine(mockPlaces, prefs);
    return { success: false, data: scored, fallback: true };
  }
}

// API 스펙 (고정)
// POST /api/v1/recommendations
// Request:  { preferences: Preferences }
// Response: { places: Place[] }
const API_ENDPOINT = '/api/v1/recommendations';
```

## Data Models

### Place

```typescript
interface Place {
  // Required
  id: string;
  name: string;
  lat: number;
  lng: number;
  category: 'nature' | 'culture' | 'activity' | 'food' | 'cafe';  // 장소 분류
  tags: string[];  // mood, food, 키워드 등 (점수 계산에 사용)
  score: number;
  
  // Optional (from backend)
  aiSummary?: string;
  aiScore?: number;
  story?: string;
  congestion?: 'low' | 'medium' | 'high';
}

// tags 예시: ['자연', '힐링', '해산물', '가족', '오전추천', '인파적음']
// Rule Engine은 tags 기반으로 mood/food 매칭 점수 계산
```

### Preferences

```typescript
interface Preferences {
  transport: 'walk' | 'public' | 'car' | 'bike';
  companion: 'solo' | 'couple' | 'family' | 'friends';
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
  mood: 'nature' | 'culture' | 'activity' | 'relax';
  avoid: ('crowd' | 'walking' | 'cost' | 'weather')[];
  intensity: 'light' | 'moderate' | 'active';
  food: 'seafood' | 'meat' | 'cafe' | 'traditional';
}
```

### Question

```typescript
interface Question {
  id: keyof Preferences;
  title: string;
  subtitle: string;
  options: { value: string; label: string; icon?: string }[];
  multiple?: boolean; // avoid 질문만 true
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Rule Engine Score Calculation
*For any* Place and Preferences combination, the calculated score SHALL equal: base(50) + moodMatch(20 if tags include mood keyword, else 0) + foodMatch(10 if tags include food preference, else 0) - avoidConflict(30 if any avoid condition matches tags, else 0) + congestionBonus(+15 if low, +5 if medium, -20 if high, 0 if undefined)
**Validates: Requirements 5.4**

### Property 2: Top 5 Descending Order
*For any* list of scored Places, the Rule Engine SHALL return exactly 5 Places sorted by score in descending order
**Validates: Requirements 3.1, 5.5**

### Property 3: Survey Progress Calculation
*For any* survey state with currentStep and totalSteps, the progress percentage SHALL equal (currentStep / totalSteps) * 100
**Validates: Requirements 2.3**

### Property 4: Survey Completion Validation
*For any* Preferences object, the survey is complete if and only if all required fields (transport, companion, timeOfDay, mood, intensity, food) are non-null
**Validates: Requirements 2.4**

### Property 5: Back Navigation State Preservation
*For any* survey step N > 1, navigating back to step N-1 SHALL preserve all previously selected values
**Validates: Requirements 2.6**

### Property 6: API Timeout Fallback
*For any* API call exceeding 1500ms, the adapter SHALL return Mock_Data processed by Rule Engine
**Validates: Requirements 5.1, 6.4**

### Property 7: Deeplink URL Generation
*For any* Place with valid lat and lng, the deeplink function SHALL generate a valid TMAP or geo: URL containing those coordinates
**Validates: Requirements 4.5**

### Property 8: Question Data Completeness
*For any* Question in the survey, it SHALL have a non-empty options array with at least 2 options
**Validates: Requirements 2.2, 7.1-7.7**

### Property 9: Place Card Required Fields
*For any* Place displayed in Result_Screen, it SHALL contain non-null id, name, category, tags, and score
**Validates: Requirements 3.2**

## Error Handling

| 상황 | 처리 방식 |
|------|----------|
| API Timeout (>1500ms) | Mock 데이터로 폴백, 에러 메시지 없음 |
| API Error (4xx/5xx) | Mock 데이터로 폴백, 토스트로 "오프라인 모드" 알림 |
| 이미지 로드 실패 | placeholder 이미지 표시 |
| 빈 추천 결과 | "조건에 맞는 장소가 없습니다" 메시지 + 설문 재시작 유도 |

## Testing Strategy

MVP 데모 특성상 자동화 테스트는 최소화하고, 수동 통합 테스트 체크리스트로 검증한다.

### 수동 테스트 체크리스트

| # | 시나리오 | 확인 항목 |
|---|----------|----------|
| 1 | Intro 진입 | 배경/흰사슴 표시, 5초 후 또는 클릭 시 마스코트 전환 |
| 2 | Survey 진행 | 7개 질문 순차 표시, 프로그레스 바 업데이트, Back/Next 동작 |
| 3 | Survey 완료 | 모든 질문 응답 후 "결과 보기" 활성화 |
| 4 | Result 표시 | 5개 카드 표시, 점수 내림차순, 필수 필드 존재 |
| 5 | Detail 진입 | 카드 클릭 시 상세 화면, 길찾기 버튼 동작 |
| 6 | 네비게이션 | 뒤로가기/다시 설문하기 정상 동작 |
| 7 | 오프라인 | API 실패 시 Mock 데이터로 정상 표시 |
| 8 | 반응형 | 모바일(375px)/태블릿(768px)/데스크톱(1024px) 레이아웃 |

### 추후 확장 (MVP 이후)
- Unit Tests: Rule Engine, Deeplink 함수
- Property-Based Tests: fast-check 기반 점수 계산 검증
