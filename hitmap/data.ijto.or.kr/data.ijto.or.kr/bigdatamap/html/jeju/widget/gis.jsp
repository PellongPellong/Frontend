


<!DOCTYPE html>
<html lang='ko'>
<head>
    <meta charset="utf-8">
	<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
    <title>map</title>

		<link rel="stylesheet" href="/bigdatamap/css/common/common.css">
		<link rel="stylesheet" href="/bigdatamap/html/jeju/widget/css/gis.css">

		<script src="/bigdatamap/html/jeju/widget/js/locationService.js" defer></script>
	
</head>

<body>

<div id="wrapper" style="overflow-y:hidden;">
	<div id="map" class='map' ></div>
	
	<div id="rvWrapper">
		<div id="roadview"></div> <!-- 로드뷰를 표시할 div 입니다 -->
		<div id="close" title="로드뷰닫기"><span class="img"></span></div>
	</div>

	<div class='legend-overlay' id='legend' style='z-index: 1; display:none;'></div>

	<div class='side-left' id='side' style='z-index: 1;'>
		<span id='side_text'>유동인구 분포</span>
		<img id="side_img" src="" style="display: none;">
	</div>

	<!-- gis 유틸 버튼 End -->
	<div class="gis-util-box">
		<button type="button" class="layer-toggle gis-util"></button>
		<button type="button" class="gis-gps gis-util"></button>
	</div>
	<!-- gis 유틸 버튼 End-->

	<div id="map_controller_wrap">
		<div class="controller-inner">
			<strong class="controller-title">지도설정</strong>
			<button type="button" class="controller-close"></button>
	
			<!-- 지도 세팅 변경(일반, 스카이뷰) 컨트롤 입니다. -->
			<div class="horizontal">
				<!-- <div class="main-search">
					<select name="" id="" class="search-select">
						<option value="keyword">키워드 검색</option>
						<option value="address">주소 검색</option>
					</select>
					<form name="mainSearchForm" class="mainSearchForm" action="">
						<input type="text" class="search-input" title="검색어를 입력하세요" name="keyword" id="keyword" value="">
						<input type="submit"  title="검색" class="search-btn" />
					</form>
				</div> -->
				
				<div class="custom-type-control radius_border">
					<button type="button" id="btnRoadmap" class="selected-btn roadmap" onclick="setMapType('roadmap');" data-name="일반">
						<span class="btn-text">일반</span>
					</button>
					<button type="button" id="btnSkyview" class="skyview" onclick="setMapType('skyview');" data-name="스카이뷰">
						<span class="btn-text">스카이뷰</span>
					</button>
					<button type="button" id="btnTerrain" class="terrain" onclick="setMapType('terrain');" data-name="지형정보">
						<span class="btn-text">지형정보</span>
					</button>
				</div>
			</div>
	
			<!-- 지도 확대, 축소, 기타 타입 변경 컨트롤 입니다. -->
			<div class="vertical">
				<div class="custom-btn-control radius_border"> 
					<button type="button" class="traffic" onclick="onTraffic();" title="교통정보" data-name="교통정보">교통정보</button>
					<button type="button" class="roadview" id="roadviewControl" onclick="onRoadview()" title="로드뷰">로드뷰</button>
					<button type="button" class="district" onclick="onUseDistrict();" title="지적편집도" data-name="지적편집도">지적편집도</button>
				</div>
			</div>
		</div>
	</div>

</div>

<script type="text/javascript" src="https://www.policymap.or.kr/lib_xraymap/heatmap_20231212_geonet.js"></script>
<!-- <script type="text/javascript" src="/js/jeju/basic/heatmap_20231212_geonet.js"></script> -->
<script>
	

	// 영역분석 생성 함수
	delete _h_drawTempCircle
	
function _h_drawTempCircle(_0x4998ae, _0x1f1c76, _0x564e58, _0x4f90af) {
    const _0x3ea234 = _0x3a1a23;
    _h_returnInfoWindowsAndShiftPoint();
    if (_0x564e58 == !![]) _h_onChangeTempCircleForAreaSummary(_0x4998ae, _0x1f1c76);
    if (_0x4f90af == !![]) _h_onChangeMasterTempCircleForSlave(_0x4998ae, _0x1f1c76);
    if (h_oTempCircle != null) h_oTempCircle[_0x3ea234(0x328)](null);
    h_oTempCircle = null;
    if (h_oTempCircleMarker != null) h_oTempCircleMarker[_0x3ea234(0x328)](null);
    h_oTempCircleMarker = null;
    let _0x49700a = new kakao['maps'][(_0x3ea234(0xff))]({
            'map': h_oMap,
            'center': _0x4998ae,
            'radius': _0x1f1c76,
            'draggable': !![],
            'removable': !![],
            'editable': !![],
            'strokeColor': '#176DD1',
			'strokeWeight': 5, // 선의 두께
			'strokeOpacity': 1,
            'strokeStyle': 'solid',
            // 'fillColor': '#000',
            'fillColor': 'blue',
            // 'fillOpacity': 0x0,
            'fillOpacity': 0,
            'zIndex': 0xf423f
        }),
        
        _0x186a20 = 'https://www.biz-gis.com/XRayMap_lib/img/drag.svg',
        _0x4b4978 = new kakao[(_0x3ea234(0x12a))]['Size'](0x1e, 0x1e),
        _0x4f8463 = {
            'offset': new kakao[(_0x3ea234(0x12a))][(_0x3ea234(0x29b))](0xf, 0xf)
        };
    h_oTempCircleMarkerImage = new kakao[(_0x3ea234(0x12a))][(_0x3ea234(0x28f))](_0x186a20, _0x4b4978, _0x4f8463), _0x186a20 = _0x3ea234(0x38e), _0x4b4978 = new kakao[(_0x3ea234(0x12a))][(_0x3ea234(0x235))](0x5a, 0x5a), _0x4f8463 = {
        'offset': new kakao[(_0x3ea234(0x12a))][(_0x3ea234(0x29b))](0x2d, 0x2d)
    }, h_oTempCircleMarkerImageForDrag = new kakao[(_0x3ea234(0x12a))][(_0x3ea234(0x28f))](_0x186a20, _0x4b4978, _0x4f8463), _0x186a20 = null, _0x4b4978 = null, _0x4f8463 = null;
    let _0x4843a5 = new kakao[(_0x3ea234(0x12a))][(_0x3ea234(0xfc))]({
        'position': _0x4998ae,
        'image': h_oTempCircleMarkerImage,
        'zIndex': 0xf423f,
        'clickable': !![]
    });
    _0x4843a5['setMap'](map), _0x4843a5[_0x3ea234(0x3dc)](!![]), h_bHideCenterMaker == !![] ? _0x4843a5[_0x3ea234(0x16c)](0x0) : (_0x4843a5[_0x3ea234(0x16c)](0.8), kakao[_0x3ea234(0x12a)][_0x3ea234(0x303)][_0x3ea234(0x257)](_0x4843a5, _0x3ea234(0x38a), function () {

        _h_drawTempCircle_marker_click();
    }), kakao[_0x3ea234(0x12a)]['event'][_0x3ea234(0x257)](_0x4843a5, 'dragstart', function () {
        _h_drawTempCircle_marker_dragstart();
    }), kakao['maps'][_0x3ea234(0x303)][_0x3ea234(0x257)](_0x4843a5, _0x3ea234(0x252), function () {
        _h_drawTempCircle_marker_dragend();
    }), $(h_divMap)[_0x3ea234(0xf4)](function (_0x1e14c6) {
        _h_drawTempCircle_marker_mouseUp();
    }), kakao[_0x3ea234(0x12a)]['event'][_0x3ea234(0x257)](_0x4843a5, 'mouseover', function () {
        _h_drawTempCircle_marker_mouseover();
    }), kakao[_0x3ea234(0x12a)][_0x3ea234(0x303)][_0x3ea234(0x257)](_0x4843a5, _0x3ea234(0x1c9), function () {
        _h_drawTempCircle_marker_mouseout();
    })), h_oTempCircle = _0x49700a, h_oTempCircleMarker = _0x4843a5, _0x4843a5 = null, _0x49700a = null, h_setTopTempWhiteCircle();

	// analysisFor_penToMap(_0x4998ae)
	
}
</script>
<script type="text/javascript" src="https://www.policymap.or.kr/lib_xraymap/iframe_event_geonet.js"></script>

