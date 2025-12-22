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
        `<span class="font-bold">${randomSource}</span>에서 쿠폰을 찾아왔어요!`,
        `<span class="font-bold">${randomSource}</span>에서 쿠폰을 발견했어요!`,
    ];

    const randomMessage =
        couponMessages[Math.floor(Math.random() * couponMessages.length)];

    // 바코드 형태의 SVG 생성 함수
    function generateBarcodePattern(barcode) {
        const seed = barcode.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const bars = [];
        const barCount = 40;
        
        for (let i = 0; i < barCount; i++) {
            const height = 60 + ((seed + i * 7) % 40);
            const width = 2 + ((seed + i * 3) % 4);
            const x = i * 6;
            bars.push({ x, width, height });
        }
        
        return bars;
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('쿠폰 코드가 복사되었습니다!');
        });
    }
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
                    <!-- 바코드 시각화 -->
                    <div class="my-2 bg-white rounded p-2 flex justify-center">
                        <svg width="200" height="60" class="barcode-svg">
                            {#each generateBarcodePattern(coupon.barcode) as bar}
                                <rect
                                    x={bar.x}
                                    y={60 - bar.height}
                                    width={bar.width}
                                    height={bar.height}
                                    fill="#000"
                                />
                            {/each}
                        </svg>
                    </div>
                    <div class="text-xs text-purple-600 font-mono text-center">
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
                    on:click={() => copyToClipboard(coupon.barcode)}
                    on:keydown={(e) => e.key === 'Enter' && copyToClipboard(coupon.barcode)}
                    role="button"
                    tabindex="0"
                >
                    <div class="font-bold text-gray-900 text-xl">
                        {coupon.name}
                    </div>
                    
                    <!-- 바코드 시각화 -->
                    <div class="my-4 bg-white rounded-lg p-4 flex justify-center">
                        <svg width="280" height="80" class="barcode-svg">
                            {#each generateBarcodePattern(coupon.barcode) as bar}
                                <rect
                                    x={bar.x}
                                    y={80 - bar.height}
                                    width={bar.width}
                                    height={bar.height}
                                    fill="#000"
                                />
                            {/each}
                        </svg>
                    </div>
                    
                    <div class="text-base text-purple-700 font-mono mt-2 text-center">
                        {coupon.barcode}
                    </div>
                    <div class="text-sm text-gray-500 mt-2 text-center">클릭하여 복사</div>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .barcode-svg {
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
    }
</style>