# 제주 숨은 명소 - 남은 작업 가이드

## 📁 폴더 구조 (준비 완료)

```
project/svelte_template/
├── public/
│   ├── images/          ✅ 생성됨 - 여기에 이미지 추가
│   │   ├── .gitkeep
│   │   ├── deer-natural.png      ⬅️ 여기에 추가 필요
│   │   ├── deer-mascot.png       ⬅️ 여기에 추가 필요
│   │   └── baekrokdam-background.jpg  ⬅️ 여기에 추가 필요
│   └── videos/          ✅ 생성됨 - 여기에 영상 추가
│       ├── .gitkeep
│       └── baekrokdam-background.mp4  ⬅️ 여기에 추가 필요
└── src/
    └── screens/
        └── IntroScreen.svelte  ⬅️ 이미지 경로 수정 필요
```

---

## 🎨 필수 작업: 에셋 추가

### 1단계: 파일 다운로드 및 준비

#### 필요한 파일 (3-4개)

**A. 배경 (영상 또는 이미지 중 택 1)**

**옵션 1: 영상 배경 (권장)**
- 파일명: `baekrokdam-background.mp4`
- 저장 위치: `public/videos/`
- 해상도: 1920x1080 이상
- 용량: 10MB 이하 권장
- 특징: 백록담/제주 자연 풍경, 루프 가능

**옵션 2: 이미지 배경**
- 파일명: `baekrokdam-background.jpg` (또는 `.webp`)
- 저장 위치: `public/images/`
- 해상도: 1920x1080 이상
- 용량: 500KB 이하 권장

**B. 흰사슴 이미지 (필수 2개)**

1. **자연 상태 흰사슴**
   - 파일명: `deer-natural.png`
   - 저장 위치: `public/images/`
   - 크기: 512x512px 권장
   - 포맷: PNG (투명 배경)
   - 스타일: 사실적, 우아한 느낌

2. **마스코트 캐릭터**
   - 파일명: `deer-mascot.png`
   - 저장 위치: `public/images/`
   - 크기: 512x512px 권장
   - 포맷: PNG (투명 배경)
   - 스타일: 귀엽고 친근한 캐릭터

---

### 2단계: 파일 저장

#### Windows/Mac에서:

1. 프로젝트 폴더 열기:
   ```
   C:\Users\notebiz001\Downloads\gypsy\team\project\svelte_template
   ```

2. 파일 복사:
   - `public/images/` 폴더에 이미지 파일 3개 복사
   - `public/videos/` 폴더에 영상 파일 1개 복사 (영상 사용 시)

3. 파일명 확인:
   - 정확한 파일명 사용 (대소문자 구분)
   - 공백 없이 하이픈(-) 사용

---

### 3단계: IntroScreen.svelte 수정

**파일 위치:** `src/screens/IntroScreen.svelte`

#### A. 배경 영상으로 변경 (영상 사용 시)

**현재 코드 (25-30번째 줄):**
```svelte
<div
    class="relative w-full h-screen bg-cover bg-center overflow-hidden"
    style="background-image: url('https://placehold.co/1920x1080/2c3e50/ecf0f1?text=Baekrokdam+Background');"
    on:click={handleInteraction}
    role="button"
    tabindex="0"
    on:keypress={handleInteraction}
>
```

**변경 후:**
```svelte
<div
    class="relative w-full h-screen overflow-hidden"
    on:click={handleInteraction}
    role="button"
    tabindex="0"
    on:keypress={handleInteraction}
>
    <!-- 배경 영상 -->
    <video 
        autoplay 
        loop 
        muted 
        playsinline 
        class="absolute inset-0 w-full h-full object-cover"
    >
        <source src="/videos/baekrokdam-background.mp4" type="video/mp4" />
    </video>
```

#### B. 배경 이미지로 변경 (이미지 사용 시)

**현재 코드:**
```svelte
style="background-image: url('https://placehold.co/1920x1080/2c3e50/ecf0f1?text=Baekrokdam+Background');"
```

**변경 후:**
```svelte
style="background-image: url('/images/baekrokdam-background.jpg');"
```

#### C. 흰사슴 이미지 경로 변경

**현재 코드 (52-62번째 줄):**
```svelte
{#if showMascot}
    <div class="glass p-8 rounded-3xl">
        <img
            src="https://placehold.co/300x300/e67e22/fff?text=Mascot+Deer"
            alt="Mascot"
            class="w-40 h-40 md:w-56 md:h-56 object-contain animate-bounce-slow"
        />
    </div>
{:else}
    <img
        src="https://placehold.co/300x300/bdc3c7/2c3e50?text=Natural+Deer"
        alt="Natural Deer"
        class="w-40 h-40 md:w-56 md:h-56 object-contain opacity-90 drop-shadow-2xl"
    />
{/if}
```

**변경 후:**
```svelte
{#if showMascot}
    <div class="glass p-8 rounded-3xl">
        <img
            src="/images/deer-mascot.png"
            alt="Mascot"
            class="w-40 h-40 md:w-56 md:h-56 object-contain animate-bounce-slow"
        />
    </div>
{:else}
    <img
        src="/images/deer-natural.png"
        alt="Natural Deer"
        class="w-40 h-40 md:w-56 md:h-56 object-contain opacity-90 drop-shadow-2xl"
    />
{/if}
```

