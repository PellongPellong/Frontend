<script>
    export let current = 0;
    export let total = 1;

    $: percent = (current / total) * 100;
</script>

<div class="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
    <div
        class="bg-blue-500 h-full transition-all duration-300"
        style="width: {percent}%"
    ></div>
</div>
<div class="text-right text-xs text-gray-500 mt-1">
    {current} / {total}
</div>