<!-- <script type="text/javascript" src="/js/jeju/basic/mapSyncForKakao_20231212_geonet.js"></script> -->
<script type="text/javascript" src="https://www.policymap.or.kr/lib_xraymap/mapSyncForKakao_20231212_geonet.js"></script>

<script src="https://www.policymap.or.kr/lib_xraymap/ex_lib/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=16aee8026b34cc1e29ec0969827cecb5&libraries=services,clusterer,drawing"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.7.3/proj4.js"></script>

<script>
	// 히트맵 받아온 후 맵 초기위치 세팅
	let isHeatmap = false;
	delete __sendMessage_AddTOCRayer_From_HeatmapLib;
	function __sendMessage_AddTOCRayer_From_HeatmapLib(_0x21c4ab, _0x310f74, _0x43c672) {
		const _0x77935e = _0x476b04;
		let _0x2acc0a = new Object();
		_0x2acc0a[_0x77935e(0x1d1)] = 'SEND_MAIN|ADD_TOC_LAYER', _0x2acc0a[_0x77935e(0x155)] = m_sUID, _0x2acc0a['NM'] = _0x21c4ab, _0x2acc0a[_0x77935e(0x1f4)] = _0x310f74, _0x2acc0a[_0x77935e(0x15d)] = _0x43c672, window['parent'][_0x77935e(0x1a3)](_0x2acc0a, '*'), _0x2acc0a = null;
		if (!isHeatmap) {
			isHeatmap = true;
			startMapCenter();
		}
	}
</script>


<!--  GIS 스크립트 START -->
<script src="/bigdatamap/js/jeju/gis_init.js"></script>
<script src="/bigdatamap/js/common/coordSetting.js"></script>
<script src="/bigdatamap/js/common/mapSetting.js"></script>
<!-- GIS END -->