---

## ✅ 체크리스트

### 필수 작업
- [ ] **Step 1**: 이미지/영상 파일 준비 완료
- [ ] **Step 2**: 파일을 `public/images/` 또는 `public/videos/`에 저장
- [ ] **Step 3**: IntroScreen.svelte 코드 수정
  - [ ] 배경 영상 또는 이미지 경로 수정
  - [ ] deer-natural.png 경로 수정
  - [ ] deer-mascot.png 경로 수정
- [ ] **Step 4**: `npm run dev`로 로컬 테스트
- [ ] **Step 5**: 이미지가 정상적으로 보이는지 확인

### 선택 작업
- [ ] 장소 이미지 추가 (`public/images/places/`)
- [ ] Favicon 변경 (`public/favicon.ico`)
- [ ] index.html 메타데이터 수정
- [ ] Mock 데이터 좌표 확인

---

## 🔧 선택 작업 상세

### 2. 장소 이미지 추가 (선택사항)

현재 PlaceCard는 그라디언트 배경을 사용합니다. 실제 장소 이미지를 추가하려면:

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

## 💡 에셋 준비 팁

### 이미지 최적화
- **포맷**: WebP 권장 (JPG/PNG 대비 30% 작음)
- **도구**: [Squoosh.app](https://squoosh.app/) 또는 [TinyPNG](https://tinypng.com/)

### 영상 최적화
- **포맷**: MP4 (H.264)
- **도구**: [HandBrake](https://handbrake.fr/) 또는 FFmpeg
- **설정**: 
  - 해상도: 1920x1080
  - 비트레이트: 2-3 Mbps
  - 프레임레이트: 24-30fps

### AI 이미지 생성 (옵션)

에셋이 없다면 AI로 생성 가능:

**Midjourney 프롬프트:**
- 배경: "jeju hallasan baekrokdam crater, aerial view, misty morning, cinematic, nature documentary style"
- 자연 사슴: "white deer in jeju nature, peaceful, photorealistic, side view"
- 마스코트: "cute white deer mascot character, friendly smile, simple design, flat illustration"

**무료 대안:**
- [Leonardo.ai](https://leonardo.ai/) - 무료 크레딧
- [Bing Image Creator](https://www.bing.com/create) - 무료
- [Stable Diffusion](https://huggingface.co/spaces/stabilityai/stable-diffusion) - 완전 무료

---

## 🐛 문제 해결

### 이미지가 안 보일 때

1. **파일 경로 확인**
   - `/images/...`로 시작하는지 확인 (슬래시 필수)
   - 파일명 대소문자 정확히 일치하는지 확인

2. **파일 위치 확인**
   ```
   project/svelte_template/
   └── public/           ⬅️ 여기에 있어야 함
       └── images/
           └── deer-natural.png
   ```

3. **개발 서버 재시작**
   ```bash
   # Ctrl+C로 중지
   npm run dev  # 다시 시작
   ```

4. **브라우저 캐시 삭제**
   - Chrome: `Ctrl+Shift+R` (강력 새로고침)
   - 개발자도구: Network 탭 → "Disable cache" 체크

### 영상이 재생 안 될 때

1. **형식 확인**
   - MP4 (H.264) 코덱 사용 권장
   - WebM도 추가하면 더 좋음

2. **속성 확인**
   ```svelte
   <video autoplay loop muted playsinline>
   ```
   - `autoplay`, `muted`는 필수 (브라우저 정책)
   - `playsinline`는 모바일용

3. **용량 확인**
   - 10MB 초과 시 로딩 느림
   - 압축 권장

---

## 📝 완료 후 확인사항

### 테스트 시나리오

1. **인트로 화면**
   - [ ] 배경 영상/이미지가 보이는가?
   - [ ] 5초 후 또는 클릭 시 흰사슴이 변하는가?
   - [ ] 마스코트로 전환되는가?
   - [ ] "여행 시작하기" 버튼이 나타나는가?

2. **전체 플로우**
   - [ ] 인트로 → 설문 이동
   - [ ] 설문 7개 완료
   - [ ] 결과 화면 5개 카드 표시
   - [ ] 카드 클릭 시 상세 화면
   - [ ] 뒤로가기 버튼 동작
   - [ ] 길찾기 버튼 동작 (새 탭 열림)

3. **반응형 테스트**
   - [ ] 모바일 (375px)
   - [ ] 태블릿 (768px)
   - [ ] 데스크톱 (1920px)

---

**작성일:** 2025-12-14  
**프로젝트:** 제주 관광 분산 데모 서비스  
**상태:** ✅ 폴더 구조 준비 완료, 에셋 추가 및 코드 수정 대기 중

---

## 🎯 다음 단계 요약

1. **이미지/영상 파일 준비** (3-4개)
2. **파일을 해당 폴더에 저장**
3. **IntroScreen.svelte 코드 3군데 수정**
4. **npm run dev로 확인**
5. **완료! 🎉**
