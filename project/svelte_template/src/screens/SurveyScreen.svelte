<script>
    import { questions } from "../lib/questions.js";
    import { preferences } from "../stores/preferences.js";
    import QuestionCard from "../components/QuestionCard.svelte";
    import ProgressBar from "../components/ProgressBar.svelte";

    export let goTo;

    let currentStep = 0;
    $: currentQuestion = questions[currentStep];
    $: totalSteps = questions.length;
    $: isLastStep = currentStep === totalSteps - 1;
    $: currentValue = $preferences[currentQuestion.id];
    $: progress = ((currentStep + 1) / totalSteps) * 100;

    function handleSelect(value) {
        if (currentQuestion.multiple) {
            preferences.toggleAvoid(value);
        } else {
            preferences.setField(currentQuestion.id, value);
        }
    }

    function handleNext() {
        if (isEmpty(currentValue)) {
            return;
        }

        if (isLastStep) {
            goTo("result");
        } else {
            currentStep++;
        }
    }

    function handleBack() {
        if (currentStep > 0) {
            currentStep--;
        } else {
            goTo("intro");
        }
    }

    function isEmpty(val) {
        if (Array.isArray(val)) return val.length === 0;
        return val === null || val === undefined;
    }
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 py-6 px-4">
    <div class="max-w-2xl mx-auto h-full flex flex-col">
        <!-- Header -->
        <div class="mb-6">
            <!-- Top Navigation -->
            <div class="flex justify-between items-center mb-6">
                <button
                    class="glass px-4 py-2 rounded-full hover:scale-105 transition-transform flex items-center gap-2"
                    on:click={handleBack}
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    <span class="font-semibold">뒤로</span>
                </button>
                
                <div class="glass px-4 py-2 rounded-full">
                    <span class="text-sm font-bold text-gray-700">
                        {currentStep + 1} / {totalSteps}
                    </span>
                </div>
            </div>

            <!-- Progress Bar -->
            <div class="glass rounded-full p-2">
                <ProgressBar current={currentStep + 1} total={totalSteps} />
            </div>
            
            <!-- Progress Percentage -->
            <div class="text-center mt-3">
                <p class="text-sm text-gray-600">
                    <span class="font-bold text-blue-600">{Math.round(progress)}%</span> 완료
                </p>
            </div>
        </div>

        <!-- Mascot + Question Content -->
        <div class="flex-grow flex flex-col justify-center mb-8">
            <div class="animate-fade-in" key={currentStep}>
                <!-- 마스코트 영역 -->
                <div class="flex justify-center mb-6">
                    <div class="relative">
                        <!-- 마스코트 이미지 -->
                        <img 
                            src="/images/deer-mascot.png" 
                            alt="백록 마스코트" 
                            class="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-xl animate-bounce-gentle"
                        />
                        
                        <!-- 말풍선 -->
                        <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full">
                            <div class="relative glass rounded-2xl px-5 py-3 shadow-xl max-w-[250px]">
                                <p class="text-gray-800 text-center font-medium text-sm leading-relaxed whitespace-pre-line">
                                    {currentQuestion.mascotSay}
                                </p>
                                <!-- 말풍선 꼬리 -->
                                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                                    <div class="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[15px] border-t-white/80"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 질문 카드 -->
                <QuestionCard
                    question={currentQuestion}
                    value={currentValue}
                    onSelect={handleSelect}
                />
            </div>
        </div>

        <!-- Footer / Next Button -->
        <div class="pb-6">
            <button
                class="w-full font-bold py-4 rounded-2xl shadow-xl transition-all duration-300 {isEmpty(currentValue) 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'gradient-jeju text-white hover:scale-[1.02] hover:shadow-2xl active:scale-95'}"
                on:click={handleNext}
                disabled={isEmpty(currentValue)}
            >
                <span class="flex items-center justify-center gap-2 text-lg">
                    {#if isLastStep}
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>결과 보기</span>
                    {:else}
                        <span>다음 질문</span>
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    {/if}
                </span>
            </button>
            
            <!-- Hint for multiple selection -->
            {#if currentQuestion.multiple && !isEmpty(currentValue)}
                <p class="text-center text-xs text-gray-500 mt-3">
                    여러 개를 선택할 수 있어요
                </p>
            {/if}
        </div>
    </div>
</div>

<style>
    @keyframes bounce-gentle {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-8px);
        }
    }
    
    .animate-bounce-gentle {
        animation: bounce-gentle 2s ease-in-out infinite;
    }
    
    .animate-fade-in {
        animation: fadeIn 0.4s ease-out;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
</style>
