<script>
    import { onMount, tick } from "svelte";
    import ChatMessage from "../components/ChatMessage.svelte";
    import CardWrapper from "../components/cards/CardWrapper.svelte";
    import StatusCard from "../components/cards/StatusCard.svelte";
    import RecommendationCard from "../components/cards/RecommendationCard.svelte";
    import PlacesCard from "../components/cards/PlacesCard.svelte";
    import CouponCard from "../components/cards/CouponCard.svelte";
    import NavigationCard from "../components/cards/NavigationCard.svelte";
    import SearchBar from "../components/SearchBar.svelte";
    import FavoriteButton from "../components/FavoriteButton.svelte";
    import SkeletonLoader from "../components/SkeletonLoader.svelte";
    import { allSuggestions } from "../data/mockData.js";
    import { sendMessage as apiSendMessage } from "../lib/api.js";
    import { favorites } from "../stores/favorites.js";

    export let goTo;

    let sessionId = null;
    let messages = [];
    let userInput = "";
    let isLoading = false;
    let chatContainer;
    let currentCardIndex = {};
    let expandedCard = null;
    let expandedCardMobile = null;
    let hoveredCard = null;
    let isSidebarOpen = false;
    let chatHistory = [];

    let sidebarTab = "chats";
    let favoritesFilter = "all";
    let searchQuery = "";

    // 터치 스와이프 관련
    let touchStartX = 0;
    let touchEndX = 0;

    const STORAGE_KEY = "jeju-chat-history";
    const MAX_HISTORY = 20;

    function getRandomSuggestions(count = 3) {
        const shuffled = [...allSuggestions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    onMount(() => {
        loadChatHistory();
        messages = [
            {
                type: "text",
                role: "assistant",
                content:
                    "안녕하세요! 제주숙곡 AI 백록이입니다.\n많이 알려지지 않은 유니크한 제주 여행지를 추천해드릴게요.\n어느곳을 방문해보고 싶으신가요?",
                suggestions: getRandomSuggestions(3),
            },
        ];
    });

    function loadChatHistory() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) chatHistory = JSON.parse(saved);
        } catch (e) {
            console.error("Failed to load chat history:", e);
        }
    }

    function saveChatHistory() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(chatHistory));
        } catch (e) {
            console.error("Failed to save chat history:", e);
        }
    }

    function generateUniqueChatId() {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(2, 9);
        return `chat-${timestamp}-${random}`;
    }

    function createChatHistory(firstUserMessage) {
        const title =
            firstUserMessage.slice(0, 30) +
            (firstUserMessage.length > 30 ? "..." : "");
        const timestamp = new Date().toISOString();

        if (!sessionId) {
            sessionId = generateUniqueChatId();
        }

        const chatData = {
            id: sessionId,
            title,
            timestamp,
            messages: [...messages],
            cardIndex: { ...currentCardIndex },
        };

        chatHistory = [chatData, ...chatHistory];

        if (chatHistory.length > MAX_HISTORY) {
            chatHistory = chatHistory.slice(0, MAX_HISTORY);
        }

        saveChatHistory();
    }

    function updateChatHistory() {
        if (!sessionId) return;
        const existingIdx = chatHistory.findIndex((h) => h.id === sessionId);
        if (existingIdx >= 0) {
            chatHistory[existingIdx] = {
                ...chatHistory[existingIdx],
                messages: [...messages],
                cardIndex: { ...currentCardIndex },
                timestamp: new Date().toISOString(),
            };
            saveChatHistory();
        }
    }

    function deleteChat(chatId, event) {
        event.stopPropagation();
        favorites.removeThread(chatId);
        chatHistory = chatHistory.filter((h) => h.id !== chatId);
        saveChatHistory();
        if (sessionId === chatId) {
            startNewChat();
        }
    }

    function loadChat(chat) {
        sessionId = chat.id;
        messages = [...chat.messages];
        currentCardIndex = { ...chat.cardIndex };
        isSidebarOpen = false;
        sidebarTab = "chats";
        setTimeout(() => scrollToBottom(), 100);
    }

    function startNewChat() {
        sessionId = null;
        messages = [
            {
                type: "text",
                role: "assistant",
                content:
                    "안녕하세요! 제주숙곡 AI 백록이입니다.\n많이 알려지지 않은 유니크한 제주 여행지를 추천해드릴게요.\n어느곳을 방문해보고 싶으신가요?",
                suggestions: getRandomSuggestions(3),
            },
        ];
        currentCardIndex = {};
        isSidebarOpen = false;
    }

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        if (days === 0) return "오늘";
        if (days === 1) return "어제";
        if (days < 7) return `${days}일 전`;
        return date.toLocaleDateString("ko-KR", {
            month: "short",
            day: "numeric",
        });
    }

    async function sendMessage(text = userInput) {
        if (!text.trim() || isLoading) return;
        const trimmedText = text.trim();

        const isFirstMessage = messages.length === 1;

        messages = [
            ...messages,
            { type: "text", role: "user", content: trimmedText },
        ];
        userInput = "";
        isLoading = true;
        messages = [...messages, { type: "loading", role: "assistant" }];
        await tick();
        scrollToBottom();

        try {
            const response = await apiSendMessage(sessionId, trimmedText);
            if (response.sessionId) {
                sessionId = response.sessionId;
            }
            const newCards = response.cards;

            const messagesWithoutLoading = messages.slice(0, -1);
            const newMessageIdx = messagesWithoutLoading.length;
            currentCardIndex[newMessageIdx] = 0;

            messages = [
                ...messagesWithoutLoading,
                { type: "cards", role: "assistant", cards: newCards },
            ];

            if (isFirstMessage) {
                createChatHistory(trimmedText);
            } else {
                updateChatHistory();
            }
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

    function navigateModalCardMobile(direction) {
        if (!expandedCardMobile) return;
        const message = messages[expandedCardMobile.messageIdx];
        if (!message || !message.cards) return;

        const currentIdx = expandedCardMobile.cardIdx;
        const newIdx =
            direction === "left"
                ? Math.max(0, currentIdx - 1)
                : Math.min(message.cards.length - 1, currentIdx + 1);

        if (newIdx !== currentIdx) {
            expandedCardMobile = {
                messageIdx: expandedCardMobile.messageIdx,
                cardIdx: newIdx,
                card: message.cards[newIdx],
            };
            currentCardIndex[expandedCardMobile.messageIdx] = newIdx;
        }
    }

    function openCardModal(messageIdx, cardIdx, card) {
        if (window.innerWidth < 768) {
            expandedCardMobile = { messageIdx, cardIdx, card };
        } else {
            expandedCard = { messageIdx, cardIdx, card };
        }
    }

    function closeCardModal() {
        expandedCard = null;
    }

    function closeCardModalMobile() {
        expandedCardMobile = null;
    }

    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
        touchEndX = touchStartX;
    }

    function handleTouchMove(e) {
        touchEndX = e.touches[0].clientX;
    }

    function handleTouchEnd() {
        const diff = touchEndX - touchStartX;
        const threshold = 40;

        if (Math.abs(diff) > threshold) {
            if (diff < 0) {
                navigateModalCardMobile("right");
            } else {
                navigateModalCardMobile("left");
            }
        }

        touchStartX = 0;
        touchEndX = 0;
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

    function toggleBookmark(chatId) {
        favorites.toggleBookmark(chatId);
    }

    function toggleLike(messageIdx, cardIdx) {
        const message = messages[messageIdx];
        if (!message || !message.cards) return;
        const card = message.cards[cardIdx];
        const cardId = `${sessionId}-${messageIdx}-${cardIdx}`;
        favorites.toggleLike(cardId, card, sessionId);
    }

    $: filteredChats = chatHistory.filter((chat) => {
        if (!searchQuery) return true;
        return chat.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    $: filteredFavorites = (() => {
        let items = [];

        if (favoritesFilter === "all" || favoritesFilter === "bookmarks") {
            const bookmarkedChats = chatHistory
                .filter((chat) =>
                    $favorites.bookmarkedThreads.includes(chat.id),
                )
                .map((chat) => ({ type: "bookmark", data: chat }));
            items = [...items, ...bookmarkedChats];
        }

        if (favoritesFilter === "all" || favoritesFilter === "likes") {
            const likedCards = $favorites.likedCards.map((item) => ({
                type: "like",
                data: item,
            }));
            items = [...items, ...likedCards];
        }

        if (searchQuery) {
            items = items.filter((item) => {
                if (item.type === "bookmark") {
                    return item.data.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase());
                } else {
                    const cardText = JSON.stringify(
                        item.data.card,
                    ).toLowerCase();
                    return cardText.includes(searchQuery.toLowerCase());
                }
            });
        }

        return items.sort((a, b) => {
            const timeA =
                a.type === "bookmark" ? a.data.timestamp : a.data.timestamp;
            const timeB =
                b.type === "bookmark" ? b.data.timestamp : b.data.timestamp;
            return new Date(timeB) - new Date(timeA);
        });
    })();

    function loadLikedCard(item) {
        const chat = chatHistory.find((c) => c.id === item.threadId);
        if (chat) {
            loadChat(chat);
        }
    }

    $: isBookmarked = sessionId
        ? $favorites.bookmarkedThreads.includes(sessionId)
        : false;
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="flex h-screen w-full bg-white">
    <aside
        class="{isSidebarOpen
            ? 'translate-x-0'
            : '-translate-x-full md:translate-x-0'} fixed md:static inset-y-0 left-0 z-40 w-[250px] flex-col bg-[#2A2A2A] text-[#E5E5E5] transition-transform duration-300 flex"
    >
        <div class="p-4">
            <h1 class="text-xl font-bold text-white flex items-center gap-2">
                <img
                    src="/images/mascot.png"
                    alt="백록이"
                    class="w-8 h-8 object-contain"
                />
                <span>제주숙곡 AI</span>
            </h1>
            <button
                class="mt-4 w-full rounded-lg border border-[#444] py-2 px-4 text-left text-sm hover:bg-[#333] transition-colors"
                on:click={startNewChat}>+ 새 대화</button
            >
        </div>

        <div class="px-4 flex gap-2 mb-2">
            <button
                class="flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors {sidebarTab ===
                'chats'
                    ? 'bg-[#444] text-white'
                    : 'text-gray-400 hover:text-white hover:bg-[#333]'}"
                on:click={() => (sidebarTab = "chats")}
            >
                🏠 채팅
            </button>
            <button
                class="flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors {sidebarTab ===
                'favorites'
                    ? 'bg-[#444] text-white'
                    : 'text-gray-400 hover:text-white hover:bg-[#333]'}"
                on:click={() => (sidebarTab = "favorites")}
            >
                ⭐ Favorites
            </button>
        </div>

        <div class="px-4 mb-2">
            <SearchBar
                bind:value={searchQuery}
                placeholder={sidebarTab === "chats"
                    ? "채팅 검색..."
                    : "Favorites 검색..."}
                onClear={() => (searchQuery = "")}
            />
        </div>

        {#if sidebarTab === "favorites"}
            <div class="px-4 mb-2 flex gap-1">
                <button
                    class="flex-1 py-1 px-2 rounded text-xs transition-colors {favoritesFilter ===
                    'all'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-[#333] text-gray-400 hover:text-white'}"
                    on:click={() => (favoritesFilter = "all")}
                >
                    모두
                </button>
                <button
                    class="flex-1 py-1 px-2 rounded text-xs transition-colors {favoritesFilter ===
                    'bookmarks'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-[#333] text-gray-400 hover:text-white'}"
                    on:click={() => (favoritesFilter = "bookmarks")}
                >
                    북마크
                </button>
                <button
                    class="flex-1 py-1 px-2 rounded text-xs transition-colors {favoritesFilter ===
                    'likes'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-[#333] text-gray-400 hover:text-white'}"
                    on:click={() => (favoritesFilter = "likes")}
                >
                    좋아요
                </button>
            </div>
        {/if}

        <nav class="flex-grow overflow-y-auto px-2 space-y-1 custom-scrollbar">
            {#if sidebarTab === "chats"}
                {#each filteredChats as chat (chat.id)}
                    <div class="relative group">
                        <button
                            class="w-full text-left rounded-lg p-3 pr-12 text-sm hover:bg-[#333] transition-colors {sessionId ===
                            chat.id
                                ? 'bg-[#333]'
                                : ''}"
                            on:click={() => loadChat(chat)}
                        >
                            <div class="font-medium text-white truncate">
                                {chat.title}
                            </div>
                            <div class="text-xs text-gray-400 mt-1">
                                {formatDate(chat.timestamp)}
                            </div>
                        </button>
                        <div
                            class="absolute right-0 top-0 bottom-0 flex items-center"
                        >
                            <button
                                class="w-12 h-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-red-500/20 transition-all rounded-r-lg"
                                on:click={(e) => deleteChat(chat.id, e)}
                                title="삭제"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 text-red-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                {/each}
            {:else}
                {#each filteredFavorites as item (item.type === "bookmark" ? item.data.id : item.data.id)}
                    {#if item.type === "bookmark"}
                        <div class="relative group">
                            <button
                                class="w-full text-left rounded-lg p-3 text-sm hover:bg-[#333] transition-colors flex items-start gap-2"
                                on:click={() => loadChat(item.data)}
                            >
                                <span
                                    class="text-yellow-400 text-sm flex-shrink-0"
                                    >📌</span
                                >
                                <div class="flex-1 min-w-0">
                                    <div
                                        class="font-medium text-white truncate"
                                    >
                                        {item.data.title}
                                    </div>
                                    <div class="text-xs text-gray-400 mt-1">
                                        {formatDate(item.data.timestamp)}
                                    </div>
                                </div>
                            </button>
                        </div>
                    {:else}
                        <div class="relative group">
                            <button
                                class="w-full text-left rounded-lg p-3 text-sm hover:bg-[#333] transition-colors flex items-start gap-2"
                                on:click={() => loadLikedCard(item.data)}
                            >
                                <span class="text-red-400 text-sm flex-shrink-0"
                                    >❤️</span
                                >
                                <div class="flex-1 min-w-0">
                                    <div
                                        class="font-medium text-white truncate"
                                    >
                                        {item.data.card.title || "카드"}
                                    </div>
                                    <div class="text-xs text-gray-400 mt-1">
                                        {formatDate(item.data.timestamp)}
                                    </div>
                                </</div>
                            </button>
                        </div>
                    {/if}
                {/each}
            {/if}
        </nav>

        <div class="p-2 border-t border-[#444]">
            <button
                class="flex items-center gap-3 rounded-lg p-3 text-sm hover:bg-[#333] transition-colors w-full"
                ><span>⚙️</span><span>설정</span></button
            >
        </div>
    </aside>

    {#if isSidebarOpen}
        <div
            class="fixed inset-0 bg-black/50 z-30 md:hidden"
            on:click={() => (isSidebarOpen = false)}
        ></div>
    {/if}

    <main class="flex flex-1 flex-col h-full relative">
        <header
            class="flex h-[60px] items-center justify-between border-b border-[#E5E5E5] bg-white px-4 flex-shrink-0"
        >
            <button
                class="md:hidden"
                on:click={() => (isSidebarOpen = !isSidebarOpen)}
                ><span class="text-2xl">☰</span></button
            >

            <div class="flex-1 flex items-center justify-center">
                <div
                    class="mx-auto max-w-[800px] w-full flex items-center justify-between px-4"
                >
                    <div></div>
                    <h2
                        class="text-lg font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent"
                    >
                        제주 여행 AI 어시스턴트
                    </h2>
                    <!-- PC에서만 표시되는 북마크 버튼 -->
                    <button
                        class="hidden md:block p-2 rounded-lg hover:bg-gray-100 transition-colors {sessionId
                            ? ''
                            : 'opacity-50 cursor-not-allowed'}"
                        on:click={() => sessionId && toggleBookmark(sessionId)}
                        disabled={!sessionId}
                        title={isBookmarked ? "북마크 해제" : "북마크"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 transition-colors {isBookmarked
                                ? 'text-yellow-400'
                                : 'text-gray-400'}"
                            fill={isBookmarked ? "currentColor" : "none"}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="md:hidden"></div>
        </header>

        <!-- 모바일용 고정 북마크 버튼 -->
        <button
            class="md:hidden fixed top-[76px] right-4 z-30 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all {sessionId
                ? ''
                : 'opacity-50 cursor-not-allowed'}"
            on:click={() => sessionId && toggleBookmark(sessionId)}
            disabled={!sessionId}
            title={isBookmarked ? "북마크 해제" : "북마크"}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 transition-colors {isBookmarked
                    ? 'text-yellow-400'
                    : 'text-gray-400'}"
                fill={isBookmarked ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
            </svg>
        </button>

        <div
            bind:this={chatContainer}
            class="flex-1 overflow-y-auto custom-scrollbar"
        >
            <div class="mx-auto max-w-[800px] p-5 pb-3 md:py-10 space-y-6">
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
                            <SkeletonLoader type="card" />
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
                                        {@const cardId = `${sessionId}-${i}-${cardIdx}`}
                                        {@const isLiked =
                                            $favorites.likedCards.some(
                                                (item) => item.id === cardId,
                                            )}

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
                                                onClick={() => {
                                                    currentCardIndex[i] =
                                                        cardIdx;
                                                    openCardModal(
                                                        i,
                                                        cardIdx,
                                                        card,
                                                    );
                                                }}
                                                onMouseEnter={() =>
                                                    (hoveredCard = `${i}-${cardIdx}`)}
                                                onMouseLeave={() =>
                                                    (hoveredCard = null)}
                                                showFavorite={true}
                                                {isLiked}
                                                onFavoriteClick={() =>
                                                    toggleLike(i, cardIdx)}
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
            class="bg-white p-5 pt-3 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex-shrink-0"
        >
            <div class="mx-auto max-w-[800px] relative">
                {#if isLoading}<div
                        class="absolute top-0 left-0 right-0 -mt-8 text-center"
                    >
                        <span class="text-sm text-gray-500"
                            >AI가 응답하는 중입니다...</span
                        >
                    </div>{/if}

                <div
                    class="flex rounded-xl border {isLoading
                        ? 'border-gray-300 bg-gray-50'
                        : 'border-[#E0E0E0] bg-white'} focus-within:ring-2 focus-within:ring-indigo-500/50 focus-within:border-indigo-500 transition"
                >
                    <textarea
                        bind:value={userInput}
                        on:keydown={handleKeyDown}
                        class="flex-1 resize-none bg-transparent py-3 pl-4 pr-2 text-base outline-none {isLoading
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-gray-900'}"
                        placeholder={isLoading
                            ? "응답을 기다리는 중..."
                            : "어디로 가고싶으신가요?"}
                        rows="1"
                        style="max-height: 120px;"
                        disabled={isLoading}
                    />
                    <button
                        on:click={() => sendMessage()}
                        disabled={!userInput.trim() || isLoading}
                        class="w-14 flex items-center justify-center transition-all duration-200 rounded-r-xl {userInput.trim() &&
                        !isLoading
                            ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 cursor-pointer'
                            : 'bg-[#E0E0E0] cursor-not-allowed'} text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <polyline points="9 10 4 15 9 20" />
                            <path d="M20 4v7a4 4 0 0 1-4 4H4" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </main>
</div>

<!-- PC용 모달 (기존) -->
{#if expandedCard}
    {@const message = messages[expandedCard.messageIdx]}
    {@const totalCards = message?.cards?.length || 0}
    {@const currentIdx = expandedCard.cardIdx}
    {@const cardId = `${sessionId}-${expandedCard.messageIdx}-${expandedCard.cardIdx}`}
    {@const isLiked = $favorites.likedCards.some((item) => item.id === cardId)}

    <div
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 fade-in"
        on:click={closeCardModal}
    >
        <div class="relative flex items-center gap-5" on:click|stopPropagation>
            <button
                on:click={() => navigateModalCard("left")}
                disabled={currentIdx === 0}
                class="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center transition-all hover:shadow-2xl hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <span class="text-gray-700 font-bold text-xl">←</span>
            </button>

            <div class="relative flex flex-col items-center">
                <button
                    on:click={closeCardModal}
                    class="absolute -top-12 right-0 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
                >
                    <span class="text-2xl text-gray-600 hover:text-gray-900"
                        >×</span
                    >
                </button>

                <div
                    class="w-[500px] h-[500px] bg-white border-2 border-gray-200 rounded-3xl shadow-2xl scale-in overflow-hidden"
                >
                    <CardWrapper
                        card={expandedCard.card}
                        isCompact={false}
                        isModal={true}
                        showFavorite={true}
                        {isLiked}
                        onFavoriteClick={() =>
                            toggleLike(
                                expandedCard.messageIdx,
                                expandedCard.cardIdx,
                            )}
                    />
                </div>

                <div class="mt-4">
                    <div
                        class="text-sm text-white font-medium bg-black/50 px-4 py-2 rounded-full"
                    >
                        {currentIdx + 1} / {totalCards}
                    </div>
                </div>
            </div>

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

<!-- 모바일용 모달 (신규) -->
{#if expandedCardMobile}
    {@const message = messages[expandedCardMobile.messageIdx]}
    {@const totalCards = message?.cards?.length || 0}
    {@const currentIdx = expandedCardMobile.cardIdx}
    {@const cardId = `${sessionId}-${expandedCardMobile.messageIdx}-${expandedCardMobile.cardIdx}`}
    {@const isLiked = $favorites.likedCards.some((item) => item.id === cardId)}

    <div
        class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 fade-in"
        on:click={closeCardModalMobile}
    >
        <div
            class="relative flex-1 flex flex-col items-center w-full max-w-[520px]"
            on:click|stopPropagation
        >
            <button
                on:click={closeCardModalMobile}
                class="absolute -top-10 right-2 z-10 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
            >
                <span class="text-xl text-gray-600 hover:text-gray-900">×</span>
            </button>

            <div
                class="w-full h-[80vh] bg-white border-2 border-gray-200 rounded-3xl shadow-2xl scale-in overflow-hidden relative"
                on:touchstart={handleTouchStart}
                on:touchmove={handleTouchMove}
                on:touchend={handleTouchEnd}
            >
                <div class="absolute inset-0 overflow-hidden">
                    <CardWrapper
                        card={expandedCardMobile.card}
                        isCompact={false}
                        isModal={true}
                        showFavorite={true}
                        {isLiked}
                        onFavoriteClick={() =>
                            toggleLike(
                                expandedCardMobile.messageIdx,
                                expandedCardMobile.cardIdx,
                            )}
                    />
                </div>
            </div>

            <div class="mt-3">
                <div
                    class="text-xs text-white font-medium bg-black/60 px-3 py-1.5 rounded-full"
                >
                    {currentIdx + 1} / {totalCards}
                </div>
            </div>

            <div class="mt-2 flex gap-4">
                <button
                    on:click={() => navigateModalCardMobile("left")}
                    disabled={currentIdx === 0}
                    class="px-5 py-2 rounded-full bg-white/90 text-sm font-medium shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    이전
                </button>
                <button
                    on:click={() => navigateModalCardMobile("right")}
                    disabled={currentIdx === totalCards - 1}
                    class="px-5 py-2 rounded-full bg-white/90 text-sm font-medium shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    다음
                </button>
            </div>
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

    .modal-scrollbar::-webkit-scrollbar {
        width: 0px;
    }
    .modal-scrollbar {
        scrollbar-width: none;
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
</style>