//모바일에서 스크롤 안되도록

document.addEventListener("touchmove", function(e) {
    e.preventDefault();
}, {
    passive: false
});

let m_oSyncTimer = null; //줌 시작때 타이머 이용하여 처리하느라....
let m_bSyncing = false; //현재 부모로부터 지도 맞추는 중이면 TRUE로 변경 // FALSE 일때만 부모에게 변경됨을 호출함
var m_sUID = getParameterByUrl('UID');
let m_sCD = getParameterByUrl('CD');
if (m_sCD != "") {
    m_sCD = m_sCD.replace("^", "','");
    m_sCD = m_sCD.replace("^", "','");
    m_sCD = m_sCD.replace("^", "','");
}

let m_sMOVE = getParameterByUrl('MOVE');
let m_sFile = getParameterByUrl('FILE');
let m_sMFile = getParameterByUrl('MFILE');
let sLEG_LOC = getParameterByUrl('LEGEND_LOCATION');
let m_sMMS_PUBLIC = getParameterByUrl('MMS_PUBLIC');

let m_sLat = getParameterByUrl('LAT');
let m_sLng = getParameterByUrl('LNG');

let m_sBizPara = getParameterByUrl('BIZ_PARA');
let m_sBizPara2 = getParameterByUrl('BIZ_PARA2');
//배경지도 색상 
let m_sGrayMap = getParameterByUrl('GRAYMAP');




//내가 마스타:: 마스타 쪽에서 사용자가 영역을 마우스 드래그하여 처리한다고 통보
function onEventForTempCircleStartSync_ByHeatmapLib() {
    window.parent.steDDD("드래그 스타트 성공1111")
    __sendSyncAreaDrag_start();
}


//내가 마스타:: 마스타 쪽에서 사용자가 영역을 드래그 중인 것을 통보
function onEventForTempCircleDragSync_ByHeatmapLib(oLatlng, nR_m) {
    window.parent.steDDD("드래그 스타트 성공222")
    __sendSyncAreaDrag_ing(oLatlng, nR_m);
}


//내가 마스타:: 마스타 쪽에서 사용자가 영역을 마우스 드래그를 마무리 함을 통보
function onEventForTempCircleEndSync_ByHeatmapLib() {
    window.parent.steDDD("드래그 스타트 성공222")
    __sendSyncAreaDrag_end();
}

function onEventForTempShapeEndSync_ByHeatmapLib(sCoords) {
    __sendSyncShapeDraw_end(sCoords);
    sCoords = null;
}
//내가 마스타:: TempCircle 이 변경되면 해당 영역내 정보 수집 등을 위한 함수 호출용 
function onEventForChangeTempCircle_ByHeatmapLib(oLatlng, nR_m) {
    __sendAreaInfo(oLatlng, nR_m);
}

function onEventForChangeTempShape_ByHeatmapLib(sCoords) {
    __sendShapeInfo(sCoords);
}


function onEventFinishAddPointFromDataString_ByHeatmapLib(nPtCnt) {
    __sendMessage_FinishAddPointFromDataString(nPtCnt);
}






function setSelect(sSelect) {}



function isEmptyForObjectAndFunction(oObj) {
    if (typeof oObj == "undefined" || oObj == null)
        return true;
    else
        return false;
}
//*/







