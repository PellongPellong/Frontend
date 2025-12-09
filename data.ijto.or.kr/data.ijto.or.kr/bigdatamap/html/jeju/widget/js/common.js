// 우클릭 방지 및 모바일 long press 막기
document.oncontextmenu = function(e) {
    return false;
}

/* 데이터 부분 로딩 S */
function onPartLoading(element, type, size) {
    const target = document.querySelector(element);
    if (!target) return;
    if (type == 'white') {
        target.classList.add('white');
    }
    if (type == 'trans') {
        target.classList.add('trans');
    }
    if (size == 'small') {
        target.classList.add('small');
    }
    target.classList.add('part-loading');
}

function offPartLoading(element) {
    const target = document.querySelector(element);
    if (!target) return;
    target.classList.add('onload');
    setTimeout(() => {
        target.classList.remove('part-loading');
        target.classList.remove('white');
        target.classList.remove('white');
        target.classList.remove('small');
        target.classList.remove('onload');
    }, 300);
}
/* 데이터 부분 로딩 E */