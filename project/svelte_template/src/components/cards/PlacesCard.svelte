<script>
    export let card;
    export let isCompact = true;
    
    const placeCount = card.places?.length || 0;
</script>

<!-- 백록이 대화 -->
<div class="flex items-start gap-3 mb-4 bg-indigo-50 rounded-2xl p-4">
    <span class="text-4xl flex-shrink-0">🦌</span>
    <div class="flex-1">
        <div class="text-sm text-indigo-900 leading-relaxed">
            주변에 가볼 만한 곳 <span class="font-bold">{placeCount}곳</span>을 찾았어요!
        </div>
    </div>
</div>

<h3 class="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>

<div class="flex-1 overflow-hidden">
    {#if isCompact}
        <div class="space-y-2">
            {#each card.places.slice(0, 3) as place}
                <div class="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div class="font-semibold text-gray-900 text-sm">{place.name}</div>
                    <div class="text-xs text-gray-600">{place.tag}</div>
                </div>
            {/each}
        </div>
    {:else}
        <div class="space-y-3">
            {#each card.places as place}
                <div class="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:bg-gray-100 transition">
                    <div class="font-bold text-gray-900 text-xl">{place.name}</div>
                    <div class="text-base text-gray-700 mt-2">{place.tag}</div>
                </div>
            {/each}
        </div>
    {/if}
</div>

{#if isCompact}
    <div class="mt-3 text-center text-xs text-gray-500">클릭하여 자세히 보기</div>
{/if}