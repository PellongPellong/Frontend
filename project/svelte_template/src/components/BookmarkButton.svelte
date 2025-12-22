<script>
    import { favorites } from '../stores/favorites.js';
    
    export let threadId;
    export let compact = false;
    
    $: isBookmarked = favorites.isBookmarked(threadId, $favorites);
    
    function handleClick(e) {
        e.stopPropagation();
        favorites.toggleBookmark(threadId);
    }
</script>

<button
    on:click={handleClick}
    class="flex items-center justify-center rounded-lg transition-all duration-200 {isBookmarked ? 'text-yellow-500 hover:text-yellow-600' : 'text-gray-400 hover:text-gray-600'}"
    title={isBookmarked ? '북마크 해제' : '북마크'}
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="{compact ? 'w-4 h-4' : 'w-5 h-5'}"
        fill={isBookmarked ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
    </svg>
</button>
