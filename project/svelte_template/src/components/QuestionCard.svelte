<script>
    export let question;
    export let value;
    export let onSelect;

    function handleClick(optionValue) {
        onSelect(optionValue);
    }

    function isSelected(optionValue) {
        if (question.multiple) {
            return Array.isArray(value) && value.includes(optionValue);
        }
        return value === optionValue;
    }
</script>

<div class="glass rounded-3xl p-6 md:p-8 shadow-xl">
    <!-- 질문 헤더 -->
    <div class="mb-6 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {question.title}
        </h2>
        <p class="text-sm md:text-base text-gray-600">
            {question.subtitle}
        </p>
    </div>

    <!-- 옵션 버튼들 -->
    <div class="space-y-3">
        {#each question.options as option}
            {@const selected = isSelected(option.value)}
            <button
                class="w-full px-6 py-4 rounded-2xl text-left transition-all duration-300 transform hover:scale-[1.02] active:scale-95 {
                    selected 
                        ? 'gradient-jeju text-white shadow-xl' 
                        : 'bg-white hover:bg-blue-50 text-gray-700 border-2 border-gray-200 hover:border-blue-300 shadow-md'
                }"
                on:click={() => handleClick(option.value)}
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
                    {#if selected}
                        <div class="flex-shrink-0">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    {:else}
                        <div class="flex-shrink-0 w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                    {/if}
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
</div>

<style>
    button {
        user-select: none;
    }
</style>
