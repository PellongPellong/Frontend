<script>
    import { favorites } from '../stores/favorites.js';
    
    export let cardId;
    export let card;
    export let threadId;
    export let threadTitle;
    export let compact = false;
    
    $: isLiked = favorites.isLiked(cardId, $favorites);
    
    function handleClick(e) {
        e.stopPropagation();
        favorites.toggleLike(cardId, card, threadId, threadTitle);
    }
</script>

<button
    on:click={handleClick}
    class="{compact ? 'w-8 h-8' : 'w-10 h-10'} flex items-center justify-center rounded-full transition-all duration-200 {isLiked ? 'bg-red-50 hover:bg-red-100' : 'bg-gray-50 hover:bg-gray-100'}"
    title={isLiked ? '좋아요 취소' : '좋아요'}
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="{compact ? 'w-4 h-4' : 'w-5 h-5'} transition-colors duration-200"
        fill={isLiked ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        class:text-red-500={isLiked}
        class:text-gray-400={!isLiked}
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
    </svg>
</button>
