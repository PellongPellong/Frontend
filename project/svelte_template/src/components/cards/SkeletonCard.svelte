<!-- CardWrapper의 내부 컨텐츠만 스켈레톤으로 표시 -->
<div class="flex flex-col h-full">
    <!-- 헤더 스켈레톤 -->
    <div class="mb-4 space-y-2">
        <div class="h-6 bg-gray-200 rounded-lg w-2/3 animate-pulse"></div>
        <div class="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
    </div>

    <!-- 메인 컨텐츠 영역 -->
    <div class="flex-1 space-y-3 mb-4">
        <!-- 이미지 또는 아이콘 영역 -->
        <div class="h-32 bg-gray-200 rounded-xl animate-pulse"></div>

        <!-- 텍스트 라인들 -->
        <div class="space-y-2">
            <div class="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div class="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            <div class="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
        </div>
    </div>

    <!-- 하단 버튼 영역 -->
    <div class="h-10 bg-gray-200 rounded-lg animate-pulse"></div>
</div>

<style>
    @keyframes pulse {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }

    .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
</style>