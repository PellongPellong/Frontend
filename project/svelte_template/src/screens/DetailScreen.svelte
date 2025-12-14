<script>
    import { generateMapLink } from "../lib/deeplink.js";

    export let goTo;
    export let selectedPlace;

    if (!selectedPlace) {
        goTo("result");
    }

    function goBack() {
        goTo("result");
    }

    function handleDirections() {
        const url = generateMapLink(selectedPlace);
        window.open(url, "_blank");
    }
    
    $: congestionInfo = {
        low: { color: 'bg-green-100 text-green-700 border-green-200', text: '여유로운 편' },
        medium: { color: 'bg-yellow-100 text-yellow-700 border-yellow-200', text: '보통' },
        high: { color: 'bg-red-100 text-red-700 border-red-200', text: '매우 혼잡' }
    }[selectedPlace?.congestion] || null;
</script>

{#if selectedPlace}
    <div class="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
        <!-- Hero Image with Overlay -->
        <div class="relative h-72 md:h-96 bg-gradient-to-br from-blue-300 to-teal-300 overflow-hidden">
            <!-- Image Placeholder -->
            <div class="absolute inset-0 flex items-center justify-center text-white/60">
                <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
            </div>
            
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-50"></div>
            
            <!-- Back Button -->
            <button
                class="absolute top-6 left-6 glass p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
                on:click={goBack}
            >
                <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            
            <!-- Score Badge -->
            {#if selectedPlace.aiScore}
                <div class="absolute top-6 right-6 glass px-4 py-2 rounded-full shadow-lg">
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                        <span class="text-lg font-bold text-gray-800">{selectedPlace.aiScore}</span>
                    </div>
                </div>
            {/if}
        </div>

        <!-- Content -->
        <div class="max-w-4xl mx-auto px-4 -mt-8 pb-32 relative">
            <!-- Main Card -->
            <div class="glass rounded-3xl p-6 md:p-8 shadow-2xl">
                <!-- Header -->
                <div class="mb-6">
                    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {selectedPlace.name}
                    </h1>

                    <!-- Meta Info -->
                    <div class="flex flex-wrap gap-3 mb-4">
                        <span class="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-semibold">
                            {selectedPlace.category}
                        </span>
                        
                        {#if congestionInfo}
                            <span class="{congestionInfo.color} border px-3 py-1.5 rounded-full text-sm font-semibold">
                                혼잡도: {congestionInfo.text}
                            </span>
                        {/if}
                        
                        <span class="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1">
                            <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            {selectedPlace.score}
                        </span>
                    </div>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2">
                        {#each selectedPlace.tags as tag}
                            <span class="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                                #{tag}
                            </span>
                        {/each}
                    </div>
                </div>

                <!-- Divider -->
                <div class="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

                <!-- Description Section -->
                <div class="mb-6">
                    <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        장소 소개
                    </h2>
                    
                    {#if selectedPlace.story}
                        <div class="bg-blue-50/50 rounded-2xl p-5 border border-blue-100">
                            <p class="text-gray-700 leading-relaxed whitespace-pre-line">
                                {selectedPlace.story}
                            </p>
                        </div>
                    {:else if selectedPlace.aiSummary}
                        <div class="bg-purple-50/50 rounded-2xl p-5 border border-purple-100">
                            <div class="flex items-start gap-2 mb-2">
                                <svg class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                                <span class="text-xs font-semibold text-purple-700">AI 추천 설명</span>
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                                {selectedPlace.aiSummary}
                            </p>
                        </div>
                    {:else}
                        <p class="text-gray-500 italic text-center py-8">
                            상세 설명이 준비되지 않았습니다.
                        </p>
                    {/if}
                </div>
            </div>
        </div>

        <!-- Fixed Bottom Action Button -->
        <div class="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent">
            <div class="max-w-4xl mx-auto">
                <button
                    class="w-full gradient-jeju text-white font-bold py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-transform"
                    on:click={handleDirections}
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span class="text-lg">길찾기</span>
                </button>
            </div>
        </div>
    </div>
{/if}
