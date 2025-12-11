# 제주 유동인구 API 상세 문서

제주도 실시간 유동인구 데이터 API의 파라미터와 응답 구조를 상세하게 설명합니다.

## 📡 API 정보

### 기본 정보

```
Host: jeju.mms.gislab.co.kr
Path: /mms_new/GEONET.getAreaWeekInfoByLatlng.php
Method: GET
Protocol: HTTPS
```

### 완전한 URL 예시

```
https://jeju.mms.gislab.co.kr/mms_new/GEONET.getAreaWeekInfoByLatlng.php?X=126.5632342&Y=33.2501555&R=150
```

---

## 📥 요청 파라미터

### 쿼리 파라미터

| 파라미터 | 타입 | 필수 | 설명 | 예시 |
|---------|------|------|------|------|
| `X` | Float | ✅ | 경도 (Longitude) | `126.5632342` |
| `Y` | Float | ✅ | 위도 (Latitude) | `33.2501555` |
| `R` | Integer | ✅ | 반경 (미터) | `150` |

### 파라미터 상세 설명

#### X (경도)
- **범위**: 제주도 경도는 대략 `126.1 ~ 127.0`
- **형식**: 소수점 7자리까지 지원
- **예시**:
  - 제주시청: `126.5269`
  - 서귀포시청: `126.5603`

#### Y (위도)
- **범위**: 제주도 위도는 대략 `33.1 ~ 33.6`
- **형식**: 소수점 7자리까지 지원
- **예시**:
  - 제주시청: `33.5145`
  - 서귀포시청: `33.2541`

#### R (반경)
- **단위**: 미터(m)
- **권장 범위**: `50 ~ 3000`
- **실용적인 값**:
  - `50~100m`: 작은 골목, 건물 단위
  - `150~300m`: 중간 규모 장소 (시장, 공원)
  - `500~1000m`: 넓은 지역 (해변, 관광단지)
  - `2000~3000m`: 매우 넓은 지역 (오름, 산)

### 요청 예시

#### JavaScript (Node.js)

```javascript
import https from 'https';

const options = {
  hostname: 'jeju.mms.gislab.co.kr',
  path: '/mms_new/GEONET.getAreaWeekInfoByLatlng.php?X=126.5632342&Y=33.2501555&R=150',
  method: 'GET',
  rejectUnauthorized: false  // 자체 서명 인증서 우회
};

https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(JSON.parse(data)));
}).end();
```

#### cURL

```bash
curl -k 'https://jeju.mms.gislab.co.kr/mms_new/GEONET.getAreaWeekInfoByLatlng.php?X=126.5632342&Y=33.2501555&R=150'
```

---

## 📤 응답 구조

### 응답 형식

- **Content-Type**: `application/json; charset=UTF-8`
- **인코딩**: UTF-8
- **구조**: JSON 배열 (길이: 16)

### 배열 인덱스 구조

API는 16개 요소를 가진 배열을 반환합니다:

```javascript
[
  // [0] 현재 도민 데이터
  { IN_NOW_M_POP_00: 45.59, IN_NOW_W_POP_00: 45.59, ... },
  
  // [1-7] 도민 요일별 시간대 데이터 (일~토)
  { IN_WEEK: "Sun", "0": 1593, "1": 1552, ... },  // [1] 일요일
  { IN_WEEK: "Mon", "0": 1637, "1": 1565, ... },  // [2] 월요일
  { IN_WEEK: "Tue", "0": 1589, "1": 1548, ... },  // [3] 화요일
  { IN_WEEK: "Wed", "0": 0, "1": 0, ... },        // [4] 수요일 (데이터 없을 수 있음)
  { IN_WEEK: "Thu", "0": 1563, "1": 1545, ... },  // [5] 목요일
  { IN_WEEK: "Fri", "0": 1590, "1": 1546, ... },  // [6] 금요일
  { IN_WEEK: "Sat", "0": 1601, "1": 1582, ... },  // [7] 토요일
  
  // [8] 현재 관광객 데이터
  { OUT_NOW_M_POP_00: 1.0, OUT_NOW_W_POP_00: 1.0, ... },
  
  // [9-15] 관광객 요일별 시간대 데이터 (일~토)
  { OUT_WEEK: "Sun", "0": 166, "1": 166, ... },   // [9] 일요일
  { OUT_WEEK: "Mon", "0": 144, "1": 129, ... },   // [10] 월요일
  { OUT_WEEK: "Tue", "0": 126, "1": 124, ... },   // [11] 화요일
  { OUT_WEEK: "Wed", "0": 0, "1": 0, ... },       // [12] 수요일
  { OUT_WEEK: "Thu", "0": 125, "1": 126, ... },   // [13] 목요일
  { OUT_WEEK: "Fri", "0": 135, "1": 139, ... },   // [14] 금요일
  { OUT_WEEK: "Sat", "0": 144, "1": 159, ... }    // [15] 토요일
]
```

