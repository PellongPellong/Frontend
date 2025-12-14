<script>
    export let question;
    export let value; // current selection (string or array if multiple)
    export let onSelect; // callback(value)

    function handleClick(optionValue) {
        if (question.multiple) {
            // Toggle logic handled by parent or here?
            // Store logic `toggleAvoid` handles it.
            // But here we need to emit what was clicked.
            onSelect(optionValue);
        } else {
            onSelect(optionValue);
        }
    }

    function isSelected(optVal) {
        if (question.multiple) {
            return Array.isArray(value) && value.includes(optVal);
        }
        return value === optVal;
    }
</script>

<div class="bg-white p-6 rounded-lg shadow-md animate-fade-in-up">
    <h2 class="text-xl font-bold mb-2">{question.title}</h2>
    <p class="text-gray-500 mb-6">{question.subtitle}</p>

    <div class="grid grid-cols-1 gap-3">
        {#each question.options as option}
            <button
                class="p-4 border rounded-lg text-left transition-colors flex items-center justify-between
          {isSelected(option.value)
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:bg-gray-50'}"
                on:click={() => handleClick(option.value)}
            >
                <span>{option.label}</span>
                {#if isSelected(option.value)}
                    <span class="text-blue-500">✓</span>
                {/if}
            </button>
        {/each}
    </div>
</div>

<style>
    @keyframes fade-in-up {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .animate-fade-in-up {
        animation: fade-in-up 0.5s ease-out;
    }
</style>
