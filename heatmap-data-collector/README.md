# 제주 실시간 유동인구 데이터 수집기

제주도 주요 장소의 실시간 유동인구 데이터를 수집하고 JSON 파일로 저장하는 완전한 솔루션입니다.

## 🎯 주요 기능

- ✅ **실시간 데이터 수집**: 제주도 주요 장소의 유동인구 데이터 실시간 수집
- ✅ **상세 분석**: 도민/관광객, 성별, 연령별 상세 데이터 파싱
- ✅ **자동 저장**: 최신 데이터, 시간별 히스토리, 원시 API 응답(raw) 자동 저장
- ✅ **유연한 실행**: 1회 실행 또는 주기적 자동 수집 지원
- ✅ **깔끔한 로그**: 진행 상황과 요약 정보를 콘솔에 출력

## 📁 프로젝트 구조

```text
heatmap-data-collector/
├── collector.js           # 메인 수집 스크립트 (ESM)
├── locations.json         # 수집할 장소 목록
├── package.json          
├── .gitignore            
└── data/                 # 수집된 데이터 저장
    ├── latest.json       # 최신 데이터 (파싱된 결과)
    ├── history/          # 시간별 히스토리 (파싱된 결과)
    │   └── YYYY-MM-DD/
    │       └── HH-mm.json
    └── raw/              # 원시 API 응답 (디버깅용)
        └── YYYY-MM-DD/
            └── HH-mm_<location-id>.json
```

## 🚀 설치 및 실행

### 1. 프로젝트 이동

```bash
cd heatmap-data-collector
```

### 2. 실행 (의존성 없음)

Node.js 내장 모듈만 사용하므로 별도 설치 불필요:

```bash
# 1회 수집
npm run collect

# 1시간마다 자동 수집
npm start

# 사용자 정의 간격 (10분마다)
node collector.js --interval=600000
```

## 📊 수집 장소

`locations.json`에 정의된 13개 주요 장소:

- 🛫 **제주국제공항** (150m)
- 🏛️ **제주시청** (250m)
- 🛒 **동문시장** (200m)
- 🍖 **흑돼지거리** (90m)
- 🌳 **신산공원** (90m)
- 🏖️ **이호테우해변** (260m)
- 🏨 **중문관광단지** (920m)
- 🌄 **성산일출봉** (2460m)
- 🌊 **섭지코지** (1260m)
- 🛒 **서귀포매일올레시장** (300m)
- ⛰️ **한라산 어리목광장** (400m)
- 🏖️ **협재해수욕장** (800m)
- 🏔️ **고산오름** (150m)

## 📄 출력 데이터 형식

### 1) 파싱된 최신 데이터: `data/latest.json`

```json
{
  "timestamp": "2025-12-09T08:27:48.000Z",
  "collectedAt": "2025. 12. 9. 오후 5:27:48",
  "totalLocations": 13,
  "summary": {
    "totalPopulation": 38534,
    "totalResident": 38534,
    "totalTourist": 0
  },
  "locations": [
    {
      "id": "jeju_airport",
      "name": "제주국제공항",
      "category": "transportation",
      "coordinates": {
        "lng": 126.5632342,
        "lat": 33.2501555,
        "radius": 150
      },
      "current": {
        "resident": {
          "total": 2240,
          "male": 1100,
          "female": 1140,
          "byAge": [
            { "age": "10세 미만", "male": 45, "female": 52, "total": 97 },
            { "age": "10대", "male": 89, "female": 95, "total": 184 }
          ]
        },
        "tourist": {
          "total": 0,
          "male": 0,
          "female": 0,
          "byAge": [
            { "age": "10세 미만", "male": 0, "female": 0, "total": 0 }
          ]
        },
        "total": 2240
      },
      "weekly": {
        "resident": [
          {
            "day": "Sun",
            "hourly": [
              { "hour": 0, "population": 1234 },
              { "hour": 1, "population": 890 }
            ]
          }
        ],
        "tourist": [
          {
            "day": "Sun",
            "hourly": [
              { "hour": 0, "population": 0 },
              { "hour": 1, "population": 0 }
            ]
          }
        ]
      }
    }
  ]
}
```