<script language="javascript">
	/* 커스텀 코드 시작 */

	// 좌표 값 설정
	const CENTER_COORD = {lat: 33.4892792, lng: 126.4983426};
	const POINT_COORD = {lat: 33.4892792, lng: 126.4983426};
	const CATEGORY_COORD = [
		// 제주도 가장자리 상단
		{lat: 33.4975180, lng: 126.4979643, radius: 3000},
		{lat: 33.5060594, lng: 126.5630912, radius: 3000},
		{lat: 33.4815014, lng: 126.4461544, radius: 3000},
		{lat: 33.4444848, lng: 126.4931938, radius: 3000},
		{lat: 33.4548016, lng: 126.5499251, radius: 3000},
		{lat: 33.4646911, lng: 126.3913143, radius: 3000},
		{lat: 33.5167897, lng: 126.6122486, radius: 3000},
		{lat: 33.3526339, lng: 126.1939056, radius: 3000},
		{lat: 33.3728221, lng: 126.2384210, radius: 3000},
		{lat: 33.4001689, lng: 126.2763628, radius: 3000},
		{lat: 33.4340181, lng: 126.2925989, radius: 3000},
		{lat: 33.4524312, lng: 126.3354713, radius: 3000},
		{lat: 33.4083823, lng: 126.2270169, radius: 700},
		{lat: 33.5336741, lng: 126.6638487, radius: 3000},
		{lat: 33.5364189, lng: 126.7237838, radius: 3000},
		{lat: 33.5396951, lng: 126.7744191, radius: 3000},
		{lat: 33.5363148, lng: 126.8250717, radius: 3000},
		{lat: 33.5042140, lng: 126.8829937, radius: 3000},
		{lat: 33.4644374, lng: 126.9352844, radius: 1300},

		// 제주도 가장자리 하단
		{lat: 33.2564408, lng: 126.5102508, radius: 3000},
		{lat: 33.2618336, lng: 126.5637959, radius: 3000},
		{lat: 33.2599479, lng: 126.4518494, radius: 3000},
		{lat: 33.2784586, lng: 126.6183292, radius: 3000},
		{lat: 33.3026864, lng: 126.5316387, radius: 3000},
		{lat: 33.2588961, lng: 126.3742009, radius: 3000},
		{lat: 33.2897413, lng: 126.6665048, radius: 3000},
		{lat: 33.3015633, lng: 126.7221213, radius: 3000},
		{lat: 33.3207321, lng: 126.7859821, radius: 3000},
		{lat: 33.3415836, lng: 126.8374932, radius: 3000},
		{lat: 33.3889252, lng: 126.8573533, radius: 3000},
		{lat: 33.4137562, lng: 126.8745143, radius: 3000},
		{lat: 33.4507221, lng: 126.9171392, radius: 3000},
		{lat: 33.5054873, lng: 126.9551426, radius: 3000},
		{lat: 33.2522575, lng: 126.3187910, radius: 3000},
		{lat: 33.2221530, lng: 126.2757724, radius: 3000},
		{lat: 33.2221530, lng: 126.2757724, radius: 3000},
		{lat: 33.1176604, lng: 126.2674596, radius: 800},
		{lat: 33.1697644, lng: 126.2719152, radius: 800},
		{lat: 33.2478772, lng: 126.2353003, radius: 3000},
		{lat: 33.2770547, lng: 126.1955455, radius: 3000},
		{lat: 33.3142258, lng: 126.1883317, radius: 3000},
		{lat: 33.4291271, lng: 126.9293750, radius: 900},

		// 제주도 안쪽 지역
		{lat: 33.3837407, lng: 126.5559231, radius: 20000},
		{lat: 33.4645416, lng: 126.6035314, radius: 3000},
		{lat: 33.4285421, lng: 126.4342330, radius: 3000},
		{lat: 33.3005150, lng: 126.2809662, radius: 3000},
		{lat: 33.3402047, lng: 126.2596726, radius: 3000},
		{lat: 33.3405301, lng: 126.3710397, radius: 10000},
		{lat: 33.4811941, lng: 126.8148537, radius: 3000},
		{lat: 33.4431263, lng: 126.8259473, radius: 3000},
		{lat: 33.3865177, lng: 126.7878846, radius: 3000},
		{lat: 33.4221554, lng: 126.7182971, radius: 10000},
	];
	let center2 = new kakao.maps.LatLng(33.3746517, 126.6715972);

	// 임시 제주도로 지도 이동
	// setTimeout(() => {
	// 	// map.setLevel(4);
	// 	map.panTo(center2);
	// }, 2500)

	// 지도 중심좌표로 이동 함수
	function changeMapCenter(lat, lng) {
		window.parent.steDDD("좌표")
		let center;
		if (!lat || !lng) {
			window.parent.steDDD("원래")
			center = new kakao.maps.LatLng(CENTER_COORD.lat, CENTER_COORD.lng);
		} else {
			window.parent.steDDD("바뀜")
			center = new kakao.maps.LatLng(lat, lng);
		}
		map.panTo(center);
	}



	function startMapCenter(fast) {
		let center;
		const user = navigator.userAgent;
		if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
			// 모바일
			center = new kakao.maps.LatLng(33.1182141, 126.5659121)
			if (fast) {
				map.setLevel(11);
				map.panTo(center);
			} else {
				setTimeout(() => {
					map.setLevel(11);
					map.panTo(center);
				}, 1500);
			}
		} else {
			// pc
			center = new kakao.maps.LatLng(33.3746517, 126.6715972);
			if (fast) {
				map.setLevel(9);
				map.panTo(center);
			} else {
				setTimeout(() => {
					map.setLevel(9);
					map.panTo(center);
				}, 1500);
			}

		}
	}

	function jumpMapCenter(lat, lng) {
		let center;
		if (!lat || !lng) {
			center = center2;
		} else {
			center = new kakao.maps.LatLng(lat, lng);
		}
		

		const user = navigator.userAgent;
		if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
			// 모바일
			map.setLevel(11);
			map.setCenter(new kakao.maps.LatLng(33.1182141, 126.5659121));
		} else {
			// pc
			map.setLevel(9);
			map.setCenter(center);
		}

	}

	// 지도에 교통정보를 표시하도록 지도타입을 추가합니다.
	let trafficSwitch;

	function onTraffic() {
		const trafficButton = document.querySelector('.custom-btn-control .traffic');
		if (!trafficSwitch) {
			map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
			trafficSwitch = true;
			trafficButton.classList.add('on');
		} else {
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
			trafficSwitch = false;
			trafficButton.classList.remove('on');
		}
	}

	// 지도에 지형정보를 표시하도록 지도타입을 추가합니다.
	let terrainSwitch;

	function onTerrain() {
		const terrainButton = document.getElementById('btnTerrain');
		if (!terrainSwitch) {
			map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
			terrainSwitch = true;
			terrainButton.classList.add('on');
		} else {
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
			terrainSwitch = false;
			terrainButton.classList.remove('on');
		}
	}

	// 지도에 지적편집도를 표시하도록 지도타입을 추가합니다.
	let useDistrictSwitch;

	function onUseDistrict() {
		const districtButton = document.querySelector('.custom-btn-control .district');
		if (!useDistrictSwitch) {
			map.addOverlayMapTypeId(kakao.maps.MapTypeId.USE_DISTRICT);
			useDistrictSwitch = true;
			districtButton.classList.add('on');
		} else {
			map.removeOverlayMapTypeId(kakao.maps.MapTypeId.USE_DISTRICT);
			useDistrictSwitch = false;
			districtButton.classList.remove('on');
		}
	}

	// 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입을 바꾸는 함수입니다
	function setMapType(maptype) {
		let roadmapControl = document.getElementById('btnRoadmap');
		let skyviewControl = document.getElementById('btnSkyview');
		if (maptype === 'roadmap') {
			map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
			roadmapControl.classList.add('selected-btn');
			skyviewControl.classList.remove('selected-btn');
		} else if (maptype === 'skyview') {
			map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
			roadmapControl.classList.remove('selected-btn');
			skyviewControl.classList.add('selected-btn');
		} else if (maptype === 'terrain') {
			onTerrain();
		}
	}

	/* 카테고리 Start */
	var placeOverlay2 = new kakao.maps.CustomOverlay({
			zIndex: 9999999
		}),
		contentNode = document.createElement('div'), // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다 
		categoryMarkers = [], // 마커를 담을 배열입니다
		currCategory = ''; // 현재 선택된 카테고리를 가지고 있을 변수입니다
	currOrder = ""
	let surroundSwitch;
	// 장소 검색 객체를 생성합니다
	var ps = new kakao.maps.services.Places(map);
	contentNode.className = 'placeinfo_wrap';

	function category_Custom() {

		// 카테고리 표시 START
		// 마커를 클릭했을 때 해당 장소의 상세정보를 보여줄 커스텀오버레이입니다

		// 지도에 idle 이벤트를 등록합니다

		// kakao.maps.event.addListener(map, 'idle', searchPlaces);

		// 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다 


		// 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
		// 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다 
		addEventHandle(contentNode, 'mousedown', kakao.maps.event.preventMap);
		addEventHandle(contentNode, 'touchstart', kakao.maps.event.preventMap);

		// 커스텀 오버레이 컨텐츠를 설정합니다
		placeOverlay2.setContent(contentNode);

		// 각 카테고리에 클릭 이벤트를 등록합니다
		// addCategoryClickEvent();
	}
	// kakao.maps.event.addListener(map, 'idle', searchPlaces);

	category_Custom();

	function addEventHandle(target, type, callback) {
		if (target.addEventListener) {
			target.addEventListener(type, callback);
		} else {
			target.attachEvent('on' + type, callback);
		}
	}

	// 카테고리 검색을 요청하는 함수입니다
	function searchPlaces(info) {
		// map.setLevel(5);
		// map.panTo(new kakao.maps.LatLng(CENTER_COORD.lat, CENTER_COORD.lng), {
		// 	animate : {
		// 		duration : 2000
		// 	},
		// })
		// map.panTo(new kakao.maps.LatLng(CENTER_COORD.lat, CENTER_COORD.lng));
		// map.setCenter(new kakao.maps.LatLng(CENTER_COORD.lat, CENTER_COORD.lng));
		if (!currCategory) {
			return;
		}

		// 마커생성
		if (info) {
			for (let i = 1; i <= 3; i++) {
				ps.categorySearch(currCategory, placesSearchCB, {
					page: i,
					location: new kakao.maps.LatLng(info.lat, info.lng),
					useMapBounds: true,
					radius: info.radius
				});
			}
		}

	}

	// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
	function placesSearchCB(data, status, pagination) {
		if (status === kakao.maps.services.Status.OK) {
			// 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
			//window.parent.steDDD(data, pagination);
			displayPlaces(data, pagination);
		} else if (status === kakao.maps.services.Status.ZERO_RESULT) {
			// 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요
			window.parent.steDDD("ZERO 에러")

		} else if (status === kakao.maps.services.Status.ERROR) {
			// 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요

		}
	}

	// 지도에 마커를 표출하는 함수입니다
	function displayPlaces(places) {

		// 몇번째 카테고리가 선택되어 있는지 얻어옵니다
		// 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다
		// var order = document.getElementById(currCategory).getAttribute('data-order');

		for (var i = 0; i < places.length; i++) {
			// 마커를 생성하고 지도에 표시합니다
			var marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x), currOrder);

			// 마커와 검색결과 항목을 클릭 했을 때
			// 장소정보를 표출하도록 클릭 이벤트를 등록합니다
			(function (marker, place) {
				kakao.maps.event.addListener(marker, 'click', function () {

					window.parent.steDDD("안3녕", place)
					window.parent.pageReloadOnLoading();
					changeMapCenter(place.y, place.x)
					displayPlaceInfo(place);
					window.parent.categoryClick(place)
					// window.parent.steDDD(place)
					// window.parent.categoryMarkerClick(place);
				});
			})(marker, places[i]);
		}
	}

	let searchCustomOverlay;
	let searchListMarker;
	// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
	function addMarker(position, order) {

		var imageSrc = '/bigdatamap/html/jeju/widget/img/CategoryIcon.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
			imageSize = new kakao.maps.Size(24, 22), // 마커 이미지의 크기
			imgOptions = {
				spriteSize: new kakao.maps.Size(212, 570), // 스프라이트 이미지의 크기
				spriteOrigin: new kakao.maps.Point(10, (order * 22)), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
				offset: new kakao.maps.Point(12, 26) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
			},
			markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
			marker = new kakao.maps.Marker({
				position: position, // 마커의 위치
				image: markerImage,
				zIndex: 99999,
				clickable: true
			});
			
		marker.setMap(map); // 지도 위에 마커를 표출합니다
		categoryMarkers.push(marker); // 배열에 생성된 마커를 추가합니다

		return marker;
	}

	// 지도 위에 표시되고 있는 마커를 모두 제거합니다
	function removeMarker() {
		for (var i = 0; i < categoryMarkers.length; i++) {
			// window.parent.steDDD("삭제 삭제 삭제")
			// window.parent.steDDD(categoryMarkers.length)
			categoryMarkers[i].setMap(null);
		}
		categoryMarkers = [];
	}

	// 클릭한 마커에 대한 장소 상세정보를 커스텀 오버레이로 표시하는 함수입니다
	/*
	<div class="searchOverlay">
					<strong class="name">유성전통 5일장</strong>
					<p class="address">대전 유성구 유성대로730번길 24<br>(장대동191-7)</p>
					<span class="tel"></span>
					<div class="btn-list">
						<a href="#" class="roadview marker-roadview" data-position="127.333904/36.357779">로드뷰</a>
						<a href="#" class="find">길찾기</a>	
					</div>
					<button type="button" class="close-btn"></button>
				</div>
	*/
	var rvMarker;

	function displayPlaceInfo(place) {
		if (searchCustomOverlay) {
			searchCustomOverlay.setMap(null)
		}
		let address = "";
		let dongIndex = -1;
		let dongText = "";
		if (place.road_address_name != "" && place.address_name != "") {
			let dongArray = place.address_name.split(" ");
			dongArray.forEach((text, i) => {
				if (text[text.length - 1] == "동") {
					dongIndex = 1;
				}
				if (dongIndex < 0) return;
				dongText += text;
			})
			address = "<p class='address'>" + place.road_address_name + "</p>"
			address += "<p class='address address-dong'>" + dongText + "</p>"
		} else if (place.road_address_name == "") {
			address = "<p class='address'>" + place.address_name + "</p>"
		} else if (place.address_name == "") {
			address = "<p class='address'>" + place.road_address_name + "</p>"
		}
		let position = place.x + '/' + place.y;
		// let place_url = `<a href="${place.place_url}" class="detail-link" target="_blank" >${place.place_name}</a>`
		var content;

		let place_url = place.place_url.replace("http:", "")
		if (place.place_url == "") {
			place_url = "";
			content = `
				<div class="searchOverlay2 no-link">
					<div class="overlay-item">${place.place_name}</div>
				</div>
			`
		} else {
			content = `
				<div class="searchOverlay2">
					<a href="${place_url}" target="_blank">${place.place_name}</a>
				</div>
			`
		}
		


		// var content = `
		// <div class="searchOverlay">
		// 			<strong class="name">${place.place_name}</strong>
		// 			<div class="address-box">${address}</div>
		// 			<span class="tel">${place.phone}</span>
		// 			<div class="btn-list">
		// 				<a href="#" class="roadview marker-roadview" data-position = ${position} style="display: none;">로드뷰</a>
		// 				${place_url}
		// 			</div>
		// 			<button type="button" class="close-btn"></button>
		// 		</div>
		// `



		// var content = '<div class="searchOverlay">' +
		// 	// '   <a class="title" href="' + place.place_url + '" target="_blank" title="' + place.place_name + '">' + place.place_name + '</a>';
		// 	'   <strong class="name"  title="' + place.place_name + '">' + place.place_name + '</strong>';
		// 	content += '<p class="address">'
		// if (place.road_address_name) {
		// 	content += '    <span class="road" title="' + place.road_address_name + '">' + place.road_address_name + '</span>' +
		// 		'  <span class="jibun" title="' + place.address_name + '">' + place.address_name + '</span>';
		// } else {
		// 	content += '    <span title="' + place.address_name + '">' + place.address_name + '</span>';
		// }

		// content += '    <span class="tel">' + place.phone + '</span>'
		// content += '<button classs' +
		// 	'</div>' +
		// 	'<div class="after"></div>';

		contentNode.innerHTML = content;
		placeOverlay2.setPosition(new kakao.maps.LatLng(place.y, place.x));
		placeOverlay2.setMap(map);
		// roadViewBtnEvent()
	}


	// 각 카테고리에 클릭 이벤트를 등록합니다
	function addCategoryClickEvent() {
		var category = document.getElementById('category');
		var children = category.children;

		for (var i = 0; i < children.length; i++) {
			children[i].onclick = onClickReceive;
		}
	}

	function onClickReceive() {
		onClickCategory(this.id);
	}
	// 카테고리를 클릭했을 때 호출되는 함수입니다
	var customOverlay3 = []
	var festivalMarkers = []

	function onClickCategory(id, order) {
		
		if (!id) return;
		
		var prevCenter = map.getCenter();
		var prevLevel = map.getLevel();
		window.parent.steDDD(prevCenter,"중심1111")

		jumpMapCenter()
			
		if (circle) circleDelete()
		removeDistrictOverlay()

		window.parent.steDDD("카테고리 마커 클릭")
		if(customOverlay3.length > 0){
			customOverlay3.forEach((overlay, i) => {
				overlay.setMap(null);
			})
			
		}
		if(customOverlay3_1){
							customOverlay3_1.setMap(null);
							customOverlay3_1=null;
						}
		if(festivalMarkers.length > 0){
			festivalMarkers.forEach((marker, i) => {
				marker.setMap(null)
			})
			festivalMarkers = []
		}
		if(circle){
			circleDelete()
		}
			

		if (id.includes('_mobile')) {
			id = id.replace('_mobile', '');
		}
		currCategory = id;
		currOrder = order;



		// 커스텀 오버레이를 숨깁니다 
		placeOverlay2.setMap(null);

		// 지도에 표시되고 있는 마커를 제거합니다
		removeMarker();


		window.parent.onLoading({type: 'class', element: '.pc-wrap'}); // 카카오 api 카테고리 로딩 on

		let categoryInfo = CATEGORY_COORD; // 카테고리 좌표모음

			// categoryInfo.forEach(info => {
			// 	searchPlaces(info);
			// })


			const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
			async function processWithDelay(array, delayTime) {
				for (const info of array) {
					searchPlaces(info);
					await delay(delayTime); // 지연 시간 적용
				}
				console.log('모든 작업이 완료되었습니다.'); // 반복문 종료 시점
				window.parent.offLoading({type: 'class', element: '.pc-wrap'}); // 카카오 api 카테고리 로딩 off
				window.parent.offCategorySwitch();

				map.setCenter(new kakao.maps.LatLng(prevCenter.Ma, prevCenter.La))
				map.setLevel(prevLevel); 
			}
			processWithDelay(categoryInfo, 80); // 각 항목 처리 사이에 지연


		 
				/*  changeMapCenter(prevCenter.Ma, prevCenter.La) */

		
	}

	
	// document.querySelector(".surround-box-close").addEventListener('click', () => {
	// 	surround_box_close();
	// })

	function surround_box_close() {
		surroundSwitch = false;
		placeOverlay2.setMap(null);
		currCategory = ''
		removeMarker();
		// document.querySelector('button.surround').classList.remove('on')
		window.parent.iframeUpDown()
	}
	// 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수입니다
	function changeCategoryClass(el) {
		var category = document.getElementById('category'),
			children = category.children,
			i;

		for (i = 0; i < children.length; i++) {
			children[i].className = '';
		}

		if (el) {
			el.className = 'on';
		}
	}

	// 주변 맵에 대한 정보 표시 레이어 토글
	function onSurround(t) {
		// const surroundButton = document.querySelector('.custom-btn-control .surround');
		if (!t) surround_box_close();
		if (rvMarker) endRoadview();


	}
	/* 카테고리 End */

	/* 로드뷰 Start */
	var mapWrapper = document.getElementById('wrapper');
	var mapCenter = new kakao.maps.LatLng(POINT_COORD.lat, POINT_COORD.lng);
	var rvContainer = document.getElementById('roadview'); //로드뷰를 표시할 div
	var rv = new kakao.maps.Roadview(rvContainer); //로드뷰 객체
	var rvClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체
	var rvWrapper = document.querySelector("#rvWrapper");
	var rvCloseButton = rvWrapper.querySelector('#close');
	var roadviewButton = document.querySelector('.custom-btn-control button.roadview');
	let roadviewSwitch;

	// 지도에 로드뷰 도로정보를 표시하도록 지도타입을 추가합니다.
	function onRoadview(position) {
		if (!roadviewSwitch) {
			roadviewSwitch = true;
			startRoadview(position);
		} else {
			roadviewSwitch = false;
			endRoadview();
		}
	}

	// 마커 이미지를 생성합니다.
	var markImage = new kakao.maps.MarkerImage(
		'https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png',
		new kakao.maps.Size(26, 46), {
			// 스프라이트 이미지를 사용합니다.
			// 스프라이트 이미지 전체의 크기를 지정하고
			spriteSize: new kakao.maps.Size(1666, 168),
			// 사용하고 싶은 영역의 좌상단 좌표를 입력합니다.
			// background-position으로 지정하는 값이며 부호는 반대입니다.
			spriteOrigin: new kakao.maps.Point(705, 114),
			offset: new kakao.maps.Point(13, 46),
		}
	);

	// 드래그가 가능한 마커를 생성합니다.

	function setRoadviewRoad(position) {

		if (position) {
			let x = position.split("/")[1]
			let y = position.split("/")[0]
			console.log(x, y)
			mapCenter = new kakao.maps.LatLng(x, y);
		}
		rvMarker = new kakao.maps.Marker({
			image: markImage,
			position: mapCenter,
			draggable: true,
			map: map,
		});
		mapWrapper.classList.add('view_roadview');
		roadviewButton.classList.add('on');

		map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW); //지도 위에 로드뷰 도로 올리기

		toggleRoadview(mapCenter);

		//마커에 dragend 이벤트를 할당합니다
		kakao.maps.event.addListener(rvMarker, 'dragend', function (mouseEvent) {
			var position = rvMarker.getPosition(); //현재 마커가 놓인 자리의 좌표
			toggleRoadview(position); //로드뷰를 토글합니다
		});

		//지도에 클릭 이벤트를 할당합니다
		kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
			// 현재 클릭한 부분의 좌표를 리턴 
			// var position = mouseEvent.latLng; 
			// rvMarker.setPosition(position);
			// toggleRoadview(position); //로드뷰를 토글합니다
			toggleRoadview_start(mouseEvent);
		});

		// 로드뷰 닫기 이벤트
		rvCloseButton.addEventListener('click', () => {
			endRoadview();
		})
	}

	function toggleRoadview(position) {
		//전달받은 좌표(position)에 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄웁니다
		rvClient.getNearestPanoId(position, 50, function (panoId) {
			if (panoId === null) {
				rvContainer.style.display = 'none'; //로드뷰를 넣은 컨테이너를 숨깁니다

				map.relayout();
			} else {
				map.relayout(); //지도를 감싸고 있는 영역이 변경됨에 따라, 지도를 재배열합니다
				rvContainer.style.display = 'block'; //로드뷰를 넣은 컨테이너를 보이게합니다
				rv.setPanoId(panoId, position); //panoId를 통한 로드뷰 실행
				rv.relayout(); //로드뷰를 감싸고 있는 영역이 변경됨에 따라, 로드뷰를 재배열합니다
			}
		});
	}

	function toggleRoadview_start(mouseEvent) {
		var position = mouseEvent.latLng;
		rvMarker.setPosition(new kakao.maps.LatLng(position.Ma, position.La));
		toggleRoadview(new kakao.maps.LatLng(position.Ma, position.La)); //로드뷰를 토글합니다
	}

	// 로드뷰 연동 작동
	function startRoadview(position) {
		setRoadviewRoad(position);
		roadviewSwitch = true;
	}

	function endRoadview() {
		removeRoadview();
		roadviewSwitch = false;
	}

	function removeRoadview() {
		roadviewSwitch = false;
		mapWrapper.classList.remove('view_roadview');
		roadviewButton.classList.remove('on');
		rvMarker.setMap(null);
		map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
	}
	/* 로드뷰 End */

	// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
	var zoomControl = new kakao.maps.ZoomControl();
	map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

	function zoom_slide_class() {
		const map_inner = document.querySelector('#map');
		wrapper.querySelector('button[title=축소]').parentNode.parentNode.className = 'zoom-slide';
	}
	zoom_slide_class();


	/* 좌표로 지도 주소따오기 */
	function searchAddress(lat, lng) {
		var geocoder = new kakao.maps.services.Geocoder();
		geocoder.coord2Address(lat, lng, function (result, status) {
			if (status === kakao.maps.services.Status.OK) {
				var detailAddr = !!result[0].road_address ? result[0].road_address.address_name : result[0].address
					.address_name;

				// 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
				window.parent.receiveAddressT(detailAddr, lat, lng)
			}
		});
	};
	let areaMarkerDrag = false;
	window.addEventListener("mousedown", (e) => {
		if(e.target.src == "https://www.biz-gis.com/XRayMap_lib/img/dragForDrag.svg"){
			areaMarkerDrag = true;
		}
	})
	window.addEventListener("mouseup", (e) => {
		if(e.target.src == "https://www.biz-gis.com/XRayMap_lib/img/dragForDrag.svg" && areaMarkerDrag){
			window.parent.steDDD("성공성공")
			areaMarkerDrag = false;
		}
	})
	///*
	window.addEventListener('message', function (e) {
		
		window.parent.steDDD("영역분석 모드")
		window.parent.steDDD(e.data.MODE)
		//20230509 ---------------------------------
		//드래그 중 다른 map으로 이동하면
		if (e.data.MODE == "IFRAME_DRAG_OUT") {
			_h_triggerHandlerByAnotherMap(e.data);
			return;
		}
		///////////////////////////////////////////
		else if (e.data.MODE == "CLICK_SYNC_TRUE") {
			// console.log(">====마커생성");
			kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
				searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
					var detailAddr = "";
					if (status === kakao.maps.services.Status.OK) {
						detailAddr = !!result[0].road_address ? result[0].road_address.address_name : result[0].address.address_name;
					}
					// 클릭한 위도, 경도 정보를 가져옵니다 
					var latlng = mouseEvent.latLng;

					// 마커 위치를 클릭한 위치로 옮깁니다
					marker.setPosition(latlng);

					window.parent.Click_point(latlng.getLng(), latlng.getLat(), detailAddr);
					var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
					message += '경도는 ' + latlng.getLng() + ' 입니다.' + detailAddr;
				});
			});
			return;
		} else if (e.data.MODE == "CLICK_SYNC_FALSE") {
		
			marker.setMap(null);
			return;
		}
	});
	var geocoder = new kakao.maps.services.Geocoder();

	function searchDetailAddrFromCoords(coords, callback) {
		// 좌표로 법정동 상세 주소 정보를 요청합니다
		geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
	}

	function CurrentTime() {
		var currentTime = new Date();
		var min = currentTime.getMinutes()
		if (((currentTime.getMinutes() % 5) == 0) && currentTime.getSeconds() == 40) {
			window.parent.steDDD("GIS 페이지 리로드")
			window.parent.timeReset();
			window.parent.pageReload();
			
			HM_forceRefreshAndReloadPoint();
		
			if (document.querySelector(".custom-btn-control .traffic").classList.contains("on")) {
				setTimeout(() => {
					map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
				}, 500)

				setTimeout(() => {
					map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
				}, 600)
			}
		}
	}

	function OneMinutes() {
		setInterval(function () {
			CurrentTime();
		}, 1000);
	}
	OneMinutes();

	//*/
	kakao.maps.event.addListener(map, 'dragend', function () {
		// 지도 중심좌표를 얻어옵니다 
		var latlng = map.getCenter();
		var message = '변경된 지도 중심좌표는 ' + latlng.getLat() + ' 이고, ';
		message += '경도는 ' + latlng.getLng() + ' 입니다';
		var resultDiv = document.getElementById('result');
	});

	function pageReload() {
		console.log("페이지 리로드")
		HM_forceRefreshAndReloadPoint();
		circleDelete()
		// __sendSyncAreaDrag_ing(oLatlng, nR_m);
	}
