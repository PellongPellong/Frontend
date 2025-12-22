<script>
    export let type = 'card'; // 'card' | 'list' | 'text'
    export let count = 1;
</script>

{#if type === 'card'}
    <div class="fade-in-up">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-cyan-100 flex-shrink-0 mb-3 animate-pulse"></div>
        <div class="w-full">
            <div class="flex items-center justify-between mb-4">
                <div class="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                <div class="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div class="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
            <div class="relative h-[420px]">
                <div class="w-[360px] h-[400px] flex flex-col p-6 bg-white border-2 border-gray-200 rounded-3xl shadow-lg animate-pulse">
                    <div class="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
                    <div class="flex-1 bg-gray-100 rounded-lg mb-4"></div>
                    <div class="h-10 bg-gray-200 rounded-lg"></div>
                </div>
            </div>
        </div>
    </div>
{:else if type === 'list'}
    {#each Array(count) as _, i}
        <div class="rounded-lg p-3 mb-1 animate-pulse">
            <div class="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
            <div class="h-3 bg-gray-700 rounded w-1/2"></div>
        </div>
    {/each}
{:else if type === 'text'}
    <div class="space-y-2 animate-pulse">
        {#each Array(count) as _, i}
            <div class="h-4 bg-gray-200 rounded w-full"></div>
        {/each}
    </div>
{/if}

<style>
    .fade-in-up {
        animation: fadeInUp 0.5s ease-out forwards;
    }
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
