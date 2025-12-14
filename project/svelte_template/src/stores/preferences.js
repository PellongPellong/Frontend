import { writable } from 'svelte/store';

const initialState = {
    transport: null,    // 'walk' | 'public' | 'car' | 'bike'
    companion: null,    // 'solo' | 'couple' | 'family' | 'friends'
    timeOfDay: null,    // 'morning' | 'afternoon' | 'evening' | 'night'
    mood: null,         // 'nature' | 'culture' | 'activity' | 'relax'
    avoid: [],          // ['crowd', 'walking', 'cost', 'weather']
    intensity: null,    // 'light' | 'moderate' | 'active'
    food: null          // 'seafood' | 'meat' | 'cafe' | 'traditional'
};

function createPreferences() {
    const { subscribe, set, update } = writable({ ...initialState });

    return {
        subscribe,
        set,
        update,
        reset: () => set({ ...initialState }),
        setField: (field, value) => update(s => ({ ...s, [field]: value })),
        toggleAvoid: (value) => update(s => {
            const exists = s.avoid.includes(value);
            return {
                ...s,
                avoid: exists ? s.avoid.filter(i => i !== value) : [...s.avoid, value]
            };
        })
    };
}

export const preferences = createPreferences();