$(document).ready(function() {
    //area test
    /*
    setTimeout(function() {
        //__SyncCreateTempCircle_ByParent(33.48899,126.49825);
        __createSyncAreaDrag(); // 주석 풀면 동기화 안되는 문제 발생...
        __setArea_AutoResize(false);
        alert('임시 테스트');
    }, 1000);
    */


    if (m_sUID == '')
        m_sUID = getRandomID(20);

    //map 동일화 연동을 위함 함수
    kakao.maps.event.addListener(map, 'bounds_changed', function() {
        __sendSyncMap_after();

    });

    kakao.maps.event.addListener(map, 'zoom_changed', function() {
        __sendSyncMap_after();
    });
    kakao.maps.event.addListener(map, 'zoom_start', function() {
        __sendSyncMap_start();
    });


    function loadScript(src, callback) {
        var script = document.createElement('script');
        script.src = src;
        script.onload = callback;
        document.getElementsByTagName('head')[0].appendChild(script);
    };

    loadScript("https://www.biz-gis.com/XRayMap_lib/jquery-image-dropdown/jquery.dd.js", function() {
        //loadMarkerList();
    });




    if (sLEG_LOC == "LEFT") {
        $('.legend-overlay').css('right', 'auto');
        $('.legend-overlay').css('margin-left', '5px');
    } else {
        g_bLayerListRight = true;
        setTimeout(function() {

            _h_SetRightTOC();
        }, 1500);

    }



    if (sLEG_LOC == "LEFT") {
        $('#side').removeClass('side-right');
        $('#side').addClass('side-left');

        if (m_sMMS_PUBLIC == "TRUE") {
            $("#side_img").attr("src", 'https://www.biz-gis.com/_tmp/img/side_L.png');
            document.all.side_img.style.display = "";
        }
    } else {
        $('#side').removeClass('side-left');
        $('#side').addClass('side-right');

        if (m_sMMS_PUBLIC == "TRUE") {
            $("#side_img").attr("src", 'https://www.biz-gis.com/_tmp/img/side_R.png');
            document.all.side_img.style.display = "";
        }
    }


    if (m_sCD != "") {
        let bMove = false;

        if (m_sMOVE == "TRUE") bMove = true;

        //console.log(bMove);

        if (m_sCD.length == 2)
            HM_setMaskByBizgisCoord('https://heatmap2021.geocoding.kr/mms/getList.php?FILE=mms_mask_설정을위한_제외리스트_광역&WHERE=' + m_sCD, bMove); //두번째 인자는 mask 범위로 자동 이동
        else if (m_sCD.length == 13 || m_sCD.length == 21)
            HM_setMaskByBizgisCoord('https://heatmap2021.geocoding.kr/mms/getList.php?FILE=mms_mask_설정을위한_제외리스트&WHERE=' + m_sCD, bMove);
        else if (m_sCD.length == 5)
            HM_setMaskByBizgisCoord('https://heatmap2021.geocoding.kr/mms/getList.php?FILE=mms_mask_설정을위한_제외리스트&WHERE=' + m_sCD, bMove);
    }

    if (m_sFile != "") {
        appendFileFromServer(m_sFile, m_sCD, m_sBizPara, m_sBizPara2);
    } else if (m_sMFile != "") {
        HM_setCustomMode(2);
        appendMFileFromServer(m_sMFile, m_sCD, m_sBizPara, m_sBizPara2);
    }

    //맵 로드 완료 이벤트 전달
    __sendMessageMapLoaded();





    //임시로 하나의 지점을 지정한 포인트가 있으면
    if (m_sLat != "" && m_sLng != "")
        __setTmpMapMarkerAndMapCenter(m_sLat, m_sLng);
    let nCallCnt = 0;
    let oDelayTimer = setInterval(function() {
        if (nCallCnt > 20) {
            clearInterval(oDelayTimer);
            oDelayTimer = null;
            return;
        }

        //_h_setGrayColorMap(); //함수 있는지 점검하여 호출
        if (typeof(_h_setGrayColorMap) == 'function') {
            //배경지도 색상 세팅
            if (m_sGrayMap == "FALSE")
                _h_setGrayColorMap(false);
            else
                _h_setGrayColorMap(true);

            clearInterval(oDelayTimer);
            oDelayTimer = null;
        }

        nCallCnt++;
    }, 500);
});


function appendFileFromServer(sFile, sCD, sBizPara, sBizPara2) {
    //biz 내부에 시군구 CD 말고 값 치환할 녀석 있으면 등록
    //HM_loadLayersByUrlFileAndRepalceTag 에서 알아서 처리
    if (sBizPara != "" && sBizPara2 != "")
        HM_setPara_replaceTagValueOnBiz(sBizPara, sBizPara2);

    let sUrl = m_sBaseUrlHeatMap2 + "/biz/getBiz.php?FILE=" + sFile;
    HM_loadLayersByUrlFileAndRepalceTag(sUrl, '#CD#', sCD); //biz파일에 #CD# 태그를 m_sCD로 변경하여 로딩함
}

function appendMFileFromServer(sFile, sCD, sBizPara, sBizPara2) {
    //biz 내부에 시군구 CD 말고 값 치환할 녀석 있으면 등록
    //HM_loadLayersByUrlFileAndRepalceTag 에서 알아서 처리
    if (sBizPara != "" && sBizPara2 != "")
        HM_setPara_replaceTagValueOnBiz(sBizPara, sBizPara2);

    let sUrl = m_sMBIZUrl + "getBiz.php?FILE=" + sFile;
    HM_loadLayersByUrlFileAndRepalceTag(sUrl, '#CD#', sCD); //biz파일에 #CD# 태그를 m_sCD로 변경하여 로딩함
}

