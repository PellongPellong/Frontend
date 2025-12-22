import { writable } from 'svelte/store';

const FAVORITES_KEY = 'jeju-favorites';

function createFavoritesStore() {
    const defaultState = {
        bookmarkedThreads: [],
        likedCards: []
    };

    // localStorage에서 초기 데이터 로드
    const loadFromStorage = () => {
        try {
            const saved = localStorage.getItem(FAVORITES_KEY);
            return saved ? JSON.parse(saved) : defaultState;
        } catch (e) {
            console.error('Failed to load favorites:', e);
            return defaultState;
        }
    };

    const { subscribe, set, update } = writable(loadFromStorage());

    // localStorage에 저장하는 헬퍼 함수
    const saveToStorage = (state) => {
        try {
            localStorage.setItem(FAVORITES_KEY, JSON.stringify(state));
        } catch (e) {
            console.error('Failed to save favorites:', e);
        }
    };

    return {
        subscribe,
        
        // 북마크 토글
        toggleBookmark: (threadId) => {
            update(state => {
                const isBookmarked = state.bookmarkedThreads.includes(threadId);
                const newState = {
                    ...state,
                    bookmarkedThreads: isBookmarked
                        ? state.bookmarkedThreads.filter(id => id !== threadId)
                        : [...state.bookmarkedThreads, threadId]
                };
                saveToStorage(newState);
                return newState;
            });
        },

        // 좋아요 토글
        toggleLike: (cardId, card, threadId) => {
            update(state => {
                const existingIdx = state.likedCards.findIndex(item => item.id === cardId);
                let newLikedCards;
                
                if (existingIdx >= 0) {
                    // 이미 좋아요한 카드면 제거
                    newLikedCards = state.likedCards.filter(item => item.id !== cardId);
                } else {
                    // 새로 좋아요
                    newLikedCards = [
                        {
                            id: cardId,
                            card: { ...card },
                            threadId,
                            timestamp: new Date().toISOString()
                        },
                        ...state.likedCards
                    ];
                }

                const newState = {
                    ...state,
                    likedCards: newLikedCards
                };
                saveToStorage(newState);
                return newState;
            });
        },

        // 특정 스레드 제거 시 관련 좋아요도 제거
        removeThread: (threadId) => {
            update(state => {
                const newState = {
                    bookmarkedThreads: state.bookmarkedThreads.filter(id => id !== threadId),
                    likedCards: state.likedCards.filter(item => item.threadId !== threadId)
                };
                saveToStorage(newState);
                return newState;
            });
        },

        // 전체 초기화
        reset: () => {
            set(defaultState);
            saveToStorage(defaultState);
        }
    };
}

export const favorites = createFavoritesStore();
