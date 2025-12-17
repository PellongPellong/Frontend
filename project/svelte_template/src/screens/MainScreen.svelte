<script>
    import { onMount, tick } from 'svelte';
    import ChatMessage from '../components/ChatMessage.svelte';
    
    export let goTo;
    
    let sessionId = null;
    let messages = [];
    let userInput = '';
    let isLoading = false;
    let chatContainer;
    
    // 목업 데이터
    const mockResponses = {
        '성산': {
            session_id: 'mock-session-001',
            cards: [
                {
                    type: 'status',
                    title: '성산일출봉',
                    subtitle: '혼잡도 5점',
                    icon: '📍',
                    content: '현재 매우 혼잡합니다',
                    color: 'from-red-400/20 to-orange-400/20',
                    timeTable: [
                        { time: '09시', level: 5 },
                        { time: '10시', level: 5 },
                        { time: '11시', level: 4 },
                        { time: '14시', level: 5 },
                        { time: '15시', level: 4 },
                        { time: '16시', level: 3 },
                    ]
                },
                {
                    type: 'recommendation',
                    title: '월령지',
                    subtitle: '대신 추천',
                    icon: '✨',
                    content: '조선시대 목마장으로 조용하고 평화로운 산책로',
                    color: 'from-green-400/20 to-emerald-400/20'
                },
                {
                    type: 'places',
                    title: '주변 명소',
                    subtitle: '3곳 추천',
                    icon: '🌿',
                    content: '',
                    color: 'from-blue-400/20 to-cyan-400/20',
                    places: [
                        { name: '성읍도', tag: '한적한 해변' },
                        { name: '광치기해변', tag: '로컬 비치' },
                        { name: '표선해변', tag: '풀빌라' }
                    ]
                },
                {
                    type: 'coupon',
                    title: '사용 가능 쿠폰',
                    subtitle: '2개',
                    icon: '🎫',
                    content: '월령지 입장료 20% 할인',
                    color: 'from-purple-400/20 to-pink-400/20',
                    coupons: [
                        { name: '월령지 20% 할인', code: '1234' },
                        { name: '카페 음료 무료', code: '9876' }
                    ]
                }
            ]
        },
        '카페': {
            session_id: 'mock-session-002',
            cards: [
                {
                    type: 'recommendation',
                    title: '카페 더 클리프',
                    subtitle: '오션뷰 카페',
                    icon: '☕',
                    content: '절벽 끝의 한라산과 바다 전망',
                    color: 'from-amber-400/20 to-yellow-400/20'
                },
                {
                    type: 'places',
                    title: '주변 명소',
                    subtitle: '2곳 추천',
                    icon: '🌊',
                    content: '',
                    color: 'from-blue-400/20 to-cyan-400/20',
                    places: [
                        { name: '용머리 해안도로', tag: '드라이브' },
                        { name: '상예 카페거리', tag: '감성 카페' }
                    ]
                },
                {
                    type: 'coupon',
                    title: '사용 가능 쿠폰',
                    subtitle: '1개',
                    icon: '🎫',
                    content: '커피 할인 쿠폰',
                    color: 'from-purple-400/20 to-pink-400/20',
                    coupons: [
                        { name: '커피 할인', code: '5555' }
                    ]
                }
            ]
        },
        '가족': {
            session_id: 'mock-session-003',
            cards: [
                {
                    type: 'recommendation',
                    title: '빌자루 숲',
                    subtitle: '가족 여행 코스',
                    icon: '🌳',
                    content: '아이들과 함께하는 자연 산책로',
                    color: 'from-green-400/20 to-teal-400/20'
                },
                {
                    type: 'places',
                    title: '주변 명소',
                    subtitle: '3곳 추천',
                    icon: '👨‍👩‍👧',
                    content: '',
                    color: 'from-blue-400/20 to-cyan-400/20',
                    places: [
                        { name: '제주헤리테이지', tag: '체험' },
                        { name: '에코랜드', tag: '테마파크' },
                        { name: '한라수목원', tag: '산책' }
                    ]
                },
                {
                    type: 'coupon',
                    title: '사용 가능 쿠폰',
                    subtitle: '2개',
                    icon: '🎫',
                    content: '가족 할인권',
                    color: 'from-purple-400/20 to-pink-400/20',
                    coupons: [
                        { name: '빌자루 가족 할인', code: '1111' },
                        { name: '헤리테이지 30%', code: '4444' }
                    ]
                }
            ]
        },
        'default': {
            session_id: 'mock-session-default',
            cards: [
                {
                    type: 'recommendation',
                    title: '제주 숨은 명소',
                    subtitle: '더 알아보기',
                    icon: '🗺️',
                    content: '키워드를 입력해주세요',
                    color: 'from-indigo-400/20 to-purple-400/20'
                }
            ]
        }
    };
    
    onMount(() => {
        messages = [
            {
                type: 'text',
                role: 'assistant',
                content: '안녕하세요! 제주숨곡 AI입니다. 한산한 제주 여행지를 추천해드릴게요. 어떤 걸 찾고 계신가요?',
                suggestions: [
                    { display: '🌊 바다 볼 수 있는 카페', text: '바다 볼 수 있는 카페' },
                    { display: '🧺 오름 코스 추천', text: '오름 코스 추천' },
                    { display: '👨‍👩‍👧 가족 여행 코스', text: '가족 여행 코스' }
                ]
            }
        ];
    });
    
    function getMockResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('성산') || lowerMessage.includes('일출봉')) {
            return mockResponses['성산'];
        } else if (lowerMessage.includes('카페') || lowerMessage.includes('바다')) {
            return mockResponses['카페'];
        } else if (lowerMessage.includes('가족') || lowerMessage.includes('아이')) {
            return mockResponses['가족'];
        } else {
            return mockResponses['default'];
        }
    }
    
    async function sendMessage(text = userInput) {
        if (!text.trim() || isLoading) return;
        
        const trimmedText = text.trim();
        
        messages = [...messages, {
            type: 'text',
            role: 'user',
            content: trimmedText
        }];
        
        userInput = '';
        isLoading = true;
        
        messages = [...messages, {
            type: 'loading',
            role: 'assistant'
        }];
        
        await tick();
        scrollToBottom();
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        try {
            const data = getMockResponse(trimmedText);
            sessionId = data.session_id;
            
            const messagesWithoutLoading = messages.slice(0, -1);
            messages = [...messagesWithoutLoading, {
                type: 'cards',
                role: 'assistant',
                cards: data.cards
            }];
            
        } catch (error) {
            console.error('Error:', error);
            const messagesWithoutLoading = messages.slice(0, -1);
            messages = [...messagesWithoutLoading, {
                type: 'text',
                role: 'assistant',
                content: '죄송합니다. 오류가 발생했어요. 다시 시도해주세요.'
            }];
        } finally {
            isLoading = false;
            await tick();
            scrollToBottom();
        }
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
            if (!isLoading) {
                sendMessage();
            }
        }
    }
