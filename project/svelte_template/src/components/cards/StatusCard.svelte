<script>
    export let card;
    export let isCompact = true;
    
    const avgLevel = card.timeTable ? Math.round(card.timeTable.reduce((sum, slot) => sum + slot.level, 0) / card.timeTable.length) : 0;
    const statusMessages = [
        { max: 2, text: '지금 방문하기 좋은 시간이에요!' },
        { max: 3, text: '조금 복잡하지만 괜찮아요!' },
        { max: 5, text: '지금은 매우 혼잡하니 다른 시간을 추천해요!' }
    ];
    const statusText = statusMessages.find(s => avgLevel <= s.max)?.text || '혼잡도를 확인해보세요!';
</script>

<!-- 백록이 대화 -->
<div class="flex items-start gap-3 mb-4 bg-indigo-50 rounded-2xl p-4">
    <span class="text-4xl flex-shrink-0">🦌</span>
    <div class="flex-1">
        <div class="text-sm text-indigo-900 leading-relaxed">
            {statusText}
        </div>
    </div>
</div>

<h3 class="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>

<div class="flex-1 overflow-hidden">
    {#if isCompact}
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