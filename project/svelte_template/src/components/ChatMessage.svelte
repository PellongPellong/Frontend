<script>
    export let message;
    export let onSuggestionClick = () => {};
    export let disabled = false;
    
    const isUser = message.role === 'user';
</script>

<div class="fade-in-up {isUser ? 'flex justify-end' : 'flex items-start gap-3'}">
    {#if !isUser}
        <!-- AI 아바타 -->
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-cyan-100 flex-shrink-0">
            <img src="/images/mascot.png" alt="백록이" class="w-8 h-8 object-contain" />
        </div>
    {/if}
    
    <div class="max-w-[80%] {isUser ? 'max-w-[70%]' : ''}">
        <div class="{
            isUser 
                ? 'rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white' 
                : 'rounded-t-2xl rounded-br-2xl bg-[#F0F0F0] text-[#212121]'
        } p-4">
            <!-- 메시지 내용 -->
            <p class="whitespace-pre-wrap">{message.content}</p>
        </div>
        
        <!-- 제안 버튼들 (첫 메시지만) -->
        {#if message.suggestions && message.suggestions.length > 0}
            <div class="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                {#each message.suggestions as suggestion}
                    <button 
                        class="w-full sm:w-auto rounded-full border-2 py-3 px-5 text-sm font-medium transition-colors {
                            disabled ? 'border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed' : 'border-[#E0E0E0] bg-white text-gray-900 hover:bg-[#F5F5F5]'
                        }"
                        on:click={() => !disabled && onSuggestionClick(suggestion.text)}
                        disabled={disabled}
                    >
                        {suggestion.display}
                    </button>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style>
    .fade-in-up {
        animation: fadeInUp 0.5s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>