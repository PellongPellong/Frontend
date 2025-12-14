<script>
    export let place;
    export let onClick;

    // format tags: display a few
    $: displayTags = place.tags.slice(0, 3);
    
    // Congestion color mapping
    $: congestionColor = {
        low: 'bg-green-100 text-green-700 border-green-200',
        medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        high: 'bg-red-100 text-red-700 border-red-200'
    }[place.congestion] || '';
    
    $: congestionText = {
        low: '여유로움',
        medium: '보통',
        high: '혼잡'
    }[place.congestion] || '';
</script>

<button
    class="w-full glass rounded-2xl overflow-hidden text-left hover-lift transition-all duration-300 group"
    on:click={onClick}
>
    <div class="relative h-40 md:h-48 bg-gradient-to-br from-blue-200 to-teal-200 overflow-hidden">
        <!-- Image Placeholder with overlay -->
        <div class="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
            <svg class="w-16 h-16 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
        </div>
        
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        <!-- Category Badge -->
        <div class="absolute top-3 right-3 glass-dark px-3 py-1.5 rounded-full">
            <span class="text-white text-xs font-semibold">{place.category}</span>
        </div>
        
        <!-- Score Badge -->
        <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span class="text-gray-800 text-sm font-bold">{place.score}</span>
        </div>
        
        <!-- Congestion Badge (if available) -->
        {#if place.congestion}
            <div class="absolute bottom-3 right-3 {congestionColor} backdrop-blur-sm px-3 py-1 rounded-full border text-xs font-semibold">
                {congestionText}
            </div>
        {/if}
    </div>
    
    <div class="p-5">
        <!-- Title Row -->
        <div class="flex justify-between items-start mb-3">
            <h3 class="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors pr-2">
                {place.name}
            </h3>
            {#if place.aiScore}
                <div class="flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs font-semibold flex-shrink-0">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                    AI {place.aiScore}
                </div>
            {/if}
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-3">
            {#each displayTags as tag}
                <span class="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-medium">
                    #{tag}
                </span>
            {/each}
        </div>

        <!-- AI Summary -->
        {#if place.aiSummary}
            <p class="text-sm text-gray-600 leading-relaxed line-clamp-2">
                {place.aiSummary}
            </p>
        {/if}
        
        <!-- View More Indicator -->
        <div class="flex items-center gap-1 mt-3 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
            <span>자세히 보기</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </div>
    </div>
</button>

<style>
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>
