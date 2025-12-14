<script>
    import { onMount, onDestroy } from "svelte";

    export let goTo;

    let currentScene = 0;
    let autoTimer;
    const AUTO_DELAY = 3500; // 3.5초

    // 동화책 장면 데이터
    const scenes = [
        {
            image: "/images/scene1.png",
            alt: "평화로운 백록담의 백록",
        },
        {
            image: "/images/scene2.png",
            alt: "관광객들로 북적이는 백록담",
        },
        {
            image: "/images/scene3.png",
            alt: "여행을 떠나는 백록",
        },
        {
            image: "/images/mascot.png",
            alt: "백록 마스코트",
            showButton: true,
        },
    ];

    $: isLastScene = currentScene === scenes.length - 1;

    function nextScene() {
        if (currentScene < scenes.length - 1) {
            currentScene++;
            resetTimer();
        }
    }

    function skipIntro() {
        goTo("survey");
    }

    function resetTimer() {
        clearTimeout(autoTimer);
        if (!isLastScene) {
            autoTimer = setTimeout(nextScene, AUTO_DELAY);
        }
    }

    function handleClick() {
        if (isLastScene) {
            goTo("survey");
        } else {
            nextScene();
        }
    }

    onMount(() => {
        resetTimer();
    });

    onDestroy(() => {
        clearTimeout(autoTimer);
    });
</script>

<div
    class="relative w-full h-screen overflow-hidden bg-gradient-to-br from-indigo-100 via-cyan-50 to-sky-100"
>
    <!-- 배경 이미지 -->
    <div class="absolute inset-0">
        {#each scenes as scene, index}
            <div
                class="absolute inset-0 transition-opacity duration-1000 {currentScene ===
                index
                    ? 'opacity-100'
                    : 'opacity-0'}"
            >
                {#if scene.showButton}
                    <!-- 마지막 장면: 그라디언트 배경 -->
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-indigo-100 via-cyan-50 to-sky-100"
                    ></div>
                {:else}
                    <!-- 만화 이미지 -->
                    <img
                        src={scene.image}
                        alt={scene.alt}
                        class="w-full h-full object-cover"
                    />
                {/if}
            </div>
        {/each}
    </div>

    <!-- 건너뛰기 버튼 -->
    {#if !isLastScene}
        <button
            class="absolute top-6 right-6 glass px-4 py-2 rounded-full text-gray-700 font-semibold hover:scale-105 transition-transform z-20"
            on:click={skipIntro}
        >
            건너뛰기
        </button>
    {/if}

    <!-- 컨텐츠 영역 -->
    <div
        class="relative h-full flex flex-col justify-center items-center p-8 z-10 {!isLastScene
            ? 'cursor-pointer'
            : ''}"
        on:click={handleClick}
        role="button"
        tabindex="0"
        on:keypress={(e) => e.key === "Enter" && handleClick()}
    >
        {#each scenes as scene, index}
            <div
                class="absolute inset-0 flex flex-col transition-opacity duration-700 {currentScene ===
                index
                    ? 'opacity-100'
                    : 'opacity-0'}"
            >
                <!-- 마지막 장면: 마스코트 + 말풍선 + 버튼 -->
                {#if scene.showButton}
                    <div
                        class="h-full flex flex-col justify-end pb-32 animate-fade-in"
                    >
                        <!-- 마스코트 + 말풍선 영역 -->
                        <div class="flex flex-col items-center mb-16">
                            <!-- 말풍선 -->
                            <div class="relative mb-6">
                                <div
                                    class="glass rounded-3xl px-8 py-5 shadow-2xl max-w-md mx-4"
                                >
                                    <p
                                        class="text-gray-800 text-center font-bold text-xl md:text-2xl leading-relaxed whitespace-pre-line"
                                    >
                                        백록과 함께 제주의 숨은 명소를
                                        찾아볼까요?
                                    </p>
                                    <!-- 말풍선 꼬리 (아래로) -->
                                    <div
                                        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
                                    >
                                        <div
                                            class="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[24px] border-t-white/80"
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            <!-- 마스코트 이미지 -->
                            <div class="mb-8">
                                <img
                                    src={scene.image}
                                    alt={scene.alt}
                                    class="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-2xl animate-bounce-gentle"
                                />
                            </div>
                        </div>

                        <!-- 시작하기 버튼 (하단 고정) -->
                        <div class="px-8">
                            <button
                                class="w-full max-w-md mx-auto bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold py-5 px-10 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                                on:click|stopPropagation={() => goTo("survey")}
                            >
                                <span
                                    class="flex items-center justify-center gap-3 text-xl"
                                >
                                    <span>여행 시작하기</span>
                                    <svg
                                        class="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                {/if}
            </div>
        {/each}
    </div>

    <!-- 하단 인디케이터 -->
    <div
        class="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20"
    >
        {#each scenes as _, index}
            <button
                class="transition-all duration-300 rounded-full {currentScene ===
                index
                    ? 'w-8 h-3 bg-white'
                    : 'w-3 h-3 bg-white/40'}"
                on:click|stopPropagation={() => {
                    currentScene = index;
                    resetTimer();
                }}
                aria-label="{index + 1}번 장면으로 이동"
            ></button>
        {/each}
    </div>

    <!-- 클릭 힌트 (마지막 장면 제외) -->
    {#if !isLastScene}
        <div
            class="absolute bottom-20 left-0 right-0 text-center z-20 animate-pulse"
        >
            <p
                class="glass-dark rounded-full px-4 py-2 text-white text-sm inline-block"
            >
                화면을 클릭하면 다음 장면으로
            </p>
        </div>
    {/if}
</div>

<style>
    @keyframes bounce-gentle {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    .animate-bounce-gentle {
        animation: bounce-gentle 3s ease-in-out infinite;
    }

    .animate-fade-in {
        animation: fadeIn 0.8s ease-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>
