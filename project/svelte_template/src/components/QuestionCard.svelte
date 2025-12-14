<script>
    export let question;
    export let value;
    export let onSelect;

    function handleClick(optionValue) {
        onSelect(optionValue);
    }

    function isSelected(optVal) {
        if (question.multiple) {
            return Array.isArray(value) && value.includes(optVal);
        }
        return value === optVal;
    }
    
    // Icon mapping for different question types
    const questionIcons = {
        transport: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6 0a1 1 0 001 1h2a1 1 0 001-1m-6 0h6',
        companion: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        timeOfDay: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
        mood: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        avoid: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636',
        intensity: 'M13 10V3L4 14h7v7l9-11h-7z',
        food: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
    };
    
    $: questionIcon = questionIcons[question.id] || questionIcons.mood;
</script>

<div class="glass rounded-3xl p-6 md:p-8 shadow-xl">
    <!-- Question Header -->
    <div class="mb-8 text-center">
        <!-- Icon -->
        <div class="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full gradient-jeju mb-4 shadow-lg">
            <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={questionIcon}></path>
            </svg>
        </div>
        
        <!-- Title -->
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {question.title}
        </h2>
        
        <!-- Subtitle -->
        <p class="text-gray-600 text-sm md:text-base">
            {question.subtitle}
        </p>
        
        <!-- Multiple Selection Hint -->
        {#if question.multiple}
            <div class="inline-flex items-center gap-2 mt-3 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>복수 선택 가능</span>
            </div>
        {/if}
    </div>

    <!-- Options Grid -->
    <div class="grid grid-cols-1 {question.options.length > 4 ? 'md:grid-cols-2' : ''} gap-3 md:gap-4">
        {#each question.options as option, index}
            <button
                class="group relative p-4 md:p-5 rounded-2xl text-left transition-all duration-300 transform
                    {isSelected(option.value)
                        ? 'bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-xl scale-[1.02]'
                        : 'bg-white/60 hover:bg-white text-gray-700 hover:shadow-lg hover:scale-[1.01] border border-gray-200'}"
                on:click={() => handleClick(option.value)}
                style="animation-delay: {index * 50}ms"
            >
                <div class="flex items-center justify-between gap-3">
                    <span class="font-semibold text-base md:text-lg flex-1">
                        {option.label}
                    </span>
                    
                    <!-- Checkmark / Circle -->
                    <div class="flex-shrink-0">
                        {#if isSelected(option.value)}
                            <div class="w-6 h-6 bg-white rounded-full flex items-center justify-center transition-transform scale-110">
                                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        {:else}
                            <div class="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-blue-400 transition-colors"></div>
                        {/if}
                    </div>
                </div>
                
                <!-- Hover glow effect -->
                {#if !isSelected(option.value)}
                    <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/0 to-teal-400/0 group-hover:from-blue-400/5 group-hover:to-teal-400/5 transition-all duration-300 pointer-events-none"></div>
                {/if}
            </button>
        {/each}
    </div>
    
    <!-- Selection Count (for multiple) -->
    {#if question.multiple && Array.isArray(value) && value.length > 0}
        <div class="mt-6 text-center">
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
        animation: slideIn 0.4s ease-out forwards;
        opacity: 0;
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
