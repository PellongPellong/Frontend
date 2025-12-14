import { mockPlaces } from './mock.js';
import { getTopRecommendations } from './scoring.js';

const API_ENDPOINT = '/api/v1/recommendations';
const TIMEOUT_MS = 1500;

async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 8000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });

    clearTimeout(id);

    return response;
}

export async function getRecommendations(prefs) {
    try {
        // Attempt API call
        const response = await fetchWithTimeout(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ preferences: prefs }),
            timeout: TIMEOUT_MS
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        return { success: true, data: data.places };

    } catch (e) {
        console.warn('Backend unavailable, falling back to local rule engine:', e);
        // Fallback
        const results = getTopRecommendations(mockPlaces, prefs);
        return { success: false, data: results, fallback: true };
    }
}
