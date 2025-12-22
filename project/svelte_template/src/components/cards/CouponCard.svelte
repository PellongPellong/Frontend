<script>
    export let card;
    export let isCompact = true;

    const couponSources = [
        "Visit제주",
        "야놀자",
        "페이코",
        "쿠폰북",
        "인터파크",
        "여기어때",
    ];
    const randomSource =
        couponSources[Math.floor(Math.random() * couponSources.length)];
    
    // 백록이 메시지 바리에이션
    const couponMessages = [
        `<span class="font-bold">${randomSource}</span>에서 쿠폰을 찾아왔어요! 할인 받으세요 🎫`,
        `특별한 할인 쿠폰을 발견했어요! 꿀팁이에요 💛`,
        `저렴하게 여행하는 비결! 쿠폰 사용하세요 💰`,
        `<span class="font-bold">${randomSource}</span>에 좋은 쿠폰이 있네요! 지금 바로 사용하세요 ✨`,
        `할인 쿠폰 찾았어요! 합리적인 여행을 도와드릴게요 🚀`
    ];
    
    const randomMessage = couponMessages[Math.floor(Math.random() * couponMessages.length)];
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

<h3 class="text-2xl font-bold text-gray-900 mb-3">사용 가능 쿠폰</h3>

<div class="flex-1 overflow-hidden">
    {#if isCompact}
        <div class="space-y-2">
            {#each card.coupons.slice(0, 2) as coupon}
                <div
                    class="bg-purple-50 rounded-lg p-3 border border-purple-200"
                >
                    <div class="font-semibold text-gray-900 text-sm">
                        {coupon.name}
                    </div>
                    <div class="text-xs text-purple-600 font-mono">
                        {coupon.barcode}
                    </div>
                </div>
            {/each}
        </div>
    {:else}
        <div class="space-y-3">
            {#each card.coupons as coupon}
                <div
                    class="bg-purple-50 rounded-xl p-5 border border-purple-200 cursor-pointer hover:bg-purple-100 transition"
                >
                    <div class="font-bold text-gray-900 text-xl">
                        {coupon.name}
                    </div>
                    <div class="text-base text-purple-700 font-mono mt-2">
                        CODE: {coupon.barcode}
                    </div>
                    <div class="text-sm text-gray-500 mt-2">클릭하여 복사</div>
                </div>
            {/each}
        </div>
    {/if}
</div>