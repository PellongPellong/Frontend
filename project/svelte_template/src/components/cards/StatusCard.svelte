<script>
    export let card;
    export let isCompact = true;

    $: timeTable = card.timeTable || [];

    // 평균이 아닌 현재(첫번째) 시간대의 혼잡도로 판단
    $: currentLevel =
        timeTable.length > 0 ? Number(timeTable[0].congestion) : 0;

    // 혼잡도별 메시지 바리에이션
    const statusMessages = [
        {
            max: 2,
            messages: [
                "지금 방문하기 좋은 시간이에요!",
                "오늘 사람이 별로 없네요! 지금 가세요",
                "혹시 혼자만의 시간을 원하셨나요? 지금이 기회예요!",
                "여유롭게 둘러보기 딱 좋은 시간이네요 ",
                "사진 찍기 좋은 타이밍이에요!",
            ],
        },
        {
            max: 3,
            messages: [
                "조금 복잡하지만 괜찮아요! 평범한 수준이에요",
                "적당히 사람이 있네요. 그래도 괜찮을 것 같아요",
                "사람이 많은 편은 아니네요",
            ],
        },
        {
            max: 5,
            messages: [
                "지금은 매우 혼잡하니 다른 시간을 추천해요!",
                "사람이 너무 많아요... 조금 있다가 다시 오는 게 어떨가요?",
                "지금은 너무 붐비는 시간이에요. 다른 곳은 어떠세요?",
                "혼잡도가 최고치네요! 조금 더 여유로운 시간을 기다려볼까요?",
            ],
        },
    ];

    // 랜덤 메시지 선택 (Reactive)
    $: statusText = (() => {
        if (timeTable.length === 0) return "혼잡도 정보를 확인할 수 없어요.";

        const category = statusMessages.find((s) => currentLevel <= s.max);
        if (!category) return "혼잡도를 확인해보세요!";
        const messages = category.messages;
        // 메시지가 계속 바뀌는 것을 방지하기 위해 card id나 고정된 시드로 선택하면 좋지만,
        // 현재는 간단히 랜덤 유지 (Re-render시 바뀔 수 있음) 또는 메모이제이션 필요.
        // 여기서는 문맥상 Svelte 반응성이면 충분.
        return messages[Math.floor(Math.random() * messages.length)];
    })();

    let hoveredPoint = null;

    function getColor(level) {
        if (level >= 4) return "#ef4444"; // 빨강 (혼잡)
        if (level === 3) return "#eab308"; // 노랑 (보통)
        return "#22c55e"; // 초록 (한산)
    }

    // 동적 그라디언트 생성 함수
    $: gradientStops = (() => {
        if (timeTable.length === 0) return [];

        return timeTable.map((slot, i) => {
            const offset = (i / (timeTable.length - 1)) * 100;
            const color = getColor(slot.congestion);
            return { offset, color };
        });
    })();
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
            {statusText}
        </div>
    </div>
</div>

<h3 class="text-2xl font-bold text-gray-900 mb-3">{card.locationName}</h3>

<div class="flex-1">
    {#if timeTable.length > 0}
        <!-- 라인 차트 (SVG) -->
        <div class="space-y-3 relative">
            <div class="relative">
                <svg
                    viewBox="0 0 400 120"
                    class="w-full {isCompact ? 'h-32' : 'h-48'}"
                >
                    <!-- 배경 그리드 -->
                    {#each [1, 2, 3, 4, 5] as level}
                        <line
                            x1="0"
                            y1={120 - level * 24}
                            x2="400"
                            y2={120 - level * 24}
                            stroke="#e5e7eb"
                            stroke-width="1"
                        />
                    {/each}

                    <!-- 라인 경로 -->
                    <polyline
                        points={timeTable
                            .map(
                                (slot, i) =>
                                    `${i * (400 / (timeTable.length - 1))},${120 - slot.congestion * 24}`,
                            )
                            .join(" ")}
                        fill="none"
                        stroke="url(#lineGradient-dynamic)"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />

                    <!-- 영역 채우기 -->
                    <polygon
                        points="{timeTable
                            .map(
                                (slot, i) =>
                                    `${i * (400 / (timeTable.length - 1))},${120 - slot.congestion * 24}`,
                            )
                            .join(' ')} 400,120 0,120"
                        fill="url(#areaGradient-dynamic)"
                        opacity="0.3"
                    />

                    <!-- 점 -->
                    {#each timeTable as slot, i}
                        {@const x = i * (400 / (timeTable.length - 1))}
                        {@const y = 120 - slot.congestion * 24}
                        <circle
                            cx={x}
                            cy={y}
                            r="4"
                            fill="white"
                            stroke={getColor(slot.congestion)}
                            stroke-width="2"
                            class="cursor-pointer transition-all hover:r-6"
                            on:mouseenter={() =>
                                (hoveredPoint = {
                                    time: slot.time,
                                    level: slot.congestion,
                                    index: i,
                                })}
                            on:mouseleave={() => (hoveredPoint = null)}
                        />
                    {/each}

                    <defs>
                        <!-- 동적 라인 그라디언트 -->
                        <linearGradient
                            id="lineGradient-dynamic"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            {#each gradientStops as stop}
                                <stop
                                    offset="{stop.offset}%"
                                    style="stop-color:{stop.color};stop-opacity:1"
                                />
                            {/each}
                        </linearGradient>
                        <!-- 동적 영역 그라디언트 -->
                        <linearGradient
                            id="areaGradient-dynamic"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            {#each gradientStops as stop}
                                <stop
                                    offset="{stop.offset}%"
                                    style="stop-color:{stop.color};stop-opacity:1"
                                />
                            {/each}
                        </linearGradient>
                    </defs>
                </svg>

                <!-- 호버 툴팁 -->
                {#if hoveredPoint}
                    {@const totalPoints = timeTable.length}
                    {@const position =
                        (hoveredPoint.index / (totalPoints - 1)) * 100}
                    {@const shouldFlip = position > 70}
                    <div
                        class="absolute bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg pointer-events-none z-50 whitespace-nowrap"
                        style="
                            left: {position}%; 
                            top: -45px;
                            transform: translateX({shouldFlip
                            ? '-100%'
                            : '-50%'});
                        "
                    >
                        <div class="font-semibold">{hoveredPoint.time}엔</div>
                        <div>
                            혼잡도가 {hoveredPoint.level}일 거라고 예측돼요!
                        </div>
                        <!-- 화살표 -->
                        <div
                            class="absolute w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"
                            style="
                                bottom: -4px;
                                left: {shouldFlip
                                ? 'calc(100% - 12px)'
                                : '50%'};
                                transform: translateX(-50%);
                            "
                        ></div>
                    </div>
                {/if}
            </div>

            <div class="flex justify-between px-1">
                {#each timeTable as slot, i}
                    <div class="flex-1 text-center relative">
                        <div class="text-xs text-gray-600">
                            {slot.time.replace("시", "")}
                        </div>
                        {#if i === 0}
                            <div class="flex flex-col items-center mt-1">
                                <div
                                    class="w-2 h-2 rounded-full bg-green-500"
                                ></div>
                                <div class="text-[10px] text-green-600 mt-0.5">
                                    지금
                                </div>
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
                        <div class="text-lg font-bold text-green-900">
                            1-2점
                        </div>
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
