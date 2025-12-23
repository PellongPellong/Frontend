import { writable } from 'svelte/store';

export const ui = writable({
    loading: false,
    error: null
});
