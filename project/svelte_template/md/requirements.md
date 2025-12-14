# Requirements Document

## Introduction

제주 관광 쏠림 분산을 위한 데모 서비스의 프론트엔드 MVP이다. 사용자가 간단한 설문을 통해 개인화된 관광지 추천을 받고, 혼잡도가 낮은 숨은 명소를 발견할 수 있도록 돕는다. 백엔드 없이도 룰 기반으로 동작하며, AI/백엔드 연동은 부가 정보로 처리한다.

## Technical Constraints

| 항목 | 제약사항 |
|------|----------|
| Navigation | 외부 라우터 없음. App.svelte 로컬 state `page: 'intro'\|'survey'\|'result'\|'detail'` 사용 |
| Global Stores | `preferences`, `recommendations`, `ui{loading, error}` 만 Svelte store로 관리 |
| Rule_Engine Scoring | base 50 + moodMatch 20 + foodMatch 10 - avoidConflict 30 + congestion(low/medium/high = +15/+5/-20, if available) |
| Backend Fallback | API 호출 시 1500ms timeout; 실패 시 Mock_Data 표시; 성공 시 mock 대체 |
| Survey UI | Stepper 방식(1 question per step) + Back/Next 버튼 + Progress bar |
| Place Model | 필수: `id, name, lat, lng, category, tags[], score` / 선택: `aiSummary, aiScore, story, congestion` |
| Preferences Model | `transport, companion, timeOfDay, mood, avoid[], intensity, food` |
| CSS Framework | Tailwind CSS (반응형 웹, 모바일 우선) |

## Glossary

- **Demo_Service**: 제주 관광 분산 추천 데모 웹 애플리케이션
- **Intro_Screen**: 백록담 자연경관과 흰사슴 마스코트가 등장하는 시작 화면
- **Survey_Screen**: 사용자 선호도를 수집하는 설문 화면
- **Result_Screen**: 추천 장소 카드 목록을 보여주는 결과 화면
- **Detail_Screen**: 개별 장소의 상세 정보를 보여주는 화면
- **Preferences**: 사용자가 설문에서 선택한 선호도 데이터
- **Place**: 추천 장소 정보 객체
- **Mock_Data**: 백엔드 없이 동작하기 위한 더미 추천 데이터
- **Rule_Engine**: 사용자 선호도 기반으로 장소를 필터링/정렬하는 로직

## Requirements

### Requirement 1

**User Story:** As a 관광객, I want to 매력적인 인트로 화면을 보고 서비스를 시작, so that 서비스에 대한 기대감을 갖고 자연스럽게 설문으로 진입할 수 있다.

#### Acceptance Criteria

1. WHEN 사용자가 서비스에 접속 THEN Demo_Service SHALL 백록담 자연경관 배경(영상 또는 이미지)과 흰사슴 이미지를 표시
2. WHEN 사용자가 화면을 클릭하거나 5초가 경과 THEN Demo_Service SHALL 흰사슴을 마스코트 캐릭터로 전환하는 애니메이션을 실행
3. WHEN 마스코트 전환이 완료 THEN Demo_Service SHALL "시작하기" 버튼을 표시
4. WHEN 사용자가 "시작하기" 버튼을 클릭 THEN Demo_Service SHALL Survey_Screen으로 화면을 전환

### Requirement 2

**User Story:** As a 관광객, I want to 나의 여행 선호도를 설문으로 입력, so that 나에게 맞는 관광지를 추천받을 수 있다.

#### Acceptance Criteria

1. WHEN Survey_Screen이 표시 THEN Demo_Service SHALL 5~7개의 선호도 질문을 순차적으로 표시
2. WHEN 각 질문이 표시 THEN Demo_Service SHALL 선택 가능한 옵션들을 카드 또는 버튼 형태로 제공
3. WHILE 사용자가 설문을 진행 THEN Demo_Service SHALL 현재 진행률을 프로그레스 바로 표시
4. WHEN 사용자가 모든 질문에 응답 완료 THEN Demo_Service SHALL "결과 보기" 버튼을 활성화
5. WHEN 사용자가 "결과 보기" 버튼을 클릭 THEN Demo_Service SHALL Preferences를 저장하고 Result_Screen으로 전환
6. IF 사용자가 이전 질문으로 돌아가기를 원함 THEN Demo_Service SHALL 이전 질문으로 이동하고 기존 선택을 유지

### Requirement 3

**User Story:** As a 관광객, I want to 나의 선호도에 맞는 추천 장소 목록을 확인, so that 방문할 장소를 선택할 수 있다.

#### Acceptance Criteria

