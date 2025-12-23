<script>
    import { onMount, onDestroy } from "svelte";

    export let goTo;

    let currentScene = 0;
    let autoTimer;
    const AUTO_DELAY = 5000; // 5초
    let slideDirection = "right"; // 슬라이드 방향 추적

    // 동화책 장면 데이터 (3개만 사용)
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
    ];

    function nextScene() {
        slideDirection = "right";
        if (currentScene < scenes.length - 1) {
            currentScene++;
        } else {
            currentScene = 0; // 마지막에서 처음으로
        }
        resetTimer();
    }

    function prevScene() {
        slideDirection = "left";
        if (currentScene > 0) {
            currentScene--;
        } else {
            currentScene = scenes.length - 1; // 처음에서 마지막으로
        }
        resetTimer();
    }

    function resetTimer() {
        clearTimeout(autoTimer);
        autoTimer = setTimeout(nextScene, AUTO_DELAY);
    }

    onMount(() => {
        resetTimer();
    });

    onDestroy(() => {
        clearTimeout(autoTimer);
    });
</script>

<div
    class="relative w-full h-screen overflow-hidden bg-gradient-to-br from-indigo-100 via-cyan-50 to-sky-100 flex flex-col"
>
    <!-- 메인 컨텐츠 영역 -->
    <div class="flex-1 flex items-center justify-center px-4 py-8">
        <div class="relative w-full max-w-2xl">
            <!-- 이전 버튼 -->
            <button
                class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-300"
                on:click={prevScene}
                aria-label="이전 장면"
            >
                <svg
                    class="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                    ></path>
                </svg>
            </button>

            <!-- 카드 슬라이드 영역 -->
            <div class="card-container relative overflow-hidden rounded-3xl">
                {#each scenes as scene, index}
                    <div
                        class="absolute inset-0 transition-all duration-500 ease-in-out"
                        style="
                            transform: translateX({index < currentScene
                            ? '-100%'
                            : index > currentScene
                              ? '100%'
                              : '0'});
                            opacity: {currentScene === index ? '1' : '0'};
                        "
                    >
                        <div
                            class="w-full h-full flex items-center justify-center"
                        >
                            <img
                                src={scene.image}
                                alt={scene.alt}
                                class="max-w-full max-h-full object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>
                {/each}
            </div>

            <!-- 다음 버튼 -->
            <button
                class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-300"
                on:click={nextScene}
                aria-label="다음 장면"
            >
                <svg
                    class="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                    ></path>
                </svg>
            </button>
        </div>
    </div>

    <!-- 하단 영역: 인디케이터 + 시작 버튼 -->
    <div class="pb-12 px-8 space-y-6">
        <!-- 인디케이터 -->
        <div class="flex justify-center gap-3">
            {#each scenes as _, index}
                <button
                    class="transition-all duration-300 rounded-full {currentScene ===
                    index
                        ? 'w-8 h-3 bg-indigo-500'
                        : 'w-3 h-3 bg-gray-300'}"
                    on:click={() => {
                        slideDirection =
                            index > currentScene ? "right" : "left";
                        currentScene = index;
                        resetTimer();
                    }}
                    aria-label="{index + 1}번 장면으로 이동"
                ></button>
            {/each}
        </div>

        <!-- 시작하기 버튼 -->
        <div class="w-full flex justify-center">
            <button
                class="w-full max-w-md bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                on:click={() => goTo("survey")}
            >
                <span class="flex items-center justify-center gap-3 text-xl">
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
</div>

<style>
    .card-container {
        aspect-ratio: 1/1;
    }

    @media (min-width: 550px) {
        .card-container {
            aspect-ratio: 4/3;
        }
    }
</style>
