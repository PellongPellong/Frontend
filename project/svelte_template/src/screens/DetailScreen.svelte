<script>
    import { generateMapLink } from "../lib/deeplink.js";

    export let goTo;
    export let selectedPlace;

    if (!selectedPlace) {
        // Fallback if accessed without state (shouldn't happen in this router)
        goTo("result");
    }

    function goBack() {
        goTo("result");
    }

    function handleDirections() {
        const url = generateMapLink(selectedPlace);
        window.open(url, "_blank");
    }
</script>

{#if selectedPlace}
    <div class="bg-white min-h-screen pb-20">
        <!-- Hero Image -->
        <div class="h-64 bg-gray-300 relative">
            <div
                class="absolute inset-0 flex items-center justify-center text-gray-500"
            >
                Image for {selectedPlace.name}
            </div>
            <button
                class="absolute top-4 left-4 bg-white/80 p-2 rounded-full shadow-lg backdrop-blur-sm hover:bg-white transition"
                on:click={goBack}
            >
                &larr; Back
            </button>
        </div>

        <div class="p-6 -mt-6 bg-white rounded-t-3xl relative">
            <!-- Header -->
            <div class="mb-6">
                <div class="flex justify-between items-start mb-2">
                    <h1 class="text-3xl font-bold text-gray-900">
                        {selectedPlace.name}
                    </h1>
                    {#if selectedPlace.aiScore}
                        <div class="flex flex-col items-end">
                            <span class="text-2xl font-bold text-blue-600"
                                >{selectedPlace.aiScore}</span
                            >
                            <span class="text-xs text-gray-500">Match</span>
                        </div>
                    {/if}
                </div>

                <div class="flex items-center text-sm text-gray-500 gap-2 mb-4">
                    <span class="px-2 py-1 bg-gray-100 rounded"
                        >{selectedPlace.category}</span
                    >
                    {#if selectedPlace.congestion}
                        <span
                            class="px-2 py-1 rounded {selectedPlace.congestion ===
                            'low'
                                ? 'bg-green-100 text-green-700'
                                : selectedPlace.congestion === 'medium'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-red-100 text-red-700'}"
                        >
                            Congestion: {selectedPlace.congestion.toUpperCase()}
                        </span>
                    {/if}
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-6">
                    {#each selectedPlace.tags as tag}
                        <span
                            class="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                            >#{tag}</span
                        >
                    {/each}
                </div>
            </div>

            <!-- AI Summary / Story -->
            <div class="mb-8">
                <h2 class="text-lg font-bold mb-2">About this place</h2>
                {#if selectedPlace.story}
                    <p class="text-gray-700 leading-relaxed mb-4">
                        {selectedPlace.story}
                    </p>
                {:else if selectedPlace.aiSummary}
                    <p class="text-gray-700 leading-relaxed">
                        {selectedPlace.aiSummary}
                    </p>
                {:else}
                    <p class="text-gray-500 italic">
                        No detailed description available.
                    </p>
                {/if}
            </div>

            <!-- Action Button -->
            <div
                class="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 md:relative md:border-0 md:bg-transparent md:p-0"
            >
                <button
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
                    on:click={handleDirections}
                >
                    <span>Get Directions</span>
                    <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        /><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        /></svg
                    >
                </button>
            </div>
        </div>
    </div>
{/if}