</script>

<!-- <button onclick="refreshLayer()" style="position: relative;">레이어 갱신</button> -->
<!-- <button onclick="__fun1()" style="position: relative;">마커 드래그 비활성</button> -->

<script>
	var specialMarker;
	function removeSpecialMarker() {
		if (specialMarker) {
			specialMarker.setMap(null);
			specialMarker = null;
		};
	}
	function mainMapMove(data) {
		window.parent.steDDD("Data,,,", data)
		if (rvMarker) {
			endRoadview();
		}
		removeSpecialMarker();
		searchListMarkerDelete()
		surround_box_close() 
		festivalDeleteMarker()
		console.log("gis에서 받은 데이터 스타트")
		console.log(data)
		console.log("gis에서 받은 데이터 엔드")
		var moveLatLon = new kakao.maps.LatLng(parseFloat(data.y), parseFloat(data.x));
		var markerPosition = new kakao.maps.LatLng(parseFloat(data.y), parseFloat(data.x));
		let address = "";
		let dongIndex = -1;
		let dongText = "";
		if (data.road_address_name != "" && data.address_name != "") {
			let dongArray = data.address_name.split(" ");
			dongArray.forEach((text, i) => {
				if (text[text.length - 1] == "동") {
					dongIndex = 1;
				}
				if (dongIndex < 0) return;
				dongText += text;
			})
			address = "<p class='address'>" + data.road_address_name + "</p>"
			address += "<p class='address address-dong'>" + dongText + "</p>"
		} else if (data.road_address_name == "") {
			address = "<p class='address'>" + data.address_name + "</p>"
		} else if (data.address_name == "") {
			address = "<p class='address'>" + data.road_address_name + "</p>"
		}
		let position = data.x + '/' + data.y

		var searchContent;
		let place_url 
		if(data.place_url){
			place_url = data.place_url.replace("http:", "")
		}else{
			place_url = ""
		}
		 
		if (data.place_url == "") {
			place_url = "";
			searchContent = `
				<div class="placeinfo_wrap no-link">
					<div class="searchOverlay2">
						<div class="overlay-item">${data.place_name}</div>
					</div>
				</div>
			`
		} else {
			searchContent = `
				<div class="placeinfo_wrap">
					<div class="searchOverlay2">
						<a href="${place_url}" target="_blank">${data.place_name}</a>
					</div>
				</div>
			`
		}

		

		var imageSrc = '/bigdatamap/html/jeju/widget/img/CategoryIcon.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
				imageSize = new kakao.maps.Size(24, 22), // 마커 이미지의 크기
				imgOptions = {
					spriteSize: new kakao.maps.Size(212, 570), // 스프라이트 이미지의 크기
					spriteOrigin: new kakao.maps.Point(10, (19 * 22)), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
					offset: new kakao.maps.Point(12, 26) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
				},
				markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions)

		// 마커를 생성합니다
		specialMarker = new kakao.maps.Marker({
				position: markerPosition, 
				image: markerImage,
				zIndex: 999999,
		});
		specialMarker.setMap(map);


		searchCustomOverlay = new kakao.maps.CustomOverlay({
			clickable: true,
			position: markerPosition,
			content: searchContent,
			zIndex: 9999999,
		});

		// searchListMarker.setMap(map);
		searchCustomOverlay.setMap(map);

		// 지도 중심을 이동 시킵니다
		map.setLevel(5);
		map.panTo(moveLatLon);
		// roadViewBtnEvent()
	}

	function removeDistrictOverlay(){
		if(searchCustomOverlay){
			searchCustomOverlay.setMap(null)
			searchCustomOverlay = null;
			removeSpecialMarker(); // 상권 & 검색 마커 지우기
		}
	}

	function roadViewBtnEvent() {
		setTimeout(() => {
			document.querySelector(".marker-roadview").addEventListener("click", (e) => {
				e.preventDefault();
				let position = document.querySelector(".marker-roadview").getAttribute("data-position")
				onRoadview(position)
			})

			document.querySelector(".searchOverlay .close-btn").addEventListener("click", (e) => {
				e.preventDefault()
				if (rvMarker) {
					endRoadview();
				}
				searchListMarkerDelete()
				window.parent.iframeUpDown()
			})
		}, 500)
	}


	function searchListMarkerDelete() {
		if (searchListMarker) {
			searchListMarker.setMap(null)
		}
		if (searchCustomOverlay) {
			searchCustomOverlay.setMap(null)
		}
		if (placeOverlay2) {
			console.log("닫기")
			placeOverlay2.setMap(null)
		}
		
	}
