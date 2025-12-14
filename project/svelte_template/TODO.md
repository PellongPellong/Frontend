# 제주 숨은 명소 - 남은 작업 가이드

## 🎨 필수 작업: 에셋 추가

### 1. 인트로 화면 에셋

#### 배경 영상 또는 이미지
**위치:** `public/images/` 또는 `public/videos/`

**옵션 1: 영상 배경 (권장)**
- 파일명: `baekrokdam-background.mp4`, `baekrokdam-background.webm`
- 해상도: 1920x1080 이상
- 용량: 10MB 이하 권장
- 특징: 백록담 자연 풍경, 루프 가능한 영상

**옵션 2: 이미지 배경**
- 파일명: `baekrokdam-background.jpg` 또는 `.webp`
- 해상도: 1920x1080 이상
- 용량: 500KB 이하 권장

**수정 파일:** `src/screens/IntroScreen.svelte` (25-27번째 줄)

```svelte
<!-- 현재 코드 (Placeholder) -->
<div
    class="relative w-full h-screen bg-cover bg-center overflow-hidden"
    style="background-image: url('https://placehold.co/1920x1080/2c3e50/ecf0f1?text=Baekrokdam+Background');"
>

<!-- 영상으로 변경 시 -->
<div class="relative w-full h-screen overflow-hidden">
    <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/baekrokdam-background.mp4" type="video/mp4" />
        <source src="/videos/baekrokdam-background.webm" type="video/webm" />
    </video>
    
<!-- 또는 이미지로 변경 시 -->
<div
    class="relative w-full h-screen bg-cover bg-center overflow-hidden"
    style="background-image: url('/images/baekrokdam-background.jpg');"
>
```

---

#### 흰사슴 이미지 (2개 필요)
**위치:** `public/images/`

**1) 자연 상태 흰사슴**
- 파일명: `deer-natural.png`
- 크기: 512x512px 권장
- 포맷: PNG (투명 배경)
- 스타일: 사실적, 우아한 느낌

**2) 마스코트 캐릭터**
- 파일명: `deer-mascot.png`
- 크기: 512x512px 권장
- 포맷: PNG (투명 배경)
- 스타일: 귀엽고 친근한 캐릭터

**수정 파일:** `src/screens/IntroScreen.svelte` (45-59번째 줄)

```svelte
<!-- 현재 코드 (Placeholder) -->
<img
    src="https://placehold.co/300x300/e67e22/fff?text=Mascot+Deer"
    alt="Mascot"
    class="w-40 h-40 md:w-56 md:h-56 object-contain animate-bounce-slow"
/>

<img
    src="https://placehold.co/300x300/bdc3c7/2c3e50?text=Natural+Deer"
    alt="Natural Deer"
    class="w-40 h-40 md:w-56 md:h-56 object-contain opacity-90 drop-shadow-2xl"
/>

<!-- 실제 에셋으로 변경 -->
<img
    src="/images/deer-mascot.png"
    alt="Mascot"
    class="w-40 h-40 md:w-56 md:h-56 object-contain animate-bounce-slow"
/>

<img
    src="/images/deer-natural.png"
    alt="Natural Deer"
    class="w-40 h-40 md:w-56 md:h-56 object-contain opacity-90 drop-shadow-2xl"
/>
```

---

## 🔧 선택 작업

### 2. 장소 이미지 추가 (선택사항)

현재 PlaceCard는 그라디언트 배경을 사용합니다. 실제 장소 이미지를 추가하려면:

**위치:** `public/images/places/`

**파일 구조:**
```
public/images/places/
  ├── place-1.jpg
  ├── place-2.jpg
  └── ...
```

**수정 파일:**
1. `src/lib/mock.js` - 각 Place 객체에 `imageUrl` 필드 추가
```javascript
{
  id: '1',
  name: '사려니숲길',
  imageUrl: '/images/places/place-1.jpg',  // 추가
  // ... 나머지 필드
}
```

2. `src/components/PlaceCard.svelte` (18번째 줄)
```svelte
<!-- 현재: 그라디언트 배경 -->
<div class="relative h-40 md:h-48 bg-gradient-to-br from-blue-200 to-teal-200 overflow-hidden">

<!-- 변경: 실제 이미지 -->
<div class="relative h-40 md:h-48 overflow-hidden">
    {#if place.imageUrl}
        <img src={place.imageUrl} alt={place.name} class="w-full h-full object-cover" />
    {:else}
        <div class="w-full h-full bg-gradient-to-br from-blue-200 to-teal-200"></div>
    {/if}
```

---

### 3. Favicon 변경

**위치:** `public/favicon.ico`

현재 기본 Vite 파비콘을 프로젝트 아이콘으로 변경하세요.
- 크기: 32x32px, 16x16px (멀티 사이즈 ICO)
- 디자인: 흰사슴 또는 제주도 상징

---

### 4. 메타데이터 수정

**수정 파일:** `index.html`

