import { writable } from 'svelte';

const STORAGE_KEY = 'jeju-favorites';

function createFavoritesStore() {
    // Load from localStorage
    const loadFromStorage = () => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (e) {
            console.error('Failed to load favorites:', e);
        }
        return {
            bookmarkedThreads: [],
            likedCards: []
        };
    };

    const { subscribe, set, update } = writable(loadFromStorage());

    // Save to localStorage
    const saveToStorage = (state) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) {
            console.error('Failed to save favorites:', e);
        }
    };

    return {
        subscribe,
        
        // Bookmark thread
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

        isBookmarked: (threadId, currentState) => {
            return currentState.bookmarkedThreads.includes(threadId);
        },

        // Like card
        toggleLike: (cardId, card, threadId, threadTitle) => {
            update(state => {
                const existingIndex = state.likedCards.findIndex(c => c.id === cardId);
                let newLikedCards;
                
                if (existingIndex >= 0) {
                    // Remove like
                    newLikedCards = state.likedCards.filter(c => c.id !== cardId);
                } else {
                    // Add like
                    newLikedCards = [
                        ...state.likedCards,
                        {
                            id: cardId,
                            card,
                            threadId,
                            threadTitle,
                            timestamp: new Date().toISOString()
                        }
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

        isLiked: (cardId, currentState) => {
            return currentState.likedCards.some(c => c.id === cardId);
        },

        // Remove bookmark when thread is deleted
        removeBookmark: (threadId) => {
            update(state => {
                const newState = {
                    ...state,
                    bookmarkedThreads: state.bookmarkedThreads.filter(id => id !== threadId)
                };
                saveToStorage(newState);
                return newState;
            });
        },

        // Remove liked cards from deleted thread
        removeLikedCardsFromThread: (threadId) => {
            update(state => {
                const newState = {
                    ...state,
                    likedCards: state.likedCards.filter(c => c.threadId !== threadId)
                };
                saveToStorage(newState);
                return newState;
            });
        }
    };
}

export const favorites = createFavoritesStore();
