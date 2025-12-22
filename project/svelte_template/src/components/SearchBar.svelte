<script>
    export let value = '';
    export let placeholder = '검색...';
    export let onInput = () => {};
    export let onClear = () => {};
    
    function handleInput(e) {
        value = e.target.value;
        onInput(value);
    }
    
    function handleClear() {
        value = '';
        onClear();
    }
</script>

<div class="relative">
    <input
        type="text"
        bind:value
        on:input={handleInput}
        {placeholder}
        class="w-full rounded-lg bg-[#333] border border-[#444] py-2 pl-9 pr-9 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
    />
    
    <!-- Search Icon -->
    <div class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
    
    <!-- Clear Button -->
    {#if value}
        <button
            on:click={handleClear}
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    {/if}
</div>
