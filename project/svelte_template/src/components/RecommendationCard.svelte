<script>
    export let recommendation;
</script>

{#if recommendation}
    <div class="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-5 shadow-lg border border-indigo-100">
        <div class="flex items-start gap-3 mb-3">
            <div class="text-3xl">✨</div>
            <div>
                <h3 class="text-xl font-bold text-gray-900">
                    {recommendation.location_name}
                </h3>
                <p class="text-sm text-gray-600 mt-1">추천 장소</p>
            </div>
        </div>
        
        <p class="text-gray-700 leading-relaxed">
            {recommendation.story}
        </p>
    </div>
{/if}