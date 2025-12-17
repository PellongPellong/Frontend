<script>
    export let status;
</script>

{#if status}
    <div class="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
        <h3 class="text-lg font-bold text-gray-900 mb-3">
            📍 {status.location_name}
        </h3>
        
        <div class="mb-4">
            <p class="text-gray-700">{status.location_status}</p>
        </div>
        
        {#if status.time_table && status.time_table.length > 0}
            <div class="border-t border-gray-200 pt-4">
                <h4 class="font-semibold text-gray-800 mb-3">시간대별 혼잡도</h4>
                <div class="grid grid-cols-3 md:grid-cols-4 gap-2">
                    {#each status.time_table as slot}
                        {@const level = slot.혼잡도}
                        {@const bgColor = level <= 2 ? 'bg-green-100 text-green-800' : level <= 3 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}
                        <div class="{bgColor} rounded-lg p-3 text-center">
                            <div class="text-xs font-semibold">{slot.time}</div>
                            <div class="text-lg font-bold mt-1">{slot.혼잡도}점</div>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
{/if}