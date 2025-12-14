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
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-teal-900/50 to-green-900/60"></div>

    <!-- Animated particles effect -->
    <div class="absolute inset-0 opacity-30">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
    </div>

    <div
        class="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pb-20"
    >
        <!-- Deer / Mascot Area -->
        <div
            class="transition-all duration-1000 transform {showMascot
                ? 'scale-110'
                : 'scale-100'} mb-8 z-10"
        >
            {#if showMascot}
                <div class="glass p-8 rounded-3xl">
                    <img
                        src="https://placehold.co/300x300/e67e22/fff?text=Mascot+Deer"
                        alt="Mascot"
                        class="w-40 h-40 md:w-56 md:h-56 object-contain animate-bounce-slow"
                    />
                </div>
            {:else}
                <img
                    src="https://placehold.co/300x300/bdc3c7/2c3e50?text=Natural+Deer"
                    alt="Natural Deer"
                    class="w-40 h-40 md:w-56 md:h-56 object-contain opacity-90 drop-shadow-2xl"
                />
            {/if}
        </div>

        <!-- Title & Text with glass morphism -->
        <div class="glass rounded-2xl p-6 md:p-8 max-w-lg mb-8 z-10">
            <h1
                class="text-3xl md:text-5xl font-bold text-gradient-jeju mb-4 drop-shadow-lg"
            >
                제주 숨은 명소
            </h1>
            <p class="text-gray-700 text-base md:text-lg leading-relaxed">
                나만의 제주 여행을 위한<br />맞춤형 관광지 추천 서비스
            </p>
        </div>

        <!-- Start Button (visible when mascot appears) -->
        {#if showMascot}
            <button
                class="gradient-jeju text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-95 animate-fade-in z-10"
                on:click|stopPropagation={() => goTo("survey")}
            >
                <span class="flex items-center gap-2">
                    <span class="text-lg">여행 시작하기</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                </span>
            </button>
        {/if}

        <!-- Hint -->
        {#if !showMascot}
            <div class="glass-dark rounded-full px-6 py-3 animate-pulse z-10">
                <p class="text-white text-sm flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                    </svg>
                    화면을 터치하세요
                </p>
            </div>
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

    /* Floating particles */
    .particle {
        position: absolute;
        background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
        border-radius: 50%;
        animation: float 20s infinite ease-in-out;
    }
    
    .particle-1 {
        width: 60px;
        height: 60px;
        top: 20%;
        left: 10%;
        animation-delay: 0s;
    }
    
    .particle-2 {
        width: 80px;
        height: 80px;
        top: 60%;
        right: 15%;
        animation-delay: 5s;
    }
    
    .particle-3 {
        width: 40px;
        height: 40px;
        bottom: 30%;
        left: 70%;
        animation-delay: 10s;
    }

    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) scale(1);
        }
        33% {
            transform: translate(30px, -30px) scale(1.1);
        }
        66% {
            transform: translate(-20px, 20px) scale(0.9);
        }
    }
</style>