</script>

<script>
	/* 레이어 토글 */
	{
		let layerToggleButton = document.querySelector('.layer-toggle');
		let controlLayer = document.querySelector('#map_controller_wrap');
		let closeControlButton = document.querySelector('#map_controller_wrap .controller-close');
		layerToggleButton.addEventListener('click', () => {
			layerToggleButton.classList.add('on');
			controlLayer.classList.add('open');
			window.parent.hideMain();
		})
		closeControlButton.addEventListener('click', () => {
			layerToggleButton.classList.remove('on');
			controlLayer.classList.remove('open');
			window.parent.showMain();
		})
	}
</script>
<script>
	
	let customOverlay3_1;
	function createMarker(positions) {
		const noneOverlay = positions[0].noneOverlay? true : false;
		// removeMarker()
		if (festivalMarkers.length > 0) {
			festivalMarkers.forEach((marker, i) => {
				marker.setMap(null)
			})
			festivalMarkers = []
		}
		if (circle) {
			circleDelete()
		}
		if(placeOverlay2){
			placeOverlay2.setMap(null);
		}
		festivalDeleteMarker() 
		removeDistrictOverlay();
		
		let imgPos= positions[0].se == "festival"? [10, (17 * 22)] : [10, 396]
		var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
		
		for (var i = 0; i < positions.length; i++) {
			// var imageSize = new kakao.maps.Size(24, 35); 
			// var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
			var pos = new kakao.maps.LatLng(positions[i].lot, positions[i].lat)
			var data = {...positions[i]}

			var imageSrc = '/bigdatamap/html/jeju/widget/img/CategoryIcon.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
				imageSize = new kakao.maps.Size(24, 22), // 마커 이미지의 크기
				imgOptions = {
					spriteSize: new kakao.maps.Size(212, 570), // 스프라이트 이미지의 크기
					spriteOrigin: new kakao.maps.Point(imgPos[0], imgPos[1]), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
					offset: new kakao.maps.Point(12, 26) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
				},
				markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions)


			festivalMarkers[i] = new kakao.maps.Marker({
				map: map,
				position: pos,
				title: positions[i].title,
				image: markerImage,
				clickable: true,
				zIndex: 99999
			});
			removeMarker();

			(function (marker, data, removeMarker) {
				if(customOverlay3_1){
							customOverlay3_1.setMap(null);
							customOverlay3_1=null;
						}
				if (customOverlay3[i]) {
					customOverlay3[i].setMap(null);
				}

				customOverlay3[i] = new kakao.maps.CustomOverlay({
						zIndex: 99999
					})
				if(!noneOverlay){
					let liTag = ""
				data.spotNm.forEach((nm, i) => {
					liTag += `<li class="overlay-item">${nm}</li>`
				})
				var content = `
						<div class="placeinfo_wrap no-link special-overlay ${positions[i].se}">
							<ul class="searchOverlay2">
								${liTag}
							</ul>
						</div>
					`;

				var pos = new kakao.maps.LatLng(data.lot, data.lat);
				var contentNode = document.createElement("div");
				contentNode.innerHTML = content;
					// 커스텀 오버레이를 생성합니다
					customOverlay3[i].setContent(contentNode);
					// 커스텀 오버레이를 지도에 표시합니다
					customOverlay3[i].setPosition(pos);
					customOverlay3[i].setMap(map)	
				}
				
				// kakao.maps.event.addListener(marker, 'mouseover', (function(index) {
				// window.parent.steDDD("ㅐㅍㄷㄷㄱ")
    			// 	if(customOverlay3[index]){
				// 		customOverlay3[index].setMap(map);
				// 	}
					
				// })(i))
				// kakao.maps.event.addListener(marker, 'mouseout', function() {
    			// 	if(customOverlay3[i]){
				// 		customOverlay3[i].setMap(null);
				// 	}
				// });
				
				kakao.maps.event.addListener(marker, 'click', function () {
					window.parent.steDDD("ㅇㅇㅇ")
					window.parent.steDDD(data)
					window.parent.pageReloadOnLoading()
					if(noneOverlay){
						if(customOverlay3_1){
							customOverlay3_1.setMap(null);
							customOverlay3_1=null;
						}
						
						customOverlay3_1 = new kakao.maps.CustomOverlay({
						zIndex: 99999
						})

					
					let liTag = ""
				data.spotNm.forEach((nm, i) => {
					liTag += `<li class="overlay-item">${nm}</li>`
				})
				window.parent.steDDD("데이터",data)
				var content = `
						<div class="placeinfo_wrap no-link special-overlay ${data.se}">
							<ul class="searchOverlay2">
								${liTag}
							</ul>
						</div>
					`;

				var pos = new kakao.maps.LatLng(data.lot, data.lat);
				var contentNode = document.createElement("div");
				contentNode.innerHTML = content;
					// 커스텀 오버레이를 생성합니다
					customOverlay3_1.setContent(contentNode);
					// 커스텀 오버레이를 지도에 표시합니다
					customOverlay3_1.setPosition(pos);
					customOverlay3_1.setMap(map)	
				}
					let radius = 1000;;
					if(data.radius > 0){
						radius > data.radius
					}
					createAreaCircle(data.lat, data.lot, radius)
					changeMapCenter(data.lot, data.lat)
					const serveData = {
						x: data.lat,
						y: data.lot,
						place_name: data.spotNm
					}
					window.parent.steDDD("하하하")
					window.parent.categoryClick(serveData, data)
					
					if (categoryMarkers.length > 0) {
						categoryMarkers.forEach((c_marker, i) => {
							c_marker.setMap(null)
						})

					}
				})
			})(festivalMarkers[i], positions[i], removeMarker)

		}
	}

	function festivalDeleteMarker() {
		if(customOverlay3_1){
							customOverlay3_1.setMap(null);
							customOverlay3_1=null;
						}
		if (customOverlay3.length > 0) {
			customOverlay3.forEach((overlay, i) => {
				overlay.setMap(null);
			})
			
		}
		if (festivalMarkers.length > 0) {
			festivalMarkers.forEach((marker, i) => {
				marker.setMap(null)
			})
			festivalMarkers = []
		}
	}
