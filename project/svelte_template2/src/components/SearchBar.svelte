<script>
    export let value = '';
    export let placeholder = '검색...';
    export let onClear = () => {};

    function handleClear() {
        value = '';
        onClear();
    }
</script>

<div class="relative">
    <input
        type="text"
        bind:value
        {placeholder}
        class="w-full py-2 pl-9 pr-9 bg-[#333] text-white text-sm rounded-lg border border-[#444] focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
    />
    
    <!-- 검색 아이콘 -->
    <svg
        class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
    </svg>

    <!-- X 버튼 -->
    {#if value}
        <button
            on:click={handleClear}
            class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            title="지우기"
        >
            <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
    {/if}
</div>

<style>
    input::placeholder {
        color: #9ca3af;
    }
</style>
