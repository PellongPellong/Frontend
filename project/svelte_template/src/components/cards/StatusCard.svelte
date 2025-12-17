<script>
    export let card;
    export let isCompact = true;
    export let chartStyle = 'bar'; // 'bar', 'line', 'gradient', 'heatmap'
    
    const avgLevel = card.timeTable ? Math.round(card.timeTable.reduce((sum, slot) => sum + slot.level, 0) / card.timeTable.length) : 0;
    const statusMessages = [
        { max: 2, text: '지금 방문하기 좋은 시간이에요!' },
        { max: 3, text: '조금 복잡하지만 괜찮아요!' },
        { max: 5, text: '지금은 매우 혼잡하니 다른 시간을 추천해요!' }
    ];
    const statusText = statusMessages.find(s => avgLevel <= s.max)?.text || '혼잡도를 확인해보세요!';
    
    function getColor(level) {
        if (level <= 2) return { bg: 'bg-green-500', text: 'text-green-500', gradient: 'from-green-400 to-green-600' };
        if (level === 3) return { bg: 'bg-yellow-500', text: 'text-yellow-500', gradient: 'from-yellow-400 to-yellow-600' };
        return { bg: 'bg-red-500', text: 'text-red-500', gradient: 'from-red-400 to-red-600' };
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
    {#if isCompact}
        <!-- 차트 스타일 선택 버튼 (DEV) -->
        <div class="flex gap-2 mb-4 text-xs">
            <button on:click={() => chartStyle = 'bar'} class="px-2 py-1 rounded {chartStyle === 'bar' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}">Bar</button>
            <button on:click={() => chartStyle = 'line'} class="px-2 py-1 rounded {chartStyle === 'line' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}">Line</button>
            <button on:click={() => chartStyle = 'gradient'} class="px-2 py-1 rounded {chartStyle === 'gradient' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}">Gradient</button>
            <button on:click={() => chartStyle = 'heatmap'} class="px-2 py-1 rounded {chartStyle === 'heatmap' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}">Heatmap</button>
        </div>
        
        {#if chartStyle === 'bar'}
            <!-- 스타일 1: 바 차트 (수직) -->
            <div class="space-y-2">
                <div class="flex items-end justify-between gap-1 h-32">
                    {#each card.timeTable as slot}
                        {@const color = getColor(slot.level)}
                        {@const height = (slot.level / 5) * 100}
                        <div class="flex-1 flex flex-col items-center gap-1">
                            <div class="relative w-full" style="height: {height}%">
                                <div class="absolute bottom-0 w-full {color.bg} rounded-t-lg transition-all duration-300 hover:opacity-80" style="height: 100%"></div>
                            </div>
                        </div>
                    {/each}
                </div>
                <div class="flex justify-between gap-1">
                    {#each card.timeTable as slot}
                        <div class="flex-1 text-center text-xs text-gray-600">{slot.time.replace('시', '')}</div>
                    {/each}
                </div>
            </div>
        {:else if chartStyle === 'line'}
            <!-- 스타일 2: 라인 차트 (SVG) -->
            <div class="space-y-2">
                <svg viewBox="0 0 400 120" class="w-full h-32">
                    <!-- 배경 그리드 -->
                    {#each [1, 2, 3, 4, 5] as level}
                        <line x1="0" y1={120 - (level * 24)} x2="400" y2={120 - (level * 24)} stroke="#e5e7eb" stroke-width="1" />
                    {/each}
                    
                    <!-- 라인 경로 -->
                    <polyline 
                        points="{card.timeTable.map((slot, i) => `${i * (400 / (card.timeTable.length - 1))},${120 - (slot.level * 24)}`).join(' ')}"
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    
                    <!-- 영역 채우기 -->
                    <polygon 
                        points="{card.timeTable.map((slot, i) => `${i * (400 / (card.timeTable.length - 1))},${120 - (slot.level * 24)}`).join(' ')} 400,120 0,120"
                        fill="url(#areaGradient)" 
                        opacity="0.3"
                    />
                    
                    <!-- 점 -->
                    {#each card.timeTable as slot, i}
                        {@const color = getColor(slot.level)}
                        <circle 
                            cx={i * (400 / (card.timeTable.length - 1))} 
                            cy={120 - (slot.level * 24)} 
                            r="4" 
                            fill="white" 
                            stroke={slot.level <= 2 ? '#22c55e' : slot.level === 3 ? '#eab308' : '#ef4444'} 
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
                <div class="flex justify-between">
                    {#each card.timeTable as slot}
                        <div class="flex-1 text-center text-xs text-gray-600">{slot.time.replace('시', '')}</div>
                    {/each}
                </div>
            </div>
        {:else if chartStyle === 'gradient'}
            <!-- 스타일 3: 그라디언트 바 -->
            <div class="space-y-3">
                {#each card.timeTable as slot}
                    {@const color = getColor(slot.level)}
                    {@const width = (slot.level / 5) * 100}
                    <div class="space-y-1">
                        <div class="flex justify-between text-xs">
                            <span class="font-medium text-gray-700">{slot.time}</span>
                            <span class="{color.text} font-bold">{slot.level}점</span>
                        </div>
                        <div class="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                                class="absolute h-full bg-gradient-to-r {color.gradient} rounded-full transition-all duration-500"
                                style="width: {width}%"
                            ></div>
                        </div>
                    </div>
                {/each}
            </div>
        {:else if chartStyle === 'heatmap'}
            <!-- 스타일 4: 히트맵 그리드 -->
            <div class="grid grid-cols-6 gap-2">
                {#each card.timeTable as slot}
                    {@const color = getColor(slot.level)}
                    <div class="relative aspect-square {color.bg} rounded-xl flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                        <div class="text-white text-xs font-bold">{slot.time.replace('시', '')}</div>
                        <div class="text-white text-lg font-bold">{slot.level}</div>
                    </div>
                {/each}
            </div>
        {/if}
    {:else}
        <!-- 상세 뷰 -->
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