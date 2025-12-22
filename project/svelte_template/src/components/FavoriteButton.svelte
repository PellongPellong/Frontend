<script>
    export let isLiked = false;
    export let onClick = () => {};
    export let size = 'md'; // 'sm' | 'md' | 'lg'

    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12'
    };

    const iconSizes = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6'
    };

    function handleClick(e) {
        e.stopPropagation();
        onClick();
    }
</script>

<button
    class="{sizeClasses[size]} flex items-center justify-center rounded-full transition-all duration-300 {isLiked
        ? 'bg-red-500 hover:bg-red-600 scale-110'
        : 'bg-white/80 hover:bg-white backdrop-blur-sm border border-gray-200 hover:border-red-300'} shadow-lg hover:shadow-xl"
    on:click={handleClick}
    title={isLiked ? '좋아요 취소' : '좋아요'}
>
    <svg
        class="{iconSizes[size]} transition-all duration-300 {isLiked ? 'text-white' : 'text-gray-400 hover:text-red-500'}"
        fill={isLiked ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
    </svg>
</button>

<style>
    button {
        animation: fadeIn 0.2s ease-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    button:active {
        transform: scale(0.95);
    }
</style>
