<script>
    import { onMount } from 'svelte';
    import ChatMessage from '../components/ChatMessage.svelte';
    
    export let goTo;
    
    let sessionId = null;
    let messages = [];
    let userInput = '';
    let isLoading = false;
    let chatContainer;
    
    // 목업 데이터
    const mockResponses = {
        '성산': {
            session_id: 'mock-session-001',
            status: {
                location_name: '성산일출봉',
                location_status: '혼잡도가 5점으로 매우 높을 것으로 예상됩니다.',
                time_table: [
                    { time: '09시', 혼잡도: 5 },
                    { time: '10시', 혼잡도: 5 },
                    { time: '11시', 혼잡도: 4 },
                    { time: '14시', 혼잡도: 5 },
                    { time: '15시', 혼잡도: 4 },
                    { time: '16시', 혼잡도: 3 },
                ]
            },
            recommendation: {
                location_name: '월령지',
                story: '월령지는 조선시대 목마장으로 사용되던 곳으로, 현재는 조용한 산책로와 아름다운 숲길로 유명합니다. 관광객이 적고 평화로운 분위기를 즐길 수 있어요.'
            },
            around: [
                { name: '성읍도', reason: '해돋이가 많고 한적한 해변' },
                { name: '광치기해변', reason: '로컬들이 즐겨 찾는 조용한 비치' },
                { name: '표선해변', reason: '탁 트인 풀빌라와 카페가 있는 평화로운 곳' }
            ],
            coupones: [
                { name: '월령지 입장료 20% 할인', barcode: '1234-5678-9012' },
                { name: '근처 카페 음료 무료', barcode: '9876-5432-1098' }
            ]
        },
        '카페': {
            session_id: 'mock-session-002',
            status: null,
            recommendation: {
                location_name: '카페 더 클리프',
                story: '절벽 끝에 위치한 오션뷰 카페로, 한라산과 푸른 바다를 동시에 볼 수 있어요. 주말에도 비교적 한산하며, 사진 촬영 명소로도 유명합니다.'
            },
            around: [
                { name: '용머리 해안도로', reason: '드라이브 코스로 좋음' },
                { name: '상예 카페거리', reason: '다양한 감성 카페들' }
            ],
            coupones: [
                { name: '카페 더 클리프 커피 할인', barcode: '5555-6666-7777' }
            ]
        },
        '가족': {
            session_id: 'mock-session-003',
            status: null,
            recommendation: {
                location_name: '빌자루 숲',
                story: '제주에서 가장 유명한 숲길로, 아이들과 함께 걸으며 자연을 느낄 수 있어요. 평일 오전 시간대는 비교적 한산합니다.'
            },
            around: [
                { name: '제주헤리테이지', reason: '아이들을 위한 체험 프로그램' },
                { name: '에코랜드 테마파크', reason: '가족 단위 방문객이 좋음' },
                { name: '한라수목원', reason: '산책하기 좋은 수목원' }
            ],
            coupones: [
                { name: '빌자루 숲 가족 할인권', barcode: '1111-2222-3333' },
                { name: '제주헤리테이지 30% 할인', barcode: '4444-5555-6666' }
            ]
        },
        'default': {
            session_id: 'mock-session-default',
            status: null,
            recommendation: {
                location_name: '제주 숨은 명소',
                story: '제주에는 아직 알려지지 않은 아름다운 곳들이 많아요. 좋은 키워드를 입력해주시면 더 정확한 추천을 해드릴 수 있어요!'
            },
            around: [
                { name: '월령지', reason: '조용한 산책로' },
                { name: '가파도 해안도로', reason: '아름다운 해돋이라인' }
            ],
            coupones: []
        }
    };
    
    // 초기 메시지
    onMount(() => {
        messages = [
            {
                role: 'assistant',
                content: '안녕하세요! 제주숨곧 AI입니다. 한산한 제주 여행지를 추천해드릴게요. 어떤 걸 찾고 계신가요?',
                suggestions: [
                    { display: '🌊 바다 볼 수 있는 카페', text: '바다 볼 수 있는 카페' },
                    { display: '🧺 오름 코스 추천', text: '오름 코스 추천' },
                    { display: '👨‍👩‍👧 가족 여행 코스', text: '가족 여행 코스' }
                ]
            }
        ];
    });
    
    // 목업 데이터 검색 함수
    function getMockResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('성산') || lowerMessage.includes('일출봉')) {
            return mockResponses['성산'];
        } else if (lowerMessage.includes('카페') || lowerMessage.includes('바다')) {
            return mockResponses['카페'];
        } else if (lowerMessage.includes('가족') || lowerMessage.includes('아이')) {
            return mockResponses['가족'];
        } else {
            return mockResponses['default'];
        }
    }
    
    async function sendMessage(text = userInput) {
        if (!text.trim() || isLoading) return;
        
        // 사용자 메시지 추가
        messages = [...messages, {
            role: 'user',
            content: text
        }];
        
        userInput = '';
        isLoading = true;
        
        // 로딩 메시지 추가
        messages = [...messages, {
            role: 'assistant',
            loading: true
        }];
        
        scrollToBottom();
        
        // 목업 API 호출 (로딩 시간 시뮬레이션)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        try {
            // 목업 데이터 가져오기
            const data = getMockResponse(text);
            
            // 세션 ID 저장
            sessionId = data.session_id;
            
            // 로딩 메시지 제거
            messages = messages.slice(0, -1);
            
            // AI 응답 추가
            messages = [...messages, {
                role: 'assistant',
                content: generateResponseText(data),
                data: data // 원본 데이터 저장
            }];
            
        } catch (error) {
            console.error('Error:', error);
            messages = messages.slice(0, -1);
            messages = [...messages, {
                role: 'assistant',
                content: '죄송합니다. 오류가 발생했어요. 다시 시도해주세요.'
            }];
        } finally {
            isLoading = false;
            scrollToBottom();
        }
    }
    
    function generateResponseText(data) {
        let text = '';
        
        // 장소 상태 정보
        if (data.status) {
            text += `📍 ${data.status.location_name}\n${data.status.location_status}\n\n`;
        }
        
        // 추천 장소
        if (data.recommendation) {
            text += `✨ 대신 **${data.recommendation.location_name}**를 추천드려요!\n\n${data.recommendation.story}\n\n`;
        }
        
        // 주변 명소
        if (data.around && data.around.length > 0) {
            text += `🌿 **주변 추천 장소**\n`;
            data.around.forEach(place => {
                text += `• **${place.name}**: ${place.reason}\n`;
            });
        }
        
        return text.trim();
    }
    
    function scrollToBottom() {
        setTimeout(() => {
            if (chatContainer) {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }
        }, 100);
    }
    
    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!isLoading) {
                sendMessage();
            }
        }
    }
