function onLoading(option) {
    switch (option.type) {
        case 'class':
            onPartLoading(option);
            break;
        case 'page':
            onPageloading(option);
            break;
        default:
            break;
    }
}

function onPartLoading(option) {
    const target = document.querySelector(option.element);
    if (!target) return;
    if (option.theme == 'white') {
        target.classList.add('white');
    }
    if (option.theme == 'empty') {
        target.classList.add('empty');
    }
    if (option.size == 'small') {
        target.classList.add('small');
    }
    target.classList.add('part-loading');
}

function onPageloading(option) {
    const target = document.querySelector(option.element);
    if (!target) return;
    const loading = document.createElement('div');
    loading.classList.add('loadingBox');
    const inner = `
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
    loading.innerHTML = inner;
    target.insertBefore(loading, null);
}

function offLoading(option) {
    switch (option.type) {
        case 'class':
            offPartLoading(option);
            break;
        case 'page':
            offPageloading(option);
            break;
        default:
            break;
    }
}

function offPartLoading(option) {
    const target = document.querySelector(option.element);
    if (!target) return;
    target.classList.add('onload');
    setTimeout(() => {
        target.classList.remove('part-loading');
        target.classList.remove('white');
        target.classList.remove('trans');
        target.classList.remove('small');
        target.classList.remove('onload');
    }, 300);
}

function offPageloading(option) {
    const target = document.querySelector(option.element);
    if (!target) return;
    const loading = target.querySelector('.loadingBox');
    if (!loading) return;
    const inner = target.querySelector('.body-inner');
    if (!inner) return;
    inner.classList.add('onload');
    loading.classList.add('off');
    setTimeout(() => {
        loading.remove();
    }, 300);
}

/* 데이터 부분 로딩 E */