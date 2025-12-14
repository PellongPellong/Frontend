<script>
  import IntroScreen from "./screens/IntroScreen.svelte";
  import SurveyScreen from "./screens/SurveyScreen.svelte";
  import ResultScreen from "./screens/ResultScreen.svelte";
  import DetailScreen from "./screens/DetailScreen.svelte";

  // Local State
  let page = "intro"; // 'intro' | 'survey' | 'result' | 'detail'
  let selectedPlace = null;

  // Navigation Function
  function goTo(target, place = null) {
    page = target;
    if (place) selectedPlace = place;
    window.scrollTo(0, 0);
  }
</script>

<main class="min-h-screen bg-gray-50 text-gray-900 font-sans">
  {#if page === "intro"}
    <IntroScreen {goTo} />
  {:else if page === "survey"}
    <SurveyScreen {goTo} />
  {:else if page === "result"}
    <ResultScreen {goTo} />
  {:else if page === "detail"}
    <DetailScreen {goTo} {selectedPlace} />
  {/if}
</main>