</script>

<div class="flex h-screen w-full bg-white">
    <!-- 사이드바 (데스크탑) -->
    <aside class="hidden md:flex w-[250px] flex-col bg-[#2A2A2A] text-[#E5E5E5]">
        <div class="p-4">
            <h1 class="text-xl font-bold text-white flex items-center gap-2">
                <span>🦌</span>
                <span>제주숨곧 AI</span>
            </h1>
            <button 
                class="mt-4 w-full rounded-lg border border-[#444] py-2 px-4 text-left text-sm hover:bg-[#333] transition-colors"
                on:click={() => {
                    sessionId = null;
                    messages = messages.slice(0, 1);
                }}
            >
                + 새 대화
            </button>
        </div>
        
        <!-- 대화 기록 (추후 구현) -->
        <nav class="flex-grow overflow-y-auto px-2 space-y-1 custom-scrollbar">
            <!-- 저장된 대화 목록 -->
        </nav>
        
        <div class="p-2 border-t border-[#444]">
            <button class="flex items-center gap-3 rounded-lg p-3 text-sm hover:bg-[#333] transition-colors w-full">
                <span>⚙️</span>
                <span>설정</span>
            </button>
        </div>
    </aside>
    
    <!-- 메인 채팅 영역 -->
    <main class="flex flex-1 flex-col h-full relative">
        <!-- 헤더 -->
        <header class="flex h-[60px] items-center justify-between border-b border-[#E5E5E5] bg-white px-4 flex-shrink-0">
            <button class="md:hidden" on:click={() => {/* 모바일 메뉴 */}}>
                <span>☰</span>
            </button>
            <h2 class="absolute left-1/2 -translate-x-1/2 text-lg font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                제주 여행 AI 어시스턴트
            </h2>
            <button>
                <span>⋮</span>
            </button>
        </header>
        
        <!-- 채팅 메시지 영역 -->
        <div 
            bind:this={chatContainer}
            class="flex-1 overflow-y-auto custom-scrollbar"
        >
            <div class="mx-auto max-w-[800px] p-5 md:py-10 space-y-6">
                {#each messages as message, i (i)}
                    <ChatMessage 
                        {message} 
                        onSuggestionClick={sendMessage}
                        disabled={isLoading}
                    />
                {/each}
            </div>
        </div>
        
        <!-- 입력 영역 -->
        <div class="bg-white p-5 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex-shrink-0">
            <div class="mx-auto max-w-[800px] relative">
                {#if isLoading}
                    <div class="absolute top-0 left-0 right-0 -mt-8 text-center">
                        <span class="text-sm text-gray-500">AI가 응답하는 중입니다...</span>
                    </div>
                {/if}
                <textarea
                    bind:value={userInput}
                    on:keydown={handleKeyDown}
                    class="w-full resize-none rounded-xl border py-3 pl-4 pr-14 text-base focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition {
                        isLoading ? 'border-gray-300 bg-gray-50 text-gray-400 cursor-not-allowed' : 'border-[#E0E0E0] bg-white text-gray-900'
                    }"
                    placeholder={isLoading ? '응답을 기다리는 중...' : '제주 여행에 대해 물어보세요... (예: 성산일출봉 괜찮을까?)'}
                    rows="1"
                    style="max-height: 120px;"
                    disabled={isLoading}
                />
                <button
                    on:click={() => sendMessage()}
                    disabled={!userInput.trim() || isLoading}
                    class="absolute right-2 bottom-2 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 {
                        userInput.trim() && !isLoading
                            ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 cursor-pointer'
                            : 'bg-[#E0E0E0] cursor-not-allowed'
                    } text-white"
                >
                    <span>↑</span>
                </button>
            </div>
        </div>
    </main>
</div>

<style>
    .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 3px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
        background-color: transparent;
    }
</style>