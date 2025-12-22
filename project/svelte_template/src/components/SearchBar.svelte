<script>
    export let value = "";
    export let placeholder = "검색...";
    export let onInput = () => {};
    export let onClear = () => {};

    function handleInput(e) {
        value = e.target.value;
        onInput(value);
    }

    function handleClear() {
        value = "";
        onClear();
    }
</script>

<div class="relative w-full">
    <input
        type="text"
        bind:value
        on:input={handleInput}
        {placeholder}
        class="w-full rounded-lg bg-[#333] border border-[#444] py-2 pl-10 pr-10 text-sm text-[#E5E5E5] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition"
    />
    
    <!-- 검색 아이콘 -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
    </svg>

    <!-- 지우기 버튼 -->
    {#if value}
        <button
            on:click={handleClear}
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
    {/if}
</div>
