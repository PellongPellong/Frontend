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
        <!-- 간략 뷰: 최대 3개 -->
        <div class="space-y-2">
            {#each card.places.slice(0, 3) as place}
                <div class="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div class="font-semibold text-gray-900 text-sm">{place.name}</div>
                    <div class="text-xs text-gray-600">{place.tag}</div>
                </div>
            {/each}
        </div>
    {:else}
        <!-- 상세 뷰: 모든 장소 -->
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