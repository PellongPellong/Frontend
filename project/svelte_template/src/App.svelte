<script>
  import { onMount } from "svelte";
  import IntroScreen from "./screens/IntroScreen.svelte";
  import MainScreen from "./screens/MainScreen.svelte";
  // import SurveyScreen from "./screens/SurveyScreen.svelte";
  // import ResultScreen from "./screens/ResultScreen.svelte";
  // import DetailScreen from "./screens/DetailScreen.svelte";

  const INTRO_COMPLETED_KEY = "jeju-intro-completed";

  // Local State
  let page = "intro"; // 'intro' | 'main' | 'survey' | 'result' | 'detail'
  let selectedPlace = null;

  onMount(() => {
    // 인트로 완료 여부 확인 (localStorage 사용)
    const introCompleted = localStorage.getItem(INTRO_COMPLETED_KEY);
    if (introCompleted === "true") {
      page = "main";
    }

    // 개발용: Control 키 누르면 로컬스토리지 초기화
    const handleKeydown = (e) => {
      if (e.key === "Insert") {
        localStorage.removeItem(INTRO_COMPLETED_KEY);
        console.log("Intro skip state cleared");
        //alert("인트로 스킵 설정이 초기화되었습니다."); // Optional feedback
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  // Navigation Function
  function goTo(target, place = null) {
    // 인트로에서 메인으로 이동 시 캐싱
    if (page === "intro" && (target === "main" || target === "survey")) {
      localStorage.setItem(INTRO_COMPLETED_KEY, "true");
    }

    page = target;
    if (place) selectedPlace = place;
    window.scrollTo(0, 0);
  }
</script>

<main class="min-h-screen bg-white text-gray-900 font-sans">
  {#if page === "intro"}
    <IntroScreen {goTo} />
  {:else if page === "main" || page === "survey"}
    <!-- intro 후 main으로 -->
    <MainScreen {goTo} />
  {/if}

  <!-- 기존 화면들은 주석 처리 -->
  <!-- {:else if page === "survey"}
    <SurveyScreen {goTo} />
  {:else if page === "result"}
    <ResultScreen {goTo} />
  {:else if page === "detail"}
    <DetailScreen {goTo} {selectedPlace} />
  {/if} -->
</main>
