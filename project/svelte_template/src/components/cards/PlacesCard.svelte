<script>
    export let card;
    export let isCompact = true;
    export let recommendation = "이 지역"; // 외부에서 전달받음

    const placeCount = card.around?.length || 0;
    
    // 백록이 메시지 바리에이션
    const placeMessages = [
        `<span class="font-bold">${recommendation}</span> 주변의 가볼 만한 곳 <span class="font-bold">${placeCount}곳</span>을 찾았어요! 🌏`,
        `이 근처에 <span class="font-bold">${placeCount}곳</span>의 멋진 장소가 있네요! 함께 둘러보세요 ✨`,
        `<span class="font-bold">${recommendation}</span> 근처 숨은 보석들을 발견했어요! 💎`,
        `이왔으면 께 들러보세요! <span class="font-bold">${placeCount}곳</span>의 특별한 장소가 있어요 💚`,
        `주변 명소 <span class="font-bold">${placeCount}곳</span>을 찾았어요! 한 곳씩 둘러보는 재미가 있을 거예요 🗺️`
    ];
    
    const randomMessage = placeMessages[Math.floor(Math.random() * placeMessages.length)];
</script>

<!-- 백록이 대화 -->
<div class="flex items-start gap-3 mb-4 bg-indigo-50 rounded-2xl p-4">
    <img
        src="/images/mascot.png"
        alt="백록이"
        class="w-10 h-10 flex-shrink-0 object-contain"
    />
    <div class="flex-1">
        <div class="text-sm text-indigo-900 leading-relaxed">
            {@html randomMessage}
        </div>
    </div>
</div>

<h3 class="text-2xl font-bold text-gray-900 mb-3">주변 명소</h3>

<div class="flex-1">
    {#if card.around && card.around.length > 0}
        {#if isCompact}
            <div class="space-y-2">
                {#each card.around.slice(0, 3) as place}
                    <div class="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <div class="font-semibold text-gray-900 text-sm">
                            {place.name}
                        </div>
                        <div class="text-xs text-gray-600">{place.reason}</div>
                    </div>
                {/each}
            </div>
        {:else}
            <div class="space-y-3">
                {#each card.around as place}
                    <div
                        class="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:bg-gray-100 transition"
                    >
                        <div class="font-bold text-gray-900 text-xl">
                            {place.name}
                        </div>
                        <div class="text-base text-gray-700 mt-2">{place.reason}</div>
                    </div>
                {/each}
            </div>
        {/if}
    {:else}
        <p class="text-gray-500">주변 명소 데이터가 없습니다.</p>
    {/if}
</div>