<script>
    export let place;
    export let onClick;

    // format tags: display a few
    $: displayTags = place.tags.slice(0, 3);
</script>

<button
    class="w-full bg-white rounded-lg shadow-md overflow-hidden text-left hover:shadow-lg transition-shadow"
    on:click={onClick}
>
    <div class="h-32 bg-gray-200 relative">
        <!-- Image Placeholder -->
        <div
            class="absolute inset-0 flex items-center justify-center text-gray-400"
        >
            Image for {place.name}
        </div>
        <div
            class="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded"
        >
            {place.category}
        </div>
    </div>
    <div class="p-4">
        <div class="flex justify-between items-start">
            <h3 class="font-bold text-lg">{place.name}</h3>
            {#if place.aiScore}
                <span
                    class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded"
                    >AI Score: {place.aiScore}</span
                >
            {/if}
        </div>

        <div class="flex flex-wrap gap-1 mt-2">
            {#each displayTags as tag}
                <span
                    class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >#{tag}</span
                >
            {/each}
        </div>

        {#if place.aiSummary}
            <p class="text-sm text-gray-600 mt-2 line-clamp-2">
                {place.aiSummary}
            </p>
        {/if}
    </div>
</button>
