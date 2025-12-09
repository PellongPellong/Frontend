


<!DOCTYPE html>
<html lang='ko' class="pc">
<head>

<!-- Google tag (gtag.js) -->








<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
<title>제주관광객분포도</title>

<!-- Favicon -->
<link rel="shortcut icon" type="image/x-icon" href="/bigdatamap/html/jeju/widget/img/favicon.ico" />


<!-- CSS -->
<link rel="stylesheet" href="/bigdatamap/html/jeju/widget/css/common.css"/>

<!-- JS -->
<script src="/bigdatamap/pcms/common/pluigs/jQuery/jquery-3.6.1.min.js"></script>
<script src="/bigdatamap/js/common/optionSetting.js"></script>
<script src="/bigdatamap/html/jeju/widget/js/common.js"></script>
<script src="/bigdatamap/html/jeju/widget/js/loading.js"></script>
<script src="/bigdatamap/html/jeju/widget/js/addrlink.js"></script>
<script src="/bigdatamap/html/jeju/widget/js/analysis.js"></script>



<script src="/bigdatamap/html/jeju/widget/js/otp_certification.js"></script>
<script src="/bigdatamap/pcms/common/pluigs/slick/slick.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsSHA/2.4.2/sha.js"></script>
<script src="/bigdatamap/html/jeju/widget/js/locationService.js" defer></script>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WNQGFKM9T6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WNQGFKM9T6');
</script>

 <style>
    body { font-family: Arial, sans-serif; }

    .popup-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.7);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .popup-content {
      position: relative;
      background: #fff;
      border-radius: 8px;
      padding: 10px;
      max-width: 80%;
      max-height: 80%;
      box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    }

    .popup-content img {
      max-width: 100%;
      max-height: 100%;
      display: block;
    }

    .popup-footer {
      margin-top: 10px;
      text-align: right;
      font-size: 14px;
    }

    .popup-footer label {
      cursor: pointer;
    }

    .popup-close {
      position: absolute;
      top: 8px; right: 12px;
      font-size: 20px;
      cursor: pointer;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="popup-overlay" id="popup">
    <div class="popup-content">
      <span class="popup-close" onclick="closePopup()">×</span>
      <img src="/bigdatamap/html/jeju/widget/img/noDataPopup.jpg" alt="">
      <div class="popup-footer">
        <label>
          <input type="checkbox" id="todayClose"> 오늘 하루 보지 않기
        </label>
      </div>
    </div>
  </div>

<script>
    // 오늘 날짜 key (예: 2025-08-18)
    const todayKey = new Date().toISOString().slice(0,10);

    // 페이지 로드 시 확인
    window.onload = function() {
      if (localStorage.getItem("popupClose") === todayKey) {
        // 오늘 하루 닫기 체크된 경우 -> 팝업 안 띄움
        return;
      }

      // 정상 서비스로 주석 처리 by ISU 2025-08-20
      // document.getElementById("popup").style.display = "flex";
    }
    

    function closePopup() {
      // 체크박스 선택 시 오늘 날짜 저장
      if (document.getElementById("todayClose").checked) {
        localStorage.setItem("popupClose", todayKey);
      }
      document.getElementById("popup").style.display = "none";
    }
  </script>
  <div class="block" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"></div>

  <!-- 모바일 유틸 :s -->
  <div class="mobile-wrap">
    <form>
      <div class="search-wrap">
        <div class="search-type left">
          <span class="type-text">키워드</span>
          <button type="button" class="search-type-btn" data-type="0">
            <span class="btn-inner"></span>
          </button>
          <span class="type-text">주소</span>
        </div>
        <div class="input-box">
          <input type="text" class="popSearchInput" title="검색어를 입력하세요" name="keyword" id="keyword" value=""  tabindex="1" placeholder="축제 관광지명을 입력해주세요">
          <button type="button" class="clear-btn"></button>
        </div>
        <button type="submit" title="검색" tabindex="2" class="search-btn"></button>
      </div>
    </form>

    <div class="mobile-category">
      <button type="button" class="category-btn hot jeju-festival-btn" data-api="N">
        <span class="icon icon0"></span>
        <strong class="title">제주축제</strong>
      </button>
      
      <button type="button" class="category-btn" id="AT4_mobile" data-order="11">
        <span class="icon icon7"></span>
        <strong class="title">관광지</strong>
      </button>
      <button type="button" class="category-btn" id="PK6_mobile" data-order="5">
        <span class="icon icon4"></span>
        <strong class="title">주차장</strong>
      </button>
      <button type="button" class="category-btn" id="OL7_mobile" data-order="6">
        <span class="icon icon5"></span>
        <strong class="title">주유소</strong>
      </button>
      <button type="button" class="category-btn" id="FD6_mobile" data-order="13">
        <span class="icon icon17"></span>
        <strong class="title">음식점</strong>
      </button>
      <button type="button" class="category-btn" id="CE7_mobile" data-order="14">
        <span class="icon icon8"></span>
        <strong class="title">카페</strong>
      </button>
      <button type="button" class="category-btn" id="CS2_mobile" data-order="1">
        <span class="icon icon1"></span>
        <strong class="title">편의점</strong>
      </button>
      <button type="button" class="category-btn" id="MT1_mobile" data-order="0">
        <span class="icon icon11"></span>
        <strong class="title">마트</strong>
      </button>
      <button type="button" class="category-btn" id="HP8_mobile" data-order="15">
        <span class="icon icon9"></span>
        <strong class="title">병원</strong>
      </button>
      <button type="button" class="category-btn" id="PM9_mobile" data-order="16">
        <span class="icon icon10"></span>
        <strong class="title">약국</strong>
      </button>
      <button type="button" class="category-btn" id="AD5_mobile" data-order="12">
        <span class="icon icon16"></span>
        <strong class="title">숙박</strong>
      </button>
      <button type="button" class="category-btn" id="CT1_mobile" data-order="8">
        <span class="icon icon13"></span>
        <strong class="title">문화시설</strong>
      </button>
      <button type="button" class="category-btn" id="BK9_mobile" data-order="7">
        <span class="icon icon6"></span>
        <strong class="title">은행</strong>
      </button>
      <button type="button" class="category-btn" id="SC4_mobile" data-order="3">
        <span class="icon icon3"></span> 
        <strong class="title">학교</strong>
      </button>

      <!-- <button type="button" class="category-btn" id="PS3_mobile" data-order="2">
        <span class="icon icon2"></span>
        <strong class="title">어린이집</strong>
      </button> -->
      <!-- <button type="button" class="category-btn" id="AC5_mobile" data-order="4">
        <span class="icon icon12"></span>
        <strong class="title">학원</strong>
      </button> -->
      <!-- <button type="button" class="category-btn" id="PO3_mobile" data-order="10">
        <span class="icon icon15"></span>
        <strong class="title">공공기관</strong>
      </button> -->
      <!-- <button type="button" class="category-btn" id="AG2_mobile" data-order="9">
        <span class="icon icon14"></span>
        <strong class="title">중개업소</strong>
      </button> -->
    </div>
  </div>
  <!-- 모바일 유틸 :e -->

  <div id="map" style="display: none;"></div>

  <div class="pc-wrap">

    <div class="mobile-right">
      <div class="mouseRightOverlay">
        <button class="closeBtn">닫기</button>
        <strong class="info-title">위치정보</strong>
        <ul class="info-list">
          <li class="addr"><strong>지번 주소 </strong><span>제주특별자치도 제주시 조천읍 선흘리 산 103-1</span></li>
          <li class="latlng"><strong>경위도 좌표 </strong><span>33.45033904863398, 126.71020392816014</span></li>
          <li class="utmk"><strong>UTMK </strong><span>926567.3412287974 , 1495475.42998145</span></li>
        </ul>
        <div class="mouseRightBtns">
          <button class="area-border-remove">행정경계 제거</button>
          <button class="area-border-add">행정경계 추가</button>
        </div>
      </div>
    </div>

    <button onclick="toggleArea()" class="analysis-btn">
      <div class="analysis-text">영역분석</div>
      <div class="analysis-text2">시작하기</div>
    </button>
    <!-- <button onclick="toggleArea()" class="analysis-btn">영역분석</button> -->

    <div class="header-util">
      <button type="button" class="home-btn"></button>
      <button type="button" class="sitemap-btn"></button>
      <div class="legend-overlay-custom">
        <strong>유동인구 분포</strong>
        <div class="content">
          <div class="level">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <!-- GNB 사이트맵 :s -->
    <div class="sitemap">
      <div class="sitemap-header">
        <a href="https://data.ijto.or.kr/" class="sitemap-logo" target="_blank" title="새창열림" rel="noopener noreferrer">
          <img src="/bigdatamap/html/jeju/widget/img/gnb_logo.png" alt="제주관광 빅데이터서비스 플랫폼">
        </a>
        <nav class="sitemap-gnb">
          <ul class="sitemap-list">
            <li class="sitemap-item">
              <a href="https://data.ijto.or.kr/content/CO20231228150028017UPTB" class="item-link" target="_blank" title="새창열림" rel="noopener noreferrer">실시간 빅데이터 분석</a>
              <ul class="depth2">
                <li class="depth2-item">
                  <a href="https://data.ijto.or.kr/bigdatamap/jeju/widget/main.do">관광객 분포도</a>
                </li>
                <li class="depth2-item">
                  <a href="https://data.ijto.or.kr/content/CO20231228151633014MX8E" target="_blank" title="새창열림" rel="noopener noreferrer">차량 분포도</a>
                </li>
              </ul>
            </li>
            <li class="sitemap-item">
              <a href="https://data.ijto.or.kr/content/CO2023122815183301YL2GC" class="item-link" target="_blank" title="새창열림" rel="noopener noreferrer">입도&middot;이동 통계</a>
              <ul class="depth2">
                <li class="depth2-item">
                  <a href="https://data.ijto.or.kr/content/CO2023122815183301YL2GC" target="_blank" title="새창열림" rel="noopener noreferrer">제주 방문 통계</a>
                </li>
                <li class="depth2-item">
                  <a href="https://data.ijto.or.kr/content/CO2023122815193501JLM74" target="_blank" title="새창열림" rel="noopener noreferrer">지역별 여행 키워드</a>
                </li>
                <li class="depth2-item">
                  <a href="https://data.ijto.or.kr/content/CO2023122815165701HDJRT" target="_blank" title="새창열림" rel="noopener noreferrer">월간 차량 이동 분석</a>
                </li>
                <li class="depth2-item">
                  <a href="https://data.ijto.or.kr/content/CO20231228151921014MWG5" target="_blank" title="새창열림" rel="noopener noreferrer">관광객 거주지 분포</a>
                </li>
              </ul>
            </li>
            <li class="sitemap-item">
              <a href="https://data.ijto.or.kr/content/CO202408211000000100QMF" class="item-link" target="_blank" title="새창열림" rel="noopener noreferrer">생산&middot;소비 통계</a>
              <ul class="depth2">
                <li class="depth2-item">
                  <a href="https://data.ijto.or.kr/content/CO202408211000000100QMF" target="_blank" title="새창열림" rel="noopener noreferrer">월간 제주 소비 동향</a>
                </li>
                <li class="depth2-item">
                  <a href="https://data.ijto.or.kr/content/CO2024102916294901T3ENL" target="_blank" title="새창열림" rel="noopener noreferrer">월간 제주 외식물가</a>
                </li>
                <li class="depth2-item">
                  <a href="https://data.ijto.or.kr/content/CO2023122815190801F9AIH" target="_blank" title="새창열림" rel="noopener noreferrer">업종별 소비 분석</a>
                </li>
                <li class="depth2-item">
                  <a href="https://data.ijto.or.kr/content/CO2023122815185301U1KHG" target="_blank" title="새창열림" rel="noopener noreferrer">종합 소비 분석</a>
                </li>
              </ul>
            </li>
            <li class="sitemap-item">
              <a href="https://data.ijto.or.kr/community/board-7/BM2024102314231701CMOXTV" class="item-link" target="_blank" title="새창열림" rel="noopener noreferrer">자료실</a>
              <ul class="depth2">
                <li class="depth2-item">
                  <a href="https://data.ijto.or.kr/community/board-7/BM2024102314231701CMOXTV" target="_blank" title="새창열림" rel="noopener noreferrer">보고서 게시판</a>
                </li>
                <li class="depth2-item">
                  <a href="https://data.ijto.or.kr/community/board-1/BM2023112115235401NULQZI" target="_blank" title="새창열림" rel="noopener noreferrer">데이터 내려받기</a>
                </li>
              </ul>
            </li>
            <li class="sitemap-item">
              <a href="https://data.ijto.or.kr/community/board-4/BM2023112915205701YVTMJB" class="item-link" target="_blank" title="새창열림" rel="noopener noreferrer">알림&middot;소통</a>
              <ul class="depth2">
                <li class="depth2-item">
                  <a href="https://data.ijto.or.kr/community/board-4/BM2023112915205701YVTMJB" target="_blank" title="새창열림" rel="noopener noreferrer">공지사항</a>
                </li>
                <li class="depth2-item">
                  <a href="https://data.ijto.or.kr/community/board-2/BM2023112117324001EMXGNO" target="_blank" title="새창열림" rel="noopener noreferrer">FAQ</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <button type="button" class="close-btn">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFFSURBVHgB7ZhRCoJAEIbXQqgb9BLYUbxLL52ol+7SURJ66QYFUpujwaLZ5sz+8+R8YIngzv/BujvqnGEYhmEYxnzJHJPHaXuhf1/X5fpwqxyA+3FTZHl+pvPV/rrj3LtwbF7N4duCVNglEsL7ohubB1vA18+y+a0QEv3wvurG5sGeQqHwsimcFc1RSabTWHjJlBQJhAAyCVR4QiwQgvAkkOGJJIEQaJoEOjyRLBCCxSU0whMQASImoRWegAkQYxJtEaXw7dgOzFCiu6oTnoALEH0JQic8IWglJEPrlVGaQmHOf8oU0h37HwoP8Xdvk9p2xAAvo+OrDaJ3+gVwI4svlVoSoFZi2jqvIQFo5nibFFoisZ2W7bBIiYQXmrT2ACXBFkA2ZggJ9haJbMzo3uE7tmMi/SoB6236EvyvEoZhGIZhGHPmDU7mkClCYFWeAAAAAElFTkSuQmCC" alt="모바일 메뉴 닫기">
        </button>
      </div>
    </div>
    <!-- GNB 사이트맵 :e -->

    <div class="main">
      <iframe id='iframeMap_LEFT' name="left" frameborder="0" src="/bigdatamap/html/jeju/widget/gis.jsp?CD=50&FILE=mms1_any_mega.biz&BIZ_PARA=COMPANY_ID&BIZ_PARA2=50_PUBLIC_MMS&LEGEND_LOCATION=LEFT&BASELEGEND=TRUE&MMS_PUBLIC=TRUE&MOVE=TRUE" width="100%" height="100%" title="gis 아이프레임"></iframe>
      <!-- <iframe id='iframeMap_LEFT' name="left" frameborder="0" src="/html/jeju/widget/gis.jsp?UID=LEFT&CD=30200&FILE=mms1_30200.biz&LEGEND_LOCATION=LEFT&BASELEGEND=TRUE&MMS_PUBLIC=TRUE&MOVE=TRUE" width="100%" height="100%"></iframe> -->
      <!-- <iframe id='iframeMap_LEFT' name="left" frameborder="0" src="/html/jeju/widget/gis.jsp?UID=LEFT&CD=30200&LEGEND_LOCATION=LEFT&BASELEGEND=TRUE&MMS_PUBLIC=TRUE&MOVE=TRUE" width="100%" height="100%"></iframe> -->
    </div>
    <div class="iframe">
      <!-- 관리자 버튼 -->
      <button tpye="button" class="manage-btn" data-popup-id="otp_layer">OTP로그인</button>
      <button tpye="button" onclick="otp_logout()" class="logout-btn" data-popup-id="otp_logout">로그아웃</button>
      <!-- 관리자 버튼 End -->

      <div class="mobile-touch">
        <span class="bar"></span>
      </div>

      <button type="button" class="updown-btn"></button>

      <button type="button" class="toggle-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="iframe-inner">
        <iframe id="iframe-widget" src="/bigdatamap/jeju/widget/search.do" frameborder="0" title="검색 메인 아이프레임"></iframe>
      </div>
    </div>

    <div class="footer">
       <div class="footer-content open">
        <button type="button" class="footer-btn"></button>

        <div class="content-box box1">
          <strong class="content-title">주변탐색</strong>
          <div class="footer-category">
            <button type="button" class="category-btn hot jeju-festival-btn special" data-api="N">
              <span class="icon icon0"></span>
              <strong class="title">제주축제</strong>
            </button>
            
            <button type="button" class="category-btn" id="AT4" data-order="11">
              <span class="icon icon7"></span>
              <strong class="title">관광지</strong>
            </button>
            <button type="button" class="category-btn" id="PK6" data-order="5">
              <span class="icon icon4"></span>
              <strong class="title">주차장</strong>
            </button>
            <button type="button" class="category-btn" id="OL7" data-order="6">
              <span class="icon icon5"></span>
              <strong class="title">주유소</strong>
            </button>
            <button type="button" class="category-btn" id="FD6" data-order="13">
              <span class="icon icon17"></span>
              <strong class="title">음식점</strong>
            </button>
            <button type="button" class="category-btn" id="CE7" data-order="14">
              <span class="icon icon8"></span>
              <strong class="title">카페</strong>
            </button>
            <button type="button" class="category-btn" id="CS2" data-order="1">
              <span class="icon icon1"></span>
              <strong class="title">편의점</strong>
            </button>
            <button type="button" class="category-btn" id="MT1" data-order="0">
              <span class="icon icon11"></span>
              <strong class="title">마트</strong>
            </button>
            <button type="button" class="category-btn" id="HP8" data-order="15">
              <span class="icon icon9"></span>
              <strong class="title">병원</strong>
            </button>
            <button type="button" class="category-btn" id="PM9" data-order="16">
              <span class="icon icon10"></span>
              <strong class="title">약국</strong>
            </button>
            <button type="button" class="category-btn" id="AD5" data-order="12">
              <span class="icon icon16"></span>
              <strong class="title">숙박</strong>
            </button>
            <button type="button" class="category-btn" id="CT1" data-order="8">
              <span class="icon icon13"></span>
              <strong class="title">문화시설</strong>
            </button>
            <button type="button" class="category-btn" id="BK9" data-order="7">
              <span class="icon icon6"></span>
              <strong class="title">은행</strong>
            </button>
            <button type="button" class="category-btn" id="SC4" data-order="3">
              <span class="icon icon3"></span> 
              <strong class="title">학교</strong>
            </button>
      
            <!-- <button type="button" class="category-btn" id="PS3" data-order="2">
              <span class="icon icon2"></span>
              <strong class="title">어린이집</strong>
            </button> -->
            <!-- <button type="button" class="category-btn" id="AC5" data-order="4">
              <span class="icon icon12"></span>
              <strong class="title">학원</strong>
            </button> -->
            <!-- <button type="button" class="category-btn" id="PO3" data-order="10">
              <span class="icon icon15"></span>
              <strong class="title">공공기관</strong>
            </button> -->
            <!-- <button type="button" class="category-btn" id="AG2" data-order="9">
              <span class="icon icon14"></span>
              <strong class="title">중개업소</strong>
            </button> -->
          </div>
        </div>
       </div>
       <script>
       
       if(location.href.indexOf("lat") > -1){
        let url = new URL(location.href).searchParams
        let data = {lat : url.get('lat'), lng : url.get('lng'), round : url.get('round')}
        history.replaceState({}, null, location.pathname);
        setTimeout(() => {
          cn_ReceiveData(data)
        }, 1500)
        

       }

       function cn_ReceiveData(receive){
        console.log(receive.lat, receive.lng)
        const data = [{
          addr : "제주특별자치도 제주시 애월읍 천덕로 880-24",
          img : "http://tong.visitkorea.or.kr/cms/resource/76/3461676_image2_1.jpg",
          lat :receive.lng,
          lot : receive.lat,
          radius : receive.round,
          spotNm : ["테스트"]
        }]
        document.querySelector('#iframeMap_LEFT').contentWindow.createMarker(data);
        document.querySelector('#iframeMap_LEFT').contentWindow.changeMapCenter(receive.lat, receive.lng)
        const serveData = {
						x: receive.lng,
						y: receive.lat,
						place_name: "테스트"
					}

        categoryClick(serveData, data[0])
       }
      
       </script>
       <script>
        // 관리자 팝업 윈도우 사이즈
         function openAuth() {
           let popupW = 570;
           let popupH = 420;
           let left = Math.ceil((window.screen.width - popupW) / 2);
           let top = Math.ceil((window.screen.height - popupH) / 2);
           window.open('/html/jeju/widget/admin/auth.html', 'auth', 'width=' + popupW + ', height=' + popupH + ', left=' + left + ', top=' + top + ', scrollbars=yes, resizable=no, toolbar=no, titlebar=no, menubar=no, location=no');
         }
       </script>

       <script>
        document.querySelector(".updown-btn").addEventListener("click", (e) => {
          if (document.querySelector(".iframe").classList.contains("up")) {
            document.querySelector(".iframe").classList.remove("up");
          } else {
            document.querySelector(".iframe").classList.add("up");
          }
        })
      </script>

       <script>
         // footer-content => bar 클래스
         document.querySelectorAll(".slide .item .item-inner").forEach((a, i) => {
           let text = a.querySelector("img").getAttribute("alt");
           let p = document.createElement("p");
           p.textContent = text;
           // p.style.width = window.innerWidth - 380 + "px"
           a.append(p);
         })

         if (window.innerWidth < 1899) {
           slideResize();
         }

         window.addEventListener("resize", (e) => {
           slideResize();
         })
         let posX = 0;

         function slideResize() {
           if (window.innerWidth < 1899) {
             document.querySelector(".footer-content").classList.add("bar");
           } else {
             document.querySelector(".footer-content").classList.remove("bar");
           }

           //   document.querySelectorAll(".slide .item .item-inner").forEach((a, i) => {
           //   if(a.querySelector("p").offsetWidth > window.innerWidth - 400){
           //     setTimeout(()=>{
           //       posX += 1;
           //       a.querySelector("p").style.marginLeft = -posX + "px"
           //     }, 100)
           //   }
           // })
         }
       </script>

       <div class="footer-bottom">
        <!-- 날씨: s -->
        <div class="weather-box">
          <div class="box-item">
            <span class="key point">데이터 기준 일시</span>
            <strong id="crtrDt" class="value"></strong>
          </div>
          
          <div class="box-item weather">
            <div class="current">
              <span class="key">현재</span>
              <strong class="value ">
                <span class="celsius">&deg;</span>
                <span class="skip"></span>
              </strong>
            </div>

            <div class="next">
              <span class="key">1시간 뒤</span>
              <strong class="value ">
                <span class="celsius">&deg;</span>
                <span class="skip"></span>
              </strong>
            </div>
          </div>
        </div>
        <!-- 날씨: e -->

        <div class="guide-box">
          <a href="#" class="guide-button" data-popup-id="guide_video_layer">이용가이드 <span>동영상</span></a>
          <a href="/bigdatamap/html/jeju/widget/img/guide_pc.pdf" class="guide-button" target="_blank" title="새창열림">이용가이드 <span>PDF</span></a>
        </div>
       </div>
    </div>
  </div>

  <!-- 모바일 푸터 메뉴 :s -->
  <div class="mobile-footer">
    <ul class="mobile-gnb">
      <li class="mobile-menu">
        <button type="button" class="mobile-link home on">홈</button>
      </li> 
      <li class="mobile-menu">
        <button type="button" class="mobile-link area">영역분석</button>
      </li>
      <li class="mobile-menu">
        <button type="button" class="mobile-link menu">메뉴</button>
      </li>
    </ul>

    <div class="sitemap">
      <div class="sitemap-header">
        <img src="/bigdatamap/html/jeju/widget/img/gnb_logo.png" alt="제주관광 빅데이터서비스 플랫폼">
        <button type="button" class="close-btn">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFFSURBVHgB7ZhRCoJAEIbXQqgb9BLYUbxLL52ol+7SURJ66QYFUpujwaLZ5sz+8+R8YIngzv/BujvqnGEYhmEYxnzJHJPHaXuhf1/X5fpwqxyA+3FTZHl+pvPV/rrj3LtwbF7N4duCVNglEsL7ohubB1vA18+y+a0QEv3wvurG5sGeQqHwsimcFc1RSabTWHjJlBQJhAAyCVR4QiwQgvAkkOGJJIEQaJoEOjyRLBCCxSU0whMQASImoRWegAkQYxJtEaXw7dgOzFCiu6oTnoALEH0JQic8IWglJEPrlVGaQmHOf8oU0h37HwoP8Xdvk9p2xAAvo+OrDaJ3+gVwI4svlVoSoFZi2jqvIQFo5nibFFoisZ2W7bBIiYQXmrT2ACXBFkA2ZggJ9haJbMzo3uE7tmMi/SoB6236EvyvEoZhGIZhGHPmDU7mkClCYFWeAAAAAElFTkSuQmCC" alt="모바일 메뉴 닫기">
        </button>
      </div>
      <nav class="sitemap-gnb">
        <ul class="sitemap-list">
          <li class="sitemap-item">
            <a href="#" class="item-link">실시간 빅데이터 분석</a>
            <ul class="depth2">
              <li class="depth2-item">
                <a href="https://data.ijto.or.kr/bigdatamap/jeju/widget/main.do">관광객 분포도</a>
              </li>
              <li class="depth2-item">
                <a href="https://data.ijto.or.kr/content/CO20231228151633014MX8E">차량 분포도</a>
              </li>
            </ul>
          </li>
          <li class="sitemap-item">
            <a href="#" class="item-link">입도&middot;이동 통계</a>
            <ul class="depth2">
              <li class="depth2-item">
                <a href="https://data.ijto.or.kr/content/CO2023122815183301YL2GC">제주 방문 통계</a>
              </li>
              <li class="depth2-item">
                <a href="https://data.ijto.or.kr/content/CO2023122815193501JLM74">지역별 여행 키워드</a>
              </li>
              <li class="depth2-item">
                <a href="https://data.ijto.or.kr/content/CO2023122815165701HDJRT">월간 차량 이동 분석</a>
              </li>
              <li class="depth2-item">
                <a href="https://data.ijto.or.kr/content/CO20231228151921014MWG5">관광객 거주지 분포</a>
              </li>
            </ul>
          </li>
          <li class="sitemap-item">
            <a href="#" class="item-link">생산&middot;소비 통계</a>
            <ul class="depth2">
              <li class="depth2-item">
                <a href="https://data.ijto.or.kr/content/CO202408211000000100QMF">월간 제주 소비 동향</a>
              </li>
              <li class="depth2-item">
                <a href="https://data.ijto.or.kr/content/CO2024102916294901T3ENL">월간 제주 외식물가</a>
              </li>
              <li class="depth2-item">
                <a href="https://data.ijto.or.kr/content/CO2023122815190801F9AIH">업종별 소비 분석</a>
              </li>
              <li class="depth2-item">
                <a href="https://data.ijto.or.kr/content/CO2023122815185301U1KHG">종합 소비 분석</a>
              </li>
            </ul>
          </li>
          <li class="sitemap-item">
            <a href="#" class="item-link">자료실</a>
            <ul class="depth2">
              <li class="depth2-item">
                <a href="https://data.ijto.or.kr/community/board-7/BM2024102314231701CMOXTV">보고서 게시판</a>
              </li>
              <li class="depth2-item">
                <a href="https://data.ijto.or.kr/community/board-1/BM2023112115235401NULQZI">데이터 내려받기</a>
              </li>
            </ul>
          </li>
          <li class="sitemap-item">
            <a href="#" class="item-link">알림&middot;소통</a>
            <ul class="depth2">
              <li class="depth2-item">
                <a href="https://data.ijto.or.kr/community/board-4/BM2023112915205701YVTMJB">공지사항</a>
              </li>
              <li class="depth2-item">
                <a href="https://data.ijto.or.kr/community/board-2/BM2023112117324001EMXGNO">FAQ</a>
              </li>
            </ul>
          </li>
        </ul>

        <div class="guide-box">
          <a href="#" class="guide-button" data-popup-id="guide_video_layer_m">이용가이드 <span>동영상</span></a>
          <a href="/bigdatamap/html/jeju/widget/img/guide_mobile.pdf" class="guide-button" target="_blank" title="새창열림">이용가이드 <span>PDF</span></a>
        </div>
      </nav>
    </div>
  </div>
  <!-- 모바일 푸터 메뉴 :e -->

  <form name="listForm" class="list-form" action="/bigdatamap/jeju/widget/view.do" style="display: none;">
    <input type="hidden" class="placeName" name="placeName" value=""/>
    <input type="hidden" class="position" name="position" value=""/>
    <input type="hidden" class="addr" name="addr" value=""/>
    <input type="hidden" class="round" name="round" value=""/>
  </form>
  <form action="/bigdatamap/jeju/widget/view.do" class="search-form" name="searchForm">
    <input type="hidden" name="placeName" value="" />
    <input type="hidden" name="position" value="" />
    <input type="hidden" name="addr" value="" />
  </form>
  <!-- <script src="https://unpkg.com/splitting/dist/splitting.min.js"></script> -->
  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=16aee8026b34cc1e29ec0969827cecb5&libraries=services,clusterer,drawing"></script>


  <!-- 관리자 otp 인증 레이어 -->
  <div class="layer-popup" id="otp_layer">
    <form class="popup-inner">
      <strong class="title">OTP 인증</strong>
      <div class="flex-box">
        <input type="text" id="otpInput" placeholder="Enter OTP" class="layer-input" title="OTP 입력창">
        <button type="submit" class="check-btn">인증</button>
      </div>
      <button type="button" class="close-btn" data-popup-close="">닫기</button>
    </form>
  </div>

  <!-- 위치 찾기 알림 컨테이너 -->
  <div id="alert_container"></div>

  <script>
    document.querySelector('#otp_layer form').addEventListener('submit', (e) => {
      e.preventDefault();
      checkOTP();
    })

    // document.querySelectorAll(".jeju-festival-btn").forEach((btn, i) => {
    //   btn.addEventListener("click", (e) => {
    //     e.preventDefault()
    //     document.querySelector("#festival_layer .iframe-box iframe").src = "/html/jeju/widget/festival.html"
    //     document.querySelector("#festival_layer").classList.add("open");
    //   })
    // })
  </script>
  <!-- 관리자 otp 인증 레이어 End -->

  <!-- 제주축제 임시 레이어 -->
  <div class="layer-popup" id="festival_layer">
    <div class="popup-inner">
      <div class="iframe-box">
        <iframe src= "" frameborder="0" title="제주축제 아이프레임"></iframe>
      </div>
      <button type="button" class="close-btn" data-popup-close="">닫기</button>
    </div>
  </div>
  <!-- 제주축제 임시 레이어 End -->

  <!-- 이용가이드 영상 레이어 -->
  <div class="layer-popup" id="guide_video_layer">
    <div class="popup-inner">
      <div class="popup-box">
        <video poster="" controls controlsList="nodownload">
          <source src="/bigdatamap/html/jeju/widget/img/guide.mp4" type="video/mp4">
        </video>
      </div>
      <button type="button" class="close-btn" data-popup-close="">닫기</button>
    </div>
  </div>
  <!-- 이용가이드 영상 레이어 End -->

  <!-- 이용가이드 영상 레이어 -->
  <div class="layer-popup" id="guide_video_layer_m">
    <div class="popup-inner">
      <div class="popup-box">
        <video poster="" controls controlsList="nodownload">
          <source src="/bigdatamap/html/jeju/widget/img/guide_m.mp4" type="video/mp4">
        </video>
      </div>
      <button type="button" class="close-btn" data-popup-close="">닫기</button>
    </div>
  </div>
  <!-- 이용가이드 영상 레이어 End -->

  <!-- 처음 접속시 소개 레이어 -->
  <div class="layer-popup" id="start_popup">
    <div class="popup-inner">
      <div class="popup-box">
        <img src="/bigdatamap/html/jeju/widget/img/popup.png" alt="제주관광 빅데이터서비스 플랫폼 (내가 가려는 장소 인근에 지금 몇명이 있는지 궁금하다면 검색해보세요!)">
      </div>
      <button type="button" class="close-btn" data-popup-close="">닫기</button>
    </div>
  </div>
  <!-- 처음 접속시 소개 레이어 End -->
  <script>
    // 처음 접속시 소개 레이어

  </script>

  <script>
    function utilControl(mode, data) {
      if (mode !="delete") {
        document.querySelector("#festival_layer iframe").src = "/bigdatamap/html/jeju/widget/festival/" + mode + ".html"
        document.querySelector("#festival_layer").classList.add("open");
      } else {
        
        listDelete(data)
      }
      if(data){
        document.querySelector("#festival_layer iframe").onload = (e) => {
            document.querySelector("#festival_layer iframe").contentWindow.serveData(data)
        }
      }
    }
    // document.querySelectorAll(".jeju-festival-btn").forEach((btn, i) => {
    //   btn.addEventListener("click", (e) => {
    //     e.preventDefault()i
    //     // festivalListLoad()
    //   })
    // })
    // document.querySelectorAll(".principal-btn").forEach((btn, i) => {
    //   btn.addEventListener("click", (e) => {
    //     e.preventDefault()
    //     // principalList()
    //   })
    // })

    const gisIframe = document.querySelector('#iframeMap_LEFT');
    let toggleApiSwicth;
    let clickedApiButton = null;

    // function top10CategoryClick(button, array){
    //   toggleApiSwicth = button.dataset.api;
    //   if (toggleApiSwicth == 'N') {
    //     onSpecialButton(array, button);
    //   } else {
    //     offSpecialButton();
    //   }
    // }

    function top10CategoryClick(wrap, data){
      const btnClass = wrap == "festival"? ".jeju-festival-btn" : ".principal-btn";
             
      document.querySelectorAll(btnClass).forEach((btn, i) => {
        btn.onclick =  (e) => {
         
          e.preventDefault();
          offCategorySwitch();
          toggleApiSwicth = btn.dataset.api;

          if (toggleApiSwicth == 'N') {
            onSpecialButton(data, btn);
          } else {
            offSpecialButton();
          }
        }
      })
    }

    function onSpecialButton(data, button) {
      if (clickedApiButton) clickedApiButton.dataset.api = 'N';
      clickedApiButton = button;
      button.dataset.api = 'Y';
      gisIframe.contentWindow.createMarker(data);
      gisIframe.contentWindow.jumpMapCenter();  
    }

    function offSpecialButton() {
      if (!clickedApiButton) return;
      clickedApiButton.dataset.api = 'N';
      clickedApiButton = null;
      gisIframe.contentWindow.allMarkerDelete();
    }

    function adminClose(){
      document.querySelector('#festival_layer').classList.remove('open');
    }
  </script>

  <script>
    function pageReload() {
      pageReloadOnLoading();
      setTimeout(() => {
        document.querySelector("#iframe-widget").contentWindow.dataReload()
        // window.parent.timeReset();
      }, 1000)
    }

    function pageReloadOnLoading() {
      onLoading({type: 'class', element: '.pc-wrap'});
    }
    function pageReloadOffLoading() {
      offLoading({type: 'class', element: '.pc-wrap'});
    }
  </script>

  <script>
    const iframe = document.querySelector(".pc-wrap .iframe");
    const iframeInner = iframe.querySelector(".iframe-inner");
    const touchHnd = document.querySelector(".mobile-touch");

    function mobileViewSlide_end() {
      touchHnd.ontouchstart = null;
      touchHnd.ontouchmove = null;
      touchHnd.ontouchend = null;
      iframe.style.cssText = 'top: auto;';
      iframeInner.style.height = '100%';
    }

    function mobileViewSlide_start() {
      let diff, isTouch;
      touchHnd.style.top = "-15px";
      const halfHeight = (window.innerHeight / 2);
      touchHnd.style.height = "45px";
      let startY, endY;
      iframe.style.transform = 'none';
      iframe.style.top = halfHeight + "px";
      iframeInner.style.height = 'calc(100% - ' + halfHeight + "px" + ')';
      touchHnd.ontouchstart = (e) => {
        e.preventDefault();
        document.querySelector('.mobile-footer').classList.remove("down");
        touchHnd.classList.add('active');
        iframe.classList.add('touched');
        startY = e.touches[0].clientY;
        iframe.style.transition = "none";
        diff = startY - iframe.getBoundingClientRect().top;
        isTouch = true;
      }

      touchHnd.ontouchmove = (e) => {
        e.preventDefault()
        if (!isTouch) return;
        iframe.style.top = (e.touches[0].clientY - diff) + "px";
        iframeInner.style.height = 'calc(100% - ' + (e.touches[0].clientY - diff) + "px" + ')';
      }

      touchHnd.ontouchend = (e) => {
        e.preventDefault()
        touchHnd.classList.remove('active');
        iframe.classList.remove('touched');

        endY = e.changedTouches[0].clientY;
        const yDiff = startY - endY;
        isTouch = false;
        iframe.style.transition = "all 0.2s ease-in-out";
        if (iframe.getBoundingClientRect().top < halfHeight) {
          if (yDiff > 0) {
            iframe.style.top = 130 + "px";
            iframeInner.style.height = 'calc(100% - ' + 130 + "px" + ')';
          } else {
            iframe.style.top = halfHeight + "px";
            iframeInner.style.height = 'calc(100% - ' + halfHeight + "px" + ')';
          }
        } else {
          if (yDiff < 0) {
            iframe.style.top = (window.innerHeight - 95) + "px";
            touchHnd.style.height = "55px";
            touchHnd.style.top = "-24px";
            document.querySelector('.mobile-footer').classList.add("down");
            iframeInner.style.height = 'calc(100% - ' + (window.innerHeight - 95) + "px" + ')';
          } else {
            iframe.style.top = halfHeight + "px";
            iframeInner.style.height = 'calc(100% - ' + halfHeight + "px" + ')';
          }
        }
      }
    }
  </script>
  <script>
    // 로드시
    document.addEventListener("DOMContentLoaded", function () {
      checkDevice();
      setWeather(36.3671619, 127.3352200);
      setInterval(() => {
        setWeather(36.3671619, 127.3352200);
      }, 1000 * 60 * 60)
    })
    window.addEventListener("resize", function () {
      checkWidth();
    })

    // 브라우저 체크
    function checkDevice() {
      const user = navigator.userAgent;
      if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
        $('html').removeClass('pc').addClass('mobile');
      }
    }

    function checkWidth() {
      const html = document.querySelector('#iframe-widget').contentWindow.document.querySelector('html');
      const html2 = document.querySelector('#iframeMap_LEFT').contentWindow.document.querySelector('html');
      if (window.innerWidth <= 1024) {
        html.classList.add('w1024');
        html2.classList.add('w1024');
        mobileViewSlide_start();
      } else {
        html.classList.remove('w1024');
        html2.classList.remove('w1024');
        mobileViewSlide_end();
      }
    }
  </script>

  <script>
    /* 공통 레이어 팝업 */
    {
      // 레이어 팝업 샘플
      let layerOpenButton = $('[data-popup-id]');
      let layerCloseButton = $('[data-popup-close]');
      let layerPopup = $('.layer-popup');
      let popupInner = $('.layer-popup .popup-inner');

      layerOpenButton.on('click', function (e) {
        e.preventDefault();
        let id = $(this).attr('data-popup-id');
        openLayerPopup(id);
      });

      // 레이어 팝업 샘플 - 닫기 이벤트
      // layerPopup.on('click', function (e) {
      //   e.preventDefault();
      //   let target = $(this)
      //   removeLayerPopup(target);
      // })
      // popupInner.on('click', function (e) {
      //   e.stopPropagation();
      // })
      layerCloseButton.on('click', function (e) {
        e.preventDefault();
        let target = $(this).closest('.layer-popup');
        removeLayerPopup(target);
      });

      // 레이어 팝업 함수
      function openLayerPopup(id) {
        let target = $('#' + id);
        target.addClass('open');
        let innerVideo = target.find('video');
        if (innerVideo.length > 0) {
          innerVideo.get(0).play();
        }
      }

      function removeLayerPopup(target) {
        target.removeClass('open');
        let innerVideo = target.find('video');
        if (innerVideo.length > 0) {
          innerVideo.get(0).pause();
          innerVideo.get(0).currentTime = 0;
        }
      }
  
    }
  </script>

  <script>
    /* 모바일 사이트맵 메뉴 */
    {
      let closeButton = $('.mobile-footer .sitemap-header .close-btn');
      closeButton.on('click', function() {
        closeMobileSitemap();
        let prevButton = document.querySelector('.mobile-gnb .mobile-link.on');
        prevButton.classList.remove('on');
      })
      let mobileLink = $('.mobile-footer .sitemap-gnb .item-link');
      mobileLink.on('click', function(e) {
        e.preventDefault();
        let target = $(this);
        let targetDepth = target.siblings('.depth2');
        if (target.hasClass('active')) {
          target.removeClass('active');
          targetDepth.stop().slideUp(300);
        } else {
          target.addClass('active');
          targetDepth.stop().slideDown(300);
        }
      })
    }
    function openMobileSitemap() {
      let sitemap = $('.mobile-footer .sitemap');
      sitemap.addClass('open');
    }
    function closeMobileSitemap() {
      let sitemap = $('.mobile-footer .sitemap');
      sitemap.removeClass('open');
    }
  </script>

  <script>
    /* 카테고리 버튼 */
    // let categoryWrap = document.querySelector(".footer-category");
    let categorys = document.querySelectorAll(".category-btn");
    let currButton = null;
    let categorySearching = false;
    categorys.forEach((button, i) => {
      button.addEventListener("click", (e) => {
        if (categorySearching) return;
        categorySearching = true;

        const iframe = document.querySelector("#iframeMap_LEFT");
        if (document.querySelector('.analysis-btn .analysis-text2').textContent == '종료하기') actionHome();

        categorys.forEach((button, i) => {
          button.classList.remove("on");
        })

        if (!button.dataset.api) offSpecialButton();       
        if (currButton != button) {
          currButton = button;
          let order = button.getAttribute("data-order");
          iframe.contentWindow.onClickCategory(button.id, order);
          iframe.contentWindow.onSurround(true);
          
          // onLoading({type: 'class', element: '.pc-wrap'});
          // categorySearching = true;
          // setTimeout(() => {
          //   offLoading({type: 'class', element: '.pc-wrap'});
          //   categorySearching = false;
          // }, 800);

          button.classList.add("on");
        } else {
          currButton = null;
          iframe.contentWindow.onSurround(false);
          iframe.contentWindow.circleDelete();
          offCategorySwitch();
        }
      })
    })

    function offCategorySwitch() {
      categorySearching = false;
    }
  </script>

  <script>
    let newTimeData;
    let isIframeFirst = false;

    // 날씨 및 일시 적용
    function timeReset() {
      $.ajax({
        url: 'https://mms.gislab.co.kr:444/mms_new/GEONET.getTimeStamp.php',
        success: function (data) {
          try{
            console.log(data)
          let split_res = data.split('^');
          $('#crtrDt').html(split_res[1].replace("#|#", ""));
          
          // setWeather(36.3671619, 127.3352200);

          newTimeData = data;
          if (isIframeFirst) {
            document.querySelector('#iframe-widget').contentWindow.timeReload(newTimeData);
          } else {
            isIframeFirst = true;
          } 
          }catch(error){
            console.log('timeStamp에러')
          }
         
        },
        error: function (xhr) {
          alert("상태 : " + xhr.status);
        },
      });
    }

    timeReset();

    function setWeather(lat, lng){
      $.ajax({
        url: 'https://mms.gislab.co.kr:444/mms_new/weather/getWeather.php?LNG='+lng+'&LAT='+lat,
        success: function (data) {
       
          const weatherData = [
            ["sunny", "맑음-없음"],
            ["sunny-cloudy","구름많음-없음"],
            ["cloudy", "흐림-없음"],
            ["sunny-rainy","맑음-비", "맑음-비/눈", "맑음-소나기", "맑음-빗방울"],
            ["sunny-snow","맑음-눈", "맑음-빗방울/눈날림", "맑음-눈날림"],
            ["drizzle","구름많음-비", "구름많음-비/눈", "구름많음-소나기", "구름많음-빗방울"],
            ["snow","구름많음-눈", "구름많음-빗방울/눈날림", "구름많음-눈날림", "흐림-눈", "흐림-빗방울/눈날림", "흐림-눈날림"],
            ["rainy","흐림-비", "흐림-비/눈", "흐림-소나기", "흐림-빗방울"]

          ]
          const split_data = data.split("|")
          const current_data = [split_data[0], split_data[1].split("^")[1], split_data[2].split("^")[1], split_data[5].split("^")[1]]
          const next_data = [split_data[10], split_data[11].split("^")[1], split_data[12].split("^")[1], split_data[15].split("^")[1]];
          const weather = [current_data[1]+"-"+current_data[2], next_data[1]+"-"+next_data[2]]
          
          
          weather.forEach((item, i) => {
            let dom = i==0 ? ".current" : ".next"
            let temp = i==0 ? current_data[3] : next_data[3]
            weatherData.forEach((data ,k) => {
              if(data.includes(item)){
                document.querySelector(".weather").querySelector(dom).querySelector(".value").classList.add(data[0])
                document.querySelector(".weather").querySelector(dom).querySelector(".value .celsius").textContent = temp+"°"
              }
            })
        
          })
          
        },
        error: function (xhr) {
            alert("상태 : " + xhr.status);
        },
      });
    }
  </script>

  <script>
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 1 // 지도의 확대 레벨
      };

    // 지도를 생성합니다    
    var map = new kakao.maps.Map(mapContainer, mapOption);
  </script>

  <script>
    window.addEventListener("message", postMessageController, true);

    function postMessageController(e) {

      if (e.data.MODE) {
        if (e.data.MODE.indexOf("SEND_MAIN|CLICK_FIRE_MARKER") == 0) {
          $.ajax({
            type: 'GET',
            url: 'https://mms.gislab.co.kr:444/mms_new/GEONET.getAreaInfo.php?PARA=' + e.data.FIRE_INFO,
            success: (response) => {
              
              const dataArray = response.split("^");
              const gisId = parseInt(dataArray[0])
              const name = dataArray[1]
              const positionX = parseFloat(dataArray[3])
              const positionY = parseFloat(dataArray[2])
              const radius = parseInt(dataArray[4])

              searchAddress(positionY, positionX, radius, name)
            },
            error: (error) => {
              console.log("마커 클릭 api 오류")
            }
          })
        }
        if (e.data.MODE.indexOf("SEND_MAIN|AREA_INFO") == 0) {
          document.querySelector('#iframeMap_LEFT').contentWindow.surround_box_close()
          document.querySelector('#iframeMap_LEFT').contentWindow.removeMarker()
          document.querySelector('#iframeMap_LEFT').contentWindow.createAreaCircle(null, null, null, "delete")
          document.querySelector('#iframeMap_LEFT').contentWindow.festivalDeleteMarker()
          document.querySelector('#iframeMap_LEFT').contentWindow.removeDistrictOverlay()

          searchAddress(e.data.LNG, e.data.LAT, analysisDefaultNum, "분석영역")
         
        }
      }

    }

    function searchAddress(lat, lng, radius, name, data) {
      var geocoder = new kakao.maps.services.Geocoder();
      geocoder.coord2Address(lat, lng, function (result, status) {
        console.log("주소 데이터 검색111",  status)
        console.log("주소 데이터 검색222",  data)
        if (status === kakao.maps.services.Status.OK) {

          
          const position = lat + "/" + lng;
          var detailAddr = !!result[0].road_address ? result[0].road_address.address_name : result[0].address
            .address_name;
          let addr_load = ""
          let addr_dong = ""
          if (result[0].road_address != null) {
            addr_load = result[0].road_address.address_name
          }
          if (result[0].address != null) {

            addr_dong = result[0].address.address_name
          }
          let addr = addr_load + "/" + addr_dong
          let srcLink = "/bigdatamap/jeju/widget/view.do?placeName=" + name + "&position=" + position + "&addr=" + addr + "&round=" + radius;
          console.log(srcLink, '아아아');
          document.querySelector("#iframe-widget").setAttribute("src", srcLink)

          // 수정 관련 코드
          // if (data) {
          //   document.querySelector("#iframe-widget").onload = () => {
          //     if (document.querySelector("#iframe-widget").contentWindow.modifyDat) {
          //       document.querySelector("#iframe-widget").contentWindow.modifyData(data);
          //     }
          //   }
          // }

        } else {
          let addr2;
          const position = lat + "/" + lng;
          if(status === kakao.maps.services.Status.ZERO_RESULT){
            addr2 = "/"
          }else{
             if(data.addr != ""){
            addr2 = data.addr + ""
          }else{
            addr2= " / "
          }
          }
        
         
          let srcLink = "/bigdatamap/jeju/widget/view.do?placeName=" + name + "&position=" + position + "&addr=" + addr2 + "&round=" + radius;

          document.querySelector("#iframe-widget").setAttribute("src", srcLink)
        }
      });
      iframeUpDown(true)
    };

    function mainMapMove(data) {
      console.log('44444')
      document.querySelector("#iframeMap_LEFT").contentWindow.mainMapMove(data);
   
      iframeUpDown(true)
    }

    function categoryClick(place, data) { // 카테고리 마커 클릭시 view 페이지 출력
      let serveData;
      console.log("메인 데이터 2", data)
      if (data) {
        serveData = data
        
      } else {
        serveData = undefined;
      }


      toggleArea("init")
      let radius = 1000;
      console.log('3333===', place)
      console.log('5555===', data)
      if(data){
        if(data.radius > 0) radius = data.radius;
      }
      
      searchAddress(place.x, place.y, radius, place.place_name, serveData)
    }


    function iframeUpDown(side) {
      if (window.innerWidth < 1640) {
        if (side) {
          document.querySelector('.pc-wrap .main').classList.remove('side');
          document.querySelector('.iframe').classList.remove('side');

        } else {
          document.querySelector('.pc-wrap .main').classList.add('side');
          document.querySelector('.iframe').classList.add('side');

        }
      } else {
        if (side) {
          document.querySelector('.iframe').classList.add('side');
          document.querySelector('.pc-wrap .main').classList.add('side');
        } else {
          document.querySelector('.iframe').classList.remove('side');
          document.querySelector('.pc-wrap .main').classList.remove('side');
        }
      }
    }
  </script>

  <script>
    // view 화면이동 토글
    let viewIframe = document.querySelector('.iframe');
    let viewChangeButton = viewIframe.querySelector('.iframe .toggle-btn');
    let mapWrap = document.querySelector('.pc-wrap .main');
    viewChangeButton.addEventListener('click', (e) => {
      const target = e.target.closest('.toggle-btn');
      if (!target) return;
      if (viewIframe.classList.contains('side')){
        viewChangeNormal();
      } else {
        viewChangeSide();
      }
    })
    function viewChangeNormal() {
      viewIframe.classList.remove('side');
      mapWrap.classList.remove('side');
    }
    function viewChangeSide() {
      viewIframe.classList.add('side');
      mapWrap.classList.add('side');
    }

    function mainSearch(word, searchType){
      let searching = keywordSearchPlay(word);
      if (searching) {
        document.querySelector("#iframe-widget").setAttribute("src" , "/bigdatamap/jeju/widget/search.do?searchWord="+word+"&searchType="+searchType);
      }
    }

		function keywordSearchPlay(word) {
			let regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@#$%&\\\=\(\'\"]/g;
			let mobileSearchInput = document.querySelector('.mobile-wrap .popSearchInput');
			if (word == "") {
				alert("검색어를 입력해주세요.");
				return false;
			} else if (word.length < 2) {
				alert("검색어는 두글자 이상 입력해주세요");
				return false;
			} else if (regExp.test(word)) {
				alert("특수문자는 사용하실 수 없습니다.");
        mobileSearchInput.value = '';
				return false;
			} else {
        return true;
      }
		}
  </script>

  <script>
    // 푸터 콘텐츠 버튼 토글
    const footerContent = document.querySelector('.footer .footer-content');
    const footerToggleButton = footerContent.querySelector('.footer-btn');
    footerToggleButton.addEventListener('click', (e) => {
      if (footerContent.classList.contains('open')) {
        footerContent.classList.remove('open');
      } else {
        footerContent.classList.add('open');
      }
    })
  </script>

  <script>
    let searchType = 0;
    document.querySelector(".search-type-btn").addEventListener("click", () => {
      const typeBtn = document.querySelector(".search-type-btn");
      typeBtn.dataset.type = typeBtn.dataset.type == 0? 1 : 0;
      searchType = typeBtn.dataset.type;
      const className = searchType == 0 ? "left" : "right";
      document.querySelector(".search-type").classList.remove("left");
      document.querySelector(".search-type").classList.remove("right");
      document.querySelector(".search-type").classList.add(className);
    })
    document.querySelector(".mobile-wrap form").addEventListener("submit", (e) => {
      e.preventDefault();
      const type = searchType == 0 ? "keyword" : "address";
      const text = document.querySelector("#keyword").value;
      mainSearch(text, type);
    })
    document.querySelector('.mobile-wrap .clear-btn').addEventListener('click', () => {
      document.querySelector('.mobile-wrap .popSearchInput').value = '';
    })
  </script>
  <script>
    function changeArea(t) // 반경 이미지 조절
    {
      
      let sMasterMapID = 'iframeMap_LEFT';

      let oTmp2 = new Object();
      oTmp2.MODE = "RESIZE_AREA";
      // oTmp2.R_M = 400;
      oTmp2.R_M = t;
      //영역 재조정하는 부분은 1번 지도에만 반영하면 2번 자동 반영 됨
      document.getElementById(sMasterMapID).contentWindow.postMessage(oTmp2, '*');

      oTmp2 = null;
    }
  </script>

  <script>
   

    function showMain() {
      let mobileWrap = document.querySelector('.mobile-wrap');
      mobileWrap.classList.remove('hide');
      iframe.classList.remove('hide');
    }
    function hideMain() {
      let mobileWrap = document.querySelector('.mobile-wrap');
      mobileWrap.classList.add('hide');
      iframe.classList.add('hide');
    }
  </script>
  
  <script>
    const otp_certify = sessionStorage.getItem("otp_certification")
    if (otp_certify == "valid") {
      document.querySelector(".manage-btn").style.display = "none";
      document.querySelector(".logout-btn").style.display = 'block';
    }
  </script>

  <script>
    /* PC Header기능 */
    {
      let header = document.querySelector('.pc-wrap .sitemap');
      let homeButton = document.querySelector('.header-util .home-btn');
      let headerOpenButton = document.querySelector('.header-util .sitemap-btn');
      let headerCloseButton = document.querySelector('.pc-wrap .sitemap .close-btn');
      let depthMenus = document.querySelectorAll('.pc-wrap .sitemap-gnb .depth2');
      let maxHeight = calculateMaxHeight();
      changeMenuHeight(maxHeight);
      
      function calculateMaxHeight(){
        let heights = [...depthMenus].map((item) => item.getBoundingClientRect().height);
        let maxHeight = Math.max.apply(null, heights);
        return maxHeight;
      }
      function changeMenuHeight(height) {
        depthMenus.forEach(item => {
          item.style.height = height + 'px';
        });
        let headerHeight = height + 82; // 82은 헤더바의 높이
        header.style.height = headerHeight + 'px';
      }

      homeButton.addEventListener('click', (e) => {
        actionHome();
      })
      headerOpenButton.addEventListener('click', (e) => {
        header.classList.add('open');
      })
      headerCloseButton.addEventListener('click', () => {
        header.classList.remove('open');
      })
    }
  </script>

  <script>
    /* 모바일 메뉴 기능 */
    {
      const homeButton = document.querySelector('.mobile-gnb .mobile-link.home');
      const areaButton = document.querySelector('.mobile-gnb .mobile-link.area');
      const menuButton = document.querySelector('.mobile-gnb .mobile-link.menu');
      const mobileSitemap = document.querySelector('.mobile-footer .sitemap');
      homeButton.addEventListener('click', (e) => {
        actionHome(e.currentTarget);
        mobileSitemap.classList.remove('open');
      })
      areaButton.addEventListener('click', (e) => {
        actionArea(e.currentTarget);
        mobileSitemap.classList.remove('open');
      })
      menuButton.addEventListener('click', (e) => {
        actionMenu(e.currentTarget);
        mobileSitemap.classList.add('open');
      })
    }

    let isAction = false;
    function actionHome(target) {
      if (isAction) return;
      isAction = true;
      offSpecialButton();
      document.querySelector("#iframeMap_LEFT").contentWindow.startMapCenter(true);
      let iframe = document.querySelector('#iframe-widget');

      iframe.src = '/bigdatamap/jeju/widget/search.do';
      iframe.addEventListener('load', () => {
        setTimeout(() => {
          isAction = false;
        }, 300);
      })

      toggleArea('init'); // 현재 영역분석이 활성화 되어있는지 판단 후 되어있으면 취소시킴
      if (target) offLink(target);
      removeCategoryActive();
      currButton = null;
      document.querySelector("#iframeMap_LEFT").contentWindow.allMarkerDelete();
    }

    function actionArea(target) {
      offLinkArea(target);
      toggleArea(); // 영역분석 토글
    }
    function actionMenu(target) {
      toggleArea('init'); // 현재 영역분석이 활성화 되어있는지 판단 후 되어있으면 취소시킴
      offLink(target);
    }

    // 다른 링크 비활성화 작업
    function offLink(target) {
      let prevButton = document.querySelector('.mobile-gnb .mobile-link.on');
      if (prevButton) prevButton.classList.remove('on');
      target.classList.add('on');
    }

    // 영역분석 링크 활성화 토글 예외처리 작업
    function offLinkArea(target) {
      let prevButton = document.querySelector('.mobile-gnb .mobile-link.on');
      if (prevButton) {
        prevButton.classList.remove('on');
        if (!prevButton.classList.contains('area')) {
          target.classList.add('on');
        }
      } else {
        target.classList.add('on');
      }
    }

    // 카테고리 메뉴 on 해제
    function removeCategoryActive() {
      const selectedButton = document.querySelector('.footer-category .category-btn.on');
      const selectedButton2 = document.querySelector('.mobile-category .category-btn.on');
      if (selectedButton) selectedButton.classList.remove('on');
      if (selectedButton2) selectedButton2.classList.remove('on');
    }

    function createAreaCircle(positionX, positionY, fixedArea, mode){
      document.querySelector("#iframeMap_LEFT").contentWindow.createAreaCircle(positionX, positionY, fixedArea, mode)
    }
  </script>
  <script>
  const mobileRightWrap = document.querySelector(".mobile-right");
    function rightMobileView(latlng, detailAddr, coords){
      console.log(coords)
      /* <div class="mobile-right">
      
      <div class="mouseRightOverlay">
        <button class="closeBtn">닫기</button>
        <strong class="info-title">위치정보</strong>
        <ul class="info-list">
            <li class="addr"><strong>지번 주소 </strong><span>제주특별자치도 제주시 조천읍 선흘리 산 103-1</span></li>
          <li class="latlng"><strong>경위도 좌표 </strong><span>33.45033904863398, 126.71020392816014</span></li>
          <li class="utmk"><strong>UTMK </strong><span>926567.3412287974 , 1495475.42998145</span></li>
        </ul>
        <div class="mouseRightBtns">
          <button class="area-border-remove">행정경계 제거</button>
          <button class="area-border-add">행정경계 추가</button>
        </div>
      </div>
    </div>*/
      
      mobileRightWrap.querySelector(".info-list .addr span").textContent = detailAddr;
      mobileRightWrap.querySelector(".info-list .latlng span").textContent = latlng.Ma+", "+latlng.La;
      mobileRightWrap.querySelector(".info-list .utmk span").textContent = coords[0]+", "+coords[1];
      mobileRightWrap.classList.add("active");

      setTimeout(() => {
			  document.querySelector(".mouseRightOverlay .area-border-add").addEventListener("click", (e) => {
				  document.querySelector("#iframeMap_LEFT").contentWindow.addGeoJsonToMap();
			  })
			  document.querySelector(".mouseRightOverlay .area-border-remove").addEventListener("click", (e) => {
				  document.querySelector("#iframeMap_LEFT").contentWindow.mouseRightOverlayDelete();
			  })
			  document.querySelector(".mouseRightOverlay .closeBtn").addEventListener("click", (e) => {
          mobileRightWrap.classList.remove("active");
				  document.querySelector("#iframeMap_LEFT").contentWindow.mouseRightOverlayDelete();
			  })
 		  }, 1000) 
    } 

    function rightMobileViewNone(){

    }

  document.addEventListener('visibilitychange', function() {
		if (document.visibilityState === 'visible') {
			// window.parent.steDDD('탭이 활성화됨');
			pageReload();
		} else {
			// window.parent.steDDD('탭이 비활성화됨');
		}
	});

    function steDDD (a, b, c) {
      console.log(a, b, c);
    }
  </script>

</body>
</html>
