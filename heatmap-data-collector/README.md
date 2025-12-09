# 📊 실시간 유동인구 데이터 수집기

원본 관공서 API(`mms.gislab.co.kr`)에서 실시간 유동인구 데이터를 수집하여 JSON 파일로 저장하는 Node.js 스크립트입니다.

---

## 🚀 빠른 시작

### 1. 설치

```bash
cd heatmap-data-collector
npm install
```

### 2. 데이터 수집

```bash
# 기본 (제주도)
node collector.js

# 특정 지역
node collector.js 11  # 서울
node collector.js 26  # 부산
node collector.js 50  # 제주
```

### 3. 결과 확인

```bash
ls output/
# population_2025-12-09T15-30-00.json
```

---

## 📋 데이터 형식

### 출력 JSON 구조

```json
{
  "timestamp": "2025-12-09T15:30:00.000Z",
  "region_code": "50",
  "data_count": 1543,
  "points": [
    {
      "cell_id": "123456",
      "region_code": "50",
      "latitude": 33.4892,
      "longitude": 126.4983,
      "population": 850,
      "timestamp": "2025-12-09T15:30:00.000Z"
    }
  ],
  "summary": {
    "total_population": 125430,
    "avg_population": 81,
    "max_population": 2100,
    "min_population": 5
  }
}
```

---

## 🛠️ 사용법

### 기본 사용

```javascript
import { collect } from './collector.js';

// 제주도 데이터 수집
const data = await collect('50');

console.log(`총 ${data.data_count}개 데이터 수집`);
console.log(`총 인구: ${data.summary.total_population}명`);
```

### 지역 코드

```javascript
import { REGION_CODES } from './collector.js';

console.log(REGION_CODES);
/*
{
  jeju: '50',
  seoul: '11',
  busan: '26',
  // ...
}
*/
```

### 커스텀 처리

```javascript
import { fetchPopulationData, processData } from './collector.js';

// 1. 데이터만 가져오기
const rawData = await fetchPopulationData('50');

// 2. 직접 가공
const processed = processData(rawData);

// 3. 커스텀 분석
const hotspots = processed.points
  .filter(p => p.population > 1000)
  .sort((a, b) => b.population - a.population)
  .slice(0, 10);

console.log('🔥 Top 10 혼잡 지역:', hotspots);
```

---

## 📆 주기적 수집 (Cron)

### 1시간마다 수집

```bash
# crontab -e
0 * * * * cd /path/to/heatmap-data-collector && node collector.js >> logs/collector.log 2>&1
```

### 매일 오전 9시

```bash
0 9 * * * cd /path/to/heatmap-data-collector && node collector.js
```

---

## 💡 활용 예시

### 1. 혼잡도 분석

```javascript
const data = await collect('50');

// 인구 1000명 이상 지역
const crowded = data.points.filter(p => p.population >= 1000);

console.log(`혼잡 지역: ${crowded.length}개`);
console.log(`혼잡률: ${(crowded.length / data.data_count * 100).toFixed(2)}%`);
```

### 2. 시간대별 비교

```javascript
// 오전 9시 데이터
const morning = await collect('50');
await saveToFile(morning, 'morning_09.json');

// 오후 6시 데이터
const evening = await collect('50');
await saveToFile(evening, 'evening_18.json');

console.log(`오전 인구: ${morning.summary.total_population}`);
console.log(`오후 인구: ${evening.summary.total_population}`);
console.log(`변화율: ${((evening.summary.total_population / morning.summary.total_population - 1) * 100).toFixed(2)}%`);
```

### 3. 특정 영역 필터링

```javascript
const data = await collect('50');

// 제주시 중심부 (33.5도 이상)
const jejuCity = data.points.filter(p => p.latitude >= 33.5);

// 서귀포시 (33.25도 이하)
const seogwipo = data.points.filter(p => p.latitude < 33.25);

console.log(`제주시 인구: ${jejuCity.reduce((sum, p) => sum + p.population, 0)}`);
console.log(`서귀포시 인구: ${seogwipo.reduce((sum, p) => sum + p.population, 0)}`);
```

---

## 🔧 문제 해결

### CORS 에러

Node.js에서 실행하므로 CORS 에러가 없습니다. 브라우저에서 실행하려면 프록시 서버가 필요합니다.

### 빈 데이터

```javascript
// 원본 API가 빈 응답을 주는 경우
// 다른 METHOD 파라미터 시도

const url = buildApiUrl('50').replace('METHOD=11', 'METHOD=51');
const response = await fetch(url);
```

### 파일 권한 에러

```bash
mkdir output
chmod 755 output
```

---

## 📚 API 참고

### 원본 API 엔드포인트

```
GET https://mms.gislab.co.kr:444/heatmap_api/php/API.php
```

### 파라미터

| 파라미터 | 설명 | 예시 |
|---------|------|------|
| `TABLE` | 테이블명 | `mms_cell_new_최신유동인구` |
| `SELECT` | 선택 필드 | `(M_POP_00+...+W_POP_90) as total_pop` |
| `WHERE` | 조건 | `mega_cd IN ('50')` |
| `METHOD` | 방식 | `11` (Point), `51` (Area) |

### METHOD 종류

- `1`: 히트맵 이미지
- `11`: Point 데이터 (JSON)
- `51`: Polygon/Area 데이터 (JSON)

---

## 📈 데이터 활용 예정

1. **실시간 대시보드**
   - 현재 혼잡도 시각화
   - 시간대별 트렌드 분석

2. **예측 모델 학습**
   - 과거 데이터 누적
   - 요일/시간별 패턴 분석

3. **알림 서비스**
   - 특정 임계값 초과 시 알림
   - 혼잡도 높은 지역 회피 추천

4. **비즈니스 인사이트**
   - 상권 입지 분석
   - 마케팅 타겟 지역 선정

---

## 👤 라이선스

MIT License

---

## 🔗 관련 링크

- 원본 API: `https://mms.gislab.co.kr:444`
- 프론트엔드 예제: `../heatmap-realtime/`
