<script>
    import StatusCard from "./StatusCard.svelte";
    import RecommendationCard from "./RecommendationCard.svelte";
    import PlacesCard from "./PlacesCard.svelte";
    import CouponCard from "./CouponCard.svelte";
    import NavigationCard from "./NavigationCard.svelte";
    import FavoriteButton from "../FavoriteButton.svelte";
    import SkeletonCard from "./SkeletonCard.svelte";

    export let card = null;
    export let isCompact = true;
    export let isActive = false;
    export let isHovered = false;
    export let onClick = () => {};
    export let onMouseEnter = () => {};
    export let onMouseLeave = () => {};
    export let onClose = () => {}; // 모달 닫기 함수

    // Favorite props
    export let showFavorite = false;
    export let isLiked = false;
    export let onFavoriteClick = () => {};
    export let isModal = false; // 모달 모드 여부

    // Skeleton mode
    export let isSkeleton = false; // 스켈레톤 모드

    // PlacesCard에 전달할 recommendation 이름
    export let recommendation = "이 지역";
</script>

{#if isModal}
    <!-- 모달 모드: 간소화된 구조 -->
    <div class="w-full h-full flex flex-col bg-white relative">
        <!-- 닫기 버튼 -->
        <button
            on:click={onClose}
            class="close-btn absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
            aria-label="닫기"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-500 hover:text-gray-800"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </button>

        <!-- 내부 컨텐츠 (스크롤 가능) -->
        <div class="flex-1 overflow-y-auto p-6 modal-scrollbar">
            {#if isSkeleton}
                <SkeletonCard />
            {:else if card.type === "status"}
                <StatusCard {card} {isCompact} />
            {:else if card.type === "recommendation"}
                <RecommendationCard {card} {isCompact} />
            {:else if card.type === "places"}
                <PlacesCard {card} {isCompact} {recommendation} />
            {:else if card.type === "coupon"}
                <CouponCard {card} {isCompact} />
            {:else if card.type === "navigation"}
                {#key isCompact}
                    <NavigationCard {card} {isCompact} />
                {/key}
            {/if}
        </div>

        <!-- 모달 모드: 하단에 하트 버튼 -->
        {#if showFavorite && !isSkeleton}
            <div
                class="px-6 pb-6 pt-4 border-t border-gray-200 flex justify-center flex-shrink-0"
            >
                <FavoriteButton {isLiked} onClick={onFavoriteClick} size="lg" />
            </div>
        {/if}
    </div>
{:else}
    <!-- 일반 모드: 기존 구조 -->
    <div class="relative">
        <div
            class="w-[360px] h-[400px] flex flex-col p-6 pb-10 bg-white border-2 {isSkeleton
                ? 'border-gray-200'
                : 'border-gray-200'} rounded-3xl shadow-lg transition-all duration-300 {isSkeleton
                ? 'cursor-default'
                : 'cursor-pointer'} overflow-visible relative {isActive
                ? 'scale-100'
                : 'scale-95'} {isHovered && !isSkeleton
                ? 'scale-105 shadow-2xl border-indigo-300'
                : ''}"
            on:click={isSkeleton ? undefined : onClick}
            on:mouseenter={isSkeleton ? undefined : onMouseEnter}
            on:mouseleave={isSkeleton ? undefined : onMouseLeave}
            role="button"
            tabindex="0"
        >
            <!-- 일반 모드: 우측 상단에 하트 버튼 -->
            {#if showFavorite && !isSkeleton}
                <div class="absolute top-3 right-3 z-10">
                    <FavoriteButton
                        {isLiked}
                        onClick={onFavoriteClick}
                        size="sm"
                    />
                </div>
            {/if}

            <!-- 클릭하여 자세히 보기 텍스트 (Compact 모드일 때만) -->
            {#if isCompact && !isSkeleton}
                <span
                    class="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center text-xs text-gray-500"
                >
                    클릭하여 자세히 보기
                </span>
            {:else if isCompact && isSkeleton}
                <span
                    class="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center text-xs text-gray-400 animate-pulse"
                >
                    로딩 중...
                </span>
            {/if}

            <!-- 카드 내용 -->
            <div class="flex-1 overflow-hidden">
                {#if isSkeleton}
                    <SkeletonCard />
                {:else if card.type === "status"}
                    <StatusCard {card} {isCompact} />
                {:else if card.type === "recommendation"}
                    <RecommendationCard {card} {isCompact} />
                {:else if card.type === "places"}
                    <PlacesCard {card} {isCompact} {recommendation} />
                {:else if card.type === "coupon"}
                    <CouponCard {card} {isCompact} />
                {:else if card.type === "navigation"}
                    <NavigationCard {card} {isCompact} />
                {/if}
            </div>
        </div>
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

    .close-btn:hover {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.5);
    }
</style>
