# 제주 실시간 유동인구 데이터 수집기

제주도 주요 장소의 실시간 유동인구 데이터를 수집하고 JSON 파일로 저장하는 완전한 솔루션입니다.

## 🎯 주요 기능

- ✅ **실시간 데이터 수집**: 제주도 주요 장소의 유동인구 데이터 실시간 수집
- ✅ **상세 분석**: 도민/관광객, 성별, 연령별 상세 데이터 파싱
- ✅ **자동 저장**: 최신 데이터와 시간별 히스토리 자동 저장
- ✅ **유연한 실행**: 1회 실행 또는 주기적 자동 수집 지원
- ✅ **깔끔한 로그**: 진행 상황과 요약 정보를 콘솔에 출력

## 📁 프로젝트 구조

```
jeju-population-collector/
├── collector.js           # 메인 수집 스크립트
├── locations.json         # 수집할 장소 목록
├── package.json          
├── .gitignore            
└── data/                 # 수집된 데이터 저장
    ├── latest.json       # 최신 데이터
    └── history/          # 시간별 히스토리
        └── YYYY-MM-DD/
            └── HH-mm.json
```

## 🚀 설치 및 실행

### 1. 프로젝트 클론

```bash
git clone <repository-url>
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

### `data/latest.json` 예시:

```json
{
  "timestamp": "2025-12-09T08:14:00.000Z",
  "collectedAt": "2025. 12. 9. 오후 5:14:00",
  "totalLocations": 13,
  "summary": {
    "totalPopulation": 28450,
    "totalResident": 24320,
    "totalTourist": 4130
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
          "total": 2176,
          "male": 1008,
          "female": 1168,
          "byAge": [
            { "age": "10세 미만", "male": 45, "female": 52, "total": 97 },
            { "age": "10대", "male": 89, "female": 95, "total": 184 }
          ]
        },
        "tourist": {
          "total": 350,
          "male": 178,
          "female": 172,
          "byAge": [...]
        },
        "total": 2526
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
        "tourist": [...]
      }
    }
  ]
}
```

## 🛠️ API 정보

### 데이터 소스

```
https://jeju.mms.gislab.co.kr/mms_new/GEONET.getAreaWeekInfoByLatlng.php
```

### 파라미터

- `X`: 경도 (longitude)
- `Y`: 위도 (latitude)  
- `R`: 반경 (radius, 미터)

### 응답 데이터

- **현재 인구**: 도민/관광객 별 성별/연령별 분포
- **요일별 패턴**: 일~토요일 시간대별 평균 인구

## 📝 커스터마이징

### 장소 추가/수정

`locations.json` 파일을 편집:

```json
{
  "id": "my_location",
  "name": "내 장소",
  "lng": 126.5,
  "lat": 33.5,
  "radius": 100,
  "category": "custom"
}
```

### 수집 주기 변경

```bash
# 30분마다
node collector.js --interval=1800000

# 2시간마다
node collector.js --interval=7200000
```

## 🐛 트러블슈팅

### `locations.json` 파일을 읽을 수 없습니다

→ `locations.json` 파일이 프로젝트 루트에 있는지 확인

### API 호출 실패

→ 네트워크 연결 확인
→ API 서버 상태 확인
→ 좌표값이 제주도 범위인지 확인

### 데이터 파싱 실패

→ API 응답 형식 변경 가능성
→ 콘솔 로그 확인 후 이슈 리포트

## 📜 라이선스

MIT License

## 🤝 기여

Pull Request 환영합니다!

---

**Made with ❤️ for Jeju Island**
