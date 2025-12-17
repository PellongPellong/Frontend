<script>
    export let message;
    export let onSuggestionClick = () => {};
    export let disabled = false;
    
    const isUser = message.role === 'user';
    const isLoading = message.loading;
</script>

<div class="fade-in-up {isUser ? 'flex justify-end' : 'flex items-start gap-3'}">
    {#if !isUser}
        <!-- AI 아바타 -->
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-cyan-100 text-xl flex-shrink-0">
            🦌
        </div>
    {/if}
    
    <div class="max-w-[80%] {isUser ? 'max-w-[70%]' : ''}">
        <div class="{
            isUser 
                ? 'rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white' 
                : 'rounded-t-2xl rounded-br-2xl bg-[#F0F0F0] text-[#212121]'
        } p-4">
            {#if isLoading}
                <!-- 로딩 애니메이션 -->
                <div class="flex items-center space-x-1 p-2">
                    <div class="h-2 w-2 rounded-full bg-gray-500 typing-dot"></div>
                    <div class="h-2 w-2 rounded-full bg-gray-500 typing-dot"></div>
                    <div class="h-2 w-2 rounded-full bg-gray-500 typing-dot"></div>
                </div>
            {:else}
                <!-- 메시지 내용 -->
                <p class="whitespace-pre-wrap">{message.content}</p>
                
                <!-- 장소 상태 정보 -->
                {#if message.data?.status}
                    <div class="mt-4 p-3 bg-white/10 rounded-lg">
                        <h4 class="font-bold mb-2">📊 혼잡도 정보</h4>
                        {#if message.data.status.time_table && message.data.status.time_table.length > 0}
                            <div class="grid grid-cols-3 gap-2 mt-2">
                                {#each message.data.status.time_table as slot}
                                    {@const level = slot.혼잡도}
                                    {@const bgColor = level <= 2 ? 'bg-green-200 text-green-900' : level <= 3 ? 'bg-yellow-200 text-yellow-900' : 'bg-red-200 text-red-900'}
                                    <div class="text-xs p-2 {bgColor} rounded font-semibold">
                                        <div>{slot.time}</div>
                                        <div>{slot.혼잡도}점</div>
                                    </div>
                                {/each}
                            </div>
                        {/if}
                    </div>
                {/if}
                
                <!-- 쿠폰 정보 -->
                {#if message.data?.coupones && message.data.coupones.length > 0}
                    <div class="mt-4 space-y-2">
                        <h4 class="font-bold">🎫 사용 가능한 쿠폰</h4>
                        {#each message.data.coupones as coupon}
                            <div class="p-3 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition">
                                <div class="font-semibold">{coupon.name}</div>
                                <div class="text-xs mt-1 opacity-80">바코드: {coupon.barcode}</div>
                            </div>
                        {/each}
                    </div>
                {/if}
            {/if}
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
    
    .typing-dot {
        animation: typing-blink 1.4s infinite both;
    }
    .typing-dot:nth-child(2) {
        animation-delay: 0.2s;
    }
    .typing-dot:nth-child(3) {
        animation-delay: 0.4s;
    }
    @keyframes typing-blink {
        0% { opacity: 0.2; }
        20% { opacity: 1; }
        100% { opacity: 0.2; }
    }
</style>