</script>

<script>
	let circle

	function createAreaCircle(lat, lot, area, mode) {
		window.parent.steDDD("써클 실행")
		if (mode == "delete" && circle) {
			circleDelete()
			return;
		}
		if (circle){
			circleDelete()
		} 
		window.parent.steDDD("==35=5=2=5=")
		window.parent.steDDD(lat, lot, area)
		circle = new kakao.maps.Circle({
			center: new kakao.maps.LatLng(lot, lat),
			radius: area,
			strokeWeight: 3, // 선의 두께
			strokeColor: '#333', // 선의 색깔
			strokeOpacity: 1, // 선의 불투명도
			strokeStyle: 'dashed', // 선의 스타일 
			fillColor: '#478DE0', // 채우기 색깔
			fillOpacity: 0, // 채우기 불투명도  
			zIndex: 999999999999
		});
		circle.setMap(map);
	}

	function circleDelete(){
		if (circle){
			circle.setMap(null)
			circle=null;
		} 
	}

	function allMarkerDelete(){
		removeSpecialMarker();
		searchListMarkerDelete();
		surround_box_close();
		festivalDeleteMarker();
		if(customOverlay3_1){
							customOverlay3_1.setMap(null);
							customOverlay3_1=null;
						}
		if (circle) circleDelete()
	}

