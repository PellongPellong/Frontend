<script>
    import { onMount } from 'svelte';
    import ChatMessage from '../components/ChatMessage.svelte';
    import LocationStatus from '../components/LocationStatus.svelte';
    import RecommendationCard from '../components/RecommendationCard.svelte';
    import CouponList from '../components/CouponList.svelte';
    
    export let goTo;
    
    let sessionId = null;
    let messages = [];
    let userInput = '';
    let isLoading = false;
    let chatContainer;
    
    // 초기 메시지
    onMount(() => {
        messages = [
            {
                role: 'assistant',
                content: '안녕하세요! 제주숨곧 AI입니다. 한산한 제주 여행지를 추천해드릴게요. 어떤 걸 찾고 계신가요?',
                suggestions: [
                    '🌊 바다 볼 수 있는 카페',
                    '🧶 오름 코스 추천',
                    '👨‍👩‍👧 가족 여행 코스'
                ]
            }
        ];
    });
    
    async function sendMessage(text = userInput) {
        if (!text.trim() || isLoading) return;
        
        // 사용자 메시지 추가
        messages = [...messages, {
            role: 'user',
            content: text
        }];
        
        userInput = '';
        isLoading = true;
        
        // 로딩 메시지 추가
        messages = [...messages, {
            role: 'assistant',
            loading: true
        }];
        
        scrollToBottom();
        
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    session_id: sessionId,
                    message: text
                })
            });
            
            const data = await response.json();
            
            // 세션 ID 저장
            sessionId = data.session_id;
            
            // 로딩 메시지 제거
            messages = messages.slice(0, -1);
            
            // AI 응답 추가
            messages = [...messages, {
                role: 'assistant',
                content: generateResponseText(data),
                data: data // 원본 데이터 저장
            }];
            
        } catch (error) {
            console.error('API Error:', error);
            messages = messages.slice(0, -1);
            messages = [...messages, {
                role: 'assistant',
                content: '죄송합니다. 오류가 발생했어요. 다시 시도해주세요.'
            }];
        } finally {
            isLoading = false;
            scrollToBottom();
        }
    }
    
    function generateResponseText(data) {
        let text = '';
        
        // 장소 상태 정보
        if (data.status) {
            text += `${data.status.location_name}는 ${data.status.location_status}\n\n`;
        }
        
        // 추천 장소
        if (data.recommendation) {
            text += `대신 ${data.recommendation.location_name}를 추천드려요!\n${data.recommendation.story}\n\n`;
        }
        
        // 주변 명소
        if (data.around && data.around.length > 0) {
            text += `주변 추천 장소:\n`;
            data.around.forEach(place => {
                text += `• ${place.name}: ${place.reason}\n`;
            });
        }
        
        return text.trim();
    }
    
    function scrollToBottom() {
        setTimeout(() => {
            if (chatContainer) {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }
        }, 100);
    }
    
    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }
</script>

<div class="flex h-screen w-full bg-white">
    <!-- 사이드바 (데스크탑) -->
    <aside class="hidden md:flex w-[250px] flex-col bg-[#2A2A2A] text-[#E5E5E5]">
        <div class="p-4">
            <h1 class="text-xl font-bold text-white flex items-center gap-2">
                <span>🦌</span>
                <span>제주숨곧 AI</span>
            </h1>
            <button 
                class="mt-4 w-full rounded-lg border border-[#444] py-2 px-4 text-left text-sm hover:bg-[#333] transition-colors"
                on:click={() => {
                    sessionId = null;
                    messages = messages.slice(0, 1);
                }}
            >
                + 새 대화
            </button>
        </div>
        
        <!-- 대화 기록 (추후 구현) -->
        <nav class="flex-grow overflow-y-auto px-2 space-y-1">
            <!-- 저장된 대화 목록 -->
        </nav>
        
        <div class="p-2 border-t border-[#444]">
            <button class="flex items-center gap-3 rounded-lg p-3 text-sm hover:bg-[#333] transition-colors w-full">
                <span class="material-symbols-outlined text-xl">settings</span>
                <span>설정</span>
            </button>
        </div>
    </aside>
    
    <!-- 메인 채팅 영역 -->
    <main class="flex flex-1 flex-col h-full relative">
        <!-- 헤더 -->
        <header class="flex h-[60px] items-center justify-between border-b border-[#E5E5E5] bg-white px-4 flex-shrink-0">
            <button class="md:hidden" on:click={() => {/* 모바일 메뉴 */}}>
                <span class="material-symbols-outlined">menu</span>
            </button>
            <h2 class="absolute left-1/2 -translate-x-1/2 text-lg font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                제주 여행 AI 어시스턴트
            </h2>
            <button>
                <span class="material-symbols-outlined">more_vert</span>
            </button>
        </header>
        
        <!-- 채팅 메시지 영역 -->
        <div 
            bind:this={chatContainer}
            class="flex-1 overflow-y-auto custom-scrollbar"
        >
            <div class="mx-auto max-w-[800px] p-5 md:py-10 space-y-6">
                {#each messages as message, i (i)}
                    <ChatMessage 
                        {message} 
                        onSuggestionClick={sendMessage}
                    />
                {/each}
            </div>
        </div>
        
        <!-- 입력 영역 -->
        <div class="bg-white p-5 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex-shrink-0">
            <div class="mx-auto max-w-[800px] relative">
                <textarea
                    bind:value={userInput}
                    on:keydown={handleKeyDown}
                    class="w-full resize-none rounded-xl border border-[#E0E0E0] py-3 pl-4 pr-14 text-base focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition"
                    placeholder="제주 여행에 대해 물어보세요... (예: 한산한 카페 추천해줄래?)"
                    rows="1"
                    style="max-height: 120px;"
                    disabled={isLoading}
                />
                <button
                    on:click={() => sendMessage()}
                    disabled={!userInput.trim() || isLoading}
                    class="absolute right-2 bottom-2 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 {
                        userInput.trim() && !isLoading
                            ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600'
                            : 'bg-[#E0E0E0]'
                    } text-white"
                >
                    <span class="material-symbols-outlined">arrow_upward</span>
                </button>
            </div>
        </div>
    </main>
</div>

<style>
    .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 3px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
        background-color: transparent;
    }
</style>
