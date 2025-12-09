optionSetting.init();
const CENTER_POSITION = optionSetting.centerPosition;
const analysisDefaultNum = 150;
let analysisOpen = false;

function toggleArea(init) {
    if (init == 'init') {
        deleteArea();

        analysisOpen = false;
        return;
    }

    if (!analysisOpen) {
        createArea();
        document.querySelector("#iframeMap_LEFT").contentWindow.jumpMapCenter();
        analysisOpen = true;
    } else {
        deleteArea();
        actionHome();
        analysisOpen = false;
    }

    removeCategoryActive();

    // if (!button.classList.contains('on')) {
    //     button.classList.add('on');
    //     button.querySelector('.btn-sub').innerText = "OFF";
    //     createArea();
    //     const menuItems = document.querySelectorAll('.aside .menu-list .menu-item a');
    //     menuItems.forEach(item => {
    //         if (item.classList.contains('setup')) return;
    //         item.classList.remove('on');
    //     })
    // } else {
    //     button.classList.remove('on');
    //     button.querySelector('.btn-sub').innerText = "ON";
    //     deleteArea();
    //     document.querySelector('.sidebar').classList.remove('open');
    //     const data_init = {
    //         FROM: "LEFT",
    //         LAT: CENTER_POSITION.lat,
    //         LNG: CENTER_POSITION.lng,
    //         MODE: "SEND_MAIN|AREA_INFO",
    //         R_M: 300,
    //         init: true
    //     }
    //     document.querySelector('.sidebar iframe').contentWindow.area_off(data_init)
    //     // menu_wrap.classList.remove('side-open');
    //     // menus.forEach((menu_list, z) => {
    //     // 	menu_list.querySelectorAll('a').forEach((v, i) => {
    //     // 	v.classList.remove('on')
    //     // 	})
    //     // })
    // }
}

function createArea(refresh) {
    offSpecialButton();

    let sMasterMapID = 'iframeMap_LEFT';

    //영역 생성 함수 호출
    let oTmp2 = new Object();
    oTmp2.MODE = 'CREATE_AREA';
    oTmp2.LNG = CENTER_POSITION.lng;
    oTmp2.LAT = CENTER_POSITION.lat;
    oTmp2.R_METER = analysisDefaultNum;
    // document.getElementById(sMasterMapID).jumpMapCenter(CENTER_POSITION.lat, CENTER_POSITION.lng)
    oTmp2.HIDE_CENTER_MARKER = false;
    document.getElementById(sMasterMapID).contentWindow.postMessage(oTmp2, '*');
    let analysisText = document.querySelector('.analysis-btn .analysis-text2');
    analysisText.textContent = '종료하기';

}

function deleteArea() {
    let oTmp2 = new Object();
    oTmp2.MODE = 'DELETE_AREA';
    document.getElementById('iframeMap_LEFT').contentWindow.postMessage(oTmp2, '*');
    let analysisText = document.querySelector('.analysis-btn .analysis-text2');
    analysisText.textContent = '시작하기';

}