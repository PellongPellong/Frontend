<script>
    export let type = 'card'; // 'card' | 'list' | 'text'
</script>

{#if type === 'card'}
    <div class="rounded-t-2xl rounded-br-2xl bg-[#F0F0F0] p-4 w-[240px] h-[400px] animate-pulse">
        <!-- 카드 헤더 -->
        <div class="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        
        <!-- 이미지 영역 -->
        <div class="h-48 bg-gray-300 rounded-lg mb-4"></div>
        
        <!-- 텍스트 라인들 -->
        <div class="space-y-3">
            <div class="h-4 bg-gray-300 rounded w-full"></div>
            <div class="h-4 bg-gray-300 rounded w-5/6"></div>
            <div class="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
        
        <!-- 버튼 영역 -->
        <div class="mt-6 h-10 bg-gray-300 rounded-lg"></div>
    </div>
{:else if type === 'list'}
    <div class="space-y-3 animate-pulse">
        {#each Array(3) as _}
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div class="flex-1 space-y-2">
                    <div class="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div class="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
            </div>
        {/each}
    </div>
{:else if type === 'text'}
    <div class="space-y-3 animate-pulse">
        <div class="h-4 bg-gray-300 rounded w-full"></div>
        <div class="h-4 bg-gray-300 rounded w-5/6"></div>
        <div class="h-4 bg-gray-300 rounded w-4/6"></div>
    </div>
{/if}

<style>
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }

    .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
</style>
