<script>
    import { onMount, tick } from "svelte";
    import ChatMessage from "../components/ChatMessage.svelte";
    import CardWrapper from "../components/cards/CardWrapper.svelte";
    import StatusCard from "../components/cards/StatusCard.svelte";
    import RecommendationCard from "../components/cards/RecommendationCard.svelte";
    import PlacesCard from "../components/cards/PlacesCard.svelte";
    import CouponCard from "../components/cards/CouponCard.svelte";

    export let goTo;

    let sessionId = null;
    let messages = [];
    let userInput = "";
    let isLoading = false;
    let chatContainer;
    let currentCardIndex = {};
    let expandedCard = null;
    let hoveredCard = null;
    let isSidebarOpen = false;
    let chatHistory = [];
    
    const STORAGE_KEY = 'jeju-chat-history';
    const MAX_HISTORY = 20;

    const mockResponses = {
        성산: {
            session_id: "mock-session-001",
            cards: [
                {
                    type: "status",
                    title: "성산일출봉",
                    subtitle: "혼잡도 5점",
                    icon: "📍",
                    content: "현재 매우 혼잡합니다",
                    timeTable: [
                        { time: "09시", level: 5 },
                        { time: "10시", level: 5 },
                        { time: "11시", level: 4 },
                        { time: "14시", level: 5 },
                        { time: "15시", level: 4 },
                        { time: "16시", level: 3 },
                    ],
                },
                {
                    type: "recommendation",
                    title: "월령지",
                    subtitle: "대신 추천",
                    icon: "✨",
                    content:
                        "조선시대 목마장으로 조용하고 평화로운 산책로. 관광객이 적고 평화로운 분위기를 즐길 수 있어요.",
                },
                {
                    type: "places",
                    title: "주변 명소",
                    subtitle: "3곳 추천",
                    icon: "🌿",
                    content: "",
                    places: [
                        { name: "성읍도", tag: "한적한 해변" },
                        { name: "광치기해변", tag: "로컬 비치" },
                        { name: "표선해변", tag: "풀빌라" },
                    ],
                },
                {
                    type: "coupon",
                    title: "사용 가능 쿠폰",
                    subtitle: "2개",
                    icon: "🎫",
                    content: "월령지 입장료 20% 할인",
                    coupons: [
                        { name: "월령지 20% 할인", code: "1234-5678-9012" },
                        { name: "카페 음료 무료", code: "9876-5432-1098" },
                    ],
                },
            ],
        },
        카페: {
            session_id: "mock-session-002",
            cards: [
                {
                    type: "recommendation",
                    title: "카페 더 클리프",
                    subtitle: "오션뷰 카페",
                    icon: "☕",
                    content:
                        "절벽 끝의 한라산과 바다 전망. 주말에도 비교적 한산하며 사진 촬영 명소로 유명합니다.",
                },
                {
                    type: "places",
                    title: "주변 명소",
                    subtitle: "2곳 추천",
                    icon: "🌊",
                    content: "",
                    places: [
                        { name: "용머리 해안도로", tag: "드라이브" },
                        { name: "상예 카페거리", tag: "감성 카페" },
                    ],
                },
                {
                    type: "coupon",
                    title: "사용 가능 쿠폰",
                    subtitle: "1개",
                    icon: "🎫",
                    content: "커피 할인 쿠폰",
                    coupons: [{ name: "커피 할인", code: "5555-6666-7777" }],
                },
            ],
        },
        가족: {
            session_id: "mock-session-003",
            cards: [
                {
                    type: "recommendation",
                    title: "빌자루 숲",
                    subtitle: "가족 여행 코스",
                    icon: "🌳",
                    content:
                        "아이들과 함께하는 자연 산책로. 평일 오전 시간대는 비교적 한산합니다.",
                },
                {
                    type: "places",
                    title: "주변 명소",
                    subtitle: "3곳 추천",
                    icon: "👨‍👩‍👧",
                    content: "",
                    places: [
                        { name: "제주헤리테이지", tag: "체험" },
                        { name: "에코랜드", tag: "테마파크" },
                        { name: "한라수목원", tag: "산책" },
                    ],
                },
                {
                    type: "coupon",
                    title: "사용 가능 쿠폰",
                    subtitle: "2개",
                    icon: "🎫",
                    content: "가족 할인권",
                    coupons: [
                        { name: "빌자루 가족 할인", code: "1111-2222-3333" },
                        { name: "헤리테이지 30%", code: "4444-5555-6666" },
                    ],
                },
            ],
        },
        default: {
            session_id: "mock-session-default",
            cards: [
                {
                    type: "recommendation",
                    title: "제주 숨은 명소",
                    subtitle: "더 알아보기",
                    icon: "🗺️",
                    content: "키워드를 입력해주세요",
                },
            ],
        },
    };

    onMount(() => {
        loadChatHistory();
        messages = [
            {
                type: "text",
                role: "assistant",
                content:
                    "안녕하세요! 제주숨곡 AI 백록이입니다.\n많이 알려지지 않은 유니크한 제주 여행지를 추천해드릴게요.\n어느곳을 방문해보고 싶으신가요?",
                suggestions: [
                    {
                        display: "🌊 바다 볼 수 있는 카페",
                        text: "바다 볼 수 있는 카페",
                    },
                    { display: "🧺 오름 코스 추천", text: "오름 코스 추천" },
                    { display: "👨‍👩‍👧 가족 여행 코스", text: "가족 여행 코스" },
                ],
            },
        ];
    });
    
    function loadChatHistory() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) chatHistory = JSON.parse(saved);
        } catch (e) {
            console.error('Failed to load chat history:', e);
        }
    }
    
    function saveChatHistory() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(chatHistory));
        } catch (e) {
            console.error('Failed to save chat history:', e);
        }
    }
    
    function saveCurrentChat() {
        if (messages.length <= 1) return;
        const firstUserMessage = messages.find(m => m.role === 'user');
        if (!firstUserMessage) return;
        
        const title = firstUserMessage.content.slice(0, 30) + (firstUserMessage.content.length > 30 ? '...' : '');
        const timestamp = new Date().toISOString();
        const chatId = sessionId || `chat-${Date.now()}`;
        
        const existingIdx = chatHistory.findIndex(h => h.id === chatId);
        if (existingIdx >= 0) {
            chatHistory[existingIdx] = { id: chatId, title, timestamp, messages: [...messages], cardIndex: {...currentCardIndex} };
        } else {
            chatHistory.unshift({ id: chatId, title, timestamp, messages: [...messages], cardIndex: {...currentCardIndex} });
            if (chatHistory.length > MAX_HISTORY) chatHistory = chatHistory.slice(0, MAX_HISTORY);
        }
        saveChatHistory();
    }
    
    function loadChat(chat) {
        sessionId = chat.id;
        messages = [...chat.messages];
        currentCardIndex = {...chat.cardIndex};
        isSidebarOpen = false;
        setTimeout(() => scrollToBottom(), 100);
    }
    
    function startNewChat() {
        if (messages.length > 1) saveCurrentChat();
        sessionId = null;
        messages = [messages[0]];
        currentCardIndex = {};
        isSidebarOpen = false;
    }
    
    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        if (days === 0) return '오늘';
        if (days === 1) return '어제';
        if (days < 7) return `${days}일 전`;
        return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
    }

    function getMockResponse(message) {
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes("성산") || lowerMessage.includes("일출봉"))
            return mockResponses["성산"];
        if (lowerMessage.includes("카페") || lowerMessage.includes("바다"))
            return mockResponses["카페"];
        if (lowerMessage.includes("가족") || lowerMessage.includes("아이"))
            return mockResponses["가족"];
        return mockResponses["default"];
    }

    async function sendMessage(text = userInput) {
        if (!text.trim() || isLoading) return;
        const trimmedText = text.trim();
        messages = [
            ...messages,
            { type: "text", role: "user", content: trimmedText },
        ];
        userInput = "";
        isLoading = true;
        messages = [...messages, { type: "loading", role: "assistant" }];
        await tick();
        scrollToBottom();
        await new Promise((resolve) => setTimeout(resolve, 1500));
        try {
            const data = getMockResponse(trimmedText);
            sessionId = data.session_id;
            const messagesWithoutLoading = messages.slice(0, -1);
            const newMessageIdx = messagesWithoutLoading.length;
            currentCardIndex[newMessageIdx] = 0;
            messages = [
                ...messagesWithoutLoading,
                { type: "cards", role: "assistant", cards: data.cards },
            ];
            saveCurrentChat();
        } catch (error) {
            console.error("Error:", error);
            const messagesWithoutLoading = messages.slice(0, -1);
            messages = [
                ...messagesWithoutLoading,
                {
                    type: "text",
                    role: "assistant",
                    content:
                        "죄송합니다. 오류가 발생했어요. 다시 시도해주세요.",
                },
            ];
        } finally {
            isLoading = false;
            await tick();
            scrollToBottom();
        }
    }

    function navigateCard(messageIdx, direction) {
        const message = messages[messageIdx];
        if (!message || !message.cards) return;
        const currentIdx = currentCardIndex[messageIdx] || 0;
        const newIdx =
            direction === "left"
                ? Math.max(0, currentIdx - 1)
                : Math.min(message.cards.length - 1, currentIdx + 1);
        currentCardIndex[messageIdx] = newIdx;
    }

    function navigateModalCard(direction) {
        if (!expandedCard) return;
        const message = messages[expandedCard.messageIdx];
        if (!message || !message.cards) return;

        const currentIdx = expandedCard.cardIdx;
        const newIdx =
            direction === "left"
                ? Math.max(0, currentIdx - 1)
                : Math.min(message.cards.length - 1, currentIdx + 1);

        if (newIdx !== currentIdx) {
            expandedCard = {
                messageIdx: expandedCard.messageIdx,
                cardIdx: newIdx,
                card: message.cards[newIdx],
            };
            currentCardIndex[expandedCard.messageIdx] = newIdx;
        }
    }

    function openCardModal(messageIdx, cardIdx, card) {
        expandedCard = { messageIdx, cardIdx, card };
    }
    function closeCardModal() {
        expandedCard = null;
    }
    function scrollToBottom() {
        setTimeout(() => {
            if (chatContainer)
                chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 100);
    }
    function handleKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (!isLoading) sendMessage();
        }
        if (e.key === "Escape" && expandedCard) closeCardModal();
        if (expandedCard) {
            if (e.key === "ArrowLeft") navigateModalCard("left");
            if (e.key === "ArrowRight") navigateModalCard("right");
        }
    }
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="flex h-screen w-full bg-white">
    <!-- 사이드바 -->
    <aside
        class="{isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} fixed md:static inset-y-0 left-0 z-40 w-[250px] flex-col bg-[#2A2A2A] text-[#E5E5E5] transition-transform duration-300 flex"
    >
        <div class="p-4">
            <h1 class="text-xl font-bold text-white flex items-center gap-2">
                <img src="/images/mascot.png" alt="백록이" class="w-8 h-8 object-contain" />
                <span>제주숨곡 AI</span>
            </h1>
            <button
                class="mt-4 w-full rounded-lg border border-[#444] py-2 px-4 text-left text-sm hover:bg-[#333] transition-colors"
                on:click={startNewChat}>+ 새 대화</button
            >
        </div>
        <nav class="flex-grow overflow-y-auto px-2 space-y-1 custom-scrollbar">
            {#each chatHistory as chat (chat.id)}
                <button 
                    class="w-full text-left rounded-lg p-3 text-sm hover:bg-[#333] transition-colors {sessionId === chat.id ? 'bg-[#333]' : ''}"
                    on:click={() => loadChat(chat)}
                >
                    <div class="font-medium text-white truncate">{chat.title}</div>
                    <div class="text-xs text-gray-400 mt-1">{formatDate(chat.timestamp)}</div>
                </button>
            {/each}
        </nav>
        <div class="p-2 border-t border-[#444]">
            <button
                class="flex items-center gap-3 rounded-lg p-3 text-sm hover:bg-[#333] transition-colors w-full"
                ><span>⚙️</span><span>설정</span></button
            >
        </div>
    </aside>
    
    <!-- 모바일 오버레이 -->
    {#if isSidebarOpen}
        <div class="fixed inset-0 bg-black/50 z-30 md:hidden" on:click={() => isSidebarOpen = false}></div>
    {/if}

    <main class="flex flex-1 flex-col h-full relative">
        <header
            class="flex h-[60px] items-center justify-between border-b border-[#E5E5E5] bg-white px-4 flex-shrink-0"
        >
            <button class="md:hidden" on:click={() => isSidebarOpen = !isSidebarOpen}><span class="text-2xl">☰</span></button>
            <h2
                class="absolute left-1/2 -translate-x-1/2 text-lg font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent"
            >
                제주 여행 AI 어시스턴트
            </h2>
            <div></div>
        </header>

        <div
            bind:this={chatContainer}
            class="flex-1 overflow-y-auto custom-scrollbar"
        >
            <div class="mx-auto max-w-[800px] p-5 md:py-10 space-y-6">
                {#each messages as message, i (i)}
                    {#if message.type === "text"}
                        <ChatMessage
                            {message}
                            onSuggestionClick={sendMessage}
                            disabled={isLoading}
                        />
                    {:else if message.type === "loading"}
                        <div class="fade-in-up flex items-start gap-3">
                            <div
                                class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-cyan-100 flex-shrink-0"
                            >
                                <img
                                    src="/images/mascot.png"
                                    alt="백록이"
                                    class="w-8 h-8 object-contain"
                                />
                            </div>
                            <div
                                class="rounded-t-2xl rounded-br-2xl bg-[#F0F0F0] text-[#212121] p-4"
                            >
                                <div class="flex items-center space-x-1 p-2">
                                    <div
                                        class="h-2 w-2 rounded-full bg-gray-500 typing-dot"
                                    ></div>
                                    <div
                                        class="h-2 w-2 rounded-full bg-gray-500 typing-dot"
                                    ></div>
                                    <div
                                        class="h-2 w-2 rounded-full bg-gray-500 typing-dot"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    {:else if message.type === "cards"}
                        {@const activeIdx = currentCardIndex[i] || 0}
                        <div class="fade-in-up">
                            <div
                                class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-cyan-100 flex-shrink-0 mb-3"
                            >
                                <img
                                    src="/images/mascot.png"
                                    alt="백록이"
                                    class="w-8 h-8 object-contain"
                                />
                            </div>
                            <div class="w-full overflow-hidden">
                                <div
                                    class="flex items-center justify-between mb-4"
                                >
                                    <button
                                        on:click={() => navigateCard(i, "left")}
                                        disabled={activeIdx === 0}
                                        class="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed"
                                        ><span class="text-gray-700 font-bold"
                                            >←</span
                                        ></button
                                    >
                                    <div
                                        class="text-sm text-gray-600 font-medium"
                                    >
                                        {activeIdx + 1} / {message.cards.length}
                                    </div>
                                    <button
                                        on:click={() =>
                                            navigateCard(i, "right")}
                                        disabled={activeIdx ===
                                            message.cards.length - 1}
                                        class="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed"
                                        ><span class="text-gray-700 font-bold"
                                            >→</span
                                        ></button
                                    >
                                </div>
                                <div class="relative h-[420px] overflow-hidden">
                                    {#each message.cards as card, cardIdx}
                                        {@const offset =
                                            (cardIdx - activeIdx) * 252}
                                        {@const isActive =
                                            cardIdx === activeIdx}
                                        {@const baseZ =
                                            message.cards.length -
                                            Math.abs(cardIdx - activeIdx)}
                                        {@const isHovered =
                                            hoveredCard === `${i}-${cardIdx}`}
                                        {@const zIndex = isHovered
                                            ? 9999
                                            : baseZ}

                                        <div
                                            class="absolute transition-all duration-500 ease-out"
                                            style="left: {offset}px; z-index: {zIndex}; opacity: {Math.abs(
                                                cardIdx - activeIdx,
                                            ) > 2
                                                ? 0
                                                : 1};"
                                        >
                                            <CardWrapper
                                                {card}
                                                isCompact={true}
                                                {isActive}
                                                {isHovered}
                                                onClick={() =>
                                                    openCardModal(
                                                        i,
                                                        cardIdx,
                                                        card,
                                                    )}
                                                onMouseEnter={() =>
                                                    (hoveredCard = `${i}-${cardIdx}`)}
                                                onMouseLeave={() =>
                                                    (hoveredCard = null)}
                                            />
                                        </div>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
        </div>

        <div
            class="bg-white p-5 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex-shrink-0"
        >
            <div class="mx-auto max-w-[800px] relative">
                {#if isLoading}<div
                        class="absolute top-0 left-0 right-0 -mt-8 text-center"
                    >
                        <span class="text-sm text-gray-500"
                            >AI가 응답하는 중입니다...</span
                        >
                    </div>{/if}
                <textarea
                    bind:value={userInput}
                    on:keydown={handleKeyDown}
                    class="w-full resize-none rounded-xl border py-3 pl-4 pr-14 text-base focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition {isLoading
                        ? 'border-gray-300 bg-gray-50 text-gray-400 cursor-not-allowed'
                        : 'border-[#E0E0E0] bg-white text-gray-900'}"
                    placeholder={isLoading
                        ? "응답을 기다리는 중..."
                        : "제주 여행에 대해 물어보세요... (예: 성산일출봉 괜찮을까?)"}
                    rows="1"
                    style="max-height: 120px;"
                    disabled={isLoading}
                />
                <button
                    on:click={() => sendMessage()}
                    disabled={!userInput.trim() || isLoading}
                    class="absolute right-2 bottom-2 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 {userInput.trim() &&
                    !isLoading
                        ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 cursor-pointer'
                        : 'bg-[#E0E0E0] cursor-not-allowed'} text-white"
                    ><span>↑</span></button
                >
            </div>
        </div>
    </main>
</div>

<!-- 모달: 확대된 카드 -->
{#if expandedCard}
    {@const message = messages[expandedCard.messageIdx]}
    {@const totalCards = message?.cards?.length || 0}
    {@const currentIdx = expandedCard.cardIdx}

    <div
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 fade-in"
        on:click={closeCardModal}
    >
        <div class="relative flex items-center gap-5" on:click|stopPropagation>
            <!-- 왼쪽 네비게이션 버튼 -->
            <button
                on:click={() => navigateModalCard("left")}
                disabled={currentIdx === 0}
                class="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center transition-all hover:shadow-2xl hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <span class="text-gray-700 font-bold text-xl">←</span>
            </button>

            <!-- 카드 컨테이너 -->
            <div class="relative">
                <!-- X 버튼 (우측 상단) -->
                <button
                    on:click={closeCardModal}
                    class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center transition hover:bg-gray-100 rounded-lg"
                >
                    <span class="text-3xl text-gray-600 hover:text-gray-900"
                        >×</span
                    >
                </button>

                <!-- 확대된 카드 -->
                <div
                    class="w-[500px] h-[500px] flex flex-col p-8 bg-white border-2 border-gray-200 rounded-3xl shadow-2xl scale-in"
                >
                    {#if expandedCard.card.type === "status"}
                        <StatusCard
                            card={expandedCard.card}
                            isCompact={false}
                        />
                    {:else if expandedCard.card.type === "recommendation"}
                        <RecommendationCard
                            card={expandedCard.card}
                            isCompact={false}
                        />
                    {:else if expandedCard.card.type === "places"}
                        <PlacesCard
                            card={expandedCard.card}
                            isCompact={false}
                        />
                    {:else if expandedCard.card.type === "coupon"}
                        <CouponCard
                            card={expandedCard.card}
                            isCompact={false}
                        />
                    {/if}
                </div>

                <!-- 카드 인디케이터 (하단) -->
                <div
                    class="absolute -bottom-8 left-0 right-0 flex justify-center"
                >
                    <div
                        class="text-sm text-white font-medium bg-black/50 px-4 py-1 rounded-full"
                    >
                        {currentIdx + 1} / {totalCards}
                    </div>
                </div>
            </div>

            <!-- 오른쪽 네비게이션 버튼 -->
            <button
                on:click={() => navigateModalCard("right")}
                disabled={currentIdx === totalCards - 1}
                class="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center transition-all hover:shadow-2xl hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <span class="text-gray-700 font-bold text-xl">→</span>
            </button>
        </div>
    </div>
{/if}

<style>
    .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 3px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
        background-color: transparent;
    }
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
    .fade-in {
        animation: fadeIn 0.3s ease-out forwards;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .scale-in {
        animation: scaleIn 0.3s ease-out forwards;
    }
    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
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
        0% {
            opacity: 0.2;
        }
        20% {
            opacity: 1;
        }
        100% {
            opacity: 0.2;
        }
    }
</style>