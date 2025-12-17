<script>
    import StatusCard from './StatusCard.svelte';
    import RecommendationCard from './RecommendationCard.svelte';
    import PlacesCard from './PlacesCard.svelte';
    import CouponCard from './CouponCard.svelte';
    
    export let card;
    export let isCompact = true;
    export let isActive = false;
    export let isHovered = false;
    export let onClick = () => {};
    export let onMouseEnter = () => {};
    export let onMouseLeave = () => {};
</script>

<div 
    class="w-[360px] h-[400px] flex flex-col p-6 bg-white border-2 border-gray-200 rounded-3xl shadow-lg transition-all duration-300 cursor-pointer overflow-visible {isActive ? 'scale-100' : 'scale-95'} {isHovered ? 'scale-105 shadow-2xl border-indigo-300' : ''}"
    on:click={onClick}
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    role="button"
    tabindex="0"
>
    {#if card.type === 'status'}
        <StatusCard {card} {isCompact} />
    {:else if card.type === 'recommendation'}
        <RecommendationCard {card} {isCompact} />
    {:else if card.type === 'places'}
        <PlacesCard {card} {isCompact} />
    {:else if card.type === 'coupon'}
        <CouponCard {card} {isCompact} />
    {/if}
</div>