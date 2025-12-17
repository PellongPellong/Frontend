<script>
    export let card;
    export let isCompact = true; // 간략 뷰 / 상세 뷰
</script>

<div class="flex items-center justify-between mb-4">
    <span class="text-5xl">{card.icon}</span>
    <span class="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100">{card.subtitle}</span>
</div>

<h3 class="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>

<div class="flex-1 overflow-hidden">
    {#if isCompact}
        <!-- 간략 뷰: 6개만 표시 -->
        <div class="grid grid-cols-3 gap-2">
            {#each card.timeTable.slice(0, 6) as slot}
                {@const color = slot.level <= 2 ? 'bg-green-100 text-green-800' : slot.level <= 3 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}
                <div class="{color} rounded-lg p-2 text-center">
                    <div class="text-xs font-bold">{slot.time}</div>
                    <div class="text-sm font-semibold">{slot.level}점</div>
                </div>
            {/each}
        </div>
    {:else}
        <!-- 상세 뷰: 모든 시간대 + 설명 -->
        <div class="mb-6">
            <p class="text-lg text-gray-800 mb-4">{card.content}</p>
        </div>
        <div class="grid grid-cols-3 gap-3">
            {#each card.timeTable as slot}
                {@const color = slot.level <= 2 ? 'bg-green-100 text-green-900' : slot.level <= 3 ? 'bg-yellow-100 text-yellow-900' : 'bg-red-100 text-red-900'}
                <div class="{color} rounded-xl p-4 text-center">
                    <div class="text-base font-bold">{slot.time}</div>
                    <div class="text-xl font-semibold mt-1">{slot.level}점</div>
                </div>
            {/each}
        </div>
    {/if}
</div>

{#if isCompact}
    <div class="mt-3 text-center text-xs text-gray-500">클릭하여 자세히 보기</div>
{/if}