"use strict";

// 우클릭 방지 및 모바일 long press 막기
document.oncontextmenu = function(e) {
    return false;
}