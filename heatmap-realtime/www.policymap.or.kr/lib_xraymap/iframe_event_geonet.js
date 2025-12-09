/*소스 코드 모두 동일하고 LEFT, RIGHT 명칭 만 다름*/

let h_oElement = document.querySelector('#map');
let h_oParentElement = h_oElement.ownerDocument.defaultView.parent.document;

let evt_move = new CustomEvent('mousemove', {
    bubbles: true,
    cancelable: false
});
let evt_up = new CustomEvent('mouseup', {
    bubbles: true,
    cancelable: false
});

function _h_triggerHandler(ev) {
    if (h_isMobile == true) return; //모바일일 제외

    //
    if (h_bMapDragging == true && h_bMasterMapDragging == true) {
        //console.log(m_sUID + ' : ' + ev.clientX + ' ' + ev.clientY);
        ///*
        if (ev.type == "mousemove") {
            evt_move.clientX = event.clientX;
            evt_move.clientY = event.clientY - 70;
            try {
                h_oElement.dispatchEvent(evt_move);
            } catch (error) { /*console.error(error);*/ }
        } else if (ev.type == "mouseup") {
            evt_up.clientX = event.clientX;
            evt_up.clientY = event.clientY - 70;
            try {
                h_oElement.dispatchEvent(evt_up);
            } catch (error) { /*console.error(error);*/ }
        }
    }
}

h_oParentElement.addEventListener('mousemove', _h_triggerHandler);
h_oParentElement.addEventListener('mousedown', _h_triggerHandler);
h_oParentElement.addEventListener('mouseup', _h_triggerHandler);
h_oParentElement.addEventListener('click', _h_triggerHandler);


// 다른 지도로 이벤트 전송 -------------------------------

let h_oIFrameEvent = new Object();
h_oIFrameEvent.MODE = "IFRAME_DRAG_OUT";
h_oIFrameEvent.FROM = '';
h_oIFrameEvent.clientX = -1;
h_oIFrameEvent.clientY = -1;
h_oIFrameEvent.mode = '';
h_oIFrameEvent.nModeSplitMap = -1; //MapSync.JS에서 값 자동 입력됨

function _h_send_triggerHandlerByAnotherMap(event) {
    if (h_isMobile == true) return; //모바일일 제외

    if (event.type == 'mousemove' || event.type == "mouseup") {
        //console.log('보냄 -> '  + event.type + ' ' + m_sUID + ' : ' + event.clientX + ' ' + event.clientY);
        h_oIFrameEvent.FROM = m_sUID;
        h_oIFrameEvent.clientX = event.clientX;
        h_oIFrameEvent.clientY = event.clientY;
        h_oIFrameEvent.type = event.type;

        window.parent.postMessage(h_oIFrameEvent, '*');
    }
}

///*마우스 무드 이벤트 등록
let iFrameTimer1 = setInterval(function() {
    clearInterval(iFrameTimer1);
    iFrameTimer1 = null;

    if (h_isMobile == true) return; //모바일일 제외

    $(h_divMap).mousemove(function(event) {
        //지도 드레그 중 다른 iframe 지도로 넘어온 경우 처리
        if (h_bSlaveMapDragging == true) {
            if (event.type == 'mousemove') {
                //console.log('보냄 -> '  + event.type + ' ' + m_sUID + ' : ' + event.clientX + ' ' + event.clientY);
                h_oIFrameEvent.FROM = m_sUID;
                h_oIFrameEvent.clientX = event.clientX;
                h_oIFrameEvent.clientY = event.clientY;
                h_oIFrameEvent.type = "sync_" + event.type;

                window.parent.postMessage(h_oIFrameEvent, '*');
            }
        }
    });
}, 2000);
//*/

///*마우스업 등록
let iFrameTimer2 = setInterval(function() {
    clearInterval(iFrameTimer2);
    iFrameTimer2 = null;

    if (h_isMobile == true) return; //모바일일 제외

    $(h_divMap).mouseup(function(event) {
        //지도 드레그 중 다른 iframe 지도로 넘어온 경우 처리
        if (h_bSlaveMapDragging == true) {
            if (event.type == 'mouseup') {
                //console.log('보냄 -> '  + event.type + ' ' + m_sUID + ' : ' + event.clientX + ' ' + event.clientY);
                h_oIFrameEvent.FROM = m_sUID;
                h_oIFrameEvent.clientX = event.clientX;
                h_oIFrameEvent.clientY = event.clientY;
                h_oIFrameEvent.type = "sync_" + event.type;

                window.parent.postMessage(h_oIFrameEvent, '*');
            }
        }
    });
}, 2000);
//*/


function _h_triggerHandlerByAnotherMap(oData) {
    if (h_isMobile == true) return; //모바일일 통과

    //console.log('받음000 <- '  + oData.type + ' ' + m_sUID + ' : ' + oData.clientX + ' ' + oData.clientY);
    if (h_bMapDragging == true && h_bMasterMapDragging == true) {
        //console.log('받음 <- '  + oData.type + ' ' + m_sUID + ' : ' + oData.clientX + ' ' + oData.clientY);

        if (oData.type == "sync_mousemove") {
            if (oData.nModeSplitMap == 1) //1:겹침화면 2:두개화면 3:하나화면
            {
                evt_move.clientX = oData.clientX;
                evt_move.clientY = oData.clientY;
                h_oElement.dispatchEvent(evt_move);
            } else if (oData.nModeSplitMap == 2) //두개화면인 경우는 다소 복접합
            {
                let dX = 0;
                if (oData.FROM == "RIGHT") //우측창에서 넘어오는 경우는 좌측창의 width 만큼 줘야함
                    dX = h_oElement.clientWidth;
                else
                    dX = h_oElement.clientWidth * -1;

                evt_move.clientX = oData.clientX + dX;
                evt_move.clientY = oData.clientY;
                h_oElement.dispatchEvent(evt_move);
            }
        }
    }
    if (oData.type != "sync_mousemove")
        if (oData.type == "sync_mouseup") {
            evt_up.clientX = oData.clientX;
            evt_up.clientY = oData.clientY;
            h_oElement.dispatchEvent(evt_up);
        }
}