// 영역분석 클릭시 맵 이동 커스텀

</script>
<script>


 var geoJsonData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "제주도",
        "type": "행정구역"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [126.349, 33.460],
            [126.368, 33.467],
            [126.395, 33.472],
            [126.419, 33.479],
            [126.433, 33.491],
            [126.442, 33.505],
            [126.454, 33.516],
            [126.474, 33.526],
            [126.498, 33.526],
            [126.518, 33.517],
            [126.533, 33.505],
            [126.539, 33.491],
            [126.540, 33.475],
            [126.530, 33.457],
            [126.520, 33.449],
            [126.505, 33.445],
            [126.490, 33.443],
            [126.472, 33.443],
            [126.453, 33.447],
            [126.436, 33.457],
            [126.423, 33.468],
            [126.408, 33.471],
            [126.380, 33.474],
            [126.369, 33.463],
            [126.349, 33.460]
          ]
        ]
      }
    }
  ]
}

var polygon555
function addGeoJsonToMap() {
	if(polygon555){
		polygon555.setMap(null);
		polygon555 = null
	}
            for (var i = 0; i < geoJsonData.features.length; i++) {
                var feature = geoJsonData.features[i];
                var coordinates = feature.geometry.coordinates[0];
                var path = [];

                for (var j = 0; j < coordinates.length; j++) {
                    var latLng = new kakao.maps.LatLng(coordinates[j][1], coordinates[j][0]);
                    path.push(latLng);
                }

                 polygon555 = new kakao.maps.Polygon({
                    path: path,
                    strokeWeight: 2,
                    strokeColor: '#FF0000',
                    fillColor: '#FF0000',
                    fillOpacity: 0.4,
					zIndex:9999999999999
                });

                polygon555.setMap(map);
            }
        }

		
	
 let mouseRightOverlay, rightMarker;
