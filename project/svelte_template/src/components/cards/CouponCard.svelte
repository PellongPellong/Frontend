<script>
    export let card;
    export let isCompact = true;
</script>

<div class="flex items-center justify-between mb-4">
    <span class="text-5xl">{card.icon}</span>
    <span class="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100">{card.subtitle}</span>
</div>

<h3 class="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>

<div class="flex-1 overflow-hidden">
    {#if isCompact}
        <!-- 간략 뷰: 최대 2개 -->
        <div class="space-y-2">
            {#each card.coupons.slice(0, 2) as coupon}
                <div class="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <div class="font-semibold text-gray-900 text-sm">{coupon.name}</div>
                    <div class="text-xs text-purple-600 font-mono">{coupon.code}</div>
                </div>
            {/each}
        </div>
    {:else}
        <!-- 상세 뷰: 모든 쿠폰 -->
        <div class="space-y-3">
            {#each card.coupons as coupon}
                <div class="bg-purple-50 rounded-xl p-5 border border-purple-200 cursor-pointer hover:bg-purple-100 transition">
                    <div class="font-bold text-gray-900 text-xl">{coupon.name}</div>
                    <div class="text-base text-purple-700 font-mono mt-2">CODE: {coupon.code}</div>
                    <div class="text-sm text-gray-500 mt-2">클릭하여 복사</div>
                </div>
            {/each}
        </div>
    {/if}
</div>

{#if isCompact}
    <div class="mt-3 text-center text-xs text-gray-500">클릭하여 자세히 보기</div>
{/if}