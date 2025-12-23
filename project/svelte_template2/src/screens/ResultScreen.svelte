<script>
  import { onMount } from "svelte";
  import { preferences } from "../stores/preferences.js";
  import { recommendations } from "../stores/recommendations.js";
  import { ui } from "../stores/ui.js";
  import { getRecommendations } from "../lib/adapter.js";

  import PlaceCard from "../components/PlaceCard.svelte";
  import LoadingSpinner from "../components/LoadingSpinner.svelte";

  export let goTo;

  let isOffline = false;

  onMount(async () => {
    ui.update((s) => ({ ...s, loading: true, error: null }));

    const result = await getRecommendations($preferences);

    ui.update((s) => ({ ...s, loading: false }));

    if (result.success) {
      recommendations.set(result.data);
      isOffline = result.fallback || false;
    } else {
      ui.update((s) => ({ ...s, error: "Failed to load recommendations" }));

      if (result.fallback && result.data) {
        recommendations.set(result.data);
        isOffline = true;
      }
    }
  });

  function handleRestart() {
    preferences.reset();
    recommendations.set([]);
    goTo("survey");
  }

  function handlePlaceClick(place) {
    goTo("detail", place);
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 py-8 px-4">
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-3xl md:text-4xl font-bold text-gradient-jeju mb-3">
        당신을 위한 추천 장소
      </h1>
      <p class="text-gray-600">혼잡하지 않은 제주의 명소를 발견해보세요</p>
    </div>

    {#if $ui.loading}
      <div class="glass rounded-3xl p-12 flex flex-col items-center justify-center min-h-[400px]">
        <LoadingSpinner />
        <p class="text-gray-600 mt-6 animate-pulse">최적의 장소를 찾고 있어요...</p>
      </div>
    {:else if $ui.error && !$recommendations.length}
      <div class="glass rounded-3xl p-8 text-center">
        <div class="text-red-500 mb-4">
          <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          <p class="text-lg font-semibold">{$ui.error}</p>
        </div>
        <button 
          class="gradient-jeju text-white font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform"
          on:click={handleRestart}
        >
          다시 시도하기
        </button>
      </div>
    {:else}
      <!-- Offline Notice -->
      {#if isOffline}
        <div class="glass mb-6 rounded-2xl p-4 flex items-center gap-3 border-l-4 border-yellow-400">
          <svg class="w-6 h-6 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          <div>
            <p class="text-yellow-800 font-semibold text-sm">오프라인 모드</p>
            <p class="text-yellow-700 text-xs">로컬 추천 결과를 보여드리고 있어요</p>
          </div>
        </div>
      {/if}

      <!-- Results Grid -->
      <div class="grid gap-5 md:gap-6 mb-8">
        {#each $recommendations as place, index (place.id)}
          <div 
            class="animate-fade-in"
            style="animation-delay: {index * 100}ms"
          >
            <PlaceCard {place} onClick={() => handlePlaceClick(place)} />
          </div>
        {/each}
      </div>

      <!-- Empty State -->
      {#if $recommendations.length === 0}
        <div class="glass rounded-3xl p-12 text-center">
          <svg class="w-20 h-20 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p class="text-gray-600 text-lg mb-6">추천할 장소를 찾을 수 없어요</p>
          <button 
            class="text-blue-600 hover:text-blue-700 font-semibold underline"
            on:click={handleRestart}
          >
            설문을 다시 시도해보세요
          </button>
        </div>
      {/if}

      <!-- Restart Button -->
      {#if $recommendations.length > 0}
        <div class="glass rounded-2xl p-6 text-center">
          <p class="text-gray-600 mb-4 text-sm">마음에 드는 곳이 없나요?</p>
          <button
            class="w-full md:w-auto border-2 border-blue-500 text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            on:click={handleRestart}
          >
            <span class="flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              처음부터 다시 하기
            </span>
          </button>
        </div>
      {/if}
    {/if}
  </div>
</div>

<style>
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
    opacity: 0;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
