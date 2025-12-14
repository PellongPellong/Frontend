export function calculateScore(place, prefs) {
    let score = 50; // Base score

    // Mood Match (+20)
    // place.category is mapped to mood? Or check tags?
    // design.md: +20 if place.category matches prefs.mood
    if (place.category === prefs.mood) {
        score += 20;
    }

    // Food Match (+10)
    // Check if prefs.food is in place.tags
    if (prefs.food && place.tags.includes(prefs.food)) {
        score += 10;
    }

    // Avoid Conflict (-30)
    // if any avoid condition matches tags
    // check overlap between prefs.avoid and place.tags?
    // Or tags could contain 'crowd' etc.
    // design.md: "prefs.avoid includes 'crowd' AND place.congestion === 'high'" 
    if (prefs.avoid && prefs.avoid.length > 0) {
        let conflict = false;
        if (prefs.avoid.includes('crowd') && place.congestion === 'high') conflict = true;
        if (prefs.avoid.includes('walking') && place.tags.includes('walking')) conflict = true; // wait, 'walking' tag means requires walking? 
        // Let's assume tags indicate negative aspects if they match avoid criteria directly OR special logic.
        // Simplifying: if place.tags includes any avoid string? 
        // Design doc example: avoid='crowd' & congestion='high'. 
        // And others? 'cost'? 'weather'?
        // I'll stick to the explicit example for crowd.
        // For others, check if tag exists. e.g. if avoiding 'walking' and place has tag 'walk'.

        if (prefs.avoid.includes('walking') && (place.tags.includes('walk') || place.tags.includes('hiking'))) conflict = true;

        if (conflict) {
            score -= 30;
        }
    }

    // Congestion Bonus
    if (place.congestion === 'low') score += 15;
    else if (place.congestion === 'medium') score += 5;
    else if (place.congestion === 'high') score -= 20;

    return score;
}

export function getTopRecommendations(places, prefs, limit = 5) {
    const scoredPlaces = places.map(place => ({
        ...place,
        score: calculateScore(place, prefs)
    }));

    scoredPlaces.sort((a, b) => b.score - a.score);

    return scoredPlaces.slice(0, limit);
}
