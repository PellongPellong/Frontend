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
    // If we already have results and preferences didn't change?
    // For MVP, always fetch on mount of Result screen to ensure freshness.

    ui.update((s) => ({ ...s, loading: true, error: null }));

    const result = await getRecommendations($preferences);

    ui.update((s) => ({ ...s, loading: false }));

    if (result.success) {
      recommendations.set(result.data);
      isOffline = result.fallback || false;
    } else {
      ui.update((s) => ({ ...s, error: "Failed to load recommendations" }));
      // Should manually trigger fallback if not handled by adapter?
      // Adapter handles fallback, so success=false means critical failure or adapter returned fallback data with success=false flag?
      // My adapter implementation returns { success: false, data: ..., fallback: true } on error.
      // So if success is false but data exists (fallback), we should use it.

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

<div class="max-w-md w-full mx-auto p-4 min-h-screen pb-20">
  <h1 class="text-2xl font-bold mb-4">Recommended for You</h1>

  {#if $ui.loading}
    <div class="h-64 flex items-center justify-center">
      <LoadingSpinner />
    </div>
  {:else if $ui.error && !$recommendations.length}
    <div class="text-center text-red-500 p-8">
      <p>{$ui.error}</p>
      <button class="mt-4 text-blue-500 underline" on:click={handleRestart}
        >Try Again</button
      >
    </div>
  {:else}
    <!-- Content -->
    {#if isOffline}
      <div
        class="bg-yellow-50 border-1 border-yellow-200 text-yellow-800 text-xs p-2 rounded mb-4 flex items-center"
      >
        <span>⚠️ Offline Mode: Showing local recommendations</span>
      </div>
    {/if}

    <div class="grid gap-4">
      {#each $recommendations as place (place.id)}
        <div class="animate-fade-in">
          <PlaceCard {place} onClick={() => handlePlaceClick(place)} />
        </div>
      {/each}
    </div>

    <!-- Restart -->
    <div class="mt-8 text-center bg-white p-4 rounded-lg shadow-sm">
      <p class="text-gray-600 mb-2">Not what you looked for?</p>
      <button
        class="w-full border-2 border-blue-500 text-blue-500 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors"
        on:click={handleRestart}
      >
        Start Over
      </button>
    </div>
  {/if}
</div>

<style>
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