### 2) 원시 API 응답: `data/raw/YYYY-MM-DD/HH-mm_<location-id>.json`

```json
{
  "collectedAt": "2025-12-09T08:27:48.123Z",
  "location": {
    "id": "jeju_airport",
    "name": "제주국제공항",
    "lng": 126.5632342,
    "lat": 33.2501555,
    "radius": 150
  },
  "api": {
    "statusCode": 200,
    "headers": {
      "content-type": "application/json; charset=utf-8",
      "content-length": "1234"
    },
    "query": "X=126.5632342&Y=33.2501555&R=150"
  },
  "data": [
    { "IN_NOW_POP_SUM": 2240, "IN_NOW_M_POP_00": 45, "IN_NOW_W_POP_00": 52 },
    { "IN_WEEK": 1, "0": 100, "1": 120 },
    { "IN_WEEK": 2, "0": 110, "1": 130 },
    { "...": "..." },
    { "OUT_NOW_POP_SUM": 0, "OUT_NOW_M_POP_00": 0, "OUT_NOW_W_POP_00": 0 }
  ]
}
```

이 raw 파일을 열어보면 **관광객(OUT_NOW_*) 필드가 실제로 0인지**, 아니면 **API 구조가 바뀌었는지** 직접 확인할 수 있습니다.

## 🧠 데이터 구조 이해

### API 응답 배열 구조 (추정)

- `data[0]`: 현재 도민 데이터 (IN_NOW_*)
- `data[1~6]`: 요일별 도민 데이터 (IN_WEEK, 0~23시 인원 수)
- `data[7]`: 현재 관광객 데이터 (OUT_NOW_*)
- `data[8~13]`: 요일별 관광객 데이터 (OUT_WEEK, 0~23시 인원 수)

현재 파싱 로직은 위 구조를 기준으로 동작합니다. 관광객 값이 0으로 나오는 경우에는 `data/raw/...` 파일을 열어 실제 필드 값을 확인해보면 됩니다.

## 🧪 관광객 데이터 디버깅 방법

1. 수집 한 번 실행:

```bash
npm run collect
```

2. `data/raw/YYYY-MM-DD/` 폴더 열기

3. 관심 있는 장소 파일 열기 (예: 공항):

```text
data/raw/2025-12-09/17-28_jeju_airport.json
```

4. `data[7]` 객체 확인:

- `OUT_NOW_POP_SUM`
- `OUT_NOW_M_POP_20`, `OUT_NOW_W_POP_20` 등

5. 만약 이 값들이 전부 0이면:

- API가 실제로 관광객을 0으로 반환하는 것
- 또는 관광객 집계 로직이 비활성화된 것

## 🛠️ 커스터마이징 아이디어

- 특정 좌표(X, Y)와 반경(R)을 입력 받아 즉석 조회하는 `search-location.js` 추가
- 웹 UI와 연동하여 지도에서 클릭 → 해당 반경 인구 바로 조회
- 시간대별/요일별 패턴을 차트로 시각화하는 대시보드

## 🐛 트러블슈팅

### `locations.json` 파일을 읽을 수 없습니다

→ `locations.json` 파일이 프로젝트 루트에 있는지 확인

### API 호출 실패

→ 네트워크 연결 확인  
→ API 서버 상태 확인  
→ 좌표값이 제주도 범위인지 확인

### 데이터 파싱 실패

→ `data/raw/...` 파일에서 실제 응답 구조 확인  
→ 필요한 경우 `parsePopulationData` 함수 수정

## 📜 라이선스

MIT License

## 🤝 기여

Pull Request 환영합니다!

---

**Made with ❤️ for Jeju Island**