</script>

<div class="flex h-screen w-full bg-white">
    <aside class="hidden md:flex w-[250px] flex-col bg-[#2A2A2A] text-[#E5E5E5]">
        <div class="p-4">
            <h1 class="text-xl font-bold text-white flex items-center gap-2">
                <span>🦌</span>
                <span>제주숨곡 AI</span>
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
        <nav class="flex-grow overflow-y-auto px-2 space-y-1 custom-scrollbar"></nav>
        <div class="p-2 border-t border-[#444]">
            <button class="flex items-center gap-3 rounded-lg p-3 text-sm hover:bg-[#333] transition-colors w-full">
                <span>⚙️</span>
                <span>설정</span>
            </button>
        </div>
    </aside>
    
    <main class="flex flex-1 flex-col h-full relative">
        <header class="flex h-[60px] items-center justify-between border-b border-[#E5E5E5] bg-white px-4 flex-shrink-0">
            <button class="md:hidden"><span>☰</span></button>
            <h2 class="absolute left-1/2 -translate-x-1/2 text-lg font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                제주 여행 AI 어시스턴트
            </h2>
            <button><span>⋮</span></button>
        </header>
        
        <div bind:this={chatContainer} class="flex-1 overflow-y-auto custom-scrollbar">
            <div class="mx-auto max-w-[1200px] p-5 md:py-10 space-y-6">
                {#each messages as message, i (i)}
                    {#if message.type === 'text'}
                        <ChatMessage {message} onSuggestionClick={sendMessage} disabled={isLoading} />
                    {:else if message.type === 'loading'}
                        <div class="fade-in-up flex items-start gap-3">
                            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-cyan-100 text-xl flex-shrink-0">🦌</div>
                            <div class="rounded-t-2xl rounded-br-2xl bg-[#F0F0F0] text-[#212121] p-4">
                                <div class="flex items-center space-x-1 p-2">
                                    <div class="h-2 w-2 rounded-full bg-gray-500 typing-dot"></div>
                                    <div class="h-2 w-2 rounded-full bg-gray-500 typing-dot"></div>
                                    <div class="h-2 w-2 rounded-full bg-gray-500 typing-dot"></div>
                                </div>
                            </div>
                        </div>
                    {:else if message.type === 'cards'}
                        <div class="fade-in-up flex items-start gap-3">
                            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-cyan-100 text-xl flex-shrink-0">🦌</div>
                            
                            <!-- 가로 스크롤 카드 컨테이너 -->
                            <div class="flex-1 overflow-x-auto pb-4 hide-scrollbar">
                                <div class="flex gap-4 min-w-max">
                                    {#each message.cards as card}
                                        <div class="glass-card w-[280px] h-[280px] flex flex-col p-6 backdrop-blur-xl bg-gradient-to-br {card.color} border border-white/40 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                            <!-- 카드 헤더 -->
                                            <div class="flex items-center justify-between mb-4">
                                                <span class="text-4xl">{card.icon}</span>
                                                <span class="text-xs font-semibold px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm">
                                                    {card.subtitle}
                                                </span>
                                            </div>
                                            
                                            <!-- 카드 타이틀 -->
                                            <h3 class="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                                            
                                            <!-- 카드 내용 -->
                                            <div class="flex-1 overflow-y-auto custom-scrollbar">
                                                {#if card.type === 'status' && card.timeTable}
                                                    <div class="grid grid-cols-3 gap-2">
                                                        {#each card.timeTable as slot}
                                                            {@const color = slot.level <= 2 ? 'bg-green-500/20' : slot.level <= 3 ? 'bg-yellow-500/20' : 'bg-red-500/20'}
                                                            <div class="{color} rounded-lg p-2 text-center backdrop-blur-sm">
                                                                <div class="text-xs font-bold">{slot.time}</div>
                                                                <div class="text-sm">{slot.level}점</div>
                                                            </div>
                                                        {/each}
                                                    </div>
                                                {:else if card.places}
                                                    <div class="space-y-2">
                                                        {#each card.places as place}
                                                            <div class="bg-white/30 backdrop-blur-sm rounded-lg p-3">
                                                                <div class="font-semibold text-gray-900">{place.name}</div>
                                                                <div class="text-xs text-gray-700">{place.tag}</div>
                                                            </div>
                                                        {/each}
                                                    </div>
                                                {:else if card.coupons}
                                                    <div class="space-y-2">
                                                        {#each card.coupons as coupon}
                                                            <div class="bg-white/30 backdrop-blur-sm rounded-lg p-3 cursor-pointer hover:bg-white/50 transition">
                                                                <div class="font-semibold text-gray-900 text-sm">{coupon.name}</div>
                                                                <div class="text-xs text-gray-600 font-mono">{coupon.code}</div>
                                                            </div>
                                                        {/each}
                                                    </div>
                                                {:else}
                                                    <p class="text-sm text-gray-700 leading-relaxed">{card.content}</p>
                                                {/if}
                                            </div>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
        
        <div class="bg-white p-5 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex-shrink-0">
            <div class="mx-auto max-w-[800px] relative">
                {#if isLoading}
                    <div class="absolute top-0 left-0 right-0 -mt-8 text-center">
                        <span class="text-sm text-gray-500">AI가 응답하는 중입니다...</span>
                    </div>
                {/if}
                <textarea
                    bind:value={userInput}
                    on:keydown={handleKeyDown}
                    class="w-full resize-none rounded-xl border py-3 pl-4 pr-14 text-base focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition {
                        isLoading ? 'border-gray-300 bg-gray-50 text-gray-400 cursor-not-allowed' : 'border-[#E0E0E0] bg-white text-gray-900'
                    }"
                    placeholder={isLoading ? '응답을 기다리는 중...' : '제주 여행에 대해 물어보세요... (예: 성산일출봉 괜찮을까?)'}
                    rows="1"
                    style="max-height: 120px;"
                    disabled={isLoading}
                />
                <button
                    on:click={() => sendMessage()}
                    disabled={!userInput.trim() || isLoading}
                    class="absolute right-2 bottom-2 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 {
                        userInput.trim() && !isLoading
                            ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 cursor-pointer'
                            : 'bg-[#E0E0E0] cursor-not-allowed'
                    } text-white"
                >
                    <span>↑</span>
                </button>
            </div>
        </div>
    </main>
</div>

<style>
    .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #ccc; border-radius: 3px; }
    .custom-scrollbar::-webkit-scrollbar-track { background-color: transparent; }
    
    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    
    .glass-card {
        box-shadow: 
            0 8px 32px 0 rgba(31, 38, 135, 0.15),
            inset 0 0 0 1px rgba(255, 255, 255, 0.4);
    }
    
    .fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .typing-dot { animation: typing-blink 1.4s infinite both; }
    .typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .typing-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes typing-blink {
        0% { opacity: 0.2; }
        20% { opacity: 1; }
        100% { opacity: 0.2; }
    }
</style>