<script>
    import StatusCard from './StatusCard.svelte';
    import RecommendationCard from './RecommendationCard.svelte';
    import PlacesCard from './PlacesCard.svelte';
    import CouponCard from './CouponCard.svelte';
    import NavigationCard from './NavigationCard.svelte';
    import FavoriteButton from '../FavoriteButton.svelte';
    
    export let card;
    export let isCompact = true;
    export let isActive = false;
    export let isHovered = false;
    export let onClick = () => {};
    export let onMouseEnter = () => {};
    export let onMouseLeave = () => {};
    
    // Favorite props
    export let showFavorite = false;
    export let isLiked = false;
    export let onFavoriteClick = () => {};
    export let isModal = false; // 모달 모드 여부
</script>

<div 
    class="{isModal ? 'w-full h-full' : 'w-[360px] h-[400px]'} flex flex-col p-6 bg-white border-2 border-gray-200 rounded-3xl shadow-lg transition-all duration-300 {isModal ? '' : 'cursor-pointer'} overflow-visible relative {isActive && !isModal ? 'scale-100' : !isModal ? 'scale-95' : ''} {isHovered && !isModal ? 'scale-105 shadow-2xl border-indigo-300' : ''}"
    on:click={onClick}
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    role="button"
    tabindex="0"
>
    <!-- 일반 모드: 우측 상단에 하트 버튼 -->
    {#if showFavorite && !isModal}
        <div class="absolute top-3 right-3 z-10">
            <FavoriteButton 
                {isLiked}
                onClick={onFavoriteClick}
                size="sm"
            />
        </div>
    {/if}

    <!-- 카드 내용 -->
    <div class="{isModal ? 'flex-1 overflow-y-auto' : ''}">
        {#if card.type === 'status'}
            <StatusCard {card} {isCompact} />
        {:else if card.type === 'recommendation'}
            <RecommendationCard {card} {isCompact} />
        {:else if card.type === 'places'}
            <PlacesCard {card} {isCompact} />
        {:else if card.type === 'coupon'}
            <CouponCard {card} {isCompact} />
        {:else if card.type === 'navigation'}
            <NavigationCard {card} {isCompact} />
        {/if}
    </div>

    <!-- 모달 모드: 하단에 하트 버튼 -->
    {#if showFavorite && isModal}
        <div class="mt-4 pt-4 border-t border-gray-200 flex justify-center">
            <FavoriteButton 
                {isLiked}
                onClick={onFavoriteClick}
                size="lg"
            />
        </div>
    {/if}
</div>