1. WHEN Result_Screen이 표시 THEN Demo_Service SHALL Preferences 기반으로 필터링/정렬된 5개의 Place 카드를 표시
2. WHEN Place 카드가 표시 THEN Demo_Service SHALL 장소명, 카테고리, 태그, 기본 점수를 포함
3. WHERE 백엔드 AI 데이터가 존재 THEN Demo_Service SHALL aiSummary와 aiScore를 카드에 추가 표시
4. WHERE 백엔드 AI 데이터가 부재 THEN Demo_Service SHALL AI 관련 UI 요소를 숨기고 기본 정보만 표시
5. WHEN 사용자가 Place 카드를 클릭 THEN Demo_Service SHALL Detail_Screen으로 전환
6. WHEN Result_Screen이 표시 THEN Demo_Service SHALL "다시 설문하기" 버튼을 제공

### Requirement 4

**User Story:** As a 관광객, I want to 선택한 장소의 상세 정보를 확인, so that 방문 여부를 결정하고 길찾기를 할 수 있다.

#### Acceptance Criteria

1. WHEN Detail_Screen이 표시 THEN Demo_Service SHALL 장소의 전체 정보(이름, 카테고리, 태그, 설명)를 표시
2. WHERE 백엔드 스토리 데이터가 존재 THEN Demo_Service SHALL 장소 관련 스토리/요약을 표시
3. WHERE 혼잡도 데이터가 존재 THEN Demo_Service SHALL 현재 혼잡도 정보를 표시
4. WHEN Detail_Screen이 표시 THEN Demo_Service SHALL "길찾기" 버튼을 제공
5. WHEN 사용자가 "길찾기" 버튼을 클릭 THEN Demo_Service SHALL TMAP 또는 기본 지도앱으로 딥링크 연결
6. WHEN 사용자가 "뒤로가기"를 클릭 THEN Demo_Service SHALL Result_Screen으로 복귀

### Requirement 5

**User Story:** As a 개발자, I want to 백엔드 없이도 데모가 동작, so that 안정적인 시연이 가능하다.

#### Acceptance Criteria

1. WHEN 백엔드 API 호출 시 1500ms 내 응답이 없음 THEN Demo_Service SHALL timeout 처리하고 Mock_Data를 사용하여 추천 결과를 표시
2. WHEN 백엔드 API가 정상 응답 THEN Demo_Service SHALL 실제 API 데이터로 Mock_Data를 대체
3. WHEN Demo_Service가 초기화 THEN Demo_Service SHALL 최소 20개의 Mock Place 데이터를 로드
4. WHEN Rule_Engine이 실행 THEN Demo_Service SHALL 다음 공식으로 점수 계산: base(50) + moodMatch(20) + foodMatch(10) - avoidConflict(30) + congestionBonus(low:+15, medium:+5, high:-20)
5. WHEN Rule_Engine이 점수 계산 완료 THEN Demo_Service SHALL 점수 내림차순으로 상위 5개 Place를 반환

### Requirement 6

**User Story:** As a 모바일 사용자, I want to 모바일 환경에서 편리하게 서비스를 이용, so that 이동 중에도 추천을 받을 수 있다.

#### Acceptance Criteria

1. WHEN 화면 너비가 768px 미만 THEN Demo_Service SHALL 모바일 최적화 레이아웃을 적용
2. WHEN 화면 너비가 768px 이상 THEN Demo_Service SHALL 데스크톱 레이아웃을 적용
3. WHILE 데이터 로딩 중 THEN Demo_Service SHALL 로딩 인디케이터를 표시
4. IF API 호출이 실패 THEN Demo_Service SHALL 사용자 친화적 에러 메시지를 표시하고 Mock_Data로 폴백

### Requirement 7

**User Story:** As a 관광객, I want to 설문에서 다양한 선호도를 선택, so that 정확한 추천을 받을 수 있다.

#### Acceptance Criteria

1. WHEN 이동수단 질문이 표시 THEN Demo_Service SHALL 도보, 대중교통, 렌터카, 자전거 옵션을 제공
2. WHEN 동행 질문이 표시 THEN Demo_Service SHALL 혼자, 커플, 가족, 친구 옵션을 제공
3. WHEN 시간대 질문이 표시 THEN Demo_Service SHALL 오전, 오후, 저녁, 야간 옵션을 제공
4. WHEN 분위기 질문이 표시 THEN Demo_Service SHALL 자연, 문화, 액티비티, 휴식 옵션을 제공
5. WHEN 피하고 싶은 것 질문이 표시 THEN Demo_Service SHALL 인파, 도보, 비용, 날씨영향 옵션을 복수 선택 가능하게 제공
6. WHEN 활동 강도 질문이 표시 THEN Demo_Service SHALL 가벼움, 보통, 활동적 옵션을 제공
7. WHEN 먹거리 질문이 표시 THEN Demo_Service SHALL 해산물, 고기, 카페, 전통음식 옵션을 제공
