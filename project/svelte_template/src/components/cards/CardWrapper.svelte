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

    // Favorite props
    export let showFavorite = false;
    export let isLiked = false;
    export let onFavoriteClick = () => {};
    export let isModal = false; // 모달 모드 여부

    // Skeleton mode
    export let isSkeleton = false; // 스켈레톤 모드

    // PlacesCard에 전달할 recommendation 이름
    export let recommendation = "이 지역";

    // 카드 컴포넌트를 한 번만 렌더링하도록 공용 함수로 분리
    function renderCardContent() {
        if (isSkeleton) {
            return { component: SkeletonCard, props: {} };
        }
        
        switch (card?.type) {
            case "status":
                return { component: StatusCard, props: { card, isCompact } };
            case "recommendation":
                return { component: RecommendationCard, props: { card, isCompact } };
            case "places":
                return { component: PlacesCard, props: { card, isCompact, recommendation } };
            case "coupon":
                return { component: CouponCard, props: { card, isCompact } };
            case "navigation":
                return { component: NavigationCard, props: { card, isCompact } };
            default:
                return null;
        }
    }

    $: cardContent = renderCardContent();
</script>

{#if isModal}
    <!-- 모달 모드: 간소화된 구조 -->
    <div class="w-full h-full flex flex-col bg-white">
        <!-- 내부 컨텐츠 (스크롤 가능) -->
        <div class="flex-1 overflow-y-auto p-6 modal-scrollbar">
            {#if cardContent}
                {#key card?.id}
                    <svelte:component this={cardContent.component} {...cardContent.props} />
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
                {#if cardContent}
                    {#key card?.id}
                        <svelte:component this={cardContent.component} {...cardContent.props} />
                    {/key}
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
</style>