```html
<!-- 현재 -->
<title>Vite + Svelte</title>

<!-- 변경 -->
<title>제주 숨은 명소 - Jeju Hidden Gems</title>
<meta name="description" content="나만의 제주 여행을 위한 맞춤형 관광지 추천 서비스" />
<meta name="keywords" content="제주도, 관광, 여행, 추천, 숨은명소" />
<meta property="og:title" content="제주 숨은 명소" />
<meta property="og:description" content="나만의 제주 여행을 위한 맞춤형 관광지 추천" />
<meta property="og:type" content="website" />
```

---

### 5. Mock 데이터 좌표 확인

**수정 파일:** `src/lib/mock.js`

현재 Mock 데이터의 위도/경도가 실제 제주 장소 좌표인지 확인하세요.
- 제주도 대략 위도: 33.3-33.6
- 제주도 대략 경도: 126.1-126.9

---

### 6. 로딩 스피너 커스터마이징 (선택)

**수정 파일:** `src/components/LoadingSpinner.svelte`

현재 기본 스피너를 마스코트 기반 애니메이션으로 변경 가능:
```svelte
<!-- 현재: 기본 스피너 -->
<div class="flex justify-center items-center">
  <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
</div>

<!-- 변경: 마스코트 스피너 -->
<div class="flex justify-center items-center">
  <img src="/images/deer-mascot.png" 
       alt="Loading" 
       class="w-16 h-16 animate-bounce" />
</div>
```

---

## ✅ 배포 전 체크리스트

### 필수
- [ ] 배경 영상 또는 이미지 추가 (`public/images/` 또는 `public/videos/`)
- [ ] 흰사슴 이미지 2개 추가 (`public/images/deer-natural.png`, `deer-mascot.png`)
- [ ] IntroScreen.svelte에서 이미지 경로 수정
- [ ] `npm run dev`로 로컬 테스트

### 선택
- [ ] 장소 이미지 추가 및 코드 수정
- [ ] Favicon 변경
- [ ] index.html 메타데이터 수정
- [ ] Mock 데이터 좌표 확인
- [ ] 로딩 스피너 커스터마이징

### 테스트
- [ ] 인트로 → 설문 → 결과 → 상세 전체 플로우 확인
- [ ] 모바일 반응형 테스트 (크롬 DevTools)
- [ ] 뒤로가기/다시하기 버튼 동작 확인
- [ ] 길찾기 딥링크 동작 확인

---

## 🚀 실행 방법

```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

---

## 📁 프로젝트 구조

```
project/svelte_template/
├── public/
│   ├── images/           # ⬅️ 여기에 이미지 추가
│   │   ├── deer-natural.png
│   │   ├── deer-mascot.png
│   │   ├── baekrokdam-background.jpg
│   │   └── places/       # (선택) 장소 이미지
│   ├── videos/           # ⬅️ 또는 여기에 영상 추가
│   │   └── baekrokdam-background.mp4
│   └── favicon.ico       # ⬅️ 파비콘 교체
├── src/
│   ├── screens/
│   │   ├── IntroScreen.svelte      # ⬅️ 이미지 경로 수정 필요
│   │   ├── SurveyScreen.svelte
│   │   ├── ResultScreen.svelte
│   │   └── DetailScreen.svelte
│   ├── components/
│   │   ├── PlaceCard.svelte        # (선택) 이미지 추가 시 수정
│   │   ├── QuestionCard.svelte
│   │   ├── ProgressBar.svelte
│   │   └── LoadingSpinner.svelte   # (선택) 커스터마이징
│   ├── lib/
│   │   └── mock.js                 # (선택) 좌표/이미지 URL 추가
│   └── app.css
└── index.html                      # ⬅️ 메타데이터 수정
```

---

## 💡 에셋 준비 팁

### 이미지 최적화
- **포맷**: WebP 권장 (JPG/PNG 대비 30% 작음)
- **도구**: [Squoosh.app](https://squoosh.app/) 또는 [TinyPNG](https://tinypng.com/)

### 영상 최적화
- **포맷**: MP4 (H.264) + WebM (VP9) 제공
- **도구**: [HandBrake](https://handbrake.fr/) 또는 FFmpeg
- **설정**: 
  - 해상도: 1920x1080
  - 비트레이트: 2-3 Mbps
  - 프레임레이트: 24-30fps

### AI 이미지 생성 (옵션)
에셋이 없다면 AI로 생성 가능:
- **Midjourney**: "white deer in jeju hallasan nature, peaceful, cinematic"
- **DALL-E**: "cute white deer mascot character, friendly, simple design"
- **Stable Diffusion**: 무료 대안

---

## 📞 문제 발생 시

### 이미지가 안 보일 때
1. 파일 경로 확인 (`/images/...`로 시작)
2. 파일명 대소문자 확인 (Linux는 구분함)
3. 개발 서버 재시작 (`Ctrl+C` 후 `npm run dev`)

### CSS 오류 발생 시
- 이미 Tailwind 4.x 호환 수정 완료
- 추가 오류 시 `node_modules` 삭제 후 `npm install` 재실행

---

**작성일:** 2025-12-14  
**프로젝트:** 제주 관광 분산 데모 서비스  
**상태:** UI 개발 완료, 에셋 추가 대기 중
