<script>
    import { onMount, onDestroy } from "svelte";

    export let goTo;

    let showMascot = false;
    let timer;

    onMount(() => {
        timer = setTimeout(() => {
            showMascot = true;
        }, 5000);
    });

    onDestroy(() => {
        clearTimeout(timer);
    });

    function handleInteraction() {
        showMascot = true;
        clearTimeout(timer);
    }
</script>

<div
    class="relative w-full h-screen bg-cover bg-center overflow-hidden"
    style="background-image: url('https://placehold.co/1920x1080/2c3e50/ecf0f1?text=Baekrokdam+Background');"
    on:click={handleInteraction}
    role="button"
    tabindex="0"
    on:keypress={handleInteraction}
>
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

    <div
        class="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pb-20"
    >
        <!-- Deer / Mascot Area -->
        <div
            class="transition-all duration-1000 transform {showMascot
                ? 'scale-110'
                : 'scale-100'} mb-8"
        >
            {#if showMascot}
                <img
                    src="https://placehold.co/300x300/e67e22/fff?text=Mascot+Deer"
                    alt="Mascot"
                    class="w-48 h-48 md:w-64 md:h-64 object-contain animate-bounce-slow"
                />
            {:else}
                <img
                    src="https://placehold.co/300x300/bdc3c7/2c3e50?text=Natural+Deer"
                    alt="Natural Deer"
                    class="w-48 h-48 md:w-64 md:h-64 object-contain opacity-90"
                />
            {/if}
        </div>

        <!-- Title & Text -->
        <h1
            class="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
        >
            Jeju Hidden Gems
        </h1>
        <p class="text-white text-opacity-90 text-lg mb-8 max-w-md">
            Discover personalized, less crowded spots in Jeju for your perfect
            trip.
        </p>

        <!-- Start Button (visible when mascot appears) -->
        {#if showMascot}
            <button
                class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 active:scale-95 animate-fade-in"
                on:click|stopPropagation={() => goTo("survey")}
            >
                Start Journey
            </button>
        {/if}

        <!-- Hint -->
        {#if !showMascot}
            <p class="text-white text-opacity-60 text-sm mt-8 animate-pulse">
                Touch anywhere...
            </p>
        {/if}
    </div>
</div>

<style>
    .animate-bounce-slow {
        animation: bounce 3s infinite;
    }
    @keyframes bounce {
        0%,
        100% {
            transform: translateY(-5%);
        }
        50% {
            transform: translateY(0);
        }
    }
    .animate-fade-in {
        animation: fadeIn 0.5s ease-out;
    }
    @keyframes fadeIn {
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
