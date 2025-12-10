// _h_loadScript('html2canvas/html2canvas.min.js', _h_setProgress);

let _h_copyClipboardMap_OuterLine = null;


//�덉쟾�� �꾩튂 �곗륫�쇰줈 蹂�寃쏀븯�� 
function _h_SetButtonCapture(sGubun) {
    if (h_isMobile == true) {
        $('#btnCaption').css('visibility', 'hidden');
    } else {
        $('#btnCaption').css('visibility', 'visible');
        if (sGubun == "RIGHT") {
            $('#btnCaption').css("left", "");
            $('#btnCaption').css("right", "150px");
        }
    }
}


//mask媛� �덉쑝硫� �대몺寃� �섏샂
function h_copyClipboardMap_hideMask() {
    if (h_oMask == null) return;
    if (h_oMask != null) h_oMask.setMap(null);


    if (h_oMask.getPath().length > 1) {
        let aPath = new Array;

        for (let i = 1; i < h_oMask.getPath().length; i++)
            aPath.push(h_oMask.getPath()[i]);

        _h_copyClipboardMap_OuterLine = new kakao.maps.Polyline({
            map: h_oMap,
            path: aPath, //
            strokeWeight: 2,
            strokeColor: 'RGB(0,0,0)',
            strokeOpacity: 0.5,
            zIndex: 999999
        });
        aPath = null;
    }
}

function h_copyClipboardMap_showMask() {
    if (h_oMask == null) return;
    if (h_oMask != null) h_oMask.setMap(map);

    if (_h_copyClipboardMap_OuterLine != null) {
        _h_copyClipboardMap_OuterLine.setMap(null);
        _h_copyClipboardMap_OuterLine = null;
    }
}

function h_copyClipboardMap() {
    //以� 而⑦듃濡� �쒓굅
    map.removeControl(zoomControl);

    __sendMessage_StartMapCaption();


    let oTarget = document.getElementById("wrapper");
    h_copyClipboardMap_ForSVG_AddCss("wrapper"); //SVG媛� �먮윭媛� �덉뼱�� �꾩쿂由�

    html2canvas(oTarget, {
        "logging": true, //Enable log (use Web Console for get Errors and Warnings)
        "allowTaint": true,
        "proxy": "html2canvas/html2canvasproxy.php"
    }).then((canvas) => {
        document.getElementById("wrapper").appendChild(canvas);

        canvas.toBlob(function(blob) {
            navigator.clipboard
                .write([
                    new ClipboardItem(
                        Object.defineProperty({}, blob.type, {
                            value: blob,
                            enumerable: true
                        })
                    )
                ])
                .then(function() {
                    document.getElementById("wrapper").removeChild(canvas);

                    h_copyClipboardMap_ForSVG_RemoveCss("wrapper");


                    canvas = null;
                    swal.close();
                    //�쒓굅�� 以� 而⑦듃濡� �ㅼ떆 異붽�
                    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
                    __sendMessage_DoneMapCaption();

                    //h_copyClipboardMap_showMask(); //�� �섏��� �ъ슜 �덊븿
                });
        });
    });
}

function h_copyClipboardMap_ForSVG_AddCss(sID) {
    let css;
    $("#" + sID).find("svg").each(function() {
        let style = $(this).attr("style");
        $(this).wrap("<spand style='" + style + "'></spand>");
        $(this).removeAttr("style");
    });
}

function h_copyClipboardMap_ForSVG_RemoveCss(sID) {
    $("#" + sID).find("svg").each(function() {
        let css = $(this).parent().attr("style");
        $(this).attr('style', css);
        $(this).unwrap();
    });
}