function appendFileFromJsonDataString(_sDataString, _fAlpha, _sLayerNM, _sPointSize, _sPointSymbolType, _sPointSymbolColor) {
    /*
    _sDataString='{"point":[{"content":"가맹점명:(사복)한라원장애인직업재활시설시군구:제주시행정동:애월읍산정지역:애월읍ADDR:제주 제주시 애월읍 하소로 747-23X:126.3970389Y:33.4202550매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.3970389,33.4202550]},{"content":"가맹점명:(유)다올시군구:서귀포시행정동:예래동산정지역:서귀포시내ADDR:제주 서귀포시 색달중앙로 38 (색달동)X:126.4139598Y:33.2585774매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4139598,33.2585774]},{"content":"가맹점명:(유)아웃백스테이크하우스코리아제주점시군구:제주시행정동:노형동산정지역:제주시내ADDR:제주 제주시 노형동 1288-5,6번지 2층X:126.4783125Y:33.4858309매칭결과:구주소 정좌표", "label":"", "weight":10, "location": [126.4783125,33.4858309]},{"content":"가맹점명:(주) 베이힐시군구:서귀포시행정동:예래동산정지역:서귀포시내ADDR:제주 서귀포시 하예동 1888번지X:126.3721654Y:33.2375444매칭결과:구주소 정좌표", "label":"", "weight":10, "location": [126.3721654,33.2375444]},{"content":"가맹점명:(주) 성우디엔에프시군구:서귀포시행정동:대천동산정지역:서귀포시내ADDR:제주 서귀포시 강정동 2694번지X:126.4887939Y:33.2321371매칭결과:구주소 정좌표", "label":"", "weight":10, "location": [126.4887939,33.2321371]},{"content":"가맹점명:(주) 신세계푸드 데블스도어 제주점시군구:서귀포시행정동:안덕면산정지역:안덕면ADDR:제주 서귀포시 안덕면 신화역사로304번길 38 지하1층X:126.3173984Y:33.3062449매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.3173984,33.3062449]},{"content":"가맹점명:(주) 신세계푸드 제주대학교기숙사시군구:제주시행정동:아라동산정지역:제주시내ADDR:제주 제주시 제주대학로 102 제주대학교 기숙사 6호관X:126.5668686Y:33.4521489매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5668686,33.4521489]},{"content":"가맹점명:(주) 신세계푸드 제주신화월드 고래라면시군구:서귀포시행정동:안덕면산정지역:안덕면ADDR:제주 서귀포시 안덕면 녹차분재로 217 1층X:126.2903280Y:33.2981310매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2903280,33.2981310]},{"content":"가맹점명:(주) 신세계푸드 제주신화월드 윤경양식당시군구:서귀포시행정동:안덕면산정지역:안덕면ADDR:제주 서귀포시 안덕면 녹차분재로 217 1층X:126.2903280Y:33.2981310매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2903280,33.2981310]},{"content":"가맹점명:(주) 신세계푸드 제주신화월드 크랩통 제시군구:서귀포시행정동:안덕면산정지역:안덕면ADDR:제주 서귀포시 안덕면 녹차분재로 217 1층X:126.2903280Y:33.2981310매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2903280,33.2981310]},{"content":"가맹점명:(주) 신세계푸드 제주신화월드 티플레이스시군구:서귀포시행정동:안덕면산정지역:안덕면ADDR:제주 서귀포시 안덕면 녹차분재로 217 1층X:126.2903280Y:33.2981310매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2903280,33.2981310]},{"content":"가맹점명:(주) 신세계푸드 제주신화월드 화니제주신시군구:서귀포시행정동:안덕면산정지역:안덕면ADDR:제주 서귀포시 안덕면 녹차분재로 217 1층X:126.2903280Y:33.2981310매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2903280,33.2981310]},{"content":"가맹점명:(주) 아워홈 KIS제주점(고등식당)시군구:서귀포시행정동:대정읍산정지역:대정읍ADDR:제주 서귀포시 대정읍 글로벌에듀로260번길 8 .X:126.2867327Y:33.2887323매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2867327,33.2887323]},{"content":"가맹점명:(주) 아워홈 KIS제주점(초중식당)시군구:서귀포시행정동:대정읍산정지역:대정읍ADDR:제주 서귀포시 대정읍 글로벌에듀로260번길 34 .X:126.2847266Y:33.2892186매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2847266,33.2892186]},{"content":"가맹점명:(주) 아워홈 SJA제주점시군구:서귀포시행정동:대정읍산정지역:대정읍ADDR:제주 서귀포시 대정읍 글로벌에듀로304번길 10X:126.2844304Y:33.2846075매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2844304,33.2846075]},{"content":"가맹점명:(주) 아워홈 제주대학교병원제주점시군구:제주시행정동:아라동산정지역:제주시내ADDR:제주 제주시 아란13길 15 제주대학교병원 지하1층X:126.5452795Y:33.4671431매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5452795,33.4671431]},{"content":"가맹점명:(주) 아워홈 제주지방합동청사점시군구:제주시행정동:이도2동산정지역:제주시내ADDR:제주 제주시 청사로 59, 4층 (도남동)X:126.5251066Y:33.4908234매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5251066,33.4908234]},{"content":"가맹점명:(주) 아워홈 제주한라병원점시군구:제주시행정동:연동산정지역:제주시내ADDR:제주 제주시 도령로 65 1층X:126.4850306Y:33.4899071매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4850306,33.4899071]},{"content":"가맹점명:(주) 아코스시군구:서귀포시행정동:중문동산정지역:서귀포시내ADDR:제주 서귀포시 산록남로 1391 (중문동)X:126.4340176Y:33.3005930매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4340176,33.3005930]},{"content":"가맹점명:(주) 제이에이치코퍼레이션시군구:제주시행정동:애월읍산정지역:애월읍ADDR:제주 제주시 애월읍 애월해안로 672X:126.3741312Y:33.4811901매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.3741312,33.4811901]},{"content":"가맹점명:(주) 현대그린푸드 국세공무원교육원(제주)시군구:서귀포시행정동:대륜동산정지역:서귀포시내ADDR:제주 서귀포시 서호중로 19 (서호동)X:126.5148619Y:33.2550722매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5148619,33.2550722]},{"content":"가맹점명:(주)김녕요트투어시군구:제주시행정동:구좌읍산정지역:구좌읍ADDR:제주 제주시 구좌읍 김녕리 4212-1번지X:126.7367968Y:33.5579600매칭결과:구주소 정좌표", "label":"", "weight":10, "location": [126.7367968,33.5579600]},{"content":"가맹점명:(주)다모아미래컨벤션센터시군구:제주시행정동:용담1동산정지역:제주시내ADDR:제주 제주시 남성로 75 (용담일동)X:126.5144965Y:33.5066093매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5144965,33.5066093]},{"content":"가맹점명:(주)대유산업시군구:서귀포시행정동:예래동산정지역:서귀포시내ADDR:제주 서귀포시 상예로 381 (상예동)X:126.3936314Y:33.2781061매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.3936314,33.2781061]},{"content":"가맹점명:(주)산굼부리시군구:제주시행정동:조천읍산정지역:조천읍ADDR:제주 제주시 조천읍 교래리 산38번지X:126.6939991Y:33.4320140매칭결과:구주소 정좌표", "label":"", "weight":10, "location": [126.6939991,33.4320140]},{"content":"가맹점명:(주)삼다도횟집시군구:제주시행정동:용담2동산정지역:제주시내ADDR:제주 제주시 서해안로 572 (용담삼동)X:126.4992693Y:33.5190206매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4992693,33.5190206]},{"content":"가맹점명:(주)신세계푸드 보노보노스시 제주공항점시군구:제주시행정동:용담2동산정지역:제주시내ADDR:제주 제주시 공항로 2 4층X:126.4948463Y:33.5065434매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4948463,33.5065434]},{"content":"가맹점명:(주)신세계푸드 실크로드시군구:제주시행정동:용담2동산정지역:제주시내ADDR:제주 제주시 공항로 2, 4층 (용담이동)X:126.4948463Y:33.5065434매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4948463,33.5065434]},{"content":"가맹점명:(주)신세계푸드 제주국제공항 스무디킹시군구:제주시행정동:용담2동산정지역:제주시내ADDR:제주 제주시 공항로 2 1층X:126.4948463Y:33.5065434매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4948463,33.5065434]},{"content":"가맹점명:(주)신세계푸드 제주신화월드 (얼큰통김밥)시군구:서귀포시행정동:안덕면산정지역:안덕면ADDR:제주 서귀포시 안덕면 녹차분재로 217 1층X:126.2903280Y:33.2981310매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2903280,33.2981310]},{"content":"가맹점명:(주)신세계푸드 제주신화월드 오슬로시군구:서귀포시행정동:안덕면산정지역:안덕면ADDR:제주 서귀포시 안덕면 녹차분재로 217 1층X:126.2903280Y:33.2981310매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2903280,33.2981310]},{"content":"가맹점명:(주)신세계푸드 제주신화월드 자니로켓시군구:서귀포시행정동:안덕면산정지역:안덕면ADDR:제주 서귀포시 안덕면 녹차분재로 217 1층X:126.2903280Y:33.2981310매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2903280,33.2981310]},{"content":"가맹점명:(주)신세계푸드 제주신화월드 직원식당시군구:서귀포시행정동:안덕면산정지역:안덕면ADDR:제주 서귀포시 안덕면 신화역사로304번길 98 1층X:126.3137720Y:33.3055466매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.3137720,33.3055466]},{"content":"가맹점명:(주)심플프로젝트컴퍼니 /부타이애월시군구:제주시행정동:애월읍산정지역:애월읍ADDR:제주 제주시 애월읍 천덕로 880-24 A동 2층X:126.3650949Y:33.3905556매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.3650949,33.3905556]},{"content":"가맹점명:(주)썬시티코리아시군구:제주시행정동:용담2동산정지역:제주시내ADDR:제주 제주시 서해안로 382 .X:126.4845475Y:33.5126927매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4845475,33.5126927]},{"content":"가맹점명:(주)아모레퍼시픽설록차뮤지엄오설록시군구:서귀포시행정동:안덕면산정지역:안덕면ADDR:제주 서귀포시 안덕면 서광리 1235-3번지X:126.2896993Y:33.3061371매칭결과:구주소 인근좌표", "label":"", "weight":10, "location": [126.2896993,33.3061371]},{"content":"가맹점명:(주)아워홈 KBS제주점시군구:제주시행정동:이도2동산정지역:제주시내ADDR:제주 제주시 복지로1길 8 (도남동)X:126.5195312Y:33.4890259매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5195312,33.4890259]},{"content":"가맹점명:(주)아워홈 네오플제주점(네오마루식당)시군구:제주시행정동:노형동산정지역:제주시내ADDR:제주 제주시 1100로 3198-13 지하2층X:126.4853978Y:33.4731426매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4853978,33.4731426]},{"content":"가맹점명:(주)아워홈 렛츠런파크제주점시군구:제주시행정동:애월읍산정지역:애월읍ADDR:제주 제주시 애월읍 평화로 2144 .X:126.3975358Y:33.4066659매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.3975358,33.4066659]},{"content":"가맹점명:(주)아워홈 렛츠런파크제주점 한식당시군구:제주시행정동:애월읍산정지역:애월읍ADDR:제주 제주시 애월읍 평화로 2144 .X:126.3975358Y:33.4066659매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.3975358,33.4066659]},{"content":"가맹점명:(주)아워홈 제주개발공사점(삼다수공장)시군구:제주시행정동:조천읍산정지역:조천읍ADDR:제주 제주시 조천읍 남조로 1717-35 .X:126.6721027Y:33.4209172매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.6721027,33.4209172]},{"content":"가맹점명:(주)아워홈 제주지방합동청사제주점시군구:제주시행정동:이도2동산정지역:제주시내ADDR:제주 제주시 청사로 59, 4층 (도남동)X:126.5251066Y:33.4908234매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5251066,33.4908234]},{"content":"가맹점명:(주)아워홈 파크선샤인호텔제주점시군구:서귀포시행정동:천지동산정지역:서귀포시내ADDR:제주 서귀포시 남성중로 135 1층X:126.5533099Y:33.2434349매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5533099,33.2434349]},{"content":"가맹점명:(주)아워홈라마다호텔제주점시군구:제주시행정동:이도2동산정지역:제주시내ADDR:제주 제주시 중앙로 304 .X:126.5342509Y:33.4934834매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5342509,33.4934834]},{"content":"가맹점명:(주)아워홈소인국테마파크제주점시군구:서귀포시행정동:안덕면산정지역:안덕면ADDR:제주 서귀포시 안덕면 중산간서로 1878 .X:126.3225224Y:33.2904107매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.3225224,33.2904107]},{"content":"가맹점명:(주)아인당구카페시군구:제주시행정동:외도동산정지역:제주시내ADDR:제주 제주시 우정로5길 4, 3층 (외도일동)X:126.4311616Y:33.4902015매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4311616,33.4902015]},{"content":"가맹점명:(주)에스피오엘 제주지점_한식시군구:제주시행정동:애월읍산정지역:애월읍ADDR:제주 제주시 애월읍 고내로13길 79X:126.3471272Y:33.4704290매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.3471272,33.4704290]},{"content":"가맹점명:(주)에이치엘아이제주지사시군구:제주시행정동:이도2동산정지역:제주시내ADDR:제주 제주시 연북로 403 1층X:126.5246045Y:33.4810895매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5246045,33.4810895]},{"content":"가맹점명:(주)에이케이디벨러퍼 르베일시군구:제주시행정동:도두동산정지역:제주시내ADDR:제주 제주시 서해안로 264 2층X:126.4738875Y:33.5092982매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4738875,33.5092982]},{"content":"가맹점명:(주)엠브릿지시군구:서귀포시행정동:대정읍산정지역:대정읍ADDR:제주 서귀포시 대정읍 최남단해안로 120 제1동 1층,2층X:126.2581494Y:33.2101702매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2581494,33.2101702]},{"content":"가맹점명:(주)오설록 제주점시군구:서귀포시행정동:안덕면산정지역:안덕면ADDR:제주 서귀포시 안덕면 신화역사로 15X:126.2899494Y:33.3059783매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2899494,33.3059783]},{"content":"가맹점명:(주)오제이상사애월지점 낭푼밥상시군구:제주시행정동:연동산정지역:제주시내ADDR:제주 제주시 연동6길 28, 1층 (연동, 영일빌라)X:126.4889838Y:33.4834642매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4889838,33.4834642]},{"content":"가맹점명:(주)워크인제주시군구:제주시행정동:한경면산정지역:한경면ADDR:제주 제주시 한경면 한경해안로 176 .X:126.1644033Y:33.3240114매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.1644033,33.3240114]},{"content":"가맹점명:(주)유진텍코퍼레이션 제주지점시군구:제주시행정동:이도2동산정지역:제주시내ADDR:제주 제주시 서광로 288 202호X:126.5272525Y:33.5000810매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5272525,33.5000810]},{"content":"가맹점명:(주)유티에스제주시군구:제주시행정동:애월읍산정지역:애월읍ADDR:제주 제주시 애월읍 광령평화2길 170-2X:126.4343360Y:33.4309552매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4343360,33.4309552]},{"content":"가맹점명:(주)이에스리조트클럽시군구:서귀포시행정동:중문동산정지역:서귀포시내ADDR:제주 서귀포시 1100로 501 .X:126.4560855Y:33.2893740매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4560855,33.2893740]},{"content":"가맹점명:(주)제담에프앤비더플레이트한라대점시군구:제주시행정동:노형동산정지역:제주시내ADDR:제주 제주시 한라대학로 15 2층X:126.4736524Y:33.4797692매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4736524,33.4797692]},{"content":"가맹점명:(주)제이원 에프앤비시군구:서귀포시행정동:동홍동산정지역:서귀포시내ADDR:제주 서귀포시 태평로 509, 205호 (동홍동, 제이원타워)X:126.5718499Y:33.2507539매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5718499,33.2507539]},{"content":"가맹점명:(주)제주국제컨벤션센터(던킨)시군구:서귀포시행정동:중문동산정지역:서귀포시내ADDR:제주 서귀포시 중문동 2700번지X:126.4242096Y:33.2411629매칭결과:구주소 정좌표", "label":"", "weight":10, "location": [126.4242096,33.2411629]},{"content":"가맹점명:(주)제주몬트락시군구:제주시행정동:건입동산정지역:제주시내ADDR:제주 제주시 임항로 20 (건입동)X:126.5269342Y:33.5163235매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5269342,33.5163235]},{"content":"가맹점명:(주)제주미니미니랜드시군구:제주시행정동:조천읍산정지역:조천읍ADDR:제주 제주시 조천읍 비자림로 606X:126.6746725Y:33.4336393매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.6746725,33.4336393]},{"content":"가맹점명:(주)제주서서갈비시군구:제주시행정동:노형동산정지역:제주시내ADDR:제주 제주시 광평동로 39 1층X:126.4689258Y:33.4830286매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4689258,33.4830286]},{"content":"가맹점명:(주)지이오코리아시군구:제주시행정동:노형동산정지역:제주시내ADDR:제주 제주시 은수길 108 .X:126.4875687Y:33.4670745매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4875687,33.4670745]},{"content":"가맹점명:(주)짱죽 제주점시군구:제주시행정동:아라동산정지역:제주시내ADDR:제주 제주시 연북로 514 1층 (아라일동)X:126.5354850Y:33.4840946매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5354850,33.4840946]},{"content":"가맹점명:(주)캐롯닷밀시군구:제주시행정동:애월읍산정지역:애월읍ADDR:제주 제주시 애월읍 광성로 76 .X:126.4156773Y:33.4583419매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4156773,33.4583419]},{"content":"가맹점명:(주)케이에프씨코리아 KFC서귀포HP시군구:서귀포시행정동:동홍동산정지역:서귀포시내ADDR:제주 서귀포시 중앙로 180 홈플러스 1층X:126.5599401Y:33.2604892매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5599401,33.2604892]},{"content":"가맹점명:(주)코드넷시군구:제주시행정동:오라동산정지역:제주시내ADDR:제주 제주시 사평6길 22 1층X:126.5139067Y:33.4907437매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5139067,33.4907437]},{"content":"가맹점명:(주)파리크라상파리바게뜨 제주공항점시군구:제주시행정동:용담2동산정지역:제주시내ADDR:제주 제주시 공항로 2, 3층 (용담이동)X:126.4948463Y:33.5065434매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4948463,33.5065434]},{"content":"가맹점명:(주)프랜치웍스시군구:제주시행정동:조천읍산정지역:조천읍ADDR:제주 제주시 조천읍 북촌11길 15-16 1층X:126.6944781Y:33.5499296매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.6944781,33.5499296]},{"content":"가맹점명:(주)피자알볼로 제주점시군구:제주시행정동:이도2동산정지역:제주시내ADDR:제주 제주시 남광로4길 35 1층X:126.5407076Y:33.4908909매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5407076,33.4908909]},{"content":"가맹점명:(주)한림공원시군구:제주시행정동:한림읍산정지역:한림읍ADDR:제주 제주시 한림읍 한림로 300X:126.2396008Y:33.3894246매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2396008,33.3894246]},{"content":"가맹점명:(주)한일고속시군구:제주시행정동:건입동산정지역:제주시내ADDR:제주 제주시 임항로 111 제주항연안여객터미널 (제주항제6부두62번선석,실버클라우드)건입동X:126.5347025Y:33.5196793매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5347025,33.5196793]},{"content":"가맹점명:064바당시군구:서귀포시행정동:표선면산정지역:표선면ADDR:제주 서귀포시 표선면 민속해안로 19, B동X:126.8066282Y:33.3053073매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.8066282,33.3053073]},{"content":"가맹점명:09학번시군구:제주시행정동:아라동산정지역:제주시내ADDR:제주 제주시 산천단동1길 7 1층X:126.5576443Y:33.4486700매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5576443,33.4486700]},{"content":"가맹점명:1004카페시군구:서귀포시행정동:대정읍산정지역:대정읍ADDR:제주 서귀포시 대정읍 영어도시로 40 1층X:126.2790024Y:33.2756792매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2790024,33.2756792]},{"content":"가맹점명:109고깃집시군구:서귀포시행정동:중문동산정지역:서귀포시내ADDR:제주 서귀포시 중문로 72 (중문동)X:126.4267068Y:33.2574772매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4267068,33.2574772]},{"content":"가맹점명:1100고지휴게소시군구:서귀포시행정동:예래동산정지역:서귀포시내ADDR:제주 서귀포시 1100로 1555 (색달동)X:126.4567450Y:33.3536919매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4567450,33.3536919]},{"content":"가맹점명:11시11분시군구:서귀포시행정동:서홍동산정지역:서귀포시내ADDR:제주 서귀포시 홍중동로 9 1층X:126.5592659Y:33.2571093매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5592659,33.2571093]},{"content":"가맹점명:12월시군구:제주시행정동:삼양동산정지역:제주시내ADDR:제주 제주시 삼봉로 134 1층X:126.5894940Y:33.5094784매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5894940,33.5094784]},{"content":"가맹점명:14온즈시군구:제주시행정동:일도2동산정지역:제주시내ADDR:제주 제주시 태성로1길 28-1 1층(일도이동)X:126.5460654Y:33.5012318매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5460654,33.5012318]},{"content":"가맹점명:17번가 소주호프시군구:제주시행정동:애월읍산정지역:애월읍ADDR:제주 제주시 애월읍 항몽로 17 1층X:126.4048761Y:33.4819502매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4048761,33.4819502]},{"content":"가맹점명:187센티멘트시군구:서귀포시행정동:천지동산정지역:서귀포시내ADDR:제주 서귀포시 서문로28번길 3 1층X:126.5584832Y:33.2505276매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5584832,33.2505276]},{"content":"가맹점명:18번가, INN 18th STREET시군구:제주시행정동:조천읍산정지역:조천읍ADDR:제주 제주시 조천읍 신촌북3길 18X:126.6172120Y:33.5369285매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.6172120,33.5369285]},{"content":"가맹점명:1950하우스시군구:제주시행정동:애월읍산정지역:애월읍ADDR:제주 제주시 애월읍 평화로 2369 1층X:126.4091712Y:33.4246936매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4091712,33.4246936]},{"content":"가맹점명:1974한식뷔페시군구:제주시행정동:연동산정지역:제주시내ADDR:제주 제주시 연북로 92 2층 201호X:126.4911376Y:33.4814889매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4911376,33.4814889]},{"content":"가맹점명:1984에이치시군구:제주시행정동:연동산정지역:제주시내ADDR:제주 제주시 은수길 69 .X:126.4881324Y:33.4705434매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4881324,33.4705434]},{"content":"가맹점명:1987준숯불바베큐시군구:서귀포시행정동:안덕면산정지역:안덕면ADDR:제주 서귀포시 안덕면 사계북로41번길 178-3 2층X:126.2982070Y:33.2489599매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2982070,33.2489599]},{"content":"가맹점명:1박2일시군구:서귀포시행정동:천지동산정지역:서귀포시내ADDR:제주 서귀포시 중앙로59번길 4 1층X:126.5611844Y:33.2500539매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5611844,33.2500539]},{"content":"가맹점명:1번가옛날통닭시군구:제주시행정동:아라동산정지역:제주시내ADDR:제주 제주시 산천단동3길 17, 1층 (아라일동)X:126.5586791Y:33.4491779매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5586791,33.4491779]},{"content":"가맹점명:1층마카롱시군구:제주시행정동:일도2동산정지역:제주시내ADDR:제주 제주시 신산로 83-1 1층(일도이동)X:126.5351310Y:33.5063952매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5351310,33.5063952]},{"content":"가맹점명:20년 전통부대찌개시군구:제주시행정동:삼도2동산정지역:제주시내ADDR:제주 제주시 중앙로14길 35, 1층 (삼도이동)X:126.5207348Y:33.5106238매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5207348,33.5106238]},{"content":"가맹점명:21스텝스시군구:서귀포시행정동:중문동산정지역:서귀포시내ADDR:제주 서귀포시 중문상로 39, 2층 (중문동)X:126.4253792Y:33.2519246매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4253792,33.2519246]},{"content":"가맹점명:24시 뼈다귀탕 삼화점시군구:제주시행정동:화북동산정지역:제주시내ADDR:제주 제주시 일주동로 222 1층X:126.5692074Y:33.5185861매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5692074,33.5185861]},{"content":"가맹점명:24시 전주명가콩나물국밥 노형점시군구:제주시행정동:노형동산정지역:제주시내ADDR:제주 제주시 월랑로10길 4 1층X:126.4766831Y:33.4891737매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4766831,33.4891737]},{"content":"가맹점명:24시국수회관시군구:제주시행정동:삼도1동산정지역:제주시내ADDR:제주 제주시 남성로 122-1 (삼도일동)X:126.5184310Y:33.5087661매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.5184310,33.5087661]},{"content":"가맹점명:24시누름돌김치찌개시군구:제주시행정동:연동산정지역:제주시내ADDR:제주 제주시 노연로 146 1층X:126.4958126Y:33.4855217매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4958126,33.4855217]},{"content":"가맹점명:24시뼈감탕한림점시군구:제주시행정동:한림읍산정지역:한림읍ADDR:제주 제주시 한림읍 한림남1길 1 1층X:126.2651889Y:33.4127021매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.2651889,33.4127021]},{"content":"가맹점명:24시뼈다귀신제주점시군구:제주시행정동:연동산정지역:제주시내ADDR:제주 제주시 삼무로 47 (연동)X:126.4917853Y:33.4900527매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.4917853,33.4900527]},{"content":"가맹점명:24시뼈다귀탕시군구:서귀포시행정동:표선면산정지역:표선면ADDR:제주 서귀포시 표선면 표선동서로 226X:126.8320419Y:33.3240143매칭결과:새주소 정좌표", "label":"", "weight":10, "location": [126.8320419,33.3240143]}]}';
    _fAlpha = 0.9;
    _sLayerNM = 'sfsdfsdf';
    _sPointSize = '20'; //json 파일의 weight가 우선 적용되어 무시됨
    _sPointSymbolType = 'circle';
    _sPointSymbolColor = 'rgba(255, 0, 0, 1.0)';
    */


    HM_createPointFromDataString(_fAlpha, _sLayerNM, _sDataString, _sPointSize, _sPointSymbolType, _sPointSymbolColor);

    _sDataString = null;
    _sLayerNM = null;
    _sPointSize = null;
    _sPointSymbolType = null;
    _sPointSymbolColor = null;

}

