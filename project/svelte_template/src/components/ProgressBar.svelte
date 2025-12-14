<script>
    export let current = 1;
    export let total = 7;
    
    $: progress = (current / total) * 100;
    $: steps = Array.from({ length: total }, (_, i) => i + 1);
</script>

<!-- 단계별 도트 스타일 진행바 -->
<div class="flex items-center justify-between gap-2">
    {#each steps as step}
        {@const isCompleted = step < current}
        {@const isCurrent = step === current}
        {@const isFuture = step > current}
        
        <div class="flex-1 flex items-center gap-2">
            <!-- 도트 -->
            <div class="relative flex items-center justify-center">
                <div class="{
                    isCompleted ? 'w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500' :
                    isCurrent ? 'w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 ring-4 ring-blue-200' :
                    'w-8 h-8 bg-gray-200'
                } rounded-full transition-all duration-300 flex items-center justify-center">
                    {#if isCompleted}
                        <!-- 완료 체크 -->
                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                    {:else if isCurrent}
                        <!-- 현재 숫자 -->
                        <span class="text-xs font-bold text-white">{step}</span>
                    {:else}
                        <!-- 미래 숫자 -->
                        <span class="text-xs font-semibold text-gray-400">{step}</span>
                    {/if}
                </div>
            </div>
            
            <!-- 선 (마지막 단계 제외) -->
            {#if step < total}
                <div class="flex-1 h-1 rounded-full {
                    isCompleted ? 'bg-gradient-to-r from-blue-500 to-teal-500' : 'bg-gray-200'
                } transition-all duration-300"></div>
            {/if}
        </div>
    {/each}
</div>

<style>
    /* 애니메이션 */
    div {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
</style>
