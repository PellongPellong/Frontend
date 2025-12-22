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

{#if isModal}
    <!-- 모달 모드: 간소화된 구조 -->
    <div class="w-full h-full flex flex-col bg-white">
        <!-- 내부 컨텐츠 (스크롤 가능) -->
        <div class="flex-1 overflow-y-auto p-6 modal-scrollbar">
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
        {#if showFavorite}
            <div class="px-6 pb-6 pt-4 border-t border-gray-200 flex justify-center flex-shrink-0">
                <FavoriteButton 
                    {isLiked}
                    onClick={onFavoriteClick}
                    size="lg"
                />
            </div>
        {/if}
    </div>
{:else}
    <!-- 일반 모드: 기존 구조 -->
    <div class="relative">
        <div 
            class="w-[360px] h-[400px] flex flex-col p-6 bg-white border-2 border-gray-200 rounded-3xl shadow-lg transition-all duration-300 cursor-pointer overflow-visible relative {isActive ? 'scale-100' : 'scale-95'} {isHovered ? 'scale-105 shadow-2xl border-indigo-300' : ''}"
            on:click={onClick}
            on:mouseenter={onMouseEnter}
            on:mouseleave={onMouseLeave}
            role="button"
            tabindex="0"
        >
            <!-- 일반 모드: 우측 상단에 하트 버튼 -->
            {#if showFavorite}
                <div class="absolute top-3 right-3 z-10">
                    <FavoriteButton 
                        {isLiked}
                        onClick={onFavoriteClick}
                        size="sm"
                    />
                </div>
            {/if}

            <!-- 카드 내용 -->
            <div class="flex-1 overflow-hidden">
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
        </div>

        <!-- 클릭하여 자세히 보기 텍스트 (카드 외부, Compact 모드일 때만) -->
        {#if isCompact}
            <span class="block mt-[1.5px] text-center text-xs text-gray-500">
                클릭하여 자세히 보기
            </span>
        {/if}
    </div>
{/if}

<style>
    .modal-scrollbar::-webkit-scrollbar {
        width: 0px;
    }
    .modal-scrollbar {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
</style>