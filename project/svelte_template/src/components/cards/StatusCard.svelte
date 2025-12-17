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
    
    let hoveredPoint = null;
    
    function getColor(level) {
        if (level >= 4) return '#ef4444'; // 빨강 (혼잡)
        if (level === 3) return '#eab308'; // 노랑 (보통)
        return '#22c55e'; // 초록 (한산)
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

<div class="flex-1 overflow-visible">
    {#if timeTable.length > 0}
        <!-- 라인 차트 (SVG) -->
        <div class="space-y-3 relative">
            <div class="relative">
                <svg viewBox="0 0 400 120" class="w-full {isCompact ? 'h-32' : 'h-48'}">
                    <!-- 배경 그리드 -->
                    {#each [1, 2, 3, 4, 5] as level}
                        <line x1="0" y1={120 - (level * 24)} x2="400" y2={120 - (level * 24)} stroke="#e5e7eb" stroke-width="1" />
                    {/each}
                    
                    <!-- 라인 경로 -->
                    <polyline 
                        points="{timeTable.map((slot, i) => `${i * (400 / (timeTable.length - 1))},${120 - (slot.level * 24)}`).join(' ')}"
                        fill="none" 
                        stroke="url(#lineGradient-reversed)" 
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    
                    <!-- 영역 채우기 -->
                    <polygon 
                        points="{timeTable.map((slot, i) => `${i * (400 / (timeTable.length - 1))},${120 - (slot.level * 24)}`).join(' ')} 400,120 0,120"
                        fill="url(#areaGradient-reversed)" 
                        opacity="0.3"
                    />
                    
                    <!-- 점 -->
                    {#each timeTable as slot, i}
                        {@const x = i * (400 / (timeTable.length - 1))}
                        {@const y = 120 - (slot.level * 24)}
                        <circle 
                            cx={x} 
                            cy={y} 
                            r="4" 
                            fill="white" 
                            stroke={getColor(slot.level)} 
                            stroke-width="2"
                            class="cursor-pointer transition-all hover:r-6"
                            on:mouseenter={() => hoveredPoint = { time: slot.time, level: slot.level, index: i }}
                            on:mouseleave={() => hoveredPoint = null}
                        />
                    {/each}
                    
                    <defs>
                        <linearGradient id="lineGradient-reversed" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#ef4444;stop-opacity:1" />
                            <stop offset="50%" style="stop-color:#eab308;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#22c55e;stop-opacity:1" />
                        </linearGradient>
                        <linearGradient id="areaGradient-reversed" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#ef4444;stop-opacity:1" />
                            <stop offset="50%" style="stop-color:#eab308;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#22c55e;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                </svg>
                
                <!-- 호버 툴팁 -->
                {#if hoveredPoint}
                    {@const totalPoints = timeTable.length}
                    {@const position = (hoveredPoint.index / (totalPoints - 1)) * 100}
                    {@const shouldFlip = position > 70}
                    <div 
                        class="absolute bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg pointer-events-none z-50 whitespace-nowrap"
                        style="
                            left: {position}%; 
                            top: -45px;
                            transform: translateX({shouldFlip ? '-100%' : '-50%'});
                        "
                    >
                        <div class="font-semibold">{hoveredPoint.time}엔</div>
                        <div>혼잡도가 {hoveredPoint.level}일 거라고 예측돼요!</div>
                        <!-- 화살표 -->
                        <div 
                            class="absolute w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"
                            style="
                                bottom: -4px;
                                left: {shouldFlip ? 'calc(100% - 12px)' : '50%'};
                                transform: translateX(-50%);
                            "
                        ></div>
                    </div>
                {/if}
            </div>
            
            <div class="flex justify-between px-1">
                {#each timeTable as slot, i}
                    <div class="flex-1 text-center relative">
                        <div class="text-xs text-gray-600">{slot.time.replace('시', '')}</div>
                        {#if i === 0}
                            <div class="flex flex-col items-center mt-1">
                                <div class="w-2 h-2 rounded-full bg-green-500"></div>
                                <div class="text-[10px] text-green-600 mt-0.5">현재 시각</div>
                            </div>
                        {/if}
                    </div>
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