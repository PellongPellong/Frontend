<script>
    export let card;
    export let isCompact = true;
</script>

<div class="flex items-center justify-between mb-4">
    <span class="text-5xl">{card.icon}</span>
    <span class="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100">{card.subtitle}</span>
</div>

<h3 class="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>

<div class="flex-1 overflow-hidden">
    {#if isCompact}
        <p class="text-sm text-gray-700 leading-relaxed line-clamp-6">{card.content}</p>
    {:else}
        <p class="text-lg text-gray-800 leading-relaxed">{card.content}</p>
    {/if}
</div>

{#if isCompact}
    <div class="mt-3 text-center text-xs text-gray-500">클릭하여 자세히 보기</div>
{/if}

<style>
    .line-clamp-6 {
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>