---

## 🔍 데이터 필드 상세

### 1. 현재 도민 데이터 (인덱스 0)

#### 필드 구조

```javascript
{
  // 남성 연령별 인구
  "IN_NOW_M_POP_00": 45.59,  // 10세 미만 남성
  "IN_NOW_M_POP_10": 69.48,  // 10대 남성
  "IN_NOW_M_POP_20": 80.62,  // 20대 남성
  "IN_NOW_M_POP_30": 106.74, // 30대 남성
  "IN_NOW_M_POP_40": 126.13, // 40대 남성
  "IN_NOW_M_POP_50": 143.56, // 50대 남성
  "IN_NOW_M_POP_60": 127.95, // 60대 남성
  "IN_NOW_M_POP_70": 70.49,  // 70대 남성
  "IN_NOW_M_POP_80": 26.22,  // 80대 남성
  "IN_NOW_M_POP_90": 2.62,   // 90세 이상 남성
  
  // 여성 연령별 인구
  "IN_NOW_W_POP_00": 45.59,  // 10세 미만 여성
  "IN_NOW_W_POP_10": 70.11,  // 10대 여성
  "IN_NOW_W_POP_20": 88.25,  // 20대 여성
  "IN_NOW_W_POP_30": 89.90,  // 30대 여성
  "IN_NOW_W_POP_40": 123.06, // 40대 여성
  "IN_NOW_W_POP_50": 146.94, // 50대 여성
  "IN_NOW_W_POP_60": 149.41, // 60대 여성
  "IN_NOW_W_POP_70": 98.37,  // 70대 여성
  "IN_NOW_W_POP_80": 47.76,  // 80대 여성
  "IN_NOW_W_POP_90": 6.75,   // 90세 이상 여성
  
  // 총합
  "IN_NOW_POP_SUM": 1665.54  // 현재 도민 총 인구
}
```

#### 파싱 예시

```javascript
const residentNow = rawData[0];

// 총 인구
const totalResident = Math.round(residentNow.IN_NOW_POP_SUM);

// 성별 합계
const ages = ['00', '10', '20', '30', '40', '50', '60', '70', '80', '90'];
const maleTotal = ages.reduce((sum, age) => 
  sum + (residentNow[`IN_NOW_M_POP_${age}`] || 0), 0);
const femaleTotal = ages.reduce((sum, age) => 
  sum + (residentNow[`IN_NOW_W_POP_${age}`] || 0), 0);

// 연령대별
const age20s = Math.round(
  (residentNow.IN_NOW_M_POP_20 || 0) + 
  (residentNow.IN_NOW_W_POP_20 || 0)
);
```

### 2. 도민 요일별 데이터 (인덱스 1-7)

#### 필드 구조

```javascript
{
  "IN_WEEK": "Sun",  // 요일 식별자
  "00": 1593.29,      // 0시 평균 인구
  "01": 1551.81,      // 1시 평균 인구
  "02": 1569.53,      // 2시 평균 인구
  "03": 1544.29,      // 3시 평균 인구
  "04": 1543.67,      // 4시 평균 인구
  "05": 1531.54,      // 5시 평균 인구
  "06": 1554.60,      // 6시 평균 인구
  "07": 1539.62,      // 7시 평균 인구
  "08": 1509.26,      // 8시 평균 인구
  "09": 1505.72,      // 9시 평균 인구
  "10": 1514.00,      // 10시 평균 인구
  "11": 1531.16,      // 11시 평균 인구
  "12": 1562.68,      // 12시 평균 인구
  "13": 1580.74,      // 13시 평균 인구
  "14": 1644.73,      // 14시 평균 인구
  "15": 1677.09,      // 15시 평균 인구
  "16": 1706.67,      // 16시 평균 인구
  "17": 1720.15,      // 17시 평균 인구
  "18": 1722.76,      // 18시 평균 인구
  "19": 1765.78,      // 19시 평균 인구
  "20": 1728.26,      // 20시 평균 인구
  "21": 1677.21,      // 21시 평균 인구
  "22": 1634.72,      // 22시 평균 인구
  "23": 1643.51       // 23시 평균 인구
}
```

#### 파싱 예시

