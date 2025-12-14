<script>
    export let question;
    export let value;
    export let onSelect;

    function handleClick(optionValue) {
        console.log('Clicked:', optionValue, 'Current value:', value);
        onSelect(optionValue);
    }

    function isSelected(optionValue) {
        if (question.multiple) {
            const result = Array.isArray(value) && value.includes(optionValue);
            console.log('Multiple check:', optionValue, 'in', value, '=', result);
            return result;
        }
        const result = value === optionValue;
        console.log('Single check:', value, '===', optionValue, '=', result);
        return result;
    }
</script>

<div class="glass rounded-3xl p-6 md:p-8 shadow-xl">
    <!-- 마스코트 + 말풍선 헤더 -->
    <div class="mb-6">
        <div class="flex items-center gap-4 md:gap-6">
            <!-- 마스코트 이미지 (좌측) -->
            <div class="flex-shrink-0">
                <img 
                    src="/images/mascot.png" 
                    alt="백록 마스코트" 
                    class="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg animate-bounce-gentle"
                />
            </div>

            <!-- 말풍선 (우측) -->
            <div class="flex-grow relative">
                <div class="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg border border-blue-100">
                    <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                        {question.title}
                    </h2>
                    <p class="text-sm md:text-base text-gray-600">
                        {question.subtitle}
                    </p>
                </div>
                <!-- 말풍선 꼬리 (왼쪽으로) -->
                <div class="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2">
                    <div class="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[15px] border-r-white/90"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- 옵션 버튼들 -->
    <div class="space-y-3">
        {#each question.options as option}
            {@const selected = isSelected(option.value)}
            <button
                type="button"
                class="w-full px-6 py-4 rounded-2xl text-left transition-all duration-300 transform hover:scale-[1.02] active:scale-95 {
                    selected 
                        ? 'gradient-jeju text-white shadow-xl' 
                        : 'bg-white hover:bg-blue-50 text-gray-700 border-2 border-gray-200 hover:border-blue-300 shadow-md'
                }"
                on:click|preventDefault|stopPropagation={() => handleClick(option.value)}
            >
                <div class="flex items-center gap-4">
                    <!-- 이모지 -->
                    <div class="text-3xl flex-shrink-0">
                        {option.emoji}
                    </div>
                    
                    <!-- 라벨 -->
                    <div class="flex-grow">
                        <span class="text-lg font-semibold">
                            {option.label}
                        </span>
                    </div>
                    
                    <!-- 체크 아이콘 -->
                    <div class="flex-shrink-0">
                        {#if selected}
                            <div class="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        {:else}
                            <div class="w-7 h-7 border-2 border-gray-300 rounded-full"></div>
                        {/if}
                    </div>
                </div>
            </button>
        {/each}
    </div>

    <!-- Multiple selection 힌트 -->
    {#if question.multiple}
        <div class="mt-4 text-center">
            <p class="text-xs text-gray-500 bg-gray-50 rounded-full px-4 py-2 inline-block">
                👉 여러 개 선택 가능해요
            </p>
        </div>
    {/if}
    
    <!-- Selection Count (for multiple) -->
    {#if question.multiple && Array.isArray(value) && value.length > 0}
        <div class="mt-3 text-center">
            <div class="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>{value.length}개 선택됨</span>
            </div>
        </div>
    {/if}
</div>

<style>
    button {
        user-select: none;
    }
    
    @keyframes bounce-gentle {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-6px);
        }
    }
    
    .animate-bounce-gentle {
        animation: bounce-gentle 2s ease-in-out infinite;
    }
</style>
