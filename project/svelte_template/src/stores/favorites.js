import { writable } from 'svelte/store';

const FAVORITES_KEY = 'jeju-favorites';

function createFavoritesStore() {
    // localStorage에서 초기 데이터 로드
    const loadFromStorage = () => {
        try {
            const saved = localStorage.getItem(FAVORITES_KEY);
            return saved ? JSON.parse(saved) : { bookmarkedThreads: [], likedCards: [] };
        } catch (e) {
            console.error('Failed to load favorites:', e);
            return { bookmarkedThreads: [], likedCards: [] };
        }
    };

    const { subscribe, update } = writable(loadFromStorage());

    // localStorage에 저장
    const saveToStorage = (data) => {
        try {
            localStorage.setItem(FAVORITES_KEY, JSON.stringify(data));
        } catch (e) {
            console.error('Failed to save favorites:', e);
        }
    };

    return {
        subscribe,

        // 스레드 북마크 토글
        toggleBookmark: (threadId) => {
            update(state => {
                const isBookmarked = state.bookmarkedThreads.includes(threadId);
                const newBookmarks = isBookmarked
                    ? state.bookmarkedThreads.filter(id => id !== threadId)
                    : [...state.bookmarkedThreads, threadId];
                
                const newState = { ...state, bookmarkedThreads: newBookmarks };
                saveToStorage(newState);
                return newState;
            });
        },

        // 카드 좋아요 토글
        toggleLike: (cardId, cardData, threadId) => {
            update(state => {
                const existingIndex = state.likedCards.findIndex(item => item.id === cardId);
                let newLikedCards;

                if (existingIndex >= 0) {
                    // 이미 좋아요한 카드면 제거
                    newLikedCards = state.likedCards.filter(item => item.id !== cardId);
                } else {
                    // 새로 좋아요
                    newLikedCards = [
                        {
                            id: cardId,
                            card: cardData,
                            timestamp: new Date().toISOString(),
                            threadId: threadId
                        },
                        ...state.likedCards
                    ];
                }

                const newState = { ...state, likedCards: newLikedCards };
                saveToStorage(newState);
                return newState;
            });
        },

        // 북마크 확인
        isBookmarked: (threadId, currentState) => {
            return currentState.bookmarkedThreads.includes(threadId);
        },

        // 좋아요 확인
        isLiked: (cardId, currentState) => {
            return currentState.likedCards.some(item => item.id === cardId);
        },

        // 스레드 삭제 시 관련 데이터 정리
        removeThread: (threadId) => {
            update(state => {
                const newState = {
                    bookmarkedThreads: state.bookmarkedThreads.filter(id => id !== threadId),
                    likedCards: state.likedCards.filter(item => item.threadId !== threadId)
                };
                saveToStorage(newState);
                return newState;
            });
        }
    };
}

export const favorites = createFavoritesStore();
