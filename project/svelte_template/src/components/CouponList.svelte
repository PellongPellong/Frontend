<script>
    export let coupones = [];
</script>

{#if coupones && coupones.length > 0}
    <div class="space-y-3">
        <h3 class="text-lg font-bold text-gray-900 flex items-center gap-2">
            <span>🎫</span>
            <span>사용 가능한 쿠폰</span>
        </h3>
        
        <div class="space-y-2">
            {#each coupones as coupon}
                <div class="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition cursor-pointer">
                    <div class="flex items-center justify-between">
                        <div class="flex-grow">
                            <h4 class="font-semibold text-gray-900">{coupon.name}</h4>
                            <p class="text-xs text-gray-500 mt-1">바코드: {coupon.barcode}</p>
                        </div>
                        <div class="flex-shrink-0 ml-4">
                            <button class="px-4 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:from-indigo-600 hover:to-cyan-600 transition">
                                사용하기
                            </button>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}