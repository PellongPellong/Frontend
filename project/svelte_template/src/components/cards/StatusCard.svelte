<script>
    export let card;
    export let isCompact = true;
    
    const timeTable = card.time_table || card.timeTable || [];
    const avgLevel = timeTable.length > 0 ? Math.round(timeTable.reduce((sum, slot) => sum + slot.level, 0) / timeTable.length) : 0;
    const statusMessages = [
        { max: 2, text: '지금 방문하기 좋은 시간이에요! 한산해요 😊' },
        { max: 3, text: '조금 복잡하지만 괜찮아요! 평범한 수준이에요 👍' },
        { max: 5, text: '지금은 매우 혼잡하니 다른 시간을 추천해요! 😢' }
    ];
    const statusText = statusMessages.find(s => avgLevel <= s.max)?.text || '혼잡도를 확인해보세요!';
    
    function getColor(level) {
        if (level <= 2) return '#22c55e';
        if (level === 3) return '#eab308';
        return '#ef4444';
    }
</script>

<!-- 백록이 대화 -->
<div class="flex items-start gap-3 mb-4 bg-indigo-50 rounded-2xl p-4">
    <img src="/images/mascot.png" alt="백록이" class="w-10 h-10 flex-shrink-0 object-contain" />
    <div class="flex-1">
        <div class="text-sm text-indigo-900 leading-relaxed">
            {statusText}
        </div>
    </div>
</div>

<h3 class="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>

<div class="flex-1 overflow-hidden">
    {#if timeTable.length > 0}
        <!-- 라인 차트 (SVG) -->
        <div class="space-y-3">
            <svg viewBox="0 0 400 120" class="w-full {isCompact ? 'h-32' : 'h-48'}">
                <!-- 배경 그리드 -->
                {#each [1, 2, 3, 4, 5] as level}
                    <line x1="0" y1={120 - (level * 24)} x2="400" y2={120 - (level * 24)} stroke="#e5e7eb" stroke-width="1" />
                {/each}
                
                <!-- 라인 경로 -->
                <polyline 
                    points="{timeTable.map((slot, i) => `${i * (400 / (timeTable.length - 1))},${120 - (slot.level * 24)}`).join(' ')}"
                    fill="none" 
                    stroke="url(#lineGradient)" 
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                
                <!-- 영역 채우기 -->
                <polygon 
                    points="{timeTable.map((slot, i) => `${i * (400 / (timeTable.length - 1))},${120 - (slot.level * 24)}`).join(' ')} 400,120 0,120"
                    fill="url(#areaGradient)" 
                    opacity="0.3"
                />
                
                <!-- 점 -->
                {#each timeTable as slot, i}
                    <circle 
                        cx={i * (400 / (timeTable.length - 1))} 
                        cy={120 - (slot.level * 24)} 
                        r="4" 
                        fill="white" 
                        stroke={getColor(slot.level)} 
                        stroke-width="2"
                    />
                {/each}
                
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#22c55e;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#eab308;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#ef4444;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#22c55e;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#eab308;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#ef4444;stop-opacity:1" />
                    </linearGradient>
                </defs>
            </svg>
            <div class="flex justify-between px-1">
                {#each timeTable as slot}
                    <div class="flex-1 text-center text-xs text-gray-600">{slot.time.replace('시', '')}</div>
                {/each}
            </div>
        </div>
        
        {#if !isCompact}
            <!-- 모달에서는 추가 정보 표시 -->
            <div class="mt-6 pt-4 border-t border-gray-200">
                <div class="grid grid-cols-3 gap-3">
                    <div class="bg-green-50 rounded-xl p-3 text-center">
                        <div class="text-xs text-green-700 mb-1">한산</div>
                        <div class="text-lg font-bold text-green-900">1-2점</div>
                    </div>
                    <div class="bg-yellow-50 rounded-xl p-3 text-center">
                        <div class="text-xs text-yellow-700 mb-1">보통</div>
                        <div class="text-lg font-bold text-yellow-900">3점</div>
                    </div>
                    <div class="bg-red-50 rounded-xl p-3 text-center">
                        <div class="text-xs text-red-700 mb-1">혼잡</div>
                        <div class="text-lg font-bold text-red-900">4-5점</div>
                    </div>
                </div>
            </div>
        {/if}
    {:else}
        <p class="text-gray-500">혼잡도 데이터가 없습니다.</p>
    {/if}
</div>

{#if isCompact}
    <div class="mt-3 text-center text-xs text-gray-500">클릭하여 자세히 보기</div>
{/if}