# Implementation Plan

## Phase 1: 프로젝트 설정 및 기반 구축 (백엔드 불필요)

- [ ] 1. Tailwind CSS 설정
  - [ ] 1.1 Tailwind CSS 및 의존성 설치 (tailwindcss, postcss, autoprefixer)
  - [ ] 1.2 tailwind.config.js 생성 및 content 경로 설정
  - [ ] 1.3 postcss.config.js 생성
  - [ ] 1.4 app.css에 Tailwind 디렉티브 추가 (@tailwind base/components/utilities)
  - _Requirements: 6.1, 6.2_

- [ ] 2. 폴더 구조 및 기본 파일 생성
  - [ ] 2.1 src/screens/, src/components/, src/stores/, src/lib/ 폴더 생성
  - [ ] 2.2 빈 화면 컴포넌트 생성 (IntroScreen, SurveyScreen, ResultScreen, DetailScreen)
  - [ ] 2.3 App.svelte에 라우팅 로직 구현 (page state + 조건부 렌더링)
  - _Requirements: 1.4, 2.5, 3.5, 4.6_

- [ ] 3. Stores 구현
  - [ ] 3.1 stores/preferences.js 생성 (초기값 + reset 함수)
  - [ ] 3.2 stores/recommendations.js 생성
  - [ ] 3.3 stores/ui.js 생성 (loading, error 상태)
  - _Requirements: 2.5, 6.3, 6.4_

## Phase 2: 핵심 데이터 및 로직 (백엔드 불필요)

- [ ] 4. Mock 데이터 및 설문 데이터 구현
  - [ ] 4.1 lib/mock.js 생성 - 20개 Place 데이터 (제주 실제 장소 기반)
  - [ ] 4.2 lib/questions.js 생성 - 7개 설문 질문 데이터
  - _Requirements: 5.3, 7.1-7.7_

- [ ] 5. Rule Engine 구현
  - [ ] 5.1 lib/scoring.js 생성 - calculateScore(place, prefs) 함수
  - [ ] 5.2 lib/scoring.js - getTopRecommendations(places, prefs, limit=5) 함수
  - _Requirements: 5.4, 5.5, 3.1_

- [ ] 6. Adapter 및 유틸리티 구현
  - [ ] 6.1 lib/adapter.js 생성 - getRecommendations(prefs) with timeout/fallback
  - [ ] 6.2 lib/deeplink.js 생성 - generateMapLink(lat, lng, name) 함수
  - _Requirements: 5.1, 5.2, 4.5_

## Phase 3: 화면 구현 (백엔드 불필요)

- [ ] 7. Intro 화면 구현
  - [ ] 7.1 IntroScreen.svelte - 배경 이미지/영상 + 흰사슴 이미지 표시
  - [ ] 7.2 5초 타이머 또는 클릭 시 마스코트 전환 애니메이션
  - [ ] 7.3 "시작하기" 버튼 + goTo('survey') 연결
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [ ] 8. Survey 화면 구현
  - [ ] 8.1 components/ProgressBar.svelte 생성
  - [ ] 8.2 components/QuestionCard.svelte 생성 (단일/복수 선택 지원)
  - [ ] 8.3 SurveyScreen.svelte - stepper 로직 (currentStep, Back/Next)
  - [ ] 8.4 SurveyScreen.svelte - preferences store 연동 및 완료 검증
  - [ ] 8.5 "결과 보기" 버튼 + goTo('result') 연결
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

- [ ] 9. Result 화면 구현
  - [ ] 9.1 components/PlaceCard.svelte 생성 (필수 필드 + 조건부 AI 필드)
  - [ ] 9.2 components/LoadingSpinner.svelte 생성
  - [ ] 9.3 ResultScreen.svelte - adapter 호출 + 로딩/에러 처리
  - [ ] 9.4 ResultScreen.svelte - 5개 카드 렌더링 + 카드 클릭 시 Detail 이동
  - [ ] 9.5 "다시 설문하기" 버튼 + preferences reset + goTo('survey')
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 6.3, 6.4_

- [ ] 10. Detail 화면 구현
  - [ ] 10.1 DetailScreen.svelte - 장소 전체 정보 표시
  - [ ] 10.2 조건부 렌더링 (story, congestion, aiSummary)
  - [ ] 10.3 "길찾기" 버튼 + deeplink 연결
  - [ ] 10.4 "뒤로가기" 버튼 + goTo('result')
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

## Phase 4: 스타일링 및 반응형 (백엔드 불필요)

- [ ] 11. 반응형 스타일링
  - [ ] 11.1 모바일 우선 레이아웃 적용 (기본 스타일)
  - [ ] 11.2 태블릿/데스크톱 브레이크포인트 (md:, lg:) 적용
  - [ ] 11.3 글래스모피즘/깔끔한 UI 터치 (backdrop-blur, 그림자 등)
  - _Requirements: 6.1, 6.2_

- [ ] 12. 에셋 및 마무리
  - [ ] 12.1 assets/ 폴더에 이미지 추가 (배경, 흰사슴, 마스코트) - placeholder 가능
  - [ ] 12.2 전체 플로우 수동 테스트 (체크리스트 8개 항목)
  - _Requirements: 1.1, 1.2_

## Phase 5: 백엔드 연동 (선택)

- [ ] 13. API 연동
  - [ ] 13.1 lib/api.js 생성 - fetchRecommendations(prefs) 실제 API 호출
  - [ ] 13.2 lib/adapter.js 수정 - API 우선 호출 + fallback 로직 활성화
  - _Requirements: 5.1, 5.2_

---

## 구현 시작 체크리스트

