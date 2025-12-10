/* 내 위치 표시 (GPS) */
{
    let myPositionState = false;
    let gpsButton = document.querySelector('.gis-gps.gis-util');
    if (gpsButton) {
        const user = navigator.userAgent;
        let myPositionOverlay;

        function myPositionSearch() {
            if (!myPositionState) {
                const watchID = navigator.geolocation.getCurrentPosition(success, error);
            } else {
                gpsButton.classList.remove('on');
                myPositionOverlay.setMap(null);
                myPositionOverlay = null;
                myPositionState = false;
            }
        }

        // 위치접근 설정 허용시
        function success(position) {
            window.parent.onLoading({
                type: 'class',
                element: '.pc-wrap'
            });
            if (myPositionState) return;

            markerPosition = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);
            let content = document.createElement('div');
            content.id = 'my-position-marker';

            myPositionOverlay = new kakao.maps.CustomOverlay({
                map: map,
                content: content,
                position: new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude),
                zIndex: 99999,
            });

            gpsButton.classList.add('on');
            map.panTo(markerPosition);
            myPositionState = true;
            window.parent.offLoading({
                type: 'class',
                element: '.pc-wrap'
            });
        }

        // 위치접근 설정 거부시
        function error() {
            let info = {};
            if (user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
                // 모바일
                const type = mobailCheck();
                switch (type) {
                    case 'ios':
                        info.image = '/html/jeju/widget/img/mobile_ios.jpg';
                        info.imageText = '※ 위 이미지는 Safari 브라우저일 경우의 예시입니다.';
                        info.text = '[설정 - 개인정보 보호 및 보안 - 위치 서비스] <br>해당 브라우저에 접근 권한 설정을 허용으로 변경해주세요.';
                        break;
                    case 'android':
                        info.image = '/html/jeju/widget/img/mobile_android.jpg';
                        info.imageText = '※ 위 이미지는 크롬 브라우저일 경우의 예시입니다.'
                        info.text = '[설정 - 위치 - 앱 권한] <br>해당 브라우저에 접근 권한 설정을 허용으로 변경해주세요.';
                        break;
                    default:
                        info.image = null;
                        info.text = '위치 접근 권한 허용이 필요합니다. <br>설정에서 위치 접근 권한이 허용되도록 해주세요.';
                        break;
                }
            } else {
                // pc
                const type = browserCheck();
                switch (type) {
                    case 'edge':
                        info.image = '/html/jeju/widget/img/pc_edge.jpg';
                        info.text = '위치 접근 권한 허용이 필요합니다. <br>[설정 - 쿠키 및 사이트 권한 - 위치]';
                        break;
                    case 'edge(chromium based)':
                        info.image = '/html/jeju/widget/img/pc_edge.jpg';
                        info.text = '위치 접근 권한 허용이 필요합니다. <br>[설정 - 쿠키 및 사이트 권한 - 위치]';
                        break;
                    case 'whale':
                        info.image = '/html/jeju/widget/img/pc_whale.jpg';
                        info.text = '위치 접근 권한 허용이 필요합니다. <br>[설정 - 개인정보 보호 - 사이트 설정 - 위치]';
                        break;
                    case 'chrome':
                        info.image = '/html/jeju/widget/img/pc_chrome.jpg';
                        info.text = '위치 접근 권한 허용이 필요합니다. <br>[설정 - 개인 정보 보호 및 보안 - 사이트 설정 - 위치]';
                        break;
                    case 'firefox':
                        info.image = '/html/jeju/widget/img/pc_firefox.jpg';
                        info.text = '위치 접근 권한 허용이 필요합니다. <br>[설정 - 개인 정보 및 보안 - 위치]';
                        break;
                    default:
                        info.image = null;
                        info.text = '위치 접근 권한 허용이 필요합니다. <br>설정에서 위치 접근 권한이 허용되도록 해주세요.';
                        break;
                }
            }
            setAlert(info);
        }

        // 거부시 레이어
        function setAlert(info) {
            let layer;
            if (!info.image) {
                layer = `
          <div id="location_service" class="alert-layer type2 active">
            <div class="layer-inner">
              <p>${info.text}</p>
              <button type="button" class="layer-btn">확인</button>
            </div>
          </div>
        `
            } else {
                if (!info.imageText) {
                    layer = `
            <div id="location_service" class="alert-layer type2 active">
              <div class="layer-inner">
                <img src="${info.image}">
                <p>${info.text}</p>
                <button type="button" class="layer-btn">확인</button>
              </div>
            </div>
          `
                } else {
                    layer = `
            <div id="location_service" class="alert-layer type2 active">
              <div class="layer-inner">
                <img src="${info.image}">
                <span class="image-text">${info.imageText}</span>
                <p>${info.text}</p>
                <button type="button" class="layer-btn">확인</button>
              </div>
            </div>
          `
                }
            }
            window.parent.showAlert(layer);
        }

        // PC, 모바일별 브라우저 & 앱 구분
        function browserCheck() {
            let user = window.navigator.userAgent.toLowerCase();
            let browser =
                user.indexOf('edge') > -1 ?
                'edge' // MS 엣지
                :
                user.indexOf('edg/') > -1 ?
                'edge(chromium based)' // 크롬기반 엣지
                :
                user.indexOf('whale') > -1 ?
                'whale' // 네이버웨일
                :
                user.indexOf('chrome') > -1 ?
                'chrome' // 크롬
                :
                user.indexOf('trident') > -1 ?
                'ie' // 익스플로러
                :
                user.indexOf('firefox') > -1 ?
                'firefox' // 파이어폭스
                :
                user.indexOf('safari') > -1 ?
                'safari' // 사파리
                :
                'other'; // 기타
            return browser;
        }

        function mobailCheck() {
            let user = navigator.userAgent;
            let mobile =
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                );

            if (mobile) {
                mobile =
                    user.match(/lg/i) != null ?
                    'lg' :
                    user.match(/iphone|ipad|ipod/i) != null ?
                    'ios' :
                    user.match(/android/i) != null ?
                    'android' :
                    'other';
            } else {
                mobile = browserCheck();
            }
            return mobile;
        }

        if (user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
            document.querySelector('.gis-gps.gis-util').ontouchend = (e) => {
                myPositionSearch();
            };
        } else {
            document.querySelector('.gis-gps.gis-util').onclick = (e) => {
                myPositionSearch();
            };
        }
    }
}

/* 내 위치 표시 오류 실행함수 (main에서 실행됨) */
function showAlert(layer) {
    const wrap = document.querySelector('#alert_container');
    wrap.innerHTML += layer;
    const locationLayer = wrap.querySelector('#location_service');
    const closeButton = locationLayer.querySelector('.layer-btn');
    closeButton.addEventListener('click', () => {
        locationLayer.remove();
    })
}