```javascript
const weeklyResident = rawData.slice(1, 8).map((dayData, idx) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return {
    day: weekDays[idx],
    hourly: Object.keys(dayData)
      .filter(key => key !== 'IN_WEEK')  // IN_WEEK 제외
      .map(hour => ({
        hour: parseInt(hour, 10),         // "0" → 0
        population: Math.round(dayData[hour])
      }))
      .sort((a, b) => a.hour - b.hour)   // 시간순 정렬
  };
});

// 결과 예시
// [
//   {
//     day: 'Sun',
//     hourly: [
//       { hour: 0, population: 1593 },
//       { hour: 1, population: 1552 },
//       ...
//     ]
//   },
//   ...
// ]
```

### 3. 현재 관광객 데이터 (인덱스 8)

#### 필드 구조

```javascript
{
  // 남성 연령별 인구
  "OUT_NOW_M_POP_00": 1.0,
  "OUT_NOW_M_POP_10": 4.72,
  "OUT_NOW_M_POP_20": 21.98,
  "OUT_NOW_M_POP_30": 12.05,
  "OUT_NOW_M_POP_40": 13.45,
  "OUT_NOW_M_POP_50": 17.32,
  "OUT_NOW_M_POP_60": 12.76,
  "OUT_NOW_M_POP_70": 1.94,
  "OUT_NOW_M_POP_80": 0.23,
  "OUT_NOW_M_POP_90": 0,
  
  // 여성 연령별 인구
  "OUT_NOW_W_POP_00": 1.0,
  "OUT_NOW_W_POP_10": 4.90,
  "OUT_NOW_W_POP_20": 22.70,
  "OUT_NOW_W_POP_30": 13.05,
  "OUT_NOW_W_POP_40": 12.68,
  "OUT_NOW_W_POP_50": 15.31,
  "OUT_NOW_W_POP_60": 8.49,
  "OUT_NOW_W_POP_70": 3.01,
  "OUT_NOW_W_POP_80": 0.35,
  "OUT_NOW_W_POP_90": 0,
  
  // 총합
  "OUT_NOW_POP_SUM": 166.94  // 현재 관광객 총 인구
}
```

#### 파싱 예시

```javascript
const touristNow = rawData[8];

// 총 관광객 수
const totalTourist = Math.round(touristNow.OUT_NOW_POP_SUM);

// 성별 합계
const ages = ['00', '10', '20', '30', '40', '50', '60', '70', '80', '90'];
const maleTourist = ages.reduce((sum, age) => 
  sum + (touristNow[`OUT_NOW_M_POP_${age}`] || 0), 0);
const femaleTourist = ages.reduce((sum, age) => 
  sum + (touristNow[`OUT_NOW_W_POP_${age}`] || 0), 0);
```

### 4. 관광객 요일별 데이터 (인덱스 9-15)

#### 필드 구조

도민 요일별 데이터와 동일한 구조이지만, `OUT_WEEK` 키를 사용합니다:

```javascript
{
  "OUT_WEEK": "Sun",
  "00": 166.0,
  "01": 166.0,
  "02": 172.0,
  ...
  "23": 144.0
}
```

#### 파싱 예시

```javascript
const weeklyTourist = rawData.slice(9, 16).map((dayData, idx) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return {
    day: weekDays[idx],
    hourly: Object.keys(dayData)
      .filter(key => key !== 'OUT_WEEK')  // OUT_WEEK 제외
      .map(hour => ({
        hour: parseInt(hour, 10),
        population: Math.round(dayData[hour])
      }))
      .sort((a, b) => a.hour - b.hour)
  };
});
```

---

## 🛠️ 완전한 파싱 예시

### 전체 데이터 파싱