| # | 작업 | 파일 | 상태 |
|---|------|------|------|
| 1 | Tailwind 설치 | package.json, tailwind.config.js | ⬜ |
| 2 | 폴더 구조 생성 | src/screens/, src/components/, src/stores/, src/lib/ | ⬜ |
| 3 | App.svelte 라우팅 | src/App.svelte | ⬜ |
| 4 | Stores 생성 | src/stores/*.js | ⬜ |
| 5 | Mock 데이터 | src/lib/mock.js | ⬜ |
| 6 | 설문 데이터 | src/lib/questions.js | ⬜ |
| 7 | Rule Engine | src/lib/scoring.js | ⬜ |
| 8 | Adapter | src/lib/adapter.js | ⬜ |
| 9 | Intro 화면 | src/screens/IntroScreen.svelte | ⬜ |
| 10 | Survey 화면 | src/screens/SurveyScreen.svelte | ⬜ |
| 11 | Result 화면 | src/screens/ResultScreen.svelte | ⬜ |
| 12 | Detail 화면 | src/screens/DetailScreen.svelte | ⬜ |
| 13 | 반응형 스타일 | 전체 컴포넌트 | ⬜ |
| 14 | 수동 테스트 | 체크리스트 8항목 | ⬜ |


--------

---

# Appendix: Handoff Instructions (for any AI)

## Context
- This document is an implementation plan for a Jeju tourism dispersion demo frontend.
- Frontend must work fully WITHOUT backend using Mock_Data + Rule_Engine.
- Backend/AI integration is optional and treated as supplemental fields (aiSummary/aiScore/story/congestion).

## Hard Rules (DO NOT VIOLATE)
- No external router libraries. Use `App.svelte` local state `page` to switch screens.
- Global stores are limited to: `preferences`, `recommendations`, `ui(loading,error)` only.
- Adapter must fallback to Mock + Rule Engine if API fails or exceeds `1500ms` timeout.
- Survey UX must be stepper style (one question per step) with Back/Next + ProgressBar.
- UI must never crash when optional AI/backend fields are missing; hide AI sections gracefully.

## Tech Constraints
- Stack: Svelte + Vite + Tailwind CSS.
- Svelte runes are NOT guaranteed. Avoid `$state` and use plain `let` + stores.
- Prefer Tailwind utilities; minimal custom CSS in `src/app.css`.

## Data Contracts (Fixed)
### Preferences
- transport: 'walk'|'public'|'car'|'bike'
- companion: 'solo'|'couple'|'family'|'friends'
- timeOfDay: 'morning'|'afternoon'|'evening'|'night'
- mood: 'nature'|'culture'|'activity'|'relax'
- avoid: Array<'crowd'|'walking'|'cost'|'weather'>  (multi-select)
- intensity: 'light'|'moderate'|'active'
- food: 'seafood'|'meat'|'cafe'|'traditional'

### Place
- required: id:string, name:string, lat:number, lng:number, category:string, tags:string[], score:number
- optional: aiSummary?:string, aiScore?:number, story?:string, congestion?:'low'|'medium'|'high'

## Rule Engine (Must Implement Exactly)
- score(place, prefs) = 50
  + 20 if `place.category` matches `prefs.mood`
  + 10 if `prefs.food` is included in `place.tags`
  - 30 if any avoid conflicts (e.g. prefs.avoid includes 'crowd' AND place.congestion === 'high')
  + congestion bonus: low +15, medium +5, high -20, undefined 0
- getTopRecommendations(places, prefs, limit=5):
  - score all places
  - sort by score DESC
  - return exactly 5 items (or fewer only if input < 5)

## API Contract (Optional, For Later)
- POST /api/v1/recommendations
  - request: { preferences: Preferences }
  - response: { places: Place[] }
- GET /api/v1/places/{id}
  - response: Place (may include optional fields)
- Adapter policy:
  - try API with 1500ms timeout
  - on timeout/error -> return Mock places processed by Rule Engine

## Required File Outputs (Relative to project root)
- src/App.svelte
- src/main.js
- src/app.css
- src/screens/IntroScreen.svelte
- src/screens/SurveyScreen.svelte
- src/screens/ResultScreen.svelte
- src/screens/DetailScreen.svelte
- src/components/ProgressBar.svelte
- src/components/QuestionCard.svelte
- src/components/PlaceCard.svelte
- src/components/LoadingSpinner.svelte
- src/stores/preferences.js
- src/stores/recommendations.js
- src/stores/ui.js
- src/lib/mock.js
- src/lib/questions.js
- src/lib/scoring.js
- src/lib/adapter.js
- src/lib/deeplink.js

## Definition of Done (Demo-ready)
- Flow works end-to-end: Intro -> Survey -> Result -> Detail -> back to Result.
- Without backend, Result always shows 5 recommended Place cards from Mock_Data.
- On offline/timeout, app still works (fallback), and shows a small "오프라인 모드" notice.
- Mobile-first layout looks consistent (spacing/typography/buttons) and no broken screens.

## Exact Next Actions for the Agent (Start Here)
1) Create missing folders and files listed in "Required File Outputs".
2) Implement stores + mock + questions + rule engine first.
3) Implement App.svelte page switching and wire Intro -> Survey -> Result.
4) On ResultScreen mount, call adapter.getRecommendations(preferences) and render loading -> results.
5) Implement Detail navigation by selecting a place from Result.
6) Add minimal Tailwind styling last (do not block core flow for styling).

## Non-Goals (Out of Scope)
- Adding router libraries, complex state libraries, or full automated testing frameworks for this MVP.
- Building real AI generation or real data pipelines in frontend (backend responsibility).

---