function getParameterByUrl(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function getRandomID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(36.5486919, 127.9274469), // 지도의 중심좌표
        level: 12 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

HM_setInit(map, document.getElementById("map"));
HM_setCustomLogo('bizgis inc.', 'rgba(225,0,44,0.5)', 'rgba(255,255,255,0.5)');






function onClickSavePng() {
    HM_SaveMapImage('Map.png');

    //HM_SetMapImageBase64String(); // 완료돠면 _HM_GetMapImageBase64String 함수 호출
}

//HM_SetMapImageBase64String 으로 호출한 경우 발생되는 이벤트 함수
function _HM_GetMapImageBase64String(sBase64) {
    alert(sBase64);
}



function onClickControShowHide() {
    if ($("#btnControShowHide").val() == '-') {
        $("#divControl").hide();
        $("#btnControShowHide").val('+');
    } else if ($("#btnControShowHide").val() == '+') {
        $("#divControl").show();
        $("#btnControShowHide").val('-');
    }
}



function onClickShowDensity() {
    ShowLayer(HM_getLayers()[0]); //첫번째 레이어 테스트
}

function onClickShowHDong() {
    ShowLayer(HM_getLayers()[0]); //첫번째 레이어 테스트
}

function onClickShowPoint() {
    ShowLayer(HM_getLayers()[0]); //첫번째 레이어 테스트
}


function onClickHideDensity() {
    HideLayer(HM_getLayers()[0]); //첫번째 레이어 테스트
}

function onClickHideHDong() {
    HideLayer(HM_getLayers()[0]); //첫번째 레이어 테스트
}

function onClickHidePoint() {
    HideLayer(HM_getLayers()[0]); //첫번째 레이어 테스트
}


function onClickRemoveDensity() {
    RemoveLayer(HM_getLayers()[0]); //첫번째 레이어 테스트
}

function onClickRemoveHDong() {
    RemoveLayer(HM_getLayers()[0]); //첫번째 레이어 테스트
}

function onClickRemovePoint() {
    RemoveLayer(HM_getLayers()[0]); //첫번째 레이어 테스트
}

function onClickCreateLegendDensity() {
    CreateLegend(HM_getLayers()[0]); //첫번째 레이어 테스트
}

function onClickRemoveLegend() {
    RemoveLegend();
}

function onClickCreateLegendPoly() {
    CreateLegend(HM_getLayers()[0]); //첫번째 레이어 테스트
}


function itemChangeTABLE() //selectTABLE
{
    $('#selectSELECT').empty();
    $('#selectWHERE').empty();

    //select
    var selectStr = $("#selectTABLE").val();
    var aTemp = selectStr.split("#|#");
    var aTemp2 = aTemp[1].split("|");

    for (var i in aTemp2) {
        if (aTemp2[i] != "") {
            var option = $("<option value=\"" + aTemp2[i] + "\">" + aTemp2[i] + "</option>");

            $('#selectSELECT').append(option);
        }
    }

    selectStr = null;


    //Where
    var selectStr = $("#selectTABLE").val();
    var aTemp = selectStr.split("#|#");
    var aTemp2 = aTemp[2].split("|");

    for (var i in aTemp2) {
        if (aTemp2[i] != "") {
            var option = $("<option value=\"" + aTemp2[i] + "\">" + aTemp2[i] + "</option>");

            $('#selectWHERE').append(option);
        }
    }

    selectStr = null;

}

function itemChangeSELECT() {

}


////////////////////////////////////////////////////////////////////////
//Function

var m_sBaseUrlHeatMap = 'https://mms.gislab.co.kr:444/API.php?';
var m_sBaseUrlHeatMap2 = 'https://mms.gislab.co.kr:444/heatmap_api/';
var m_sMBIZUrl = 'https://www.policymap.or.kr/SEND_MOBILE/';



//테이블 및 컬럼 정보 가져오기
var oHttpRq = new XMLHttpRequest();
oHttpRq.addEventListener("load", onGetHttp);
oHttpRq.open("GET", m_sBaseUrlHeatMap2 + "tb_list.txt");
oHttpRq.send();

function onGetHttp() {
    var aTemp = this.responseText.split('\n');
    //alert(aTemp[0]);

    $('#selectTABLE').empty();
    for (var i in aTemp) {
        if (aTemp[i] != "") {
            var aTemp2 = aTemp[i].split("#|#");
            //var option = $("<option value='"+aTemp2[0]+"' SELECT='"+aTemp2[1]+"' WHERE='"+aTemp2[2]+"'>"+aTemp2[0]+"</option>");
            var option = $("<option value=\"" + aTemp[i] + "\">" + aTemp2[0] + "</option>");

            $('#selectTABLE').append(option);
        }

    }
    oHttpRq = null;

    //itemChangeTABLE();
}

////????????
var g_nLayerListW = 300; //레이어 리스트 넓이
var g_bLayerListShow = false; //자동으로 내장된 레이어 리스트 출력여부
var g_bLayerListRight = false; //레이어 리스트 우측에 표시할지 여부
var g_bMapLegendShow = true; //지도 하단에 표시되는 레전드(제일 상위 레전드만 출력되므로 사용시 중의할 것)
var g_bGrayMap = true;


if (getParameterByUrl('BASELEGEND') == "TRUE") {
    g_bLayerListShow = false; //자동으로 내장된 레이어 리스트 출력여부
    g_bViewerLegendShow = true; //지도 하단에 표시되는 레전드(제일 상위 레전드만 출력되므로 사용시 중의할 것)
    document.all.legend.style.display = "none";
}



function CreateLegend(oHM) {
    if (oHM != null)
        HM_CreateBottomAutoLegend(HM_getLegendStr(oHM), legend);
}

function RemoveLegend() {
    HM_RemoveBottomAutoLegend(legend);
}

function refreshLayer() {
    HM_forceRefreshAndReloadPoint();
}

function __fun1() {
    _h_clearClickMarkerForMMS();
}


window.addEventListener('message', function(e) {
    if (e.MODE = "SEND_MAIN|CLICK_FIRE_MARKER") {
        //e.FIRE_INFO
        // console.log(e.data);

    }

    // console.log(e.data);

});

function _hook_MapEvent(oData) {
    // console.log(oData);
    //oData.MODE
    //oData.LATLNG
}