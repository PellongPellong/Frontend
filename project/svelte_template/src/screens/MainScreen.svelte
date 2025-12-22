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
    import { allSuggestions } from "../constants/suggestions.js";
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

    function deleteBookmark(chatId, event) {
        event.stopPropagation();
        favorites.toggleBookmark(chatId);
    }

    function deleteLike(cardId, event) {
        event.stopPropagation();
        favorites.removeLike(cardId);
    }

    function loadChat(chat) {
        sessionId = chat.id;
        messages = [...chat.messages];
        currentCardIndex = { ...chat.cardIndex };
        isSidebarOpen = false;
        sidebarTab = "chats";
        setTimeout(() => {
            if (chatContainer) {
                chatContainer.scrollTop = 0;
            }
        }, 100);
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
        const totalCards = message.cards.length;

        let newIdx;
        if (direction === "left") {
            newIdx = currentIdx === 0 ? totalCards - 1 : currentIdx - 1;
        } else {
            newIdx = currentIdx === totalCards - 1 ? 0 : currentIdx + 1;
        }

        currentCardIndex[messageIdx] = newIdx;
    }

    function navigateModalCard(direction) {
        if (!expandedCard) return;
        const message = messages[expandedCard.messageIdx];
        if (!message || !message.cards) return;

        const currentIdx = expandedCard.cardIdx;
        const totalCards = message.cards.length;

        let newIdx;
        if (direction === "left") {
            newIdx = currentIdx === 0 ? totalCards - 1 : currentIdx - 1;
        } else {
            newIdx = currentIdx === totalCards - 1 ? 0 : currentIdx + 1;
        }

        expandedCard = {
            messageIdx: expandedCard.messageIdx,
            cardIdx: newIdx,
            card: message.cards[newIdx],
        };
        currentCardIndex[expandedCard.messageIdx] = newIdx;
    }

    function navigateModalCardMobile(direction) {
        if (!expandedCardMobile) return;
        const message = messages[expandedCardMobile.messageIdx];
        if (!message || !message.cards) return;

        const currentIdx = expandedCardMobile.cardIdx;
        const totalCards = message.cards.length;

        let newIdx;
        if (direction === "left") {
            newIdx = currentIdx === 0 ? totalCards - 1 : currentIdx - 1;
        } else {
            newIdx = currentIdx === totalCards - 1 ? 0 : currentIdx + 1;
        }

        expandedCardMobile = {
            messageIdx: expandedCardMobile.messageIdx,
            cardIdx: newIdx,
            card: message.cards[newIdx],
        };
        currentCardIndex[expandedCardMobile.messageIdx] = newIdx;
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

    function getCardDisplayTitle(card, messageCards) {
        // status와 recommendation 카드에서 locationName 추출
        const statusCard = messageCards?.find((c) => c.type === "status");
        const recommendCard = messageCards?.find(
            (c) => c.type === "recommendation",
        );

        const statusName = statusCard?.locationName || "여행지";
        const recommendationName = recommendCard?.locationName || "추천 지역";

        if (card.type === "status") {
            // "성산의 혼잡도"
            return `${statusName}의 혼잡도`;
        } else if (card.type === "recommendation") {
            // "추천 지역 김녕"
            return `${recommendationName}에 가보셔요`;
        } else if (card.type === "places") {
            // "김녕 관련 주변 명소"
            return `${recommendationName} 관련 주변 명소`;
        } else if (card.type === "navigation") {
            // "성산에서 김녕까지 가는 길"
            return `${statusName}에서 ${recommendationName}까지 가는 길`;
        } else if (card.type === "coupon") {
            // "김녕 주변의 사용 가능 쿠폰"
            return `${recommendationName} 주변의 사용 가능 쿠폰`;
        }
        return "카드";
    }

    function getRecommendationFromMessage(messageCards) {
        const recommendCard = messageCards?.find(
            (c) => c.type === "recommendation",
        );
        return recommendCard?.locationName || "이 지역";
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
        if (!chat) return;

        // cardId는 "sessionId-messageIdx-cardIdx" 형식
        const parts = item.id.split("-");
        // sessionId는 "chat-timestamp-random" 형식이므로 마지막 2개 요소가 인덱스
        const cardIdx = parseInt(parts[parts.length - 1]);
        const messageIdx = parseInt(parts[parts.length - 2]);

        // 대화 로드
        sessionId = chat.id;
        messages = [...chat.messages];
        currentCardIndex = { ...chat.cardIndex };

        // 해당 카드로 네비게이션
        if (!isNaN(messageIdx) && !isNaN(cardIdx)) {
            currentCardIndex[messageIdx] = cardIdx;
        }

        isSidebarOpen = false;

        // 해당 메시지로 스크롤
        setTimeout(() => {
            if (chatContainer) {
                const messageElements =
                    chatContainer.querySelectorAll(".fade-in-up");
                if (messageElements[messageIdx]) {
                    messageElements[messageIdx].scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    });
                }
            }
        }, 100);
    }

    $: isBookmarked = sessionId
        ? $favorites.bookmarkedThreads.includes(sessionId)
        : false;
</script>

<!-- HTML 부분은 다음 커밋에서 수정 -->