kakao.maps.event.addListener(map, 'rightclick', function(e) {
	mouseRightOverlayDelete()
	let latlng = e.latLng;
	let wgs84 = 'EPSG:4326'; // WGS84 좌표계
	let utmk = 'EPSG:5179'; // UTM-K 좌표계
	proj4.defs("EPSG:5179", "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=1 +x_0=1000000 +y_0=2000000 +datum=WGS84 +units=m +no_defs");
	let coords = proj4(wgs84, utmk, [latlng.La, latlng.Ma]);

	let imageSrc = '/bigdatamap/html/jeju/widget/img/CategoryIcon.png', 
		imageSize = new kakao.maps.Size(24, 22), 
		imgOptions = {
			spriteSize: new kakao.maps.Size(212, 570), 
			spriteOrigin: new kakao.maps.Point(10, (20 * 22)),
			offset: new kakao.maps.Point(12, 26) 
		},
		markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions)
		rightMarker = new kakao.maps.Marker({
			position: latlng, 
			image: markerImage,
			zIndex: 99999,
			clickable: true
		});
			
		rightMarker.setMap(map); 

	let geocoder = new kakao.maps.services.Geocoder();
	geocoder.coord2Address(latlng.La, latlng.Ma, function (result, status) {
		if (status === kakao.maps.services.Status.OK) {
			let detailAddr = !!result[0].road_address ? result[0].road_address.address_name : result[0].address.address_name;
			
			
			if(window.innerWidth < 1040){
				window.parent.rightMobileView(latlng, detailAddr, coords)
			}else{
				rightPCView(latlng, detailAddr, coords)
			}
			
		}
	});
		
 })

function rightPCView(latlng, detailAddr, coords){
		mouseRightOverlay = new kakao.maps.CustomOverlay({zIndex : 999999999});

		let content = `
		<div class="mouseRightOverlay">
			<button class="closeBtn">닫기</button>
			<strong class="info-title">위치정보</strong>
			<ul class="info-list">
				<li><strong>지번 주소 </strong><span>${detailAddr}</span></li>
				<li><strong>경위도 좌표 </strong><span>${latlng.Ma}, ${latlng.La}</span></li>
				<li><strong>UTMK </strong><span>${coords[0]} , ${coords[1]}</span></li>
			</ul>
			<div class="mouseRightBtns">
				<button class="area-border-remove">행정경계 제거</button>
				<button class="area-border-add">행정경계 추가</button>
			</div>
		</div>
		`

		var contentNode = document.createElement("div");
		contentNode.innerHTML = content;
		mouseRightOverlay.setContent(contentNode);
		mouseRightOverlay.setPosition(latlng);
		mouseRightOverlay.setMap(map);

		setTimeout(() => {
			document.querySelector(".mouseRightOverlay .area-border-add").addEventListener("click", (e) => {
				addGeoJsonToMap(geoJsonData);
			})
			document.querySelector(".mouseRightOverlay .area-border-remove").addEventListener("click", (e) => {
				if(polygon555){
					polygon555.setMap(null);
					polygon555 = null
				}
			})
			document.querySelector(".mouseRightOverlay .closeBtn").addEventListener("click", (e) => {
				
				mouseRightOverlayDelete()
			})
 		}, 1000) 
}
	
 function mouseRightOverlayDelete(){
	if(mouseRightOverlay){
		mouseRightOverlay.setMap(null)
		mouseRightOverlay = null;
	}
	if(rightMarker){
		rightMarker.setMap(null)
		rightMarker = null;
	}

	if(polygon555){
		polygon555.setMap(null);
		polygon555 = null
	}

	
 } 
</script>

 
</body>
</html>