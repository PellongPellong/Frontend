<script>
    export let card;
    export let isCompact = true;
    
    const recommendReasons = [
        '이 곳을 추천드려요!',
        '한산한 여행지로 좋아요!',
        '조용히 즐길 수 있는 곳이에요!',
        '숨은 명소를 찾았어요!'
    ];
    const randomReason = recommendReasons[Math.floor(Math.random() * recommendReasons.length)];
</script>

<!-- 백록이 대화 -->
<div class="flex items-start gap-3 mb-4 bg-indigo-50 rounded-2xl p-4">
    <span class="text-4xl flex-shrink-0">🦌</span>
    <div class="flex-1">
        <div class="text-sm text-indigo-900 leading-relaxed">
            {randomReason}
        </div>
    </div>
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