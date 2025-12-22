<script>
    export let type = "card"; // "card" | "list" | "text"
    export let count = 1;
</script>

{#if type === "card"}
    <div class="w-[240px] h-[400px] rounded-2xl bg-gray-100 overflow-hidden relative animate-pulse">
        <div class="w-full h-[140px] bg-gray-200"></div>
        <div class="p-4 space-y-3">
            <div class="h-5 bg-gray-200 rounded w-3/4"></div>
            <div class="h-4 bg-gray-200 rounded w-full"></div>
            <div class="h-4 bg-gray-200 rounded w-5/6"></div>
            <div class="mt-4 space-y-2">
                <div class="h-3 bg-gray-200 rounded w-2/3"></div>
                <div class="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
        </div>
        
        <!-- Shimmer effect -->
        <div class="absolute inset-0 shimmer"></div>
    </div>
{:else if type === "list"}
    <div class="space-y-3">
        {#each Array(count) as _, i (i)}
            <div class="flex items-center gap-3 p-3 bg-gray-100 rounded-lg animate-pulse relative overflow-hidden">
                <div class="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div class="flex-1 space-y-2">
                    <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div class="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div class="absolute inset-0 shimmer"></div>
            </div>
        {/each}
    </div>
{:else if type === "text"}
    <div class="space-y-2 animate-pulse">
        {#each Array(count) as _, i (i)}
            <div class="h-4 bg-gray-200 rounded w-full relative overflow-hidden">
                <div class="absolute inset-0 shimmer"></div>
            </div>
        {/each}
    </div>
{/if}

<style>
    @keyframes shimmer {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }

    .shimmer {
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.6),
            transparent
        );
        animation: shimmer 1.5s infinite;
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }

    .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
</style>