```javascript
function parseFullResponse(rawData) {
  if (!Array.isArray(rawData) || rawData.length < 16) {
    throw new Error('Invalid response structure');
  }

  const residentNow = rawData[0];
  const touristNow = rawData[8];
  const ages = ['00', '10', '20', '30', '40', '50', '60', '70', '80', '90'];
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return {
    current: {
      resident: {
        total: Math.round(residentNow.IN_NOW_POP_SUM || 0),
        male: Math.round(
          ages.reduce((sum, age) => sum + (residentNow[`IN_NOW_M_POP_${age}`] || 0), 0)
        ),
        female: Math.round(
          ages.reduce((sum, age) => sum + (residentNow[`IN_NOW_W_POP_${age}`] || 0), 0)
        ),
        byAge: ages.map(age => ({
          age: age === '00' ? '10세 미만' : age === '90' ? '90세 이상' : `${age}대`,
          male: Math.round(residentNow[`IN_NOW_M_POP_${age}`] || 0),
          female: Math.round(residentNow[`IN_NOW_W_POP_${age}`] || 0),
          total: Math.round(
            (residentNow[`IN_NOW_M_POP_${age}`] || 0) +
            (residentNow[`IN_NOW_W_POP_${age}`] || 0)
          )
        }))
      },
      tourist: {
        total: Math.round(touristNow.OUT_NOW_POP_SUM || 0),
        male: Math.round(
          ages.reduce((sum, age) => sum + (touristNow[`OUT_NOW_M_POP_${age}`] || 0), 0)
        ),
        female: Math.round(
          ages.reduce((sum, age) => sum + (touristNow[`OUT_NOW_W_POP_${age}`] || 0), 0)
        ),
        byAge: ages.map(age => ({
          age: age === '00' ? '10세 미만' : age === '90' ? '90세 이상' : `${age}대`,
          male: Math.round(touristNow[`OUT_NOW_M_POP_${age}`] || 0),
          female: Math.round(touristNow[`OUT_NOW_W_POP_${age}`] || 0),
          total: Math.round(
            (touristNow[`OUT_NOW_M_POP_${age}`] || 0) +
            (touristNow[`OUT_NOW_W_POP_${age}`] || 0)
          )
        }))
      },
      total: Math.round(
        (residentNow.IN_NOW_POP_SUM || 0) +
        (touristNow.OUT_NOW_POP_SUM || 0)
      )
    },
    weekly: {
      resident: rawData.slice(1, 8).map((dayData, idx) => ({
        day: weekDays[idx],
        hourly: Object.keys(dayData)
          .filter(key => key !== 'IN_WEEK')
          .map(hour => ({
            hour: parseInt(hour, 10),
            population: Math.round(dayData[hour])
          }))
          .sort((a, b) => a.hour - b.hour)
      })),
      tourist: rawData.slice(9, 16).map((dayData, idx) => ({
        day: weekDays[idx],
        hourly: Object.keys(dayData)
          .filter(key => key !== 'OUT_WEEK')
          .map(hour => ({
            hour: parseInt(hour, 10),
            population: Math.round(dayData[hour])
          }))
          .sort((a, b) => a.hour - b.hour)
      }))
    }
  };
}
```

### 사용 예시

```javascript
import https from 'https';

function fetchPopulationData(lng, lat, radius) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'jeju.mms.gislab.co.kr',
      path: `/mms_new/GEONET.getAreaWeekInfoByLatlng.php?X=${lng}&Y=${lat}&R=${radius}`,
      method: 'GET',
      rejectUnauthorized: false
    };

    https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject).end();
  });
}

// 사용
const rawData = await fetchPopulationData(126.5632342, 33.2501555, 150);
const parsed = parseFullResponse(rawData);

console.log(`현재 총 인구: ${parsed.current.total}명`);
console.log(`도민: ${parsed.current.resident.total}명`);
console.log(`관광객: ${parsed.current.tourist.total}명`);
```

---

## ⚠️ 주의사항

### 1. 수요일 데이터

많은 장소에서 수요일(Wed) 데이터가 0으로 반환됩니다:

```javascript
{
  "IN_WEEK": "Wed",
  "00": 0,
  "01": 0,
  ...
  "23": 0
}
```

이는 API 제공자의 데이터 수집 정책으로 보이며, **파싱 오류가 아닙니다.**

### 2. SSL 인증서

API 서버는 자체 서명 인증서를 사용하므로, HTTPS 요청 시 인증서 검증을 우회해야 합니다:

```javascript
// Node.js
rejectUnauthorized: false

// cURL
curl -k 'https://...'
```

### 3. 부동소수점 값

인구 수는 부동소수점으로 반환되므로, 반올림이 필요합니다:

```javascript
const population = Math.round(rawData[0].IN_NOW_POP_SUM);
// 1665.54 → 1666
```

### 4. 요청 제한

API 부하를 줄이기 위해 요청 간 1초 이상의 간격을 두는 것을 권장합니다:

```javascript
await new Promise(resolve => setTimeout(resolve, 1000));
```

### 5. 관광객 데이터

특정 시간대나 장소에서 관광객 데이터가 0일 수 있습니다. 이는:
- 실제로 관광객이 없거나
- 해당 지역의 관광객 집계 기능이 비활성화되었을 가능성

---

## 📊 응답 데이터 크기

- **평균 응답 크기**: 5~6 KB
- **압축 없음**: `Accept-Encoding` 헤더를 보내도 압축되지 않음
- **문자 인코딩**: UTF-8

---

## 🔗 관련 문서

- [README.md](./README.md) - 프로젝트 개요 및 사용법
- [collector.js](./collector.js) - 실제 구현 코드
- [locations.json](./locations.json) - 수집 장소 목록

---

## 📝 라이선스

이 문서는 프로젝트의 일부로 MIT 라이선스를 따릅니다.

**API 데이터의 저작권은 제주특별자치도 및 해당 API 제공자에게 있습니다.**
