<script>
    const loadingMessages = [
        "백록이가 숨어있는 명소를 찾고 있어요...",
        "제주의 숨겹 보물을 찾는 중...",
        "특별한 여행지를 추천하고 있어요...",
        "백록이가 비밀 장소를 탐색 중...",
        "당신만을 위한 장소를 찾고 있어요..."
    ];

    // 랜덤 메시지 선택
    const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
</script>

<div class="flex flex-col items-center justify-center p-8">
    <div
        class="w-12 h-12 border-4 border-gray-200 border-t-indigo-500 rounded-full animate-spin"
    ></div>
    <p class="mt-4 text-gray-500 text-sm">{randomMessage}</p>
</div>