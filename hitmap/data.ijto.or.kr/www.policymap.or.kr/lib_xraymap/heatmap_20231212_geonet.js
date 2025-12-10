const _0x3a1a23 = _0x3192;
(function(_0x55b9b1, _0x357048) {
    const _0x38dee9 = _0x3192,
        _0x2b31db = _0x55b9b1();
    while (!![]) {
        try {
            const _0x41ba93 = -parseInt(_0x38dee9(0xf7)) / 0x1 + parseInt(_0x38dee9(0x202)) / 0x2 + parseInt(_0x38dee9(0x2bb)) / 0x3 + parseInt(_0x38dee9(0x3e4)) / 0x4 * (-parseInt(_0x38dee9(0x1be)) / 0x5) + -parseInt(_0x38dee9(0x27d)) / 0x6 * (parseInt(_0x38dee9(0x187)) / 0x7) + parseInt(_0x38dee9(0x2ac)) / 0x8 * (parseInt(_0x38dee9(0x2ab)) / 0x9) + parseInt(_0x38dee9(0x3d2)) / 0xa;
            if (_0x41ba93 === _0x357048) break;
            else _0x2b31db['push'](_0x2b31db['shift']());
        } catch (_0x4353bd) {
            _0x2b31db['push'](_0x2b31db['shift']());
        }
    }
}(_0x5b6f, 0xf0cf6));
var h_tmp_String = '',
    h_oInfowindowForPoly_Line = null,
    h_oInfowindowForMarker = null,
    h_oaLayer = null,
    h_nItemCntPerLayer = 0x2710,
    h_bNaver = ![],
    h_bGrayMap = ![],
    h_nGrayMapChangedCNT = 0x0,
    h_oMap = null,
    h_divMap = null,
    h_bLoaded = ![],
    h_bTOCLoaded = ![],
    h_nModeMap = 0x1,
    h_nModeMap2 = 0x0,
    h_oMouseNowLatLng = null,
    h_oLeftClickLatLng = null,
    h_bLeftClickLatLngTriger = ![],
    h_oTmpPolyline = null,
    h_oTmpCircle = null,
    h_bHideCenterMaker = ![],
    h_oTmpMarkers = null,
    h_oTmpGPS = null,
    h_nFullMode = 0x0,
    h_oBeforeFullModeBound = null,
    h_oAfterFullModeBound = null,
    h_sFontNM = '',
    h_sCustomLogo = '',
    h_sCustomLogoColor = '',
    h_nCustomMode = 0x0,
    h_oMouseLatlng = null,
    h_oMousePoint = null;
const h_csNODATA = 'NO\x20Data';
var h_nPreLayerIdx_AreaSeletedPoint = -0x1,
    h_nPreLayerIdx_AreaSeletedOD = -0x1;
let h_nNoFireBoundChangedForSpeed = 0x0,
    h_nNoFireZoomChangedForSpeed = 0x0,
    h_nNoFireMouseOver = 0x0,
    h_bMapDragging = ![],
    h_bMasterMapDragging = ![],
    h_bSlaveMapDragging = ![],
    h_nAdminLogIn = ![],
    h_bOnMap = ![],
    h_bOnMarker = ![],
    h_sBizReplaceTags = '',
    h_sBizReplaceValues = '',
    h_bDraggingTempCircle = ![],
    h_oTempCircle = null,
    h_oTempWhiteCircle_ForTop = null,
    h_oTempCircleMarker = null,
    h_oTempCircleMarkerImage = null,
    h_oTempCircleMarkerImageForDrag = null,
    h_oTempShape = null,
    h_oTempWhiteShape_ForTop = null,
    h_bTempCircleAutoSize = ![],
    h_fTempCircleAutoR = 0x1,
    h_fTempCircleSync = ![],
    h_isMobile = /Android|webOS|iPhone|i__Pad|iPod|BlackBerry/i ['test'](navigator[_0x3a1a23(0x360)]) ? !![] : ![],
    h_isTablet = ![];
navigator['userAgent']['match'](/Tablet|iPad/i) && (h_isTablet = !![]);

function _h_returnInfoWindowsAndShiftPoint() {
    if (h_isMobile == !![] || h_isTablet == !![]) return;
    _h_removeInfowindow(), closeInfoWindow(null), onMarkerMouseOverListener_shiftReturn(), _h_removeShiftGuideLine();
}

function _h_HideTmpPolygonForChangeBound() {
    const _0x12baad = _0x3a1a23;
    let _0x544703 = $('svg')['length'];
    for (let _0xf1b26 = 0x0; _0xf1b26 < _0x544703; _0xf1b26++)
        if ($('svg')[_0xf1b26][_0x12baad(0x108)][_0x12baad(0x363)] > 0x5) $(_0x12baad(0x142))[_0xf1b26][_0x12baad(0x35d)]['display'] = 'none';
}
var m_nCallShowPolygonForChangeBound = 0x0;

function _h_ShowTmpPolygonForChangeBound() {
    m_nCallShowPolygonForChangeBound++;
    if (m_nCallShowPolygonForChangeBound > 0x3e8) m_nCallShowPolygonForChangeBound = m_nCallShowPolygonForChangeBound = 0x0;
    let _0x1f634d = m_nCallShowPolygonForChangeBound;
    setTimeout(function() {
        const _0x1f2974 = _0x3192;
        if (_0x1f634d == m_nCallShowPolygonForChangeBound) {
            let _0x56298f = $('svg')['length'];
            for (let _0x19a58f = 0x0; _0x19a58f < _0x56298f; _0x19a58f++)
                if ($(_0x1f2974(0x142))[_0x19a58f][_0x1f2974(0x108)]['length'] >= 0x5) $(_0x1f2974(0x142))[_0x19a58f][_0x1f2974(0x35d)][_0x1f2974(0x1ed)] = '';
        }
    }, 0xc8);
}
let h_realBoundChangedForPointSpeed_b = ![],
    h_realBoundChangedForLabelSpeed_b = ![];

function _h_realBoundChangedForPointSpeed(_0x81c1e0, _0x3437e0) {
    const _0x2a094c = _0x3a1a23;
    if (h_oMap == null) return;
    if (h_oaLayer == null) return;
    if (h_oaLayer[_0x2a094c(0x363)] < 0x1) return;
    let _0x21d7d3 = null,
        _0x302158 = null,
        _0x422b16 = null,
        _0x3d7309 = h_oMap[_0x2a094c(0x330)]();
    if (_0x3d7309 < 0x2) _0x3d7309 = 0x2;
    if (_0x3d7309 > 0xc) _0x3d7309 = 0xc;
    let _0x1046b9 = 0x0;
    for (let _0x53d44a = 0x0; _0x53d44a < h_oaLayer[_0x2a094c(0x363)]; _0x53d44a++) {
        if (h_oaLayer[_0x53d44a][_0x2a094c(0x350)] == 0x5 && h_oaLayer[_0x53d44a]['bVisible'] == !![] && h_oaLayer[_0x53d44a][_0x2a094c(0x298)] == ![]) {
            if (h_oaLayer[_0x53d44a]['aPointOrLineOrPolygon'] != null) {
                if (h_oaLayer[_0x53d44a][_0x2a094c(0x1ad)][_0x2a094c(0x121)]()[_0x2a094c(0x363)] > 0x3e8) {
                    _0x21d7d3 = h_oaLayer[_0x53d44a][_0x2a094c(0x1ad)];
                    if (h_realBoundChangedForPointSpeed_b == ![]) {
                        let _0x4e3815 = _0x21d7d3[_0x2a094c(0x1a3)];
                        _0x21d7d3[_0x2a094c(0x1d4)](), _0x21d7d3[_0x2a094c(0x113)](), _0x21d7d3['addMarkers'](_0x4e3815), _0x4e3815 = null, h_realBoundChangedForPointSpeed_b = !![];
                    }
                }
            }
            _0x3437e0 == ![] && h_oaLayer[_0x53d44a][_0x2a094c(0x393)] != null && (_0x302158 = h_oaLayer[_0x53d44a]['aLabel'], _0x422b16 = h_oaLayer[_0x53d44a]['aPointOrLineOrPolygon_Labels_ZOOM'][_0x3d7309], _0x1046b9 = h_oaLayer[_0x53d44a]['zIndex'], h_realBoundChangedForLabelSpeed_b == ![] && (_0x302158 != null && (_0x302158[_0x2a094c(0x1a3)][_0x2a094c(0x363)] > 0x0 && (_0x302158[_0x2a094c(0x1d4)](), _0x302158[_0x2a094c(0x328)](null), _0x302158[_0x2a094c(0x113)]())), h_realBoundChangedForLabelSpeed_b = !![]));
        }
    }
    setTimeout(function() {
        const _0x39eb4c = _0x2a094c;
        if (_0x81c1e0 == h_nNoFireBoundChangedForSpeed) {
            _0x21d7d3 != null && (_0x21d7d3[_0x39eb4c(0x328)](h_oMap), _0x21d7d3['redraw'](), h_realBoundChangedForPointSpeed_b = ![], _0x21d7d3 = null);
            _0x302158 = null, _0x422b16 = null, h_realBoundChangedForLabelSpeed_b = ![];
            if (_0x3437e0 == !![]) return;
            for (let _0x57f1c2 = 0x0; _0x57f1c2 < h_oaLayer[_0x39eb4c(0x363)]; _0x57f1c2++) {
                h_oaLayer[_0x57f1c2][_0x39eb4c(0x393)] != null && (h_oaLayer[_0x57f1c2]['aPointOrLineOrPolygon_Labels_ZOOM'] != null && (_0x302158 = h_oaLayer[_0x57f1c2][_0x39eb4c(0x393)], _0x422b16 = h_oaLayer[_0x57f1c2][_0x39eb4c(0x2ae)][_0x3d7309], h_oaLayer[_0x57f1c2][_0x39eb4c(0x350)] == 0x5 && h_oaLayer[_0x57f1c2][_0x39eb4c(0x310)] == !![] && h_oaLayer[_0x57f1c2][_0x39eb4c(0x298)] == ![] && _h_setVisiableLabelMapExtent(_0x302158, _0x422b16, 0x3e8, _0x1046b9, _0x81c1e0)));
            }
        }
    }, 0x64);
}

function _h_setVisiableLabelMapExtent(_0x42ea6c, _0x1bd657, _0x2945d0, _0x40cccb, _0x1a79fc) {
    if (h_oMap == null) return;
    if (_0x1bd657['length'] < 0x1f4) _h_setVisiableLabelMapExtent_for500Under(_0x42ea6c, _0x1bd657, _0x2945d0, _0x40cccb, _0x1a79fc);
    else _h_setVisiableLabelMapExtent_for500Over(_0x42ea6c, _0x1bd657, _0x2945d0, _0x40cccb, _0x1a79fc);
    _0x42ea6c = null, _0x1bd657 = null;
}

function _h_setVisiableLabelMapExtent_for500Under(_0x5bd8d5, _0x1b22eb, _0x2a6f6b, _0x1e93d5, _0x17f499) {
    const _0x4e308d = _0x3a1a23;
    if (h_oMap == null) return;
    let _0x5c3f73 = _0x1b22eb[_0x4e308d(0x363)],
        _0x4019b9 = _0x1b22eb,
        _0x37d607 = setInterval(function() {
            const _0x240f62 = _0x4e308d;
            let _0x119a80 = HM_getLayersCnt();
            if (_0x17f499 >= h_nNoFireBoundChangedForSpeed - _0x119a80) {
                let _0xb9a876 = new Array();
                for (let _0x591bec = 0x0; _0x591bec < _0x5c3f73; _0x591bec++) {
                    let _0x388858 = {
                            'offset': new kakao[(_0x240f62(0x12a))]['Point'](_0x4019b9[_0x591bec][_0x240f62(0xcc)], _0x4019b9[_0x591bec][_0x240f62(0x370)])
                        },
                        _0x4471ab = new kakao[(_0x240f62(0x12a))][(_0x240f62(0x28f))](_0x4019b9[_0x591bec][_0x240f62(0x1c6)], _0x4019b9[_0x591bec][_0x240f62(0x1a4)], _0x388858),
                        _0xf346 = new kakao[(_0x240f62(0x12a))][(_0x240f62(0xfc))]({
                            'position': _0x4019b9[_0x591bec][_0x240f62(0x1b5)],
                            'image': _0x4471ab,
                            'zIndex': _0x1e93d5 - 0x1,
                            'opacity': _0x4019b9[_0x591bec][_0x240f62(0x2e7)],
                            'clickable': ![]
                        });
                    _0xb9a876['push'](_0xf346), _0xf346 = null, _0x4471ab = null, _0x388858 = null;
                }
                _0xb9a876 != null && (_0x5bd8d5[_0x240f62(0x1d4)](), _0x5bd8d5['addMarkers'](_0xb9a876), _0x5bd8d5[_0x240f62(0x328)](h_oMap), _0x5bd8d5[_0x240f62(0x113)](), _0xb9a876 = null), clearInterval(_0x37d607), _0x37d607 = null, _0x4019b9 = null, _0x1b22eb = null, _0x5bd8d5 = null, oLastMaker = null;
            } else clearInterval(_0x37d607), _0x37d607 = null, _0x4019b9 = null, _0x1b22eb = null, _0x5bd8d5 = null, oLastMaker = null;
        }, 0xa);
}

function _h_setVisiableLabelMapExtent_for500Over(_0x3c4cae, _0x3b58ca, _0x1e4029, _0x36e1e3, _0xfa6ce3) {
    const _0x5ab47e = _0x3a1a23;
    if (h_oMap == null) return;
    let _0x24dcef = h_oMap[_0x5ab47e(0x2a3)](),
        _0x31ae31, _0x1f511e, _0x2964be, _0x4ebbf6;
    _0x31ae31 = _0x24dcef[_0x5ab47e(0x31e)]()[_0x5ab47e(0x387)](), _0x1f511e = _0x24dcef['getSouthWest']()[_0x5ab47e(0xac)](), _0x2964be = _0x24dcef[_0x5ab47e(0x3ac)]()[_0x5ab47e(0x387)](), _0x4ebbf6 = _0x24dcef[_0x5ab47e(0x3ac)]()[_0x5ab47e(0xac)]();
    let _0x23488b = _0x3b58ca[_0x5ab47e(0x363)],
        _0x2f54a6 = 0x0,
        _0xcf5fe8 = _0x23488b - 0x1;
    if (_0x23488b < 0x64) {} else {
        let _0xf71c5b = parseInt(_0x23488b / 0x2);
        if (_0x3b58ca[_0xf71c5b]['forSortY'] < _0x1f511e) {
            _0x2f54a6 = _0xf71c5b, _0xf71c5b += parseInt(_0x23488b / 0x4);
            if (_0x3b58ca[_0xf71c5b]['forSortY'] < _0x1f511e) _0x2f54a6 = _0xf71c5b;
        } else {
            _0xf71c5b -= parseInt(_0x23488b / 0x4);
            if (_0x3b58ca[_0xf71c5b][_0x5ab47e(0x3ef)] < _0x1f511e) _0x2f54a6 = _0xf71c5b;
        }
        _0xf71c5b = parseInt(_0x23488b / 0x2);
        if (_0x3b58ca[_0xf71c5b][_0x5ab47e(0x3ef)] > _0x4ebbf6) {
            _0xcf5fe8 = _0xf71c5b, _0xf71c5b -= parseInt(_0x23488b / 0x4);
            if (_0x3b58ca[_0xf71c5b]['forSortY'] > _0x4ebbf6) _0xcf5fe8 = _0xf71c5b;
        } else {
            _0xf71c5b += parseInt(_0x23488b / 0x4);
            if (_0x3b58ca[_0xf71c5b][_0x5ab47e(0x3ef)] > _0x4ebbf6) _0xcf5fe8 = _0xf71c5b;
        }
        for (let _0x3205e7 = _0x2f54a6; _0x3205e7 < _0xcf5fe8; _0x3205e7++) {
            if (_0x3b58ca[_0x3205e7][_0x5ab47e(0x3ef)] >= _0x1f511e) {
                _0x2f54a6 = _0x3205e7;
                break;
            }
        }
        for (let _0x496700 = _0x2f54a6; _0x496700 < _0xcf5fe8; _0x496700++) {
            if (_0x3b58ca[_0x496700][_0x5ab47e(0x3ef)] >= _0x4ebbf6) {
                _0xcf5fe8 = _0x496700;
                break;
            }
        }
    }
    let _0x124e5d = 0.0001 * _h_pow(0x2, h_oMap[_0x5ab47e(0x330)]());
    if (h_oMap['getLevel']() <= 0x2) _0x124e5d = 0x0;
    let _0x224b31 = 0x0;
    if (_0xcf5fe8 - _0x2f54a6 > 0x3e8) _0x224b31 = parseInt((_0xcf5fe8 - _0x2f54a6) / 0x3e8);
    let _0x4ee9ea = null,
        _0x328dab = _0x3b58ca,
        _0x2d8135 = _0x2f54a6,
        _0x4641c4 = 0x0,
        _0x1cbaaa = setInterval(function() {
            const _0x11f4e0 = _0x5ab47e;
            let _0x24721f = HM_getLayersCnt();
            if (_0xfa6ce3 >= h_nNoFireBoundChangedForSpeed - _0x24721f) {
                let _0x2937bf = _0x2d8135 + 0x14;
                if (_0x2937bf >= _0xcf5fe8) _0x2937bf = _0xcf5fe8 - 0x1;
                let _0x3c9de0 = null;
                for (let _0x1b20c8 = _0x2d8135; _0x1b20c8 < _0x2937bf; _0x1b20c8++) {
                    {
                        if (_0x328dab[_0x1b20c8][_0x11f4e0(0x1b5)][_0x11f4e0(0x387)]() >= _0x31ae31 && _0x328dab[_0x1b20c8]['position'][_0x11f4e0(0x387)]() <= _0x2964be) {
                            let _0x1df959 = ![];
                            if (_0x4ee9ea == null) _0x1df959 = !![];
                            else {
                                let _0x13c341 = _h_GetDistant(_0x4ee9ea[_0x11f4e0(0x1b5)][_0x11f4e0(0x387)](), _0x4ee9ea[_0x11f4e0(0x1b5)][_0x11f4e0(0xac)](), _0x328dab[_0x1b20c8]['position'][_0x11f4e0(0x387)](), _0x328dab[_0x1b20c8][_0x11f4e0(0x1b5)]['getLat']());
                                if (_0x124e5d < _0x13c341) _0x1df959 = !![];
                            }
                            if (_0x1df959 == !![]) {
                                if (_0x3c9de0 == null) _0x3c9de0 = new Array();
                                _0x4ee9ea = _0x328dab[_0x1b20c8];
                                let _0x508104 = {
                                        'offset': new kakao[(_0x11f4e0(0x12a))][(_0x11f4e0(0x29b))](_0x328dab[_0x1b20c8][_0x11f4e0(0xcc)], _0x328dab[_0x1b20c8][_0x11f4e0(0x370)])
                                    },
                                    _0x5d9961 = new kakao[(_0x11f4e0(0x12a))]['MarkerImage'](_0x328dab[_0x1b20c8]['imageSrc'], _0x328dab[_0x1b20c8]['imageSize'], _0x508104),
                                    _0x3b0d46 = new kakao[(_0x11f4e0(0x12a))][(_0x11f4e0(0xfc))]({
                                        'position': _0x328dab[_0x1b20c8][_0x11f4e0(0x1b5)],
                                        'image': _0x5d9961,
                                        'zIndex': _0x36e1e3 - 0x1,
                                        'opacity': _0x328dab[_0x1b20c8][_0x11f4e0(0x2e7)],
                                        'clickable': ![]
                                    });
                                _0x3c9de0[_0x11f4e0(0x29a)](_0x3b0d46), _0x3b0d46 = null, _0x5d9961 = null, _0x508104 = null, _0x4641c4++;
                            } else {}
                        }
                    }
                    _0x1b20c8 = _0x1b20c8 + _0x224b31;
                }
                _0x2d8135 += 0x14, _0x3c9de0 != null && (_0x3c4cae[_0x11f4e0(0x21a)](_0x3c9de0), _0x3c4cae[_0x11f4e0(0x328)](h_oMap), _0x3c4cae[_0x11f4e0(0x113)](), _0x3c9de0 = null), (_0x2d8135 >= _0xcf5fe8 || _0x1e4029 < _0x4641c4) && (clearInterval(_0x1cbaaa), _0x1cbaaa = null, _0x328dab = null, _0x3b58ca = null, _0x3c4cae = null, _0x4ee9ea = null);
            } else clearInterval(_0x1cbaaa), _0x1cbaaa = null, _0x328dab = null, _0x3b58ca = null, _0x3c4cae = null, _0x4ee9ea = null;
        }, 0xa);
}
let _h_nCallIDForMask = 0x0;

function _h_realBoundChangedForMaskSpeed(_0x140d6b) {
    const _0x45c892 = _0x3a1a23;
    if (h_oMask == null) return;
    if (h_oMask != null) {
        if (h_oMask['getMap']() != null) h_oMask[_0x45c892(0x328)](null);
    }
    _h_nCallIDForMask++;
    if (_h_nCallIDForMask > 0x2710) _h_nCallIDForMask = 0x0;
    let _0x3c5507 = _h_nCallIDForMask;
    setTimeout(function() {
        _h_nCallIDForMask == _0x3c5507 && (h_oMask != null && h_oMask['setMap'](h_oMap));
    }, 0x1f4);
}
window[_0x3a1a23(0x3e0)](_0x3a1a23(0x15c), function() {
    $(h_divMap)['css']('visibility', 'hidden');
});

function HM_onBoundsChangeForHM() {
    const _0x3f5516 = _0x3a1a23;
    alert(_0x3f5516(0x296));
}

function HM_forceRefresh() {
    _h_returnInfoWindowsAndShiftPoint(), _h_onBounds_changed(), _user_h_removeTmpMapRightMarker(), _h_removeLeftClickLatLngtMarker(), _h_removeTmpPolyline(), _h_removeTmpCircle(), _h_removeTmpMarkers(), H_map_distance_measurement_DeleteTotalDraw();
}

function HM_forceRefreshAndReloadPoint() {
    const _0x396ed2 = _0x3a1a23;
    for (let _0x5f3df7 = 0x0; _0x5f3df7 < h_oaLayer[_0x396ed2(0x363)]; _0x5f3df7++) {
        h_oaLayer[_0x5f3df7][_0x396ed2(0x350)] == 0x5 && h_oaLayer[_0x5f3df7][_0x396ed2(0x298)] == ![] && h_oaLayer[_0x5f3df7][_0x396ed2(0x1b8)] == '' && h_oaLayer[_0x5f3df7][_0x396ed2(0x131)][_0x396ed2(0x363)] > 0xa && _h_GetPointFromUrl(h_oaLayer[_0x5f3df7], !![]);
    }
    HM_forceRefresh();
}

function _h_onMouseMove(_0x1d44e5) {
    const _0x28ee9f = _0x3a1a23;
    h_oMouseNowLatLng = _0x1d44e5[_0x28ee9f(0x2fa)], h_bDraggingTempCircle == !![] && (_h_returnInfoWindowsAndShiftPoint(), h_oTempCircleMarker[_0x28ee9f(0xea)](_0x1d44e5['latLng']), _h_setTempCirclCenterByUserMouseMove(), _h_onChangeMasterTempCircleForSlave(_h_getTempCirclCenter(), _h_getTempCircleR_m()));
}

function _h_getScreenXY2GeoXY(_0x2357d5, _0x142de8) {
    const _0x135d28 = _0x3a1a23;
    let _0x3fb70f = new kakao[(_0x135d28(0x12a))][(_0x135d28(0x32b))](h_oMap[_0x135d28(0x2a3)]()[_0x135d28(0x3ac)]()['getLat'](), h_oMap[_0x135d28(0x2a3)]()[_0x135d28(0x31e)]()[_0x135d28(0x387)]())['toCoords'](),
        _0x98dc16 = new kakao['maps'][(_0x135d28(0x32b))](h_oMap[_0x135d28(0x2a3)]()[_0x135d28(0x3ac)]()[_0x135d28(0xac)](), h_oMap[_0x135d28(0x2a3)]()['getNorthEast']()[_0x135d28(0x387)]())['toCoords'](),
        _0x2b51b0 = new kakao[(_0x135d28(0x12a))][(_0x135d28(0x32b))](h_oMap[_0x135d28(0x2a3)]()[_0x135d28(0x31e)]()[_0x135d28(0xac)](), h_oMap[_0x135d28(0x2a3)]()['getSouthWest']()[_0x135d28(0x387)]())[_0x135d28(0x29f)](),
        _0x4af9c8 = window['innerWidth'],
        _0x933462 = window[_0x135d28(0x272)],
        _0x4fbeff = (_0x98dc16[_0x135d28(0x326)]() - _0x3fb70f[_0x135d28(0x326)]()) / _0x4af9c8,
        _0x155718 = (_0x98dc16[_0x135d28(0x112)]() - _0x2b51b0['getY']()) / _0x933462,
        _0x198e88 = _0x3fb70f['getX']() + _0x2357d5 * _0x4fbeff,
        _0x3b8199 = _0x2b51b0['getY']() + (_0x933462 - _0x142de8) * _0x155718,
        _0x1592fa = new kakao[(_0x135d28(0x12a))]['Coords'](_0x198e88, _0x3b8199)[_0x135d28(0x372)]();
    return _0x3fb70f = null, _0x98dc16 = null, _0x2b51b0 = null, _0x1592fa;
}

function _h_getMapDiagonalLengthMeter() {
    const _0x15027f = _0x3a1a23;
    let _0x221887 = _h_getDistance(h_oMap['getBounds']()[_0x15027f(0x31e)]()[_0x15027f(0xac)](), h_oMap['getBounds']()[_0x15027f(0x31e)]()[_0x15027f(0x387)](), h_oMap[_0x15027f(0x2a3)]()[_0x15027f(0x3ac)]()[_0x15027f(0xac)](), h_oMap['getBounds']()[_0x15027f(0x3ac)]()[_0x15027f(0x387)]());
    return _0x221887;
}

function _h_getMapLengthMeter() {
    const _0x306984 = _0x3a1a23;
    let _0x3f0bcf = _h_getDistance(h_oMap[_0x306984(0x2a3)]()[_0x306984(0x3ac)]()[_0x306984(0xac)](), h_oMap[_0x306984(0x2a3)]()[_0x306984(0x31e)]()[_0x306984(0x387)](), h_oMap[_0x306984(0x2a3)]()[_0x306984(0x3ac)]()[_0x306984(0xac)](), h_oMap[_0x306984(0x2a3)]()[_0x306984(0x3ac)]()[_0x306984(0x387)]());
    return _0x3f0bcf;
}

function _h_getMapLengthMeter_Vertical() {
    const _0x43940d = _0x3a1a23;
    let _0x2482b2 = _h_getDistance(h_oMap[_0x43940d(0x2a3)]()[_0x43940d(0x3ac)]()[_0x43940d(0xac)](), h_oMap['getBounds']()[_0x43940d(0x3ac)]()[_0x43940d(0x387)](), h_oMap[_0x43940d(0x2a3)]()[_0x43940d(0x31e)]()[_0x43940d(0xac)](), h_oMap[_0x43940d(0x2a3)]()[_0x43940d(0x3ac)]()[_0x43940d(0x387)]());
    return _0x2482b2;
}

function _h_setCircleAutoResize_R() {
    let _0x2d8d7a = _h_getMapDiagonalLengthMeter(),
        _0x49fd83 = _h_getTempCircleR_m();
    h_fTempCircleAutoR = _0x2d8d7a / _0x49fd83;
}

function _h_onZoom_start() {}

function _h_onZoom_changed() {
    _h_checkLabelVisiable();
    if (h_oTempCircle != null && h_bTempCircleAutoSize == !![] && h_oTempCircle != null) {
        let _0x32841e = _h_getMapDiagonalLengthMeter(),
            _0x35cad5 = _0x32841e / h_fTempCircleAutoR;
        _h_drawTempCircle(_h_getTempCirclCenter(), _0x35cad5, !![], ![]);
    }
    _h_setCircleAutoResize_R();
}

function _h_checkLabelVisiable() {
    const _0x38419c = _0x3a1a23;
    if (h_oaLayer == null) return;
    let _0x35409e = h_oaLayer[_0x38419c(0x363)];
    for (let _0x38bef0 = 0x0; _0x38bef0 < _0x35409e; _0x38bef0++) {
        if (h_oaLayer[_0x38bef0] != null) {
            if (h_oaLayer[_0x38bef0][_0x38419c(0x393)] != null) {
                if (h_oaLayer[_0x38bef0]['aLabel']['getMarkers']()[_0x38419c(0x363)] > 0x0) {
                    if (h_oaLayer[_0x38bef0][_0x38419c(0x253)] >= 0x0 || h_oaLayer[_0x38bef0]['nLabelMaxZoom'] >= 0x0) {
                        let _0x42264f = h_oaLayer[_0x38bef0][_0x38419c(0x383)][_0x38419c(0x330)]();
                        if (_0x42264f >= h_oaLayer[_0x38bef0]['nLabelMinZoom'] && _0x42264f <= h_oaLayer[_0x38bef0][_0x38419c(0x137)]) {
                            if (h_oaLayer[_0x38bef0][_0x38419c(0x310)] == !![]) {
                                if (h_oaLayer[_0x38bef0]['aLabel'][_0x38419c(0x2ff)]() == null) h_oaLayer[_0x38bef0]['aLabel'][_0x38419c(0x328)](h_oaLayer[_0x38bef0][_0x38419c(0x383)]);
                            } else h_oaLayer[_0x38bef0][_0x38419c(0x393)][_0x38419c(0x328)](null);
                        } else {
                            if (h_oaLayer[_0x38bef0]['bVisible'] == !![]) {
                                if (h_oaLayer[_0x38bef0]['aLabel'][_0x38419c(0x2ff)]() != null) {
                                    let _0x85de7b = h_oaLayer[_0x38bef0][_0x38419c(0x393)][_0x38419c(0x1a3)];
                                    h_oaLayer[_0x38bef0][_0x38419c(0x393)]['clear'](), h_oaLayer[_0x38bef0][_0x38419c(0x393)][_0x38419c(0x328)](null), h_oaLayer[_0x38bef0][_0x38419c(0x393)][_0x38419c(0x113)](), h_oaLayer[_0x38bef0]['aLabel'][_0x38419c(0x21a)](_0x85de7b), _0x85de7b = null;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    _h_realBoundChangedForPointSpeed(h_nNoFireBoundChangedForSpeed, ![]);
}

function _h_onClick(_0x5ed712) {
    const _0x375dfc = _0x3a1a23;
    h_bLeftClickLatLngTriger == !![] && (_h_removeLeftClickLatLngtMarker(), h_oLeftClickLatLng = _0x5ed712[_0x375dfc(0x2fa)], h_oLeftClickLatLng = new kakao[(_0x375dfc(0x12a))][(_0x375dfc(0xfc))]({
        'position': h_oLeftClickLatLng,
        'zIndex': 0x1869f
    }), h_oLeftClickLatLng['setMap'](map), __sendMessage_LeftMouseLatLng(h_oLeftClickLatLng[_0x375dfc(0xc3)]()[_0x375dfc(0xac)](), h_oLeftClickLatLng[_0x375dfc(0xc3)]()[_0x375dfc(0x387)]()));
}

function _h_removeLeftClickLatLngtMarker() {
    const _0x38abc0 = _0x3a1a23;
    h_oLeftClickLatLng != null && (h_oLeftClickLatLng[_0x38abc0(0x328)](null), h_oLeftClickLatLng = null);
}
let h_oTempPOIMarker = null,
    h_aoTempMultiPOIMarker = null,
    h_aoTempMultiPOILabelMarker = null;

function _h_showTempMarker(_0x41a058, _0x538cab, _0x653ec1, _0x390d28, _0x2f9f40, _0x25493a, _0x3e1583, _0xc133e0) {
    const _0x57d7d5 = _0x3a1a23;
    _h_removeTempMarker();
    let _0x4dc158 = _h_GetMarkerSrcForSelected(_0x41a058, _0x538cab, _0x653ec1),
        _0x33f3dc = new kakao[(_0x57d7d5(0x12a))]['LatLng'](_0x390d28, _0x2f9f40),
        _0x1a525b = new kakao[(_0x57d7d5(0x12a))]['Size'](_0x653ec1, _0x653ec1),
        _0x19ef1e = {
            'offset': new kakao[(_0x57d7d5(0x12a))][(_0x57d7d5(0x29b))](_0x653ec1 / 0x2, _0x653ec1 / 0x2)
        },
        _0x464577 = new kakao[(_0x57d7d5(0x12a))]['MarkerImage'](_0x4dc158, _0x1a525b, _0x19ef1e);
    h_oTempPOIMarker = new kakao[(_0x57d7d5(0x12a))][(_0x57d7d5(0xfc))]({
        'position': _0x33f3dc,
        'image': _0x464577,
        'zIndex': 0x98967f,
        'opacity': 0.9
    }), h_oTempPOIMarker[_0x57d7d5(0x328)](h_oMap);
    if (_0x25493a != '') {
        let _0x3047a9 = _0x25493a,
            _0x400a2f = '';
        _0x400a2f = _h_getInfoWindowContentsForDiv(_0x3047a9, 0xe, !![]), kakao[_0x57d7d5(0x12a)][_0x57d7d5(0x303)][_0x57d7d5(0x257)](h_oTempPOIMarker, _0x57d7d5(0x267), onMarkerMouseOverListener(null, h_oTempPOIMarker, _0x400a2f, _0x653ec1)), kakao[_0x57d7d5(0x12a)][_0x57d7d5(0x303)][_0x57d7d5(0x257)](h_oTempPOIMarker, 'mouseout', onMarkerMouseOutListener(null, h_oTempPOIMarker)), kakao[_0x57d7d5(0x12a)][_0x57d7d5(0x303)][_0x57d7d5(0x257)](h_oTempPOIMarker, _0x57d7d5(0x38a), onPoiMarkerMouseOverListener(null, _0x390d28, _0x2f9f40)), _0x400a2f = null;
    }
    _0x1a525b = null, _0x19ef1e = null, _0x464577 = null;
    if (_0xc133e0 == !![]) {
        h_oMap[_0x57d7d5(0x213)](_0x33f3dc);
        if (_0x3e1583 != -0x1) {
            if (h_oMap[_0x57d7d5(0x330)]() != _0x3e1583) h_oMap[_0x57d7d5(0x2e1)](_0x3e1583);
        }
    }
    _0x33f3dc = null;
}

function _h_removeTempMarker() {
    const _0x27f202 = _0x3a1a23;
    if (h_oTempPOIMarker != null) h_oTempPOIMarker[_0x27f202(0x328)](null);
    h_oTempPOIMarker = null;
}

function _h_showTempMultiMarker(_0x4cf3a1, _0x4d8f42, _0x57eb85, _0x4f8bc7, _0x3449b7, _0x28daa4, _0x30f81f, _0x228a97) {
    const _0x515d62 = _0x3a1a23;
    _h_removeTempMultiMarker(), h_aoTempMultiPOIMarker = new Array();
    let _0x3937c0 = 0xb4,
        _0x2a108e = 0xb4,
        _0x8d3408 = 0x0,
        _0x41c078 = 0x0,
        _0x312d6c = _0x4cf3a1[_0x515d62(0x363)];
    for (let _0x34c6e3 = 0x0; _0x34c6e3 < _0x312d6c; _0x34c6e3++) {
        let _0x457834 = _h_GetMarkerSrc(_0x4cf3a1[_0x34c6e3], _0x4d8f42[_0x34c6e3], _0x57eb85[_0x34c6e3]),
            _0x495a98 = new kakao['maps'][(_0x515d62(0x32b))](_0x4f8bc7[_0x34c6e3], _0x3449b7[_0x34c6e3]),
            _0x147d13 = new kakao[(_0x515d62(0x12a))]['Size'](_0x57eb85[_0x34c6e3], _0x57eb85[_0x34c6e3]),
            _0x5b756e = {
                'offset': new kakao[(_0x515d62(0x12a))][(_0x515d62(0x29b))](_0x57eb85[_0x34c6e3] / 0x2, _0x57eb85[_0x34c6e3] / 0x2)
            },
            _0x451db8 = new kakao[(_0x515d62(0x12a))][(_0x515d62(0x28f))](_0x457834, _0x147d13, _0x5b756e);
        if (_0x3937c0 > _0x3449b7[_0x34c6e3]) _0x3937c0 = _0x3449b7[_0x34c6e3];
        if (_0x2a108e > _0x4f8bc7[_0x34c6e3]) _0x2a108e = _0x4f8bc7[_0x34c6e3];
        if (_0x8d3408 < _0x3449b7[_0x34c6e3]) _0x8d3408 = _0x3449b7[_0x34c6e3];
        if (_0x41c078 < _0x4f8bc7[_0x34c6e3]) _0x41c078 = _0x4f8bc7[_0x34c6e3];
        let _0x27ce4c = new kakao[(_0x515d62(0x12a))][(_0x515d62(0xfc))]({
            'position': _0x495a98,
            'image': _0x451db8,
            'zIndex': 0xdbba0,
            'opacity': 0.9
        });
        _0x27ce4c['setMap'](h_oMap), h_aoTempMultiPOIMarker['push'](_0x27ce4c);
        if (_0x28daa4[_0x34c6e3] != '') {
            let _0x19c0d1 = _0x28daa4[_0x34c6e3],
                _0x2d85ed = '';
            _0x2d85ed = _h_getInfoWindowContentsForDiv(_0x19c0d1, 0xe, !![]), kakao['maps']['event'][_0x515d62(0x257)](_0x27ce4c, _0x515d62(0x267), onMarkerMouseOverListener(null, _0x27ce4c, _0x2d85ed, _0x57eb85[_0x34c6e3])), kakao[_0x515d62(0x12a)][_0x515d62(0x303)][_0x515d62(0x257)](_0x27ce4c, 'mouseout', onMarkerMouseOutListener(null, _0x27ce4c));
        }
        _0x147d13 = null, _0x5b756e = null, _0x451db8 = null, _0x27ce4c = null, _0x495a98 = null;
    }
    if (_0x228a97 == !![]) {
        if (_0x312d6c > 0x1) {
            let _0x538589 = new kakao[(_0x515d62(0x12a))][(_0x515d62(0x10d))](new kakao[(_0x515d62(0x12a))][(_0x515d62(0x32b))](_0x2a108e, _0x3937c0), new kakao[(_0x515d62(0x12a))]['LatLng'](_0x41c078, _0x8d3408));
            h_oMap['setBounds'](_0x538589), _0x538589 = null;
        } else {
            let _0x384cf4 = new kakao[(_0x515d62(0x12a))][(_0x515d62(0x32b))](_0x4f8bc7[0x0], _0x3449b7[0x0]);
            h_oMap[_0x515d62(0x213)](_0x384cf4), _0x384cf4 = null;
        }
    }
    _0x4cf3a1 = null, _0x4d8f42 = null, _0x57eb85 = null, _0x4f8bc7 = null, _0x3449b7 = null, _0x28daa4 = null, _0x30f81f = null;
}

function _h_removeTempMultiMarker() {
    const _0x2d1c0f = _0x3a1a23;
    if (h_aoTempMultiPOIMarker != null) {
        let _0x123c2d = h_aoTempMultiPOIMarker[_0x2d1c0f(0x363)];
        for (let _0x39bf14 = 0x0; _0x39bf14 < _0x123c2d; _0x39bf14++) h_aoTempMultiPOIMarker[_0x39bf14][_0x2d1c0f(0x328)](null);
    }
    h_aoTempMultiPOIMarker = null;
    if (h_aoTempMultiPOILabelMarker != null) {
        let _0x1a63ee = h_aoTempMultiPOILabelMarker[_0x2d1c0f(0x363)];
        for (let _0x2f439f = 0x0; _0x2f439f < _0x1a63ee; _0x2f439f++) h_aoTempMultiPOILabelMarker[_0x2f439f][_0x2d1c0f(0x328)](null);
    }
    h_aoTempMultiPOILabelMarker = null;
}
var h_oErrorAlert = null;

function _h_showErrorAlertForBizFile(_0x415071, _0x45be3a) {
    const _0x17a166 = _0x3a1a23;
    _0x45be3a = _0x45be3a[_0x17a166(0x1c4)]('\x20')[_0x17a166(0x163)]('%20');
    if (_0x415071[_0x17a166(0x37d)](_0x17a166(0x143)) < 0x0) _h_showErrorAlert(_0x415071);
}

function _h_showErrorAlert(_0x9f7a1e) {
    const _0x35a2c8 = _0x3a1a23;
    if (h_oErrorAlert != null) return;
    h_oErrorAlert = Swal[_0x35a2c8(0x109)]({
        'toast': !![],
        'position': _0x35a2c8(0x2da),
        'showConfirmButton': ![],
        'timer': 0xbb8,
        'timerProgressBar': !![],
        'onOpen': function(_0x5a7c73) {
            const _0x51f06f = _0x35a2c8;
            _0x5a7c73[_0x51f06f(0x3e0)](_0x51f06f(0x3bc), Swal[_0x51f06f(0x3aa)]), _0x5a7c73[_0x51f06f(0x3e0)](_0x51f06f(0x144), Swal[_0x51f06f(0x18c)]);
        }
    }), h_oErrorAlert[_0x35a2c8(0x324)]({
        'icon': _0x35a2c8(0x1d1),
        'title': _0x9f7a1e
    }), setTimeout(function() {
        h_oErrorAlert = null;
    }, 0xbb8);
}
let h_sMapBase64 = '';

function HM_SaveMapImage(_0x1fd426) {
    _h_GetMapImage(_0x1fd426, ![]);
}

function HM_SetMapImageBase64String() {
    _h_GetMapImage('', !![]);
    let _0x502cfa = 0x0,
        _0x53015f = setInterval(function() {
            const _0x5b90c1 = _0x3192;
            _0x502cfa++;
            if (_0x502cfa > 0x32) {
                clearInterval(_0x53015f), _0x53015f = null;
                if (_h_isEmptyForObjectAndFunction('_HM_GetMapImageBase64String') == ![]) _HM_GetMapImageBase64String('ERROR');
                return;
            }
            if (h_sMapBase64 != '') {
                clearInterval(_0x53015f), _0x53015f = null;
                if (_h_isEmptyForObjectAndFunction(_0x5b90c1(0x167)) == ![]) _HM_GetMapImageBase64String(h_sMapBase64);
                h_sMapBase64 = '';
                return;
            }
        }, 0xfa);
}

function _h_GetMapImage(_0x182013, _0x19ca04) {
    const _0x39892e = _0x3a1a23;
    let _0x18de4b = $('img[src^=\x22http://map\x22]');
    for (let _0x7b0288 = 0x0; _0x7b0288 < _0x18de4b[_0x39892e(0x363)]; _0x7b0288++) {
        _0x18de4b[_0x7b0288][_0x39892e(0x29c)] = _0x39892e(0x11b), _0x18de4b[_0x7b0288][_0x39892e(0x36d)] = _0x39892e(0x2f8) + _0x18de4b[_0x7b0288]['src'];
    }
    _0x18de4b = null, html2canvas(h_divMap, {
        'useCORS': !![],
        'onrendered': function(_0x29c61e) {
            const _0x414f63 = _0x39892e;
            _0x19ca04 == !![] ? h_sMapBase64 = _0x29c61e[_0x414f63(0x321)]() : _0x29c61e[_0x414f63(0x322)](function(_0x29b91a) {
                saveAs(_0x29b91a, _0x182013);
            });
        }
    });
}

function _h_ShowLoadingFileMessage() {
    const _0x340db3 = _0x3a1a23;
    swal[_0x340db3(0x376)](), Swal[_0x340db3(0x324)]({
        'title': _0x340db3(0x20a),
        'html': _0x340db3(0xbc),
        'allowOutsideClick': ![],
        'timerProgressBar': !![],
        'onBeforeOpen': function() {
            const _0x12b90b = _0x340db3;
            Swal[_0x12b90b(0xca)]();
        },
        'onClose': function() {}
    })[_0x340db3(0x1e3)](function(_0x573bdc) {
        const _0x24352b = _0x340db3;
        if (_0x573bdc['dismiss'] === Swal[_0x24352b(0x197)][_0x24352b(0x2e9)]) {}
    });
}

function _h_ShowLoadingFileMessageForJson() {
    const _0x6e0505 = _0x3a1a23;
    swal[_0x6e0505(0x376)](), Swal[_0x6e0505(0x324)]({
        'title': _0x6e0505(0x152),
        'html': _0x6e0505(0x224),
        'allowOutsideClick': ![],
        'timerProgressBar': !![],
        'onBeforeOpen': function() {
            const _0x5161f6 = _0x6e0505;
            Swal[_0x5161f6(0xca)]();
        },
        'onClose': function() {}
    })['then'](function(_0x469acc) {
        const _0x16d7ec = _0x6e0505;
        if (_0x469acc[_0x16d7ec(0xdd)] === Swal[_0x16d7ec(0x197)][_0x16d7ec(0x2e9)]) {}
    });
}

function HM_setInit(_0x2c041c, _0x51d321) {
    const _0x24c563 = _0x3a1a23;
    h_oMap = _0x2c041c, h_divMap = _0x51d321, setTimeout(function() {
        _h_setBizLogo();
    }, 0x1f4), h_oMap[_0x24c563(0x11d)](0x1), $(h_divMap)[_0x24c563(0x107)](function(_0x2c31fa) {
        h_bMapDragging = !![], h_bMasterMapDragging = !![], h_bSlaveMapDragging = ![], __sendSyncMapDragStart();
    }), $(h_divMap)[_0x24c563(0xf4)](function(_0x5ee651) {
        __sendSyncMapDragEnd(), setTimeout(function() {
            h_bMapDragging = ![], h_bMasterMapDragging = ![], h_bSlaveMapDragging = ![];
        }, 0x64);
    });
}

function HM_openFile() {
    _h_onFileOpen();
}

function HM_setCustomMode(_0x3f0c87) {
    h_nCustomMode = _0x3f0c87;
}

function HM_setCustomModeAfter(_0x1aa752) {
    const _0x4ba305 = _0x3a1a23;
    h_nCustomMode = _0x1aa752;
    if (_0x1aa752 == 0x0) $(_0x4ba305(0x154))['css']('display', 'block'), $('#_LAYER_OPEN_SAVE')[_0x4ba305(0x287)](_0x4ba305(0x22b), _0x4ba305(0x22b)), $('#_LAYER_CHECK_UNCHECK')[_0x4ba305(0x287)](_0x4ba305(0x2a2), _0x4ba305(0x2b5));
    else {
        if (_0x1aa752 == 0x1) $('#_LAYER_CHECK_UNCHECK')[_0x4ba305(0x287)]('display', _0x4ba305(0x116)), $(_0x4ba305(0x104))[_0x4ba305(0x287)](_0x4ba305(0x22b), 'hidden'), $(_0x4ba305(0x154))[_0x4ba305(0x287)](_0x4ba305(0x2a2), '25px');
        else _0x1aa752 == 0x2 && ($('#_LAYER_CHECK_UNCHECK')['css']('display', _0x4ba305(0x250)), $(_0x4ba305(0x104))[_0x4ba305(0x287)](_0x4ba305(0x22b), _0x4ba305(0x1b3)), $(_0x4ba305(0x154))[_0x4ba305(0x287)](_0x4ba305(0x2a2), _0x4ba305(0x273)));
    }
}
var h_oWaterMarkOverlay = null;

function HM_setWaterMark() {
    const _0x47effe = _0x3a1a23;
    $['get'](_0x47effe(0x1fb), function(_0x2b417e) {
        const _0x4cd497 = _0x47effe;
        HM_setWaterMark2(_0x2b417e, _0x4cd497(0x3d5), _0x4cd497(0x355));
    });
}

function HM_setWaterMark2(_0x720cbe, _0x1fda84, _0x4544f8) {
    const _0x50d9f0 = _0x3a1a23;
    let _0x3cd8b5 = 0x28,
        _0x5abec9 = window[_0x50d9f0(0x1e8)];
    if (_0x5abec9 > 0x384) _0x3cd8b5 = 0x28;
    else _0x3cd8b5 = _0x5abec9 / 0x19;
    let _0x45d066 = _0x720cbe[_0x50d9f0(0x363)],
        _0x5ded86 = 0x2,
        _0x45c476 = _0x3cd8b5 + _0x5ded86 + _0x5ded86;
    _0x45c476 = _0x45c476 + _0x45c476 / 0x2;
    let _0x1ba936 = _h_getTextWidth(_0x720cbe, _0x3cd8b5 + _0x5ded86 * 0x2 + _0x50d9f0(0xe8) + _0x50d9f0(0x21c) + '\x27');
    _0x1ba936 = _0x1ba936 * 0x1;
    var _0x111589 = _0x50d9f0(0x34b) + _0x50d9f0(0x15e) + _0x720cbe + '&FILL_COLOR=' + _0x1fda84 + _0x50d9f0(0x395) + _0x4544f8 + _0x50d9f0(0x3e8) + _0x5ded86 + _0x50d9f0(0x10a) + _0x50d9f0(0x2aa) + _0x50d9f0(0x38c) + (_0x3cd8b5 + _0x5ded86) + _0x50d9f0(0x103) + _0x1ba936 + _0x50d9f0(0x35a) + _0x45c476 + 'px;\x20border:\x20none;\x22>' + _0x50d9f0(0x1ae);
    if (h_oWaterMarkOverlay != null) h_oWaterMarkOverlay['setMap'](null);
    h_oWaterMarkOverlay = new kakao[(_0x50d9f0(0x12a))][(_0x50d9f0(0x2b3))]({
        'position': h_oMap[_0x50d9f0(0x20b)](),
        'draggable': ![],
        'scrollwheel': ![],
        'disableDoubleClick': !![],
        'disableDoubleClickZoom': !![],
        'zIndex': 0xf423f,
        'content': _0x111589
    }), h_oWaterMarkOverlay['setMap'](h_oMap);
    let _0x2c746a = ![],
        _0x4271eb = '';
    $(_0x50d9f0(0x2f6))['mouseover'](function() {
        const _0x4099e6 = _0x50d9f0;
        let _0x3ea5dc = _0x45c476 * 1.4,
            _0x2157ae = null;
        if ($('#divWaterMark')[_0x4099e6(0x378)]()['get'](0x0)[_0x4099e6(0x3c3)] == _0x4099e6(0x379)) _0x2157ae = $(_0x4099e6(0x2f6))['parent']();
        else _0x2157ae = $('#divWaterMark');
        _0x2c746a == ![] ? (_0x4271eb = $(_0x4099e6(0x2f6))['parent']()[_0x4099e6(0x287)]('top'), nOriTop = parseInt(_0x4271eb[_0x4099e6(0xd2)]('px', '')), _0x2157ae['css']({
            'position': _0x4099e6(0x106),
            'top': nOriTop + _0x3ea5dc + 'px'
        }), _0x2c746a = !![]) : (_0x2157ae['css']({
            'position': _0x4099e6(0x106),
            'top': _0x4271eb
        }), _0x2c746a = ![]);
    });
}

function HM_setCustomLogo(_0x29171e, _0x5d1570, _0x3c927a) {
    const _0x14f76c = _0x3a1a23;
    h_sCustomLogo = _0x29171e;
    var _0x5312b4 = '<div\x20style=\x22position:\x20absolute;\x20cursor:\x20default;\x20z-index:\x201;\x20margin:\x200px\x206px;\x20height:\x2019px;\x20line-height:\x2014px;\x20right:\x200px;\x20bottom:\x200px;\x20color:\x20rgb(0,\x200,\x200);\x22>' + _0x14f76c(0x3b0) + '\x09\x09<div\x20style=\x22float:\x20left;\x20margin:\x200px\x204px\x200px\x200px;\x20font-family:\x20\x22NEXON\x20Lv1\x20Gothic\x20OTF\x20Light\x22,\x20AppleSDGothicNeo-Regular,\x20돋움,\x20dotum,\x20sans-serif;\x20font-weight:\x20bold;\x20color:\x20rgb(0,\x200,\x200);\x22>' + _0x14f76c(0x184) + _0x29171e + _0x14f76c(0x2e2) + _0x5d1570 + _0x14f76c(0x395) + _0x3c927a + '&STROKE_WIDTH=2&SIZE=12\x22\x20alt=\x22주식회사\x20비즈GIS\x20지도\x20엔진으로\x20작성되었습니다.\x22\x20style=\x22float:\x20right;\x20width:\x2080px;\x20height:\x2016px;\x20border:\x20none;\x22>' + _0x14f76c(0x117) + '\x09</div>' + _0x14f76c(0xc7) + _0x14f76c(0x36b) + _0x14f76c(0x176) + _0x14f76c(0x396) + _0x14f76c(0x2f7) + '\x09\x09</div>' + _0x14f76c(0x251) + _0x14f76c(0xe9);
    h_divMap[_0x14f76c(0x3b6)]['insertAdjacentHTML'](_0x14f76c(0x26e), _0x5312b4), _0x29171e = null, _0x5d1570 = null, _0x3c927a = null;
}

function _h_setBizLogo() {
    const _0x5151a7 = _0x3a1a23;
    if (h_sCustomLogo != '') return;
    var _0x4bd32e = _0x5151a7(0x134) + _0x5151a7(0x3b0) + _0x5151a7(0x207) + _0x5151a7(0x1b4) + _0x5151a7(0x117) + _0x5151a7(0x207) + '\x09\x09<img\x20src=\x22https://www.policymap.or.kr/heatmap_api/marker/svg_label.php?GUBUN=marker_svg2&ICON=_label&LABEL=%EC%A7%80%EC%95%84%EC%9D%B4%EC%97%90%EC%8A%A4&FILL_COLOR=rgba(134,134,134,0.8)&STROKE_COLOR=rgba(255,255,255,0.8)&STROKE_WIDTH=2&SIZE=12\x22\x20alt=\x22주식회사\x20비즈GIS\x20지도\x20엔진으로\x20작성되었습니다.\x22\x20style=\x22float:\x20left;\x20width:\x2060px;\x20height:\x2016px;\x20border:\x20none;\x22>' + _0x5151a7(0x117) + _0x5151a7(0x251) + _0x5151a7(0xc7) + _0x5151a7(0x36b) + '\x09\x09\x09<i\x20class=\x22fa\x20fa-object-ungroup\x22></i>' + _0x5151a7(0x396) + _0x5151a7(0x2f7) + '\x09\x09</div>' + _0x5151a7(0x251) + _0x5151a7(0xe9);
    h_divMap[_0x5151a7(0x3b6)]['insertAdjacentHTML'](_0x5151a7(0x26e), _0x4bd32e);
}

function _h_setFullScreen() {
    const _0xf22a85 = _0x3a1a23;
    h_oBeforeFullModeBound = _h_getMapExtent();
    let _0x3ed9ae = h_divMap;
    if (_0x3ed9ae[_0xf22a85(0x325)]) _0x3ed9ae[_0xf22a85(0x325)]();
    else {
        if (_0x3ed9ae[_0xf22a85(0x3cc)]) _0x3ed9ae[_0xf22a85(0x3cc)]();
        else {
            if (_0x3ed9ae[_0xf22a85(0x351)]) _0x3ed9ae[_0xf22a85(0x351)]();
            else _0x3ed9ae[_0xf22a85(0x1b1)] && _0x3ed9ae[_0xf22a85(0x1b1)]();
        }
    }
    _0x3ed9ae = null, h_nFullMode = 0x1;
}

function _h_GetMoreBigBound(_0x4827c6, _0xd99f87) {
    const _0x55572f = _0x3a1a23;
    let _0x5b2add = _0x4827c6['getNorthEast']()[_0x55572f(0xac)]() - _0x4827c6['getSouthWest']()['getLat'](),
        _0x140e1f = _0xd99f87[_0x55572f(0x3ac)]()[_0x55572f(0xac)]() - _0xd99f87[_0x55572f(0x31e)]()['getLat']();
    _0x4827c6 = null, _0xd99f87 = null;
    if (_0x5b2add < _0x140e1f) return 0x1;
    else return 0x0;
}
var nMapCheckTimerCnt = 0x0,
    oMapCheckTimer = setInterval(function() {
        const _0x30326c = _0x3a1a23;
        if (typeof window[_0x30326c(0x228)] != _0x30326c(0x2fd)) typeof window[_0x30326c(0x228)][_0x30326c(0x12a)] != _0x30326c(0x2fd) && (clearInterval(oMapCheckTimer), oMapCheckTimer = null, h_bNaver = !![]);
        else typeof window[_0x30326c(0x214)] != _0x30326c(0x2fd) && (typeof window['kakao'][_0x30326c(0x12a)] != _0x30326c(0x2fd) && (clearInterval(oMapCheckTimer), oMapCheckTimer = null, h_bNaver = ![]));
        nMapCheckTimerCnt++, nMapCheckTimerCnt > 0x1e && (clearInterval(oMapCheckTimer), oMapCheckTimer = null, alert('지도\x20종류\x20확인\x20안됨(Naver\x20또는\x20Kakao\x20지도).\x20사용\x20불가'));
    }, 0x64),
    oGrayTimer = setInterval(function() {
        typeof g_bGrayMap != 'undefined' && (clearInterval(oGrayTimer), oGrayTimer = null, h_bGrayMap = g_bGrayMap);
    }, 0x64);

function loadjquery_Check(_0x2f9bb2) {
    const _0x3d3606 = _0x3a1a23;
    if (typeof window['jQuery'] != _0x3d3606(0x2fd)) _0x2f9bb2();
    else {
        let _0x372e4f = document[_0x3d3606(0x3c2)](_0x3d3606(0xae));
        _0x372e4f['type'] = 'text/javascript', _0x372e4f[_0x3d3606(0x38b)] ? _0x372e4f['onreadystatechange'] = function() {
            const _0x58e5ba = _0x3d3606;
            (_0x372e4f['readyState'] == _0x58e5ba(0x1dc) || _0x372e4f['readyState'] == _0x58e5ba(0x299)) && (_0x372e4f[_0x58e5ba(0x236)] = null, _0x2f9bb2());
        } : _0x372e4f[_0x3d3606(0x309)] = function() {
            _0x2f9bb2();
        }, _0x372e4f[_0x3d3606(0x36d)] = 'https://www.policymap.or.kr/lib_xraymap/ex_lib/jquery/jquery-1.8.2.min.js', document[_0x3d3606(0x1f6)]('head')[0x0]['appendChild'](_0x372e4f);
    }
}

function _h_loadScript(_0x2439fb, _0x1eed84) {
    const _0x389f9b = _0x3a1a23;
    let _0x62578a = document[_0x389f9b(0x3c2)]('script');
    _0x62578a[_0x389f9b(0x36d)] = _0x2439fb, _0x62578a[_0x389f9b(0x309)] = _0x1eed84, document[_0x389f9b(0x1f6)](_0x389f9b(0x35f))[0x0][_0x389f9b(0x18f)](_0x62578a);
}
loadjquery_Check(function() {
    const _0x55a8de = _0x3a1a23;
    _h_loadScript(_0x55a8de(0x368), _h_setProgress), _h_loadScript(_0x55a8de(0x164), _h_setProgress), _h_loadScript(_0x55a8de(0x269), _h_setProgress), _h_loadScript(_0x55a8de(0x20c), _h_setProgress), _h_loadScript(_0x55a8de(0x30b), _h_setProgress), _h_loadScript('https://www.policymap.or.kr/lib/polylabel/polylabel.js', _h_setProgress), _h_loadScript(_0x55a8de(0x361), _h_setProgress), _h_loadScript(_0x55a8de(0x3a6), _h_setProgress), _h_loadScript(_0x55a8de(0x3e9), _h_setProgress), _h_loadScript(_0x55a8de(0xb2), _h_setProgress), _h_loadScript(_0x55a8de(0x1ec), _h_setProgress), _h_loadScript(_0x55a8de(0xfa), _h_setProgress), document['getElementsByTagName'](_0x55a8de(0x35f))[0x0]['insertAdjacentHTML'](_0x55a8de(0x3a5), _0x55a8de(0x157)), document[_0x55a8de(0x1f6)](_0x55a8de(0x35f))[0x0][_0x55a8de(0x195)](_0x55a8de(0x3a5), _0x55a8de(0x3c8)), document[_0x55a8de(0x1f6)](_0x55a8de(0x35f))[0x0][_0x55a8de(0x195)](_0x55a8de(0x3a5), _0x55a8de(0x19d)), document[_0x55a8de(0x1f6)]('head')[0x0][_0x55a8de(0x195)](_0x55a8de(0x3a5), _0x55a8de(0x240)), document[_0x55a8de(0x1f6)](_0x55a8de(0x35f))[0x0][_0x55a8de(0x195)](_0x55a8de(0x3a5), _0x55a8de(0xbd)), document['getElementsByTagName']('head')[0x0]['insertAdjacentHTML'](_0x55a8de(0x3a5), _0x55a8de(0x147)), document[_0x55a8de(0x1f6)]('head')[0x0][_0x55a8de(0x195)](_0x55a8de(0x3a5), _0x55a8de(0x193)), document[_0x55a8de(0x1f6)](_0x55a8de(0x35f))[0x0][_0x55a8de(0x195)]('beforeend', '<link\x20rel=\x22stylesheet\x22\x20href=\x22https://www.policymap.or.kr/lib_xraymap/ex_lib/scrollbar-thin/scrollbar-thin.css\x22\x20/>'), document[_0x55a8de(0x1f6)](_0x55a8de(0x35f))[0x0][_0x55a8de(0x195)]('beforeend', _0x55a8de(0x2f0)), document[_0x55a8de(0x1f6)](_0x55a8de(0x35f))[0x0]['insertAdjacentHTML'](_0x55a8de(0x3a5), '<link\x20rel=\x22stylesheet\x22\x20href=\x22user_copyClipboard_map.css\x22\x20/>'), document[_0x55a8de(0x1f6)](_0x55a8de(0x35f))[0x0][_0x55a8de(0x195)](_0x55a8de(0x3a5), _0x55a8de(0x288));
});

function h_setTopInfoWindow() {
    const _0x3159ea = _0x3a1a23;
    if (m_h_bTopTempWhiteCircleOrShape == ![]) return;
    if ($('div[style*=\x22z-index:\x209876543\x22]')['parent']() != $(_0x3159ea(0x24c))[_0x3159ea(0x378)]()[_0x3159ea(0x378)]()) {
        let _0x253906 = $(_0x3159ea(0x305))[_0x3159ea(0x161)]();
        $(_0x3159ea(0x24c))['parent']()[_0x3159ea(0x378)]()['prepend'](_0x253906), _0x253906 = null;
    }
}

function _h_onBounds_changed() {
    const _0xfa1433 = _0x3a1a23;
    if (h_oWaterMarkOverlay != null) h_oWaterMarkOverlay[_0xfa1433(0xea)](h_oMap[_0xfa1433(0x20b)]());
    _h_returnInfoWindowsAndShiftPoint();
    if (h_oaLayer == null) return;
    let _0x434f25 = h_oaLayer[_0xfa1433(0x363)];
    for (let _0x119625 = 0x0; _0x119625 < _0x434f25; _0x119625++) {
        if (h_oaLayer[_0x119625] != null) {
            _h_setColorMap(h_oaLayer[_0x119625][_0xfa1433(0x383)], h_oaLayer[_0x119625][_0xfa1433(0x1e6)]);
            if (h_oaLayer[_0x119625][_0xfa1433(0x350)] == 0x1 || h_oaLayer[_0x119625][_0xfa1433(0x350)] == 0x2) {
                if (h_oaLayer[_0x119625][_0xfa1433(0x383)] == null) return;
                HM_onBoundsChangeForHM_SetExtent(h_oaLayer[_0x119625]);
                if (h_oaLayer[_0x119625][_0xfa1433(0x298)] == !![]) HM_onBoundsChangeForHM_Auto(h_oaLayer[_0x119625]);
                _h_setColorMap(h_oaLayer[_0x119625][_0xfa1433(0x383)], h_oaLayer[_0x119625][_0xfa1433(0x1e6)]);
            } else {
                if (h_oaLayer[_0x119625][_0xfa1433(0x350)] == 0x3) _h_removeInfowindow(), _h_setColorMap(h_oaLayer[_0x119625][_0xfa1433(0x383)], h_oaLayer[_0x119625][_0xfa1433(0x1e6)]);
                else {
                    if (h_oaLayer[_0x119625][_0xfa1433(0x350)] == 0x5) {
                        if (h_oaLayer[_0x119625][_0xfa1433(0x298)] == !![]) HM_onBoundsChangeForHM_Auto(h_oaLayer[_0x119625]);
                    }
                }
            }
        }
    }
}

function HM_getLayersCnt() {
    const _0x2b0636 = _0x3a1a23;
    if (h_oaLayer == null) return 0x0;
    return h_oaLayer[_0x2b0636(0x363)];
}

function HM_getLayersStringArray() {
    const _0x1f2541 = _0x3a1a23;
    if (h_oaLayer == null) return null;
    let _0x33d0c3 = h_oaLayer[_0x1f2541(0x363)],
        _0x26ee74 = new Array();
    for (let _0x26e8b6 = 0x0; _0x26e8b6 < _0x33d0c3; _0x26e8b6++) {
        h_oaLayer[_0x26e8b6] != null && _0x26ee74[_0x1f2541(0x29a)](h_oaLayer[_0x26e8b6][_0x1f2541(0x1b8)]);
    }
    return _0x26ee74;
}

function HM_getLayersZoomPointArray() {
    const _0x2e7203 = _0x3a1a23;
    if (h_oaLayer == null) return null;
    let _0x22ee13 = h_oaLayer['length'],
        _0x5cd050 = new Array();
    for (let _0x114853 = 0x0; _0x114853 < _0x22ee13; _0x114853++) {
        h_oaLayer[_0x114853] != null && _0x5cd050[_0x2e7203(0x29a)](h_oaLayer[_0x114853]['aPointOrLineOrPolygon'][_0x2e7203(0x1a3)]);
    }
    return _0x5cd050;
}

function _0x3192(_0x2231c8, _0x51360d) {
    const _0x5b6f58 = _0x5b6f();
    return _0x3192 = function(_0x3192cf, _0x115d6b) {
        _0x3192cf = _0x3192cf - 0xa3;
        let _0x9b653 = _0x5b6f58[_0x3192cf];
        return _0x9b653;
    }, _0x3192(_0x2231c8, _0x51360d);
}

function HM_getLayerByNM(_0x342de1) {
    const _0x1392f7 = _0x3a1a23;
    if (h_oaLayer == null) return null;
    let _0x688596 = h_oaLayer[_0x1392f7(0x363)];
    for (let _0x2a507d = 0x0; _0x2a507d < _0x688596; _0x2a507d++)
        if (h_oaLayer[_0x2a507d]['sLayerNM'] == _0x342de1) return h_oaLayer[_0x2a507d];
    return null;
}

function HM_getLayersNM() {
    const _0x5dc023 = _0x3a1a23;
    if (h_oaLayer == null) return null;
    let _0x43a611 = h_oaLayer['length'],
        _0x4233d7 = new Array();
    for (let _0x34b8a7 = 0x0; _0x34b8a7 < _0x43a611; _0x34b8a7++) {
        h_oaLayer[_0x34b8a7] != null && _0x4233d7['push'](h_oaLayer[_0x34b8a7][_0x5dc023(0xef)]);
    }
    return _0x4233d7;
}

function _0x5b6f() {
    const _0x530078 = ['</span>m</div>', '<iframe\x20src=\x27', '&dlevel=11&mapMode=0&pinTitle=&boundary=&traffic=', 'onload', 'collapse-show', 'https://www.policymap.or.kr/lib_xraymap/ex_lib/promise/7.1.0/promise.min.js', 'PARA', 'remove', 'clientX', 'OverlayType', 'bVisible', ',39.', 'WHERE_LABEL', '</span>m', '&METHOD=1', 'MB_USER_DELETE_AREA', '&W=#W#', 'getMax', 'drag', '<img\x20src=\x22https://www.policymap.or.kr/lib/SortableList/img/od.png\x22\x20width=\x2220\x22>&nbsp;', 'trigger', 'COLOR_REVERSE', 'badge', '/API.php?', 'getSouthWest', '</li>', 'bind', 'toDataURL', 'toBlob', '가중\x20값\x20선택', 'fire', 'requestFullscreen', 'getX', '&CSS=', 'setMap', 'prop', '8px', 'LatLng', '\x22\x20frameborder=\x220\x22\x20allowfullscreen=\x22\x22></iframe></div>', 'CENTER', '&TOP_Y=#TOP_Y#', 'querySelector', 'getLevel', 'pRefMarker', 'onerror', 'sqrt', 'acos', '&METHOD=', '/MMS/getData.php?', '127.', 'SEND_MB_SHOW_MESSAGE', 'target', 'baseVal', '필드를\x20선택하세요.', 'density-legend-key', 'province_bizgis_dong', 'fa\x20fa-chevron-up', 'sortable-div', 'style=\x22vertical-align:bottom;\x20color:#C5C7CB;\x20cursor:pointer;\x22', '<b>', 'attr', '\x20범\x20례', '.label-forLayerNM', ',COLNM:', 'onmouseup', 'find', 'heatmapOverlay', 'NEXON\x20Lv1\x20Gothic\x20OTF\x20Light', 'nAuto_Tmp', '<div\x20id=\x22divWaterMark\x22\x20class\x20=\x22label\x22><span\x20class=\x22center\x22>', 'TABLE=province_bizgis_cty', 'SELECT', 'body', '|OUTLINE:', 'nType', 'mozRequestFullScreen', 'SEND_MAIN|ADD_OD_LAYER', 'Content-type', 'NEXON\x20Lv1\x20Gothic\x20OTF', 'rgba(255,255,255,0.3)', '&TOP_Y=', 'METHOD', '#dragdrop', '&nbsp;&nbsp;<a\x20onclick=\x22_h_onShowHideLegendListForTOC(event)\x22><i\x20class=\x22fa\x20fa-chevron-down\x22\x20title=\x22범례\x20보기\x22\x20#style_extent#></i></a>', 'px;\x20height:', 'toString', '단일\x20크기||', 'style', 'shift', 'head', 'userAgent', 'https://www.policymap.or.kr/lib_xraymap/ex_lib/es6-promise/es6-promise.auto.js', 'input[type=checkbox]', 'length', 'onmousemove', 'random', 'CLASS_MODE', 'COLOR_RAMP=', 'https://www.policymap.or.kr/lib_xraymap/ex_lib/jquery/jquery-ui.min.js', 'drawend', 'substring', '\x09\x09<a\x20\x20onclick=\x22_h_setFullScreen();\x22\x20href=\x22#\x22\x20title=\x22전체보기가\x20가능합니다.\x22\x20style=\x22float:\x20left;\x20width:\x20fit-content;\x20height:\x2010px;\x22>', '-LOCATION.txt', 'src', 'slice', '/TOP_X=', 'nOffsetY', '빠른\x20속도\x20처리를\x20위해\x20데이터\x20가공\x20중...(5/6)\x20', 'toLatLng', 'URL', '&nbsp;&nbsp;<a\x20onclick=\x22_h_onRemoveListForTOC(event)\x22><i\x20class=\x22fa\x20fa-close\x22\x20title=\x22레이어\x20삭제\x22\x20#style#></i></a>', '18px', 'close', '가중\x20값\x20미적용', 'parent', 'DIV', '빠른\x20속도\x20처리를\x20위해\x20데이터\x20가공\x20중...(1/6)\x20', 'msSaveBlob', 'ZOOM_START', 'indexOf', 'SEARCH_R=', 'top', 'layerLegend-overlay', 'height:256px;', 'text-align:center;', 'map', 'point', '<img\x20src=\x22https://www.policymap.or.kr/lib/SortableList/img/poly.png\x22\x20width=\x2220\x22>&nbsp;', 'setAttribute', 'getLng', '&CLASS=', 'setTitle', 'click', 'readyState', '&SIZE=', 'getLength', 'https://www.biz-gis.com/XRayMap_lib/img/dragForDrag.svg', 'contentWindow', 'span', 'weight', '&COLOR_REVERSE=', 'aLabel', 'fa\x20fa-chevron-down', '&STROKE_COLOR=', '\x09\x09</a>', 'getData', 'prepend', 'setRequestHeader', 'Layer\x20List', '<a\x20onclick=\x22_h_onFileSave(event)\x22><i\x20class=\x22fa\x20fa-save\x22\x20title=\x22파일\x20저장\x22\x20style=\x22color:\x20dimgrey;cursor:pointer;\x22></i></a>', '문화유적지', 'setOptions', 'MB_USER_NON_CLUSTERING', '빠른\x20속도\x20처리를\x20위해\x20데이터\x20가공\x20중...(4/6)\x20', 'removeClass', ',38.', 'RIGHT', 'REVERSE', 'LOW', 'beforeend', 'https://www.policymap.or.kr/lib/saveImage/canvas-toBlob.js', '#TOP_Y#', '#FFFFFF', '#SELECT#', 'stopTimer', '</div></div>', 'getNorthEast', '#POLY_WHERE#', 'ZOOMDataArray', 'show', '\x09<div\x20style=\x22color:\x20rgb(0,\x200,\x200);\x20text-align:\x20center;\x20font-size:\x2010px;\x20float:\x20left;\x22>', 'https://m.map.naver.com/map.naver?lat=', '변환\x20중...', ':checkbox', '빠른\x20속도\x20처리를\x20위해\x20데이터\x20가공\x20중...(2/6)\x20', '테두리:', 'parentNode', 'true', '<div\x20id=\x22', '<div\x20id=\x22sortable-div\x22\x20class=\x22col-sm-12\x20col-xs-12\x20col-md-9\x20addSub\x20unselectable\x22\x20style=\x22width:', 'hasOwnProperty', '&METHOD=11', 'mouseenter', 'atan2', '?TOP_Y=', 'animate', '&SEARCH_R=', 'METHOD=11', 'createElement', 'tagName', 'btn\x20btn-success', 'METHOD=', 'textContent', '&BOTTOM_Y=', '<link\x20rel=\x22stylesheet\x22\x20href=\x22https://www.policymap.or.kr/lib_xraymap/ex_lib/font/fontawesome/4.7.0/font-awesome.min.css\x22\x20/>', 'BLOCK', 'setVisible', 'innerText', 'msRequestFullscreen', 'style=\x22vertical-align:bottom;\x20color:#C5C7CB;\x20cursor:pointer;display:#VISI#;\x22', 'TYPE_GUBUN', 'Polyline', 'https://www.policymap.or.kr/heatmap_api/marker/svg2png_mms.php?TITLE=', 'sLegend', '23998380MsjfJe', 'COLOR_REVERSE=', '130.', 'rgba(0,0,0,0.5)', ',35.', 'rgba(0,0,0,1.0)', '&ICONH=', '#map', 'getOffset', 'offsetLeft', 'setDraggable', '&DB=XYZString', '<li\x20id=\x22', '?BOTTOM_X=', 'addEventListener', 'sClassValURL', 'open', 'splice', '284zIAAzx', 'Polygon', 'label', 'href', '&STROKE_WIDTH=', 'https://www.policymap.or.kr/lib/saveImage/html2canvas.min.js', 'charAt', 'sortable-selected-times-item', 'getMin', 'class', 'removeChild', 'forSortY', 'RGB(255,255,255)', '<label\x20class=\x22label-forLayerNM\x22\x20title=\x22', 'files', '#TOC_LIST\x20li', 'img[src=\x27', 'select', 'CLASS_CNT', '#,#', 'CNT', 'trim', 'getLat', 'setZIndex', 'script', 'TABLE=province_bizgis_dong', '#XY#', 'sUrl', 'https://www.policymap.or.kr/lib_xraymap/ex_lib/FileSaver/1.3.8/FileSaver.min.js', '<input\x20type=\x22checkbox\x22\x20onclick=\x22_h_onChangeCheckBoxForTOC();\x22\x20style=\x22margin:\x202px;\x20width:\x201.7rem;height:\x201.7rem;\x20vertical-align:\x20middle;\x22\x20checked/>', '#BDONG_SQL_FILE#', '_div\x22\x20style=\x22position:\x20absolute;\x20z-index:\x20', 'SELECT_LABEL', '#sortable-div\x20.sortable-list', 'childNodes', 'toUpperCase', 'clientHeight', 'addMarker', '레이어\x20파일을\x20불러오는\x20중입니다...<br><strong></strong>', '<link\x20rel=\x22stylesheet\x22\x20href=\x22https://www.policymap.or.kr/lib/Legend/Legend.css\x22\x20/>', 'aPointOrLineOrPolygon_Markers_ZOOM', 'px\x22>', 'CUSTOM_SQL_TAG=', ');\x22>', '/heatmap_api/od/data/', 'getPosition', '&STROKE_COLOR=rgba(100,100,100,1.0)&STROKE_WIDTH=2&', 'match', '#XYZString#', '\x09<div\x20style=\x22margin:\x200px\x204px;\x20float:\x20left;\x22>', 'circle', 'outerText', 'showLoading', 'https://www.policymap.or.kr/heatmap_api/marker/svg2png_30Col.php?GUBUN=marker_svg2&ICON=', 'nOffsetX', 'number', '레이어명', 'MB_SET_COLOR', 'width:256px;', '관광단지', 'replace', 'VAL2', 'LATLNG', '&COLOR=', '/heatmap_api/marker/', 'application/x-www-form-urlencoded', '삭제\x20후\x20열기', '0\x202px\x207px\x201px\x20rgba(0,0,0,.3)', 'polygon', 'LAT', '\x20,\x20', 'dismiss', 'offsetTop', '&nbsp;&nbsp;<i\x20class=\x22fa\x20fa-wrench\x22\x20title=\x22레이어\x20설정\x22\x20#style#></i>', '/TOP_Y=', 'getJSON', 'https://www.policymap.or.kr/heatmap_api/marker/svg2png_30Col.php?GUBUN=marker_svg2&ICON=_System_arrow-up-s-line&FILL_COLOR=rgba(253,%20245,%20255,1)&STROKE_COLOR=rgba(255,255,255,0.7)&STROKE_WIDTH=2&WIDTH=35&HEIGHT=35', '&H=', 'firstChild', '0\x200', '\x22\x20height=\x22', 'img', 'px\x20\x27', '</div>', 'setPosition', '&COLOR1=', 'coord', 'collapse', '<div\x20style=\x22text-align:right;padding-right:5px;opacity:0.7;\x22>', 'sLayerNM', 'getContent', '\x20BIZ\x20ERROR:\x20', '?DB=XYZString', 'edit', 'mouseup', 'DONE', '&CLASS_MODE=', '1436380cJZCkG', '색상:', '&BOTTOM_X=', 'user_copyClipboard_map.js', 'BUFFER_COORDS:', 'Marker', '&CNT=', '반경(미터\x20단위)\x20입력', 'Circle', '#collapse#', 'https://www.policymap.or.kr/heatmap_api/marker/svg_curve.php?', '#FF0000', '\x22\x20style=\x22float:\x20left;\x20width:\x20', '#_LAYER_OPEN_SAVE', '#TOP_X#', 'relative', 'mousedown', 'children', 'mixin', '&TEXTANCHOR=', '<input\x20id=\x22h_inputFileOpen\x22\x20type=\x22file\x22\x20accept=\x22.biz\x22\x20style=\x22display:none;\x22\x20onclick=\x22_h_openDataForClick(this)\x22\x20onchange=\x22_h_openDataForChange(this)\x22\x20/><a\x20onclick=\x22_h_onFileOpen()\x22><i\x20class=\x22fa\x20fa-folder-open\x22\x20title=\x22파일\x20열기\x22\x20style=\x22color:\x20dimgrey;cursor:pointer;\x22></i></a>', '#39f', 'LatLngBounds', 'setImage', 'MB_USER_SUMMARY_FOR_TOTAL_AND_SELECTED', '<ul\x20class=\x22dotOverlay_last\x20distanceInfo\x22>', '#ffffff', 'getY', 'redraw', '<div\x20style=\x22text-align:\x20right;padding-right:\x205px;\x22><i\x20onclick=\x22closeInfoWindow_NoPara()\x22\x20class=\x22fa\x20fa-times-circle\x22\x20aria-hidden=\x22true\x22></i></div>', 'SQL', 'block', '\x09\x09</div>', 'placeholder', '\x20\x20\x20\x20\x20\x20\x20\x20<a>닫기</a>', '/API_POST.php', 'Anonymous', 'opacity', 'setMinLevel', 'WIDTH=', 'z-index', 'dblclick', 'getMarkers', '</div><br>', 'canvas', 'replaceAll', 'cancel', 'VAL', '<br>중심까지거리(m):', 'SQL:', 'LEFT', 'maps', 'ERROR:', 'WHERE=', 'message', 'substr', 'result', '빠른\x20속도\x20처리를\x20위해\x20데이터\x20가공\x20중...(6/6)\x20', 'sCallUrl', '125.', '7px', '<div\x20style=\x22position:\x20absolute;\x20cursor:\x20default;\x20z-index:\x201;\x20margin:\x200px\x206px;\x20height:\x2019px;\x20line-height:\x2014px;\x20right:\x200px;\x20bottom:\x200px;\x20color:\x20rgb(0,\x200,\x200);\x22>', '\x20...\x20(이하\x20생략)', '#LAYER_FILE_VISI#', 'nLabelMaxZoom', 'drawing', 'px;top:33px;display:none;\x22><div\x20id=\x22dragdrop\x22\x20class=\x22col-sm-4\x20col-xs-4\x20col-md-4\x22\x20style=\x22width:\x20100%;\x22><div\x20class=\x22well\x20clearfix\x22><div\x20id=\x22div_TOC_Header\x22\x20class=\x22header\x22>#Layer\x20List#</div>', 'VIEW_URL:', '#000000', '\x22\x20width=\x22', '&TOP_X=#TOP_X#', 'MB_USER_AREA', 'onEventForChangeTempShape_ByHeatmapLib', '&X=', 'No\x20Value', 'svg', 'NO\x20Data', 'mouseleave', '#APPEND#', 'BADGE', '<link\x20rel=\x22stylesheet\x22\x20href=\x22https://www.policymap.or.kr/lib/common.css\x22\x20/>', '6b9d9b', '#ETC#|SLIDER^', ';\x20white-space:\x20nowrap;\x20opacity:\x20', '&FONT=', 'now', 'STROKE_COLOR=rgba(0,0,0,1.0)', '_label_png', 'clientY', '/H=', 'img[src*=\x22marker/svg2png_30Col.php\x22]', '정보\x20가져오기', '가중\x20값을\x20적용할\x20필드를\x20선택하세요', '#_LAYER_CHECK_UNCHECK', '&BOTTOM_Y=#BOTTOM_Y#', 'preventDefault', '<link\x20rel=\x22stylesheet\x22\x20href=\x22https://www.policymap.or.kr/lib_xraymap/ex_lib/bootstrap/3.3.0/bootstrap.min.css\x22\x20/>', '\x0a,\x0a', 'POST', '<div\x20style=\x22padding:0px\x202px\x202px\x202px;\x20', 'div\x20[style*=\x22width:\x207px;\x20height:\x207px;\x22]', 'DOMContentLoaded', 'EF5A2A', '<img\x20src=\x22https://www.policymap.or.kr/heatmap_api/marker/svg_label.php?GUBUN=marker_svg2&ICON=_label&LABEL=', 'dashed', 'sortable-selected-item', 'detach', '\x20\x20\x20\x20<li\x20class=\x22detailToolArrow\x22>', 'join', 'https://www.policymap.or.kr/lib/MProgress/build/js/mprogress.min.js', '&locations=', ',36.', '_HM_GetMapImageBase64String', '(보간)', '<a\x20onclick=\x22_h_uncheckAllLayerFromTOC()\x22><i\x20class=\x22fa\x20fa-square-o\x22\x20title=\x22전체\x20선택\x20해제\x22\x20style=\x22color:\x20dimgrey;cursor:pointer;\x22></i></a>', '{\x22point\x22:[', '<br>', 'setOpacity', 'lastIndexOf', 'sDataString᛫string᛫', 'abs', 'setZoomable', 'points', '<div\x20style=\x22padding:5px;\x20', 'left', 'sort', '지도에\x20추가\x20중...', '\x09\x09\x09<i\x20class=\x22fa\x20fa-object-ungroup\x22></i>', 'WHERE', 'VAL3', '?W=', 'ZOOM', 'sortable', 'test', '.php?', 'floor', 'HIGH', 'TITLE', '#LAYER_CHECKALL_RIGHT#', 'toFixed', '\x20\x20\x20\x20</li>', '\x09\x09<img\x20src=\x22https://www.policymap.or.kr/heatmap_api/marker/svg_label.php?GUBUN=marker_svg2&ICON=_label&LABEL=', 'status', 'MB_USER_CLUSTERING', '2863kQSRQd', '<img\x20src=\x22', 'fAlpha᛫number᛫', ';\x22>', '#6c6c6c', 'resumeTimer', '<div\x20class=\x22section_zone\x22><div\x20class=\x22box_frame\x22>', '{\x22content\x22:\x22\x22,\x20\x22label\x22:\x22\x22,\x20\x22weight\x22:1,\x20\x22location\x22:\x20[#XY#]}', 'appendChild', 'COLOR_RAMP', 'VAL1', 'dX:', '<link\x20rel=\x22stylesheet\x22\x20href=\x22https://www.policymap.or.kr/lib_xraymap/ex_lib/sweetalert2/dark.css\x22\x20/>', 'border-radius', 'insertAdjacentHTML', 'download', 'DismissReason', '<img\x20src=\x22https://www.policymap.or.kr/lib/SortableList/img/line.png\x22\x20width=\x2220\x22>&nbsp;', 'div', '<img\x20src=\x22https://www.policymap.or.kr/lib/SortableList/img/density_mms.png\x22\x20width=\x2220\x22>&nbsp;', 'user_public_mms', 'layerLegend-overlay-ForDensity', '<link\x20rel=\x22stylesheet\x22\x20href=\x22https://www.policymap.or.kr/lib/SortableList/sortable.css\x22\x20/>', 'nBuffer', 'getContext', 'refresh', 'distance', 'LNG', '_markers', 'imageSize', 'aOverlay_ZOOM', '3CADF1', 'removeListener', '&STROKE_COLOR=rgba(255,255,255,1.0)&STROKE_WIDTH=2&', '\x20font-size:\x20', 'backgroundColor', '[\x5c?&]', '&W=', 'aPointOrLineOrPolygon', '</span></div>', '&COLOR_RAMP=', '&HEIGHT=', 'webkitRequestFullscreen', '빠른\x20속도\x20처리를\x20위해\x20데이터\x20가공\x20중...(3/6)\x20', 'hidden', '\x09\x09<img\x20src=\x22https://www.policymap.or.kr/heatmap_api/marker/svg_label.php?GUBUN=marker_svg2&ICON=_label&LABEL=%EB%B9%84%EC%A6%88&FILL_COLOR=rgba(242,118,125,0.8)&STROKE_COLOR=rgba(255,255,255,0.8)&STROKE_WIDTH=2&SIZE=12\x22\x20alt=\x22주식회사\x20비즈GIS\x20지도\x20엔진으로\x20작성되었습니다.\x22\x20style=\x22float:\x20left;\x20width:\x2024px;\x20height:\x2016px;\x20border:\x20none;\x22>', 'position', 'DrawingManager', '</span>분', 'sDataString', 'keys', 'Layers.biz', '#F00', 'line-height', '\x22\x20class=\x22sortable-item\x22>', '78415bzabAj', 'addClass', '\x20BIZ\x20NO\x20DATA:\x20', 'styleSheets', '</ul>', '128.', 'split', 'onEventForTempCircleDragSync_ByHeatmapLib', 'imageSrc', '1aa45f', 'start', 'mouseout', 'grayscale(90%)', '<div\x20id=\x22LegendTitleForMobile\x22\x20onclick=\x22div_MobileLegentExtent()\x22\x20style=\x22background-color:\x20black;\x20width:\x20100px;\x20border-top-left-radius:\x205px;\x20border-top-right-radius:\x205px;\x20margin-left:\x205px;\x20padding-top:\x204px;\x22><table\x20border=\x220\x22\x20width=\x22100%\x22><tbody><tr\x20align=\x22center\x22><td\x20id=\x22lgnTitleBtn\x22\x20align=\x22right\x22><img\x20id=\x22btnMin\x22\x20width=\x2218\x22\x20height=\x2218\x22\x20src=\x22https://www.policymap.or.kr/heatmap_api/marker/svg2png_30Col.php?GUBUN=marker_svg2&ICON=_System_arrow-down-s-line&FILL_COLOR=rgba(253,%20245,%20255,1)&STROKE_COLOR=rgba(255,255,255,0.7)&STROKE_WIDTH=2&WIDTH=35&HEIGHT=35\x22></td><td\x20id=\x22lgnTitleLab\x22\x20align=\x22left\x22\x20style=\x22color:\x20white;font-size:\x2011px;width:\x2070px;\x22>ㅤ범\x20례</td></tr></tbody></table></div>', '/Flow2.txt', '//www.policymap.or.kr/_next/server/pages/from-url.html?ID=', 'load', '폴리곤\x20정보\x20취득에\x20실패하였습니다.', 'onmousedown', 'error', '-FLOW.txt', 'siblings', 'clear', '</span>시간\x20', 'unshift', 'STROKE_WIDTH=', '8CC63C', '<img\x20src=\x22https://www.policymap.or.kr/lib/SortableList/img/density.png\x22\x20width=\x2220\x22>&nbsp;', 'sPointSymbolType', '#BOTTOM_X#', 'loaded', 'MB_USER_TABLE_FOR_SELECTED_DETAIL', '<div\x20id=\x22div_TOC_LIST\x22\x20class=\x22dragbleList\x22><ul\x20id=\x22TOC_LIST\x22\x20class=\x22sortable-list\x22></ul></div></div></div></div>', 'exec', 'getRadius', 'innerHTML', '@REVERSE@', 'then', 'onEventForChangeTempCircle_ByHeatmapLib', '\x20\x20\x20\x20<li\x20class=\x22detailToolClose\x22\x20onclick=\x22H_map_distance_measurement_removeLineByEvent(', 'div_map', 'METHOD=1', 'innerWidth', 'ZOOM_END', 'shortdash', '10px', 'user_mouseMenu_20231212.js', 'display', '/svg_30Col_animation.php?', 'Fatal\x20error', 'rightclick', '#Layer\x20List#', '\x22\x20width=\x2216\x22>&nbsp;', 'text/plain', '9ec0bb', 'sPointSymbolColor', 'getElementsByTagName', 'data', '#INNER#', '<span\x20onclick=\x22javascript:sendNaverMap(', '?BOTTOM_Y=', 'getWaterMarkStringFromSession.php', ';\x20width:', '#CD#', 'getOverlays', 'viewBox', 'closest', 'GET', '1586262mVLhfu', '<a\x20onclick=\x22_h_removeAllLayerFromTOCByTOCClick()\x22><i\x20class=\x22fa\x20fa-trash-o\x22\x20title=\x22전체\x20삭제\x22\x20style=\x22color:\x20dimgrey;cursor:pointer;\x22></i></a>', 'type', 'zIndex', '가중\x20값을\x20선택하세요', '\x09\x09<div\x20style=\x22float:\x20left;\x20margin:\x200px\x204px\x200px\x200px;\x20font-family:\x20\x22NEXON\x20Lv1\x20Gothic\x20OTF\x20Light\x22,\x20AppleSDGothicNeo-Regular,\x20돋움,\x20dotum,\x20sans-serif;\x20font-weight:\x20bold;\x20color:\x20rgb(0,\x200,\x200);\x22>', '포인트를\x20변환\x20중입니다...<br><strong></strong>', 'MARK', '파일\x20불러오기', 'getCenter', 'https://www.policymap.or.kr/lib/jquery-contextmenu/2.9.2/jquery.contextMenu.min.js', 'set', 'center-start', 'setPath', '유지한채\x20추가', 'title', 'DRAG_END', 'panTo', 'kakao', '3384D6', 'NULL', '#LAYER_CHECKALL_RIGHT_DISPALY#', '&TOP_X=', 'info', 'addMarkers', 'https://www.policymap.or.kr/heatmap_api/marker/svg2png_label.php?GUBUN=marker_svg2&ICON=', 'sans-serif', 'box-shadow', 'CUSTOM_SQL_TAG', '#|#NO\x20DATA||0', '#VISI#', 'img[src*=\x22heatmap_api/image/\x22]', '?TOP_X=', 'subject', '레이어\x20정보를\x20불러오는\x20중입니다...<br><strong></strong>', 'EC1C24', 'CLASS_CUSTOM_ARRAY', '5ccd92', 'naver', 'dash', 'getImage', 'visibility', 'aBufferCircle', '#btnMin', 'content', '0.0', '크기:', '\x22\x20src=\x22', 'TOC_LIST', 'poly', '<span\x20class=\x22number\x22>', 'Size', 'onreadystatechange', ',33.', 'METHOD=11&', 'postMessage', '(ONE_CALL)', 'sPointSymbolColor᛫string᛫', 'oExtent', '<div\x20class=\x22dotOverlay\x22>거리\x20<span\x20class=\x22number\x22>', 'getZIndex', 'cos', '<link\x20rel=\x22stylesheet\x22\x20href=\x22https://www.policymap.or.kr/lib/MProgress/build/css/mprogress.min.css\x22\x20/>', 'clone', '/BOTTOM_Y=', 'getElementById', '?H=', 'readAsText', '#000', 'val', 'parentElement', '&lng=', 'value', 'setCenter', '[id^=\x27daum-maps-shape-\x27]', 'sin', ');\x22\x20style=\x22position:absolute;left:96px;background-color:#FAE100;color:#371D1E;border-radius:5px;top:2px;font-size:small;font-weight:bold;\x22>&nbsp;&nbsp;Kakao\x20Map&nbsp;&nbsp;</span>', '파일에\x20문제가\x20있습니다.', 'none', '\x09</div>', 'dragend', 'nLabelMinZoom', 'responseText', '%2b', '&LABEL=', 'addListener', 'dragstart', 'each', '\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22label\x22>자전거</span>', '#ETC#', '</div><div\x20class=\x22box_frame\x22>', 'SELECT=', 'InfoWindow', 'height', 'hide', 'bf33ff', '1.0', 'UID', '<div\x20style=\x22border:1px\x20dashed\x20#ccc;padding:2px;margin-top:2px;\x20width:320px;\x20height:180px;\x20overflow:hidden;\x22>', 'onEventForTempShapeEndSync_ByHeatmapLib', 'center-end', 'mouseover', 'https://www.policymap.or.kr/lib/img/nodataDensity.png', 'https://www.policymap.or.kr/lib_xraymap/ex_lib/sweetalert2/sweetalert2.min.js', 'onclick', '5EADFF', 'c9a27e', '#inner#', 'beforeEnd', '#|#', 'btn\x20btn-danger', ':svg_animation_apply', 'innerHeight', '25px', '_h_onChangeCheckBoxForTOC\x20Error!', 'offsetWidth', 'visible', 'which', 'div_TOC_Header', 'Heatmap\x20서버와의\x20통신에\x20실패하였습니다.\x0a(주된\x20원인:\x20광고차단기능\x20및\x20인트라넷\x20설정\x20등)', 'POLY_CONTENT', 'CLASS_CUSTOM_ARRAY=', 'RGB(0,0,0)', '25068hoKZQx', 'equals', '#W#', 'width:\x20256px;', 'timeStamp', '_blank\x20', 'MODE', 'send', 'FIRE_NO', 'setContent', 'css', '<link\x20rel=\x22stylesheet\x22\x20href=\x22https://www.policymap.or.kr/lib/jquery-contextmenu/2.9.2/jquery.contextMenu.min.css\x22\x20/>', 'aaaaaa', '&BOTTOM_X=#BOTTOM_X#', 'append', '반경을\x20입력하세요.', 'warning', '||rgba(0,0,0,0.0)', 'MarkerImage', 'strong', 'GroundOverlay', '#TOC_LIST', 'dY:', '=([^&#]*)', 'sLABEL_CONTORL', 'HM_onBoundsChangeForHM\x20함수는\x20라이브러리에서\x20호출하는\x20것으로\x20변경되었습니다.\x20소스\x20코드를\x20수정하세요.', 'function', 'nAuto', 'complete', 'push', 'Point', 'crossOrigin', '_TMP_aJsonArray', 'px;max-height:132px;\x20overflow-y:auto;\x22>', 'toCoords', '<span\x20onclick=\x22javascript:sendKakaoMap(', '&H=#H#', 'right', 'getBounds', 'sortupdate', 'getPath', 'height:\x20256px;', 'IDX', '#h_inputFileOpen', '#LAYER_NM#', 'middle', '2501937lTErse', '8SbMuLG', 'STROKE_COLOR=', 'aPointOrLineOrPolygon_Labels_ZOOM', '<div', 'srcElement', 'http', '#BOTTOM_Y#', 'CustomOverlay', '가로정렬:', '85px', '#SIZE_STRING#', 'round', 'checked', '</b>\x20:\x20', 'POINTSYMBOL_TYPE', '5322213PMjTfG', 'max', 'https://www.policymap.or.kr/heatmap_api/marker/svg2png_30Col.php?GUBUN=marker_svg2&ICON=_Communication_chat-download-fill&FILL_COLOR=rgba(255,%20115,%2016,0.9)&STROKE_COLOR=rgba(255,255,255,0.7)&STROKE_WIDTH=2&WIDTH=25&HEIGHT=25', '/BOTTOM_X=', 'end', 'API_POST.php?', '&SELECT=', 'draw', '&WHERE=', 'ICONW=', '\x27\x20style=\x27width:1280px;\x20height:720px;\x20-ms-zoom:\x200.25;-moz-transform:\x20scale(0.25);-moz-transform-origin:\x200\x200;-o-transform:\x20scale(0.25);-o-transform-origin:\x200\x200;-webkit-transform:\x20scale(0.25);-webkit-transform-origin:\x200\x200;transform:\x20scale(0.25);transform-origin:\x200\x200;\x09border:1px\x20solid\x20#ccc;top:0px;left:0px;\x27></iframe>', ';\x22><iframe\x20id=\x22', '#sortable-div', '#H#', 'CLASS_CNT=', '<div\x20class=\x22collapse\x22><div\x20id=\x22', '&CLASS_CUSTOM_ARRAY=', 'parse', '현재\x20분석된\x20레이어를\x20어떻게\x20처리하시겠습니까?', '\x22NEXON\x20Lv1\x20Gothic\x20OTF\x20Light\x22', '&WIDTH=', 'offset', '#CTY_SQL_FILE_OR_DONG_SQL_FILE#', 'location', 'width', 'province_bizgis_bdong', 'clientWidth', '129.', 'DB=XYZString&TABLE=#XYZString#', '#WHERE#', '126.', 'top-end', ':CLICK_FIRE', 'childElementCount', '9900e6', '34px', 'empty', 'pOriMarker', 'setLevel', '&FILL_COLOR=', 'rgba(255,255,255,0.9)', 'solid', '#75B8FA', 'CLICK_FIRE_ID^', 'fAlpha', 'className', 'timer', 'pointer-events', 'province_bizgis_cty', '&CLASS_MODE=3&CLASS_CNT=15&COLOR_RAMP=RdYlGn&COLOR_REVERSE=FALSE&SEARCH_R=3&EXTENT_PRJ=3', 'setBounds', '#db4040', 'parseJSON', '<link\x20rel=\x22stylesheet\x22\x20href=\x22user_map_distance_measurement.css\x22\x20/>', 'MESSAGE', 'filter', 'MB_USER_SUMMARY_FOR_SELECTED', 'POLYGON', 'MarkerClusterer', '#divWaterMark', '\x09\x09<div\x20style=\x22font:\x2011px\x20/\x2011px\x20Arial,\x20Tahoma,\x20Dotum,\x20sans-serif;\x20float:\x20left;\x22>', 'proxy/proxy.php?url=', 'reverse', 'latLng', '선택한\x20필드에\x20숫자\x20이외의\x20값이\x20존재합니다.', '&flows=', 'undefined', ',34.', 'getMap', 'options', '&CUSTOM_SQL_TAG=', '&METHOD=11&', 'event', '_div', 'div[style*=\x22z-index:\x209876543\x22]'];
    _0x5b6f = function() {
        return _0x530078;
    };
    return _0x5b6f();
}

function HM_getLayersTYPE() {
    const _0xd878a4 = _0x3a1a23;
    if (h_oaLayer == null) return null;
    let _0x4eac26 = h_oaLayer[_0xd878a4(0x363)],
        _0x3cc964 = new Array();
    for (let _0x2ce92c = 0x0; _0x2ce92c < _0x4eac26; _0x2ce92c++) {
        h_oaLayer[_0x2ce92c] != null && _0x3cc964[_0xd878a4(0x29a)](h_oaLayer[_0x2ce92c]['nType']);
    }
    return _0x3cc964;
}

function HM_getPointLayersNM() {
    const _0x2148bc = _0x3a1a23;
    if (h_oaLayer == null) return null;
    let _0x4b870c = h_oaLayer[_0x2148bc(0x363)],
        _0x4bce3a = new Array();
    for (let _0x14b99f = 0x0; _0x14b99f < _0x4b870c; _0x14b99f++) {
        if (h_oaLayer[_0x14b99f] != null) {
            if (h_oaLayer[_0x14b99f]['nType'] == 0x5) _0x4bce3a[_0x2148bc(0x29a)](h_oaLayer[_0x14b99f][_0x2148bc(0xef)]);
        }
    }
    return _0x4bce3a;
}

function HM_getPointOrODLayersNM() {
    const _0x5350b2 = _0x3a1a23;
    if (h_oaLayer == null) return null;
    let _0x55f206 = h_oaLayer[_0x5350b2(0x363)],
        _0x4ba3c3 = new Array();
    for (let _0x314aa5 = 0x0; _0x314aa5 < _0x55f206; _0x314aa5++) {
        if (h_oaLayer[_0x314aa5] != null) {
            if (h_oaLayer[_0x314aa5][_0x5350b2(0x350)] == 0x5 || h_oaLayer[_0x314aa5][_0x5350b2(0x350)] == 0x2e || h_oaLayer[_0x314aa5]['nType'] == 0x2f) _0x4ba3c3['push'](h_oaLayer[_0x314aa5][_0x5350b2(0xef)]);
        }
    }
    return _0x4ba3c3;
}

function HM_getPointOrDenInterOrODLayersNM() {
    const _0x2bc436 = _0x3a1a23;
    if (h_oaLayer == null) return null;
    let _0xa6c917 = h_oaLayer[_0x2bc436(0x363)],
        _0x279dda = new Array();
    for (let _0x2f7fd7 = 0x0; _0x2f7fd7 < _0xa6c917; _0x2f7fd7++) {
        if (h_oaLayer[_0x2f7fd7] != null) {
            if (h_oaLayer[_0x2f7fd7][_0x2bc436(0x350)] == 0x5 || h_oaLayer[_0x2f7fd7][_0x2bc436(0x350)] == 0x2e || h_oaLayer[_0x2f7fd7][_0x2bc436(0x350)] == 0x2f) _0x279dda[_0x2bc436(0x29a)](h_oaLayer[_0x2f7fd7][_0x2bc436(0xef)]);
            else {
                if (h_oaLayer[_0x2f7fd7][_0x2bc436(0x350)] == 0x1 || h_oaLayer[_0x2f7fd7][_0x2bc436(0x350)] == 0x2) {
                    if (_h_checkMMSDen(h_oaLayer[_0x2f7fd7]) == !![] || _h_checkGeocodingDen(h_oaLayer[_0x2f7fd7]) == !![]) _0x279dda['push'](h_oaLayer[_0x2f7fd7][_0x2bc436(0xef)]);
                }
            }
        }
    }
    return _0x279dda;
}

function HM_getPointOrDenInterOrODLayersType() {
    const _0x920330 = _0x3a1a23;
    if (h_oaLayer == null) return null;
    let _0xa6ebe = h_oaLayer['length'],
        _0x125dd5 = new Array();
    for (let _0x10b446 = 0x0; _0x10b446 < _0xa6ebe; _0x10b446++) {
        if (h_oaLayer[_0x10b446] != null) {
            if (h_oaLayer[_0x10b446][_0x920330(0x350)] == 0x5 || h_oaLayer[_0x10b446][_0x920330(0x350)] == 0x2e || h_oaLayer[_0x10b446][_0x920330(0x350)] == 0x2f) _0x125dd5[_0x920330(0x29a)](h_oaLayer[_0x10b446][_0x920330(0x350)]);
            else {
                if (h_oaLayer[_0x10b446][_0x920330(0x350)] == 0x1 || h_oaLayer[_0x10b446]['nType'] == 0x2) {
                    if (_h_checkMMSDen(h_oaLayer[_0x10b446]) == !![] || _h_checkGeocodingDen(h_oaLayer[_0x10b446]) == !![]) _0x125dd5['push'](h_oaLayer[_0x10b446][_0x920330(0x350)]);
                }
            }
        }
    }
    return _0x125dd5;
}

function HM_getPointLayerCount() {
    const _0xfb9a4e = _0x3a1a23;
    if (h_oaLayer == null) return 0x0;
    let _0x1ddb04 = 0x0,
        _0x190be2 = new Array();
    for (let _0x225301 = 0x0; _0x225301 < h_oaLayer[_0xfb9a4e(0x363)]; _0x225301++) {
        if (h_oaLayer[_0x225301] != null) {
            if (h_oaLayer[_0x225301]['nType'] == 0x5) _0x1ddb04++;
        }
    }
    return _0x1ddb04;
}

function HM_getLayers() {
    return h_oaLayer;
}

function _h_getHM_ByID(_0x49b4b8) {
    const _0x20ec45 = _0x3a1a23;
    var _0x166ed3 = h_oaLayer['length'];
    for (var _0x245311 = 0x0; _0x245311 < _0x166ed3; _0x245311++) {
        if (h_oaLayer[_0x245311] != null) {
            if (h_oaLayer[_0x245311][_0x20ec45(0x263)] == _0x49b4b8) return h_oaLayer[_0x245311];
        }
    }
    return null;
}

function _h_removeInfowindow() {
    const _0xf0e7dc = _0x3a1a23;
    if (h_oInfowindowForPoly_Line != null) h_oInfowindowForPoly_Line['getMap']() != null && (h_oInfowindowForPoly_Line[_0xf0e7dc(0x328)](null), h_oPolyPreSelectPolygon != null && (h_oPolyPreSelectPolygon[_0xf0e7dc(0x39d)]({
        'strokeWeight': h_nPolyStrokeWeight
    }), h_oPolyPreSelectPolygon[_0xf0e7dc(0x39d)]({
        'strokeColor': h_sPolyStrokeColor
    })));
}

function HM_removeHeatMapNoReleaseMemory(_0x5b953e) {
    const _0x2cb9f9 = _0x3a1a23;
    if (_0x5b953e[_0x2cb9f9(0x350)] == 0x1 || _0x5b953e['nType'] == 0x2) _0x5b953e[_0x2cb9f9(0x348)] != null && (_0x5b953e['heatmapOverlay'][_0x2cb9f9(0x328)](null), h_bNaver == !![] && _h_removeHeatMapImgFromDivForNaver(_0x5b953e[_0x2cb9f9(0x1e6)], _0x5b953e['heatmapOverlay']['url']));
    else {
        if (_0x5b953e[_0x2cb9f9(0x350)] == 0x3) {
            let _0x160081 = _0x5b953e[_0x2cb9f9(0x1ad)][_0x2cb9f9(0x363)];
            for (let _0x718bf0 = 0x0; _0x718bf0 < _0x160081; _0x718bf0++) _0x5b953e['aPointOrLineOrPolygon'][_0x718bf0]['poly'][_0x2cb9f9(0x328)](null);
            _0x5b953e[_0x2cb9f9(0x393)] != null && (_0x5b953e[_0x2cb9f9(0x393)][_0x2cb9f9(0x1d4)](), _0x5b953e['aLabel']['setMap'](null), _0x5b953e['aLabel']['redraw']());
        } else {
            if (_0x5b953e[_0x2cb9f9(0x350)] == 0x5) {
                _0x5b953e['aPointOrLineOrPolygon'] != null && (_0x5b953e[_0x2cb9f9(0x1ad)][_0x2cb9f9(0x1d4)](), _0x5b953e['aPointOrLineOrPolygon'][_0x2cb9f9(0x328)](null), _0x5b953e['aPointOrLineOrPolygon'][_0x2cb9f9(0x113)](), _0x5b953e[_0x2cb9f9(0x1ad)] = null);
                if (_0x5b953e[_0x2cb9f9(0xbe)] != null) {
                    for (let _0x2f6514 = 0x2; _0x2f6514 <= 0xc; _0x2f6514++) {
                        let _0x25fe59 = _0x5b953e[_0x2cb9f9(0xbe)][_0x2f6514];
                        for (let _0x2f6a3c = 0x0; _0x2f6a3c < _0x25fe59[_0x2cb9f9(0x363)]; _0x2f6a3c++) {
                            kakao[_0x2cb9f9(0x12a)][_0x2cb9f9(0x303)][_0x2cb9f9(0x1a7)](_0x25fe59[_0x2f6a3c], _0x2cb9f9(0x267), onMarkerMouseOverListener), kakao[_0x2cb9f9(0x12a)][_0x2cb9f9(0x303)][_0x2cb9f9(0x1a7)](_0x25fe59[_0x2f6a3c], _0x2cb9f9(0x1c9), onMarkerMouseOutListener);
                        }
                        _0x25fe59 = null, _0x5b953e['aPointOrLineOrPolygon_Markers_ZOOM'][_0x2f6514] = null;
                    }
                    _0x5b953e[_0x2cb9f9(0xbe)] = null;
                }
                _0x5b953e['aPointOrLineOrPolygon_Labels_ZOOM'] != null && (_0x5b953e[_0x2cb9f9(0x393)][_0x2cb9f9(0x1d4)](), _0x5b953e[_0x2cb9f9(0x393)][_0x2cb9f9(0x328)](null), _0x5b953e[_0x2cb9f9(0xbe)] = null), _h_RemoveOnlyBufferOnPoint(_0x5b953e);
            }
        }
    }
    _0x5b953e = null, _h_removeInfowindow();
}

function _h_removeHeatMapImgFromDivForNaver(_0x1ac73b, _0x164929) {
    const _0x26ba59 = _0x3a1a23;
    let _0xc6953a = $(_0x26ba59(0xa6) + _0x164929 + '\x27]');
    if (_0xc6953a != null) _0xc6953a[_0x26ba59(0x363)] > 0x0 && (_0xc6953a[0x0][_0x26ba59(0x36d)] == _0x164929 && ($oDiv = _0xc6953a[0x0][_0x26ba59(0x248)], $oDiv[_0x26ba59(0x3b6)][_0x26ba59(0x3ee)]($oDiv), $oDiv = null));
    _0xc6953a = null;
}

function _h_ReorderZindexLayerForNaver() {
    const _0x374388 = _0x3a1a23;
    if (h_bNaver == ![]) return;
    if (h_oaLayer == null) return;
    let _0x30fda9 = h_oaLayer['length'];
    for (let _0x5a6e7c = _0x30fda9 - 0x1; _0x5a6e7c >= 0x0; _0x5a6e7c--) {
        if (h_oaLayer[_0x5a6e7c] != null) {
            let _0x4b5569 = $(_0x374388(0xa6) + h_oaLayer[_0x5a6e7c][_0x374388(0xb1)] + '\x27]');
            if (_0x4b5569 != null) _0x4b5569[_0x374388(0x363)] > 0x0 && (_0x4b5569[0x0][_0x374388(0x36d)] == h_oaLayer[_0x5a6e7c][_0x374388(0xb1)] && ($oDiv = _0x4b5569[0x0]['parentElement'], $oDivParent = $oDiv[_0x374388(0x3b6)], $oDivParent[_0x374388(0x3ee)]($oDiv), $oDivParent[_0x374388(0x18f)]($oDiv), $oDivParent = null, $oDiv = null));
            _0x4b5569 = null;
        }
    }
}

function HM_removeHeatMap(_0x16a6f7) {
    const _0x2d4c92 = _0x3a1a23;
    if (_0x16a6f7[_0x2d4c92(0x350)] == 0x1 || _0x16a6f7[_0x2d4c92(0x350)] == 0x2) {
        if (_0x16a6f7[_0x2d4c92(0x348)] != null) _0x16a6f7[_0x2d4c92(0x348)][_0x2d4c92(0x328)](null);
    } else {
        if (_0x16a6f7[_0x2d4c92(0x350)] == 0x3) {
            if (_0x16a6f7[_0x2d4c92(0x1ad)] != null) {
                let _0x40a1d1 = _0x16a6f7[_0x2d4c92(0x1ad)][_0x2d4c92(0x363)];
                for (let _0x466955 = 0x0; _0x466955 < _0x40a1d1; _0x466955++) _0x16a6f7[_0x2d4c92(0x1ad)][_0x466955]['poly'][_0x2d4c92(0x328)](null);
            }
            _0x16a6f7['aLabel'] != null && (_0x16a6f7[_0x2d4c92(0x393)][_0x2d4c92(0x1d4)](), _0x16a6f7['aLabel'][_0x2d4c92(0x328)](null), _0x16a6f7[_0x2d4c92(0x393)]['redraw']());
        } else {
            if (_0x16a6f7[_0x2d4c92(0x350)] == 0x2e || _0x16a6f7[_0x2d4c92(0x350)] == 0x2f) _0x16a6f7[_0x2d4c92(0x1ad)] != null && _h_mb_removeODLayer(_0x16a6f7['UID'], _0x16a6f7[_0x2d4c92(0x1ad)]);
            else {
                if (_0x16a6f7['nType'] == 0x5) {
                    if (_0x16a6f7[_0x2d4c92(0x1ad)] != null) {
                        let _0x317518 = _0x16a6f7[_0x2d4c92(0x1ad)][_0x2d4c92(0x1a3)];
                        _0x16a6f7[_0x2d4c92(0x1ad)]['clear'](), _0x16a6f7[_0x2d4c92(0x1ad)][_0x2d4c92(0x328)](null), _0x16a6f7[_0x2d4c92(0x1ad)]['redraw'](), _0x16a6f7[_0x2d4c92(0x1ad)] = null, _0x317518 = null, _h_RemoveBufferOnPoint(_0x16a6f7);
                    }
                    if (_0x16a6f7[_0x2d4c92(0xbe)] != null) {
                        for (let _0x554709 = 0x2; _0x554709 <= 0xc; _0x554709++) {
                            let _0x55a52c = _0x16a6f7[_0x2d4c92(0xbe)][_0x554709];
                            for (let _0x17f3db = 0x0; _0x17f3db < _0x55a52c[_0x2d4c92(0x363)]; _0x17f3db++) {
                                kakao['maps'][_0x2d4c92(0x303)][_0x2d4c92(0x1a7)](_0x55a52c[_0x17f3db], 'mouseover', onMarkerMouseOverListener), kakao[_0x2d4c92(0x12a)]['event'][_0x2d4c92(0x1a7)](_0x55a52c[_0x17f3db], _0x2d4c92(0x1c9), onMarkerMouseOutListener);
                            }
                            _0x55a52c = null;
                        }
                        _0x16a6f7['aPointOrLineOrPolygon_Markers_ZOOM'] = null;
                    }
                    _0x16a6f7[_0x2d4c92(0x2ae)] != null && (_0x16a6f7[_0x2d4c92(0x393)]['clear'](), _0x16a6f7['aLabel'][_0x2d4c92(0x328)](null), _0x16a6f7[_0x2d4c92(0xbe)] = null);
                }
            }
        }
    }
    __sendMessage_RemoveRayer_From_HeatmapLib(_0x16a6f7[_0x2d4c92(0xef)], _0x16a6f7[_0x2d4c92(0x350)], _0x16a6f7[_0x2d4c92(0x310)]), _h_removeLayerFromArray(_0x16a6f7), _h_releaseMemory(_0x16a6f7), _h_removeInfowindow(), _0x16a6f7 = null;
}

function _h_releaseMemory(_0x22b21a) {
    const _0x54945b = _0x3a1a23;
    _0x22b21a[_0x54945b(0x383)] = null, _0x22b21a[_0x54945b(0xb1)] = null, _0x22b21a[_0x54945b(0x131)] = null, _0x22b21a[_0x54945b(0x3d1)] = null, _0x22b21a[_0x54945b(0x23c)] = null, _0x22b21a['div_map'] = null, _0x22b21a[_0x54945b(0x348)] = null, _0x22b21a[_0x54945b(0x1da)] = null, _0x22b21a[_0x54945b(0x1f5)] = null, _0x22b21a[_0x54945b(0x1ad)] = null, _0x22b21a[_0x54945b(0x393)] = null, _0x22b21a[_0x54945b(0xef)] = null, _0x22b21a[_0x54945b(0x1b8)] = null;
    if (typeof _0x22b21a[_0x54945b(0xbe)] != _0x54945b(0x2fd)) _0x22b21a['aPointOrLineOrPolygon_Markers_ZOOM'] = null;
    if (typeof _0x22b21a['aOverlay_ZOOM'] != _0x54945b(0x2fd)) _0x22b21a[_0x54945b(0x1a5)] = null;
    if (typeof _0x22b21a[_0x54945b(0x2ae)] != _0x54945b(0x2fd)) _0x22b21a[_0x54945b(0x2ae)] = null;
    if (typeof _0x22b21a[_0x54945b(0x22c)] != _0x54945b(0x2fd)) _0x22b21a[_0x54945b(0x22c)] = null;
    _0x22b21a = null;
}

function _h_removeLayerFromArray(_0x29b6b9) {
    const _0x4e9c98 = _0x3a1a23;
    if (h_oaLayer == null) return;
    let _0x15b8d7 = h_oaLayer[_0x4e9c98(0x363)];
    for (let _0x1cd4b1 = 0x0; _0x1cd4b1 < _0x15b8d7; _0x1cd4b1++) {
        if (h_oaLayer[_0x1cd4b1] == _0x29b6b9) {
            h_oaLayer[_0x4e9c98(0x3e3)](_0x1cd4b1, 0x1);
            break;
        }
    }
}

function _h_removeAllLayer() {
    const _0x5ae406 = _0x3a1a23;
    if (h_oaLayer == null) return;
    let _0x2b3593 = h_oaLayer[_0x5ae406(0x363)];
    for (let _0x135ada = _0x2b3593 - 0x1; _0x135ada >= 0x0; _0x135ada--) {
        HM_removeHeatMap(h_oaLayer[_0x135ada]);
    }
    typeof RemoveLegend == _0x5ae406(0x297) && RemoveLegend(oHM);
}

function HM_setVisible(_0x33a145, _0x517cb9) {
    const _0x19ade6 = _0x3a1a23;
    if (h_bNaver == !![]) {
        HM_setVisibleForNaver(_0x33a145, _0x517cb9);
        return;
    }
    _0x517cb9[_0x19ade6(0x310)] = _0x33a145;
    if (_0x517cb9[_0x19ade6(0x350)] == 0x1 || _0x517cb9[_0x19ade6(0x350)] == 0x2) {
        if (_0x517cb9[_0x19ade6(0x348)] != null) {
            if (_0x517cb9[_0x19ade6(0x348)]['getMap']() == null && _0x33a145 == !![]) _0x517cb9[_0x19ade6(0x348)]['setMap'](_0x517cb9[_0x19ade6(0x383)]);
            _0x517cb9[_0x19ade6(0x348)][_0x19ade6(0x3ca)](_0x33a145);
            if (_0x517cb9[_0x19ade6(0x298)] == !![] && _0x33a145 == !![]) {
                if (_0x517cb9['oExtent'][_0x19ade6(0x35b)]() != _0x517cb9[_0x19ade6(0x383)][_0x19ade6(0x2a3)]()['toString']()) HM_onBoundsChangeForHM_Auto(_0x517cb9);
            }
        }
    } else {
        if (_0x517cb9[_0x19ade6(0x350)] == 0x3) {
            let _0x41cd10 = _0x517cb9[_0x19ade6(0x1ad)][_0x19ade6(0x363)];
            for (let _0x4b267c = 0x0; _0x4b267c < _0x41cd10; _0x4b267c++) {
                if (_0x33a145 == !![]) _0x517cb9[_0x19ade6(0x1ad)][_0x4b267c][_0x19ade6(0x233)][_0x19ade6(0x328)](_0x517cb9[_0x19ade6(0x383)]);
                else _0x517cb9['aPointOrLineOrPolygon'][_0x4b267c][_0x19ade6(0x233)]['setMap'](null);
            }
            if (_0x517cb9[_0x19ade6(0x393)] != null) {
                if (_0x33a145 == !![]) _0x517cb9['aLabel'][_0x19ade6(0x328)](_0x517cb9[_0x19ade6(0x383)]), _0x517cb9[_0x19ade6(0x393)][_0x19ade6(0x113)](), _h_checkLabelVisiable();
                else {
                    let _0x32bed1 = _0x517cb9[_0x19ade6(0x393)][_0x19ade6(0x1a3)];
                    _0x517cb9['aLabel'][_0x19ade6(0x1d4)](), _0x517cb9[_0x19ade6(0x393)][_0x19ade6(0x328)](null), _0x517cb9[_0x19ade6(0x393)][_0x19ade6(0x113)](), _0x517cb9[_0x19ade6(0x393)][_0x19ade6(0x21a)](_0x32bed1), _0x32bed1 = null;
                }
            }
        } else {
            if (_0x517cb9['nType'] == 0x2e || _0x517cb9[_0x19ade6(0x350)] == 0x2f) {
                if (_0x33a145 == !![]) _h_mb_showODLayer(_0x517cb9['UID']);
                else _h_mb_hideODLayer(_0x517cb9['UID']);
            } else {
                if (_0x517cb9[_0x19ade6(0x350)] == 0x5) {
                    if (_0x33a145 == !![]) _0x517cb9['aPointOrLineOrPolygon'][_0x19ade6(0x328)](_0x517cb9[_0x19ade6(0x383)]), _0x517cb9[_0x19ade6(0x1ad)][_0x19ade6(0x113)](), _h_checkLabelVisiable();
                    else {
                        let _0x1b9e43 = _0x517cb9[_0x19ade6(0x1ad)][_0x19ade6(0x1a3)];
                        _0x517cb9['aPointOrLineOrPolygon'][_0x19ade6(0x1d4)](), _0x517cb9['aPointOrLineOrPolygon']['setMap'](null), _0x517cb9[_0x19ade6(0x1ad)]['redraw'](), _0x517cb9[_0x19ade6(0x1ad)]['addMarkers'](_0x1b9e43), _0x1b9e43 = null;
                    }
                    _h_VisileBufferOnPoint(_0x517cb9, _0x33a145);
                    if (_0x517cb9[_0x19ade6(0x393)] != null) {
                        if (_0x33a145 == !![]) _0x517cb9[_0x19ade6(0x393)][_0x19ade6(0x328)](_0x517cb9['map']), _0x517cb9['aLabel'][_0x19ade6(0x113)](), _h_checkLabelVisiable();
                        else {
                            let _0x5c8d0 = _0x517cb9[_0x19ade6(0x393)]['_markers'];
                            _0x517cb9[_0x19ade6(0x393)]['clear'](), _0x517cb9[_0x19ade6(0x393)][_0x19ade6(0x328)](null), _0x517cb9[_0x19ade6(0x393)][_0x19ade6(0x113)](), _0x517cb9['aLabel'][_0x19ade6(0x21a)](_0x5c8d0), _0x5c8d0 = null;
                        }
                    }
                }
            }
        }
    }
    _0x517cb9 = null, _h_removeInfowindow();
}

function HM_setVisibleForNaver(_0x45c0e7, _0x551860) {
    const _0x3d30a7 = _0x3a1a23;
    _0x551860[_0x3d30a7(0x310)] = _0x45c0e7;
    if (_0x551860['nType'] == 0x1 || _0x551860[_0x3d30a7(0x350)] == 0x2) {
        if (_0x551860[_0x3d30a7(0x348)] != null) {
            if (_0x45c0e7 == ![]) _0x551860['heatmapOverlay'][_0x3d30a7(0x328)](null);
            else _0x551860['heatmapOverlay'][_0x3d30a7(0x328)](_0x551860['map']);
            if (_0x551860[_0x3d30a7(0x298)] == !![] && _0x45c0e7 == !![]) {
                if (_0x551860[_0x3d30a7(0x23c)][_0x3d30a7(0x35b)]() != _0x551860[_0x3d30a7(0x383)][_0x3d30a7(0x2a3)]()[_0x3d30a7(0x35b)]()) HM_onBoundsChangeForHM_Auto(_0x551860);
            }
        }
    } else {
        if (_0x551860[_0x3d30a7(0x350)] == 0x3) {
            let _0x14ac64 = _0x551860['aPointOrLineOrPolygon'][_0x3d30a7(0x363)];
            for (let _0x136f6a = 0x0; _0x136f6a < _0x14ac64; _0x136f6a++) {
                if (_0x45c0e7 == !![]) _0x551860[_0x3d30a7(0x1ad)][_0x136f6a][_0x3d30a7(0x233)][_0x3d30a7(0x328)](_0x551860['map']);
                else _0x551860[_0x3d30a7(0x1ad)][_0x136f6a][_0x3d30a7(0x233)][_0x3d30a7(0x328)](null);
            }
        }
    }
    _0x551860 = null, _h_removeInfowindow();
}

function HM_setOpacity(_0x189399, _0x56d419) {
    const _0x98514 = _0x3a1a23;
    _0x56d419['fAlpha'] = _0x189399;
    if (_0x56d419['nType'] == 0x1 || _0x56d419['nType'] == 0x2) {
        if (_0x56d419['heatmapOverlay'] != null) _0x56d419[_0x98514(0x348)][_0x98514(0x16c)](_0x189399);
    } else {
        if (_0x56d419[_0x98514(0x350)] == 0x3) {
            let _0x21f9a6 = _0x56d419[_0x98514(0x1ad)][_0x98514(0x363)];
            for (let _0x46aba6 = 0x0; _0x46aba6 < _0x21f9a6; _0x46aba6++) _0x56d419[_0x98514(0x1ad)][_0x46aba6][_0x98514(0x39d)]({
                'fillOpacity': _0x189399
            });
        }
    }
    _0x56d419 = null;
}

function HM_getLegendStr(_0x201cec) {
    return _0x201cec['sLegend'];
}

function _h_removeTmpPolyline() {
    const _0x3286f0 = _0x3a1a23;
    h_oTmpPolyline != null && (h_oTmpPolyline[_0x3286f0(0x328)](null), h_oTmpPolyline = null);
}

function _h_removeTmpCircle() {
    const _0xae1ad6 = _0x3a1a23;
    if (h_oTmpCircle != null) {
        for (let _0x332efb = 0x0; _0x332efb < h_oTmpCircle[_0xae1ad6(0x363)]; _0x332efb++) h_oTmpCircle[_0x332efb]['setMap'](null);
        h_oTmpCircle = null;
    }
}

function _h_removeTmpMarkers() {
    const _0xd44747 = _0x3a1a23;
    h_oTmpMarkers != null && (h_oTmpMarkers[_0xd44747(0x1d4)](), h_oTmpMarkers[_0xd44747(0x328)](null), h_oTmpMarkers[_0xd44747(0x113)](), h_oTmpMarkers = null);
}

function _h_removeTmpGPS() {
    const _0x470c27 = _0x3a1a23;
    h_oTmpGPS != null && (h_oTmpGPS[_0x470c27(0x1d4)](), h_oTmpGPS[_0x470c27(0x328)](null), h_oTmpGPS[_0x470c27(0x113)](), h_oTmpGPS = null);
}

function _h_createTmpPoint(_0x536d06, _0x43770f) {
    const _0xcb85f2 = _0x3a1a23;
    _h_setColorMap(h_oMap, h_divMap), _h_removeTmpMarkers(), h_oTmpMarkers = new kakao[(_0xcb85f2(0x12a))][(_0xcb85f2(0x2f5))]({
        'map': h_oMap,
        'minLevel': 0x13
    });
    let _0x22bb3f = 0xb4,
        _0x267258 = 0xb4,
        _0x311c81 = 0x0,
        _0x448634 = 0x0,
        _0x16145c = _0x536d06[_0xcb85f2(0x1c4)]('|');
    if (_0x16145c[_0xcb85f2(0x363)] > 0xa) {
        let _0x459f69 = new Array(),
            _0x3cfab2 = _0xcb85f2(0x2bd);
        for (let _0xf8849d = 0x0; _0xf8849d < _0x16145c[_0xcb85f2(0x363)]; _0xf8849d++) {
            let _0x69a390 = _0x16145c[_0xf8849d][_0xcb85f2(0x1c4)](',');
            if (_0x69a390[_0xcb85f2(0x363)] == 0x2) {
                if (_0x22bb3f > parseFloat(_0x69a390[0x0])) _0x22bb3f = parseFloat(_0x69a390[0x0]);
                if (_0x267258 > parseFloat(_0x69a390[0x1])) _0x267258 = parseFloat(_0x69a390[0x1]);
                if (_0x311c81 < parseFloat(_0x69a390[0x0])) _0x311c81 = parseFloat(_0x69a390[0x0]);
                if (_0x448634 < parseFloat(_0x69a390[0x1])) _0x448634 = parseFloat(_0x69a390[0x1]);
                let _0xd56369 = new kakao[(_0xcb85f2(0x12a))][(_0xcb85f2(0xfc))]({
                    'position': new kakao[(_0xcb85f2(0x12a))][(_0xcb85f2(0x32b))](_0x69a390[0x1], _0x69a390[0x0]),
                    'image': new kakao['maps']['MarkerImage'](_0x3cfab2, new kakao[(_0xcb85f2(0x12a))]['Size'](0x19, 0x19)),
                    'zIndex': 0x1869f,
                    'opacity': 0.8
                });
                _0x459f69['push'](_0xd56369), _0xd56369 = null;
            }
            _0x69a390 = null;
        }
        if (_0x459f69[_0xcb85f2(0x363)] > 0x0) h_oTmpMarkers['addMarkers'](_0x459f69);
        _0x459f69 = null;
    }
    _0x16145c = null;
}

function _h_createTmpGPS(_0x317177) {
    const _0x3b74e9 = _0x3a1a23;
    _h_removeTmpGPS(), h_oTmpGPS = new kakao[(_0x3b74e9(0x12a))]['MarkerClusterer']({
        'map': h_oMap,
        'minLevel': 0x13
    });
    let _0x1d0959 = _0x317177[_0x3b74e9(0x1c4)]('|');
    if (_0x1d0959['length'] >= 0x1) {
        let _0x2991f3 = new Array(),
            _0x155ef6 = 'gps.png';
        for (let _0x157a77 = 0x0; _0x157a77 < _0x1d0959['length']; _0x157a77++) {
            let _0x367dfb = _0x1d0959[_0x157a77]['split'](',');
            if (_0x367dfb[_0x3b74e9(0x363)] == 0x2) {
                let _0x2468fd = new kakao[(_0x3b74e9(0x12a))]['Marker']({
                    'position': new kakao[(_0x3b74e9(0x12a))][(_0x3b74e9(0x32b))](_0x367dfb[0x1], _0x367dfb[0x0]),
                    'image': new kakao['maps'][(_0x3b74e9(0x28f))](_0x155ef6, new kakao[(_0x3b74e9(0x12a))][(_0x3b74e9(0x235))](0x28, 0x28)),
                    'zIndex': 0x1869f,
                    'opacity': 0.5
                });
                map[_0x3b74e9(0x213)](new kakao['maps'][(_0x3b74e9(0x32b))](_0x367dfb[0x1], _0x367dfb[0x0])), _0x2991f3['push'](_0x2468fd), _0x2468fd = null;
            }
            _0x367dfb = null;
        }
        if (_0x2991f3[_0x3b74e9(0x363)] > 0x0) h_oTmpGPS['addMarkers'](_0x2991f3);
        _0x2991f3 = null;
    }
    _0x1d0959 = null;
}

function _h_createTmpPolyline(_0x343872, _0x3426fa) {
    const _0xb6b96e = _0x3a1a23;
    _h_setColorMap(h_oMap, h_divMap), _h_removeTmpPolyline();
    let _0x54a022 = 0xb4,
        _0x263933 = 0xb4,
        _0x26ed36 = 0x0,
        _0x41ff0e = 0x0,
        _0x3a0a56 = new Array(),
        _0x2020fd = _0x343872[_0xb6b96e(0x1c4)]('|');
    if (_0x2020fd[_0xb6b96e(0x363)] > 0x2) {
        let _0x331495 = new Array();
        for (let _0x4d766d = 0x0; _0x4d766d < _0x2020fd[_0xb6b96e(0x363)]; _0x4d766d++) {
            let _0x9bb1b3 = _0x2020fd[_0x4d766d][_0xb6b96e(0x1c4)](',');
            if (_0x9bb1b3[_0xb6b96e(0x363)] == 0x2) {
                if (_0x54a022 > parseFloat(_0x9bb1b3[0x0])) _0x54a022 = parseFloat(_0x9bb1b3[0x0]);
                if (_0x263933 > parseFloat(_0x9bb1b3[0x1])) _0x263933 = parseFloat(_0x9bb1b3[0x1]);
                if (_0x26ed36 < parseFloat(_0x9bb1b3[0x0])) _0x26ed36 = parseFloat(_0x9bb1b3[0x0]);
                if (_0x41ff0e < parseFloat(_0x9bb1b3[0x1])) _0x41ff0e = parseFloat(_0x9bb1b3[0x1]);
                _0x331495['push'](new kakao[(_0xb6b96e(0x12a))][(_0xb6b96e(0x32b))](_0x9bb1b3[0x1], _0x9bb1b3[0x0]));
            }
            _0x9bb1b3 = null;
        }
        if (_0x331495[_0xb6b96e(0x363)] >= 0x3) _0x3a0a56[_0xb6b96e(0x29a)](_0x331495);
        _0x331495 = null;
    }
    _0x2020fd = null;
    if (h_oTmpPolyline != null) h_oTmpPolyline[_0xb6b96e(0x328)](null);
    let _0x34a3bb = new kakao['maps'][(_0xb6b96e(0x3e5))]({
        'map': h_oMap,
        'path': _0x3a0a56,
        'strokeWeight': 0x2,
        'strokeColor': 'RGB(255,0,0)',
        'strokeOpacity': 0.9,
        'fillColor': _0xb6b96e(0x27c),
        'fillOpacity': 0.1
    });
    h_oTmpPolyline = _0x34a3bb, _0x34a3bb = null, _0x3426fa == !![] && setTimeout(function() {
        const _0x28b18d = _0xb6b96e;
        let _0xd3c4ac = new kakao[(_0x28b18d(0x12a))][(_0x28b18d(0x10d))](new kakao[(_0x28b18d(0x12a))]['LatLng'](_0x263933, _0x54a022), new kakao[(_0x28b18d(0x12a))][(_0x28b18d(0x32b))](_0x41ff0e, _0x26ed36));
        h_oMap['setBounds'](_0xd3c4ac), _0xd3c4ac = null, h_oMap[_0x28b18d(0x2e1)](h_oMap[_0x28b18d(0x330)]() - 0x1);
    }, 0x3e8);
}

function _h_createTmpCtyOrDong(_0x6a9fda, _0x1e0530, _0x5543d4, _0x4f6f25) {
    const _0x7469e = _0x3a1a23;
    _h_removeTmpPolyline();
    let _0x183253 = new Array(),
        _0x1e8b5a = _0x6a9fda[_0x7469e(0x1c4)]('|');
    if (_0x1e8b5a[_0x7469e(0x363)] >= 0x1)
        for (let _0x438a6e = 0x0; _0x438a6e < _0x1e8b5a[_0x7469e(0x363)]; _0x438a6e++) {
            let _0x531a02 = new Array(),
                _0x8e9cf9 = _0x1e8b5a[_0x438a6e][_0x7469e(0x1c4)](',');
            for (let _0x203265 = 0x0; _0x203265 < _0x8e9cf9[_0x7469e(0x363)]; _0x203265++) {
                let _0x2fbd10 = _0x8e9cf9[_0x203265][_0x7469e(0x1c4)]('^');
                if (_0x2fbd10[_0x7469e(0x363)] == 0x2) _0x531a02[_0x7469e(0x29a)](new kakao['maps'][(_0x7469e(0x32b))](_0x2fbd10[0x1], _0x2fbd10[0x0]));
                _0x2fbd10 = null;
            }
            if (_0x531a02[_0x7469e(0x363)] >= 0x2) {
                if (_0x531a02[0x0][_0x7469e(0x27e)](_0x531a02[_0x531a02[_0x7469e(0x363)] - 0x1]) == ![]) _0x531a02[_0x7469e(0x29a)](_0x531a02[0x0]);
                _0x183253[_0x7469e(0x29a)](_0x531a02);
            }
            _0x531a02 = null, _0x8e9cf9 = null;
        }
    _0x1e8b5a = null;
    if (h_oTmpPolyline != null) h_oTmpPolyline['setMap'](null);
    let _0xc29603 = new kakao[(_0x7469e(0x12a))][(_0x7469e(0x3cf))]({
        'map': h_oMap,
        'path': _0x183253,
        'strokeWeight': _0x5543d4,
        'strokeColor': _0x1e0530,
        'strokeOpacity': _0x4f6f25,
        'zIndex': 0xf423f
    });
    h_oTmpPolyline = _0xc29603, h_oTmpPolyline[_0x7469e(0x328)](map), _0xc29603 = null;
}

function _h_createTmpCircle(_0x2d96a3) {
    const _0x42e40d = _0x3a1a23;
    _h_setColorMap(h_oMap, h_divMap), _h_removeTmpCircle();
    let _0xd08257 = new Array(),
        _0x5724bc = _0x2d96a3['split']('|');
    if (_0x5724bc[_0x42e40d(0x363)] > 0x0)
        for (let _0x241d26 = 0x0; _0x241d26 < _0x5724bc[_0x42e40d(0x363)]; _0x241d26++) {
            let _0x2ecdef = _0x5724bc[_0x241d26]['split'](',');
            if (_0x2ecdef[_0x42e40d(0x363)] == 0x3) {
                let _0x3effb1 = new kakao['maps'][(_0x42e40d(0xff))]({
                    'center': new kakao[(_0x42e40d(0x12a))]['LatLng'](_0x2ecdef[0x1], _0x2ecdef[0x0]),
                    'radius': _0x2ecdef[0x2],
                    'strokeWeight': 0x2,
                    'strokeColor': _0x42e40d(0x2e5),
                    'strokeOpacity': 0x1,
                    'fillColor': _0x42e40d(0x3a8),
                    'fillOpacity': 0x0
                });
                _0x3effb1[_0x42e40d(0x328)](h_oMap), _0xd08257[_0x42e40d(0x29a)](_0x3effb1), _0x3effb1 = null;
            }
            _0x2ecdef = null;
        }
    _0x5724bc = null, h_oTmpCircle = _0xd08257, _0xd08257 = null;
}

function _h_createTmpCircleBackgroundColor(_0x40de0b) {
    const _0x36cafa = _0x3a1a23;
    _h_setColorMap(h_oMap, h_divMap), _h_removeTmpCircle();
    let _0x429747 = new Array(),
        _0x5d44e6 = _0x40de0b[_0x36cafa(0x1c4)]('|');
    if (_0x5d44e6[_0x36cafa(0x363)] > 0x0)
        for (let _0x1204a8 = 0x0; _0x1204a8 < _0x5d44e6[_0x36cafa(0x363)]; _0x1204a8++) {
            let _0x3d1a41 = _0x5d44e6[_0x1204a8][_0x36cafa(0x1c4)](',');
            if (_0x3d1a41['length'] == 0x3) {
                let _0xce13ba = new kakao[(_0x36cafa(0x12a))][(_0x36cafa(0xff))]({
                    'center': new kakao[(_0x36cafa(0x12a))]['LatLng'](_0x3d1a41[0x1], _0x3d1a41[0x0]),
                    'radius': _0x3d1a41[0x2],
                    'strokeWeight': 0x3,
                    'strokeColor': _0x36cafa(0x102),
                    'strokeOpacity': 0x1,
                    'fillColor': _0x36cafa(0x102),
                    'fillOpacity': 0.2
                });
                _0xce13ba[_0x36cafa(0x328)](h_oMap), _0x429747['push'](_0xce13ba), _0xce13ba = null;
            }
            _0x3d1a41 = null;
        }
    _0x5d44e6 = null, h_oTmpCircle = _0x429747, _0x429747 = null;
}
var h_sMapColor = _0x3a1a23(0x1ca),
    h_oMask = null;

function HM_setMaskByBizgisCoord(_0x3de231, _0x1ef869) {
    const _0x52b6ec = _0x3a1a23;
    let _0x1ab5a1 = 0xb4,
        _0x2e753d = 0xb4,
        _0x3f3f42 = 0x0,
        _0x20a29d = 0x0,
        _0x2c7252 = _0x3de231,
        _0x1ecba1 = new XMLHttpRequest();
    _0x1ecba1[_0x52b6ec(0x3e0)](_0x52b6ec(0x1ce), _0x39279b), _0x1ecba1[_0x52b6ec(0x3e2)](_0x52b6ec(0x201), _0x2c7252), _0x1ecba1[_0x52b6ec(0x332)] = function() {
        const _0x210224 = _0x52b6ec;
        alert(_0x210224(0x279));
    }, _0x1ecba1[_0x52b6ec(0x284)]();

    function _0x39279b() {
        const _0x42c10c = _0x52b6ec;
        _0x1ecba1 = null;
        let _0x334380 = this[_0x42c10c(0x254)];
        if (_0x334380[_0x42c10c(0x363)] < 0xa) {
            _0x334380 == _0x42c10c(0x3c9) && alert('마스크\x20설정이\x20취소되었습니다.\x0a로그인\x20정보\x20등을\x20확인하세요.');
            return;
        }
        _0x334380 = _0x334380[_0x42c10c(0x1c4)]('#|#')[0x0], _0x334380 = _0x334380[_0x42c10c(0xb9)](), _0x334380 = _0x334380[_0x42c10c(0x1c4)](_0x42c10c(0x1f8))['join'](_0x42c10c(0x145)), _0x334380 = _0x334380[_0x42c10c(0x1c4)]('|')['join'](_0x42c10c(0x145)), _0x334380 = _0x334380['split']('/')[_0x42c10c(0x163)](',');
        let _0x114fec = _0x334380[_0x42c10c(0x1c4)](_0x42c10c(0x145));
        _0x334380 = null;
        let _0x14d98d = new Array(),
            _0x3bcc1e = [new kakao['maps'][(_0x42c10c(0x32b))](0xb4, 0x0), new kakao[(_0x42c10c(0x12a))][(_0x42c10c(0x32b))](0x0, 0x5a), new kakao[(_0x42c10c(0x12a))]['LatLng'](0xb4, 0x5a), new kakao[(_0x42c10c(0x12a))][(_0x42c10c(0x32b))](0x5a, 0x0)];
        _0x14d98d[_0x42c10c(0x29a)](_0x3bcc1e);
        for (let _0xe2bb5b = 0x0; _0xe2bb5b < _0x114fec[_0x42c10c(0x363)]; _0xe2bb5b++) {
            let _0x258acd = _0x114fec[_0xe2bb5b]['split'](',');
            if (_0x258acd['length'] > 0xa) {
                let _0x78b55c = new Array();
                for (let _0x1bbe10 = 0x0; _0x1bbe10 < _0x258acd[_0x42c10c(0x363)]; _0x1bbe10++) {
                    let _0x14be07 = _0x258acd[_0x1bbe10][_0x42c10c(0x1c4)]('^');
                    if (_0x14be07[_0x42c10c(0x363)] == 0x2) {
                        if (_0x1ab5a1 > parseFloat(_0x14be07[0x0])) _0x1ab5a1 = parseFloat(_0x14be07[0x0]);
                        if (_0x2e753d > parseFloat(_0x14be07[0x1])) _0x2e753d = parseFloat(_0x14be07[0x1]);
                        if (_0x3f3f42 < parseFloat(_0x14be07[0x0])) _0x3f3f42 = parseFloat(_0x14be07[0x0]);
                        if (_0x20a29d < parseFloat(_0x14be07[0x1])) _0x20a29d = parseFloat(_0x14be07[0x1]);
                        _0x78b55c['push'](new kakao[(_0x42c10c(0x12a))][(_0x42c10c(0x32b))](_0x14be07[0x1], _0x14be07[0x0]));
                    }
                    _0x14be07 = null;
                }
                if (_0x78b55c[0x0][_0x42c10c(0x27e)](_0x78b55c[_0x78b55c[_0x42c10c(0x363)] - 0x1]) == ![]) _0x78b55c[_0x42c10c(0x29a)](_0x78b55c[0x0]);
                if (_0x78b55c['length'] >= 0x3) _0x14d98d[_0x42c10c(0x29a)](_0x78b55c);
                _0x78b55c = null;
            }
            _0x258acd = null;
        }
        _0x114fec = null;
        if (h_oMask != null) h_oMask['setMap'](null);
        let _0x2b5c30 = new kakao['maps'][(_0x42c10c(0x3e5))]({
            'map': h_oMap,
            'path': _0x14d98d,
            'strokeWeight': 0x2,
            'strokeColor': 'RGB(255,255,255)',
            'strokeOpacity': 0.3,
            'fillColor': _0x42c10c(0x27c),
            'fillOpacity': 0.5,
            'zIndex': 0xf423f
        });
        (h_isMobile == !![] || h_isTablet == !![]) && (_0x2b5c30 = new kakao[(_0x42c10c(0x12a))][(_0x42c10c(0x3cf))]({
            'map': h_oMap,
            'path': _0x14d98d,
            'strokeWeight': 0x2,
            'strokeColor': _0x42c10c(0x3f0),
            'strokeOpacity': 0.3,
            'fillColor': 'RGB(0,0,0)',
            'fillOpacity': 0.5,
            'zIndex': 0xf423f
        })), h_oMask = _0x2b5c30, _0x1ef869 == !![] && setTimeout(function() {
            const _0x32cd0f = _0x42c10c;
            let _0x4cc4fe = new kakao[(_0x32cd0f(0x12a))][(_0x32cd0f(0x10d))](new kakao['maps'][(_0x32cd0f(0x32b))](_0x2e753d, _0x1ab5a1), new kakao[(_0x32cd0f(0x12a))]['LatLng'](_0x20a29d, _0x3f3f42));
            h_oMap['setBounds'](_0x4cc4fe), _0x4cc4fe = null, h_oMap[_0x32cd0f(0x2e1)](h_oMap['getLevel']() - 0x1);
        }, 0x3e8);
    }
}

function _h_setColorMap(_0x330b85, _0x12e77b) {
    const _0x548174 = _0x3a1a23;
    if (h_bGrayMap == ![]) return;
    if (h_nGrayMapChangedCNT >= 0x2) return;
    if (h_bNaver == !![]) {
        _h_setColorMapForNaver(_0x330b85, _0x12e77b);
        return;
    }
    let _0x42e1a3 = null,
        _0xf6e453 = _0x12e77b[_0x548174(0x2dc)];
    for (let _0xb8fd4d = 0x0; _0xb8fd4d < _0xf6e453; _0xb8fd4d++) {
        let _0x4a6592 = _0x12e77b[_0x548174(0x108)][_0xb8fd4d][_0x548174(0x2dc)];
        _0x4a6592 >= 0xa && (_0x42e1a3 = _0x12e77b[_0x548174(0x108)][_0xb8fd4d], _h_setColorMap2(_0x42e1a3));
        for (let _0x2deb33 = 0x0; _0x2deb33 < _0x4a6592; _0x2deb33++) {
            let _0x210052 = _0x12e77b['children'][_0xb8fd4d][_0x548174(0x108)][_0x2deb33][_0x548174(0x2dc)];
            _0x210052 >= 0xa && (_0x42e1a3 = _0x12e77b[_0x548174(0x108)][_0xb8fd4d]['children'][_0x2deb33], _h_setColorMap2(_0x42e1a3));
            for (let _0x5cc4db = 0x0; _0x5cc4db < _0x210052; _0x5cc4db++) {
                let _0x4a90d0 = _0x12e77b[_0x548174(0x108)][_0xb8fd4d][_0x548174(0x108)][_0x2deb33]['children'][_0x5cc4db][_0x548174(0x2dc)];
                _0x4a90d0 >= 0xa && (_0x42e1a3 = _0x12e77b[_0x548174(0x108)][_0xb8fd4d][_0x548174(0x108)][_0x2deb33][_0x548174(0x108)][_0x5cc4db], _h_setColorMap2(_0x42e1a3));
                for (let _0x1f191b = 0x0; _0x1f191b < _0x4a90d0; _0x1f191b++) {
                    let _0x5130d7 = _0x12e77b[_0x548174(0x108)][_0xb8fd4d][_0x548174(0x108)][_0x2deb33][_0x548174(0x108)][_0x5cc4db][_0x548174(0x108)][_0x1f191b][_0x548174(0x2dc)];
                    _0x5130d7 >= 0xa && (_0x42e1a3 = _0x12e77b[_0x548174(0x108)][_0xb8fd4d][_0x548174(0x108)][_0x2deb33][_0x548174(0x108)][_0x5cc4db]['children'][_0x1f191b], _h_setColorMap2(_0x42e1a3));
                }
            }
        }
    }
    _h_setColorMap2(_0x42e1a3), _0x42e1a3 = null;
}

function _h_setColorMap2(_0x42ddf9) {
    const _0x2c4fde = _0x3a1a23;
    if (_0x42ddf9 != null) {
        let _0x56585b = ![];
        if (_0x42ddf9[_0x2c4fde(0x1e1)]['indexOf']('width:\x20256px;') > 0x0 && _0x42ddf9[_0x2c4fde(0x1e1)][_0x2c4fde(0x37d)](_0x2c4fde(0x2a6)) > 0x0) _0x56585b = !![];
        else {
            if (_0x42ddf9[_0x2c4fde(0x1e1)][_0x2c4fde(0x37d)](_0x2c4fde(0xd0)) > 0x0 && _0x42ddf9[_0x2c4fde(0x1e1)]['indexOf'](_0x2c4fde(0x2a6)) > 0x0) _0x56585b = !![];
            else {
                if (_0x42ddf9[_0x2c4fde(0x1e1)][_0x2c4fde(0x37d)](_0x2c4fde(0x280)) > 0x0 && _0x42ddf9[_0x2c4fde(0x1e1)][_0x2c4fde(0x37d)](_0x2c4fde(0x381)) > 0x0) _0x56585b = !![];
                else {
                    if (_0x42ddf9['innerHTML']['indexOf'](_0x2c4fde(0xd0)) > 0x0 && _0x42ddf9['innerHTML']['indexOf']('height:256px;') > 0x0) _0x56585b = !![];
                }
            }
        }
        _0x56585b == !![] && _0x42ddf9['style']['filter'] != h_sMapColor && (_0x42ddf9[_0x2c4fde(0x35d)]['filter'] = h_sMapColor, h_nGrayMapChangedCNT++);
    }
    _0x42ddf9 = null;
}

function _h_setColorMapForNaver(_0xc2da2e, _0x5d141b) {
    const _0x5dbc99 = _0x3a1a23;
    let _0x151fd4 = null,
        _0x521801 = _0x5d141b[_0x5dbc99(0x2dc)];
    for (let _0x5bfbde = 0x0; _0x5bfbde < _0x521801; _0x5bfbde++) {
        let _0x2a9de3 = _0x5d141b[_0x5dbc99(0x108)][_0x5bfbde][_0x5dbc99(0x2dc)];
        if (_0x2a9de3 >= 0xa) {
            _0x151fd4 = _0x5d141b[_0x5dbc99(0x108)][_0x5bfbde];
            break;
        }
        for (let _0x2918a1 = 0x0; _0x2918a1 < _0x2a9de3; _0x2918a1++) {
            let _0x388720 = _0x5d141b[_0x5dbc99(0x108)][_0x5bfbde]['children'][_0x2918a1][_0x5dbc99(0x2dc)];
            if (_0x388720 >= 0xa) {
                _0x151fd4 = _0x5d141b[_0x5dbc99(0x108)][_0x5bfbde][_0x5dbc99(0x108)][_0x2918a1], _0x5bfbde = _0x521801;
                break;
            }
            for (let _0x47dd2c = 0x0; _0x47dd2c < _0x388720; _0x47dd2c++) {
                let _0x3131dc = _0x5d141b['children'][_0x5bfbde]['children'][_0x2918a1][_0x5dbc99(0x108)][_0x47dd2c]['childElementCount'];
                if (_0x3131dc >= 0xa) {
                    _0x151fd4 = _0x5d141b[_0x5dbc99(0x108)][_0x5bfbde][_0x5dbc99(0x108)][_0x2918a1]['children'][_0x47dd2c], _0x5bfbde = _0x521801, _0x2918a1 = _0x2a9de3;
                    break;
                }
                for (let _0x47a911 = 0x0; _0x47a911 < _0x3131dc; _0x47a911++) {
                    let _0x3226b5 = _0x5d141b[_0x5dbc99(0x108)][_0x5bfbde][_0x5dbc99(0x108)][_0x2918a1][_0x5dbc99(0x108)][_0x47dd2c]['children'][_0x47a911][_0x5dbc99(0x2dc)];
                    if (_0x3226b5 >= 0xa) {
                        _0x151fd4 = _0x5d141b['children'][_0x5bfbde][_0x5dbc99(0x108)][_0x2918a1][_0x5dbc99(0x108)][_0x47dd2c][_0x5dbc99(0x108)][_0x47a911], _0x5bfbde = _0x521801, _0x2918a1 = _0x2a9de3, _0x47dd2c = _0x388720;
                        break;
                    }
                    for (let _0x588a74 = 0x0; _0x588a74 < _0x3226b5; _0x588a74++) {
                        let _0x50941b = _0x5d141b['children'][_0x5bfbde][_0x5dbc99(0x108)][_0x2918a1][_0x5dbc99(0x108)][_0x47dd2c][_0x5dbc99(0x108)][_0x47a911]['children'][_0x588a74][_0x5dbc99(0x2dc)];
                        if (_0x50941b >= 0xa) {
                            _0x151fd4 = _0x5d141b['children'][_0x5bfbde][_0x5dbc99(0x108)][_0x2918a1][_0x5dbc99(0x108)][_0x47dd2c][_0x5dbc99(0x108)][_0x47a911][_0x5dbc99(0x108)][_0x588a74], _0x5bfbde = _0x521801, _0x2918a1 = _0x2a9de3, _0x47dd2c = _0x388720, _0x47a911 = _0x3131dc;
                            break;
                        }
                        for (let _0x45d9ba = 0x0; _0x45d9ba < _0x50941b; _0x45d9ba++) {
                            let _0x389d18 = _0x5d141b[_0x5dbc99(0x108)][_0x5bfbde][_0x5dbc99(0x108)][_0x2918a1]['children'][_0x47dd2c]['children'][_0x47a911]['children'][_0x588a74][_0x5dbc99(0x108)][_0x45d9ba][_0x5dbc99(0x2dc)];
                            if (_0x389d18 >= 0xa) {
                                _0x151fd4 = _0x5d141b[_0x5dbc99(0x108)][_0x5bfbde]['children'][_0x2918a1][_0x5dbc99(0x108)][_0x47dd2c][_0x5dbc99(0x108)][_0x47a911][_0x5dbc99(0x108)][_0x588a74][_0x5dbc99(0x108)][_0x45d9ba], _0x5bfbde = _0x521801, _0x2918a1 = _0x2a9de3, _0x47dd2c = _0x388720, _0x47a911 = _0x3131dc, _0x588a74 = _0x3226b5;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    _0x151fd4 != null && (_0x151fd4[_0x5dbc99(0x35d)][_0x5dbc99(0x2f2)] != h_sMapColor && (_0x151fd4[_0x5dbc99(0x35d)][_0x5dbc99(0x2f2)] = h_sMapColor)), _0x151fd4 = null;
}

function _h_replacePercentFromUrl(_0x268f79) {
    const _0xd09ac9 = _0x3a1a23;
    let _0x56b71f = '',
        _0x253cda = _0x268f79['length'],
        _0x190ed5 = ![];
    for (let _0x224632 = 0x0; _0x224632 < _0x253cda; _0x224632++) {
        let _0x21de11 = _0x268f79[_0xd09ac9(0x3ea)](_0x224632);
        if (_0x21de11 == '=') _0x190ed5 = !![];
        if (_0x21de11 == '&') _0x190ed5 = ![];
        if (_0x190ed5 == !![]) {
            if (_0x21de11 == '%') _0x21de11 = '％';
        }
        _0x56b71f += _0x21de11;
    }
    return _0x56b71f;
}

function _h_replacePlusFromUrl(_0x237d11) {
    const _0x37268c = _0x3a1a23;
    let _0x4ef06e = '',
        _0x470691 = _0x237d11[_0x37268c(0x363)],
        _0x308037 = ![];
    for (let _0x38b161 = 0x0; _0x38b161 < _0x470691; _0x38b161++) {
        let _0x104743 = _0x237d11['charAt'](_0x38b161);
        if (_0x104743 == '=') _0x308037 = !![];
        if (_0x104743 == '&') _0x308037 = ![];
        if (_0x308037 == !![]) {
            if (_0x104743 == '+') _0x104743 = '＋';
        }
        _0x4ef06e += _0x104743;
    }
    return _0x4ef06e;
}

function _h_replaceShapFromUrl(_0x5c2edb) {
    const _0x24d73c = _0x3a1a23;
    let _0x22e95 = '',
        _0x42ccd1 = _0x5c2edb[_0x24d73c(0x363)],
        _0x442358 = ![];
    for (let _0xdf0d5c = 0x0; _0xdf0d5c < _0x42ccd1; _0xdf0d5c++) {
        let _0xe461ee = _0x5c2edb['charAt'](_0xdf0d5c);
        if (_0xe461ee == '=') _0x442358 = !![];
        if (_0xe461ee == '&') _0x442358 = ![];
        if (_0x442358 == !![]) {
            if (_0xe461ee == '#') _0xe461ee = '_SHAP_';
        }
        _0x22e95 += _0xe461ee;
    }
    return _0x22e95;
}

function _h_GetUrlAndParaArray(_0x4a4782) {
    const _0x31130f = _0x3a1a23;
    let _0x146dea = null,
        _0x3acc01 = _0x4a4782[_0x31130f(0x37d)]('=');
    if (_0x3acc01 > 0x0) {
        let _0x51a7c0 = _0x4a4782[_0x31130f(0x16d)]('?', _0x3acc01);
        if (_0x51a7c0 < 0x0) _0x51a7c0 = _0x4a4782['lastIndexOf']('/', _0x3acc01);
        _0x51a7c0 > 0x0 && (_0x146dea = new Array(), _0x146dea[_0x31130f(0x29a)](_0x4a4782[_0x31130f(0x36a)](0x0, _0x51a7c0 + 0x1)), _0x146dea[_0x31130f(0x29a)](_0x4a4782['substring'](_0x51a7c0 + 0x1)));
    }
    return _0x4a4782 = null, _0x146dea;
}

function _h_onFinishAddPointFromDataString(_0x836fbd) {
    _h_isEmptyForObjectAndFunction('onEventFinishAddPointFromDataString_ByHeatmapLib') == ![] && onEventFinishAddPointFromDataString_ByHeatmapLib(_0x836fbd);
}

function _h_SetAnimationMarkerUrl(_0x330d51) {
    const _0x4d3e27 = _0x3a1a23;
    if (_0x330d51[_0x4d3e27(0x37d)](_0x4d3e27(0x271)) < 0x0) return _0x330d51;
    else _0x330d51 = _0x330d51[_0x4d3e27(0xd2)](':svg_animation_apply', ''), _0x330d51 = _0x330d51['replace']('/svg2png_30Col.php?', _0x4d3e27(0x1ee));
    return _0x330d51;
}

function _h_GetPublicMMSMarkerSrc(_0x29993c) {
    const _0x131d38 = _0x3a1a23;
    let _0xcad959 = '',
        _0x3fe851 = '',
        _0x573b77 = '';
    if (_0x29993c[_0x131d38(0x37d)](_0x131d38(0x223)) >= 0x0) _0xcad959 = _h_getValueFromContent(_0x29993c, _0x131d38(0x223));
    else {
        if (_0x29993c['indexOf']('TYPE_GUBUN') >= 0x0) _0xcad959 = _h_getValueFromContent(_0x29993c, _0x131d38(0x3ce));
    }
    if (_0x29993c[_0x131d38(0x37d)](_0x131d38(0x211)) >= 0x0) _0x3fe851 = _h_getValueFromContent(_0x29993c, _0x131d38(0x211));
    else {
        if (_0x29993c['indexOf']('TITLE') >= 0x0) _0x3fe851 = _h_getValueFromContent(_0x29993c, _0x131d38(0x180));
    }
    if (_0x29993c[_0x131d38(0x37d)](_0x131d38(0x3ed)) >= 0x0) _0x573b77 = _h_getValueFromContent(_0x29993c, _0x131d38(0x3ed));
    else {
        if (_0x29993c[_0x131d38(0x37d)](_0x131d38(0x31c)) >= 0x0) _0x573b77 = _h_getValueFromContent(_0x29993c, _0x131d38(0x31c));
        else {
            if (_0x29993c[_0x131d38(0x37d)]('BADGE') >= 0x0) _0x573b77 = _h_getValueFromContent(_0x29993c, _0x131d38(0x146));
        }
    }
    let _0x409c99 = 'cccccc',
        _0x33405b = _0x131d38(0x289);
    if (_0xcad959 == '공원') _0x409c99 = _0x131d38(0x26b), _0x33405b = _0x131d38(0x215);
    else {
        if (_0xcad959 == _0x131d38(0xd1)) _0x409c99 = _0x131d38(0x227), _0x33405b = _0x131d38(0x1c7);
        else {
            if (_0xcad959 == '관광명소') _0x409c99 = _0x131d38(0x261), _0x33405b = _0x131d38(0x2dd);
            else {
                if (_0xcad959 == '능묘') _0x409c99 = _0x131d38(0x26c), _0x33405b = 'a37c6e';
                else {
                    if (_0xcad959 == _0x131d38(0x39c)) _0x409c99 = _0x131d38(0x1f4), _0x33405b = _0x131d38(0x148);
                    else {
                        if (_0xcad959 == '낮음') _0x409c99 = _0x131d38(0x1a6), _0x33405b = '2C74BE';
                        else {
                            if (_0xcad959 == '보통') _0x409c99 = _0x131d38(0x1d8), _0x33405b = '3AB549';
                            else _0xcad959 == '높음' && (_0x409c99 = _0x131d38(0x15d), _0x33405b = _0x131d38(0x225));
                        }
                    }
                }
            }
        }
    }
    let _0xa5c80a = _0x131d38(0x3d0) + _0x3fe851 + '&SUBJECT=' + _0xcad959 + _0x131d38(0x388) + _0x573b77 + _0x131d38(0xeb) + _0x409c99 + '&COLOR2=' + _0x33405b,
        _0x21aa01 = _0x3fe851[_0x131d38(0x363)],
        _0x2e60bb = _0x3fe851[_0x131d38(0x1c4)](',')[_0x131d38(0x363)] - 0x1,
        _0x3312c0 = _0x3fe851[_0x131d38(0x1c4)]('(')[_0x131d38(0x363)] - 0x1,
        _0x2703c0 = _0x3fe851[_0x131d38(0x1c4)](')')[_0x131d38(0x363)] - 0x1,
        _0x2d5b94 = _0x3fe851['split']('1')[_0x131d38(0x363)] - 0x1,
        _0x1b2047 = _0x2e60bb + _0x3312c0 + _0x2703c0 + _0x2d5b94,
        _0x563467 = _0x21aa01 - _0x1b2047,
        _0x589a42 = _0x563467 * 14.5 + _0x1b2047 * 0x6 + 0x68,
        _0x32582c = _0x589a42 + 0xa,
        _0x13017f = _0x32582c + 0x2;
    return _0x29993c = null, _0xcad959 = null, _0x3fe851 = null, _0x573b77 = null, _0x409c99 = null, _0x33405b = null, _0x13017f + '|' + _0xa5c80a;
}

function _h_GetMarkerSrc(_0x4164ca, _0x1823f7, _0x4deb0e) {
    const _0x4561c8 = _0x3a1a23;
    let _0x291fc3 = _0x4561c8(0xcb) + _0x4164ca + _0x4561c8(0x2e2) + _0x1823f7 + _0x4561c8(0x1a8) + _0x4561c8(0x11e) + _0x4deb0e + _0x4561c8(0x1b0) + _0x4deb0e;
    return _0x291fc3 = _h_SetAnimationMarkerUrl(_0x291fc3), _0x4164ca = null, _0x1823f7 = null, _0x291fc3;
}

function _h_GetMarkerSrcForSelected(_0x51f278, _0x405e56, _0x37acbe) {
    const _0x304ecd = _0x3a1a23;
    let _0x1d8f01 = 'https://www.policymap.or.kr/heatmap_api/marker/svg2png_30Col.php?GUBUN=marker_svg2&ICON=' + _0x51f278 + _0x304ecd(0x2e2) + _0x405e56 + _0x304ecd(0xc4) + 'WIDTH=' + _0x37acbe + _0x304ecd(0x1b0) + _0x37acbe;
    return _0x1d8f01 = _h_SetAnimationMarkerUrl(_0x1d8f01), _0x51f278 = null, _0x405e56 = null, _0x1d8f01;
}
var h_bPointShift = ![],
    h_oPointShiftPreMarkerImage = null,
    h_sPointShiftXYstring = '',
    h_aPointShiftArray = null,
    h_oPointMouseOverHM = null,
    h_oPointMouseOverMarker = null,
    h_oPointMouseOverImage = null;
let h_oGiudeLineMarker = null;

function _h_removeShiftGuideLine() {
    const _0x239e62 = _0x3a1a23;
    h_oGiudeLineMarker != null && (h_oGiudeLineMarker[_0x239e62(0x328)](null), h_oGiudeLineMarker = null);
}

function _h_drawShiftGuideLine(_0x356048, _0x2d2270, _0x5d79b6, _0x3819e0) {
    const _0x540117 = _0x3a1a23;
    let _0x4d8e53 = _0x540117(0x101) + _0x540117(0x2c4) + _0x2d2270 + _0x540117(0x3d8) + _0x2d2270 + _0x540117(0xfd) + _0x5d79b6;
    nW = _0x2d2270 * _0x5d79b6;
    let _0x47cff2 = new kakao[(_0x540117(0x12a))]['Size'](nW, _0x2d2270),
        _0x231bcb = _0x2d2270 / 0x2,
        _0x5684d6 = _0x2d2270 * 1.3,
        _0x3d6d2e = {
            'offset': new kakao[(_0x540117(0x12a))]['Point'](_0x231bcb, _0x5684d6)
        },
        _0xbe154c = new kakao[(_0x540117(0x12a))][(_0x540117(0x28f))](_0x4d8e53, _0x47cff2, _0x3d6d2e);
    _h_removeShiftGuideLine(), h_oGiudeLineMarker = new kakao[(_0x540117(0x12a))]['Marker']({
        'position': _0x356048,
        'image': _0xbe154c,
        'zIndex': _0x3819e0,
        'opacity': 0x1,
        'clickable': ![]
    }), h_oGiudeLineMarker['setMap'](h_oMap), _0x47cff2 = null, _0x4d8e53 = null, _0x3d6d2e = null;
}

function _h_getTotalTable(_0x237702) {
    const _0x1cbca5 = _0x3a1a23;
    if (_0x237702 == null) return;
    if (h_oaLayer == null) return;
    let _0x1d32da = _0x237702[_0x1cbca5(0xef)],
        _0x587a57 = null;
    if (_0x237702[_0x1cbca5(0x350)] == 0x3) {
        _0x587a57 = new Array();
        let _0x30f60d = _0x237702['aPointOrLineOrPolygon'][_0x1cbca5(0x363)];
        for (let _0x21ecf2 = 0x0; _0x21ecf2 < _0x30f60d; _0x21ecf2++) {
            _0x587a57[_0x1cbca5(0x29a)]({
                'content': _0x237702[_0x1cbca5(0x1ad)][_0x21ecf2]['content'],
                'val': _0x237702['aPointOrLineOrPolygon'][_0x21ecf2][_0x1cbca5(0x247)],
                'aCoords': _0x237702[_0x1cbca5(0x1ad)][_0x21ecf2][_0x1cbca5(0x233)][_0x1cbca5(0x2a5)]()
            });
        }
        __sendLayerTotalTable(_0x587a57, _0x1d32da);
    }
    _0x237702[_0x1cbca5(0x350)] == 0x2e || _0x237702[_0x1cbca5(0x350)] == 0x2f ? _h_mb_callGetODTable(_0x237702[_0x1cbca5(0x263)], _0x237702['sLayerNM']) : __sendLayerTotalTable(_0x237702[_0x1cbca5(0x29d)][_0x1cbca5(0x384)], _0x1d32da), _0x587a57 = null, _0x237702 = null;
}

function _h_getLayerSymbol(_0x59b5d2) {
    if (_0x59b5d2 == null) return;
    if (h_oaLayer == null) return;
    __sendLayerSymbol(_0x59b5d2), _0x59b5d2 = null;
}

function _h_getLayerLabel(_0x39f9c3) {
    if (_0x39f9c3 == null) return;
    if (h_oaLayer == null) return;
    __sendLayerLabel(_0x39f9c3), _0x39f9c3 = null;
}

function _h_selectedPointTableByLatLng_R_Meter(_0x2d0a0e, _0x4db1e0, _0xb08f50, _0x78d3e5) {
    const _0x4192f3 = _0x3a1a23;
    if (h_oaLayer == null) return;
    let _0x31c9b5 = h_oaLayer[_0x2d0a0e][_0x4192f3(0x29d)]['point'],
        _0x1b08e9 = _0x31c9b5[_0x4192f3(0x363)],
        _0x4ef325 = new Array();
    for (let _0x50645c = 0x0; _0x50645c < _0x1b08e9; _0x50645c++) {
        let _0x5b668a = _h_isContainForCiecle(_0x31c9b5[_0x50645c][_0x4192f3(0x2d2)][0x1], _0x31c9b5[_0x50645c][_0x4192f3(0x2d2)][0x0], _0x4db1e0, _0xb08f50, _0x78d3e5);
        if (_0x5b668a == !![]) {
            let _0x3f1bd3 = parseInt(_h_GetDistanceByGeo(_0x31c9b5[_0x50645c][_0x4192f3(0x2d2)][0x1], _0x31c9b5[_0x50645c][_0x4192f3(0x2d2)][0x0], _0x4db1e0, _0xb08f50) + 0.5);
            _0x4ef325[_0x4192f3(0x29a)]({
                'content': _0x31c9b5[_0x50645c][_0x4192f3(0x22e)] + _0x4192f3(0x127) + _0x3f1bd3,
                'label': _0x31c9b5[_0x50645c][_0x4192f3(0x3e6)],
                'weight': _0x31c9b5[_0x50645c][_0x4192f3(0x391)],
                'location': _0x31c9b5[_0x50645c][_0x4192f3(0x2d2)]
            });
        }
    }
    __sendLayerSelectedTable(_0x4ef325, ''), _0x4ef325 = null, _0x31c9b5 = null;
}

function _h_selectedPointByLatLng_R_Meter(_0x5b4f9d, _0x572de9, _0x4ce397, _0x1ce366) {
    const _0x3e6dec = _0x3a1a23;
    if (h_oaLayer == null) return;
    let _0x51e28c = 0x0,
        _0xeb2ded = 0x0;
    if (h_nPreLayerIdx_AreaSeletedPoint != -0x1) h_nPreLayerIdx_AreaSeletedPoint != _0x5b4f9d && _h_unSelectedPoint(h_nPreLayerIdx_AreaSeletedPoint);
    let _0x54fc78 = h_oaLayer[_0x5b4f9d][_0x3e6dec(0x2e7)];
    for (let _0x3483c7 = 0x2; _0x3483c7 <= 0xc; _0x3483c7 = _0x3483c7 + 0x2) {
        let _0x44e8db = h_oaLayer[_0x5b4f9d][_0x3e6dec(0xbe)][_0x3483c7],
            _0x44d219 = _0x44e8db['length'],
            _0x590043 = _0x44d219,
            _0x3ebc8e = 0x0;
        for (let _0x235ddb = 0x0; _0x235ddb < _0x44d219; _0x235ddb++) {
            let _0x1e18cb = _h_isContainForCiecle(_0x44e8db[_0x235ddb][_0x3e6dec(0xc3)]()[_0x3e6dec(0xac)](), _0x44e8db[_0x235ddb][_0x3e6dec(0xc3)]()['getLng'](), _0x572de9, _0x4ce397, _0x1ce366);
            if (_0x1e18cb == !![]) _0x44e8db[_0x235ddb][_0x3e6dec(0x16c)](_0x54fc78), _0x3ebc8e++;
            else _0x44e8db[_0x235ddb][_0x3e6dec(0x16c)](_0x54fc78 / 0x5);
        }
        _0x44e8db = null, _0x44e8db = h_oaLayer[_0x5b4f9d]['aOverlay_ZOOM'][_0x3483c7], _0x44d219 = _0x44e8db[_0x3e6dec(0x363)], _0x590043 = _0x590043 + _0x44d219;
        for (let _0x2a8eda = 0x0; _0x2a8eda < _0x44d219; _0x2a8eda++) {
            let _0x4916f0 = _h_isContainForCiecle(_0x44e8db[_0x2a8eda][_0x3e6dec(0xc3)]()[_0x3e6dec(0xac)](), _0x44e8db[_0x2a8eda][_0x3e6dec(0xc3)]()[_0x3e6dec(0x387)](), _0x572de9, _0x4ce397, _0x1ce366);
            _0x4916f0 == !![] && _0x3ebc8e++;
        }
        _0x44e8db = null, _0x3483c7 == 0x2 && (_0x51e28c = _0x590043, _0xeb2ded = _0x3ebc8e, __sendLayerSelectedCountByArea(_0x51e28c, _0xeb2ded));
    }
    h_nPreLayerIdx_AreaSeletedPoint = _0x5b4f9d, h_nPreLayerIdx_AreaSeletedOD = -0x1, aTmp = null;
}

function _h_selectedPointTableByCoords_R_Meter(_0x981d0f, _0x548c44) {
    const _0x441151 = _0x3a1a23;
    if (h_oaLayer == null) return;
    let _0x2ab713 = h_oaLayer[_0x981d0f][_0x441151(0x29d)]['point'],
        _0x3b0196 = _0x2ab713['length'],
        _0xc7c4d2 = new Array();
    for (let _0xaa28a7 = 0x0; _0xaa28a7 < _0x3b0196; _0xaa28a7++) {
        let _0x1b1557 = _h_isContainForShape(_0x2ab713[_0xaa28a7][_0x441151(0x2d2)][0x1], _0x2ab713[_0xaa28a7]['location'][0x0], _0x548c44);
        _0x1b1557 == !![] && _0xc7c4d2[_0x441151(0x29a)](_0x2ab713[_0xaa28a7]);
    }
    __sendLayerSelectedTable(_0xc7c4d2, ''), _0xc7c4d2 = null, _0x2ab713 = null, _0x548c44 = null;
}

function _h_selectedPointByCoords(_0x1885d4, _0x3be1cc) {
    const _0x58ff9a = _0x3a1a23;
    if (h_oaLayer == null) return;
    let _0x22f604 = 0x0,
        _0x14877e = 0x0;
    if (h_nPreLayerIdx_AreaSeletedPoint != -0x1) h_nPreLayerIdx_AreaSeletedPoint != _0x1885d4 && _h_unSelectedPoint(h_nPreLayerIdx_AreaSeletedPoint);
    let _0x3be8ec = h_oaLayer[_0x1885d4]['fAlpha'];
    for (let _0x2d3de5 = 0x2; _0x2d3de5 <= 0xc; _0x2d3de5 = _0x2d3de5 + 0x2) {
        let _0x311c9c = h_oaLayer[_0x1885d4]['aPointOrLineOrPolygon_Markers_ZOOM'][_0x2d3de5],
            _0x4d80b6 = _0x311c9c['length'],
            _0xdff064 = _0x4d80b6,
            _0x2b6cf2 = 0x0;
        for (let _0x50f544 = 0x0; _0x50f544 < _0x4d80b6; _0x50f544++) {
            let _0x2f367b = _h_isContainForShape(_0x311c9c[_0x50f544][_0x58ff9a(0xc3)]()[_0x58ff9a(0xac)](), _0x311c9c[_0x50f544][_0x58ff9a(0xc3)]()[_0x58ff9a(0x387)](), _0x3be1cc);
            if (_0x2f367b == !![]) _0x311c9c[_0x50f544]['setOpacity'](_0x3be8ec), _0x2b6cf2++;
            else _0x311c9c[_0x50f544][_0x58ff9a(0x16c)](_0x3be8ec / 0x5);
        }
        _0x311c9c = null, _0x311c9c = h_oaLayer[_0x1885d4]['aOverlay_ZOOM'][_0x2d3de5], _0x4d80b6 = _0x311c9c[_0x58ff9a(0x363)], _0xdff064 = _0xdff064 + _0x4d80b6;
        for (let _0x47fa9a = 0x0; _0x47fa9a < _0x4d80b6; _0x47fa9a++) {
            let _0x109520 = _h_isContainForShape(_0x311c9c[_0x47fa9a][_0x58ff9a(0xc3)]()['getLat'](), _0x311c9c[_0x47fa9a][_0x58ff9a(0xc3)]()[_0x58ff9a(0x387)](), _0x3be1cc);
            _0x109520 == !![] && _0x2b6cf2++;
        }
        _0x311c9c = null, _0x2d3de5 == 0x2 && (_0x22f604 = _0xdff064, _0x14877e = _0x2b6cf2, __sendLayerSelectedCountByArea(_0x22f604, _0x14877e));
    }
    h_nPreLayerIdx_AreaSeletedPoint = _0x1885d4, h_nPreLayerIdx_AreaSeletedOD = -0x1, aTmp = null, _0x3be1cc = null;
}

function _h_unSelectedPointTotalLayerByLatLng_R_Meter() {
    const _0x4b0fe8 = _0x3a1a23;
    if (h_oaLayer == null) return;
    if (_h_b_selectedPointTotalLayerByLatLng_R_Meter == ![]) return;
    for (let _0x2f6baf = 0x0; _0x2f6baf < h_oaLayer['length']; _0x2f6baf++) {
        if (h_oaLayer[_0x2f6baf][_0x4b0fe8(0x350)] == 0x5) {
            let _0x46d0bc = _0x2f6baf,
                _0xf12f06 = h_oaLayer[_0x46d0bc][_0x4b0fe8(0x2e7)],
                _0x5d80e5 = 0x0;
            for (let _0x2f4bf8 = 0x2; _0x2f4bf8 <= 0xc; _0x2f4bf8 = _0x2f4bf8 + 0x2) {
                let _0x4b1b2d = h_oaLayer[_0x46d0bc]['aPointOrLineOrPolygon_Markers_ZOOM'][_0x2f4bf8];
                _0x5d80e5 = _0x4b1b2d['length'];
                for (let _0x1fae70 = 0x0; _0x1fae70 < _0x5d80e5; _0x1fae70++) {
                    _0x4b1b2d[_0x1fae70]['setOpacity'](_0xf12f06);
                }
                _0x4b1b2d = null;
            }
            let _0x19a9a = h_oaLayer[_0x46d0bc][_0x4b0fe8(0x393)]['_markers'];
            _0x5d80e5 = _0x19a9a[_0x4b0fe8(0x363)];
            for (let _0x5a12ce = 0x0; _0x5a12ce < _0x5d80e5; _0x5a12ce++) {
                _0x19a9a[_0x5a12ce]['setOpacity'](_0xf12f06);
            }
            _0x19a9a = null;
        }
    }
    _h_b_selectedPointTotalLayerByLatLng_R_Meter = ![];
}
var _h_b_selectedPointTotalLayerByLatLng_R_Meter = ![];

function _h_selectedPointTotalLayerByLatLng_R_Meter(_0x16122a, _0x11801e, _0xf72c41) {
    const _0x51bcd3 = _0x3a1a23;
    if (h_oaLayer == null) return;
    let _0x14c105 = ![];
    if (_h_b_selectedPointTotalLayerByLatLng_R_Meter == !![]) _0x14c105 = !![];
    for (let _0x1a9b4b = 0x0; _0x1a9b4b < h_oaLayer[_0x51bcd3(0x363)]; _0x1a9b4b++) {
        if (h_oaLayer[_0x1a9b4b][_0x51bcd3(0x350)] == 0x5) {
            let _0x46dcaa = _0x1a9b4b,
                _0x428bc5 = h_oaLayer[_0x46dcaa][_0x51bcd3(0x2e7)],
                _0x4de013 = 0x0;
            for (let _0x299152 = 0x2; _0x299152 <= 0xc; _0x299152 = _0x299152 + 0x2) {
                let _0xc5b0f7 = h_oaLayer[_0x46dcaa][_0x51bcd3(0xbe)][_0x299152];
                _0x4de013 = _0xc5b0f7[_0x51bcd3(0x363)];
                for (let _0x399eb0 = 0x0; _0x399eb0 < _0x4de013; _0x399eb0++) {
                    let _0x57e055 = _h_isContainForCiecle(_0xc5b0f7[_0x399eb0]['getPosition']()[_0x51bcd3(0xac)](), _0xc5b0f7[_0x399eb0][_0x51bcd3(0xc3)]()[_0x51bcd3(0x387)](), _0x16122a, _0x11801e, _0xf72c41);
                    if (_0x57e055 == !![]) _0xc5b0f7[_0x399eb0][_0x51bcd3(0x16c)](_0x428bc5);
                    else {
                        if (_0x14c105 == ![]) _0xc5b0f7[_0x399eb0][_0x51bcd3(0x16c)](_0x428bc5 / 0x5);
                    }
                }
                _0xc5b0f7 = null;
            }
            let _0x44c2e6 = h_oaLayer[_0x46dcaa][_0x51bcd3(0x393)][_0x51bcd3(0x1a3)];
            _0x4de013 = _0x44c2e6['length'];
            for (let _0x15dab7 = 0x0; _0x15dab7 < _0x4de013; _0x15dab7++) {
                let _0x1b02d0 = _h_isContainForCiecle(_0x44c2e6[_0x15dab7][_0x51bcd3(0xc3)]()[_0x51bcd3(0xac)](), _0x44c2e6[_0x15dab7]['getPosition']()[_0x51bcd3(0x387)](), _0x16122a, _0x11801e, _0xf72c41);
                _0x1b02d0 == !![] ? _0x44c2e6[_0x15dab7][_0x51bcd3(0x16c)](_0x428bc5) : _0x14c105 == ![] && _0x44c2e6[_0x15dab7][_0x51bcd3(0x16c)](_0x428bc5 / 0x5);
            }
            _0x44c2e6 = null;
        }
    }
    _h_b_selectedPointTotalLayerByLatLng_R_Meter = !![];
}

function _h_selectedPoint(_0x5be993, _0x1ebabb) {
    const _0x35bbb0 = _0x3a1a23;
    if (h_oaLayer == null) return;
    if (h_nPreLayerIdx_AreaSeletedPoint != -0x1) h_nPreLayerIdx_AreaSeletedPoint != _0x5be993 && _h_unSelectedPoint(h_nPreLayerIdx_AreaSeletedPoint);
    let _0x39d8ba = h_oaLayer[_0x5be993][_0x35bbb0(0x2e7)],
        _0x2c0ed4 = h_oaLayer[_0x5be993][_0x35bbb0(0x1ad)][_0x35bbb0(0x1a3)],
        _0x139156 = _0x2c0ed4[_0x35bbb0(0x363)];
    for (let _0x42b6fa = 0x0; _0x42b6fa < _0x139156; _0x42b6fa++) {
        _0x2c0ed4[_0x42b6fa]['setOpacity'](_0x39d8ba / 0x5);
    }
    _0x139156 = _0x1ebabb[_0x35bbb0(0x363)];
    for (let _0x5f27cc = 0x0; _0x5f27cc < _0x139156; _0x5f27cc++) {
        let _0xe7bc52 = _0x1ebabb[_0x5f27cc];
        _0x2c0ed4[_0xe7bc52][_0x35bbb0(0x16c)](_0x39d8ba);
    }
    _0x1ebabb = null, _0x2c0ed4 = null, h_nPreLayerIdx_AreaSeletedPoint = _0x5be993, h_nPreLayerIdx_AreaSeletedOD = -0x1;
}

function _h_unSelectedPoint(_0x16a1f0) {
    const _0x1639a4 = _0x3a1a23;
    if (h_oaLayer == null) return;
    if (_0x16a1f0 == -0x1) _0x16a1f0 = h_nPreLayerIdx_AreaSeletedPoint;
    if (_0x16a1f0 == -0x1) return;
    let _0x40fa7c = h_oaLayer[_0x16a1f0][_0x1639a4(0x2e7)],
        _0x5d138f = h_oaLayer[_0x16a1f0][_0x1639a4(0x1ad)]['_markers'],
        _0x50b485 = _0x5d138f['length'];
    for (let _0x277ce5 = 0x0; _0x277ce5 < _0x50b485; _0x277ce5++) {
        _0x5d138f[_0x277ce5]['setOpacity'](_0x40fa7c);
    }
    if (h_oaLayer[_0x16a1f0][_0x1639a4(0xbe)] != null)
        for (let _0x26a627 = 0x2; _0x26a627 <= 0xc; _0x26a627 = _0x26a627 + 0x2) {
            _0x5d138f = h_oaLayer[_0x16a1f0][_0x1639a4(0xbe)][_0x26a627];
            for (let _0x3bd990 = 0x0; _0x3bd990 < _0x5d138f[_0x1639a4(0x363)]; _0x3bd990++) {
                _0x5d138f[_0x3bd990][_0x1639a4(0x16c)](_0x40fa7c);
            }
            _0x5d138f = null;
        }
    aSelectedIdx = null, _0x5d138f = null;
}

function closeInfoWindow_NoPara() {
    closeInfoWindow(h_oPointMouseOverHM, h_oPointMouseOverMarker);
}

function closeInfoWindow(_0x120646, _0x401b16) {
    const _0x2c6513 = _0x3a1a23;
    if (_0x120646 != null) _h_setMouseOutMarker(_0x120646);
    if (h_oInfowindowForMarker != null) h_oInfowindowForMarker[_0x2c6513(0x376)]();
    h_oInfowindowForMarker = null;
}

function _h_getInfoWindowContentsForDiv(_0x4b829d, _0x376b6c, _0x318158, _0x12800c = -0x1, _0xb3efb8 = -0x1) {
    const _0x427ff3 = _0x3a1a23;
    if (_0x4b829d[_0x427ff3(0x37d)](_0x427ff3(0x13a)) >= 0x0) {
        let _0x7567b6 = _h_getInfoWindowContentsForiFrameDiv(_0x4b829d, _0x376b6c, _0x318158);
        return _0x7567b6;
    }
    _0x4b829d = _h_getRemoveBUFFER_COORDS(_0x4b829d);
    let _0x2ab23b = _0x376b6c + 'px',
        _0x17a672 = _h_getTextWidth(_0x4b829d, _0x2ab23b + '\x20\x27' + h_sFontNM + '\x27');
    _0x17a672 += 0xf, _0x17a672 += 0xf;
    if (_0x17a672 < 0x94) _0x17a672 = 0x94;
    if (_0x17a672 > 0x190) _0x17a672 = 0x190;
    if (h_isMobile == !![] && _0x17a672 > 0xfa) _0x17a672 = 0xfa;
    if (h_isTablet == !![] && _0x17a672 > 0x15e) _0x17a672 = 0x15e;
    let _0x475ed4 = '';
    if (_0x318158 == !![]) _0x475ed4 = _0x427ff3(0x382);
    let _0x301919 = '';
    _0x4b829d = _h_getDivContentCute(_0x4b829d);
    let _0x3a6be0 = '';
    if (h_isMobile == !![] || h_isTablet == !![]) {
        let _0x1338be = '';
        if (_0x12800c >= 0x0 && _0xb3efb8 > 0x0) _0x1338be = _0x427ff3(0x1f9) + _0x12800c + ',' + _0xb3efb8 + ');\x22\x20style=\x22position:absolute;left:3px;background-color:#2DB400;color:white;border-radius:5px;top:2px;font-size:small;\x22>&nbsp;&nbsp;Naver\x20Map&nbsp;&nbsp;</span>' + _0x427ff3(0x2a0) + _0x12800c + ',' + _0xb3efb8 + _0x427ff3(0x24e);
        _0x301919 = _0x427ff3(0xee) + _0x1338be + '<i\x20onclick=\x22closeInfoWindow_NoPara()\x22\x20class=\x22fa\x20fa-times\x22\x20aria-hidden=\x22true\x22></i></div>', _0x3a6be0 = _0x301919 + _0x427ff3(0x172) + _0x475ed4 + '\x20font-size:\x20' + _0x2ab23b + ';\x20width:' + _0x17a672 + _0x427ff3(0x29e) + _0x4b829d + '</div>';
    } else _0x3a6be0 = _0x301919 + '<div\x20style=\x22padding:5px;\x20' + _0x475ed4 + _0x427ff3(0x1a9) + _0x2ab23b + ';\x20width:' + _0x17a672 + 'px;\x22>' + _0x4b829d + _0x427ff3(0xe9);
    return _0x301919 = null, _0x3a6be0;
}

function _h_getDivContentCute(_0x288434) {
    const _0x4de653 = _0x3a1a23;
    let _0x24e941 = '',
        _0x5632f3 = _0x288434[_0x4de653(0x1c4)](_0x4de653(0x16b));
    for (let _0x1299e9 = 0x0; _0x1299e9 < _0x5632f3['length']; _0x1299e9++) {
        if (_0x24e941 != '') _0x24e941 += '<br>';
        _0x24e941 = _0x24e941 + _0x4de653(0x341) + _0x5632f3[_0x1299e9][_0x4de653(0x124)](':', _0x4de653(0x2b9));
    }
    return _0x288434 = null, _0x5632f3 = null, _0x24e941;
}

function sendKakaoMap(_0x3904be, _0x39a9f6) {
    const _0x3a4232 = _0x3a1a23;
    let _0x30a083 = 'https://map.kakao.com/link/to/도착지,' + _0x39a9f6 + ',' + _0x3904be;
    window[_0x3a4232(0x3e2)](_0x30a083, _0x3a4232(0x282));
}

function sendNaverMap(_0x22f440, _0x40f129) {
    const _0x54f505 = _0x3a1a23;
    let _0x1fcfb7 = _0x54f505(0x3b1) + _0x40f129 + _0x54f505(0x249) + _0x22f440 + _0x54f505(0x308);
    window[_0x54f505(0x3e2)](_0x1fcfb7, _0x54f505(0x282));
}

function _h_getInfoWindowContentsForiFrameDiv(_0x12f3f0, _0x44d2c2, _0x22092c) {
    const _0x130c50 = _0x3a1a23;
    let _0x2fe9bf = 0x140,
        _0x3821ed = _0x12f3f0[_0x130c50(0x1c4)]('<br>'),
        _0x3bdd41 = '',
        _0x42ea5d = '',
        _0xe47911 = '';
    for (let _0x310e0e = 0x0; _0x310e0e < _0x3821ed[_0x130c50(0x363)]; _0x310e0e++) {
        let _0x184ce8 = _0x3821ed[_0x310e0e][_0x130c50(0x1c4)]('VIEW_URL:');
        if (_0x184ce8[_0x130c50(0x363)] >= 0x2) _0x3bdd41 = _0x184ce8[0x1];
        else {
            if (_0xe47911 != '') _0xe47911 = _0xe47911 + _0x130c50(0x16b);
            _0xe47911 = _0xe47911 + _0x3821ed[_0x310e0e];
        }
        _0x184ce8 = null;
    }
    _0x42ea5d = _0x130c50(0x264) + _0x130c50(0x307) + _0x3bdd41 + _0x130c50(0x2c5) + _0x130c50(0x122), _0x12f3f0 = _0x42ea5d + _0xe47911, _0x3bdd41 = null, _0x42ea5d = null, _0xe47911 = null;
    let _0x3bcc01 = _0x44d2c2 + 'px',
        _0x32791b = '';
    if (_0x22092c == !![]) _0x32791b = 'text-align:center;';
    let _0x346f9f = '';
    if (h_isMobile == !![] || h_isTablet == !![]) _0x346f9f = _0x130c50(0x114);
    let _0x3dcc81 = _0x346f9f + _0x130c50(0x15a) + _0x32791b + _0x130c50(0x1a9) + _0x3bcc01 + _0x130c50(0x1fc) + (_0x2fe9bf + 0x4) + _0x130c50(0xbf) + _0x12f3f0 + _0x130c50(0xe9);
    return _0x346f9f = null, _0x3dcc81;
}

function _h_checkKeyExistFromObject(_0x2e42b6, _0x3ee5f2) {
    let _0x489ccc = Object['keys'](_0x2e42b6);
    for (var _0x2303f6 in _0x489ccc) {
        if (_0x3ee5f2 == _0x489ccc[_0x2303f6]) return !![];
    }
    return ![];
}

function _h_setMouseOverMarker(_0x11ba22, _0x472a4f, _0x15a34b) {
    const _0xd27f1b = _0x3a1a23;
    if (_0x11ba22 == null) return;
    if (_0x472a4f == null) return;
    h_oPointMouseOverHM = _0x11ba22, h_oPointMouseOverMarker = _0x472a4f, h_oPointMouseOverImage = _0x472a4f[_0xd27f1b(0x22a)]();
    let _0x34e5b0 = _h_getMouseOverUrlByImageMarker_ForKaKao(h_oPointMouseOverImage),
        _0x5a41d5 = 0x0;
    if (_h_checkKeyExistFromObject(_0x472a4f, _0xd27f1b(0x35e)) == !![]) _0x5a41d5 = _0x472a4f[_0xd27f1b(0x35e)];
    let _0x1b9798 = new kakao[(_0xd27f1b(0x12a))][(_0xd27f1b(0x235))](_0x15a34b, _0x15a34b),
        _0x389987 = {
            'offset': new kakao[(_0xd27f1b(0x12a))][(_0xd27f1b(0x29b))](_0x15a34b / 0x2 + _0x5a41d5, _0x15a34b / 0x2)
        },
        _0x49ee80 = new kakao[(_0xd27f1b(0x12a))][(_0xd27f1b(0x28f))](_0x34e5b0, _0x1b9798, _0x389987);
    _0x472a4f[_0xd27f1b(0x10e)](_0x49ee80), _0x472a4f['setZIndex'](_0x472a4f[_0xd27f1b(0x23e)]() + 0x1), _0x11ba22[_0xd27f1b(0x1ad)][_0xd27f1b(0x113)](), _0x11ba22 = null;
}

function _h_setMouseOutMarker(_0x2c52ac) {
    const _0x56beca = _0x3a1a23;
    h_oPointMouseOverMarker != null && (h_oPointMouseOverMarker[_0x56beca(0xad)](h_oPointMouseOverMarker[_0x56beca(0x23e)]() - 0x1), h_oPointMouseOverMarker[_0x56beca(0x10e)](h_oPointMouseOverImage));
    if (_0x2c52ac != null) _0x2c52ac[_0x56beca(0x1ad)]['redraw']();
    h_oPointMouseOverMarker = null, h_oPointMouseOverImage = null, h_oPointMouseOverHM = null, _0x2c52ac = null;
}

function _h_getUrlByImageMarker_ForKaKao(_0xc95c63) {
    const _0x11456d = _0x3a1a23;
    if (_0xc95c63 == null) return;
    let _0x2dc253 = '',
        _0x28b59a = Object[_0x11456d(0x1b9)](_0xc95c63);
    for (var _0x18a26b in _0x28b59a) {
        if (_0xc95c63[_0x28b59a[_0x18a26b]][_0x11456d(0x37d)](_0x11456d(0xd6)) >= 0x0) {
            _0x2dc253 = _0xc95c63[_0x28b59a[_0x18a26b]];
            break;
        }
    }
    return _0x2dc253;
}

function _h_getMouseOverUrlByImageMarker_ForKaKao(_0x5c7f8f) {
    const _0x2f1486 = _0x3a1a23;
    let _0x4be6e4 = _h_getUrlByImageMarker_ForKaKao(_0x5c7f8f),
        _0x583327 = _0x4be6e4[_0x2f1486(0x1c4)]('&');
    for (let _0xc99cae = 0x0; _0xc99cae < _0x583327[_0x2f1486(0x363)]; _0xc99cae++) {
        _0x583327[_0xc99cae][_0x2f1486(0x37d)](_0x2f1486(0x2ad)) == 0x0 && (_0x583327[_0xc99cae] = 'STROKE_COLOR=rgba(91,114,141,1.0)'), _0x583327[_0xc99cae][_0x2f1486(0x37d)](_0x2f1486(0x1d7)) == 0x0 && (_0x583327[_0xc99cae] = 'STROKE_WIDTH=4');
    }
    return _0x583327['join']('&');
}

function _h_getMouseOverShiftUrlByImageMarker_ForKaKao(_0x48aaaf) {
    const _0x1be84d = _0x3a1a23;
    let _0x9a65b1 = _h_getUrlByImageMarker_ForKaKao(_0x48aaaf),
        _0x8ac2 = _0x9a65b1['split']('&');
    for (let _0x2de9cd = 0x0; _0x2de9cd < _0x8ac2[_0x1be84d(0x363)]; _0x2de9cd++) {
        _0x8ac2[_0x2de9cd][_0x1be84d(0x37d)]('STROKE_COLOR=') == 0x0 && (_0x8ac2[_0x2de9cd] = _0x1be84d(0x14d));
    }
    return _0x8ac2['join']('&');
}

function _h_GetPointSizeByLegend(_0x55cf1f, _0x623288) {
    const _0x17c705 = _0x3a1a23;
    let _0x47b0b2 = _0x55cf1f['sLegend']['split']('||')[0x0],
        _0x3e94d1 = _0x55cf1f['sLegend'][_0x17c705(0x1c4)]('||')[0x1],
        _0x1bc248 = _0x47b0b2[_0x17c705(0x1c4)]('^'),
        _0x3d2708 = _0x3e94d1['split']('^'),
        _0x241716 = _0x1bc248[_0x17c705(0x363)],
        _0x3a8525 = 0x0;
    for (let _0x2d4626 = 0x0; _0x2d4626 < _0x241716; _0x2d4626++) {
        if (_0x623288 >= parseFloat(_0x1bc248[_0x2d4626][_0x17c705(0x1c4)]('~')[0x0]) && _0x623288 <= parseFloat(_0x1bc248[_0x2d4626]['split']('~')[0x1])) {
            _0x3a8525 = parseInt(_0x3d2708[_0x2d4626]);
            break;
        }
    }
    return _0x47b0b2 = null, _0x3e94d1 = null, _0x1bc248 = null, _0x3d2708 = null, _0x55cf1f = null, _0x3a8525;
}

function _h_GetPointMaxSizeByLegend(_0xd019b0) {
    const _0x51199b = _0x3a1a23;
    let _0x3932b2 = _0xd019b0[_0x51199b(0x3d1)][_0x51199b(0x1c4)]('^');
    _0xd019b0 = null;
    if (_0x3932b2['length'] <= 0x0) return 0x0;
    return _0x3932b2[_0x3932b2[_0x51199b(0x363)] - 0x1];
}
var h_oProvinceOverlay = null,
    h_oPolyPreSelectPolygon = null,
    h_sPolyStrokeColor = _0x3a1a23(0x111),
    h_nPolyStrokeWeight = 0x1;

function HM_createProvince(_0x1ff646, _0x541140, _0x2439a0, _0x53eaa3, _0xfa130e, _0x5db7b1, _0x1562b7) {
    const _0x906870 = _0x3a1a23;
    _0x541140 = _h_replacePercentFromUrl(_0x541140), _h_setColorMap(h_oMap, h_divMap);
    if (h_oProvinceOverlay == null) h_oProvinceOverlay = new kakao[(_0x906870(0x12a))][(_0x906870(0x2b3))]({});
    if (h_oInfowindowForPoly_Line == null) h_oInfowindowForPoly_Line = new kakao[(_0x906870(0x12a))][(_0x906870(0x25e))]({
        'removable': !![],
        'zIndex': 0x96b43f
    });
    _h_setProgress2(h_divMap['id']), oHM = {
        'UID': Date[_0x906870(0x14c)]() + Math[_0x906870(0x365)](),
        'sCallUrl': _0x541140,
        'map': h_oMap,
        'fX': 0x0,
        'fY': 0x0,
        'fAlpha': _0x1ff646,
        'sUrl': '',
        'sLegend': '',
        'nW': 0x0,
        'nH': 0x0,
        'oExtent': null,
        'div_map': h_divMap,
        'nType': 0x3,
        'aPointOrLineOrPolygon': null,
        'aLabel': null,
        'nLabelMinZoom': _0xfa130e,
        'nLabelMaxZoom': _0x5db7b1,
        'sLayerNM': _0x2439a0,
        'sDataString': '',
        'zIndex': 0x0,
        'bVisible': _0x53eaa3,
        'heatmapOverlay': null,
        'sPointSymbolType': null,
        'sPointSymbolColor': null,
        'sLABEL_CONTORL': _0x1562b7,
        'nAuto': ![]
    }, _h_GetPolygonFromUrl(oHM), _h_addLayerToTOC(oHM), oHM = null;
}

function _h_GetPolygonFromUrl(_0x4d2067) {
    const _0x521892 = _0x3a1a23;
    let _0x56c294 = _0x521892(0x18b),
        _0x18299a = 0x1,
        _0xb12635 = _h_getParameterByUrl(_0x4d2067[_0x521892(0x131)], _0x521892(0x226)),
        _0x5692f5 = ![],
        _0x1641f7 = '',
        _0x1f2bf9 = 0x0;
    _0xb12635[_0x521892(0x37d)](_0x521892(0x34f)) > 0x0 && (_0x5692f5 = !![], _0x1641f7 = _0xb12635[_0x521892(0x1c4)]('|')[0x3], _0x1f2bf9 = parseInt(_0xb12635['split']('|')[0x2][_0x521892(0xd2)]('OUTLINE:', '')), _0x56c294 = _0x1641f7, _0x18299a = _0x1f2bf9);
    _h_setProgressStart();
    let _0x2300a5 = _0x4d2067[_0x521892(0x131)],
        _0x1a23df = _0x2300a5;
    _0x2300a5 = _h_GetBase64Url(_0x2300a5);
    let _0xe1baf0 = new XMLHttpRequest();
    _0xe1baf0['addEventListener'](_0x521892(0x1ce), _0x862ff7), _0xe1baf0[_0x521892(0x332)] = function() {
        const _0x390ce1 = _0x521892;
        alert(_0x390ce1(0x279));
    };
    if (_0x2300a5[_0x521892(0x363)] < 0x1f4) _0xe1baf0[_0x521892(0x3e2)](_0x521892(0x201), _0x2300a5), _0xe1baf0[_0x521892(0x284)]();
    else {
        let _0x2bd605 = _0x2300a5['split'](_0x521892(0x31d));
        _0xe1baf0['open'](_0x521892(0x159), _0x2bd605[0x0] + _0x521892(0x11a), !![]), _0xe1baf0['setRequestHeader'](_0x521892(0x353), _0x521892(0xd7)), _0xe1baf0[_0x521892(0x284)](_0x2bd605[0x1]), _0x2bd605 = null;
    }

    function _0x862ff7() {
        const _0xf8bf64 = _0x521892;
        _0xe1baf0 = null;
        let _0x47dc81 = this[_0xf8bf64(0x254)];
        if (_0x47dc81['length'] < 0xa || _0x47dc81['substr'](0x0, 0x6) == _0xf8bf64(0x12b)) {
            if (_0x47dc81[_0xf8bf64(0x37d)](h_csNODATA) > 0x0) _h_showErrorAlertForBizFile(_0xf8bf64(0xf1) + _0x47dc81, _0x1a23df);
            else _h_showErrorAlertForBizFile('\x20BIZ\x20ERROR:\x20' + _0x47dc81, _0x1a23df);
            HM_removeHeatMap(_0x4d2067), _h_removeLayerFromTOCByOHM(_0x4d2067), _h_setProgressStop();
            return;
        } else {
            if (_0x47dc81[_0xf8bf64(0x12e)](0x0, 0x4) == 'SQL:') {
                _0x47dc81 = _0x47dc81[_0xf8bf64(0x36a)](0x4), _h_copyToClipboard(_0x47dc81), HM_removeHeatMap(_0x4d2067), _h_removeLayerFromTOCByOHM(_0x4d2067), _h_setProgressStop();
                return;
            }
        }
        _0x1a23df = null;
        let _0x1885ca = _0x47dc81['split']('#|#');
        _0x47dc81 = null;
        let _0xe6b0df = _0x1885ca[0x0],
            _0x408eb3 = _0x1885ca[0x1];
        _0x4d2067[_0xf8bf64(0xb1)] = _0xe6b0df, _0x4d2067[_0xf8bf64(0x3d1)] = _0x408eb3;
        let _0x46e2a5 = new Array(),
            _0x211f5b = new Array(),
            _0x2447ea = _0x408eb3[_0xf8bf64(0x1c4)]('||')[0x0][_0xf8bf64(0x1c4)]('^'),
            _0x5806de = _0x2447ea[_0xf8bf64(0x363)];
        for (let _0x376854 = 0x0; _0x376854 < _0x5806de; _0x376854++) _0x46e2a5[_0xf8bf64(0x29a)](Number(_0x2447ea[_0x376854][_0xf8bf64(0x1c4)]('~')[0x0]));
        _0x2447ea = _0x408eb3[_0xf8bf64(0x1c4)]('||')[0x1][_0xf8bf64(0x1c4)]('^');
        for (let _0xbe8069 = 0x0; _0xbe8069 < _0x5806de; _0xbe8069++) _0x211f5b[_0xf8bf64(0x29a)](_0x2447ea[_0xbe8069]);
        let _0x36c301 = new XMLHttpRequest();
        _0x36c301[_0xf8bf64(0x3e0)]('load', _0x144839), _0x36c301['open'](_0xf8bf64(0x201), _0x4d2067[_0xf8bf64(0xb1)]), _0x36c301[_0xf8bf64(0x332)] = function() {
            const _0x4683b4 = _0xf8bf64;
            _h_setProgressStop(), _h_showErrorAlert(_0x4683b4(0x1cf));
        }, _0x36c301[_0xf8bf64(0x284)]();

        function _0x144839() {
            const _0x32d4e0 = _0xf8bf64;
            _h_setProgressStop(), _h_setProgressTemplate(0x2), _0x36c301 = null;
            let _0x39e8c7 = JSON[_0x32d4e0(0x2cc)](this[_0x32d4e0(0x254)]);
            if (_0x4d2067[_0x32d4e0(0x295)] != '') HM_setJsonLabel(_0x4d2067[_0x32d4e0(0x295)], _0x39e8c7[_0x32d4e0(0xda)]);
            let _0x162b0a = new Array(),
                _0x12ac44 = _0x39e8c7[_0x32d4e0(0xda)][_0x32d4e0(0x363)],
                _0x3eba94 = null,
                _0x6dc5ea = null,
                _0x505d90 = 0x0,
                _0x1ef9bb = parseInt(_0x12ac44 / 0xa);
            if (_0x1ef9bb < 0xa) _0x1ef9bb = 0xa;
            let _0xc2ed93 = _0x4d2067['map'];
            if (_0x4d2067[_0x32d4e0(0x310)] == ![]) _0xc2ed93 = null;
            let _0x114770 = _0xc2ed93;
            if (_0x114770 != null) {
                if (_0x4d2067[_0x32d4e0(0x383)][_0x32d4e0(0x330)]() < _0x4d2067[_0x32d4e0(0x253)] || _0x4d2067['map'][_0x32d4e0(0x330)]() > _0x4d2067[_0x32d4e0(0x137)]) _0x114770 = null;
            }
            let _0x2f5d12 = setInterval(function() {
                const _0x46bfd6 = _0x32d4e0;
                let _0x2fbf6a = 0x0;
                for (let _0x1ebd3c = _0x505d90; _0x1ebd3c < _0x12ac44; _0x1ebd3c++) {
                    if (_0x2fbf6a + 0x1 >= _0x1ef9bb) break;
                    _h_setProgressSet(_0x1ebd3c + 0x1, _0x12ac44);
                    let _0x70b58d = _0x39e8c7['polygon'][_0x1ebd3c][_0x46bfd6(0xec)];
                    _0x70b58d = _0x70b58d[_0x46bfd6(0xb9)](), _0x70b58d = _0x70b58d[_0x46bfd6(0x1c4)]('#INNER#')[_0x46bfd6(0x163)]('#APPEND#');
                    let _0x1ac0a0 = _0x70b58d['split'](_0x46bfd6(0x145));
                    _0x70b58d = null;
                    let _0x4911f6 = _0x39e8c7[_0x46bfd6(0xda)][_0x1ebd3c]['value'],
                        _0x3e7f5c = _0x39e8c7[_0x46bfd6(0xda)][_0x1ebd3c][_0x46bfd6(0x22e)],
                        _0x39d320 = _0x39e8c7[_0x46bfd6(0xda)][_0x1ebd3c]['color'],
                        _0x3aecf4 = new Array(),
                        _0x1bb638 = new Array();
                    for (let _0x4f62e1 = 0x0; _0x4f62e1 < _0x1ac0a0[_0x46bfd6(0x363)]; _0x4f62e1++) {
                        let _0x233538 = _0x1ac0a0[_0x4f62e1]['split'](','),
                            _0x4a220a = new Array();
                        for (k = 0x0; k < _0x233538['length']; k++) {
                            _0x4a220a['push'](new kakao[(_0x46bfd6(0x12a))][(_0x46bfd6(0x32b))](_0x233538[k][_0x46bfd6(0x1c4)]('^')[0x1], _0x233538[k][_0x46bfd6(0x1c4)]('^')[0x0]));
                            if (_0x4f62e1 == 0x0) _0x1bb638[_0x46bfd6(0x29a)]([parseFloat(_0x233538[k]['split']('^')[0x0]), parseFloat(_0x233538[k][_0x46bfd6(0x1c4)]('^')[0x1])]);
                        }
                        if (_0x4a220a[0x0][_0x46bfd6(0x27e)](_0x4a220a[_0x4a220a[_0x46bfd6(0x363)] - 0x1]) == ![]) _0x4a220a[_0x46bfd6(0x29a)](_0x4a220a[0x0]);
                        _0x3aecf4['push'](_0x4a220a), _0x4a220a = null, _0x233538 = null;
                    }
                    let _0xbf69f0 = null;
                    _0x5692f5 == ![] ? _0xbf69f0 = new kakao[(_0x46bfd6(0x12a))]['Polygon']({
                        'map': _0xc2ed93,
                        'path': _0x3aecf4,
                        'strokeWeight': _0x18299a,
                        'strokeColor': _0x56c294,
                        'strokeOpacity': _0x4d2067[_0x46bfd6(0x2e7)] + 0.1,
                        'fillColor': _0x39d320,
                        'fillOpacity': _0x4d2067[_0x46bfd6(0x2e7)],
                        'zIndex': _0x4d2067[_0x46bfd6(0x205)]
                    }) : _0xbf69f0 = new kakao[(_0x46bfd6(0x12a))][(_0x46bfd6(0x3cf))]({
                        'map': _0xc2ed93,
                        'path': _0x3aecf4,
                        'strokeWeight': _0x18299a,
                        'strokeColor': _0x56c294,
                        'strokeOpacity': _0x4d2067[_0x46bfd6(0x2e7)] + 0.1,
                        'zIndex': _0x4d2067[_0x46bfd6(0x205)]
                    });
                    _0x162b0a[_0x46bfd6(0x29a)]({
                        'val': _0x4911f6,
                        'content': _0x3e7f5c,
                        'poly': _0xbf69f0
                    }), polygon = null, _0x3aecf4 = null, _0x1ac0a0 = null, _0x6dc5ea = null, _0x3e7f5c = null;
                    if (_0x39e8c7[_0x46bfd6(0xda)][_0x1ebd3c][_0x46bfd6(0x3e6)] != null) {
                        if (_0x39e8c7[_0x46bfd6(0xda)][_0x1ebd3c]['label'] != '') {
                            _0x3eba94 == null && (_0x3eba94 = new kakao[(_0x46bfd6(0x12a))][(_0x46bfd6(0x2f5))]({
                                'map': _0x114770,
                                'averageCenter': !![],
                                'minLevel': 0x13
                            }));
                            let _0x4ebd60 = _0x39e8c7['polygon'][_0x1ebd3c][_0x46bfd6(0x3e6)],
                                _0x12caca = '',
                                _0x8bead7 = 0xf,
                                _0x266721 = _0x46bfd6(0x3d7),
                                _0x33e631 = 'rgba(255,255,255,0.9)',
                                _0x1b582e = 'LEFT',
                                _0x533ec7 = 0x0,
                                _0x48d07b = 0x0,
                                _0x86741e = 0x0,
                                _0x573698 = 0x0,
                                _0x5d542b = polylabel([_0x1bb638], 0.000001);
                            _0x86741e = _0x5d542b[0x0], _0x573698 = _0x5d542b[0x1], _0x5d542b = null;
                            _0x4ebd60[_0x46bfd6(0x1c4)](_0x46bfd6(0x26f))[_0x46bfd6(0x363)] > 0x1 && (_0x12caca = _0x4ebd60[_0x46bfd6(0x1c4)](_0x46bfd6(0x26f))[0x0], _0x4ebd60 = _0x4ebd60[_0x46bfd6(0x1c4)]('#|#')[0x1]);
                            if (_0x12caca != '') {
                                _0x12caca = _0x12caca[_0x46bfd6(0xd2)]('{', ''), _0x12caca = _0x12caca[_0x46bfd6(0xd2)]('}', ''), _0x12caca = _0x12caca['split']('\x20')[_0x46bfd6(0x163)]('');
                                let _0x515a2d = _0x12caca[_0x46bfd6(0x1c4)](';'),
                                    _0x3b25b0 = _0x515a2d['length'];
                                for (let _0x4ae1db = 0x0; _0x4ae1db < _0x3b25b0; _0x4ae1db++) {
                                    _0x515a2d[_0x4ae1db] = _0x515a2d[_0x4ae1db]['trim']();
                                    if (_0x515a2d[_0x4ae1db][_0x46bfd6(0x37d)](_0x46bfd6(0xf8)) == 0x0) _0x266721 = _0x515a2d[_0x4ae1db][_0x46bfd6(0xd2)](_0x46bfd6(0xf8), '');
                                    else {
                                        if (_0x515a2d[_0x4ae1db][_0x46bfd6(0x37d)]('테두리:') == 0x0) _0x33e631 = _0x515a2d[_0x4ae1db]['replace'](_0x46bfd6(0x3b5), '');
                                        else {
                                            if (_0x515a2d[_0x4ae1db][_0x46bfd6(0x37d)]('크기:') == 0x0) _0x8bead7 = parseInt(_0x515a2d[_0x4ae1db]['replace'](_0x46bfd6(0x230), ''));
                                            else {
                                                if (_0x515a2d[_0x4ae1db][_0x46bfd6(0x37d)](_0x46bfd6(0x2b4)) == 0x0) _0x1b582e = _0x515a2d[_0x4ae1db]['replace'](_0x46bfd6(0x2b4), '');
                                                else {
                                                    if (_0x515a2d[_0x4ae1db]['indexOf'](_0x46bfd6(0x192)) == 0x0) _0x533ec7 = parseInt(_0x515a2d[_0x4ae1db][_0x46bfd6(0xd2)](_0x46bfd6(0x192), ''));
                                                    else {
                                                        if (_0x515a2d[_0x4ae1db][_0x46bfd6(0x37d)](_0x46bfd6(0x293)) == 0x0) _0x48d07b = parseInt(_0x515a2d[_0x4ae1db][_0x46bfd6(0xd2)](_0x46bfd6(0x293), ''));
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                _0x515a2d = null;
                            }
                            let _0xaaed4d = 0x4,
                                _0x1bdcf0 = _0x8bead7 + parseInt(_0xaaed4d * 0x2),
                                _0x3716d0 = _0x8bead7 * _0x4ebd60[_0x46bfd6(0x363)] + _0xaaed4d;
                            if (_0x4ebd60[_0x46bfd6(0x37d)](_0x46bfd6(0x16b)) >= 0x0) {
                                let _0x5b2239 = _0x4ebd60['split'](_0x46bfd6(0x16b)),
                                    _0x4138d8 = _0x5b2239[_0x46bfd6(0x363)];
                                _0x1bdcf0 = _0x1bdcf0 * _0x4138d8 + 0x1 * _0x4138d8;
                                let _0x365243 = 0x0;
                                for (let _0x35a6a9 = 0x0; _0x35a6a9 < _0x4138d8; _0x35a6a9++)
                                    if (_0x5b2239[_0x35a6a9][_0x46bfd6(0x363)] > _0x365243) _0x365243 = _0x5b2239[_0x35a6a9][_0x46bfd6(0x363)];
                                _0x3716d0 = _0x8bead7 * _0x365243 + _0xaaed4d, _0x5b2239 = null;
                            }
                            let _0x197139 = _h_getTextWidth(_0x4ebd60, _0x8bead7 + _0x46bfd6(0xe8) + h_sFontNM + '\x27');
                            _0x3716d0 = _0x197139 + _0xaaed4d;
                            let _0x160ddc = document[_0x46bfd6(0x1c1)][0x0]['href'],
                                _0x2bd582 = h_sFontNM;
                            if (_0x2bd582 == 'NEXON\x20Lv1\x20Gothic\x20OTF\x20Light') _0x2bd582 = _0x46bfd6(0x354);
                            else {
                                if (_0x2bd582 == '\x27NEXON\x20Lv1\x20Gothic\x20OTF\x20Light\x27') _0x2bd582 = _0x46bfd6(0x354);
                                else {
                                    if (_0x2bd582 == _0x46bfd6(0x2ce)) _0x2bd582 = _0x46bfd6(0x354);
                                }
                            }
                            _0x1bdcf0 /= 1.2, _0x3716d0 *= 1.1, _0x1bdcf0 *= 1.1, _0x8bead7 *= 1.1, _0xaaed4d *= 0x2;
                            let _0x23e8bf = _0x46bfd6(0x21b) + _0x46bfd6(0x14e) + _0x46bfd6(0x327) + _0x160ddc + _0x46bfd6(0x256) + _0x4ebd60 + _0x46bfd6(0x14b) + _0x2bd582 + _0x46bfd6(0x2e2) + _0x266721 + '&STROKE_COLOR=' + _0x33e631 + _0x46bfd6(0x3e8) + _0xaaed4d + _0x46bfd6(0x38c) + _0x8bead7 + '&WIDTH=' + _0x3716d0 + _0x46bfd6(0x1b0) + _0x1bdcf0;
                            _0x160ddc = null;
                            let _0x257185 = new kakao[(_0x46bfd6(0x12a))][(_0x46bfd6(0x235))](_0x3716d0, _0x1bdcf0),
                                _0xd5ab89 = 0x0,
                                _0x386fa7 = 0x0;
                            _0x1b582e[_0x46bfd6(0xb9)]() == _0x46bfd6(0x32d) && (_0xd5ab89 = _0x3716d0 / 0x2, _0x386fa7 = _0x1bdcf0 / 0x2);
                            _0x1b582e[_0x46bfd6(0xb9)]() == 'LEFT' && (_0xd5ab89 = _0x3716d0, _0x386fa7 = _0x1bdcf0 / 0x2);
                            _0x1b582e[_0x46bfd6(0xb9)]() == _0x46bfd6(0x3a2) && (_0xd5ab89 = 0x0, _0x386fa7 = _0x1bdcf0 / 0x2);
                            _0x533ec7 *= -0x1, _0xd5ab89 += _0x533ec7, _0x386fa7 += _0x48d07b;
                            let _0x29b83f = {
                                    'offset': new kakao[(_0x46bfd6(0x12a))][(_0x46bfd6(0x29b))](_0xd5ab89, _0x386fa7)
                                },
                                _0x37072f = new kakao[(_0x46bfd6(0x12a))][(_0x46bfd6(0x28f))](_0x23e8bf, _0x257185, _0x29b83f),
                                _0x16e77d = new kakao[(_0x46bfd6(0x12a))]['Marker']({
                                    'position': new kakao[(_0x46bfd6(0x12a))]['LatLng'](_0x573698, _0x86741e),
                                    'image': _0x37072f,
                                    'zIndex': _0x4d2067[_0x46bfd6(0x205)],
                                    'opacity': _0x4d2067[_0x46bfd6(0x2e7)],
                                    'clickable': !![]
                                });
                            _0x3eba94[_0x46bfd6(0xbb)](_0x16e77d), _0x257185 = null, _0x29b83f = null, _0x37072f = null, _0x16e77d = null;
                        }
                    }
                    _0x1bb638 = null, _0x2fbf6a++;
                }
                _0x505d90 += _0x2fbf6a;
                if (_0x505d90 >= _0x12ac44) {
                    _0x4d2067[_0x46bfd6(0x1ad)] = _0x162b0a, _0x4d2067[_0x46bfd6(0x393)] = _0x3eba94;
                    for (let _0x2040bf = 0x0; _0x2040bf < _0x162b0a[_0x46bfd6(0x363)]; _0x2040bf++) {
                        _h_setEventForPolygon(_0x162b0a[_0x2040bf][_0x46bfd6(0x233)], _0x162b0a[_0x2040bf]['content'], _0x18299a, _0x56c294);
                        if (_0x3eba94 != null) _h_setEventForPolygonLabel(_0x3eba94[_0x46bfd6(0x1a3)][_0x2040bf], _0x162b0a[_0x2040bf][_0x46bfd6(0x233)]);
                    }
                    _h_setProgressStop(), _0x4d2067 = null, _0x162b0a = null, _0x39e8c7 = null, clearInterval(_0x2f5d12);
                }
            }, 0x1);
        }
    }
}
var h_aCallStackArray = [],
    h_nCallStackLoc = 0x0;

function HM_createAutoHeatMap(_0x680acc, _0x479d67, _0x321b2f, _0x5e55f1, _0x34701a) {
    const _0x52addd = _0x3a1a23;
    if (_0x479d67[_0x52addd(0x37d)](_0x52addd(0xf9)) < 0x0 && _0x479d67[_0x52addd(0x37d)](_0x52addd(0x3df)) < 0x0 && _0x479d67[_0x52addd(0x37d)]('/BOTTOM_X=') < 0x0) _0x479d67 = _0x479d67 + '&BOTTOM_X=#BOTTOM_X#';
    if (_0x479d67['indexOf']('&BOTTOM_Y=') < 0x0 && _0x479d67[_0x52addd(0x37d)](_0x52addd(0x1fa)) < 0x0 && _0x479d67['indexOf'](_0x52addd(0x242)) < 0x0) _0x479d67 = _0x479d67 + '&BOTTOM_Y=#BOTTOM_Y#';
    if (_0x479d67[_0x52addd(0x37d)](_0x52addd(0x218)) < 0x0 && _0x479d67['indexOf'](_0x52addd(0x222)) < 0x0 && _0x479d67[_0x52addd(0x37d)](_0x52addd(0x36f)) < 0x0) _0x479d67 = _0x479d67 + _0x52addd(0x13d);
    if (_0x479d67[_0x52addd(0x37d)](_0x52addd(0x356)) < 0x0 && _0x479d67[_0x52addd(0x37d)](_0x52addd(0x3be)) < 0x0 && _0x479d67['indexOf'](_0x52addd(0xe0)) < 0x0) _0x479d67 = _0x479d67 + _0x52addd(0x32e);
    if (_0x479d67[_0x52addd(0x37d)](_0x52addd(0x1ac)) < 0x0 && _0x479d67['indexOf'](_0x52addd(0x179)) < 0x0 && _0x479d67[_0x52addd(0x37d)]('/W=') < 0x0) _0x479d67 = _0x479d67 + _0x52addd(0x316);
    if (_0x479d67['indexOf'](_0x52addd(0xe3)) < 0x0 && _0x479d67[_0x52addd(0x37d)](_0x52addd(0x244)) < 0x0 && _0x479d67[_0x52addd(0x37d)](_0x52addd(0x150)) < 0x0) _0x479d67 = _0x479d67 + _0x52addd(0x2a1);
    _0x479d67 = _h_replacePercentFromUrl(_0x479d67);
    let _0x19baad = 0x1;
    if (_0x479d67[_0x52addd(0x37d)]('&METHOD=11&') >= 0x0 || _0x479d67[_0x52addd(0x37d)](_0x52addd(0x3bb)) >= 0x0 || _0x479d67[_0x52addd(0x37d)]('METHOD=11&') >= 0x0) _0x19baad = 0x2;
    _h_setColorMap(h_oMap, h_divMap), _h_setProgress2(h_divMap['id']), oHM = {
        'UID': Date[_0x52addd(0x14c)]() + Math[_0x52addd(0x365)](),
        'sCallUrl': _0x479d67,
        'map': h_oMap,
        'fX': 0x0,
        'fY': 0x0,
        'fAlpha': _0x680acc,
        'sUrl': '',
        'sLegend': '',
        'nW': 0x0,
        'nH': 0x0,
        'oExtent': null,
        'div_map': h_divMap,
        'nType': _0x19baad,
        'aPointOrLineOrPolygon': null,
        'aLabel': null,
        'nLabelMinZoom': -0x1,
        'nLabelMaxZoom': -0x1,
        'sLayerNM': _0x321b2f,
        'sDataString': _0x34701a,
        'zIndex': 0x0,
        'bVisible': _0x5e55f1,
        'heatmapOverlay': null,
        'sPointSymbolType': null,
        'sPointSymbolColor': null,
        'nAuto': !![]
    }, h_aCallStackArray[oHM[_0x52addd(0x263)]] = h_nCallStackLoc, _h_GetImageFromUrl(oHM, h_nCallStackLoc), _h_addLayerToTOC(oHM), oHM = null;
}

function HM_createHeatMap(_0x3cd4c4, _0x595e8e) {
    const _0x5ddca0 = _0x3a1a23;
    if (_0x595e8e['indexOf'](_0x5ddca0(0xf9)) < 0x0 && _0x595e8e[_0x5ddca0(0x37d)](_0x5ddca0(0x3df)) < 0x0 && _0x595e8e['indexOf'](_0x5ddca0(0x2be)) < 0x0) _0x595e8e = _0x595e8e + _0x5ddca0(0x28a);
    if (_0x595e8e['indexOf'](_0x5ddca0(0x3c7)) < 0x0 && _0x595e8e['indexOf'](_0x5ddca0(0x1fa)) < 0x0 && _0x595e8e[_0x5ddca0(0x37d)]('/BOTTOM_Y=') < 0x0) _0x595e8e = _0x595e8e + '&BOTTOM_Y=#BOTTOM_Y#';
    if (_0x595e8e['indexOf'](_0x5ddca0(0x218)) < 0x0 && _0x595e8e['indexOf']('?TOP_X=') < 0x0 && _0x595e8e[_0x5ddca0(0x37d)](_0x5ddca0(0x36f)) < 0x0) _0x595e8e = _0x595e8e + '&TOP_X=#TOP_X#';
    if (_0x595e8e['indexOf']('&TOP_Y=') < 0x0 && _0x595e8e[_0x5ddca0(0x37d)](_0x5ddca0(0x3be)) < 0x0 && _0x595e8e[_0x5ddca0(0x37d)]('/TOP_Y=') < 0x0) _0x595e8e = _0x595e8e + _0x5ddca0(0x32e);
    if (_0x595e8e[_0x5ddca0(0x37d)](_0x5ddca0(0x1ac)) < 0x0 && _0x595e8e[_0x5ddca0(0x37d)](_0x5ddca0(0x179)) < 0x0 && _0x595e8e['indexOf']('/W=') < 0x0) _0x595e8e = _0x595e8e + '&W=#W#';
    if (_0x595e8e[_0x5ddca0(0x37d)]('&H=') < 0x0 && _0x595e8e[_0x5ddca0(0x37d)](_0x5ddca0(0x244)) < 0x0 && _0x595e8e['indexOf'](_0x5ddca0(0x150)) < 0x0) _0x595e8e = _0x595e8e + _0x5ddca0(0x2a1);
    _0x595e8e = _h_replacePercentFromUrl(_0x595e8e);
    let _0x283f74 = 0x1;
    if (_0x595e8e[_0x5ddca0(0x37d)](_0x5ddca0(0x302)) >= 0x0 || _0x595e8e[_0x5ddca0(0x37d)]('&METHOD=11') >= 0x0 || _0x595e8e['indexOf'](_0x5ddca0(0x238)) >= 0x0) _0x283f74 = 0x2;
    _h_setColorMap(h_oMap, h_divMap), _h_setProgress2(h_divMap['id']), oHM = {
        'UID': Date[_0x5ddca0(0x14c)]() + Math[_0x5ddca0(0x365)](),
        'sCallUrl': _0x595e8e,
        'map': h_oMap,
        'fX': 0x0,
        'fY': 0x0,
        'fAlpha': _0x3cd4c4,
        'sUrl': '',
        'sLegend': '',
        'nW': 0x0,
        'nH': 0x0,
        'oExtent': null,
        'div_map': h_divMap,
        'nType': _0x283f74,
        'aPointOrLineOrPolygon': null,
        'aLabel': null,
        'nLabelMinZoom': -0x1,
        'nLabelMaxZoom': -0x1,
        'sLayerNM': _sLayerNM,
        'sDataString': '',
        'zIndex': 0x0,
        'bVisible': !![],
        'heatmapOverlay': null,
        'sPointSymbolType': null,
        'sPointSymbolColor': null,
        'nAuto': ![]
    }, _h_GetImageFromUrl(oHM, -0x1), oHM = null;
}

function _h_copyToClipboard(_0x37fef0) {
    const _0x166d9f = _0x3a1a23;
    Swal[_0x166d9f(0x324)]({
        'icon': _0x166d9f(0x219),
        'title': _0x166d9f(0x115),
        'text': _0x37fef0
    }), _0x37fef0 = null;
}

function _h_GetImageFromUrl(_0x30822b, _0x1c9a1b) {
    const _0x86dcc8 = _0x3a1a23;
    if (h_bNaver == !![]) {
        _h_GetImageFromUrlForNaver(_0x30822b, _0x1c9a1b);
        return;
    }
    _h_setProgressStart();
    let _0x585fe6 = _0x30822b[_0x86dcc8(0x383)][_0x86dcc8(0x20b)]()[_0x86dcc8(0x387)](),
        _0x30d2a2 = _0x30822b[_0x86dcc8(0x383)][_0x86dcc8(0x20b)]()[_0x86dcc8(0xac)](),
        _0x5460ef = _0x30822b[_0x86dcc8(0x1e6)][_0x86dcc8(0x2d5)],
        _0x5c0e81 = _0x30822b[_0x86dcc8(0x1e6)][_0x86dcc8(0xba)],
        _0x471648 = _0x30822b['map'][_0x86dcc8(0x2a3)](),
        _0x483ecd = _0x30822b[_0x86dcc8(0x383)];
    if (_0x30822b[_0x86dcc8(0x310)] == ![]) _0x483ecd = null;
    let _0x3c0515 = _0x30822b['sCallUrl'];
    _0x3c0515 = _0x3c0515[_0x86dcc8(0xd2)](_0x86dcc8(0x1db), _0x471648[_0x86dcc8(0x31e)]()[_0x86dcc8(0x387)]()), _0x3c0515 = _0x3c0515[_0x86dcc8(0xd2)](_0x86dcc8(0x2b2), _0x471648['getSouthWest']()[_0x86dcc8(0xac)]()), _0x3c0515 = _0x3c0515[_0x86dcc8(0xd2)]('#TOP_X#', _0x471648[_0x86dcc8(0x3ac)]()[_0x86dcc8(0x387)]()), _0x3c0515 = _0x3c0515['replace'](_0x86dcc8(0x3a7), _0x471648['getNorthEast']()[_0x86dcc8(0xac)]()), _0x3c0515 = _0x3c0515[_0x86dcc8(0xd2)]('#W#', _0x5460ef), _0x3c0515 = _0x3c0515['replace'](_0x86dcc8(0x2c8), _0x5c0e81);
    _0x30822b['sLayerNM']['indexOf']('◌') >= 0x0 && (_0x30822b[_0x86dcc8(0x350)] == 0x1 && h_oMap[_0x86dcc8(0x330)]() <= 0x3 && (_0x3c0515 = _0x3c0515['replace'](_0x86dcc8(0x1e7), _0x86dcc8(0x3c1))));
    let _0x3c32c4 = ![];
    if (_0x3c0515['indexOf'](_0x86dcc8(0xf2)) > 0x0 || _0x3c0515['indexOf'](_0x86dcc8(0x3dd)) > 0x0) _0x3c32c4 = !![];
    let _0x380a28 = _0x3c0515,
        _0x46805b = new XMLHttpRequest();
    _0x46805b[_0x86dcc8(0x3e0)](_0x86dcc8(0x1ce), _0x340cfb), _0x46805b['onerror'] = function() {
        const _0x30acb6 = _0x86dcc8;
        alert(_0x30acb6(0x279));
    };
    if (_0x3c32c4 == ![]) _0x3c0515 = _h_GetBase64Url(_0x3c0515), _0x46805b[_0x86dcc8(0x3e2)](_0x86dcc8(0x201), _0x3c0515), _0x46805b[_0x86dcc8(0x284)]();
    else {
        let _0x9beab2 = _0x30822b[_0x86dcc8(0x383)]['getLevel'](),
            _0x1f12f9 = '';
        if (_0x30822b[_0x86dcc8(0x3ae)] != null) {
            let _0x3ef82d = !![];
            if (_0x30822b[_0x86dcc8(0x350)] == 0x2) _0x3ef82d = ![];
            if (_0x9beab2 <= 0x2) _0x1f12f9 = _h_CreateCellZoomStringByExtent(_0x30822b['ZOOMDataArray'][0x2], _0x30822b[_0x86dcc8(0x383)]['getBounds'](), _0x3ef82d);
            else {
                if (_0x9beab2 <= 0xc) _0x1f12f9 = _h_CreateCellZoomStringByExtent(_0x30822b['ZOOMDataArray'][_0x9beab2], _0x30822b['map'][_0x86dcc8(0x2a3)](), _0x3ef82d);
                else _0x1f12f9 = '';
            }
            _0x1f12f9 = _h_zipCoord(_0x1f12f9), _0x3c0515 = _0x3c0515[_0x86dcc8(0xd2)](_0x86dcc8(0xc6), _0x1f12f9), _0x3c0515 = _h_GetBase64Url(_0x3c0515);
            let _0x1218fc = _0x3c0515[_0x86dcc8(0x1c4)]('API_POST.php?');
            _0x46805b[_0x86dcc8(0x3e2)](_0x86dcc8(0x159), _0x1218fc[0x0] + '/API_POST.php', !![]), _0x46805b[_0x86dcc8(0x399)]('Content-type', 'application/x-www-form-urlencoded'), _0x46805b[_0x86dcc8(0x284)](_0x1218fc[0x1]), _0x1218fc = null, _0x1f12f9 = null;
        } else {
            if (_0x30822b['sDataString'] != '') {
                let _0x5cf1bd = ![];
                _0x30822b[_0x86dcc8(0x1b8)][_0x86dcc8(0x37d)](_0x86dcc8(0x23a)) >= 0x0 && (_0x30822b[_0x86dcc8(0x1b8)] = _0x30822b['sDataString'][_0x86dcc8(0xd2)](_0x86dcc8(0x23a), ''), _0x5cf1bd = !![]);
                if (_0x30822b[_0x86dcc8(0x1b8)]['indexOf']('http') == 0x0) {
                    let _0x2d151f = _0x30822b['sDataString'];
                    if (_h_checkMMSDen(_0x30822b) == !![]) {
                        if (_0x30822b['nType'] == 0x1 && h_oMap[_0x86dcc8(0x330)]() <= 0x3) _0x3c0515 = _0x3c0515[_0x86dcc8(0xd2)](_0x86dcc8(0x1e7), _0x86dcc8(0x3c1));
                    }
                    _0x2d151f = _0x2d151f[_0x86dcc8(0xd2)](_0x86dcc8(0x1db), _0x471648[_0x86dcc8(0x31e)]()[_0x86dcc8(0x387)]()), _0x2d151f = _0x2d151f[_0x86dcc8(0xd2)](_0x86dcc8(0x2b2), _0x471648[_0x86dcc8(0x31e)]()['getLat']()), _0x2d151f = _0x2d151f[_0x86dcc8(0xd2)](_0x86dcc8(0x105), _0x471648[_0x86dcc8(0x3ac)]()['getLng']()), _0x2d151f = _0x2d151f[_0x86dcc8(0xd2)](_0x86dcc8(0x3a7), _0x471648[_0x86dcc8(0x3ac)]()[_0x86dcc8(0xac)]()), _0x2d151f = _0x2d151f[_0x86dcc8(0xd2)](_0x86dcc8(0x3a9), ''), _0x2d151f = _0x2d151f[_0x86dcc8(0xd2)](_0x86dcc8(0x2d8), ''), _0x2d151f = _0x2d151f[_0x86dcc8(0xd2)]('#CD#', ''), _0x2d151f = _0x2d151f[_0x86dcc8(0xd2)](_0x86dcc8(0x25b), ''), _0x2d151f = _0x2d151f[_0x86dcc8(0xd2)](_0x86dcc8(0x3ad), ''), _0x2d151f = _0x2d151f[_0x86dcc8(0x124)]('+', _0x86dcc8(0x255));
                    var _0x1f9dec = new XMLHttpRequest();
                    _0x1f9dec[_0x86dcc8(0x236)] = function() {
                        const _0x42377c = _0x86dcc8;
                        if (this[_0x42377c(0x185)] == 0xc8 && this[_0x42377c(0x38b)] == this[_0x42377c(0xf5)]) {
                            _0x1f12f9 = _0x1f9dec[_0x42377c(0x254)]['split'](_0x42377c(0x26f))[0x0];
                            if (_0x5cf1bd == !![]) _0x30822b['sDataString'] = _0x1f12f9;
                            _0x1f12f9 = _h_zipCoord(_0x1f12f9), _0x3c0515 = _0x3c0515['replace'](_0x42377c(0xc6), _0x1f12f9), _0x3c0515 = _h_GetBase64Url(_0x3c0515);
                            let _0xf574fd = _0x3c0515[_0x42377c(0x1c4)](_0x42377c(0x2c0));
                            _0x46805b[_0x42377c(0x3e2)](_0x42377c(0x159), _0xf574fd[0x0] + _0x42377c(0x11a), !![]), _0x46805b[_0x42377c(0x399)]('Content-type', _0x42377c(0xd7)), _0x46805b['send'](_0xf574fd[0x1]), _0xf574fd = null, _0x1f12f9 = null, _0x1f9dec = null;
                        }
                    }, _0x1f9dec['open'](_0x86dcc8(0x201), _0x2d151f, !![]), _0x1f9dec[_0x86dcc8(0x284)]();
                } else {
                    _0x1f12f9 = _h_CreateCellZoomStringByDataString(_0x30822b[_0x86dcc8(0x1b8)], _0x30822b['map']['getBounds']()), _0x1f12f9 = _h_zipCoord(_0x1f12f9), _0x3c0515 = _0x3c0515[_0x86dcc8(0xd2)](_0x86dcc8(0xc6), _0x1f12f9), _0x3c0515 = _h_GetBase64Url(_0x3c0515);
                    let _0x43790a = _0x3c0515[_0x86dcc8(0x1c4)](_0x86dcc8(0x2c0));
                    _0x46805b[_0x86dcc8(0x3e2)](_0x86dcc8(0x159), _0x43790a[0x0] + _0x86dcc8(0x11a), !![]), _0x46805b[_0x86dcc8(0x399)]('Content-type', 'application/x-www-form-urlencoded'), _0x46805b[_0x86dcc8(0x284)](_0x43790a[0x1]), _0x43790a = null, _0x1f12f9 = null;
                }
            } else {}
        }
    }

    function _0x340cfb() {
        const _0x2e17e5 = _0x86dcc8;
        _0x46805b = null;
        if (_0x30822b[_0x2e17e5(0x298)] == !![] && h_aCallStackArray[_0x30822b[_0x2e17e5(0x263)]] != _0x1c9a1b) {
            _0x30822b = null;
            return;
        }
        let _0x12c2a3 = this[_0x2e17e5(0x254)];
        if (_0x12c2a3[_0x2e17e5(0x363)] < 0xa || _0x12c2a3['substr'](0x0, 0x6) == _0x2e17e5(0x12b)) {
            if (_0x30822b['nAuto'] == !![] && _0x12c2a3['indexOf'](h_csNODATA) > 0x0) _0x12c2a3 = _0x2e17e5(0x268) + _0x2e17e5(0x26f) + h_csNODATA + _0x2e17e5(0x28e);
            else {
                if (_0x12c2a3[_0x2e17e5(0x37d)](h_csNODATA) > 0x0) _h_showErrorAlertForBizFile(_0x2e17e5(0xf1) + _0x12c2a3, _0x380a28);
                else _h_showErrorAlertForBizFile('\x20BIZ\x20ERROR:\x20' + _0x12c2a3, _0x380a28);
                HM_removeHeatMap(_0x30822b), _h_removeLayerFromTOCByOHM(_0x30822b), _h_setProgressStop();
                return;
            }
        } else {
            if (_0x12c2a3[_0x2e17e5(0x12e)](0x0, 0x4) == _0x2e17e5(0x128)) {
                _0x12c2a3 = _0x12c2a3[_0x2e17e5(0x36a)](0x4), _h_copyToClipboard(_0x12c2a3), HM_removeHeatMap(_0x30822b), _h_removeLayerFromTOCByOHM(_0x30822b), _h_setProgressStop();
                return;
            }
        }
        _0x380a28 = null, _0x30822b['fX'] = _0x585fe6, _0x30822b['fY'] = _0x30d2a2, _0x30822b['nW'] = _0x5460ef, _0x30822b['nH'] = _0x5c0e81, _0x30822b[_0x2e17e5(0x23c)] = _0x471648, HM_removeHeatMapNoReleaseMemory(_0x30822b);
        let _0x304f34 = _0x12c2a3['split'](_0x2e17e5(0x26f)),
            _0x517eeb = _0x304f34[0x0],
            _0x2cb48b = _0x304f34[0x1],
            _0x132eec = ![];
        if (_0x30822b[_0x2e17e5(0x3d1)][_0x2e17e5(0x37d)](h_csNODATA) == 0x0 || _0x2cb48b['indexOf'](h_csNODATA) == 0x0 || _0x30822b[_0x2e17e5(0x350)] == 0x2) _0x132eec = !![];
        if (_0x30822b[_0x2e17e5(0xef)][_0x2e17e5(0x37d)]('◌') >= 0x0) _0x132eec = !![];
        if (_h_checkMMSDen(_0x30822b) == !![]) _0x132eec = !![];
        _0x30822b[_0x2e17e5(0xb1)] = _0x517eeb, _0x30822b[_0x2e17e5(0x3d1)] = _0x2cb48b;
        if (_0x132eec == !![]) _h_reloadLayerLegend(_0x30822b);
        let _0x537c77 = new kakao[(_0x2e17e5(0x12a))][(_0x2e17e5(0x235))](_0x30822b['nW'], _0x30822b['nH']),
            _0x16ca77 = {
                'offset': new kakao[(_0x2e17e5(0x12a))][(_0x2e17e5(0x29b))](_0x30822b['nW'] / 0x2, _0x30822b['nH'] / 0x2)
            },
            _0x3578ba = new kakao[(_0x2e17e5(0x12a))][(_0x2e17e5(0x28f))](_0x30822b['sUrl'], _0x537c77, _0x16ca77),
            _0x25f13b = new kakao[(_0x2e17e5(0x12a))][(_0x2e17e5(0x32b))](_0x30822b['fY'], _0x30822b['fX']);
        _0x30822b[_0x2e17e5(0x348)] = new kakao['maps'][(_0x2e17e5(0xfc))]({
            'position': _0x25f13b,
            'image': _0x3578ba,
            'zIndex': _0x30822b[_0x2e17e5(0x205)],
            'clickable': !![]
        }), _0x30822b[_0x2e17e5(0x348)][_0x2e17e5(0x328)](_0x483ecd), _0x30822b['heatmapOverlay'][_0x2e17e5(0x16c)](_0x30822b[_0x2e17e5(0x2e7)]);
        if (_h_getDeltaX(_0x30822b) != 0x0 || _h_getDeltaY(_0x30822b) != 0x0) _h_onBounds_changed();
        kakao[_0x2e17e5(0x12a)]['event'][_0x2e17e5(0x257)](_0x30822b[_0x2e17e5(0x348)], _0x2e17e5(0x1f0), function() {
            const _0x143ed2 = _0x2e17e5;
            kakao[_0x143ed2(0x12a)][_0x143ed2(0x303)][_0x143ed2(0x31a)](map, _0x143ed2(0x1f0), {
                'latLng': h_oMouseLatlng
            });
        });
        var _0x3492c3 = 0x0,
            _0x378465 = null;
        kakao['maps'][_0x2e17e5(0x303)][_0x2e17e5(0x257)](_0x30822b[_0x2e17e5(0x348)], 'click', function() {
            const _0x6b1dd0 = _0x2e17e5;
            kakao[_0x6b1dd0(0x12a)][_0x6b1dd0(0x303)]['trigger'](map, 'click', {
                'latLng': h_oMouseLatlng
            });
            let _0x393f89 = new Date()['getTime']();
            if (_0x393f89 - _0x3492c3 < 0xc8 && _0x3492c3 > 0x0) {
                if (_0x378465['equals'](h_oMouseLatlng) == !![]) {
                    let _0x150689 = $('div\x20[style*=\x22width:\x207px;\x20height:\x207px;\x22]');
                    if (_0x150689 != null) {
                        if (_0x150689[_0x6b1dd0(0x363)] > 0x0) _0x150689[0x0][_0x6b1dd0(0x38a)]();
                    }
                }
            }
            _0x378465 = h_oMouseLatlng, _0x3492c3 = _0x393f89;
        }), h_bBottomAutoMapLegendShow == !![] && (typeof CreateLegend == _0x2e17e5(0x297) && typeof RemoveLegend == _0x2e17e5(0x297) && (RemoveLegend(_0x30822b), CreateLegend(_0x30822b))), _0x30822b = null, _h_setProgressStop();
    }
}

function _h_GetImageFromUrlForNaver(_0x2370da, _0x45f979) {
    const _0x250f45 = _0x3a1a23;
    if (_0x2370da[_0x250f45(0x310)] == ![]) return;
    _h_setProgressStart();
    let _0x18705e = _0x2370da['map'][_0x250f45(0x20b)]()['x'],
        _0x3467ac = _0x2370da['map'][_0x250f45(0x20b)]()['y'],
        _0x2cb5b8 = _0x2370da[_0x250f45(0x1e6)][_0x250f45(0x2d5)],
        _0x3096a2 = _0x2370da[_0x250f45(0x1e6)][_0x250f45(0xba)],
        _0x4dcf6a = _0x2370da[_0x250f45(0x383)]['getBounds'](),
        _0x268f0c = _0x2370da[_0x250f45(0x383)];
    if (_0x2370da[_0x250f45(0x310)] == ![]) _0x268f0c = null;
    let _0x52ec7a = _0x2370da[_0x250f45(0x131)];
    _0x52ec7a = _0x52ec7a['replace']('#BOTTOM_X#', _0x4dcf6a[_0x250f45(0x3ec)]()['x']), _0x52ec7a = _0x52ec7a[_0x250f45(0xd2)](_0x250f45(0x2b2), _0x4dcf6a[_0x250f45(0x3ec)]()['y']), _0x52ec7a = _0x52ec7a['replace'](_0x250f45(0x105), _0x4dcf6a[_0x250f45(0x317)]()['x']), _0x52ec7a = _0x52ec7a[_0x250f45(0xd2)](_0x250f45(0x3a7), _0x4dcf6a[_0x250f45(0x317)]()['y']), _0x52ec7a = _0x52ec7a[_0x250f45(0xd2)](_0x250f45(0x27f), _0x2cb5b8), _0x52ec7a = _0x52ec7a['replace']('#H#', _0x3096a2);
    let _0x4ece21 = _0x52ec7a;
    _0x52ec7a = _h_GetBase64Url(_0x52ec7a);
    let _0x354ceb = new XMLHttpRequest();
    _0x354ceb[_0x250f45(0x3e0)]('load', _0x4b72a4), _0x354ceb[_0x250f45(0x3e2)](_0x250f45(0x201), _0x52ec7a), _0x354ceb[_0x250f45(0x332)] = function() {
        const _0x1bae63 = _0x250f45;
        alert(_0x1bae63(0x279));
    }, _0x354ceb['send']();

    function _0x4b72a4() {
        const _0x2f27bf = _0x250f45;
        _0x354ceb = null;
        if (_0x2370da[_0x2f27bf(0x298)] == !![] && h_aCallStackArray[_0x2370da[_0x2f27bf(0x263)]] != _0x45f979) {
            _0x2370da = null;
            return;
        }
        let _0xdb92f1 = this['responseText'];
        if (_0xdb92f1[_0x2f27bf(0x363)] < 0xa || _0xdb92f1[_0x2f27bf(0x12e)](0x0, 0x6) == _0x2f27bf(0x12b)) {
            if (_0xdb92f1[_0x2f27bf(0x37d)](h_csNODATA) > 0x0) _h_showErrorAlertForBizFile(_0x2f27bf(0xf1) + _0xdb92f1, _0x4ece21);
            else _h_showErrorAlertForBizFile(_0x2f27bf(0xf1) + _0xdb92f1, _0x4ece21);
            HM_removeHeatMap(_0x2370da), _h_removeLayerFromTOCByOHM(_0x2370da), _h_setProgressStop();
            return;
        } else {
            if (_0xdb92f1['substr'](0x0, 0x4) == 'SQL:') {
                _0xdb92f1 = _0xdb92f1[_0x2f27bf(0x36a)](0x4), _h_copyToClipboard(_0xdb92f1), HM_removeHeatMap(_0x2370da), _h_removeLayerFromTOCByOHM(_0x2370da), _h_setProgressStop();
                return;
            }
        }
        _0x4ece21 = null, _0x2370da['fX'] = _0x18705e, _0x2370da['fY'] = _0x3467ac, _0x2370da['nW'] = _0x2cb5b8, _0x2370da['nH'] = _0x3096a2, _0x2370da[_0x2f27bf(0x23c)] = _0x4dcf6a, HM_removeHeatMapNoReleaseMemory(_0x2370da);
        let _0x4b1570 = _0xdb92f1[_0x2f27bf(0x1c4)](_0x2f27bf(0x26f)),
            _0x1f7e9d = _0x4b1570[0x0],
            _0x19bbe9 = _0x4b1570[0x1];
        _0x2370da['sUrl'] = _0x1f7e9d, _0x2370da[_0x2f27bf(0x3d1)] = _0x19bbe9, _0x2370da[_0x2f27bf(0x348)] = new naver[(_0x2f27bf(0x12a))][(_0x2f27bf(0x291))](_0x2370da[_0x2f27bf(0xb1)], _0x2370da['oExtent'], {
            'opacity': _0x2370da[_0x2f27bf(0x2e7)],
            'clickable': ![]
        }), _0x2370da[_0x2f27bf(0x348)][_0x2f27bf(0x328)](_0x268f0c), _h_ReorderZindexLayerForNaver();
        if (typeof CreateLegend == _0x2f27bf(0x297) && typeof RemoveLegend == _0x2f27bf(0x297)) {}
        _0x2370da = null, _h_setProgressStop();
    }
}

function HM_onBoundsChangeForHM_Auto(_0x5dd001) {
    const _0x44c865 = _0x3a1a23;
    if (_0x5dd001[_0x44c865(0x310)] == ![]) return;
    if (h_nCallStackLoc > 0x2710) h_nCallStackLoc = 0x0;
    h_nCallStackLoc++, h_aCallStackArray[_0x5dd001[_0x44c865(0x263)]] = h_nCallStackLoc, setTimeout(_h_GetImageFromUrlForTimer['bind'](null, _0x5dd001, h_nCallStackLoc), 0xc8), _0x5dd001 = null;
}

function _h_GetImageFromUrlForTimer(_0x29e938, _0x41c997) {
    const _0x32e951 = _0x3a1a23;
    if (_0x29e938['bVisible'] == ![]) return;
    if (typeof h_aCallStackArray[_0x29e938[_0x32e951(0x263)]] == 'undefined') {
        _0x29e938 = null;
        return;
    }
    if (_0x29e938['nAuto'] != !![]) {
        _0x29e938 = null;
        return;
    }
    if (h_aCallStackArray[_0x29e938[_0x32e951(0x263)]] != _0x41c997) {
        _0x29e938 = null;
        return;
    }
    if (_0x29e938[_0x32e951(0x350)] == 0x1 || _0x29e938[_0x32e951(0x350)] == 0x2) _h_GetImageFromUrl(_0x29e938, _0x41c997);
    else _0x29e938[_0x32e951(0x350)] == 0x5 && _h_GetPointFromUrl(_0x29e938);
    _0x29e938 = null;
}

function HM_onBoundsChangeForHM_SetExtent(_0xc97a63) {
    const _0x18302e = _0x3a1a23;
    if (h_bNaver == !![]) return;
    if (_0xc97a63['bVisible'] == ![]) return;
    if (_0xc97a63['heatmapOverlay'] == null) return;
    let _0x4f6504 = 0x0,
        _0x42c72e = 0x0;
    _0x4f6504 = _0xc97a63['nW'] / _h_getExtentZommRatioWBy1Pixel(_0xc97a63), _0x42c72e = _0xc97a63['nH'] / _h_getExtentZommRatioHBy1Pixel(_0xc97a63), _0xc97a63[_0x18302e(0x348)][_0x18302e(0xea)](_0xc97a63['map']['getCenter']());
    let _0x134a66 = _h_getDeltaX_Pixel(_0xc97a63),
        _0x4d5cbb = _h_getDeltaY_Pixel(_0xc97a63),
        _0x125a74 = new kakao[(_0x18302e(0x12a))][(_0x18302e(0x235))](_0x4f6504, _0x42c72e),
        _0x17ac87 = {
            'offset': new kakao[(_0x18302e(0x12a))]['Point'](_0x4f6504 / 0x2 + _0x134a66, _0x42c72e / 0x2 - _0x4d5cbb)
        },
        _0x4dc4b6 = new kakao['maps'][(_0x18302e(0x28f))](_0xc97a63[_0x18302e(0xb1)], _0x125a74, _0x17ac87);
    _0xc97a63[_0x18302e(0x348)][_0x18302e(0x10e)](_0x4dc4b6), _0xc97a63 = null;
}

function _h_getExtentZommRatioW(_0x115500) {
    const _0x39052f = _0x3a1a23;
    let _0x562c7f = _0x115500['map'][_0x39052f(0x2a3)](),
        _0x2dbce3 = (_0x562c7f[_0x39052f(0x3ac)]()['getLng']() - _0x562c7f[_0x39052f(0x31e)]()[_0x39052f(0x387)]()) / (_0x115500[_0x39052f(0x23c)][_0x39052f(0x3ac)]()['getLng']() - _0x115500[_0x39052f(0x23c)][_0x39052f(0x31e)]()[_0x39052f(0x387)]());
    return _0x115500 = null, Math['abs'](_0x2dbce3);
}

function _h_getExtentZommRatioH(_0x330060) {
    const _0x3adabd = _0x3a1a23;
    let _0x171d25 = _0x330060['map'][_0x3adabd(0x2a3)](),
        _0x327f1f = (_0x171d25[_0x3adabd(0x3ac)]()['getLat']() - _0x171d25[_0x3adabd(0x31e)]()[_0x3adabd(0xac)]()) / (_0x330060[_0x3adabd(0x23c)]['getNorthEast']()[_0x3adabd(0xac)]() - _0x330060[_0x3adabd(0x23c)][_0x3adabd(0x31e)]()[_0x3adabd(0xac)]());
    return _0x330060 = null, Math[_0x3adabd(0x16f)](_0x327f1f);
}

function _h_getGeoDisBy1Pixel() {
    const _0xc0c185 = _0x3a1a23;
    let _0x19fc3b = h_oMap['getBounds'](),
        _0x55d3c0 = h_divMap['clientWidth'],
        _0xc20a4c = _0x19fc3b['getNorthEast']()[_0xc0c185(0x387)]() - _0x19fc3b[_0xc0c185(0x31e)]()[_0xc0c185(0x387)](),
        _0x4e9527 = _0xc20a4c / _0x55d3c0;
    return _0x4e9527;
}

function _h_getExtentZommRatioWBy1Pixel(_0x57540f) {
    const _0x44019c = _0x3a1a23;
    if (_0x57540f[_0x44019c(0x23c)] == null) return 0x1;
    let _0x1d7d93 = _0x57540f[_0x44019c(0x383)]['getBounds'](),
        _0x5bcc1c = _0x57540f['div_map'][_0x44019c(0x2d5)],
        _0x2c411b = _0x1d7d93[_0x44019c(0x3ac)]()[_0x44019c(0x387)]() - _0x1d7d93['getSouthWest']()[_0x44019c(0x387)](),
        _0x13e997 = _0x2c411b / _0x5bcc1c,
        _0x1ceae8 = _0x57540f['nW'],
        _0x329938 = _0x57540f[_0x44019c(0x23c)][_0x44019c(0x3ac)]()[_0x44019c(0x387)]() - _0x57540f[_0x44019c(0x23c)][_0x44019c(0x31e)]()[_0x44019c(0x387)](),
        _0x52c753 = _0x329938 / _0x1ceae8;
    _0x57540f = null;
    let _0x54ee0c = _0x13e997 / _0x52c753;
    return _0x54ee0c;
}

function _h_getExtentZommRatioHBy1Pixel(_0x1b4a7c) {
    const _0x3ee7b3 = _0x3a1a23;
    if (_0x1b4a7c['oExtent'] == null) return 0x1;
    let _0x3980d6 = _0x1b4a7c['map'][_0x3ee7b3(0x2a3)](),
        _0x37c773 = _0x1b4a7c[_0x3ee7b3(0x1e6)][_0x3ee7b3(0xba)],
        _0x23765a = _0x3980d6[_0x3ee7b3(0x3ac)]()[_0x3ee7b3(0xac)]() - _0x3980d6[_0x3ee7b3(0x31e)]()[_0x3ee7b3(0xac)](),
        _0x31d290 = _0x23765a / _0x37c773,
        _0x444858 = _0x1b4a7c['nH'],
        _0x6483e1 = _0x1b4a7c[_0x3ee7b3(0x23c)]['getNorthEast']()[_0x3ee7b3(0xac)]() - _0x1b4a7c['oExtent'][_0x3ee7b3(0x31e)]()[_0x3ee7b3(0xac)](),
        _0x259d47 = _0x6483e1 / _0x444858;
    _0x1b4a7c = null;
    let _0x2fcffc = _0x31d290 / _0x259d47;
    return _0x2fcffc;
}

function _h_getDeltaX(_0x258178) {
    const _0x14ecec = _0x3a1a23;
    return _0x258178['map'][_0x14ecec(0x20b)]()[_0x14ecec(0x387)]() - _0x258178['fX'];
}

function _h_getDeltaY(_0x41c101) {
    const _0x395240 = _0x3a1a23;
    return _0x41c101[_0x395240(0x383)][_0x395240(0x20b)]()['getLat']() - _0x41c101['fY'];
}

function _h_getDeltaX_Pixel(_0x5793b1) {
    const _0x5a2a8b = _0x3a1a23;
    let _0x9b43d6 = _0x5793b1[_0x5a2a8b(0x383)][_0x5a2a8b(0x2a3)](),
        _0x39d887 = _0x5793b1[_0x5a2a8b(0x1e6)]['clientWidth'],
        _0x493f8d = _0x9b43d6['getNorthEast']()[_0x5a2a8b(0x387)]() - _0x9b43d6[_0x5a2a8b(0x31e)]()[_0x5a2a8b(0x387)](),
        _0x49827b = _0x39d887 / _0x493f8d;
    return _0x49827b * _h_getDeltaX(_0x5793b1);
}

function _h_getDeltaY_Pixel(_0x5a3abb) {
    const _0x3ca5e9 = _0x3a1a23;
    let _0x461f34 = _0x5a3abb['map'][_0x3ca5e9(0x2a3)](),
        _0x47ea11 = _0x5a3abb[_0x3ca5e9(0x1e6)]['clientHeight'],
        _0x422374 = _0x461f34[_0x3ca5e9(0x3ac)]()[_0x3ca5e9(0xac)]() - _0x461f34['getSouthWest']()[_0x3ca5e9(0xac)](),
        _0x5afea3 = _0x47ea11 / _0x422374;
    return _0x5afea3 * _h_getDeltaY(_0x5a3abb);
}

function HM_CreateBottomAutoLegend(_0x4afbaa, _0x2ccea1) {
    const _0x561619 = _0x3a1a23;
    HM_RemoveBottomAutoLegend(_0x2ccea1), _0x2ccea1['style'][_0x561619(0x1ed)] = '';
    let _0x23011d = _0x4afbaa[_0x561619(0x1c4)]('||'),
        _0x77c135 = ![];
    _0x23011d[0x0][_0x561619(0x37d)](_0x561619(0x1e2)) == 0x0 && (_0x23011d[0x0] = _0x23011d[0x0][_0x561619(0xd2)]('@REVERSE@', ''), _0x77c135 = !![]);
    let _0x217bfd = _0x23011d[0x0]['split']('^'),
        _0x257e92 = _0x23011d[0x1]['split']('^'),
        _0x45ede4 = !![];
    for (let _0x2e8d76 = 0x0; _0x2e8d76 < _0x217bfd[_0x561619(0x363)]; _0x2e8d76++) {
        if (_0x217bfd[_0x2e8d76][_0x561619(0x1c4)]('~')['length'] == 0x1) {
            _0x45ede4 = ![];
            break;
        }
        if (_0x217bfd[_0x2e8d76][_0x561619(0x1c4)]('~')[_0x561619(0x363)] == 0x2) {
            if (_h_isNumeric(_0x217bfd[_0x2e8d76][_0x561619(0x1c4)]('~')[0x0]) == ![] || _h_isNumeric(_0x217bfd[_0x2e8d76][_0x561619(0x1c4)]('~')[0x1]) == ![]) {
                _0x45ede4 = ![];
                break;
            }
        }
    }
    if (_0x45ede4 == !![])
        for (let _0x3bdc21 = 0x0; _0x3bdc21 < _0x217bfd[_0x561619(0x363)]; _0x3bdc21++) {
            _0x217bfd[_0x3bdc21] = _h_setComma1000(_0x217bfd[_0x3bdc21][_0x561619(0x1c4)]('~')[0x1]) + '~' + _h_setComma1000(_0x217bfd[_0x3bdc21][_0x561619(0x1c4)]('~')[0x0]);
        }(_0x217bfd[0x0][_0x561619(0xb9)]() == _0x561619(0x3a4) || _0x217bfd[0x0][_0x561619(0xb9)]() == _0x561619(0x17f) || _0x45ede4 == !![]) && (_0x217bfd = _0x217bfd['reverse'](), _0x257e92 = _0x257e92[_0x561619(0x2f9)]());
    _0x45ede4 == ![] && _0x77c135 == !![] && (_0x217bfd = _0x217bfd[_0x561619(0x2f9)](), _0x257e92 = _0x257e92[_0x561619(0x2f9)]());
    if (_0x217bfd[0x0][_0x561619(0xb9)]() == _0x561619(0x3a4) || _0x217bfd[0x0][_0x561619(0xb9)]() == _0x561619(0x17f)) $('#' + _0x2ccea1['id'])['css'](_0x561619(0x1bc), _0x561619(0x1eb));
    else $('#' + _0x2ccea1['id'])[_0x561619(0x287)](_0x561619(0x1bc), _0x561619(0x375));
    for (let _0xc25523 = 0x0; _0xc25523 < _0x217bfd['length']; _0xc25523++) {
        let _0x343f3a = _0x217bfd[_0xc25523],
            _0x1ba420 = _0x257e92[_0xc25523],
            _0x449673 = document[_0x561619(0x3c2)]('div'),
            _0x20b250 = document[_0x561619(0x3c2)](_0x561619(0x390));
        _0x20b250[_0x561619(0x2e8)] = 'density-legend-key', _0x20b250['style'][_0x561619(0x1aa)] = _0x1ba420;
        let _0x3f2134 = document[_0x561619(0x3c2)]('span');
        _0x3f2134[_0x561619(0x1e1)] = _0x343f3a, _0x449673[_0x561619(0x18f)](_0x20b250), _0x449673[_0x561619(0x18f)](_0x3f2134), _0x2ccea1[_0x561619(0x18f)](_0x449673);
    }
    _0x23011d = null, _0x217bfd = null, _0x257e92 = null, _0x4afbaa = null;
}

function HM_CreateBottomAutoLegendForPoint(_0x138079, _0x160ea7, _0x40d1ee) {
    const _0x5babc9 = _0x3a1a23;
    HM_RemoveBottomAutoLegend(_0x160ea7), _0x160ea7['style'][_0x5babc9(0x1ed)] = _0x5babc9(0x116);
    let _0x5cac86 = _0x138079[_0x5babc9(0x1c4)]('|'),
        _0x5ab240 = ![];
    _0x5cac86[0x0][_0x5babc9(0x37d)](_0x5babc9(0x1e2)) == 0x0 && (_0x5cac86[0x0] = _0x5cac86[0x0][_0x5babc9(0xd2)](_0x5babc9(0x1e2), ''), _0x5ab240 = !![]);
    let _0x1c0923 = _0x5cac86[0x0]['split']('^'),
        _0x31feb1 = _0x5cac86[0x2][_0x5babc9(0x1c4)]('^'),
        _0x32da40 = !![];
    for (let _0x425ab1 = 0x0; _0x425ab1 < _0x1c0923['length']; _0x425ab1++) {
        if (_0x1c0923[_0x425ab1][_0x5babc9(0x1c4)]('~')[_0x5babc9(0x363)] == 0x1) {
            _0x32da40 = ![];
            break;
        }
        if (_0x1c0923[_0x425ab1][_0x5babc9(0x1c4)]('~')['length'] == 0x2) {
            if (_h_isNumeric(_0x1c0923[_0x425ab1]['split']('~')[0x0]) == ![] || _h_isNumeric(_0x1c0923[_0x425ab1][_0x5babc9(0x1c4)]('~')[0x1]) == ![]) {
                _0x32da40 = ![];
                break;
            }
        }
    }
    if (_0x32da40 == !![])
        for (let _0x12fa6b = 0x0; _0x12fa6b < _0x1c0923['length']; _0x12fa6b++) {
            _0x1c0923[_0x12fa6b] = _h_setComma1000(_0x1c0923[_0x12fa6b][_0x5babc9(0x1c4)]('~')[0x1]) + '~' + _h_setComma1000(_0x1c0923[_0x12fa6b][_0x5babc9(0x1c4)]('~')[0x0]);
        }(_0x1c0923[0x0][_0x5babc9(0xb9)]() == 'LOW' || _0x1c0923[0x0][_0x5babc9(0xb9)]() == _0x5babc9(0x17f) || _0x32da40 == !![]) && (_0x1c0923 = _0x1c0923[_0x5babc9(0x2f9)](), _0x31feb1 = _0x31feb1[_0x5babc9(0x2f9)]());
    _0x32da40 == ![] && _0x5ab240 == !![] && (_0x1c0923 = _0x1c0923[_0x5babc9(0x2f9)](), _0x31feb1 = _0x31feb1['reverse']());
    if (_0x1c0923[0x0][_0x5babc9(0xb9)]() == _0x5babc9(0x3a4) || _0x1c0923[0x0]['toUpperCase']() == _0x5babc9(0x17f)) $('#' + _0x160ea7['id'])[_0x5babc9(0x287)]('line-height', _0x5babc9(0x1eb));
    else $('#' + _0x160ea7['id'])[_0x5babc9(0x287)](_0x5babc9(0x1bc), _0x5babc9(0x375));
    for (let _0x266f5c = 0x0; _0x266f5c < _0x1c0923['length']; _0x266f5c++) {
        let _0x21e889 = parseFloat(_0x1c0923[_0x266f5c][_0x5babc9(0x1c4)]('~')[0x0]),
            _0x445c98 = parseInt(_0x31feb1[_0x266f5c]),
            _0x283e86 = _h_GetMarkerSrc(_0x40d1ee['sPointSymbolType'], _0x40d1ee['sPointSymbolColor'], _0x445c98),
            _0x32407b = _0x1c0923[_0x266f5c],
            _0x3d3226 = document[_0x5babc9(0x3c2)](_0x5babc9(0x199)),
            _0x74b3a = document[_0x5babc9(0x3c2)](_0x5babc9(0xe7));
        _0x74b3a[_0x5babc9(0x2e8)] = _0x5babc9(0x33c);
        let _0x2155a8 = Math[_0x5babc9(0x2bc)](parseInt(_0x31feb1[0x0]), parseInt(_0x31feb1[_0x1c0923['length'] - 0x1]));
        _0x74b3a[_0x5babc9(0x35d)]['width'] = _0x2155a8 + 'px', _0x74b3a[_0x5babc9(0x35d)][_0x5babc9(0x25f)] = String(_0x445c98) + 'px', _0x74b3a[_0x5babc9(0x36d)] = _0x283e86;
        let _0x986a5c = document[_0x5babc9(0x3c2)]('span');
        _0x986a5c[_0x5babc9(0x1e1)] = _0x32407b, _0x3d3226['appendChild'](_0x74b3a), _0x3d3226[_0x5babc9(0x18f)](_0x986a5c), _0x160ea7[_0x5babc9(0x18f)](_0x3d3226), _0x283e86 = null;
    }
    _0x5cac86 = null, _0x1c0923 = null, _0x31feb1 = null, _0x40d1ee = null;
}

function HM_RemoveBottomAutoLegend(_0x446338) {
    const _0x24c689 = _0x3a1a23;
    let _0x2b8120 = _0x446338[_0x24c689(0xe4)];
    while (_0x2b8120) {
        _0x446338['removeChild'](_0x2b8120), _0x2b8120 = _0x446338[_0x24c689(0xe4)];
    }
}

function _h_getMapCenter() {
    const _0x3ba878 = _0x3a1a23;
    return h_oMap[_0x3ba878(0x20b)]();
}

function _h_getMapExtent() {
    return h_oMap['getBounds']();
}

function _h_getMapExtentString() {
    const _0x62cdd3 = _0x3a1a23;
    return _h_getMapExtent()[_0x62cdd3(0x35b)]();
}

function _h_setMapExtent(_0x46305f) {
    const _0x4187dc = _0x3a1a23;
    h_oMap[_0x4187dc(0x2ed)](_0x46305f);
}

function _h_setMapExtentByString(_0x2610e4) {
    const _0x44c6b8 = _0x3a1a23;
    if (_0x2610e4 == _0x44c6b8(0x216)) return;
    _0x2610e4 = _0x2610e4[_0x44c6b8(0xd2)](/ /g, ''), _0x2610e4 = _0x2610e4[_0x44c6b8(0xd2)]('(', ''), _0x2610e4 = _0x2610e4['replace']('(', ''), _0x2610e4 = _0x2610e4[_0x44c6b8(0xd2)]('(', ''), _0x2610e4 = _0x2610e4[_0x44c6b8(0xd2)]('(', ''), _0x2610e4 = _0x2610e4['replace']('(', ''), _0x2610e4 = _0x2610e4[_0x44c6b8(0xd2)]('(', ''), _0x2610e4 = _0x2610e4[_0x44c6b8(0xd2)](')', ''), _0x2610e4 = _0x2610e4[_0x44c6b8(0xd2)](')', ''), _0x2610e4 = _0x2610e4['replace'](')', ''), _0x2610e4 = _0x2610e4[_0x44c6b8(0xd2)](')', ''), _0x2610e4 = _0x2610e4[_0x44c6b8(0xd2)](')', ''), _0x2610e4 = _0x2610e4[_0x44c6b8(0xd2)](')', '');
    if (_0x2610e4[_0x44c6b8(0x1c4)](',')['length'] == 0x4) {
        let _0x38bf75 = parseFloat(_0x2610e4[_0x44c6b8(0x1c4)](',')[0x0]),
            _0x296ae4 = parseFloat(_0x2610e4['split'](',')[0x1]),
            _0x321ec9 = parseFloat(_0x2610e4[_0x44c6b8(0x1c4)](',')[0x2]),
            _0xb5ce81 = parseFloat(_0x2610e4[_0x44c6b8(0x1c4)](',')[0x3]),
            _0x161bea = new kakao['maps']['LatLngBounds'](new kakao['maps'][(_0x44c6b8(0x32b))](_0x38bf75, _0x296ae4), new kakao[(_0x44c6b8(0x12a))]['LatLng'](_0x321ec9, _0xb5ce81));
        h_oMap['setBounds'](_0x161bea), h_oMap['setLevel'](h_oMap[_0x44c6b8(0x330)]() - 0x1);
    }
}

function _h_onFileSave(_0x27085d) {
    const _0x4ac0ac = _0x3a1a23;
    let _0x596bc7 = _h_getLayersStringForFileSave();
    _0x596bc7[_0x4ac0ac(0x363)] > 0x14 && _h_saveData(_0x596bc7, _0x4ac0ac(0x1ba)), _0x596bc7 = null;
}

function _h_getLayersStringForFileSave() {
    const _0x5ad8ea = _0x3a1a23;
    let _0x2628a9 = '',
        _0x25ca65 = 0x0;
    if (h_oaLayer != null) _0x25ca65 = h_oaLayer[_0x5ad8ea(0x363)];
    _0x2628a9 = _h_getMapExtentString(), _0x2628a9 = _0x2628a9 + '|' + H_map_distance_measurement_getCoords();
    for (let _0x57ea9f = 0x0; _0x57ea9f < _0x25ca65; _0x57ea9f++) {
        if (_0x2628a9 != '') _0x2628a9 += '\x0a▶';
        for (let _0x3fef76 in h_oaLayer[_0x57ea9f]) {
            if (h_oaLayer[_0x57ea9f][_0x5ad8ea(0x3ba)](_0x3fef76)) {
                if (_0x2628a9 != '') _0x2628a9 += '\x0a';
                if (_0x3fef76 == _0x5ad8ea(0xbe) || _0x3fef76 == _0x5ad8ea(0x1a5)) _0x2628a9 += _0x3fef76 + '᛫' + typeof h_oaLayer[_0x57ea9f][_0x3fef76] + '᛫' + '';
                else {
                    if (_0x3fef76 != 'sDataString') _0x2628a9 += _0x3fef76 + '᛫' + typeof h_oaLayer[_0x57ea9f][_0x3fef76] + '᛫' + h_oaLayer[_0x57ea9f][_0x3fef76];
                    else {
                        let _0x23ffc1 = h_oaLayer[_0x57ea9f][_0x3fef76];
                        _0x23ffc1 = _0x23ffc1['split']('\x0d')[_0x5ad8ea(0x163)](''), _0x23ffc1 = _0x23ffc1[_0x5ad8ea(0x1c4)]('\x0a')[_0x5ad8ea(0x163)](''), _0x2628a9 += _0x3fef76 + '᛫' + typeof h_oaLayer[_0x57ea9f][_0x3fef76] + '᛫' + _0x23ffc1, _0x23ffc1 = null;
                    }
                }
            }
        }
    }
    return _0x2628a9;
}

function _h_getLayersCount() {
    const _0xdbe7aa = _0x3a1a23;
    let _0x2bc5e7 = '',
        _0x230957 = 0x0;
    if (h_oaLayer != null) _0x230957 = h_oaLayer[_0xdbe7aa(0x363)];
    return _0x230957;
}

function _h_onFileOpen() {
    const _0x228ab1 = _0x3a1a23;
    if (h_oaLayer != null) {
        if (h_oaLayer['length'] > 0x0) {
            let _0x42b4c3 = Swal['mixin']({
                'customClass': {
                    'confirmButton': _0x228ab1(0x3c4),
                    'cancelButton': _0x228ab1(0x270)
                },
                'buttonsStyling': ![]
            });
            _0x42b4c3[_0x228ab1(0x324)]({
                'title': '현재\x20레이어\x20처리\x20여부?',
                'text': _0x228ab1(0x2cd),
                'icon': _0x228ab1(0x28d),
                'showCancelButton': !![],
                'confirmButtonText': _0x228ab1(0x210),
                'cancelButtonText': _0x228ab1(0xd8),
                'reverseButtons': !![]
            })[_0x228ab1(0x1e3)](function(_0x1f6133) {
                const _0x327092 = _0x228ab1;
                if (_0x1f6133['value']) _h_TriggerFileOpen(0x0);
                else _0x1f6133['dismiss'] === Swal[_0x327092(0x197)]['cancel'] && (_h_TriggerFileOpen(0x64), _h_removeAllLayerFromTOC());
            });
            return;
        }
    }
    _h_TriggerFileOpen(0x0);
}

function _h_TriggerFileOpen(_0x8170d2) {
    const _0x35b10e = _0x3a1a23;
    if (_0x8170d2 == 0x0) $(_0x35b10e(0x2a8))[_0x35b10e(0x31a)](_0x35b10e(0x38a));
    else {
        let _0x45d67a = setInterval(function() {
            const _0x120ce6 = _0x35b10e;
            clearInterval(_0x45d67a), _0x45d67a = null, $(_0x120ce6(0x2a8))[_0x120ce6(0x31a)]('click');
        }, _0x8170d2);
    }
}

function _h_openDataForClick(_0x4290d3) {
    const _0x509dfb = _0x3a1a23;
    _0x4290d3[_0x509dfb(0x24a)] = '';
}

function _h_openDataForChange(_0xae31d) {
    const _0x4d8d7b = _0x3a1a23;
    let _0x4f3552 = _0xae31d[_0x4d8d7b(0xa4)][0x0];
    if (!_0x4f3552) return;
    let _0x3ce5e3 = new FileReader();
    _0x3ce5e3[_0x4d8d7b(0x309)] = function(_0x3f9407) {
        const _0x38ff56 = _0x4d8d7b;
        let _0x2cd00b = _0x3f9407[_0x38ff56(0x339)][_0x38ff56(0x12f)];
        _h_loadLayers(_0x2cd00b, !![]), _0x2cd00b = null;
    }, _0x3ce5e3[_0x4d8d7b(0x245)](_0x4f3552), _0x4f3552 = null, _h_ShowLoadingFileMessage();
    let _0x1c6646 = setInterval(function() {
        const _0x5e0e55 = _0x4d8d7b;
        let _0x417c0b = !![],
            _0x2acf22 = 0x0;
        if (h_oaLayer != null) _0x2acf22 = h_oaLayer[_0x5e0e55(0x363)];
        for (let _0x1e43f3 = 0x0; _0x1e43f3 < _0x2acf22; _0x1e43f3++) {
            if (h_oaLayer[_0x1e43f3][_0x5e0e55(0x3d1)] == '') {
                _0x417c0b = ![];
                break;
            }
        }
        _0x417c0b == !![] && (clearInterval(_0x1c6646), oGrayTimer = null, swal[_0x5e0e55(0x376)]());
    }, 0x12c);
}

function HM_drawPolygonByUrlFile(_0x2521c9, _0x5083af) {
    let _0x2a9049 = setInterval(function() {
        const _0x195c4d = _0x3192;
        h_bLoaded == !![] && (clearInterval(_0x2a9049), _0x2a9049 = null, HM_drawPolygonByUrlFile2(_0x2521c9, _0x5083af, _0x195c4d(0x3a8), 0x0), _0x2521c9 = null);
    }, 0x12c);
}

function HM_drawPolygonColorByUrlFile(_0x3c4316, _0x58b33b, _0x5af5d6, _0x50946a) {
    let _0x3376a3 = setInterval(function() {
        h_bLoaded == !![] && (clearInterval(_0x3376a3), _0x3376a3 = null, HM_drawPolygonByUrlFile2(_0x3c4316, _0x58b33b, _0x5af5d6, _0x50946a), _0x3c4316 = null);
    }, 0x12c);
}

function HM_drawPolygonByUrlFile2(_0x354879, _0x12ab82, _0xd4909e, _0x452a9f) {
    const _0x2f8dfc = _0x3a1a23;
    let _0x31b1e7 = new XMLHttpRequest();
    _0x31b1e7['addEventListener'](_0x2f8dfc(0x1ce), _0x5cf199), _0x31b1e7[_0x2f8dfc(0x3e2)](_0x2f8dfc(0x201), _0x354879), _0x31b1e7[_0x2f8dfc(0x332)] = function() {
        const _0x3116cf = _0x2f8dfc;
        alert(_0x3116cf(0x279));
    }, _0x31b1e7[_0x2f8dfc(0x284)]();

    function _0x5cf199() {
        const _0xac9394 = _0x2f8dfc;
        _0x31b1e7 = null;
        let _0x1a2cf3 = this[_0xac9394(0x254)];
        if (_0x1a2cf3[_0xac9394(0x363)] > 0x14) _h_drawTempPolyong(_0x1a2cf3, _0x12ab82, _0xd4909e, _0x452a9f);
        _0x1a2cf3 = null, _0x354879 = null;
    }
}
var h_oTempPolygon = null;;

function _h_removeTempPolyong() {
    const _0x483245 = _0x3a1a23;
    if (h_oTempPolygon != null) {
        let _0x25c3f2 = h_oTempPolygon[_0x483245(0x363)];
        for (let _0xf0ad5a = 0x0; _0xf0ad5a < _0x25c3f2; _0xf0ad5a++) {
            h_oTempPolygon[_0xf0ad5a]['poly'][_0x483245(0x328)](null);
        }
    }
    h_oTempPolygon = null;
}

function _h_drawTempPolyong(_0x1c105f, _0xaaaa05, _0x1f4257, _0xbd15bb) {
    const _0x595d97 = _0x3a1a23;
    _h_removeTempPolyong(), h_oTempPolygon = new Array();
    let _0x18830c = 0xb4,
        _0x3e6e6c = 0xb4,
        _0x90fc8c = 0x0,
        _0x59c3ca = 0x0;
    _0x1c105f = _0x1c105f['split'](_0x595d97(0x26f))[0x0], _0x1c105f = _0x1c105f[_0x595d97(0xb9)](), _0x1c105f = _0x1c105f[_0x595d97(0x1c4)]('#INNER#')['join'](_0x595d97(0x145)), _0x1c105f = _0x1c105f['split']('|')[_0x595d97(0x163)](_0x595d97(0x145)), _0x1c105f = _0x1c105f[_0x595d97(0x1c4)]('/')[_0x595d97(0x163)](',');
    let _0x406f14 = _0x1c105f[_0x595d97(0x1c4)]('#APPEND#');
    for (let _0x5549fb = 0x0; _0x5549fb < _0x406f14[_0x595d97(0x363)]; _0x5549fb++) {
        let _0x1b5a1a = _0x406f14[_0x5549fb]['split'](_0x595d97(0x26d)),
            _0x40a359 = new Array();
        for (let _0x1e2da2 = 0x0; _0x1e2da2 < _0x1b5a1a['length']; _0x1e2da2++) {
            let _0x39a117 = _0x1b5a1a[_0x1e2da2][_0x595d97(0x1c4)](','),
                _0x1f01f5 = new Array();
            for (k = 0x0; k < _0x39a117[_0x595d97(0x363)]; k++) {
                if (_0x39a117[k][_0x595d97(0x1c4)]('^')[_0x595d97(0x363)] == 0x2) {
                    let _0x3aa448 = parseFloat(_0x39a117[k][_0x595d97(0x1c4)]('^')[0x0]),
                        _0x2e2506 = parseFloat(_0x39a117[k][_0x595d97(0x1c4)]('^')[0x1]);
                    if (_0x18830c > _0x3aa448) _0x18830c = _0x3aa448;
                    if (_0x3e6e6c > _0x2e2506) _0x3e6e6c = _0x2e2506;
                    if (_0x90fc8c < _0x3aa448) _0x90fc8c = _0x3aa448;
                    if (_0x59c3ca < _0x2e2506) _0x59c3ca = _0x2e2506;
                    _0x1f01f5[_0x595d97(0x29a)](new kakao[(_0x595d97(0x12a))][(_0x595d97(0x32b))](_0x2e2506, _0x3aa448));
                }
            }
            _0x40a359[_0x595d97(0x29a)](_0x1f01f5), _0x1f01f5 = null, _0x39a117 = null;
        }
        let _0x47fe55 = new kakao['maps'][(_0x595d97(0x3e5))]({
            'map': h_oMap,
            'path': _0x40a359,
            'strokeWeight': 0x5,
            'strokeColor': _0x595d97(0x1bb),
            'strokeOpacity': 0.4,
            'fillColor': _0x1f4257,
            'fillOpacity': _0xbd15bb
        });
        h_oTempPolygon[_0x595d97(0x29a)]({
            'poly': _0x47fe55
        }), polygon = null, _0x40a359 = null, _0x1b5a1a = null;
    }
    _0x1c105f = null, _0x406f14 = null;
    if (_0xaaaa05 == !![]) {
        let _0x5090e5 = new kakao['maps']['LatLngBounds'](new kakao[(_0x595d97(0x12a))][(_0x595d97(0x32b))](_0x3e6e6c, _0x18830c), new kakao[(_0x595d97(0x12a))]['LatLng'](_0x59c3ca, _0x90fc8c));
        h_oMap['setBounds'](_0x5090e5), _0x5090e5 = null, h_oMap[_0x595d97(0x2e1)](h_oMap[_0x595d97(0x330)]() - 0x1);
    }
}

function HM_loadLayersByUrlFileAndRepalceTag(_0x84107b, _0x508e92, _0x554703, _0x395579) {
    let _0x46d034 = setInterval(function() {
        h_bLoaded == !![] && (clearInterval(_0x46d034), _0x46d034 = null, _h_ShowLoadingFileMessage(), HM_loadLayersByUrlFile2(_0x84107b, _0x508e92, _0x554703, _0x395579), _0x84107b = null, _0x395579 = null);
    }, 0x12c);
}

function HM_loadLayersByUrlFile(_0x6c4bb4) {
    let _0x2b0a0b = setInterval(function() {
        h_bLoaded == !![] && (clearInterval(_0x2b0a0b), _0x2b0a0b = null, HM_loadLayersByUrlFile2(_0x6c4bb4, '', '', null), _0x6c4bb4 = null);
    }, 0x12c);
}

function _h_getBizConvertObject(_0x563bab, _0x388dfc) {
    const _0x42d8a5 = _0x3a1a23;
    let _0x2bae3c = '',
        _0x1ec6ea = '';
    if (_0x563bab[_0x42d8a5(0x37d)](_0x42d8a5(0x2a9)) >= 0x0) {
        if (_0x388dfc['NM'] != '') _0x563bab = _0x563bab[_0x42d8a5(0xd2)]('#LAYER_NM#', _0x388dfc['NM']);
        else _0x563bab = _0x563bab[_0x42d8a5(0xd2)](_0x42d8a5(0x2a9), _0x42d8a5(0xce));
    }
    let _0x57fc35 = _0x563bab[_0x42d8a5(0x1c4)]('▶');
    if (_0x57fc35['length'] == 0x2) {
        let _0x22c264 = _0x57fc35[0x1][_0x42d8a5(0x1c4)]('\x0a'),
            _0xb1e3de = ![],
            _0xb6f0da = ![],
            _0x593f19 = ![],
            _0x190579 = ![],
            _0x585940 = ![],
            _0x2a24b6 = ![],
            _0x5f008a = ![],
            _0x5b08cb = ![],
            _0x414e5e = ![],
            _0x3d5805 = ![],
            _0x564559 = ![],
            _0x56788d = ![],
            _0x14b086 = ![],
            _0x33954b = ![],
            _0x54f2cb = ![];
        for (let _0x24a223 = 0x0; _0x24a223 < _0x22c264['length']; _0x24a223++) {
            _0x22c264[_0x24a223]['indexOf']('sPointSymbolType᛫string᛫') == 0x0 && (_0x14b086 = !![], _0x22c264[_0x24a223] = _0x22c264[_0x24a223][_0x42d8a5(0x1c4)]('᛫')[0x0] + '᛫' + _0x22c264[_0x24a223][_0x42d8a5(0x1c4)]('᛫')[0x1] + '᛫' + _0x388dfc[_0x42d8a5(0x2ba)]);
            _0x22c264[_0x24a223][_0x42d8a5(0x37d)](_0x42d8a5(0x23b)) == 0x0 && (_0x33954b = !![], _0x22c264[_0x24a223] = _0x22c264[_0x24a223][_0x42d8a5(0x1c4)]('᛫')[0x0] + '᛫' + _0x22c264[_0x24a223][_0x42d8a5(0x1c4)]('᛫')[0x1] + '᛫' + _0x388dfc['POINTSYMBOL_COLOR']);
            _0x22c264[_0x24a223][_0x42d8a5(0x37d)]('sLegend᛫string᛫') == 0x0 && (_0x54f2cb = !![], _0x22c264[_0x24a223] = _0x22c264[_0x24a223]['split']('᛫')[0x0] + '᛫' + _0x22c264[_0x24a223][_0x42d8a5(0x1c4)]('᛫')[0x1] + '᛫' + _0x388dfc['LEGEND']);
            _0x22c264[_0x24a223][_0x42d8a5(0x37d)]('sLayerNM᛫string᛫') == 0x0 && (_0xb1e3de = !![], _0x22c264[_0x24a223] = _0x22c264[_0x24a223][_0x42d8a5(0x1c4)]('᛫')[0x0] + '᛫' + _0x22c264[_0x24a223]['split']('᛫')[0x1] + '᛫' + _0x388dfc['NM']);
            _0x22c264[_0x24a223][_0x42d8a5(0x37d)](_0x42d8a5(0x189)) == 0x0 && (_0xb6f0da = !![], _0x22c264[_0x24a223] = _0x22c264[_0x24a223][_0x42d8a5(0x1c4)]('᛫')[0x0] + '᛫' + _0x22c264[_0x24a223][_0x42d8a5(0x1c4)]('᛫')[0x1] + '᛫' + _0x388dfc['ALPHA']);
            if (_0x22c264[_0x24a223][_0x42d8a5(0x37d)]('sCallUrl᛫string᛫') == 0x0) {
                _0x1ec6ea = _0x22c264[_0x24a223][_0x42d8a5(0x1c4)]('᛫')[0x2];
                if (_0x1ec6ea != '') {
                    let _0xb0899f = _0x1ec6ea[_0x42d8a5(0x1c4)]('.php?')[0x0],
                        _0x54c359 = _0x1ec6ea['split'](_0x42d8a5(0x17d))[0x1],
                        _0x3b16bf = _0x54c359[_0x42d8a5(0x1c4)]('&');
                    for (let _0x510f5c = 0x0; _0x510f5c < _0x3b16bf[_0x42d8a5(0x363)]; _0x510f5c++) {
                        _0x3b16bf[_0x510f5c][_0x42d8a5(0x37d)](_0x42d8a5(0x3c5)) == 0x0 && (_0x593f19 = !![], _0x3b16bf[_0x510f5c] = _0x3b16bf[_0x510f5c][_0x42d8a5(0x1c4)]('=')[0x0] + '=' + _0x388dfc[_0x42d8a5(0x357)]);
                        _0x3b16bf[_0x510f5c][_0x42d8a5(0x37d)](_0x42d8a5(0x37e)) == 0x0 && (_0x190579 = !![], _0x3b16bf[_0x510f5c] = _0x3b16bf[_0x510f5c][_0x42d8a5(0x1c4)]('=')[0x0] + '=' + _0x388dfc['SEARCH_R']);
                        _0x3b16bf[_0x510f5c][_0x42d8a5(0x37d)]('CLASS_MODE=') == 0x0 && (_0x585940 = !![], _0x3b16bf[_0x510f5c] = _0x3b16bf[_0x510f5c]['split']('=')[0x0] + '=' + _0x388dfc['CLASS_MODE']);
                        _0x3b16bf[_0x510f5c][_0x42d8a5(0x37d)](_0x42d8a5(0x2c9)) == 0x0 && (_0x2a24b6 = !![], _0x3b16bf[_0x510f5c] = _0x3b16bf[_0x510f5c][_0x42d8a5(0x1c4)]('=')[0x0] + '=' + _0x388dfc['CLASS_CNT']);
                        _0x3b16bf[_0x510f5c][_0x42d8a5(0x37d)](_0x42d8a5(0x367)) == 0x0 && (_0x5f008a = !![], _0x3b16bf[_0x510f5c] = _0x3b16bf[_0x510f5c][_0x42d8a5(0x1c4)]('=')[0x0] + '=' + _0x388dfc[_0x42d8a5(0x190)]);
                        _0x3b16bf[_0x510f5c][_0x42d8a5(0x37d)](_0x42d8a5(0x3d3)) == 0x0 && (_0x5b08cb = !![], _0x3b16bf[_0x510f5c] = _0x3b16bf[_0x510f5c]['split']('=')[0x0] + '=' + _0x388dfc[_0x42d8a5(0x31b)]);
                        _0x3b16bf[_0x510f5c][_0x42d8a5(0x37d)](_0x42d8a5(0x27b)) == 0x0 && (_0x564559 = !![], _0x3b16bf[_0x510f5c] = _0x3b16bf[_0x510f5c]['split']('=')[0x0] + '=' + _h_nvl(_0x388dfc['CLASS_CUSTOM_ARRAY']));
                        _0x3b16bf[_0x510f5c][_0x42d8a5(0x37d)](_0x42d8a5(0xc0)) == 0x0 && (_0x56788d = !![], _0x3b16bf[_0x510f5c] = _0x3b16bf[_0x510f5c][_0x42d8a5(0x1c4)]('=')[0x0] + '=' + _h_nvl(_0x388dfc[_0x42d8a5(0x21e)]));
                        if (_0x3b16bf[_0x510f5c][_0x42d8a5(0x37d)](_0x42d8a5(0x25d)) == 0x0) {
                            _0x414e5e = !![];
                            let _0x1c9488 = _0x388dfc[_0x42d8a5(0x34d)];
                            if (_h_nvl(_0x388dfc[_0x42d8a5(0x27a)]) != '') _0x1c9488 = _0x388dfc[_0x42d8a5(0x27a)];
                            if (_0x1c9488 == '' && _0x3b16bf[_0x510f5c][_0x42d8a5(0x1c4)]('=')[0x1] != '') {
                                if (_0x3b16bf[_0x510f5c][_0x42d8a5(0x1c4)]('=')[0x1] == _0x42d8a5(0x3a9)) _0x1c9488 = '';
                                else _0x1c9488 = _0x3b16bf[_0x510f5c][_0x42d8a5(0x1c4)]('=')[0x1];
                            }
                            _0x3b16bf[_0x510f5c] = _0x3b16bf[_0x510f5c]['split']('=')[0x0] + '=' + _0x1c9488, _0x1c9488 = null;
                        }
                        if (_0x3b16bf[_0x510f5c]['indexOf'](_0x42d8a5(0x12c)) == 0x0 && _0x388dfc[_0x42d8a5(0x177)] != '') {
                            _0x3d5805 = !![];
                            let _0x50476c = _0x3b16bf[_0x510f5c][_0x42d8a5(0x1c4)]('=');
                            _0x50476c[_0x42d8a5(0x35e)]();
                            let _0x45a4c7 = _0x50476c['join']('=');
                            _0x45a4c7[_0x42d8a5(0xab)](), _0x45a4c7 = _0x45a4c7[_0x42d8a5(0xd2)](_0x42d8a5(0x2d8), '');
                            if (_0x45a4c7 == '') _0x45a4c7 = _0x388dfc[_0x42d8a5(0x177)];
                            else _0x45a4c7 = _0x45a4c7 + '\x20AND\x20' + _0x388dfc[_0x42d8a5(0x177)];
                            _0x3b16bf[_0x510f5c] = _0x3b16bf[_0x510f5c][_0x42d8a5(0x1c4)]('=')[0x0] + '=' + _0x45a4c7;
                        }
                    }
                    _0x54c359 = _0x3b16bf[_0x42d8a5(0x163)]('&'), _0x1ec6ea = _0xb0899f + _0x42d8a5(0x17d) + _0x54c359;
                }
                if (_0x414e5e == ![] && _0x388dfc[_0x42d8a5(0x34d)] != '' && _0x388dfc['POLY_CONTENT'] == '') _0x1ec6ea = _0x1ec6ea + _0x42d8a5(0x2c1) + _0x388dfc[_0x42d8a5(0x34d)];
                if (_0x414e5e == ![] && _0x388dfc[_0x42d8a5(0x27a)] != '') _0x1ec6ea = _0x1ec6ea + _0x42d8a5(0x2c1) + _0x388dfc['SELECT'];
                if (_0x3d5805 == ![] && _0x388dfc[_0x42d8a5(0x177)] != '') _0x1ec6ea = _0x1ec6ea + _0x42d8a5(0x2c3) + _0x388dfc[_0x42d8a5(0x177)];
                if (_0x5b08cb == ![] && _0x388dfc[_0x42d8a5(0x3a3)] != '') _0x1ec6ea = _0x1ec6ea + _0x42d8a5(0x392) + _0x388dfc[_0x42d8a5(0x31b)];
                if (_0x2a24b6 == ![] && _0x388dfc[_0x42d8a5(0xa8)] != '') _0x1ec6ea = _0x1ec6ea + '&CLASS_CNT=' + _0x388dfc[_0x42d8a5(0xa8)];
                if (_0x585940 == ![] && _0x388dfc[_0x42d8a5(0x366)] != '') _0x1ec6ea = _0x1ec6ea + _0x42d8a5(0xf6) + _0x388dfc[_0x42d8a5(0x366)];
                if (_0x190579 == ![] && _0x388dfc['SEARCH_R'] != '') _0x1ec6ea = _0x1ec6ea + _0x42d8a5(0x3c0) + _0x388dfc['SEARCH_R'];
                if (_0x593f19 == ![] && _0x388dfc['METHOD'] != '') _0x1ec6ea = _0x1ec6ea + _0x42d8a5(0x335) + _0x388dfc[_0x42d8a5(0x357)];
                if (_0x5f008a == ![] && _0x388dfc[_0x42d8a5(0x190)] != '') _0x1ec6ea = _0x1ec6ea + _0x42d8a5(0xd5) + _0x388dfc['COLOR_RAMP'];
                if (_0x564559 == ![] && _0x388dfc[_0x42d8a5(0x226)] != '') _0x1ec6ea = _0x1ec6ea + _0x42d8a5(0x2cb) + _0x388dfc[_0x42d8a5(0x226)];
                if (_0x56788d == ![] && _0x388dfc[_0x42d8a5(0x21e)] != '') _0x1ec6ea = _0x1ec6ea + _0x42d8a5(0x301) + _0x388dfc['CUSTOM_SQL_TAG'];
                _0x22c264[_0x24a223] = _0x22c264[_0x24a223][_0x42d8a5(0x1c4)]('᛫')[0x0] + '᛫' + _0x22c264[_0x24a223][_0x42d8a5(0x1c4)]('᛫')[0x1] + '᛫' + _0x1ec6ea;
                if (_0x388dfc[_0x42d8a5(0x357)] == '32' && (_0x22c264[_0x24a223][_0x42d8a5(0x37d)](_0x42d8a5(0x2d1)) >= 0x0 || _0x22c264[_0x24a223][_0x42d8a5(0x37d)](_0x42d8a5(0xb4)) >= 0x0 || _0x22c264[_0x24a223][_0x42d8a5(0x37d)](_0x42d8a5(0x2eb)) >= 0x0 || _0x22c264[_0x24a223]['indexOf']('province_bizgis_dong') >= 0x0)) {
                    let _0x202ef0 = _0x388dfc['POLY_CONTENT'][_0x42d8a5(0x1c4)]('▷')[0x0];
                    if (_0x202ef0[_0x42d8a5(0x363)] == 0x5) _0x22c264[_0x24a223] = _0x22c264[_0x24a223]['replace']('#CTY_SQL_FILE_OR_DONG_SQL_FILE#', _0x42d8a5(0x2eb)), _0x22c264[_0x24a223] = _0x22c264[_0x24a223]['replace'](_0x42d8a5(0xaf), _0x42d8a5(0x34c));
                    else _0x202ef0[_0x42d8a5(0x363)] == 0xa && (_0x22c264[_0x24a223] = _0x22c264[_0x24a223]['replace'](_0x42d8a5(0x2d1), _0x42d8a5(0x33d)), _0x22c264[_0x24a223] = _0x22c264[_0x24a223][_0x42d8a5(0xd2)](_0x42d8a5(0xb4), _0x42d8a5(0x2d4)), _0x22c264[_0x24a223] = _0x22c264[_0x24a223][_0x42d8a5(0xd2)]('TABLE=province_bizgis_cty', _0x42d8a5(0xaf)));
                }
                sTmp = null, saTmp = null;
            }
            if (_0x22c264[_0x24a223][_0x42d8a5(0x37d)](_0x42d8a5(0x16e)) == 0x0) {
                if (_0x22c264[_0x24a223]['indexOf']('sDataString᛫string᛫http') == 0x0) {
                    _0x22c264[_0x24a223] = _0x22c264[_0x24a223][_0x42d8a5(0xd2)](_0x42d8a5(0x3a9), _0x388dfc['SELECT']), _0x22c264[_0x24a223] = _0x22c264[_0x24a223][_0x42d8a5(0xd2)](_0x42d8a5(0x2d8), _0x388dfc[_0x42d8a5(0x177)]);
                    if (_0x388dfc[_0x42d8a5(0x21e)][_0x42d8a5(0x37d)]('#ETC#') == 0x0) _0x22c264[_0x24a223] = _0x22c264[_0x24a223][_0x42d8a5(0xd2)](_0x42d8a5(0x25b), _0x388dfc[_0x42d8a5(0x21e)][_0x42d8a5(0x1c4)]('|')[0x1]);
                }
            }
        }
        let _0x56b99c = _0x563bab['split']('▶')[0x0],
            _0x72007b = _0x22c264['join']('\x0a');
        _0x2bae3c = _0x56b99c + '▶' + _0x72007b, _0x56b99c = null, _0x72007b = null, _0x22c264 = null;
    }
    return _0x57fc35 = null, _0x388dfc = null, _0x563bab = null, _0x2bae3c;
}

function HM_loadLayersByUrlFile2(_0x3ca750, _0x4060e8, _0x3da8c0, _0x1aa10d) {
    const _0x48db95 = _0x3a1a23;
    let _0xa09cb = new XMLHttpRequest();
    _0xa09cb[_0x48db95(0x3e0)](_0x48db95(0x1ce), _0x4efdda), _0xa09cb['open']('GET', _0x3ca750), _0xa09cb[_0x48db95(0x332)] = function() {
        alert('Heatmap\x20서버와의\x20통신에\x20실패하였습니다.\x0a(주된\x20원인:\x20광고차단기능\x20및\x20인트라넷\x20설정\x20등)');
    }, _0xa09cb[_0x48db95(0x284)]();

    function _0x4efdda() {
        const _0x3e77c2 = _0x48db95;
        _0xa09cb = null;
        let _0x207b97 = this[_0x3e77c2(0x254)];
        _0x4060e8 != '' && _0x3da8c0 != '' && (_0x207b97 = _0x207b97[_0x3e77c2(0x1c4)](_0x4060e8)['join'](_0x3da8c0)), _0x1aa10d != null && (_0x207b97 = _h_getBizConvertObject(_0x207b97, _0x1aa10d)), _0x207b97 = HM_setTagAndValueOnBiz(_0x207b97), _h_loadLayers(_0x207b97, ![]), _0x1aa10d = null, _0x207b97 = null;
    }
    _h_ShowLoadingFileMessage();
    let _0x193c9f = setInterval(function() {
        const _0xaa1d72 = _0x48db95;
        let _0x53ee4f = !![],
            _0xddbfe2 = 0x0;
        if (h_oaLayer != null) _0xddbfe2 = h_oaLayer[_0xaa1d72(0x363)];
        for (let _0x2bef95 = 0x0; _0x2bef95 < _0xddbfe2; _0x2bef95++) {
            if (h_oaLayer[_0x2bef95]['sLegend'] == '') {
                _0x53ee4f = ![];
                break;
            }
        }
        _0x53ee4f == !![] && (clearInterval(_0x193c9f), oGrayTimer = null, swal[_0xaa1d72(0x376)]());
    }, 0x12c);
}

function HM_setPara_replaceTagValueOnBiz(_0x3a6529, _0x478e60) {
    _0x3a6529 != '' && _0x478e60 != '' && (h_sBizReplaceTags = _0x3a6529, h_sBizReplaceValues = _0x478e60);
}

function HM_setTagAndValueOnBiz(_0x277d77) {
    const _0x39f67f = _0x3a1a23;
    if (h_sBizReplaceTags != '' && h_sBizReplaceValues != '') {
        let _0x5c88d0 = h_sBizReplaceTags[_0x39f67f(0x1c4)]('^'),
            _0x251532 = h_sBizReplaceValues['split']('^');
        for (let _0x2b8d4d = 0x0; _0x2b8d4d < _0x5c88d0[_0x39f67f(0x363)]; _0x2b8d4d++) {
            _0x277d77 = _0x277d77['split']('#' + _0x5c88d0[_0x2b8d4d] + '#')[_0x39f67f(0x163)](_0x251532[_0x2b8d4d]);
        }
    }
    return _0x277d77;
}

function _h_loadLayersFromTBIZString(_0x2843bc, _0x3ed17c) {
    _h_removeAllLayerFromTOC(), setTimeout(function() {
        _h_loadLayers(_0x2843bc, _0x3ed17c), _0x2843bc = null;
    }, 0x12c);
}

function _h_loadLayers(_0x20bad2, _0x53deac) {
    const _0x1afb76 = _0x3a1a23;
    let _0x57d0da = _0x20bad2[_0x1afb76(0x1c4)]('▶');
    if (_0x57d0da['length'] > 0x1) {
        _0x57d0da[0x0] = _0x57d0da[0x0][_0x1afb76(0xab)]();
        let _0x51335c = _0x57d0da[0x0]['split']('|');
        _h_setMapExtentByString(_0x51335c[0x0]);
        if (_0x51335c[_0x1afb76(0x363)] >= 0x2) H_map_distance_measurement_setCoords(_0x51335c[0x1], ![]);
        _0x51335c = null;
        for (let _0x15e341 = _0x57d0da[_0x1afb76(0x363)] - 0x1; _0x15e341 >= 0x1; _0x15e341--) {
            let _0x2e4e28 = _0x57d0da[_0x15e341][_0x1afb76(0xab)]();
            _0x2e4e28 = _0x2e4e28[_0x1afb76(0xd2)](/\r/g, '\x0a'), _0x2e4e28 = _0x2e4e28[_0x1afb76(0xd2)](/\n\n/g, '\x0a');
            let _0x52aa54 = _0x2e4e28['split']('\x0a'),
                _0x2aa2f4 = 0x0,
                _0x45f443 = '',
                _0x5f37a8 = '',
                _0x679710 = '',
                _0xed4aa7 = '',
                _0x2255d5 = 0x0,
                _0x10b959 = '',
                _0x1147ab = '',
                _0x3dcab2 = !![],
                _0x35e955 = '',
                _0x59d59f = '',
                _0x405c3e = '',
                _0xd4f18a = '',
                _0x210383 = '',
                _0x406abc = '',
                _0xbc8823 = '',
                _0x2a982a = '',
                _0x50cc38 = '',
                _0x31c739 = 0x0,
                _0x1e627f = 0x0,
                _0x2991dc = 0x1e;
            for (let _0x46d531 = 0x0; _0x46d531 < _0x52aa54[_0x1afb76(0x363)]; _0x46d531++) {
                let _0x554d73 = _0x52aa54[_0x46d531],
                    _0x1e6404 = _0x554d73[_0x1afb76(0x1c4)]('᛫');
                if (_0x1e6404[_0x1afb76(0x363)] == 0x3) {
                    if (_0x1e6404[0x0] == _0x1afb76(0x350)) _0x2255d5 = parseInt(_0x1e6404[0x2]);
                    if (_0x1e6404[0x0] == _0x1afb76(0x2e7)) _0x2aa2f4 = parseFloat(_0x1e6404[0x2]);
                    if (_0x1e6404[0x0] == _0x1afb76(0x131)) _0x45f443 = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == 'sLayerNM') _0x5f37a8 = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == _0x1afb76(0x1da)) _0x679710 = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == _0x1afb76(0x1f5)) _0xed4aa7 = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == _0x1afb76(0x298)) _0x10b959 = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == _0x1afb76(0x1b8)) _0x1147ab = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == _0x1afb76(0x310) && _0x1e6404[0x2] == 'true') _0x3dcab2 = !![];
                    if (_0x1e6404[0x0] == _0x1afb76(0x310) && _0x1e6404[0x2] == 'false') _0x3dcab2 = ![];
                    if (_0x1e6404[0x0] == _0x1afb76(0x253)) _0x1e627f = parseInt(_0x1e6404[0x2]);
                    if (_0x1e6404[0x0] == 'nLabelMaxZoom') _0x2991dc = parseInt(_0x1e6404[0x2]);
                    if (_0x1e6404[0x0] == _0x1afb76(0x3d1)) _0x35e955 = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == _0x1afb76(0xb6)) _0x59d59f = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == 'SELECT') _0x405c3e = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == _0x1afb76(0x312)) _0xd4f18a = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == _0x1afb76(0x177)) _0x210383 = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == 'ETC_LABEL') _0x406abc = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == 'ETC') _0xbc8823 = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == _0x1afb76(0x3e1)) _0x2a982a = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == _0x1afb76(0x295)) _0x50cc38 = _0x1e6404[0x2];
                    if (_0x1e6404[0x0] == _0x1afb76(0x19e)) _0x31c739 = _h_isNumeric(_0x1e6404[0x2]) ? parseInt(_0x1e6404[0x2]) : 0x0;
                }
                _0x554d73 = null, _0x1e6404 = null;
            }
            if (_0x2255d5 == 0x1 || _0x2255d5 == 0x2) HM_createAutoHeatMap(_0x2aa2f4, _0x45f443, _0x5f37a8, _0x3dcab2, _0x1147ab);
            else {
                if (_0x2255d5 == 0x3) HM_createProvince(_0x2aa2f4, _0x45f443, _0x5f37a8, _0x3dcab2, _0x1e627f, _0x2991dc, _0x50cc38);
                else {
                    if (_0x2255d5 == 0x2e || _0x2255d5 == 0x2f) HM_createOD(_0x2aa2f4, _0x45f443, _0x5f37a8, _0x3dcab2, _0x1147ab, _0x2255d5);
                    else {
                        if (_0x2255d5 == 0x5) {
                            if (_0x1147ab != '') {
                                let _0x672362 = 0xf;
                                if (_0x1147ab[_0x1afb76(0x37d)](_0x1afb76(0x2b1)) == 0x0) {
                                    let _0xd3832f = _0x5f37a8,
                                        _0x39147b = _0x679710,
                                        _0x31ebe9 = _0xed4aa7,
                                        _0x124ffe = _0x35e955,
                                        _0x37d4e2 = _0x1147ab;
                                    _0x37d4e2 = _0x37d4e2['replace'](_0x1afb76(0x3a9), ''), _0x37d4e2 = _0x37d4e2[_0x1afb76(0xd2)](_0x1afb76(0x2d8), ''), _0x37d4e2 = _0x37d4e2[_0x1afb76(0xd2)](_0x1afb76(0x1fd), ''), _0x37d4e2 = _0x37d4e2[_0x1afb76(0xd2)](_0x1afb76(0x25b), ''), _0x37d4e2 = _0x37d4e2['replace']('#POLY_WHERE#', ''), _0x37d4e2 = _0x37d4e2['replace'](_0x1afb76(0x2b6), _0x35e955);
                                    var _0xd5d8ce = new XMLHttpRequest();
                                    _0xd5d8ce[_0x1afb76(0x236)] = function() {
                                        const _0x39a7d6 = _0x1afb76;
                                        if (this[_0x39a7d6(0x185)] == 0xc8 && this[_0x39a7d6(0x38b)] == this[_0x39a7d6(0xf5)]) {
                                            _0x1147ab = _0xd5d8ce[_0x39a7d6(0x254)]['split'](_0x39a7d6(0x26f))[0x0];
                                            if (_0x1147ab[_0x39a7d6(0x37d)](_0x39a7d6(0x1ef)) > 0x0) {
                                                Swal[_0x39a7d6(0x324)]({
                                                    'icon': 'info',
                                                    'title': '에러',
                                                    'text': _0x37d4e2
                                                });
                                                return;
                                            }
                                            HM_createPointFromDataString(_0x2aa2f4, _0xd3832f, _0x1147ab, _0x672362, _0x124ffe, _0x39147b, _0x31ebe9, _0x3dcab2, _0x1e627f, _0x2991dc, _0x50cc38, _0x31c739), _0xd3832f = null, _0x39147b = null, _0x31ebe9 = null, _0x1147ab = null, _0xd5d8ce = null;
                                        }
                                    }, _0xd5d8ce[_0x1afb76(0x3e2)](_0x1afb76(0x201), _0x37d4e2, !![]), _0xd5d8ce[_0x1afb76(0x284)]();
                                } else HM_createPointFromDataString(_0x2aa2f4, _0x5f37a8, _0x1147ab, _0x672362, _0x35e955, _0x679710, _0xed4aa7, _0x3dcab2, _0x1e627f, _0x2991dc, _0x50cc38, _0x31c739);
                            } else {
                                if (_0x10b959 == _0x1afb76(0x3b7)) HM_createAutoPoint(_0x2aa2f4, _0x45f443, _0x5f37a8, _0x679710, _0xed4aa7, _0x3dcab2, _0x1e627f, _0x2991dc, _0x35e955, _0x59d59f, _0x405c3e, _0xd4f18a, _0x210383, _0x406abc, _0xbc8823, _0x2a982a, _0x50cc38, _0x31c739);
                                else HM_createPoint(_0x2aa2f4, _0x45f443, _0x5f37a8, _0x679710, _0xed4aa7, _0x3dcab2, _0x1e627f, _0x2991dc, _0x35e955, _0x59d59f, _0x405c3e, _0xd4f18a, _0x210383, _0x406abc, _0xbc8823, _0x2a982a, _0x50cc38, _0x31c739);
                            }
                        }
                    }
                }
            }
            _0x45f443 = null, _0x5f37a8 = null, _0x679710 = null, _0xed4aa7 = null, _0x52aa54 = null, _0x2e4e28 = null;
        }
    } else {
        if (_0x57d0da[_0x1afb76(0x363)] == 0x1) {
            _0x57d0da[0x0] = _0x57d0da[0x0][_0x1afb76(0xab)]();
            let _0x4df149 = _0x57d0da[0x0][_0x1afb76(0xab)]()[_0x1afb76(0x1c4)]('|');
            _h_setMapExtentByString(_0x4df149[0x0]);
            if (_0x4df149[_0x1afb76(0x363)] >= 0x2) H_map_distance_measurement_setCoords(_0x4df149[0x1], ![]);
            _0x4df149 = null;
        } else {
            if (_0x53deac == !![]) alert(_0x1afb76(0x24f));
            else _h_showErrorAlert(_0x1afb76(0x24f));
        }
    }
    _0x57d0da = null, _0x20bad2 = null;
}

function _h_saveData(_0x428975, _0x394db7) {
    const _0x6756f4 = _0x3a1a23;
    let _0x48dc8b = navigator[_0x6756f4(0x360)][_0x6756f4(0xc5)](/MSIE\s([\d.]+)/),
        _0x298ea7 = navigator['userAgent'][_0x6756f4(0xc5)](/Trident\/7.0/) && navigator[_0x6756f4(0x360)]['match'](/rv:11/),
        _0x255e70 = navigator[_0x6756f4(0x360)][_0x6756f4(0xc5)](/Edge/g),
        _0x16780a = _0x48dc8b ? _0x48dc8b[0x1] : _0x298ea7 ? 0xb : _0x255e70 ? 0xc : -0x1;
    if (_0x48dc8b && _0x16780a < 0xa) return;
    let _0x235d3f = new Blob([_0x428975], {
        'type': _0x6756f4(0x1f3)
    });
    if (_0x16780a > -0x1) window['navigator'][_0x6756f4(0x37b)](_0x235d3f, _0x394db7);
    else {
        let _0x1fa3c7 = document[_0x6756f4(0x3c2)]('a');
        _0x1fa3c7[_0x6756f4(0x196)] = _0x394db7, _0x1fa3c7['href'] = window[_0x6756f4(0x373)]['createObjectURL'](_0x235d3f), _0x1fa3c7[_0x6756f4(0x26a)] = function(_0x4ffec1) {
            const _0x442d1e = _0x6756f4;
            document[_0x442d1e(0x34e)][_0x442d1e(0x3ee)](_0x4ffec1[_0x442d1e(0x339)]);
        }, _0x1fa3c7[_0x6756f4(0x35d)][_0x6756f4(0x1ed)] = _0x6756f4(0x250), document[_0x6756f4(0x34e)][_0x6756f4(0x18f)](_0x1fa3c7), _0x1fa3c7['click']();
    }
}
var h_oMprogress = null,
    h_bShowMprogress = ![],
    _h_setProgress = function() {
        h_oMprogress = null;
    };

function _h_setProgress2(_0x1017a2) {
    if (h_oMprogress != null) return;
    h_oMprogress = new Mprogress({
        'template': 0x3,
        'parent': '#' + _0x1017a2
    });
}

function _h_setProgressTemplate(_0xb3363d) {
    const _0x26c1da = _0x3a1a23;
    h_oMprogress[_0x26c1da(0x300)]['template'] = _0xb3363d;
}

function _h_setProgressSet(_0x4f70b7, _0xd44213) {
    const _0x5a44e8 = _0x3a1a23;
    h_oMprogress[_0x5a44e8(0x20d)](_0x4f70b7 / _0xd44213);
}

function _h_setProgressStart() {
    const _0x5e8106 = _0x3a1a23;
    h_oMprogress[_0x5e8106(0x1c8)](), h_bShowMprogress = !![];
}

function _h_setProgressStop() {
    h_bShowMprogress = ![], _h_setProgressTemplate(0x3), setTimeout(function() {
        const _0x53be17 = _0x3192;
        h_bShowMprogress == ![] && (h_oMprogress[_0x53be17(0x2bf)](), h_oMprogress['status'] = null);
    }, 0x1f4);
}

function _h_isNumeric(_0x394275, _0x3eba3b) {
    const _0x2080e6 = _0x3a1a23;
    _0x394275 = String(_0x394275)[_0x2080e6(0xd2)](/^\s+|\s+$/g, '');
    if (typeof _0x3eba3b == _0x2080e6(0x2fd) || _0x3eba3b == '1') var _0x1665eb = /^[+\-]?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
    else {
        if (_0x3eba3b == '2') var _0x1665eb = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
        else {
            if (_0x3eba3b == '3') var _0x1665eb = /^[0-9]+(\.[0-9]+)?$/g;
            else var _0x1665eb = /^[0-9]$/g;
        }
    }
    return _0x1665eb[_0x2080e6(0x17c)](_0x394275) ? (_0x394275 = _0x394275[_0x2080e6(0xd2)](/,/g, ''), isNaN(_0x394275) ? ![] : !![]) : ![];
}

function _h_setComma1000(_0x55d002) {
    const _0x2f4c69 = _0x3a1a23;
    return _0x55d002['toString']()[_0x2f4c69(0xd2)](/\B(?=(\d{3})+(?!\d))/g, ',');
}

function _h_getTextWidth(_0x558093, _0x3486c9) {
    const _0x8afabd = _0x3a1a23;
    if (_0x558093 == '') return 0x0;
    let _0x5b189e = 0x0,
        _0x1cc017 = _0x558093[_0x8afabd(0x1c4)]('<br>');
    for (let _0x5f3038 = 0x0; _0x5f3038 < _0x1cc017['length']; _0x5f3038++) {
        let _0x59a5cd = document['createElement'](_0x8afabd(0x123)),
            _0x1ce9eb = _0x59a5cd[_0x8afabd(0x19f)]('2d');
        _0x1ce9eb['font'] = _0x3486c9;
        let _0x5438f8 = _0x1ce9eb['measureText'](_0x1cc017[_0x5f3038])[_0x8afabd(0x2d3)];
        if (_0x5438f8 > _0x5b189e) _0x5b189e = _0x5438f8;
    }
    return _0x5b189e;
}

function _h_getFontName(_0x4af192) {
    const _0x1b9b52 = _0x3a1a23;
    var _0x164d5d = getComputedStyle(_0x4af192)['font-family'],
        _0x31e26e = _0x164d5d[_0x1b9b52(0x1c4)](',');
    if (_0x31e26e['length'] > 0x0) return _0x31e26e[0x0];
    else return _0x1b9b52(0x349);
}

function _h_isEmptyForStringVar(_0x5e6701) {
    if (typeof _0x5e6701 == 'undefined' || _0x5e6701 == null || _0x5e6701 == '') return !![];
    else return ![];
}

function _h_isEmptyForObjectAndFunction(_0x4b57fd) {
    const _0x3724c0 = _0x3a1a23;
    if (typeof _0x4b57fd == _0x3724c0(0x2fd) || _0x4b57fd == null) return !![];
    else return ![];
}

function _h_getParameterByUrl(_0x5979f5, _0x3e55f8) {
    const _0x1ba7af = _0x3a1a23;
    _0x3e55f8 = _0x3e55f8['replace'](/[\[]/, '\x5c[')[_0x1ba7af(0xd2)](/[\]]/, '\x5c]');
    let _0x565f5e = new RegExp(_0x1ba7af(0x1ab) + _0x3e55f8 + _0x1ba7af(0x294)),
        _0xbc93a5 = _0x565f5e[_0x1ba7af(0x1df)](_0x5979f5);
    return _0xbc93a5 === null ? '' : decodeURIComponent(_0xbc93a5[0x1]['replace'](/\+/g, '\x20'));
}

function _h_getDistance(_0x20ebde, _0x2429a2, _0x292b81, _0x209045) {
    const _0x4ef556 = _0x3a1a23;
    let _0x110247 = _h_degreesToRadians(_0x20ebde),
        _0x2c6aed = _h_degreesToRadians(_0x2429a2),
        _0x2976d8 = _h_degreesToRadians(_0x292b81),
        _0x7eaf4 = _h_degreesToRadians(_0x209045),
        _0x4f7ebd = 0x18e3 * 0x3e8,
        _0x2a99a1 = Math[_0x4ef556(0x334)](Math[_0x4ef556(0x24d)](_0x110247) * Math['sin'](_0x2976d8) + Math['cos'](_0x110247) * Math['cos'](_0x2976d8) * Math[_0x4ef556(0x23f)](_0x2c6aed - _0x7eaf4)) * _0x4f7ebd;
    return _0x2a99a1;
}

function _h_degreesToRadians(_0x1c0150) {
    return radians = _0x1c0150 * Math['PI'] / 0xb4, radians;
}

function _h_nvl(_0x2d4496) {
    const _0x2da402 = _0x3a1a23;
    if (typeof _0x2d4496 == _0x2da402(0x2fd) || _0x2d4496 == null || _0x2d4496 == '') _0x2d4496 = '';
    return _0x2d4496;
}

function _h_checkMMSDen(_0x211ecb) {
    const _0x5c1f02 = _0x3a1a23;
    if (_0x211ecb[_0x5c1f02(0x1b8)] != null) {
        if (_0x211ecb[_0x5c1f02(0x1b8)][_0x5c1f02(0x37d)](_0x5c1f02(0x336)) > 0x0) return !![];
    }
    return ![];
}

function _h_checkGeocodingDen(_0x57d1d7) {
    const _0x218ec4 = _0x3a1a23;
    if (_0x57d1d7['sDataString'] != null) {
        if (_0x57d1d7[_0x218ec4(0x1b8)]['indexOf']('/MMS/getDataForGeocoding.php?') > 0x0) return !![];
    }
    return ![];
}
window['addEventListener'](_0x3a1a23(0x1ce), function(_0x2ec73c) {
    const _0xf3a651 = _0x3a1a23;
    h_bLoaded = !![], h_sFontNM = _h_getFontName(document['getElementById'](_0xf3a651(0x383))), h_sFontNM = h_sFontNM[_0xf3a651(0x1c4)]('\x22')[_0xf3a651(0x163)](''), h_sFontNM = h_sFontNM[_0xf3a651(0x1c4)]('\x27')['join'](''), $(h_divMap)[_0xf3a651(0x287)](_0xf3a651(0x22b), _0xf3a651(0x276)), HM_setWaterMark(), __sendMapLoaded(), $(h_divMap)[_0xf3a651(0x107)](function(_0x123111) {
        const _0x543465 = _0xf3a651;
        let _0x56d3ea = _h_getScreenXY2GeoXY(_0x123111[_0x543465(0x30e)], _0x123111[_0x543465(0x14f)]);
        _user_h_Menu_CloseMenu();
        switch (_0x123111[_0x543465(0x277)]) {
            case 0x1:
                h_nNoFireBoundChangedForSpeed++;
                if (h_nNoFireBoundChangedForSpeed > 0x3e8) h_nNoFireBoundChangedForSpeed = 0x0;
                if (h_bOnMap == !![]) _h_realBoundChangedForPointSpeed(h_nNoFireBoundChangedForSpeed, !![]);
            case 0x2:
                break;
            case 0x3:
                break;
            default:
        }
        _0x56d3ea = null, _0x123111 = null;
    }), kakao['maps'][_0xf3a651(0x303)][_0xf3a651(0x257)](map, 'click', function(_0x273a2b) {
        const _0x205fc8 = _0xf3a651;
        _h_onClick(_0x273a2b), _h_removeTocSelectedItem();
        if (_h_map_distance_measurement_drawing_mode == !![]) H_map_distance_measurement_ClickMap(_0x273a2b);
        if (_h_map_distance_measurement_workpath_mode == !![]) H_map_distance_measurement_ClickMapForWorkPath(_0x273a2b);
        if (typeof _hook_MapEvent == _0x205fc8(0x297)) {
            let _0x478f69 = new Object();
            _0x478f69['MODE'] = _0x205fc8(0x38a), _0x478f69[_0x205fc8(0xd4)] = _0x273a2b[_0x205fc8(0x2fa)], _hook_MapEvent(_0x478f69), _0x478f69 = null;
        }
    }), kakao['maps'][_0xf3a651(0x303)]['addListener'](map, _0xf3a651(0x120), function(_0x4fe973) {
        _h_map_distance_measurement_drawing_mode == !![] && H_map_distance_measurement_Finish(_0x4fe973);
    }), kakao['maps']['event'][_0xf3a651(0x257)](map, _0xf3a651(0x1f0), function(_0x56254f) {
        const _0x1298c2 = _0xf3a651;
        _user_h_RightMapclick(_0x56254f[_0x1298c2(0x2fa)]);
        if (typeof _hook_MapEvent == 'function') {
            let _0xc4b0cb = new Object();
            _0xc4b0cb[_0x1298c2(0x283)] = 'rightclick', _0xc4b0cb[_0x1298c2(0xd4)] = _0x56254f[_0x1298c2(0x2fa)], _hook_MapEvent(_0xc4b0cb), _0xc4b0cb = null;
        }
    }), kakao['maps'][_0xf3a651(0x303)][_0xf3a651(0x257)](map, 'mousemove', function(_0x373e66) {
        const _0x2b4d8d = _0xf3a651;
        _h_onMouseMove(_0x373e66), h_oMouseLatlng = _0x373e66[_0x2b4d8d(0x2fa)], h_oMousePoint = _0x373e66['point'];
        if (_h_map_distance_measurement_drawing_mode == !![]) H_map_distance_measurement_MouseMoveMap(_0x373e66);
        h_bOnMap = !![];
    });
    let _0x132ba3 = 0x0,
        _0x51ed8f = null;
    kakao['maps'][_0xf3a651(0x303)][_0xf3a651(0x257)](map, 'bounds_changed', function() {
        _0x132ba3++;
        if (_0x132ba3 > 0x2710) _0x132ba3 = 0x0;
        let _0x256372 = _0x132ba3;
        setTimeout(function() {
            const _0x4897b1 = _0x3192;
            if (_0x132ba3 == _0x256372) {
                if (_0x51ed8f != null) {
                    if (_0x51ed8f[_0x4897b1(0x27e)](map[_0x4897b1(0x2a3)]()) == !![]) return;
                }
                _0x51ed8f = map[_0x4897b1(0x2a3)](), _h_returnInfoWindowsAndShiftPoint(), h_nNoFireBoundChangedForSpeed++;
                if (h_nNoFireBoundChangedForSpeed > 0x3e8) h_nNoFireBoundChangedForSpeed = 0x0;
                _h_realBoundChangedForMaskSpeed(h_nNoFireBoundChangedForSpeed), _h_realBoundChangedForPointSpeed(h_nNoFireBoundChangedForSpeed, ![]), _h_onBounds_changed(), _h_removeTocSelectedItem(), _user_h_removeTmpMapRightMarker(), _h_unSelectedPointTotalLayerByLatLng_R_Meter();
            }
        }, 0x32);
    }), kakao[_0xf3a651(0x12a)][_0xf3a651(0x303)][_0xf3a651(0x257)](map, _0xf3a651(0x258), function() {
        const _0x50daee = _0xf3a651;
        __sendMapMoveStart(), _h_HideTmpPolygonForChangeBound();
        if (typeof _h_mb_hideODCallByXRayMap == _0x50daee(0x297)) _h_mb_hideODCallByXRayMap('');
    }), kakao[_0xf3a651(0x12a)][_0xf3a651(0x303)][_0xf3a651(0x257)](map, _0xf3a651(0x318), function() {}), kakao['maps']['event'][_0xf3a651(0x257)](map, _0xf3a651(0x252), function() {
        const _0xe04cca = _0xf3a651;
        __sendMapMoveEnd(), _h_ShowTmpPolygonForChangeBound();
        if (typeof _h_mb_showODCallByXRayMap == _0xe04cca(0x297)) _h_mb_showODCallByXRayMap('');
    }), kakao['maps'][_0xf3a651(0x303)][_0xf3a651(0x257)](map, 'zoom_start', function() {
        const _0x3f367c = _0xf3a651;
        __sendMapMoveStart(), h_removeTopTempWhiteCircle(), _h_HideTmpPolygonForChangeBound(), _h_returnInfoWindowsAndShiftPoint();
        if (h_oMask != null) h_oMask[_0x3f367c(0x328)](null);
        _h_onZoom_start(), _h_removeTocSelectedItem();
        if (typeof _h_mb_hideODCallByXRayMap == _0x3f367c(0x297)) _h_mb_hideODCallByXRayMap('');
    }), kakao[_0xf3a651(0x12a)][_0xf3a651(0x303)][_0xf3a651(0x257)](map, 'zoom_changed', function() {
        __sendMapMoveEnd(), _h_returnInfoWindowsAndShiftPoint(), h_nNoFireZoomChangedForSpeed++;
        if (h_nNoFireZoomChangedForSpeed > 0x3e8) h_nNoFireZoomChangedForSpeed = 0x0;
        _h_onZoom_changed(), _h_setZoomForPoint(h_nNoFireZoomChangedForSpeed), _h_removeTocSelectedItem(), h_setTopTempWhiteCircle(), h_setTopTempWhiteShape(), _h_ShowTmpPolygonForChangeBound();
        if (typeof _h_mb_showODCallByXRayMap == 'function') _h_mb_showODCallByXRayMap('');
    });
}), window[_0x3a1a23(0x3e0)]('resize', function(_0x589c88) {
    const _0x38e1fe = _0x3a1a23;
    if (typeof _h_mb_ResizeiFrameCallByJS == _0x38e1fe(0x297)) _h_mb_ResizeiFrameCallByJS();
    if (h_nFullMode > 0x0) {
        var _0x343449 = _h_getMapExtent();
        setTimeout(function() {
            const _0x593d95 = _0x38e1fe;
            $(_0x593d95(0x292))['sortable'](_0x593d95(0x1a0));
            if (h_bTOCShow == !![]) {
                h_oAfterFullModeBound = _h_getMapExtent();
                if (h_nFullMode == 0x1) h_oMap[_0x593d95(0x2ed)](h_oBeforeFullModeBound), h_nFullMode = 0x2;
                else h_nFullMode == 0x2 && (h_oMap[_0x593d95(0x2ed)](_0x343449), h_bFullMode = ![], h_nFullMode = 0x0);
                h_oBeforeFullModeBound = null, h_oAfterFullModeBound = null;
            }
        }, 0x12c);
    }
});

function _h_drawTempCircle_marker_click() {}

function _h_drawTempCircle_marker_dragstart() {
    const _0x2e04e2 = _0x3a1a23;
    _h_returnInfoWindowsAndShiftPoint(), h_bDraggingTempCircle = !![], h_oTempCircleMarker[_0x2e04e2(0x16c)](0.8), _h_onChangeStartMasterTempCircleForSlave(), h_removeTopTempWhiteCircle(), _h_realBoundChangedForPointSpeed(h_nNoFireBoundChangedForSpeed, ![]), _h_mb_setOpacityForUserCircleOrShapeResize(!![]);
}

function _h_drawTempCircle_marker_dragend() {
    const _0x265f44 = _0x3a1a23;
    _h_returnInfoWindowsAndShiftPoint(), h_bDraggingTempCircle = ![], h_oTempCircleMarker[_0x265f44(0x16c)](0.8), _h_onChangeTempCircleForAreaSummary(_h_getTempCirclCenter(), _h_getTempCircleR_m()), _h_onChangeMasterTempCircleForSlave(_h_getTempCirclCenter(), _h_getTempCircleR_m()), _h_onChangeEndMasterTempCircleForSlave(), h_setTopTempWhiteCircle(), h_oTempCircleMarker[_0x265f44(0xea)](h_oTempCircle['getPosition']()), _h_mb_setOpacityForUserCircleOrShapeResize(![]);
}

function _h_drawTempCircle_marker_mouseUp() {
    const _0x9772bd = _0x3a1a23;
    h_bDraggingTempCircle == !![] && (h_bDraggingTempCircle = ![], h_oTempCircleMarker[_0x9772bd(0x16c)](0.8), _h_onChangeTempCircleForAreaSummary(_h_getTempCirclCenter(), _h_getTempCircleR_m()), _h_onChangeMasterTempCircleForSlave(_h_getTempCirclCenter(), _h_getTempCircleR_m()), _h_onChangeEndMasterTempCircleForSlave(), h_setTopTempWhiteCircle(), h_setTopTempWhiteShape());
}

function _h_drawTempCircle_marker_mouseover() {
    const _0x5ee647 = _0x3a1a23;
    h_oTempCircleMarker[_0x5ee647(0x16c)](0x1), h_oTempCircleMarker[_0x5ee647(0x10e)](h_oTempCircleMarkerImageForDrag);
}

function _h_drawTempCircle_marker_mouseout() {
    h_oTempCircleMarker['setOpacity'](0.8), h_oTempCircleMarker['setImage'](h_oTempCircleMarkerImage);
}
var h_oNowClickMarkerForMMS = null,
    h_nNowClickMarkerForMMS_ZIndex = -0x1;

function _h_clearClickMarkerForMMS() {
    const _0x213cbe = _0x3a1a23;
    if (h_oNowClickMarkerForMMS != null) {
        h_oNowClickMarkerForMMS[_0x213cbe(0x3dc)](![]);
        if (h_nNowClickMarkerForMMS_ZIndex > 0x0) h_oNowClickMarkerForMMS[_0x213cbe(0xad)](h_nNowClickMarkerForMMS_ZIndex);
    }
    h_oNowClickMarkerForMMS = null, h_nNowClickMarkerForMMS_ZIndex = -0x1;
}

function _h_setDrag_ClickMarkerForMMS() {
    const _0x2f679f = _0x3a1a23;
    h_oNowClickMarkerForMMS != null && (h_oNowClickMarkerForMMS[_0x2f679f(0x3dc)](!![]), h_nNowClickMarkerForMMS_ZIndex = h_oNowClickMarkerForMMS[_0x2f679f(0x23e)](), h_oNowClickMarkerForMMS[_0x2f679f(0xad)](0x989676), kakao[_0x2f679f(0x12a)]['event']['addListener'](h_oNowClickMarkerForMMS, _0x2f679f(0x252), function() {
        const _0x10e407 = _0x2f679f;
        let _0x479bb2 = h_oNowClickMarkerForMMS[_0x10e407(0xc3)]();
        __sendDradEnd_ClickFireMarker(_0x479bb2[_0x10e407(0xac)](), _0x479bb2[_0x10e407(0x387)]()), _0x479bb2 = null;
    }));
}

function onMarkerMouseOverListenerForFire(_0x5b3820, _0x3221cf, _0x25b9b2) {
    return function() {
        const _0xdc9390 = _0x3192;
        let _0x528731 = _0x3221cf[_0xdc9390(0xc3)]()[_0xdc9390(0xac)](),
            _0x3acd87 = _0x3221cf[_0xdc9390(0xc3)]()[_0xdc9390(0x387)]();
        __sendClickFireMarker(_0x528731, _0x3acd87, _0x25b9b2['split'](_0xdc9390(0x16b))[0x0]), h_bOnMarker = ![];
        if (h_oPointMouseOverMarker == null) return;
        _h_setMouseOutMarker(_0x5b3820);
        if (h_oInfowindowForMarker != null) h_oInfowindowForMarker[_0xdc9390(0x376)]();
        h_oInfowindowForMarker = null;
        let _0x4721da = $('div[style*=\x22z-index:\x209876543\x22]')[_0xdc9390(0x363)];
        if (_0x4721da > 0x0) $(_0xdc9390(0x305))[_0xdc9390(0x30d)]();
        _h_clearClickMarkerForMMS(), h_oNowClickMarkerForMMS = _0x3221cf, _h_setDrag_ClickMarkerForMMS();
    };
}

function onMarkerMouseOverListenerForVIEW_URL(_0x3f587b, _0xd7d044, _0x13934c) {
    return function() {
        const _0x144753 = _0x3192;
        let _0x1632f2 = _0x13934c[_0x144753(0x1c4)]('<br>'),
            _0x4c86d5 = '',
            _0x23afa9 = '';
        for (let _0x481ae1 = 0x0; _0x481ae1 < _0x1632f2[_0x144753(0x363)]; _0x481ae1++) {
            let _0x278aa0 = _0x1632f2[_0x481ae1]['split'](_0x144753(0x13a));
            if (_0x278aa0[_0x144753(0x363)] >= 0x2) {
                _0x4c86d5 = _0x278aa0[0x1];
                break;
            }
            _0x278aa0 = null;
        }
        let _0x1b60e6 = _0x3f587b['sLayerNM'],
            _0x585ea0 = _0xd7d044['getPosition']()[_0x144753(0xac)](),
            _0x5381da = _0xd7d044[_0x144753(0xc3)]()[_0x144753(0x387)]();
        __sendClick_VIEW_URL_Marker(_0x1b60e6, _0x585ea0, _0x5381da, _0x4c86d5), _0x13934c = null, _0x1632f2 = null, _0x4c86d5 = null;
    };
}

function onPoiMarkerMouseOverListener(_0x4500ec, _0x4e2c01, _0x55e818) {
    return function() {
        __sendClick_POI_Marker(_0x4e2c01, _0x55e818);
    };
}

function onMarkerMouseOverListener(_0x3619f3, _0x5480e7, _0x485045, _0x31b120) {
    return function() {
        h_bOnMap = ![], h_bOnMarker = !![];
        let _0x3481b4 = h_oMousePoint;
        h_nNoFireMouseOver++;
        if (h_nNoFireMouseOver > 0x3e8) h_nNoFireMouseOver = 0x0;
        let _0x439e9a = h_nNoFireMouseOver;
        setTimeout(function() {
            const _0x1386a4 = _0x3192;
            let _0x40cee6 = 0x0;
            if (_0x3481b4 != null && h_oMousePoint != null) _h_GetDistant(_0x3481b4['x'], _0x3481b4['y'], h_oMousePoint['x'], h_oMousePoint['y']);
            if (_0x439e9a == h_nNoFireMouseOver && _0x40cee6 < _0x31b120 * 0x2 && h_bOnMarker == !![]) {
                if (h_oPointMouseOverMarker == _0x5480e7) {
                    if (h_isMobile == !![] || h_isTablet == !![]) closeInfoWindow(_0x3619f3, _0x5480e7);
                    return;
                }
                if (_0x485045 == '') {
                    if (typeof _0x5480e7['pRefMarker'] != _0x1386a4(0x2fd)) {
                        _0x5480e7[_0x1386a4(0x331)][_0x1386a4(0x2e0)] = _0x5480e7, kakao[_0x1386a4(0x12a)][_0x1386a4(0x303)][_0x1386a4(0x31a)](_0x5480e7[_0x1386a4(0x331)], 'mouseover', this);
                        return;
                    }
                }
                if (_0x485045[_0x1386a4(0x37d)](_0x1386a4(0x2e6)) == 0x0 || _0x485045[_0x1386a4(0x37d)]('CLICK_FIRE_POINT^') == 0x0) {
                    let _0x13a17d = _0x485045[_0x1386a4(0x1c4)](_0x1386a4(0x16b));
                    _0x13a17d[0x0] = '', _0x485045 = _0x13a17d[_0x1386a4(0x163)](_0x1386a4(0x16b)), _0x485045 = _0x485045['substr'](0x4), _0x13a17d = null;
                }
                _0x5480e7['getTitle']() == '\x20' && onMarkerMouseOverListener_shift(_0x3619f3, _0x5480e7, _0x31b120);
                if (_0x3619f3 != null) {
                    if (_0x485045[_0x1386a4(0x37d)](_0x1386a4(0x2af)) != 0x0) _0x485045 = _h_getInfoWindowContentsForDiv(_0x485045, 0xe, ![], _0x5480e7[_0x1386a4(0xc3)]()['getLng'](), _0x5480e7[_0x1386a4(0xc3)]()['getLat']());
                    if (typeof _0x5480e7['pOriMarker'] == _0x1386a4(0x2fd)) _h_setMouseOverMarker(_0x3619f3, _0x5480e7, _0x31b120);
                    else _h_setMouseOverMarker(_0x3619f3, _0x5480e7[_0x1386a4(0x2e0)], _0x31b120);
                    if (h_oInfowindowForMarker != null) h_oInfowindowForMarker[_0x1386a4(0x376)]();
                    h_oInfowindowForMarker = null, h_oInfowindowForMarker = new kakao['maps']['InfoWindow']({
                        'content': _0x485045,
                        'zIndex': 0x96b43f,
                        'disableAutoPan': !![]
                    }), h_oInfowindowForMarker[_0x1386a4(0x3e2)](_0x3619f3[_0x1386a4(0x383)], _0x5480e7), h_setTopInfoWindow(), $('div[style*=\x22z-index:\x209876543\x22]')[_0x1386a4(0x287)]('border-radius', _0x1386a4(0x32a)), $(_0x1386a4(0x305))[_0x1386a4(0x287)](_0x1386a4(0x21d), _0x1386a4(0xd9));
                    if (_h_checkKeyExistFromObject(_0x5480e7, _0x1386a4(0x35e)) == !![]) {
                        let _0x703fe2 = 0x0;
                        _0x703fe2 = _0x5480e7['shift'], h_oInfowindowForMarker[_0x1386a4(0xea)](new kakao[(_0x1386a4(0x12a))][(_0x1386a4(0x32b))](_0x5480e7[_0x1386a4(0xc3)]()['getLat'](), _0x5480e7['getPosition']()[_0x1386a4(0x387)]() - _0x703fe2 * _h_getGeoDisBy1Pixel()));
                    }
                } else {
                    if (_0x3619f3 == null) {
                        if (h_oInfowindowForMarker != null) h_oInfowindowForMarker[_0x1386a4(0x376)]();
                        h_oInfowindowForMarker = null, h_oInfowindowForMarker = new kakao[(_0x1386a4(0x12a))][(_0x1386a4(0x25e))]({
                            'content': _0x485045,
                            'zIndex': 0x96b43f,
                            'disableAutoPan': !![]
                        }), h_oInfowindowForMarker[_0x1386a4(0x3e2)](h_oMap, _0x5480e7), h_setTopInfoWindow(), $(_0x1386a4(0x305))[_0x1386a4(0x287)](_0x1386a4(0x194), _0x1386a4(0x32a)), $(_0x1386a4(0x305))[_0x1386a4(0x287)](_0x1386a4(0x21d), _0x1386a4(0xd9));
                        if (_h_checkKeyExistFromObject(_0x5480e7, _0x1386a4(0x35e)) == !![]) {
                            let _0x248dd1 = 0x0;
                            _0x248dd1 = _0x5480e7[_0x1386a4(0x35e)], h_oInfowindowForMarker[_0x1386a4(0xea)](new kakao[(_0x1386a4(0x12a))][(_0x1386a4(0x32b))](_0x5480e7[_0x1386a4(0xc3)]()[_0x1386a4(0xac)](), _0x5480e7[_0x1386a4(0xc3)]()['getLng']() - _0x248dd1 * _h_getGeoDisBy1Pixel()));
                        }
                    }
                }
            }
        }, 0x64);
    };
}

function onMarkerMouseOutListener(_0x7b3e50, _0x52102f) {
    return function() {
        const _0x227b6f = _0x3192;
        h_bOnMarker = ![];
        if (h_oPointMouseOverMarker == null) return;
        _h_setMouseOutMarker(_0x7b3e50);
        if (h_oInfowindowForMarker != null) h_oInfowindowForMarker[_0x227b6f(0x376)]();
        h_oInfowindowForMarker = null;
        let _0x300b2e = $('div[style*=\x22z-index:\x209876543\x22]')[_0x227b6f(0x363)];
        if (_0x300b2e > 0x0) $(_0x227b6f(0x305))['remove']();
    };
}

function _h_setEventForPolygon(_0x491f4f, _0x4213f4, _0x1234d7, _0x570d09) {
    const _0xac6ecc = _0x3a1a23;
    kakao[_0xac6ecc(0x12a)][_0xac6ecc(0x303)][_0xac6ecc(0x257)](_0x491f4f, _0xac6ecc(0x38a), function(_0x5ab120) {
        const _0x45776d = _0xac6ecc;
        _h_returnInfoWindowsAndShiftPoint(), h_bOnMap = ![];
        h_oPolyPreSelectPolygon != null && (h_oPolyPreSelectPolygon[_0x45776d(0x39d)]({
            'strokeWeight': h_nPolyStrokeWeight
        }), h_oPolyPreSelectPolygon[_0x45776d(0x39d)]({
            'strokeColor': h_sPolyStrokeColor
        }));
        _0x491f4f[_0x45776d(0x39d)]({
            'strokeWeight': _0x1234d7 + 0x2
        }), _0x491f4f[_0x45776d(0x39d)]({
            'strokeColor': _0x570d09
        });
        let _0x31896c = '';
        _0x31896c = _h_getInfoWindowContentsForDiv(_0x4213f4, 0xe, ![]), h_oInfowindowForPoly_Line[_0x45776d(0x286)](_0x31896c);
        if (_h_isEmptyForObjectAndFunction(_0x5ab120[_0x45776d(0x2fa)]) == ![]) h_oInfowindowForPoly_Line[_0x45776d(0xea)](_0x5ab120[_0x45776d(0x2fa)]);
        else h_oInfowindowForPoly_Line['setPosition'](_0x5ab120['getPosition']());
        h_oInfowindowForPoly_Line[_0x45776d(0x328)](h_oMap), $(_0x45776d(0x305))['css'](_0x45776d(0x194), '8px'), $(_0x45776d(0x305))[_0x45776d(0x287)]('box-shadow', _0x45776d(0xd9)), h_setTopInfoWindow(), h_oPolyPreSelectPolygon = _0x491f4f, _0x31896c = null, h_nPolyStrokeWeight = _0x1234d7, h_sPolyStrokeColor = _0x570d09;
    });
}

function _h_setEventForPolygonLabel(_0x5469c9, _0x498514) {
    const _0x4bd834 = _0x3a1a23;
    kakao[_0x4bd834(0x12a)]['event']['addListener'](_0x5469c9, 'click', function() {
        const _0x3bb086 = _0x4bd834;
        h_bOnMap = ![], _0x498514 != null && kakao[_0x3bb086(0x12a)]['event'][_0x3bb086(0x31a)](_0x498514, _0x3bb086(0x38a), this);
    });
}
var $h_ctrlTOC = null,
    h_bTOCShow = !![],
    h_bTOCRight = ![],
    h_bBottomAutoMapLegendShow = ![],
    h_nTOCWidth = 0x12c;

function _h_removeTopLayerFromTOC() {
    const _0x27d7b8 = _0x3a1a23;
    $oLi = document['getElementById'](_0x27d7b8(0x232))[_0x27d7b8(0xe4)], $oLi[_0x27d7b8(0x3b6)][_0x27d7b8(0x3ee)]($oLi);
}

function _h_removeLayerFromTOCByOHM(_0xf3f04a) {
    const _0x4b6edd = _0x3a1a23;
    let _0x2a0f24 = document['getElementById'](_0x4b6edd(0x232))[_0x4b6edd(0xb8)][_0x4b6edd(0x363)];
    for (let _0x569f57 = _0x2a0f24 - 0x1; _0x569f57 >= 0x0; _0x569f57--) {
        if (document['getElementById'](_0x4b6edd(0x232))[_0x4b6edd(0xb8)][_0x569f57]['id'] == _0xf3f04a[_0x4b6edd(0x263)]) {
            $oLi = document[_0x4b6edd(0x243)]('TOC_LIST')[_0x4b6edd(0xb8)][_0x569f57], $oLi[_0x4b6edd(0x3b6)][_0x4b6edd(0x3ee)]($oLi), $oLi = null;
            break;
        }
    }
    _0xf3f04a = null;
}

function _h_checkAllLayerFromTOC() {
    const _0x544b08 = _0x3a1a23;
    let _0x49b13c = h_oaLayer['length'];
    for (let _0x2f8800 = _0x49b13c - 0x1; _0x2f8800 >= 0x0; _0x2f8800--) {
        let _0x40a3d6 = h_oaLayer[_0x2f8800][_0x544b08(0x263)],
            _0x5e9f04 = _h_getHM_ByID(_0x40a3d6);
        if (_0x5e9f04[_0x544b08(0x310)] != !![]) HM_setVisible(!![], _0x5e9f04);
        _0x5e9f04 = null, _0x40a3d6 = null;
    }
    $(_0x544b08(0x292))[_0x544b08(0x347)](_0x544b08(0x3b3))[_0x544b08(0x329)](_0x544b08(0x2b8), !![]);
}

function _h_uncheckAllLayerFromTOC() {
    const _0x3a0927 = _0x3a1a23;
    let _0x47f37d = h_oaLayer['length'];
    for (let _0x121757 = _0x47f37d - 0x1; _0x121757 >= 0x0; _0x121757--) {
        let _0xee297b = h_oaLayer[_0x121757][_0x3a0927(0x263)],
            _0x548f76 = _h_getHM_ByID(_0xee297b);
        if (_0x548f76[_0x3a0927(0x310)] != ![]) HM_setVisible(![], _0x548f76);
        _0x548f76 = null, _0xee297b = null;
    }
    $(_0x3a0927(0x292))[_0x3a0927(0x347)](_0x3a0927(0x3b3))['prop'](_0x3a0927(0x2b8), ![]);
}

function _h_removeAllLayerFromTOCByTOCClick() {
    const _0x3798ee = _0x3a1a23;
    let _0x4c3c2e = Swal[_0x3798ee(0x109)]({
            'customClass': {
                'confirmButton': _0x3798ee(0x3c4),
                'cancelButton': 'btn\x20btn-danger'
            },
            'buttonsStyling': ![]
        }),
        _0x5a2c59 = _0x3798ee(0x266);
    if (g_bLayerListRight == ![]) _0x5a2c59 = _0x3798ee(0x20e);
    _0x4c3c2e[_0x3798ee(0x324)]({
        'title': '모든\x20레이어를\x20삭제합니다.',
        'text': '',
        'position': _0x5a2c59,
        'icon': 'warning',
        'showCancelButton': !![],
        'confirmButtonText': '취소',
        'cancelButtonText': '삭제',
        'reverseButtons': !![]
    })[_0x3798ee(0x1e3)](function(_0x7ed0b4) {
        const _0x534e3d = _0x3798ee;
        if (_0x7ed0b4[_0x534e3d(0x24a)]) {} else _0x7ed0b4['dismiss'] === Swal[_0x534e3d(0x197)]['cancel'] && _h_removeAllLayerFromTOC();
    });
}

function _h_removeAllLayerFromTOC() {
    const _0x2d2e59 = _0x3a1a23;
    if (h_oaLayer == null) return;
    if (h_oaLayer['length'] == null) return;
    let _0x4024fc = h_oaLayer[_0x2d2e59(0x363)];
    for (let _0x16eae7 = _0x4024fc - 0x1; _0x16eae7 >= 0x0; _0x16eae7--) {
        let _0x1334fa = h_oaLayer[_0x16eae7][_0x2d2e59(0x263)],
            _0x1f7d81 = _h_getHM_ByID(_0x1334fa);
        HM_removeHeatMap(_0x1f7d81), $oLi = document[_0x2d2e59(0x243)](_0x2d2e59(0x232))[_0x2d2e59(0xe4)], $oLi[_0x2d2e59(0x3b6)][_0x2d2e59(0x3ee)]($oLi), _0x1f7d81 = null, _0x1334fa = null;
    }
    let _0x5aac52 = ![];
    if (h_oaLayer == null) _0x5aac52 = !![];
    else {
        if (h_oaLayer[_0x2d2e59(0x363)] == 0x0) _0x5aac52 = !![];
    }
    _0x5aac52 == !![] && $h_ctrlTOC[_0x2d2e59(0x260)]();
}

function _h_OnSortChangeTOC(_0x29b5a0) {
    const _0x2bcc81 = _0x3a1a23;
    let _0x3f6153 = _0x29b5a0[_0x2bcc81(0x17b)]('toArray'),
        _0x34b364 = new Array();
    for (let _0x101b6c = 0x0; _0x101b6c < _0x3f6153[_0x2bcc81(0x363)]; _0x101b6c++) {
        _0x34b364[_0x2bcc81(0x29a)](_h_getHM_ByID(_0x3f6153[_0x101b6c]));
    }
    h_oaLayer = _0x34b364, _0x34b364 = null;
    let _0x14b93b = h_oaLayer[_0x2bcc81(0x363)],
        _0x4be9cd = 0x0;
    for (let _0x30061b = 0x0; _0x30061b < _0x14b93b; _0x30061b++) {
        _0x4be9cd = (_0x14b93b - _0x30061b) * h_nItemCntPerLayer;
        if (h_oaLayer[_0x30061b] != null) {
            if (h_oaLayer[_0x30061b]['nType'] == 0x1 || h_oaLayer[_0x30061b]['nType'] == 0x2) {
                if (h_bNaver == ![]) {
                    if (h_oaLayer[_0x30061b]['heatmapOverlay'] != null) {
                        let _0xa953cc = h_oaLayer[_0x30061b][_0x2bcc81(0x348)]['getZIndex']();
                        _0xa953cc != _0x4be9cd && (h_oaLayer[_0x30061b]['heatmapOverlay'][_0x2bcc81(0xad)](_0x4be9cd), h_oaLayer[_0x30061b][_0x2bcc81(0x205)] = _0x4be9cd);
                    }
                } else h_oaLayer[_0x30061b][_0x2bcc81(0x205)] = _0x4be9cd;
            } else {
                if (h_oaLayer[_0x30061b][_0x2bcc81(0x350)] == 0x3) {
                    let _0x51f49f = h_oaLayer[_0x30061b][_0x2bcc81(0x1ad)][0x0][_0x2bcc81(0x233)]['getZIndex']();
                    if (_0x51f49f != _0x4be9cd) {
                        if (h_oaLayer[_0x30061b]['aPointOrLineOrPolygon'] != null) {
                            let _0x5df1ad = h_oaLayer[_0x30061b][_0x2bcc81(0x1ad)][_0x2bcc81(0x363)];
                            for (let _0x585246 = 0x0; _0x585246 < _0x5df1ad; _0x585246++) h_oaLayer[_0x30061b][_0x2bcc81(0x1ad)][_0x585246][_0x2bcc81(0x233)][_0x2bcc81(0xad)](_0x4be9cd);
                            h_oaLayer[_0x30061b][_0x2bcc81(0x205)] = _0x4be9cd;
                        }
                    }
                    if (h_oaLayer[_0x30061b]['aLabel'] != null) {
                        let _0x4895cf = h_oaLayer[_0x30061b][_0x2bcc81(0x393)]['_markers'],
                            _0x42309b = _0x4895cf[0x0][_0x2bcc81(0x23e)]();
                        if (_0x42309b != _0x4be9cd + 0x1) {
                            let _0x632b6f = _0x4895cf[_0x2bcc81(0x363)];
                            for (let _0x326212 = 0x0; _0x326212 < _0x632b6f; _0x326212++) _0x4895cf[_0x326212][_0x2bcc81(0xad)](_0x4be9cd + 0x1);
                        }
                        _0x4895cf = null;
                    }
                } else {
                    if (h_oaLayer[_0x30061b]['nType'] == 0x2e || h_oaLayer[_0x30061b]['nType'] == 0x2f) _h_mb_setLayerIdx(h_oaLayer[_0x30061b][_0x2bcc81(0x263)], _0x4be9cd);
                    else {
                        if (h_oaLayer[_0x30061b][_0x2bcc81(0x350)] == 0x5) {
                            if (h_oaLayer[_0x30061b][_0x2bcc81(0x1ad)] == null) return;
                            let _0x33e2d6 = h_oaLayer[_0x30061b][_0x2bcc81(0x1ad)][_0x2bcc81(0x1a3)];
                            if (_0x33e2d6[_0x2bcc81(0x363)] == 0x0) return;
                            let _0x609972 = _0x33e2d6[0x0][_0x2bcc81(0x23e)]();
                            if (_0x609972 != _0x4be9cd) {
                                let _0x5d7fda = _0x33e2d6[_0x2bcc81(0x363)];
                                for (let _0x241787 = 0x0; _0x241787 < _0x5d7fda; _0x241787++) _0x33e2d6[_0x241787][_0x2bcc81(0xad)](_0x4be9cd);
                                if (typeof h_oaLayer[_0x30061b][_0x2bcc81(0xbe)] != _0x2bcc81(0x2fd))
                                    for (let _0x56f732 = 0x2; _0x56f732 <= 0xc; _0x56f732++) {
                                        let _0x37d326 = h_oaLayer[_0x30061b][_0x2bcc81(0xbe)][_0x56f732];
                                        for (let _0x58e723 = 0x0; _0x58e723 < _0x37d326[_0x2bcc81(0x363)]; _0x58e723++) _0x37d326[_0x58e723][_0x2bcc81(0xad)](_0x4be9cd);
                                        _0x37d326 = h_oaLayer[_0x30061b][_0x2bcc81(0x1a5)][_0x56f732];
                                        for (let _0x1ac391 = 0x0; _0x1ac391 < _0x37d326[_0x2bcc81(0x363)]; _0x1ac391++) _0x37d326[_0x1ac391]['setZIndex'](_0x4be9cd);
                                        _0x37d326 = null, _0x56f732++;
                                    }
                                _h_SetzIndexBufferOnPoint(h_oaLayer[_0x30061b], _0x4be9cd), h_oaLayer[_0x30061b]['zIndex'] = _0x4be9cd;
                            }
                            _0x33e2d6 = null;
                            if (h_oaLayer[_0x30061b][_0x2bcc81(0x393)] != null) {
                                if (h_oaLayer[_0x30061b]['aLabel'][_0x2bcc81(0x1a3)]['length'] > 0x0) {
                                    let _0x373e53 = h_oaLayer[_0x30061b][_0x2bcc81(0x393)]['_markers'],
                                        _0x135399 = _0x373e53[0x0][_0x2bcc81(0x23e)]();
                                    if (_0x135399 != _0x4be9cd - 0x1) {
                                        let _0x43f957 = _0x373e53[_0x2bcc81(0x363)];
                                        for (let _0x55364f = 0x0; _0x55364f < _0x43f957; _0x55364f++) _0x373e53[_0x55364f]['setZIndex'](_0x4be9cd - 0x1);
                                    }
                                    _0x373e53 = null;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    _h_ReorderZindexLayerForNaver();
}

function _h_onRemoveListForTOC(_0x25b587) {
    const _0x4e59d2 = _0x3a1a23;
    _0x25b587 = _0x25b587 || window[_0x4e59d2(0x303)];
    let _0x20fd94 = _0x25b587[_0x4e59d2(0x339)] || _0x25b587[_0x4e59d2(0x2b0)],
        _0x577af2 = _0x20fd94['parentElement']['parentElement'][_0x4e59d2(0x248)][_0x4e59d2(0x248)]['id'],
        _0x38cee5 = _h_getHM_ByID(_0x577af2);
    HM_removeHeatMap(_0x38cee5), $oLi = _0x20fd94['parentElement'][_0x4e59d2(0x248)]['parentElement'][_0x4e59d2(0x248)], $oLi['parentNode'][_0x4e59d2(0x3ee)]($oLi), _0x38cee5 = null, _h_OnSortChangeTOC($(_0x4e59d2(0x292))), _h_ReorderZindexLayerForNaver();
    let _0x27f34d = ![];
    if (h_oaLayer == null) _0x27f34d = !![];
    else {
        if (h_oaLayer[_0x4e59d2(0x363)] == 0x0) _0x27f34d = !![];
    }
    _0x27f34d == !![] && $h_ctrlTOC['hide']();
}

function _h_onChangeCheckBoxForTOC() {
    const _0xc8ee9a = _0x3a1a23;
    window['$']('#sortable-div')[_0xc8ee9a(0x347)](_0xc8ee9a(0x362))[_0xc8ee9a(0x259)](function() {
        const _0x5cc44b = _0xc8ee9a;
        let _0x3a9aff = this[_0x5cc44b(0x248)][_0x5cc44b(0x248)]['parentElement']['id'],
            _0x12295b = _h_getHM_ByID(_0x3a9aff);
        _0x12295b != null ? _0x12295b[_0x5cc44b(0x310)] != this[_0x5cc44b(0x2b8)] && HM_setVisible(this[_0x5cc44b(0x2b8)], _0x12295b) : _h_showErrorAlert(_0x5cc44b(0x274)), _0x12295b = null;
    }), _h_ReorderZindexLayerForNaver();
}

function _h_onShowHideLegendListForTOC(_0x3ce716) {
    const _0x16ea4f = _0x3a1a23;
    _0x3ce716 = _0x3ce716 || window[_0x16ea4f(0x303)];
    let _0x5d2928 = _0x3ce716['target'] || _0x3ce716[_0x16ea4f(0x2b0)],
        _0x4b812a = _0x5d2928[_0x16ea4f(0x248)][_0x16ea4f(0x248)][_0x16ea4f(0x248)][_0x16ea4f(0x248)]['children'][0x1];
    if (_0x4b812a[_0x16ea4f(0x2e8)] == 'collapse') {
        _0x4b812a[_0x16ea4f(0x2e8)] = _0x16ea4f(0x30a), _0x5d2928[_0x16ea4f(0x2e8)] = _0x16ea4f(0x33e);
        let _0x181a42 = _0x4b812a['children'][0x0];
        if (_0x181a42[_0x16ea4f(0x3cb)] == '' || _0x181a42['innerText'] == h_csNODATA) {
            let _0x4a088c = _0x5d2928['parentElement']['parentElement'][_0x16ea4f(0x248)][_0x16ea4f(0x248)]['id'],
                _0x486c28 = _h_getHM_ByID(_0x4a088c);
            if (_0x486c28 != null) {
                if (_0x486c28[_0x16ea4f(0x350)] == 0x1) _0x181a42[_0x16ea4f(0x2e8)] = 'layerLegend-overlay-ForDensity';
                else {
                    if (_0x486c28[_0x16ea4f(0x350)] == 0x2e) _0x181a42[_0x16ea4f(0x2e8)] = _0x16ea4f(0x19c);
                    else {
                        if (_0x486c28[_0x16ea4f(0x350)] == 0x2f) _0x181a42[_0x16ea4f(0x2e8)] = _0x16ea4f(0x19c);
                        else _0x181a42[_0x16ea4f(0x2e8)] = _0x16ea4f(0x380);
                    }
                }
                if (_0x486c28[_0x16ea4f(0x350)] == 0x5) HM_CreateBottomAutoLegendForPoint(_0x486c28['sLegend'], _0x181a42, _0x486c28);
                else HM_CreateBottomAutoLegend(_0x486c28[_0x16ea4f(0x3d1)], _0x181a42);
            }
            _0x4a088c = null, _0x486c28 = null;
        }
        _0x181a42 = null;
    } else _0x4b812a[_0x16ea4f(0x2e8)] = _0x16ea4f(0xed), _0x5d2928['className'] = _0x16ea4f(0x394);
    _0x5d2928 = null, _0x4b812a = null;
}

function _h_reloadLayerLegend(_0xc60edd) {
    const _0x11a6b4 = _0x3a1a23;
    $oLis = document[_0x11a6b4(0x243)](_0x11a6b4(0x232));
    let _0x3c4228 = $oLis[_0x11a6b4(0x2dc)];
    for (let _0xfdb525 = 0x0; _0xfdb525 < _0x3c4228; _0xfdb525++) {
        if (_0xc60edd[_0x11a6b4(0x263)] == $oLis[_0x11a6b4(0x108)][_0xfdb525]['id']) {
            let _0x46dfba = $oLis[_0x11a6b4(0x108)][_0xfdb525][_0x11a6b4(0xb8)][0x0];
            $(_0x46dfba)[_0x11a6b4(0x347)]('.label-forLayerNM')[0x0][_0x11a6b4(0x3cb)] = _0xc60edd[_0x11a6b4(0xef)], $(_0x46dfba)['find']('.label-forLayerNM')[0x0]['title'] = _0xc60edd[_0x11a6b4(0xef)];
            if (_0xc60edd['nType'] == 0x5) {
                let _0x1b5caf = _h_GetMarkerSrc(_0xc60edd[_0x11a6b4(0x1da)], _0xc60edd[_0x11a6b4(0x1f5)], 0x10);
                $(_0x46dfba)[_0x11a6b4(0x347)]('img')[_0x11a6b4(0x342)](_0x11a6b4(0x36d), _0x1b5caf), _0x1b5caf = null;
            }
            _0x46dfba = $oLis[_0x11a6b4(0x108)][_0xfdb525][_0x11a6b4(0xb8)][0x1];
            if (_0x46dfba[_0x11a6b4(0x2e8)] == _0x11a6b4(0xed)) {} else {
                let _0x1ad27d = _0x46dfba[_0x11a6b4(0x108)][0x0];
                if (_0xc60edd['nType'] == 0x1) _0x1ad27d[_0x11a6b4(0x2e8)] = 'layerLegend-overlay-ForDensity';
                else {
                    if (_0xc60edd['nType'] == 0x2e) _0x1ad27d[_0x11a6b4(0x2e8)] = _0x11a6b4(0x19c);
                    else {
                        if (_0xc60edd['nType'] == 0x2f) _0x1ad27d[_0x11a6b4(0x2e8)] = 'layerLegend-overlay-ForDensity';
                        else _0x1ad27d['className'] = _0x11a6b4(0x380);
                    }
                }
                if (_0xc60edd[_0x11a6b4(0x350)] == 0x5) HM_CreateBottomAutoLegendForPoint(_0xc60edd[_0x11a6b4(0x3d1)], _0x1ad27d, _0xc60edd);
                else HM_CreateBottomAutoLegend(_0xc60edd[_0x11a6b4(0x3d1)], _0x1ad27d);
                _0x1ad27d = null;
            }
        }
    }
    $oLis = null;
}
var sTOC_String = _0x3a1a23(0x3b9) + h_nTOCWidth + _0x3a1a23(0x139) + '<div\x20id=\x22_LAYER_CHECK_UNCHECK\x22\x20style=\x22display:#LAYER_CHECKALL_RIGHT_DISPALY#;\x20position:\x20absolute;\x20top:\x2010px;\x20right:\x20#LAYER_CHECKALL_RIGHT#px;\x22>' + '<a\x20onclick=\x22_h_checkAllLayerFromTOC()\x22><i\x20class=\x22fa\x20fa-check-square-o\x22\x20title=\x22전체\x20선택\x22\x20style=\x22color:\x20dimgrey;cursor:pointer;\x22></i></a>' + '&nbsp;&nbsp;' + _0x3a1a23(0x169) + '&nbsp;&nbsp;' + _0x3a1a23(0x203) + _0x3a1a23(0xe9) + '<div\x20id=\x22_LAYER_OPEN_SAVE\x22\x20class=\x22LAYER_OPEN_SAVE\x22\x20style=\x22visibility:#LAYER_FILE_VISI#;\x22>' + _0x3a1a23(0x10b) + '&nbsp;&nbsp;' + _0x3a1a23(0x39b) + '</div>' + _0x3a1a23(0x1de),
    sMTOC_String = _0x3a1a23(0x3b9) + '100%;bottom:-20px;display:none;padding:0px;opacity:\x200.8;\x22>' + _0x3a1a23(0x1cb) + '<div\x20id=\x22dragdrop\x22\x20class=\x22col-sm-4\x20col-xs-4\x20col-md-4\x22\x20style=\x22width:100%;padding:0px;\x22><div\x20class=\x22well\x20clearfix\x22\x20style=\x22background:#000000;\x22>' + '<div\x20id=\x22div_TOC_LIST\x22\x20class=\x22dragbleList\x22\x20style=\x22max-height:\x20150px;\x22><ul\x20id=\x22TOC_LIST\x22\x20class=\x22sortable-list\x22></ul></div></div></div></div>';

function div_MobileLegentExtent() {
    const _0x7d613e = _0x3a1a23;
    $dragdrop = $(_0x7d613e(0x358));
    if ($h_ctrlTOC['height']() <= 0x2d) {
        $(_0x7d613e(0x22d))['attr'](_0x7d613e(0x36d), 'https://www.policymap.or.kr/heatmap_api/marker/svg2png_30Col.php?GUBUN=marker_svg2&ICON=_System_arrow-down-s-line&FILL_COLOR=rgba(253,%20245,%20255,1)&STROKE_COLOR=rgba(255,255,255,0.7)&STROKE_WIDTH=2&WIDTH=35&HEIGHT=35');
        let _0x19cbd2 = $dragdrop['height']() + 0x14;
        $h_ctrlTOC[_0x7d613e(0x25f)](_0x19cbd2);
    } else $('#btnMin')[_0x7d613e(0x342)](_0x7d613e(0x36d), _0x7d613e(0xe2)), $h_ctrlTOC[_0x7d613e(0x25f)](0x2d);
    $dragdrop = null;
}

function _h_SetRightTOC() {
    const _0x2c2535 = _0x3a1a23;
    if (h_isMobile == !![]) {
        let _0x5d91d9 = $(window)['width']();
        $(_0x2c2535(0x2c7))['css'](_0x2c2535(0x173), ''), $(_0x2c2535(0x2c7))['css']('right', '1px');
    } else {
        let _0x413645 = $(window)[_0x2c2535(0x2d3)]();
        $('#sortable-div')[_0x2c2535(0x287)]('left', ''), $(_0x2c2535(0x2c7))[_0x2c2535(0x287)](_0x2c2535(0x2a2), _0x2c2535(0x133)), $(_0x2c2535(0x2c7))['css'](_0x2c2535(0x37f), _0x2c2535(0x2de));
    }
}

function _h_loadTOC() {
    const _0x47711f = _0x3a1a23;
    h_isMobile == !![] && (sTOC_String = sMTOC_String);
    if (h_nCustomMode == 0x1 || h_nCustomMode == 0x9) sTOC_String = sTOC_String[_0x47711f(0xd2)]('#LAYER_FILE_VISI#', _0x47711f(0x1b3)), sTOC_String = sTOC_String[_0x47711f(0xd2)](_0x47711f(0x181), '25'), sTOC_String = sTOC_String['replace'](_0x47711f(0x217), _0x47711f(0x116)), sTOC_String = sTOC_String[_0x47711f(0xd2)](_0x47711f(0x1f1), _0x47711f(0x39a));
    else h_nCustomMode == 0x2 ? (sTOC_String = sTOC_String[_0x47711f(0xd2)](_0x47711f(0x136), _0x47711f(0x1b3)), sTOC_String = sTOC_String[_0x47711f(0xd2)](_0x47711f(0x181), '25'), sTOC_String = sTOC_String['replace'](_0x47711f(0x217), _0x47711f(0x250)), sTOC_String = sTOC_String[_0x47711f(0xd2)](_0x47711f(0x1f1), _0x47711f(0x343))) : (sTOC_String = sTOC_String[_0x47711f(0xd2)](_0x47711f(0x136), _0x47711f(0x276)), sTOC_String = sTOC_String[_0x47711f(0xd2)](_0x47711f(0x181), '85'), sTOC_String = sTOC_String[_0x47711f(0xd2)](_0x47711f(0x217), _0x47711f(0x116)), sTOC_String = sTOC_String[_0x47711f(0xd2)](_0x47711f(0x1f1), _0x47711f(0x39a)));
    document[_0x47711f(0x243)](_0x47711f(0x383))[_0x47711f(0x3b6)][_0x47711f(0x195)]('beforeEnd', sTOC_String);
    let _0x1d3a87 = setInterval(function() {
        const _0xed422 = _0x47711f;
        if (typeof $('#sortable-div\x20.sortable-list')['sortable'] !== _0xed422(0x2fd)) {
            clearInterval(_0x1d3a87), _0x1d3a87 = null, $h_ctrlTOC = $(_0xed422(0x2c7));
            if (typeof g_bLayerListShow != 'undefined') h_bTOCShow = g_bLayerListShow;
            if (typeof g_bLayerListRight != _0xed422(0x2fd)) h_bTOCRight = g_bLayerListRight;
            typeof g_nLayerListW != _0xed422(0x2fd) && (h_isMobile == ![] ? (h_nTOCWidth = g_nLayerListW, $h_ctrlTOC[_0xed422(0x2d3)](h_nTOCWidth)) : (h_nTOCWidth = $(window)[_0xed422(0x2d3)]() - 0x20, $h_ctrlTOC[_0xed422(0x2d3)](h_nTOCWidth)));
            if (typeof g_bViewerLegendShow != _0xed422(0x2fd)) h_bBottomAutoMapLegendShow = g_bViewerLegendShow;
            $(_0xed422(0xb7))[_0xed422(0x17b)]({
                'connectWith': '#sortable-div\x20.sortable-list',
                'placeholder': _0xed422(0x118)
            });
            let _0x4022ba = $(_0xed422(0x292));
            _0x4022ba[_0xed422(0x320)](_0xed422(0x2a4), function(_0x3fe205, _0x2b8064) {
                _h_OnSortChangeTOC(_0x4022ba);
            }), h_bTOCLoaded = !![];
        } else {}
    }, 0x1f4);
}
var oTocTimer = setInterval(function() {
    const _0x13bc68 = _0x3a1a23;
    document[_0x13bc68(0x243)]('map') != null && (clearInterval(oTocTimer), oTocTimer = null, _h_loadTOC());
}, 0x64);

function _h_checkAndSetSameLayerName(_0x21f8f9) {
    const _0x415775 = _0x3a1a23;
    if (_0x21f8f9 == null) return;
    let _0x5da188 = HM_getLayersNM();
    if (_0x5da188 == null) return;
    for (let _0x1e43d4 = 0x0; _0x1e43d4 < _0x5da188[_0x415775(0x363)]; _0x1e43d4++) {
        if (_0x5da188[_0x1e43d4] == _0x21f8f9[_0x415775(0xef)] && h_oaLayer[_0x1e43d4][_0x415775(0x263)] != _0x21f8f9[_0x415775(0x263)]) {
            if (isNaN(_0x21f8f9[_0x415775(0xef)][_0x415775(0x36e)](-0x1)) == !![]) _0x21f8f9[_0x415775(0xef)] = _0x21f8f9['sLayerNM'] + '1';
            else {
                let _0x8108f7 = Number(_0x21f8f9['sLayerNM'][_0x415775(0x36e)](-0x1));
                _0x8108f7++;
                let _0x3d8915 = _0x21f8f9[_0x415775(0xef)][_0x415775(0x36a)](0x0, _0x21f8f9[_0x415775(0xef)][_0x415775(0x363)] - 0x1) + String(_0x8108f7);
                _0x21f8f9['sLayerNM'] = _0x3d8915, _0x3d8915 = null;
            }
        }
    }
    _0x21f8f9 = null, _0x5da188 = null;
}

function _h_addLayerToTOC(_0x2c25b8) {
    if (h_bTOCLoaded == !![]) _h_addLayerToTOC2(_0x2c25b8), _0x2c25b8 = null;
    else {
        let _0x3dc393 = setInterval(function() {
            h_bTOCLoaded == !![] && (clearInterval(_0x3dc393), _0x3dc393 = null, _h_addLayerToTOC2(_0x2c25b8), _0x2c25b8 = null);
        }, 0x64);
    }
}

function _h_addLayerToTOC2(_0x390a7e) {
    const _0x303151 = _0x3a1a23;
    let _0x47f5d1 = 0x0;
    _0x47f5d1 = h_nTOCWidth - 0xa5;
    if (h_nCustomMode == 0x1 || h_nCustomMode == 0x9) _0x47f5d1 = h_nTOCWidth - 0xa0;
    _h_checkAndSetSameLayerName(_0x390a7e);
    let _0x513d51 = _0x390a7e['UID'],
        _0x375166 = _0x390a7e[_0x303151(0xef)];
    _0x375166 = _0x303151(0xa3) + _0x375166 + '\x22>' + _0x375166 + '</label>\x20';
    let _0x5bdbc5 = _0x303151(0x18d),
        _0x3bbaa6 = _0x303151(0x25c),
        _0x230b4c = _0x303151(0x3ab),
        _0x2b30b5 = '',
        _0x391002 = _0x303151(0xb3);
    if (_0x390a7e[_0x303151(0x310)] == ![]) _0x391002 = '<input\x20type=\x22checkbox\x22\x20onclick=\x22_h_onChangeCheckBoxForTOC();\x22\x20style=\x22margin:\x202px;\x20width:\x201.7rem;height:\x201.7rem;\x20vertical-align:\x20middle;\x22/>';
    let _0x29d05c = _0x303151(0x359),
        _0x1ada62 = _0x303151(0xdf);
    _0x1ada62 = '';
    let _0x5e8900 = _0x303151(0x374),
        _0x24b7d8 = _0x303151(0x340),
        _0x17a936 = _0x303151(0x3cd);
    if (h_nCustomMode == 0x1) _0x17a936 = _0x17a936['replace'](_0x303151(0x220), _0x303151(0x250));
    else {
        if (h_nCustomMode == 0x2) _0x17a936 = _0x17a936[_0x303151(0xd2)]('#VISI#', _0x303151(0x250));
        else _0x17a936 = _0x17a936[_0x303151(0xd2)](_0x303151(0x220), '');
    }
    if (_0x390a7e['nType'] == 0x1) {
        if (_h_checkMMSDen(_0x390a7e) == !![] || _h_checkGeocodingDen(_0x390a7e) == !![]) _0x2b30b5 = _0x303151(0x19a);
        else _0x2b30b5 = _0x303151(0x1d9);
    } else {
        if (_0x390a7e[_0x303151(0x350)] == 0x2) _0x2b30b5 = '<img\x20src=\x22https://www.policymap.or.kr/lib/SortableList/img/interpolation.png\x22\x20width=\x2220\x22>&nbsp;';
        else {
            if (_0x390a7e[_0x303151(0x350)] == 0x3) _0x2b30b5 = _0x303151(0x385);
            else {
                if (_0x390a7e[_0x303151(0x350)] == 0x4) _0x2b30b5 = _0x303151(0x198);
                else {
                    if (_0x390a7e['nType'] == 0x2e || _0x390a7e[_0x303151(0x350)] == 0x2f) _0x2b30b5 = _0x303151(0x319);
                    else {
                        if (_0x390a7e[_0x303151(0x350)] == 0x5) {
                            let _0x5e7792 = 0x14;
                            if (_0x390a7e[_0x303151(0x3d1)]['indexOf'](_0x303151(0x35c)) == 0x0) _0x5e7792 = _0x390a7e[_0x303151(0x3d1)]['replace'](_0x303151(0x35c), '');
                            let _0x1d258a = _h_GetMarkerSrc(_0x390a7e[_0x303151(0x1da)], _0x390a7e[_0x303151(0x1f5)], _0x5e7792);
                            _0x2b30b5 = _0x303151(0x188) + _0x1d258a + _0x303151(0x1f2), _0x1d258a = null;
                        }
                    }
                }
            }
        }
    }
    let _0x25e0ae = _0x5bdbc5 + _0x391002 + _0x2b30b5 + _0x375166 + _0x3bbaa6 + _0x29d05c + _0x1ada62 + _0x5e8900 + _0x230b4c;
    _0x25e0ae = _0x25e0ae[_0x303151(0xd2)](/#style#/g, _0x17a936), _0x25e0ae = _0x25e0ae[_0x303151(0xd2)](/#style_extent#/g, _0x24b7d8);
    let _0x431e44 = _0x303151(0x3de) + _0x513d51 + _0x303151(0x1bd) + _0x25e0ae + _0x303151(0x100) + _0x303151(0x31f),
        _0x3c153f = _0x303151(0x2ca) + _0x513d51 + _0x303151(0x304) + '\x22></div></div>';
    _0x431e44 = _0x431e44[_0x303151(0xd2)]('#collapse#', _0x3c153f), $(_0x303151(0x292))[_0x303151(0x398)](_0x431e44);
    if (h_oaLayer == null) h_oaLayer = new Array();
    h_oaLayer[_0x303151(0x1d6)](_0x390a7e), _0x390a7e[_0x303151(0x205)] = HM_getLayersCnt() * h_nItemCntPerLayer, setTimeout(function() {
        const _0x3e2254 = _0x303151;
        $(_0x3e2254(0x292))['sortable'](_0x3e2254(0x1a0));
        if (h_bTOCShow == !![]) {
            if ($h_ctrlTOC[0x0][_0x3e2254(0x35d)][_0x3e2254(0x2d3)] != h_nTOCWidth + 0x1e + 'px') $h_ctrlTOC[0x0][_0x3e2254(0x35d)][_0x3e2254(0x2d3)] = h_nTOCWidth + 0x1e + 'px';
            $h_ctrlTOC[_0x3e2254(0x3af)]();
        }
    }, 0x12c), _h_checkAndSetTocSelectedTimesItem($('#TOC_LIST\x20Li')), __sendMessage_AddTOCRayer_From_HeatmapLib(_0x390a7e[_0x303151(0xef)], _0x390a7e[_0x303151(0x350)], _0x390a7e[_0x303151(0x310)]);
    let _0x1e24ac = _h_checkBottomSlider(_0x390a7e['sCallUrl'], _0x390a7e['sDataString']);
    if (_0x1e24ac != '') {
        let _0x5ee0d5 = '';
        if (_0x375166[_0x303151(0x1c4)]('ː')['length'] == 0x2) _0x5ee0d5 = _0x375166['split']('ː')[0x1];
        __sendMessage_BottomSlider(_0x390a7e['UID'], _0x1e24ac, _0x5ee0d5);
    }
    if (h_oaLayer[_0x303151(0x363)] == 0x1 && _0x390a7e[_0x303151(0x350)] == 0x5) {
        let _0x45b8e6 = 0x0,
            _0x2b6d62 = setInterval(function() {
                const _0x45eabb = _0x303151;
                _0x45b8e6++, (_0x390a7e[_0x45eabb(0x23c)] != null || _0x45b8e6 > 0x28) && (clearInterval(_0x2b6d62), _0x390a7e[_0x45eabb(0x23c)] != null && (map['setBounds'](_0x390a7e[_0x45eabb(0x23c)]), _0x390a7e = null));
            }, 0x1f4);
    } else _0x390a7e = null;
    let _0x49ef2a = 0x258,
        _0x382202, _0x11240e;
    $(_0x303151(0xa5))[_0x303151(0x320)]('mousedown\x20mouseup', function(_0x1c7839) {
        const _0x3f4937 = _0x303151;
        if (_0x1c7839[_0x3f4937(0x204)] == 'mousedown') _0x382202 = _0x1c7839['timeStamp'];
        else {
            _0x11240e = _0x1c7839[_0x3f4937(0x281)] - _0x382202;
            if (_0x11240e < _0x49ef2a) {
                $oLi = $(_0x1c7839['target'][_0x3f4937(0x200)]('li'));
                if (_h_oPreLiForTimesLayer != null) {
                    if ($oLi[_0x3f4937(0x347)](_0x3f4937(0x344))[0x0][_0x3f4937(0xc9)] == _h_oPreLiForTimesLayer['find'](_0x3f4937(0x344))[0x0][_0x3f4937(0xc9)]) return;
                }
                _h_checkAndRemoveTocSelectedTimesItem(_h_oPreLiForTimesLayer), $oLi[_0x3f4937(0x1bf)](_0x3f4937(0x160))[_0x3f4937(0x1d3)]()['removeClass'](_0x3f4937(0x160)), _h_checkAndSetTocSelectedTimesItem($oLi), $oLi = null;
            }
        }
    });
}
let _h_oPreLiForTimesLayer = null;

function _h_removeTocSelectedItem() {
    const _0x5a2cf5 = _0x3a1a23;
    $('#TOC_LIST')[_0x5a2cf5(0x347)]('li')['siblings']()[_0x5a2cf5(0x3a0)](_0x5a2cf5(0x160));
}

function _h_checkAndRemoveTocSelectedTimesItem(_0x3e3f7e) {
    const _0x3fae5f = _0x3a1a23;
    if (_0x3e3f7e == null) return;
    let _0x3594a9 = _0x3e3f7e['find'](_0x3fae5f(0x344))[0x0]['outerText'];
    _0x3594a9[_0x3fae5f(0x37d)]('ː') > 0x0 && (__sendMessage_BottomSliderRemove(), $(_0x3fae5f(0x292))[_0x3fae5f(0x347)]('li')['siblings']()[_0x3fae5f(0x3a0)](_0x3fae5f(0x3eb))), _h_oPreLiForTimesLayer = null, _0x3e3f7e = null;
}

function _h_checkAndSetTocSelectedTimesItem(_0x4330d1) {
    const _0x9da5f2 = _0x3a1a23;
    if (_0x4330d1 == null) return;
    if (_0x4330d1[_0x9da5f2(0x363)] > 0x1) _0x4330d1 = $(_0x4330d1[0x0]);
    if (_0x4330d1 == _h_oPreLiForTimesLayer) return;
    let _0x54f9dc = _0x4330d1['find'](_0x9da5f2(0x344))[0x0]['outerText'],
        _0x5413d6 = HM_getLayerByNM(_0x54f9dc),
        _0x5b334b = _h_checkBottomSlider(_0x5413d6[_0x9da5f2(0x131)], _0x5413d6[_0x9da5f2(0x1b8)]);
    if (_0x54f9dc['indexOf']('ː') > 0x0 || _0x5b334b != '') {
        _0x4330d1[_0x9da5f2(0x1bf)](_0x9da5f2(0x3eb))['siblings']()[_0x9da5f2(0x3a0)](_0x9da5f2(0x3eb));
        let _0x4f19a3 = '';
        if (_0x54f9dc[_0x9da5f2(0x1c4)]('ː')[_0x9da5f2(0x363)] == 0x2) _0x4f19a3 = _0x54f9dc[_0x9da5f2(0x1c4)]('ː')[0x1];
        __sendMessage_BottomSlider(_0x5413d6[_0x9da5f2(0x263)], _0x5b334b, _0x4f19a3), _h_oPreLiForTimesLayer = _0x4330d1;
    }
    _0x5413d6 = null, _0x4330d1 = null;
}

function _h_checkBottomSlider(_0x2ebb2a, _0x295209) {
    const _0x18fc57 = _0x3a1a23;
    let _0x4ff8ff = '';
    return _0x2ebb2a[_0x18fc57(0x37d)](_0x18fc57(0x149)) >= 0x0 && (_0x4ff8ff = _0x2ebb2a['split'](_0x18fc57(0x149))[0x1], _0x4ff8ff = _0x4ff8ff['split']('&')[0x0], _0x4ff8ff = _0x4ff8ff[_0x18fc57(0x1c4)]('||')[0x0]), _0x295209[_0x18fc57(0x37d)]('#ETC#|SLIDER^') >= 0x0 && (_0x4ff8ff = _0x295209[_0x18fc57(0x1c4)](_0x18fc57(0x149))[0x1], _0x4ff8ff = _0x4ff8ff[_0x18fc57(0x1c4)]('&')[0x0], _0x4ff8ff = _0x4ff8ff[_0x18fc57(0x1c4)]('||')[0x0]), _0x4ff8ff;
}
var oSortableTimer = setInterval(function() {
    const _0x53e303 = _0x3a1a23;
    document[_0x53e303(0x243)](_0x53e303(0x33f)) != null && (clearInterval(oSortableTimer), oSortableTimer = null, _h_dragElement(document[_0x53e303(0x243)](_0x53e303(0x33f))));
}, 0x64);

function _h_dragElement(_0x31c766) {
    const _0x1ac963 = _0x3a1a23;
    let _0x41536b = 0x0,
        _0x49a83d = 0x0,
        _0x20e739 = 0x0,
        _0x235ed3 = 0x0;
    document['getElementById'](_0x1ac963(0x278)) ? document['getElementById']('div_TOC_Header')[_0x1ac963(0x1d0)] = _0x7f7464 : _0x31c766[_0x1ac963(0x1d0)] = _0x7f7464;

    function _0x7f7464(_0x454736) {
        const _0x5cb6d7 = _0x1ac963;
        _0x454736 = _0x454736 || window[_0x5cb6d7(0x303)], _0x454736[_0x5cb6d7(0x156)](), _0x20e739 = _0x454736['clientX'], _0x235ed3 = _0x454736[_0x5cb6d7(0x14f)], document[_0x5cb6d7(0x346)] = _0x51a6ff, document[_0x5cb6d7(0x364)] = _0x4b5fa4;
    }

    function _0x4b5fa4(_0x52c3c7) {
        const _0x2e08b7 = _0x1ac963;
        _0x52c3c7 = _0x52c3c7 || window['event'], _0x52c3c7[_0x2e08b7(0x156)](), _0x41536b = _0x20e739 - _0x52c3c7[_0x2e08b7(0x30e)], _0x49a83d = _0x235ed3 - _0x52c3c7[_0x2e08b7(0x14f)], _0x20e739 = _0x52c3c7[_0x2e08b7(0x30e)], _0x235ed3 = _0x52c3c7['clientY'];
        let _0x490c90 = _0x31c766[_0x2e08b7(0xde)] - _0x49a83d,
            _0x51fa9e = _0x31c766[_0x2e08b7(0x3db)] - _0x41536b;
        if (_0x490c90 < 0x0) _0x490c90 = 0x0;
        if (_0x490c90 - 0x5 > window[_0x2e08b7(0x272)] - 0x1e) _0x490c90 = window[_0x2e08b7(0x272)] - 0x1e - 0x5;
        let _0x6ce8df = 0x18;
        if (_0x51fa9e + _0x6ce8df < 0x0) _0x51fa9e = _0x6ce8df * -0x1;
        if (_0x51fa9e - _0x6ce8df > window[_0x2e08b7(0x1e8)] - _0x31c766[_0x2e08b7(0x275)]) _0x51fa9e = window[_0x2e08b7(0x1e8)] - _0x31c766[_0x2e08b7(0x275)] - _0x6ce8df;
        _0x31c766[_0x2e08b7(0x35d)]['top'] = _0x490c90 + 'px', _0x31c766[_0x2e08b7(0x35d)][_0x2e08b7(0x173)] = _0x51fa9e + 'px';
    }

    function _0x51a6ff() {
        const _0x82c368 = _0x1ac963;
        document[_0x82c368(0x346)] = null, document[_0x82c368(0x364)] = null;
    }
}
let _h_user_point2raster_baseURL = 'https://heatmap2021.geocoding.kr/heatmap_api/php/API_POST.php';

function _Alert() {}

function _h_getJsonByMarkerCluster(_0x29f31f) {
    const _0x10cd80 = _0x3a1a23;
    let _0x95dccb = '',
        _0x345715 = _0x10cd80(0x18e),
        _0x1271ac = _0x29f31f[_0x10cd80(0x1a3)],
        _0x303d39 = _0x1271ac[_0x10cd80(0x363)],
        _0x382b4e = '',
        _0x61b122 = '';
    for (let _0x6221d3 = 0x0; _0x6221d3 < _0x303d39; _0x6221d3++) {
        _0x382b4e = _0x1271ac[_0x6221d3][_0x10cd80(0xc3)]()[_0x10cd80(0x387)]() + ',' + _0x1271ac[_0x6221d3][_0x10cd80(0xc3)]()[_0x10cd80(0xac)](), _0x61b122 = _0x345715, _0x61b122 = _0x61b122['replace'](_0x10cd80(0xb0), _0x382b4e);
        if (_0x95dccb != '') _0x95dccb = _0x95dccb + _0x10cd80(0x158);
        _0x95dccb = _0x95dccb + _0x61b122;
    }
    return _0x95dccb != '' && (_0x95dccb = _0x10cd80(0x16a) + '\x0a' + _0x95dccb + '\x0a' + ']}', _0x95dccb = _0x95dccb[_0x10cd80(0x1c4)]('\x0d')[_0x10cd80(0x163)](''), _0x95dccb = _0x95dccb[_0x10cd80(0x1c4)]('\x0a')['join'](''), _0x95dccb = _0x95dccb[_0x10cd80(0x1c4)]('\x5c')['join']('')), _0x29f31f = null, _0x1271ac = null, JSON[_0x10cd80(0x2cc)](_0x95dccb);
}

function _h_getJsonBy_TMP_aJsonArray(_0x13980d) {
    const _0xad2039 = _0x3a1a23;
    let _0x9fcb27 = '',
        _0x357840 = '{\x22content\x22:\x22#content#\x22,\x20\x22label\x22:\x22\x22,\x20\x22weight\x22:1,\x20\x22location\x22:\x20[#XY#]}',
        _0x5a765e = _0x13980d[_0xad2039(0x363)],
        _0x1411d3 = '',
        _0x174b41 = '',
        _0x4d03c9 = '';
    for (let _0x5a7e89 = 0x0; _0x5a7e89 < _0x5a765e; _0x5a7e89++) {
        _0x4d03c9 = _0x13980d[_0x5a7e89][_0xad2039(0x22e)];
        if (_0x4d03c9['indexOf']('\x22') >= 0x0) _0x4d03c9 = _0x4d03c9[_0xad2039(0x1c4)]('\x22')[_0xad2039(0x163)]('˝');
        if (_0x4d03c9[_0xad2039(0x37d)]('\x27') >= 0x0) _0x4d03c9 = _0x4d03c9[_0xad2039(0x1c4)]('\x27')[_0xad2039(0x163)]('´');
        _0x1411d3 = _0x13980d[_0x5a7e89][_0xad2039(0x2d2)][0x0] + ',' + _0x13980d[_0x5a7e89][_0xad2039(0x2d2)][0x1], _0x174b41 = _0x357840, _0x174b41 = _0x174b41['replace']('#content#', _0x4d03c9), _0x174b41 = _0x174b41[_0xad2039(0xd2)](_0xad2039(0xb0), _0x1411d3);
        if (_0x9fcb27 != '') _0x9fcb27 = _0x9fcb27 + _0xad2039(0x158);
        _0x9fcb27 = _0x9fcb27 + _0x174b41;
    }
    return _0x9fcb27 != '' && (_0x9fcb27 = _0xad2039(0x16a) + '\x0a' + _0x9fcb27 + '\x0a' + ']}', _0x9fcb27 = _0x9fcb27[_0xad2039(0x1c4)]('\x0d')[_0xad2039(0x163)](''), _0x9fcb27 = _0x9fcb27['split']('\x0a')[_0xad2039(0x163)](''), _0x9fcb27 = _0x9fcb27[_0xad2039(0x1c4)]('\x5c')['join']('')), _0x13980d = null, JSON[_0xad2039(0x2cc)](_0x9fcb27);
}

function _h_getFieldListByJsonArray(_0x524063) {
    const _0x20df1f = _0x3a1a23;
    if (_0x524063['length'] < 0x1) return null;
    let _0x39e4be = new Array(),
        _0x49b698 = _0x524063[0x0][_0x20df1f(0x22e)][_0x20df1f(0x1c4)](_0x20df1f(0x16b));
    for (let _0x30377d = 0x0; _0x30377d < _0x49b698[_0x20df1f(0x363)]; _0x30377d++)
        if (_0x49b698[_0x30377d]['split'](':')[_0x20df1f(0x363)] == 0x2) _0x39e4be[_0x20df1f(0x29a)](_0x49b698[_0x30377d][_0x20df1f(0x1c4)](':')[0x0]);
    return _0x524063 = null, _0x49b698 = null, _0x39e4be;
}

function _h_checkNumericField(_0x27da26, _0x5ded28) {
    const _0x20a817 = _0x3a1a23;
    if (_0x27da26[_0x20a817(0x363)] < 0x1) return null;
    let _0x4e12f0 = new Array(),
        _0x1512a4 = _0x27da26[_0x20a817(0x363)],
        _0x453e7b = -0x1;
    for (k = 0x0; k < _0x1512a4; k++) {
        let _0x51bed7 = _0x27da26[k]['content'][_0x20a817(0x1c4)](_0x20a817(0x16b));
        if (_0x453e7b == -0x1) {
            for (let _0x3483a9 = 0x0; _0x3483a9 < _0x51bed7[_0x20a817(0x363)]; _0x3483a9++)
                if (_0x51bed7[_0x3483a9][_0x20a817(0x1c4)](':')[_0x20a817(0x363)] == 0x2) {
                    if (_0x51bed7[_0x3483a9]['split'](':')[0x0] == _0x5ded28) {
                        _0x453e7b = _0x3483a9;
                        break;
                    }
                }
        }
        if ($['isNumeric'](_0x51bed7[_0x453e7b]['split'](':')[0x1]) == ![]) return ![];
        _0x51bed7 = null;
    }
    return _0x27da26 = null, !![];
}

function HM_bufferByPoint(_0x622bb7) {
    const _0x102b99 = _0x3a1a23;
    _0x622bb7['nBuffer'] <= 0x0 ? (__sendMessage_MapAutoResizing(), Swal[_0x102b99(0x324)]({
        'title': _0x102b99(0xfe),
        'input': _0x102b99(0xcd),
        'showCancelButton': !![],
        'inputValidator': function(_0x478d40) {
            return new Promise(function(_0x7c5daa, _0x59d176) {
                const _0x437c24 = _0x3192;
                _0x478d40 != null && _0x478d40 != '' ? _0x7c5daa() : _0x7c5daa(_0x437c24(0x28c));
            });
        }
    })[_0x102b99(0x1e3)](function(_0x50575) {
        const _0x41b786 = _0x102b99;
        __sendMessage_RedoMapAutoResizing();
        if (typeof _0x50575[_0x41b786(0x24a)] == _0x41b786(0x2fd)) return;
        if (typeof _0x50575['value'] == '' || _0x50575[_0x41b786(0x24a)] == '0') return;
        _h_CreateBufferOnPoint(_0x622bb7, _0x50575[_0x41b786(0x24a)]), _0x622bb7 = null;
    })) : (_h_RemoveBufferOnPoint(_0x622bb7), _0x622bb7 = null);
}

function _h_CreateBufferOnPoint(_0x475861, _0x51db9c) {
    const _0x4c7ec7 = _0x3a1a23;
    _0x475861[_0x4c7ec7(0x19e)] = _0x51db9c;
    let _0x33f553 = new Array(),
        _0x131730 = _0x475861[_0x4c7ec7(0xbe)][0x2];
    for (let _0x345d3a = 0x0; _0x345d3a < _0x131730[_0x4c7ec7(0x363)]; _0x345d3a++) {
        let _0xbc3c92 = _0x51db9c,
            _0x7f3d5e = '';
        if (_0x51db9c >= 0xf4240) {
            let _0x4f99e9 = _0x475861[_0x4c7ec7(0x29d)][_0x4c7ec7(0x384)][_0x4c7ec7(0x363)];
            for (let _0x255cb3 = 0x0; _0x255cb3 < _0x4f99e9; _0x255cb3++) {
                if (_0x131730[_0x345d3a][_0x4c7ec7(0xc3)]()[_0x4c7ec7(0xac)]()[_0x4c7ec7(0x182)](0x6) == _0x475861[_0x4c7ec7(0x29d)][_0x4c7ec7(0x384)][_0x255cb3]['location'][0x1][_0x4c7ec7(0x182)](0x6)) {
                    if (_0x131730[_0x345d3a][_0x4c7ec7(0xc3)]()[_0x4c7ec7(0x387)]()[_0x4c7ec7(0x182)](0x6) == _0x475861[_0x4c7ec7(0x29d)][_0x4c7ec7(0x384)][_0x255cb3]['location'][0x0][_0x4c7ec7(0x182)](0x6)) {
                        let _0x11cbd2 = _0x51db9c - 0xf4240,
                            _0x1223a2 = _h_checkPolygonFromContentByIdx(_0x475861[_0x4c7ec7(0x29d)]['point'][_0x255cb3][_0x4c7ec7(0x22e)], _0x11cbd2);
                        if (_0x1223a2 == !![]) _0x7f3d5e = _h_getPolygonFromContentByIdx(_0x475861[_0x4c7ec7(0x29d)]['point'][_0x255cb3]['content'], _0x11cbd2);
                        else _0xbc3c92 = _h_getValueFromContentByIdx(_0x475861['_TMP_aJsonArray'][_0x4c7ec7(0x384)][_0x255cb3]['content'], _0x11cbd2);
                        break;
                    }
                }
            }
            if (_0x7f3d5e == '' && (_0xbc3c92 == 0x0 || _0x51db9c >= 0xf4240))
                for (let _0x95c1d = 0x0; _0x95c1d < _0x4f99e9; _0x95c1d++) {
                    let _0x43c87c = Math[_0x4c7ec7(0x16f)](_0x131730[_0x345d3a][_0x4c7ec7(0xc3)]()[_0x4c7ec7(0xac)]() - _0x475861[_0x4c7ec7(0x29d)]['point'][_0x95c1d][_0x4c7ec7(0x2d2)][0x1]),
                        _0x54d261 = Math[_0x4c7ec7(0x16f)](_0x131730[_0x345d3a][_0x4c7ec7(0xc3)]()[_0x4c7ec7(0x387)]() - _0x475861[_0x4c7ec7(0x29d)][_0x4c7ec7(0x384)][_0x95c1d][_0x4c7ec7(0x2d2)][0x0]);
                    if (_0x43c87c <= 0.000001) {
                        if (_0x54d261 <= 0.000001) {
                            let _0x33860a = _0x51db9c - 0xf4240,
                                _0x30c375 = _h_checkPolygonFromContentByIdx(_0x475861[_0x4c7ec7(0x29d)][_0x4c7ec7(0x384)][_0x95c1d][_0x4c7ec7(0x22e)], _0x33860a);
                            if (_0x30c375 == !![]) _0x7f3d5e = _h_getPolygonFromContentByIdx(_0x475861['_TMP_aJsonArray'][_0x4c7ec7(0x384)][_0x95c1d][_0x4c7ec7(0x22e)], _0x33860a);
                            else _0xbc3c92 = _h_getValueFromContentByIdx(_0x475861['_TMP_aJsonArray'][_0x4c7ec7(0x384)][_0x95c1d][_0x4c7ec7(0x22e)], _0x33860a);
                            break;
                        }
                    }
                }
        }
        if (_0x7f3d5e == '' && _0xbc3c92 > 0x0) {
            let _0x54d7bc = new kakao[(_0x4c7ec7(0x12a))][(_0x4c7ec7(0xff))]({
                'center': _0x131730[_0x345d3a]['getPosition'](),
                'radius': _0xbc3c92,
                'strokeWeight': 0x2,
                'strokeColor': _0x4c7ec7(0x13b),
                'strokeStyle': 'shortdash',
                'strokeOpacity': 0.8,
                'fillColor': _0x4c7ec7(0x13b),
                'fillOpacity': 0.1,
                'zIndex': _0x475861[_0x4c7ec7(0x205)] + 0x1
            });
            if (_0x475861[_0x4c7ec7(0x310)] == !![]) _0x54d7bc[_0x4c7ec7(0x328)](h_oMap);
            _0x33f553[_0x4c7ec7(0x29a)](_0x54d7bc), _0x54d7bc = null;
        } else {
            if (_0x7f3d5e != '') {
                let _0x31de0d = _0x7f3d5e[_0x4c7ec7(0x1c4)](','),
                    _0xf76b95 = new Array(),
                    _0x3dc08e = new Array();
                for (k = 0x0; k < _0x31de0d[_0x4c7ec7(0x363)]; k++) _0x3dc08e['push'](new kakao[(_0x4c7ec7(0x12a))][(_0x4c7ec7(0x32b))](_0x31de0d[k][_0x4c7ec7(0x1c4)]('^')[0x1], _0x31de0d[k][_0x4c7ec7(0x1c4)]('^')[0x0]));
                if (_0x3dc08e[0x0][_0x4c7ec7(0x27e)](_0x3dc08e[_0x3dc08e[_0x4c7ec7(0x363)] - 0x1]) == ![]) _0x3dc08e[_0x4c7ec7(0x29a)](_0x3dc08e[0x0]);
                _0xf76b95['push'](_0x3dc08e), _0x3dc08e = null, _0x31de0d = null;
                let _0x222fbf = new kakao[(_0x4c7ec7(0x12a))][(_0x4c7ec7(0x3cf))]({
                    'path': _0xf76b95,
                    'strokeWeight': 0x2,
                    'strokeColor': _0x4c7ec7(0x13b),
                    'strokeStyle': _0x4c7ec7(0x1ea),
                    'strokeOpacity': 0.8,
                    'zIndex': _0x475861[_0x4c7ec7(0x205)] + 0x1
                });
                if (_0x475861['bVisible'] == !![]) _0x222fbf[_0x4c7ec7(0x328)](h_oMap);
                _0x33f553[_0x4c7ec7(0x29a)](_0x222fbf), _0xf76b95 = null, _0x222fbf = null;
            }
        }
    }
    _0x475861['aBufferCircle'] = _0x33f553, _0x33f553 = null, _0x475861 = null;
}

function _h_RemoveBufferOnPoint(_0x14baee) {
    const _0x1b974a = _0x3a1a23;
    if (_0x14baee[_0x1b974a(0x19e)] <= 0x0) {
        _0x14baee = null;
        return;
    }
    for (let _0x6c8043 = 0x0; _0x6c8043 < _0x14baee[_0x1b974a(0x22c)]['length']; _0x6c8043++) _0x14baee[_0x1b974a(0x22c)][_0x6c8043][_0x1b974a(0x328)](null);
    _0x14baee['aBufferCircle'] = null, _0x14baee[_0x1b974a(0x19e)] = 0x0, _0x14baee = null;
}

function _h_RemoveOnlyBufferOnPoint(_0x5d9187) {
    const _0x5c991a = _0x3a1a23;
    if (_0x5d9187[_0x5c991a(0x19e)] <= 0x0) {
        _0x5d9187 = null;
        return;
    }
    for (let _0x142162 = 0x0; _0x142162 < _0x5d9187['aBufferCircle'][_0x5c991a(0x363)]; _0x142162++) _0x5d9187[_0x5c991a(0x22c)][_0x142162][_0x5c991a(0x328)](null);
    _0x5d9187[_0x5c991a(0x22c)] = null, _0x5d9187 = null;
}

function _h_VisileBufferOnPoint(_0x411359, _0x14dd11) {
    const _0x2d8b2c = _0x3a1a23;
    if (_0x411359[_0x2d8b2c(0x19e)] <= 0x0) {
        _0x411359 = null;
        return;
    }
    for (let _0x3a6cdb = 0x0; _0x3a6cdb < _0x411359[_0x2d8b2c(0x22c)][_0x2d8b2c(0x363)]; _0x3a6cdb++) {
        if (_0x14dd11 == !![]) _0x411359[_0x2d8b2c(0x22c)][_0x3a6cdb][_0x2d8b2c(0x328)](h_oMap);
        else _0x411359[_0x2d8b2c(0x22c)][_0x3a6cdb][_0x2d8b2c(0x328)](null);
    }
    _0x411359 = null;
}

function _h_SetzIndexBufferOnPoint(_0x45cfa8, _0x3b3c81) {
    const _0x15b9d1 = _0x3a1a23;
    if (_0x45cfa8[_0x15b9d1(0x19e)] <= 0x0) {
        _0x45cfa8 = null;
        return;
    }
    for (let _0x1fa07d = 0x0; _0x1fa07d < _0x45cfa8[_0x15b9d1(0x22c)][_0x15b9d1(0x363)]; _0x1fa07d++) _0x45cfa8[_0x15b9d1(0x22c)][_0x1fa07d][_0x15b9d1(0xad)](_0x3b3c81);
    _0x45cfa8 = null;
}

function HM_point2raster(_0x562b8f, _0x268f02) {
    const _0x4237d7 = _0x3a1a23;
    let _0x4ec435 = _h_getFieldListByJsonArray(_0x562b8f[_0x4237d7(0x29d)]['point']);
    if (_0x4ec435[_0x4237d7(0x363)] <= 0x0) HM_point2raster2(_0x562b8f, _0x268f02, '');
    else {
        __sendMessage_MapAutoResizing();
        let _0x2e21e5 = {},
            _0x1bca7d = '';
        if (_0x268f02 == !![]) _0x1bca7d = _0x4237d7(0x377);
        else _0x1bca7d = '가중\x20값\x20선택';
        _0x2e21e5[_0x1bca7d] = _0x1bca7d;
        for (i = 0x0; i < _0x4ec435[_0x4237d7(0x363)]; i++) _0x2e21e5[_0x4ec435[i]] = _0x4ec435[i];
        Swal['fire']({
            'title': '가중\x20값\x20선택',
            'input': _0x4237d7(0xa7),
            'inputOptions': _0x2e21e5,
            'inputValue': _0x1bca7d,
            'inputPlaceholder': _0x4237d7(0x153),
            'showCancelButton': !![],
            'inputValidator': function(_0xc4775) {
                return new Promise(function(_0x422840, _0x40e2b1) {
                    const _0x169108 = _0x3192;
                    _0xc4775 != null && _0xc4775 != '' ? _0x422840() : _0x422840(_0x169108(0x33b));
                });
            }
        })[_0x4237d7(0x1e3)](function(_0x2cc37f) {
            const _0x540c72 = _0x4237d7;
            __sendMessage_RedoMapAutoResizing();
            if (_0x2cc37f[_0x540c72(0x24a)] == _0x540c72(0x377)) HM_point2raster2(_0x562b8f, _0x268f02, '');
            else {
                if (_0x2cc37f[_0x540c72(0x24a)] == _0x540c72(0x323)) alert(_0x540c72(0x206)), HM_point2raster(_0x562b8f, _0x268f02);
                else {
                    if (_h_checkNumericField(_0x562b8f[_0x540c72(0x29d)][_0x540c72(0x384)], _0x2cc37f[_0x540c72(0x24a)]) == !![]) HM_point2raster2(_0x562b8f, _0x268f02, _0x2cc37f['value']);
                    else alert(_0x540c72(0x2fb)), HM_point2raster(_0x562b8f, _0x268f02);
                }
            }
            _0x562b8f = null;
        });
    }
}

function HM_point2raster2(_0x31a902, _0x305f91, _0x21941b) {
    const _0x2e6f8f = _0x3a1a23;
    let _0x5134f7 = '';
    if (_0x31a902[_0x2e6f8f(0x1b8)][_0x2e6f8f(0x363)] > 0xa) _0x5134f7 = JSON[_0x2e6f8f(0x2cc)](_0x31a902[_0x2e6f8f(0x1b8)]);
    else {
        if (_0x31a902[_0x2e6f8f(0x1ad)][_0x2e6f8f(0x1a3)]['length'] > 0x0) _0x5134f7 = _h_getJsonBy_TMP_aJsonArray(_0x31a902[_0x2e6f8f(0x29d)][_0x2e6f8f(0x384)]);
    }
    let _0x53ebc2 = _0x5134f7[_0x2e6f8f(0x384)][_0x2e6f8f(0x363)],
        _0x90166f = -0x1,
        _0x519028 = '';
    for (let _0x48562b = 0x0; _0x48562b < _0x53ebc2; _0x48562b++) {
        if (_0x519028 != '') _0x519028 += '|';
        if (_0x21941b == '') _0x519028 += '1';
        else {
            if (_0x90166f == -0x1) {
                let _0x183b48 = _0x5134f7[_0x2e6f8f(0x384)][_0x48562b][_0x2e6f8f(0x22e)][_0x2e6f8f(0x1c4)](_0x2e6f8f(0x16b));
                for (let _0x17d7cc = 0x0; _0x17d7cc < _0x183b48[_0x2e6f8f(0x363)]; _0x17d7cc++)
                    if (_0x183b48[_0x17d7cc][_0x2e6f8f(0x37d)](_0x21941b + ':') == 0x0) {
                        _0x90166f = _0x17d7cc;
                        break;
                    }
                _0x183b48 = null;
            }
            let _0x496249 = _0x5134f7[_0x2e6f8f(0x384)][_0x48562b][_0x2e6f8f(0x22e)][_0x2e6f8f(0x1c4)](_0x2e6f8f(0x16b))[_0x90166f][_0x2e6f8f(0x1c4)](':')[0x1];
            _0x519028 += _0x496249, _0x496249 = null;
        }
        _0x519028 += ',', _0x519028 += _0x5134f7['point'][_0x48562b][_0x2e6f8f(0x2d2)][0x0][_0x2e6f8f(0x182)](0x6), _0x519028 += ',', _0x519028 += _0x5134f7[_0x2e6f8f(0x384)][_0x48562b][_0x2e6f8f(0x2d2)][0x1][_0x2e6f8f(0x182)](0x6);
    }
    let _0x1cdeb7 = _0x31a902[_0x2e6f8f(0x2e7)],
        _0xd7c746 = !![],
        _0x2a16e6 = _0x31a902[_0x2e6f8f(0xef)];
    if (_0x305f91 == !![]) _0x2a16e6 = '(밀도)' + _0x2a16e6;
    else _0x2a16e6 = _0x2e6f8f(0x168) + _0x2a16e6;
    if (_0x21941b != '') _0x2a16e6 = _0x2a16e6 + '-' + _0x21941b;
    HM_createHeatMapFromPoint(_0x305f91, _0x1cdeb7, _0x2a16e6, _0x519028, _0xd7c746), _0x31a902 = null, _0x519028 = null;
}

function _h_zipCoord(_0xd7e985) {
    const _0x55e6ef = _0x3a1a23;
    if (_0xd7e985 == '') return _0xd7e985;
    return _0xd7e985 = _0xd7e985[_0x55e6ef(0x1c4)](_0x55e6ef(0x132))[_0x55e6ef(0x163)]('a'), _0xd7e985 = _0xd7e985['split'](_0x55e6ef(0x2d9))[_0x55e6ef(0x163)]('b'), _0xd7e985 = _0xd7e985[_0x55e6ef(0x1c4)](_0x55e6ef(0x337))[_0x55e6ef(0x163)]('c'), _0xd7e985 = _0xd7e985['split'](_0x55e6ef(0x1c3))[_0x55e6ef(0x163)]('d'), _0xd7e985 = _0xd7e985[_0x55e6ef(0x1c4)](_0x55e6ef(0x2d6))['join']('e'), _0xd7e985 = _0xd7e985[_0x55e6ef(0x1c4)](_0x55e6ef(0x3d4))[_0x55e6ef(0x163)]('f'), _0xd7e985 = _0xd7e985['split'](_0x55e6ef(0x237))[_0x55e6ef(0x163)]('l'), _0xd7e985 = _0xd7e985[_0x55e6ef(0x1c4)](_0x55e6ef(0x2fe))[_0x55e6ef(0x163)]('m'), _0xd7e985 = _0xd7e985[_0x55e6ef(0x1c4)](_0x55e6ef(0x3d6))[_0x55e6ef(0x163)]('n'), _0xd7e985 = _0xd7e985[_0x55e6ef(0x1c4)](_0x55e6ef(0x166))[_0x55e6ef(0x163)]('o'), _0xd7e985 = _0xd7e985[_0x55e6ef(0x1c4)](',37.')[_0x55e6ef(0x163)]('p'), _0xd7e985 = _0xd7e985['split'](_0x55e6ef(0x3a1))[_0x55e6ef(0x163)]('q'), _0xd7e985 = _0xd7e985[_0x55e6ef(0x1c4)](_0x55e6ef(0x311))[_0x55e6ef(0x163)]('r'), _0xd7e985 = _0xd7e985[_0x55e6ef(0x1c4)]('|1,')['join']('x'), _0xd7e985 = _0xd7e985[_0x55e6ef(0x1c4)]('0|')[_0x55e6ef(0x163)]('z'), _0xd7e985 = _0xd7e985['split'](',')[_0x55e6ef(0x163)]('v'), _0xd7e985 = _0xd7e985[_0x55e6ef(0x1c4)]('|')[_0x55e6ef(0x163)]('w'), _0xd7e985;
}

function HM_createHeatMapFromPoint(_0x51cab4, _0x11c749, _0x3f1814, _0x2a64b0, _0x5269de) {
    const _0x48d46b = _0x3a1a23;
    let _0x202979 = _h_user_point2raster_baseURL + '?' + _0x48d46b(0x2d7);
    _0x202979 = _0x202979 + _0x48d46b(0x28a), _0x202979 = _0x202979 + _0x48d46b(0x155), _0x202979 = _0x202979 + _0x48d46b(0x13d), _0x202979 = _0x202979 + _0x48d46b(0x32e), _0x202979 = _0x202979 + _0x48d46b(0x316), _0x202979 = _0x202979 + '&H=#H#', _0x202979 = _0x202979 + _0x48d46b(0x2ec);
    if (_0x51cab4 == !![]) _0x202979 = _0x202979 + _0x48d46b(0x314);
    else _0x202979 = _0x202979 + _0x48d46b(0x3bb);
    _0x202979 = _h_replacePercentFromUrl(_0x202979);
    let _0x26e06f = 0x1;
    if (_0x51cab4 == ![]) _0x26e06f = 0x2;
    if (_0x202979['indexOf']('&METHOD=11&') >= 0x0 || _0x202979[_0x48d46b(0x37d)](_0x48d46b(0x3bb)) >= 0x0 || _0x202979[_0x48d46b(0x37d)](_0x48d46b(0x238)) >= 0x0) _0x26e06f = 0x2;
    _h_setColorMap(h_oMap, h_divMap), _h_setProgress2(h_divMap['id']), oHM = {
        'UID': Date[_0x48d46b(0x14c)]() + Math['random'](),
        'sCallUrl': _0x202979,
        'map': h_oMap,
        'fX': 0x0,
        'fY': 0x0,
        'fAlpha': _0x11c749,
        'sUrl': '',
        'sLegend': '',
        'nW': 0x0,
        'nH': 0x0,
        'oExtent': null,
        'div_map': h_divMap,
        'nType': _0x26e06f,
        'aPointOrLineOrPolygon': null,
        'aLabel': null,
        'nLabelMinZoom': -0x1,
        'nLabelMaxZoom': -0x1,
        'sLayerNM': _0x3f1814,
        'sDataString': _0x2a64b0,
        'ZOOMDataArray': _h_CreateCellZoomStringOrArray(_0x2a64b0, !![]),
        'zIndex': 0x0,
        'bVisible': _0x5269de,
        'heatmapOverlay': null,
        'sPointSymbolType': null,
        'sPointSymbolColor': null,
        'nAuto': !![]
    }, _h_ShowLoadingConvertMessageForPT2Raster(), HM_createHeatMapFromPoint2(oHM), oHM = null, _0x2a64b0 = null;
}

function _h_CreateCellZoomStringByExtent(_0x4fe57e, _0xd81b1, _0x359916) {
    const _0xcbb66e = _0x3a1a23;
    let _0x4c2367 = '',
        _0x561d2e = _0xd81b1[_0xcbb66e(0x31e)]()[_0xcbb66e(0x387)](),
        _0x5c041c = _0xd81b1[_0xcbb66e(0x31e)]()[_0xcbb66e(0xac)](),
        _0x5ae7c9 = _0xd81b1['getNorthEast']()['getLng'](),
        _0xd434f6 = _0xd81b1[_0xcbb66e(0x3ac)]()[_0xcbb66e(0xac)]();
    for (oObj in _0x4fe57e) {
        if (_0x359916 == !![]) {
            if (_0x4fe57e[oObj]['X'] >= _0x561d2e && _0x4fe57e[oObj]['X'] <= _0x5ae7c9 && _0x4fe57e[oObj]['Y'] >= _0x5c041c && _0x4fe57e[oObj]['Y'] <= _0xd434f6) _0x4c2367 += _0x4fe57e[oObj]['VAL'] + ',' + _0x4fe57e[oObj]['X'] + ',' + _0x4fe57e[oObj]['Y'] + '|';
        } else {
            if (_0x4fe57e[oObj]['X'] >= _0x561d2e && _0x4fe57e[oObj]['X'] <= _0x5ae7c9 && _0x4fe57e[oObj]['Y'] >= _0x5c041c && _0x4fe57e[oObj]['Y'] <= _0xd434f6) _0x4c2367 += (_0x4fe57e[oObj][_0xcbb66e(0x126)] / _0x4fe57e[oObj]['CNT'])[_0xcbb66e(0x182)](0x6) + ',' + _0x4fe57e[oObj]['X'] + ',' + _0x4fe57e[oObj]['Y'] + '|';
        }
    }
    return _0xd81b1 = null, _0x4c2367;
}

function _h_CreateCellZoomStringByDataString(_0x36ea7f, _0x2184cb) {
    const _0x1f2121 = _0x3a1a23;
    let _0x186269 = _0x36ea7f['split']('|'),
        _0x53ca3c = _0x186269[_0x1f2121(0x363)],
        _0x43e82f = '',
        _0xc8becc = _0x2184cb[_0x1f2121(0x31e)]()[_0x1f2121(0x387)](),
        _0xd03560 = _0x2184cb[_0x1f2121(0x31e)]()[_0x1f2121(0xac)](),
        _0x2dbc3e = _0x2184cb[_0x1f2121(0x3ac)]()['getLng'](),
        _0x384ae0 = _0x2184cb[_0x1f2121(0x3ac)]()[_0x1f2121(0xac)](),
        _0x8a739d = null;
    for (let _0x4477e9 = 0x0; _0x4477e9 < _0x53ca3c; _0x4477e9++) {
        _0x8a739d = _0x186269[_0x4477e9]['split'](',');
        if (_0x8a739d['length'] == 0x3) {
            if (_0x8a739d[0x1] >= _0xc8becc && _0x8a739d[0x1] <= _0x2dbc3e && _0x8a739d[0x2] >= _0xd03560 && _0x8a739d[0x2] <= _0x384ae0) _0x43e82f += _0x186269[_0x4477e9] + '|';
        }
    }
    return _0x2184cb = null, _0x36ea7f = null, _0x186269 = null, _0x43e82f;
}

function _h_CreateCellZoomStringOrArray(_0x30b0c5, _0x5b2a78) {
    const _0x40f5b6 = _0x3a1a23;
    let _0x1407c8 = _0x30b0c5[_0x40f5b6(0x1c4)]('|'),
        _0x3ca78d = _0x1407c8[_0x40f5b6(0x363)],
        _0x3492cd, _0x3c7481 = new Array(),
        _0x53f9ce = new Array(),
        _0xb94203 = new Array(),
        _0x5e40a0 = new Array(),
        _0x12e964 = new Array(),
        _0x5d7a5a = new Array(),
        _0x3a382c = new Array(),
        _0x4d2591 = new Array(),
        _0x298c7c = new Array(),
        _0x5af187 = new Array(),
        _0x5eeefe = new Array();
    for (let _0x3e2554 = 0x0; _0x3e2554 < _0x3ca78d; _0x3e2554++) {
        _0x3492cd = _0x1407c8[_0x3e2554][_0x40f5b6(0x1c4)](',');
        if (_0x3492cd[_0x40f5b6(0x363)] == 0x3) {
            let _0x568836, _0x28cf92, _0x12cf5c = 0.0512,
                _0x1f0145 = 0.04096,
                _0x3e88a8 = 0x0;
            _0x568836 = (parseInt(_0x3492cd[0x1] / _0x12cf5c) * _0x12cf5c + _0x12cf5c / 0x2)[_0x40f5b6(0x182)](0x6), _0x28cf92 = (parseInt(_0x3492cd[0x2] / _0x1f0145) * _0x1f0145 + _0x1f0145 / 0x2)[_0x40f5b6(0x182)](0x6), _0x3e88a8 = parseFloat(_0x3492cd[0x0]);
            if (typeof _0x3c7481[_0x568836 + '-' + _0x28cf92] == _0x40f5b6(0x2fd)) _0x3c7481[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': 0x1
            };
            else _0x3c7481[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x3c7481[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0x126)] + _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': _0x3c7481[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0xaa)] + 0x1
            };
            _0x12cf5c = 0.0256, _0x1f0145 = 0.02048, _0x3e88a8 = 0x0, _0x568836 = (parseInt(_0x3492cd[0x1] / _0x12cf5c) * _0x12cf5c + _0x12cf5c / 0x2)[_0x40f5b6(0x182)](0x6), _0x28cf92 = (parseInt(_0x3492cd[0x2] / _0x1f0145) * _0x1f0145 + _0x1f0145 / 0x2)[_0x40f5b6(0x182)](0x6), _0x3e88a8 = parseFloat(_0x3492cd[0x0]);
            if (typeof _0x53f9ce[_0x568836 + '-' + _0x28cf92] == 'undefined') _0x53f9ce[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': 0x1
            };
            else _0x53f9ce[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x53f9ce[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0x126)] + _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': _0x53f9ce[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0xaa)] + 0x1
            };
            _0x12cf5c = 0.0128, _0x1f0145 = 0.01024, _0x3e88a8 = 0x0, _0x568836 = (parseInt(_0x3492cd[0x1] / _0x12cf5c) * _0x12cf5c + _0x12cf5c / 0x2)[_0x40f5b6(0x182)](0x6), _0x28cf92 = (parseInt(_0x3492cd[0x2] / _0x1f0145) * _0x1f0145 + _0x1f0145 / 0x2)[_0x40f5b6(0x182)](0x6), _0x3e88a8 = parseFloat(_0x3492cd[0x0]);
            if (typeof _0xb94203[_0x568836 + '-' + _0x28cf92] == 'undefined') _0xb94203[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': 0x1
            };
            else _0xb94203[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0xb94203[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0x126)] + _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': _0xb94203[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0xaa)] + 0x1
            };
            _0x12cf5c = 0.0064, _0x1f0145 = 0.00512, _0x3e88a8 = 0x0, _0x568836 = (parseInt(_0x3492cd[0x1] / _0x12cf5c) * _0x12cf5c + _0x12cf5c / 0x2)[_0x40f5b6(0x182)](0x6), _0x28cf92 = (parseInt(_0x3492cd[0x2] / _0x1f0145) * _0x1f0145 + _0x1f0145 / 0x2)['toFixed'](0x6), _0x3e88a8 = parseFloat(_0x3492cd[0x0]);
            if (typeof _0x5e40a0[_0x568836 + '-' + _0x28cf92] == 'undefined') _0x5e40a0[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': 0x1
            };
            else _0x5e40a0[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x5e40a0[_0x568836 + '-' + _0x28cf92]['VAL'] + _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': _0x5e40a0[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0xaa)] + 0x1
            };
            _0x12cf5c = 0.0032, _0x1f0145 = 0.00256, _0x3e88a8 = 0x0, _0x568836 = (parseInt(_0x3492cd[0x1] / _0x12cf5c) * _0x12cf5c + _0x12cf5c / 0x2)['toFixed'](0x6), _0x28cf92 = (parseInt(_0x3492cd[0x2] / _0x1f0145) * _0x1f0145 + _0x1f0145 / 0x2)[_0x40f5b6(0x182)](0x6), _0x3e88a8 = parseFloat(_0x3492cd[0x0]);
            if (typeof _0x12e964[_0x568836 + '-' + _0x28cf92] == _0x40f5b6(0x2fd)) _0x12e964[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': 0x1
            };
            else _0x12e964[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x12e964[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0x126)] + _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': _0x12e964[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0xaa)] + 0x1
            };
            _0x12cf5c = 0.0016, _0x1f0145 = 0.00128, _0x568836 = (parseInt(_0x3492cd[0x1] / _0x12cf5c) * _0x12cf5c + _0x12cf5c / 0x2)[_0x40f5b6(0x182)](0x6), _0x28cf92 = (parseInt(_0x3492cd[0x2] / _0x1f0145) * _0x1f0145 + _0x1f0145 / 0x2)['toFixed'](0x6);
            if (typeof _0x5d7a5a[_0x568836 + '-' + _0x28cf92] == _0x40f5b6(0x2fd)) _0x5d7a5a[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': 0x1
            };
            else _0x5d7a5a[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x5d7a5a[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0x126)] + _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': _0x5d7a5a[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0xaa)] + 0x1
            };
            _0x12cf5c = 0.0008, _0x1f0145 = 0.00064, _0x568836 = (parseInt(_0x3492cd[0x1] / _0x12cf5c) * _0x12cf5c + _0x12cf5c / 0x2)[_0x40f5b6(0x182)](0x6), _0x28cf92 = (parseInt(_0x3492cd[0x2] / _0x1f0145) * _0x1f0145 + _0x1f0145 / 0x2)['toFixed'](0x6);
            if (typeof _0x3a382c[_0x568836 + '-' + _0x28cf92] == _0x40f5b6(0x2fd)) _0x3a382c[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': 0x1
            };
            else _0x3a382c[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x3a382c[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0x126)] + _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': _0x3a382c[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0xaa)] + 0x1
            };
            _0x12cf5c = 0.0004, _0x1f0145 = 0.00032, _0x568836 = (parseInt(_0x3492cd[0x1] / _0x12cf5c) * _0x12cf5c + _0x12cf5c / 0x2)[_0x40f5b6(0x182)](0x6), _0x28cf92 = (parseInt(_0x3492cd[0x2] / _0x1f0145) * _0x1f0145 + _0x1f0145 / 0x2)[_0x40f5b6(0x182)](0x6);
            if (typeof _0x4d2591[_0x568836 + '-' + _0x28cf92] == 'undefined') _0x4d2591[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': 0x1
            };
            else _0x4d2591[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x4d2591[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0x126)] + _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': _0x4d2591[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0xaa)] + 0x1
            };
            _0x12cf5c = 0.0002, _0x1f0145 = 0.00016, _0x568836 = (parseInt(_0x3492cd[0x1] / _0x12cf5c) * _0x12cf5c + _0x12cf5c / 0x2)['toFixed'](0x6), _0x28cf92 = (parseInt(_0x3492cd[0x2] / _0x1f0145) * _0x1f0145 + _0x1f0145 / 0x2)[_0x40f5b6(0x182)](0x6);
            if (typeof _0x298c7c[_0x568836 + '-' + _0x28cf92] == _0x40f5b6(0x2fd)) _0x298c7c[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': 0x1
            };
            else _0x298c7c[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x298c7c[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0x126)] + _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': _0x298c7c[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0xaa)] + 0x1
            };
            _0x12cf5c = 0.0001, _0x1f0145 = 0.00008, _0x568836 = (parseInt(_0x3492cd[0x1] / _0x12cf5c) * _0x12cf5c + _0x12cf5c / 0x2)[_0x40f5b6(0x182)](0x6), _0x28cf92 = (parseInt(_0x3492cd[0x2] / _0x1f0145) * _0x1f0145 + _0x1f0145 / 0x2)['toFixed'](0x6);
            if (typeof _0x5af187[_0x568836 + '-' + _0x28cf92] == _0x40f5b6(0x2fd)) _0x5af187[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': 0x1
            };
            else _0x5af187[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x5af187[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0x126)] + _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': _0x5af187[_0x568836 + '-' + _0x28cf92]['CNT'] + 0x1
            };
            _0x12cf5c = 0.00005, _0x1f0145 = 0.00004, _0x568836 = (parseInt(_0x3492cd[0x1] / _0x12cf5c) * _0x12cf5c + _0x12cf5c / 0x2)[_0x40f5b6(0x182)](0x6), _0x28cf92 = (parseInt(_0x3492cd[0x2] / _0x1f0145) * _0x1f0145 + _0x1f0145 / 0x2)[_0x40f5b6(0x182)](0x6);
            if (typeof _0x5eeefe[_0x568836 + '-' + _0x28cf92] == _0x40f5b6(0x2fd)) _0x5eeefe[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': 0x1
            };
            else _0x5eeefe[_0x568836 + '-' + _0x28cf92] = {
                'VAL': _0x5eeefe[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0x126)] + _0x3e88a8,
                'X': _0x568836,
                'Y': _0x28cf92,
                'CNT': _0x5eeefe[_0x568836 + '-' + _0x28cf92][_0x40f5b6(0xaa)] + 0x1
            };
        }
    }
    let _0x5d3d49 = new Array();
    if (_0x5b2a78 == ![]) {
        let _0x21034c = '',
            _0x308a73 = '',
            _0x122fdd = '',
            _0x108531 = '',
            _0x3e454f = '',
            _0xd0e6e3 = '',
            _0x2bc508 = '',
            _0x2c89f4 = '',
            _0x6fec76 = '',
            _0x3b6b9d = '',
            _0x1787df = '';
        for (oObj in _0x3c7481) _0x21034c += _0x3c7481[oObj]['VAL'] + ',' + _0x3c7481[oObj]['X'] + ',' + _0x3c7481[oObj]['Y'] + ',' + _0x3c7481[oObj][_0x40f5b6(0xaa)] + '|';
        for (oObj in _0x53f9ce) _0x308a73 += _0x53f9ce[oObj][_0x40f5b6(0x126)] + ',' + _0x53f9ce[oObj]['X'] + ',' + _0x53f9ce[oObj]['Y'] + ',' + _0x53f9ce[oObj][_0x40f5b6(0xaa)] + '|';
        for (oObj in _0xb94203) _0x122fdd += _0xb94203[oObj][_0x40f5b6(0x126)] + ',' + _0xb94203[oObj]['X'] + ',' + _0xb94203[oObj]['Y'] + ',' + _0xb94203[oObj][_0x40f5b6(0xaa)] + '|';
        for (oObj in _0x5e40a0) _0x108531 += _0x5e40a0[oObj]['VAL'] + ',' + _0x5e40a0[oObj]['X'] + ',' + _0x5e40a0[oObj]['Y'] + ',' + _0x5e40a0[oObj][_0x40f5b6(0xaa)] + '|';
        for (oObj in _0x12e964) _0x3e454f += _0x12e964[oObj][_0x40f5b6(0x126)] + ',' + _0x12e964[oObj]['X'] + ',' + _0x12e964[oObj]['Y'] + ',' + _0x12e964[oObj][_0x40f5b6(0xaa)] + '|';
        for (oObj in _0x5d7a5a) _0xd0e6e3 += _0x5d7a5a[oObj][_0x40f5b6(0x126)] + ',' + _0x5d7a5a[oObj]['X'] + ',' + _0x5d7a5a[oObj]['Y'] + ',' + _0x5d7a5a[oObj][_0x40f5b6(0xaa)] + '|';
        for (oObj in _0x3a382c) _0x2bc508 += _0x3a382c[oObj][_0x40f5b6(0x126)] + ',' + _0x3a382c[oObj]['X'] + ',' + _0x3a382c[oObj]['Y'] + ',' + _0x3a382c[oObj]['CNT'] + '|';
        for (oObj in _0x4d2591) _0x2c89f4 += _0x4d2591[oObj][_0x40f5b6(0x126)] + ',' + _0x4d2591[oObj]['X'] + ',' + _0x4d2591[oObj]['Y'] + ',' + _0x4d2591[oObj][_0x40f5b6(0xaa)] + '|';
        for (oObj in _0x298c7c) _0x6fec76 += _0x298c7c[oObj][_0x40f5b6(0x126)] + ',' + _0x298c7c[oObj]['X'] + ',' + _0x298c7c[oObj]['Y'] + ',' + _0x298c7c[oObj][_0x40f5b6(0xaa)] + '|';
        for (oObj in _0x5af187) _0x3b6b9d += _0x5af187[oObj][_0x40f5b6(0x126)] + ',' + _0x5af187[oObj]['X'] + ',' + _0x5af187[oObj]['Y'] + ',' + _0x5af187[oObj][_0x40f5b6(0xaa)] + '|';
        for (oObj in _0x5eeefe) _0x1787df += _0x5eeefe[oObj]['VAL'] + ',' + _0x5eeefe[oObj]['X'] + ',' + _0x5eeefe[oObj]['Y'] + ',' + _0x5eeefe[oObj][_0x40f5b6(0xaa)] + '|';
        _0x5d3d49[0xc] = _0x21034c, _0x5d3d49[0xb] = _0x308a73, _0x5d3d49[0xa] = _0x122fdd, _0x5d3d49[0x9] = _0x108531, _0x5d3d49[0x8] = _0x3e454f, _0x5d3d49[0x7] = _0xd0e6e3, _0x5d3d49[0x6] = _0x2bc508, _0x5d3d49[0x5] = _0x2c89f4, _0x5d3d49[0x4] = _0x6fec76, _0x5d3d49[0x3] = _0x3b6b9d, _0x5d3d49[0x2] = _0x1787df, _0x21034c = null, _0x308a73 = null, _0x122fdd = null, _0x108531 = null, _0x3e454f = null, _0xd0e6e3 = null, _0x2bc508 = null, _0x2c89f4 = null, _0x6fec76 = null, _0x3b6b9d = null, _0x1787df = null;
    } else _0x5d3d49[0xc] = _0x3c7481, _0x5d3d49[0xb] = _0x53f9ce, _0x5d3d49[0xa] = _0xb94203, _0x5d3d49[0x9] = _0x5e40a0, _0x5d3d49[0x8] = _0x12e964, _0x5d3d49[0x7] = _0x5d7a5a, _0x5d3d49[0x6] = _0x3a382c, _0x5d3d49[0x5] = _0x4d2591, _0x5d3d49[0x4] = _0x298c7c, _0x5d3d49[0x3] = _0x5af187, _0x5d3d49[0x2] = _0x5eeefe;
    return _0x3c7481 = null, _0x53f9ce = null, _0xb94203 = null, _0x5e40a0 = null, _0x12e964 = null, _0x5d7a5a = null, _0x3a382c = null, _0x4d2591 = null, _0x298c7c = null, _0x5af187 = null, _0x5eeefe = null, _0x30b0c5 = null, _0x5d3d49;
}

function HM_createHeatMapFromPoint2(_0x4b3721) {
    let _0x27a64d = setInterval(function() {
        const _0x267c25 = _0x3192;
        h_bLoaded == !![] && h_bTOCLoaded == !![] && (clearInterval(_0x27a64d), _0x27a64d = null, h_aCallStackArray[_0x4b3721[_0x267c25(0x263)]] = h_nCallStackLoc, _h_GetImageFromUrl(_0x4b3721, h_nCallStackLoc), _h_addLayerToTOC(_0x4b3721), _0x4b3721 = null, swal[_0x267c25(0x376)]());
    }, 0x12c);
}

function _h_ShowLoadingConvertMessageForPT2Raster() {
    const _0x2ccb5f = _0x3a1a23;
    swal[_0x2ccb5f(0x376)](), Swal[_0x2ccb5f(0x324)]({
        'title': _0x2ccb5f(0x3b2),
        'html': _0x2ccb5f(0x208),
        'allowOutsideClick': ![],
        'timerProgressBar': !![],
        'onBeforeOpen': function() {
            const _0x2666a7 = _0x2ccb5f;
            Swal[_0x2666a7(0xca)]();
        },
        'onClose': function() {}
    })[_0x2ccb5f(0x1e3)](function(_0x52b8c5) {
        const _0x234115 = _0x2ccb5f;
        if (_0x52b8c5[_0x234115(0xdd)] === Swal['DismissReason'][_0x234115(0x2e9)]) {}
    });
}

function onMarkerMouseOverListener_shiftReturn() {
    const _0x351d8c = _0x3a1a23;
    if (h_bPointShift == ![]) return;
    let _0x2fce9 = 0x0,
        _0x42e972 = h_aPointShiftArray[_0x351d8c(0x363)];
    for (let _0x29d0f7 = 0x0; _0x29d0f7 < _0x42e972; _0x29d0f7++) {
        {
            h_aPointShiftArray[_0x29d0f7][_0x351d8c(0x10e)](h_oPointShiftPreMarkerImage), h_aPointShiftArray[_0x29d0f7][_0x351d8c(0x328)](null), h_aPointShiftArray[_0x29d0f7][_0x351d8c(0x35e)] = 0x0;
        }
    }
    h_bPointShift = ![], h_sPointShiftXYstring = '', h_oPointShiftMarkerImage = null, h_aPointShiftArray = null;
}

function onMarkerMouseOverListener_shift(_0x4e5c0b, _0x2f095d, _0x3789b7) {
    const _0x4c22f6 = _0x3a1a23;
    _0x3789b7 /= 1.5;
    if (h_bPointShift == !![]) {
        if (_0x2f095d[_0x4c22f6(0xc3)]()['toString']() == h_sPointShiftXYstring) return;
    }
    let _0x37ae31 = h_oMap[_0x4c22f6(0x330)]();
    if (_0x37ae31 < 0x2) _0x37ae31 = 0x2;
    if (_0x37ae31 > 0xc) _0x37ae31 = 0xc;
    let _0x3f5d87 = 0.04,
        _0x2590b5 = 0xf4240;
    if (_0x37ae31 >= 0xc) _0x3f5d87 = 0.003 * 0x2;
    else {
        if (_0x37ae31 == 0xb) _0x3f5d87 = 0.0016 * 0x2;
        else {
            if (_0x37ae31 == 0xa) _0x3f5d87 = 0.0016 * 0x2;
            else {
                if (_0x37ae31 == 0x9) _0x3f5d87 = 0.001 * 0x2;
                else {
                    if (_0x37ae31 == 0x8) _0x3f5d87 = 0.0005 * 0x2;
                    else {
                        if (_0x37ae31 == 0x7) _0x3f5d87 = 0.0005 * 0x2;
                        else {
                            if (_0x37ae31 == 0x6) _0x3f5d87 = 0.0002 * 0x2;
                            else {
                                if (_0x37ae31 == 0x5) _0x3f5d87 = 0.00015 * 0x2;
                                else {
                                    if (_0x37ae31 == 0x4) _0x3f5d87 = 0.00008 * 0x2;
                                    else {
                                        if (_0x37ae31 == 0x3) _0x3f5d87 = 0.000007 * 0x2;
                                        else {
                                            if (_0x37ae31 <= 0x2) _0x3f5d87 = 5e-7 * 0x2;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    let _0x2405bc = _h_FastFloor(_0x2f095d['getPosition']()[_0x4c22f6(0x387)](), _0x2590b5),
        _0x9b9a8 = _h_FastFloor(_0x2f095d[_0x4c22f6(0xc3)]()['getLat'](), _0x2590b5),
        _0x5a407f = _h_FastFloor(Math['floor'](_0x2405bc / _0x3f5d87) * _0x3f5d87 + _0x3f5d87 / 0x2, _0x2590b5) + '-' + _h_FastFloor(Math[_0x4c22f6(0x17e)](_0x9b9a8 / _0x3f5d87) * _0x3f5d87 + _0x3f5d87 / 0x2, _0x2590b5),
        _0x1c86f3 = '';
    onMarkerMouseOverListener_shiftReturn(), _h_removeShiftGuideLine();
    let _0xf89af6 = 0x0,
        _0x3cfefb = _0x4e5c0b[_0x4c22f6(0x1a5)][_0x37ae31],
        _0x25fa84 = _0x3cfefb[_0x4c22f6(0x363)];
    for (let _0x5665a7 = 0x0; _0x5665a7 < _0x25fa84; _0x5665a7++) {
        {
            _0x2405bc = _h_FastFloor(_0x3cfefb[_0x5665a7]['getPosition']()[_0x4c22f6(0x387)](), _0x2590b5), _0x9b9a8 = _h_FastFloor(_0x3cfefb[_0x5665a7]['getPosition']()[_0x4c22f6(0xac)](), _0x2590b5), _0x1c86f3 = _h_FastFloor(Math[_0x4c22f6(0x17e)](_0x2405bc / _0x3f5d87) * _0x3f5d87 + _0x3f5d87 / 0x2, _0x2590b5) + '-' + _h_FastFloor(Math[_0x4c22f6(0x17e)](_0x9b9a8 / _0x3f5d87) * _0x3f5d87 + _0x3f5d87 / 0x2, _0x2590b5);
            if (_0x5a407f == _0x1c86f3) {
                let _0x2a11fd = _0x3cfefb[_0x5665a7][_0x4c22f6(0x22a)](),
                    _0x12c236 = _h_getMouseOverShiftUrlByImageMarker_ForKaKao(_0x2a11fd),
                    _0x42dc28 = _0x3789b7 / 0x1 * (_0xf89af6 + 0x1) * -0x1,
                    _0x8a8c4e = new kakao[(_0x4c22f6(0x12a))]['Size'](_0x3789b7, _0x3789b7),
                    _0x270466 = {
                        'offset': new kakao['maps'][(_0x4c22f6(0x29b))](_0x3789b7 / 0x2 + _0x42dc28, _0x3789b7 / 0x2)
                    },
                    _0x3995b7 = new kakao['maps'][(_0x4c22f6(0x28f))](_0x12c236, _0x8a8c4e, _0x270466);
                _0x3cfefb[_0x5665a7][_0x4c22f6(0x10e)](_0x3995b7), _0x3cfefb[_0x5665a7][_0x4c22f6(0x35e)] = _0x42dc28, _0x3cfefb[_0x5665a7][_0x4c22f6(0x328)](h_oMap), _0xf89af6++;
                if (h_aPointShiftArray == null) h_aPointShiftArray = new Array();
                h_aPointShiftArray[_0x4c22f6(0x29a)](_0x3cfefb[_0x5665a7]), h_bPointShift = !![], h_sPointShiftXYstring = _0x5a407f, h_oPointShiftPreMarkerImage = _0x2a11fd, _0x3995b7 = null, _0x2a11fd = null;
            }
            _0x1c86f3 = null;
        }
    }
    _0x3cfefb = null, _0xf89af6 > 0x0 && _h_drawShiftGuideLine(_0x2f095d[_0x4c22f6(0xc3)](), _0x3789b7, _0xf89af6 + 0x1, _0x4e5c0b[_0x4c22f6(0x205)]), _0x4e5c0b = null;
}

function _h_getLabelObject(_0x5ca359, _0x164b0f, _0x206847, _0x1ffc06) {
    const _0x1d5155 = _0x3a1a23;
    if (_0x5ca359[_0x1d5155(0x3e6)] == '') return null;
    let _0x56f25a = _0x5ca359['weight'],
        _0x1152a9 = _0x5ca359[_0x1d5155(0x3e6)],
        _0x5d2e72 = '',
        _0x4d9e7f = 0xf,
        _0x4d7286 = 'rgba(0,0,0,1.0)',
        _0x3b2c5f = 'rgba(255,255,255,0.9)',
        _0x43d3ae = 'LEFT',
        _0x270c93 = 0x0,
        _0x366202 = 0x0;
    _0x1152a9[_0x1d5155(0x1c4)](_0x1d5155(0x26f))[_0x1d5155(0x363)] > 0x1 && (_0x5d2e72 = _0x1152a9['split']('#|#')[0x0], _0x1152a9 = _0x1152a9[_0x1d5155(0x1c4)]('#|#')[0x1]);
    if (_0x5d2e72 != '') {
        _0x5d2e72 = _0x5d2e72['replace']('{', ''), _0x5d2e72 = _0x5d2e72[_0x1d5155(0xd2)]('}', ''), _0x5d2e72 = _0x5d2e72[_0x1d5155(0x1c4)]('\x20')[_0x1d5155(0x163)]('');
        let _0x500f6a = _0x5d2e72[_0x1d5155(0x1c4)](';'),
            _0x3cdddd = _0x500f6a['length'];
        for (let _0x5c4f2e = 0x0; _0x5c4f2e < _0x3cdddd; _0x5c4f2e++) {
            _0x500f6a[_0x5c4f2e] = _0x500f6a[_0x5c4f2e][_0x1d5155(0xab)]();
            if (_0x500f6a[_0x5c4f2e][_0x1d5155(0x37d)](_0x1d5155(0xf8)) == 0x0) _0x4d7286 = _0x500f6a[_0x5c4f2e][_0x1d5155(0xd2)]('색상:', '');
            else {
                if (_0x500f6a[_0x5c4f2e][_0x1d5155(0x37d)](_0x1d5155(0x3b5)) == 0x0) _0x3b2c5f = _0x500f6a[_0x5c4f2e][_0x1d5155(0xd2)](_0x1d5155(0x3b5), '');
                else {
                    if (_0x500f6a[_0x5c4f2e][_0x1d5155(0x37d)]('크기:') == 0x0) _0x4d9e7f = parseInt(_0x500f6a[_0x5c4f2e][_0x1d5155(0xd2)](_0x1d5155(0x230), ''));
                    else {
                        if (_0x500f6a[_0x5c4f2e][_0x1d5155(0x37d)](_0x1d5155(0x2b4)) == 0x0) _0x43d3ae = _0x500f6a[_0x5c4f2e][_0x1d5155(0xd2)](_0x1d5155(0x2b4), '');
                        else {
                            if (_0x500f6a[_0x5c4f2e][_0x1d5155(0x37d)](_0x1d5155(0x192)) == 0x0) _0x270c93 = parseInt(_0x500f6a[_0x5c4f2e][_0x1d5155(0xd2)]('dX:', ''));
                            else {
                                if (_0x500f6a[_0x5c4f2e][_0x1d5155(0x37d)]('dY:') == 0x0) _0x366202 = parseInt(_0x500f6a[_0x5c4f2e][_0x1d5155(0xd2)](_0x1d5155(0x293), ''));
                            }
                        }
                    }
                }
            }
        }
    }
    _0x270c93 = _0x270c93 + _0x56f25a / 0x2;
    let _0x46be04 = 0x4,
        _0x451c4b = _0x4d9e7f + parseInt(_0x46be04 * 0x2),
        _0x45c03c = _0x4d9e7f * _0x1152a9[_0x1d5155(0x363)] + _0x46be04;
    if (_0x1152a9[_0x1d5155(0x37d)](_0x1d5155(0x16b)) >= 0x0) {
        let _0x3937b2 = _0x1152a9[_0x1d5155(0x1c4)](_0x1d5155(0x16b)),
            _0x30ad64 = _0x3937b2['length'];
        _0x451c4b = _0x451c4b * _0x30ad64 + 0x1 * _0x30ad64;
        let _0x103b96 = 0x0;
        for (let _0xbb8273 = 0x0; _0xbb8273 < _0x30ad64; _0xbb8273++)
            if (_0x3937b2[_0xbb8273][_0x1d5155(0x363)] > _0x103b96) _0x103b96 = _0x3937b2[_0xbb8273][_0x1d5155(0x363)];
        _0x45c03c = _0x4d9e7f * _0x103b96 + _0x46be04, _0x3937b2 = null;
    }
    let _0x48fc6f = document[_0x1d5155(0x1c1)][0x0][_0x1d5155(0x3e7)],
        _0x3010cb = _h_getTextWidth(_0x1152a9, _0x4d9e7f + _0x1d5155(0xe8) + h_sFontNM + '\x27');
    _0x45c03c = _0x3010cb + _0x46be04;
    let _0x5a2cb4 = h_sFontNM;
    if (_0x5a2cb4 == _0x1d5155(0x349)) _0x5a2cb4 = 'NEXON\x20Lv1\x20Gothic\x20OTF';
    _0x451c4b /= 1.2, _0x45c03c *= 1.1, _0x451c4b *= 1.1, _0x4d9e7f *= 1.1, _0x46be04 *= 0x2;
    let _0x25bfef = _0x1d5155(0x21b) + _0x1d5155(0x14e) + _0x1d5155(0x327) + _0x48fc6f + '&LABEL=' + _0x1152a9 + _0x1d5155(0x14b) + _0x5a2cb4 + _0x1d5155(0x2e2) + _0x4d7286 + _0x1d5155(0x395) + _0x3b2c5f + _0x1d5155(0x3e8) + _0x46be04 + _0x1d5155(0x38c) + _0x4d9e7f + '&WIDTH=' + _0x45c03c + _0x1d5155(0x1b0) + _0x451c4b;
    _0x48fc6f = null;
    let _0x5e3f99 = new kakao[(_0x1d5155(0x12a))][(_0x1d5155(0x235))](_0x45c03c, _0x451c4b),
        _0x44c255 = 0x0,
        _0x20cb3f = 0x0;
    _0x43d3ae[_0x1d5155(0xb9)]() == 'CENTER' && (_0x44c255 = _0x45c03c / 0x2, _0x20cb3f = _0x451c4b / 0x2);
    _0x43d3ae[_0x1d5155(0xb9)]() == _0x1d5155(0x129) && (_0x44c255 = _0x45c03c, _0x20cb3f = _0x451c4b / 0x2);
    _0x43d3ae[_0x1d5155(0xb9)]() == 'RIGHT' && (_0x44c255 = 0x0, _0x20cb3f = _0x451c4b / 0x2); {
        _0x270c93 *= -0x1;
    }
    _0x44c255 += _0x270c93, _0x20cb3f += _0x366202;
    let _0x34059f = new Object();
    return _0x34059f[_0x1d5155(0xcc)] = _0x44c255, _0x34059f[_0x1d5155(0x370)] = _0x20cb3f, _0x34059f[_0x1d5155(0x1c6)] = _0x25bfef, _0x34059f[_0x1d5155(0x1a4)] = _0x5e3f99, _0x34059f[_0x1d5155(0x1b5)] = new kakao['maps'][(_0x1d5155(0x32b))](_0x206847, _0x164b0f), _0x34059f[_0x1d5155(0x11c)] = _0x1ffc06[_0x1d5155(0x2e7)], _0x34059f[_0x1d5155(0x3ef)] = _0x206847, _0x25bfef = null, _0x5ca359 = null, _0x1ffc06 = null, _0x34059f;
}

function del_h_getLabelMarker(_0x6b3303, _0xce0265) {
    const _0x54e5b1 = _0x3a1a23;
    if (_0x6b3303['label'] == '') return null;
    let _0x527759 = _0x6b3303[_0x54e5b1(0x391)],
        _0x2dcd89 = _0x6b3303[_0x54e5b1(0x3e6)],
        _0x34a63f = '',
        _0x4007c6 = 0xf,
        _0x1daef0 = _0x54e5b1(0x3d7),
        _0x534d3a = _0x54e5b1(0x2e3),
        _0x405468 = _0x54e5b1(0x129),
        _0x1f3359 = 0x0,
        _0xde2530 = 0x0;
    _0x2dcd89['split'](_0x54e5b1(0x26f))['length'] > 0x1 && (_0x34a63f = _0x2dcd89[_0x54e5b1(0x1c4)](_0x54e5b1(0x26f))[0x0], _0x2dcd89 = _0x2dcd89[_0x54e5b1(0x1c4)]('#|#')[0x1]);
    if (_0x34a63f != '') {
        _0x34a63f = _0x34a63f['replace']('{', ''), _0x34a63f = _0x34a63f[_0x54e5b1(0xd2)]('}', ''), _0x34a63f = _0x34a63f[_0x54e5b1(0x1c4)]('\x20')[_0x54e5b1(0x163)]('');
        let _0x4b577b = _0x34a63f[_0x54e5b1(0x1c4)](';'),
            _0xa5bf83 = _0x4b577b[_0x54e5b1(0x363)];
        for (let _0x4ebe13 = 0x0; _0x4ebe13 < _0xa5bf83; _0x4ebe13++) {
            _0x4b577b[_0x4ebe13] = _0x4b577b[_0x4ebe13]['trim']();
            if (_0x4b577b[_0x4ebe13]['indexOf']('색상:') == 0x0) _0x1daef0 = _0x4b577b[_0x4ebe13][_0x54e5b1(0xd2)](_0x54e5b1(0xf8), '');
            else {
                if (_0x4b577b[_0x4ebe13][_0x54e5b1(0x37d)](_0x54e5b1(0x3b5)) == 0x0) _0x534d3a = _0x4b577b[_0x4ebe13][_0x54e5b1(0xd2)](_0x54e5b1(0x3b5), '');
                else {
                    if (_0x4b577b[_0x4ebe13][_0x54e5b1(0x37d)](_0x54e5b1(0x230)) == 0x0) _0x4007c6 = parseInt(_0x4b577b[_0x4ebe13]['replace'](_0x54e5b1(0x230), ''));
                    else {
                        if (_0x4b577b[_0x4ebe13][_0x54e5b1(0x37d)](_0x54e5b1(0x2b4)) == 0x0) _0x405468 = _0x4b577b[_0x4ebe13][_0x54e5b1(0xd2)](_0x54e5b1(0x2b4), '');
                        else {
                            if (_0x4b577b[_0x4ebe13]['indexOf'](_0x54e5b1(0x192)) == 0x0) _0x1f3359 = parseInt(_0x4b577b[_0x4ebe13][_0x54e5b1(0xd2)](_0x54e5b1(0x192), ''));
                            else {
                                if (_0x4b577b[_0x4ebe13]['indexOf'](_0x54e5b1(0x293)) == 0x0) _0xde2530 = parseInt(_0x4b577b[_0x4ebe13]['replace']('dY:', ''));
                            }
                        }
                    }
                }
            }
        }
    }
    _0x1f3359 = _0x1f3359 + _0x527759 / 0x2;
    let _0x50ff40 = 0x4,
        _0x2f5aad = _0x4007c6 + parseInt(_0x50ff40 * 0x2),
        _0x538b0d = _0x4007c6 * _0x2dcd89[_0x54e5b1(0x363)] + _0x50ff40,
        _0x33b74a = _h_getTextWidth(_0x2dcd89, _0x4007c6 + _0x54e5b1(0xe8) + h_sFontNM + '\x27');
    _0x538b0d = _0x33b74a + _0x50ff40;
    let _0xb358c0 = document[_0x54e5b1(0x1c1)][0x0]['href'],
        _0xf952fc = h_sFontNM;
    if (_0xf952fc == _0x54e5b1(0x349)) _0xf952fc = _0x54e5b1(0x354);
    _0x2f5aad /= 1.2, _0x538b0d *= 1.1, _0x2f5aad *= 1.1, _0x4007c6 *= 1.1, _0x50ff40 *= 0x2;
    let _0x11d807 = 'https://www.policymap.or.kr/heatmap_api/marker/svg2png_label.php?GUBUN=marker_svg2&ICON=' + _0x54e5b1(0x14e) + _0x54e5b1(0x327) + _0xb358c0 + '&LABEL=' + _0x2dcd89 + _0x54e5b1(0x14b) + h_sFontNM + '&FILL_COLOR=' + _0x1daef0 + _0x54e5b1(0x395) + _0x534d3a + _0x54e5b1(0x3e8) + _0x50ff40 + _0x54e5b1(0x38c) + _0x4007c6 + _0x54e5b1(0x2cf) + _0x538b0d + _0x54e5b1(0x1b0) + _0x2f5aad;
    _0xb358c0 = null;
    let _0x4e8a5e = new kakao['maps'][(_0x54e5b1(0x235))](_0x538b0d, _0x2f5aad),
        _0x5ba6fb = 0x0,
        _0x3bf826 = 0x0;
    _0x405468[_0x54e5b1(0xb9)]() == _0x54e5b1(0x32d) && (_0x5ba6fb = _0x538b0d / 0x2, _0x3bf826 = _0x2f5aad / 0x2);
    _0x405468[_0x54e5b1(0xb9)]() == 'LEFT' && (_0x5ba6fb = _0x538b0d, _0x3bf826 = _0x2f5aad / 0x2);
    _0x405468[_0x54e5b1(0xb9)]() == _0x54e5b1(0x3a2) && (_0x5ba6fb = 0x0, _0x3bf826 = _0x2f5aad / 0x2); {
        _0x1f3359 *= -0x1;
    }
    _0x5ba6fb += _0x1f3359, _0x3bf826 += _0xde2530;
    let _0x267a39 = {
            'offset': new kakao[(_0x54e5b1(0x12a))][(_0x54e5b1(0x29b))](_0x5ba6fb, _0x3bf826)
        },
        _0x101057 = new kakao[(_0x54e5b1(0x12a))][(_0x54e5b1(0x28f))](_0x11d807, _0x4e8a5e, _0x267a39),
        _0x3b8bfd = new kakao[(_0x54e5b1(0x12a))][(_0x54e5b1(0xfc))]({
            'position': new kakao[(_0x54e5b1(0x12a))][(_0x54e5b1(0x32b))](_0x6b3303[_0x54e5b1(0x2d2)][0x1], _0x6b3303[_0x54e5b1(0x2d2)][0x0]),
            'image': _0x101057,
            'zIndex': _0xce0265['zIndex'] - 0x1,
            'opacity': _0xce0265[_0x54e5b1(0x2e7)],
            'clickable': ![]
        });
    return _0x4e8a5e = null, _0x267a39 = null, _0x101057 = null, _0x6b3303 = null, _0xce0265 = null, _0x3b8bfd;
}

function _h_setZoomForPoint(_0x264c12) {
    const _0x4f5e69 = _0x3a1a23;
    if (h_oMap == null) return;
    if (h_oaLayer == null) return;
    if (h_oaLayer[_0x4f5e69(0x363)] < 0x1) return;
    setTimeout(function() {
        const _0x4882d3 = _0x4f5e69;
        if (_0x264c12 == h_nNoFireZoomChangedForSpeed)
            for (let _0x46c803 = 0x0; _0x46c803 < h_oaLayer['length']; _0x46c803++) {
                if (h_oaLayer[_0x46c803][_0x4882d3(0x350)] == 0x5 && h_oaLayer[_0x46c803][_0x4882d3(0x310)] == !![] && h_oaLayer[_0x46c803][_0x4882d3(0x298)] == ![]) {
                    let _0x3fda63 = h_oMap['getLevel']();
                    if (_0x3fda63 < 0x2) _0x3fda63 = 0x2;
                    if (_0x3fda63 > 0xc) _0x3fda63 = 0xc;
                    if (h_oaLayer[_0x46c803]['aPointOrLineOrPolygon_Markers_ZOOM'] == null) return;
                    let _0x3f57c1 = h_oaLayer[_0x46c803][_0x4882d3(0xbe)][_0x3fda63],
                        _0x63c6a8 = h_oaLayer[_0x46c803][_0x4882d3(0x1ad)]['_markers'];
                    if (_0x63c6a8[_0x4882d3(0x363)] != _0x3f57c1[_0x4882d3(0x363)]) h_oaLayer[_0x46c803][_0x4882d3(0x1ad)]['clear'](), h_oaLayer[_0x46c803][_0x4882d3(0x1ad)][_0x4882d3(0x21a)](_0x3f57c1), h_oaLayer[_0x46c803][_0x4882d3(0x1ad)]['redraw'](), h_oaLayer[_0x46c803][_0x4882d3(0x2ae)] != null && (h_oaLayer[_0x46c803][_0x4882d3(0x393)]['clear'](), h_oaLayer[_0x46c803][_0x4882d3(0x393)][_0x4882d3(0x328)](null));
                    else {}
                    _0x63c6a8 = null, _0x3f57c1 = null;
                }
            }
    }, 0x64);
}

function _h_GetZoomPointArray(_0x539806, _0x1c6f51, _0x577be7, _0x35d827, _0xc1315a, _0x42c83, _0x5762ed, _0x454013) {
    const _0x5e08a1 = _0x3a1a23;
    let _0xa62c3a = new Date(),
        _0x2cd51a = [],
        _0x58e530 = _0xc1315a,
        _0x1e05d0 = new Array(),
        _0x11b18f = 0x270f,
        _0x510521 = 0x270f,
        _0x29ab5e = -0x270f,
        _0xa7a98d = -0x270f,
        _0x3b67ff = _0x1c6f51[_0x5e08a1(0x384)][_0x5e08a1(0x363)],
        _0x3399b8 = 0.04,
        _0x2454da = 0xf4240;
    if (_0x577be7 >= 0xe) _0x3399b8 = 0.05 * 0x2;
    else {
        if (_0x577be7 == 0xd) _0x3399b8 = 0.03 * 0x2;
        else {
            if (_0x577be7 == 0xc) _0x3399b8 = 0.015 * 0x2;
            else {
                if (_0x577be7 == 0xb) _0x3399b8 = 0.012 * 0x2;
                else {
                    if (_0x577be7 == 0xa) _0x3399b8 = 0.006 * 0x2;
                    else {
                        if (_0x577be7 == 0x9) _0x3399b8 = 0.004 * 0x2;
                        else {
                            if (_0x577be7 == 0x8) _0x3399b8 = 0.002 * 0x2;
                            else {
                                if (_0x577be7 == 0x7) _0x3399b8 = 0.001 * 0x2;
                                else {
                                    if (_0x577be7 == 0x6) _0x3399b8 = 0.0005 * 0x2;
                                    else {
                                        if (_0x577be7 == 0x5) _0x3399b8 = 0.00025 * 0x2;
                                        else {
                                            if (_0x577be7 == 0x4) _0x3399b8 = 0.00008 * 0x2;
                                            else {
                                                if (_0x577be7 == 0x3) _0x3399b8 = 0.000007 * 0x2;
                                                else {
                                                    if (_0x577be7 <= 0x2) _0x3399b8 = 5e-7 * 0x2;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (_0x454013 == !![]) _0x3399b8 = 0.000001;
    let _0x4648af = null,
        _0x5bc7c1 = 0x0,
        _0xd003d = null,
        _0x44294c = 0x0,
        _0x18a641 = null,
        _0x49c259 = null,
        _0x33e68c = null,
        _0x69dcb = null,
        _0x57d737 = null,
        _0x1c6ae2 = null,
        _0x537bb7 = 0x0,
        _0x410aae = 0x0,
        _0x5a0d7c = ![];
    for (let _0x32c1ef = 0x0; _0x32c1ef < _0x3b67ff; _0x32c1ef++) {
        _0x4648af = _0x1c6f51[_0x5e08a1(0x384)][_0x32c1ef];
        if (_0x32c1ef == 0x0) {
            if (_0x4648af['content'][_0x5e08a1(0x37d)]('VIEW_URL:') >= 0x0) _0x5a0d7c = !![];
        }
        if (_0x539806[_0x5e08a1(0x1da)] == _0x5e08a1(0x19b)) {
            _0xd003d = _h_GetPublicMMSMarkerSrc(_0x4648af[_0x5e08a1(0x22e)]);
            let _0x54aca4 = parseInt(_0xd003d['split']('|')[0x0]);
            _0xd003d = _0xd003d[_0x5e08a1(0x1c4)]('|')[0x1];
            let _0x7cbaa6 = 0.8,
                _0x4d5762 = _0x54aca4 * _0x7cbaa6,
                _0x5ed6bd = 0x3e * _0x7cbaa6,
                _0x4976b4 = 0x5 * _0x7cbaa6;
            _0x44294c = new kakao[(_0x5e08a1(0x12a))][(_0x5e08a1(0x235))](_0x4d5762, _0x5ed6bd), _0x18a641 = {
                'offset': new kakao[(_0x5e08a1(0x12a))]['Point'](0x32 * _0x7cbaa6, _0x5ed6bd - _0x4976b4)
            }, _0x49c259 = new kakao[(_0x5e08a1(0x12a))][(_0x5e08a1(0x28f))](_0xd003d, _0x44294c, _0x18a641);
        } else _0x5bc7c1 = _0x4648af['weight'], _0xd003d = _h_GetMarkerSrc(_0x539806[_0x5e08a1(0x1da)], _0x539806[_0x5e08a1(0x1f5)], _0x5bc7c1), _0x44294c = new kakao[(_0x5e08a1(0x12a))][(_0x5e08a1(0x235))](_0x5bc7c1, _0x5bc7c1), _0x18a641 = {
            'offset': new kakao[(_0x5e08a1(0x12a))][(_0x5e08a1(0x29b))](_0x5bc7c1 / 0x2, _0x5bc7c1 / 0x2)
        }, _0x49c259 = new kakao[(_0x5e08a1(0x12a))][(_0x5e08a1(0x28f))](_0xd003d, _0x44294c, _0x18a641);
        _0x537bb7 = _h_FastFloor(_0x4648af[_0x5e08a1(0x2d2)][0x0], _0x2454da), _0x410aae = _h_FastFloor(_0x4648af[_0x5e08a1(0x2d2)][0x1], _0x2454da), _0x33e68c = new kakao[(_0x5e08a1(0x12a))][(_0x5e08a1(0xfc))]({
            'position': new kakao[(_0x5e08a1(0x12a))][(_0x5e08a1(0x32b))](_0x410aae, _0x537bb7),
            'image': _0x49c259,
            'zIndex': _0x539806['zIndex'],
            'opacity': _0x539806[_0x5e08a1(0x2e7)]
        });
        if (_0x11b18f > _0x537bb7) _0x11b18f = _0x537bb7;
        if (_0x510521 > _0x410aae) _0x510521 = _0x410aae;
        if (_0x29ab5e < _0x537bb7) _0x29ab5e = _0x537bb7;
        if (_0xa7a98d < _0x410aae) _0xa7a98d = _0x410aae;
        _0x44294c = null, _0x18a641 = null, _0x49c259 = null;
        let _0x1a6606 = _0x4648af[_0x5e08a1(0x22e)],
            _0x59012a = ![];
        _0x57d737 = _h_FastFloor(Math[_0x5e08a1(0x17e)](_0x537bb7 / _0x3399b8) * _0x3399b8 + _0x3399b8 / 0x2, _0x2454da) + '-' + _h_FastFloor(Math['floor'](_0x410aae / _0x3399b8) * _0x3399b8 + _0x3399b8 / 0x2, _0x2454da);
        if (typeof _0x1e05d0[_0x57d737] == _0x5e08a1(0x2fd)) _0x1e05d0[_0x57d737] = {
            'IDX': _0x32c1ef,
            'MARK': ![]
        };
        else _0x1e05d0[_0x57d737][_0x5e08a1(0x209)] == ![] && (_0x2cd51a[_0x1e05d0[_0x57d737]['IDX']][_0x5e08a1(0x389)]('\x20'), _0x1e05d0[_0x57d737][_0x5e08a1(0x209)] = !![]), _0x59012a = !![], _0x33e68c['setTitle']('\x20');
        if (h_isMobile == !![] || h_isTablet == !![]) kakao['maps'][_0x5e08a1(0x303)][_0x5e08a1(0x257)](_0x33e68c, _0x5e08a1(0x38a), onMarkerMouseOverListener(_0x539806, _0x33e68c, _0x1a6606, _0x5bc7c1));
        else {
            kakao[_0x5e08a1(0x12a)]['event']['addListener'](_0x33e68c, _0x5e08a1(0x267), onMarkerMouseOverListener(_0x539806, _0x33e68c, _0x1a6606, _0x5bc7c1)), kakao[_0x5e08a1(0x12a)][_0x5e08a1(0x303)][_0x5e08a1(0x257)](_0x33e68c, _0x5e08a1(0x1c9), onMarkerMouseOutListener(_0x539806, _0x33e68c));
            if (_0x539806[_0x5e08a1(0xef)][_0x5e08a1(0x37d)](_0x5e08a1(0x2db)) > 0x0) kakao['maps'][_0x5e08a1(0x303)][_0x5e08a1(0x257)](_0x33e68c, _0x5e08a1(0x38a), onMarkerMouseOverListenerForFire(_0x539806, _0x33e68c, _0x1a6606));
            else _0x5a0d7c == !![] && kakao[_0x5e08a1(0x12a)][_0x5e08a1(0x303)][_0x5e08a1(0x257)](_0x33e68c, _0x5e08a1(0x38a), onMarkerMouseOverListenerForVIEW_URL(_0x539806, _0x33e68c, _0x1a6606));
        }
        _0x59012a == ![] ? (_0x2cd51a[_0x5e08a1(0x29a)](_0x33e68c), _0x42c83 != null && (_0x69dcb = _h_getLabelObject(_0x4648af, _0x537bb7, _0x410aae, _0x539806), _0x42c83[_0x5e08a1(0x29a)](_0x69dcb))) : (_0x2cd51a[_0x5e08a1(0x29a)](null), _0x58e530[_0x5e08a1(0x29a)](_0x33e68c)), _0x57d737 = null, _0x4648af = null, _0x33e68c = null, _0x69dcb = null;
    }
    for (let _0x3dba03 = _0x2cd51a['length'] - 0x1; _0x3dba03 >= 0x0; _0x3dba03--)
        if (_0x2cd51a[_0x3dba03] != null) _0x35d827['push'](_0x2cd51a[_0x3dba03]);
    _0x42c83 != null && _0x42c83[_0x5e08a1(0x174)](function(_0x367827, _0x41293b) {
        return _0x367827['forSortY'] - _0x41293b['forSortY'];
    });
    _0x5762ed[0x0] = _0x11b18f, _0x5762ed[0x1] = _0x510521, _0x5762ed[0x2] = _0x29ab5e, _0x5762ed[0x3] = _0xa7a98d, _0x1e05d0 = null, _0x1c6f51 = null, _0x539806 = null, _0x2cd51a = null;
    let _0x52748e = new Date();
}

function _h_GetZoomPointArrayByMarkers(_0x34121c, _0x205b9f, _0x22bce7, _0x459fff, _0x329e7e, _0x142b7e, _0x44de47, _0x606461) {
    const _0x55ed35 = _0x3a1a23;
    let _0x51d088 = new Date(),
        _0x27ca39 = [],
        _0x2dd984 = _0x329e7e,
        _0x36f17e = new Array(),
        _0x1e0a5b = 0x270f,
        _0x507c2f = 0x270f,
        _0x1c459a = -0x270f,
        _0x452266 = -0x270f,
        _0x4663ef = _0x205b9f['length'],
        _0x804cc0 = 0.04,
        _0x5b51ea = 0xf4240;
    if (_0x22bce7 >= 0xe) _0x804cc0 = 0.05 * 0x2;
    else {
        if (_0x22bce7 == 0xd) _0x804cc0 = 0.03 * 0x2;
        else {
            if (_0x22bce7 == 0xc) _0x804cc0 = 0.015 * 0x2;
            else {
                if (_0x22bce7 == 0xb) _0x804cc0 = 0.012 * 0x2;
                else {
                    if (_0x22bce7 == 0xa) _0x804cc0 = 0.006 * 0x2;
                    else {
                        if (_0x22bce7 == 0x9) _0x804cc0 = 0.004 * 0x2;
                        else {
                            if (_0x22bce7 == 0x8) _0x804cc0 = 0.002 * 0x2;
                            else {
                                if (_0x22bce7 == 0x7) _0x804cc0 = 0.001 * 0x2;
                                else {
                                    if (_0x22bce7 == 0x6) _0x804cc0 = 0.0005 * 0x2;
                                    else {
                                        if (_0x22bce7 == 0x5) _0x804cc0 = 0.00025 * 0x2;
                                        else {
                                            if (_0x22bce7 == 0x4) _0x804cc0 = 0.00008 * 0x2;
                                            else {
                                                if (_0x22bce7 == 0x3) _0x804cc0 = 0.000007 * 0x2;
                                                else {
                                                    if (_0x22bce7 <= 0x2) _0x804cc0 = 5e-7 * 0x2;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (_0x606461 == !![]) _0x804cc0 = 0.000001;
    let _0x1d8169 = null,
        _0x487b23 = 0x0,
        _0x1c80c7 = null,
        _0x4c6000 = 0x0,
        _0x276a0d = null,
        _0x3047d2 = null,
        _0xfcaf46 = null,
        _0x1820a0 = null,
        _0x25361f = null,
        _0x387470 = null,
        _0x2c72f3 = 0x0,
        _0x14a8bf = 0x0;
    for (let _0x5582c8 = 0x0; _0x5582c8 < _0x4663ef; _0x5582c8++) {
        _0x1d8169 = _0x205b9f[_0x5582c8], _0x2c72f3 = _h_FastFloor(_0x1d8169[_0x55ed35(0xc3)]()[_0x55ed35(0x387)](), _0x5b51ea), _0x14a8bf = _h_FastFloor(_0x1d8169['getPosition']()[_0x55ed35(0xac)](), _0x5b51ea), _0xfcaf46 = _0x1d8169;
        if (_0x1e0a5b > _0x2c72f3) _0x1e0a5b = _0x2c72f3;
        if (_0x507c2f > _0x14a8bf) _0x507c2f = _0x14a8bf;
        if (_0x1c459a < _0x2c72f3) _0x1c459a = _0x2c72f3;
        if (_0x452266 < _0x14a8bf) _0x452266 = _0x14a8bf;
        let _0x339ea0 = '',
            _0x1d6321 = ![];
        _0x25361f = _h_FastFloor(Math[_0x55ed35(0x17e)](_0x2c72f3 / _0x804cc0) * _0x804cc0 + _0x804cc0 / 0x2, _0x5b51ea) + '-' + _h_FastFloor(Math[_0x55ed35(0x17e)](_0x14a8bf / _0x804cc0) * _0x804cc0 + _0x804cc0 / 0x2, _0x5b51ea);
        if (typeof _0x36f17e[_0x25361f] == 'undefined') _0x36f17e[_0x25361f] = {
            'IDX': _0x5582c8,
            'MARK': ![]
        };
        else {
            if (_0x36f17e[_0x25361f][_0x55ed35(0x209)] == ![]) {
                let _0x8b468 = _0x27ca39[_0x36f17e[_0x25361f][_0x55ed35(0x2a7)]];
                if (typeof _0x8b468[_0x55ed35(0x331)] != _0x55ed35(0x2fd)) _0x8b468 = _0x8b468[_0x55ed35(0x331)];
                _0x487b23 = _0x8b468[_0x55ed35(0x22a)]()[_0x55ed35(0x3da)]()['x'] * 0x2, _0x27ca39[_0x36f17e[_0x25361f][_0x55ed35(0x2a7)]] = new kakao[(_0x55ed35(0x12a))][(_0x55ed35(0xfc))]({
                    'position': _0x27ca39[_0x36f17e[_0x25361f][_0x55ed35(0x2a7)]][_0x55ed35(0xc3)](),
                    'image': _0x27ca39[_0x36f17e[_0x25361f][_0x55ed35(0x2a7)]]['getImage'](),
                    'zIndex': _0x34121c['zIndex'],
                    'opacity': _0x34121c[_0x55ed35(0x2e7)]
                }), _0x27ca39[_0x36f17e[_0x25361f]['IDX']]['setTitle']('\x20'), _0x36f17e[_0x25361f][_0x55ed35(0x209)] = !![], _0x27ca39[_0x36f17e[_0x25361f][_0x55ed35(0x2a7)]]['pRefMarker'] = _0x8b468;
                if (h_isMobile == !![] || h_isTablet == !![]) kakao[_0x55ed35(0x12a)][_0x55ed35(0x303)][_0x55ed35(0x257)](_0x27ca39[_0x36f17e[_0x25361f][_0x55ed35(0x2a7)]], _0x55ed35(0x38a), onMarkerMouseOverListener(_0x34121c, _0x27ca39[_0x36f17e[_0x25361f][_0x55ed35(0x2a7)]], _0x339ea0, _0x487b23));
                else kakao['maps'][_0x55ed35(0x303)][_0x55ed35(0x257)](_0x27ca39[_0x36f17e[_0x25361f][_0x55ed35(0x2a7)]], _0x55ed35(0x267), onMarkerMouseOverListener(_0x34121c, _0x27ca39[_0x36f17e[_0x25361f][_0x55ed35(0x2a7)]], _0x339ea0, _0x487b23)), kakao[_0x55ed35(0x12a)][_0x55ed35(0x303)][_0x55ed35(0x257)](_0x27ca39[_0x36f17e[_0x25361f][_0x55ed35(0x2a7)]], _0x55ed35(0x1c9), onMarkerMouseOutListener(_0x34121c, _0x27ca39[_0x36f17e[_0x25361f][_0x55ed35(0x2a7)]])), _0x34121c[_0x55ed35(0xef)]['indexOf'](_0x55ed35(0x2db)) > 0x0 && kakao[_0x55ed35(0x12a)][_0x55ed35(0x303)][_0x55ed35(0x257)](_0x27ca39[_0x36f17e[_0x25361f][_0x55ed35(0x2a7)]], 'click', onMarkerMouseOverListenerForFire(_0x34121c, _0x27ca39[_0x36f17e[_0x25361f][_0x55ed35(0x2a7)]], _0x339ea0));
            }
            _0x1d6321 = !![];
            if (typeof _0x1d8169['pRefMarker'] != _0x55ed35(0x2fd)) _0x1d8169 = _0x1d8169[_0x55ed35(0x331)];
            _0x487b23 = _0xfcaf46[_0x55ed35(0x22a)]()[_0x55ed35(0x3da)]()['x'] * 0x2, _0xfcaf46 = new kakao[(_0x55ed35(0x12a))][(_0x55ed35(0xfc))]({
                'position': _0xfcaf46[_0x55ed35(0xc3)](),
                'image': _0xfcaf46[_0x55ed35(0x22a)](),
                'zIndex': _0x34121c[_0x55ed35(0x205)],
                'opacity': _0x34121c[_0x55ed35(0x2e7)]
            }), _0xfcaf46[_0x55ed35(0x389)]('\x20'), _0xfcaf46[_0x55ed35(0x331)] = _0x1d8169;
            if (h_isMobile == !![] || h_isTablet == !![]) kakao['maps']['event'][_0x55ed35(0x257)](_0xfcaf46, 'click', onMarkerMouseOverListener(_0x34121c, _0xfcaf46, _0x339ea0, _0x487b23));
            else kakao['maps'][_0x55ed35(0x303)][_0x55ed35(0x257)](_0xfcaf46, _0x55ed35(0x267), onMarkerMouseOverListener(_0x34121c, _0xfcaf46, _0x339ea0, _0x487b23)), kakao['maps'][_0x55ed35(0x303)][_0x55ed35(0x257)](_0xfcaf46, _0x55ed35(0x1c9), onMarkerMouseOutListener(_0x34121c, _0xfcaf46)), _0x34121c[_0x55ed35(0xef)]['indexOf'](_0x55ed35(0x2db)) > 0x0 && kakao['maps']['event']['addListener'](_0xfcaf46, _0x55ed35(0x38a), onMarkerMouseOverListenerForFire(_0x34121c, _0xfcaf46, _0x339ea0));
        }
        _0x1d6321 == ![] ? (_0x27ca39[_0x55ed35(0x29a)](_0xfcaf46), _0x142b7e != null && (_0x1820a0 = _h_getLabelObject(_0x1d8169, _0x2c72f3, _0x14a8bf, _0x34121c), _0x142b7e[_0x55ed35(0x29a)](_0x1820a0))) : (_0x27ca39[_0x55ed35(0x29a)](null), _0x2dd984[_0x55ed35(0x29a)](_0xfcaf46)), _0x25361f = null, _0x1d8169 = null, _0xfcaf46 = null, _0x1820a0 = null;
    }
    for (let _0x27c6a3 = _0x27ca39[_0x55ed35(0x363)] - 0x1; _0x27c6a3 >= 0x0; _0x27c6a3--)
        if (_0x27ca39[_0x27c6a3] != null) _0x459fff[_0x55ed35(0x29a)](_0x27ca39[_0x27c6a3]);
    _0x142b7e != null && _0x142b7e['sort'](function(_0x36f487, _0x28ee30) {
        const _0x4827f8 = _0x55ed35;
        return _0x36f487[_0x4827f8(0x3ef)] - _0x28ee30['forSortY'];
    });
    _0x44de47[0x0] = _0x1e0a5b, _0x44de47[0x1] = _0x507c2f, _0x44de47[0x2] = _0x1c459a, _0x44de47[0x3] = _0x452266, _0x36f17e = null, data = null, _0x34121c = null, _0x27ca39 = null;
    let _0x52eecb = new Date();
}

function HM_createPointFromDataString(_0x51733d, _0x3c6e10, _0x5d22cd, _0x370cbe, _0x17b0ca, _0x2d7617, _0x4871d0, _0x43f6c7, _0xfcdaed, _0x169b7b, _0x443769, _0x13aa56) {
    const _0x439393 = _0x3a1a23;
    _h_setColorMap(h_oMap, h_divMap);
    if (h_oProvinceOverlay == null) h_oProvinceOverlay = new kakao[(_0x439393(0x12a))][(_0x439393(0x2b3))]({});
    _h_setProgress2(h_divMap['id']), oHM = {
        'UID': Date[_0x439393(0x14c)]() + Math[_0x439393(0x365)](),
        'sCallUrl': '',
        'map': h_oMap,
        'fX': 0x0,
        'fY': 0x0,
        'fAlpha': _0x51733d,
        'sUrl': '',
        'nW': 0x0,
        'nH': 0x0,
        'oExtent': null,
        'div_map': h_divMap,
        'nType': 0x5,
        'aPointOrLineOrPolygon': null,
        'aLabel': null,
        'nLabelMinZoom': _0xfcdaed,
        'nLabelMaxZoom': _0x169b7b,
        'sLayerNM': _0x3c6e10,
        'sDataString': _0x5d22cd,
        'zIndex': 0x0,
        'bVisible': _0x43f6c7,
        'heatmapOverlay': null,
        'sPointSymbolType': _0x2d7617,
        'sPointSymbolColor': _0x4871d0,
        'sLegend': _0x17b0ca,
        'SELECT_LABEL': '',
        'SELECT': '',
        'WHERE_LABEL': '',
        'WHERE': '',
        'ETC_LABEL': '',
        'ETC': '',
        'sClassValURL': '',
        'sLABEL_CONTORL': _0x443769,
        'nBuffer': _0x13aa56,
        'aBufferCircle': null,
        'nAuto': ![]
    }, _h_ShowLoadingFileMessageForJson(), HM_createPointFromDataString2(oHM), _0x5d22cd = null, oHM = null;
}

function HM_createPointFromDataString2(_0x1f11f2) {
    let _0x5d79a5 = setInterval(function() {
        h_bLoaded == !![] && h_bTOCLoaded == !![] && (clearInterval(_0x5d79a5), _0x5d79a5 = null, _h_GetPointFromDataString(_0x1f11f2), _h_addLayerToTOC(_0x1f11f2), _0x1f11f2 = null);
    }, 0x12c);
}

function _h_GetPointFromDataString(_0x2a7739) {
    const _0x2f88ce = _0x3a1a23;
    _h_setProgressStart();
    let _0x93464b = _0x2a7739['map'][_0x2f88ce(0x20b)]()['getLng'](),
        _0x343b30 = _0x2a7739['map']['getCenter']()[_0x2f88ce(0xac)](),
        _0xb0b134 = _0x2a7739['div_map']['clientWidth'],
        _0x42256 = _0x2a7739['div_map'][_0x2f88ce(0xba)],
        _0x20a921 = _0x2a7739[_0x2f88ce(0x383)];
    if (_0x2a7739[_0x2f88ce(0x310)] == ![]) _0x20a921 = null;
    let _0x55492a = _0x2a7739[_0x2f88ce(0x1da)],
        _0x35d4e1 = _0x2a7739[_0x2f88ce(0x1f5)],
        _0x6157a2 = _0x2a7739['sDataString'],
        _0x458f9f = _0x2a7739['sLegend'],
        _0x4dc3a6 = new Array(),
        _0x6de715 = new Array(),
        _0x2dd740 = _0x458f9f['split']('|')[0x0]['split']('^'),
        _0x25fc40 = _0x2dd740[_0x2f88ce(0x363)];
    for (let _0x1c7e39 = 0x0; _0x1c7e39 < _0x25fc40; _0x1c7e39++) _0x4dc3a6[_0x2f88ce(0x29a)](Number(_0x2dd740[_0x1c7e39][_0x2f88ce(0x1c4)]('~')[0x0]));
    _0x2dd740 = _0x458f9f[_0x2f88ce(0x1c4)]('|')[0x2]['split']('^');
    for (let _0x81c7d3 = 0x0; _0x81c7d3 < _0x25fc40; _0x81c7d3++) _0x6de715['push'](_0x2dd740[_0x81c7d3]);
    _0x2dd740 = null;
    let _0x334a43 = new kakao[(_0x2f88ce(0x12a))][(_0x2f88ce(0x2f5))]({
            'map': _0x20a921,
            'minLevel': 0x13
        }),
        _0x473892 = ![],
        _0x2e6bec = null,
        _0x9b6fcc = jQuery[_0x2f88ce(0x2ef)](_0x6157a2),
        _0x4bc105 = _0x9b6fcc['point'][_0x2f88ce(0x363)];
    if (_0x2a7739[_0x2f88ce(0x295)] != null) {
        if (_0x2a7739[_0x2f88ce(0x295)] != '') _0x2a7739[_0x2f88ce(0x295)] != 'undefined' && (HM_setJsonLabel(_0x2a7739[_0x2f88ce(0x295)], _0x9b6fcc[_0x2f88ce(0x384)]), _0x473892 = !![]);
    }
    if (_0x9b6fcc[_0x2f88ce(0x384)][0x0]['label'][_0x2f88ce(0x363)] > 0x1) _0x473892 = !![];
    _0x473892 == !![] && (_0x2e6bec = new kakao[(_0x2f88ce(0x12a))][(_0x2f88ce(0x2f5))]({
        'map': null,
        'minLevel': 0x13
    }));
    let _0x50cd98 = [],
        _0x52a6f5 = [],
        _0x5b723c = null,
        _0x491188 = [],
        _0xe2c0d7 = null,
        _0x5622dd = [],
        _0x36f401 = null,
        _0x14406c = [],
        _0x30132a = null,
        _0xeaa233 = [],
        _0x579e65 = null,
        _0xb256b6 = [],
        _0x1d9525 = [],
        _0x1e7113 = null,
        _0x1a561c = [],
        _0x35512a = null,
        _0x1a8ed2 = [],
        _0xe7824b = null,
        _0x1946ae = [],
        _0x3562f9 = null,
        _0x582f50 = [],
        _0x53fd3b = null,
        _0x454196 = [],
        _0x2921ee = [],
        _0x1db2d0 = null,
        _0x1e41fb = [],
        _0xd258dd = null,
        _0x5c0076 = [],
        _0x55d7b4 = null,
        _0x46987d = [],
        _0x317eb9 = null,
        _0x1a9507 = [],
        _0x3818c5 = null,
        _0xc4c532 = [];
    _0x579e65 = _0xb256b6, _0x30132a = _0xeaa233, _0x36f401 = _0x14406c, _0xe2c0d7 = _0x5622dd, _0x5b723c = _0x491188, _0x53fd3b = _0x454196, _0x3562f9 = _0x582f50, _0xe7824b = _0x1946ae, _0x35512a = _0x1a8ed2, _0x1e7113 = _0x1a561c, _0x3818c5 = _0xc4c532, _0x317eb9 = _0x1a9507, _0x55d7b4 = _0x46987d, _0xd258dd = _0x5c0076, _0x1db2d0 = _0x1e41fb;
    let _0x250939 = [],
        _0x18b3e8 = [],
        _0x14d674 = [];
    _0x250939[0x2] = _0xb256b6, _0x250939[0x3] = _0x579e65, _0x250939[0x4] = _0xeaa233, _0x250939[0x5] = _0x30132a, _0x250939[0x6] = _0x14406c, _0x250939[0x7] = _0x36f401, _0x250939[0x8] = _0x5622dd, _0x250939[0x9] = _0xe2c0d7, _0x250939[0xa] = _0x491188, _0x250939[0xb] = _0x5b723c, _0x250939[0xc] = _0x52a6f5, _0x18b3e8[0x2] = _0x454196, _0x18b3e8[0x3] = _0x53fd3b, _0x18b3e8[0x4] = _0x582f50, _0x18b3e8[0x5] = _0x3562f9, _0x18b3e8[0x6] = _0x1946ae, _0x18b3e8[0x7] = _0xe7824b, _0x18b3e8[0x8] = _0x1a8ed2, _0x18b3e8[0x9] = _0x35512a, _0x18b3e8[0xa] = _0x1a561c, _0x18b3e8[0xb] = _0x1e7113, _0x18b3e8[0xc] = _0x1d9525, _0x14d674[0x2] = _0xc4c532, _0x14d674[0x3] = _0x3818c5, _0x14d674[0x4] = _0x1a9507, _0x14d674[0x5] = _0x317eb9, _0x14d674[0x6] = _0x46987d, _0x14d674[0x7] = _0x55d7b4, _0x14d674[0x8] = _0x5c0076, _0x14d674[0x9] = _0xd258dd, _0x14d674[0xa] = _0x1e41fb, _0x14d674[0xb] = _0x1db2d0, _0x14d674[0xc] = _0x2921ee;
    _0x473892 == ![] && (_0x2921ee = null, _0x1db2d0 = null, _0x1e41fb = null, _0xd258dd = null, _0x5c0076 = null, _0x55d7b4 = null, _0x46987d = null, _0x317eb9 = null, _0x1a9507 = null, _0x3818c5 = null, _0xc4c532 = null, _0x14d674 = null);
    let _0x3ce686 = ![];
    _h_ShowLoadingFileMessageForJson();
    if (_0x9b6fcc['point'][0x0][_0x2f88ce(0x3e6)][_0x2f88ce(0x363)] > 0x1) {
        let _0x51f2a6 = Swal[_0x2f88ce(0xf0)]();
        if (_0x51f2a6 != null) _0x51f2a6['querySelector'](_0x2f88ce(0x290))['textContent'] = _0x2f88ce(0x37a);
        setTimeout(function() {
            const _0x26e7e0 = _0x2f88ce;
            _h_GetZoomPointArray(_0x2a7739, _0x9b6fcc, 0x2, _0xb256b6, _0x454196, _0xc4c532, _0x50cd98, ![]);
            if (_0x51f2a6 != null) _0x51f2a6[_0x26e7e0(0x32f)]('strong')[_0x26e7e0(0x3c6)] = _0x26e7e0(0x3b4);
            setTimeout(function() {
                const _0x1733b8 = _0x26e7e0;
                _h_GetZoomPointArray(_0x2a7739, _0x9b6fcc, 0x4, _0xeaa233, _0x582f50, _0x1a9507, _0x50cd98, ![]);
                if (_0x51f2a6 != null) _0x51f2a6[_0x1733b8(0x32f)](_0x1733b8(0x290))[_0x1733b8(0x3c6)] = _0x1733b8(0x1b2);
                setTimeout(function() {
                    const _0x4e39e2 = _0x1733b8;
                    _h_GetZoomPointArray(_0x2a7739, _0x9b6fcc, 0x6, _0x14406c, _0x1946ae, _0x46987d, _0x50cd98, ![]);
                    if (_0x51f2a6 != null) _0x51f2a6[_0x4e39e2(0x32f)]('strong')['textContent'] = _0x4e39e2(0x39f);
                    setTimeout(function() {
                        const _0x44a3de = _0x4e39e2;
                        _h_GetZoomPointArray(_0x2a7739, _0x9b6fcc, 0x8, _0x5622dd, _0x1a8ed2, _0x5c0076, _0x50cd98, ![]);
                        if (_0x51f2a6 != null) _0x51f2a6['querySelector'](_0x44a3de(0x290))['textContent'] = _0x44a3de(0x371);
                        setTimeout(function() {
                            const _0x118aa4 = _0x44a3de;
                            _h_GetZoomPointArray(_0x2a7739, _0x9b6fcc, 0xa, _0x491188, _0x1a561c, _0x1e41fb, _0x50cd98, ![]);
                            if (_0x51f2a6 != null) _0x51f2a6['querySelector'](_0x118aa4(0x290))['textContent'] = _0x118aa4(0x130);
                            setTimeout(function() {
                                const _0x1a367d = _0x118aa4;
                                _h_GetZoomPointArray(_0x2a7739, _0x9b6fcc, 0xc, _0x52a6f5, _0x1d9525, _0x2921ee, _0x50cd98, ![]), _0x3ce686 = !![];
                                if (_0x51f2a6 != null) _0x51f2a6[_0x1a367d(0x32f)](_0x1a367d(0x290))['textContent'] = '지도에\x20추가\x20중...';
                            }, 0x1);
                        }, 0x1);
                    }, 0x1);
                }, 0x1);
            }, 0x1);
        }, 0x1);
    } else {
        let _0x41e41f = Swal['getContent']();
        if (_0x41e41f != null) _0x41e41f[_0x2f88ce(0x32f)]('strong')[_0x2f88ce(0x3c6)] = '빠른\x20속도\x20처리를\x20위해\x20데이터\x20가공\x20중...(1/6)\x20';
        setTimeout(function() {
            const _0x2b4177 = _0x2f88ce;
            _h_GetZoomPointArray(_0x2a7739, _0x9b6fcc, 0x2, _0xb256b6, _0x454196, _0xc4c532, _0x50cd98, ![]);
            if (_0x41e41f != null) _0x41e41f[_0x2b4177(0x32f)](_0x2b4177(0x290))[_0x2b4177(0x3c6)] = _0x2b4177(0x3b4);
            setTimeout(function() {
                const _0x1a5876 = _0x2b4177;
                _h_GetZoomPointArray(_0x2a7739, _0x9b6fcc, 0x4, _0xeaa233, _0x582f50, _0x1a9507, _0x50cd98, ![]);
                if (_0x41e41f != null) _0x41e41f['querySelector'](_0x1a5876(0x290))['textContent'] = _0x1a5876(0x1b2);
                setTimeout(function() {
                    const _0x222b4f = _0x1a5876;
                    _h_GetZoomPointArray(_0x2a7739, _0x9b6fcc, 0x6, _0x14406c, _0x1946ae, _0x46987d, _0x50cd98, ![]);
                    if (_0x41e41f != null) _0x41e41f[_0x222b4f(0x32f)]('strong')[_0x222b4f(0x3c6)] = '빠른\x20속도\x20처리를\x20위해\x20데이터\x20가공\x20중...(4/6)\x20';
                    setTimeout(function() {
                        const _0x481e34 = _0x222b4f;
                        _h_GetZoomPointArray(_0x2a7739, _0x9b6fcc, 0x8, _0x5622dd, _0x1a8ed2, _0x5c0076, _0x50cd98, ![]);
                        if (_0x41e41f != null) _0x41e41f['querySelector'](_0x481e34(0x290))['textContent'] = '빠른\x20속도\x20처리를\x20위해\x20데이터\x20가공\x20중...(5/6)\x20';
                        setTimeout(function() {
                            const _0x176208 = _0x481e34;
                            _h_GetZoomPointArray(_0x2a7739, _0x9b6fcc, 0xa, _0x491188, _0x1a561c, _0x1e41fb, _0x50cd98, ![]);
                            if (_0x41e41f != null) _0x41e41f[_0x176208(0x32f)]('strong')[_0x176208(0x3c6)] = _0x176208(0x130);
                            setTimeout(function() {
                                const _0x6912e0 = _0x176208;
                                _h_GetZoomPointArray(_0x2a7739, _0x9b6fcc, 0xc, _0x52a6f5, _0x1d9525, _0x2921ee, _0x50cd98, ![]), _0x3ce686 = !![];
                                if (_0x41e41f != null) _0x41e41f[_0x6912e0(0x32f)](_0x6912e0(0x290))[_0x6912e0(0x3c6)] = _0x6912e0(0x175);
                            }, 0x1);
                        }, 0x1);
                    }, 0x1);
                }, 0x1);
            }, 0x1);
        }, 0x1);
    }
    var _0x41f688 = setInterval(function() {
        const _0x2d054e = _0x2f88ce;
        if (_0x3ce686 == !![]) {
            clearInterval(_0x41f688), _0x41f688 = null;
            let _0x455d91 = h_oMap['getLevel']();
            if (_0x455d91 < 0x2) _0x455d91 = 0x2;
            if (_0x455d91 > 0xc) _0x455d91 = 0xc;
            _0x334a43[_0x2d054e(0x21a)](_0x250939[_0x455d91]), _0x2a7739[_0x2d054e(0x1ad)] = _0x334a43;
            if (_0x473892 == !![]) _0x2a7739[_0x2d054e(0x393)] = _0x2e6bec;
            else _0x2a7739[_0x2d054e(0x393)] = null;
            _0x2a7739[_0x2d054e(0xbe)] = _0x250939, _0x2a7739['aOverlay_ZOOM'] = _0x18b3e8, _0x2a7739[_0x2d054e(0x2ae)] = _0x14d674, _0x2a7739['_TMP_aJsonArray'] = _0x9b6fcc;
            if (_0x473892 == !![] && _0x2a7739[_0x2d054e(0x310)] == !![]) {
                h_nNoFireBoundChangedForSpeed++;
                if (h_nNoFireBoundChangedForSpeed > 0x3e8) h_nNoFireBoundChangedForSpeed = 0x0;
                _h_setVisiableLabelMapExtent(_0x2a7739[_0x2d054e(0x393)], _0x14d674[_0x455d91], 0x3e8, _0x2a7739[_0x2d054e(0x205)], h_nNoFireBoundChangedForSpeed);
            }
            if (_0x2a7739[_0x2d054e(0x19e)] > 0x0) _h_CreateBufferOnPoint(_0x2a7739, _0x2a7739[_0x2d054e(0x19e)]);
            _0x250939 = null, _0x18b3e8 = null, _0x14d674 = null;
            let _0x39a6fd = new kakao[(_0x2d054e(0x12a))][(_0x2d054e(0x10d))](new kakao[(_0x2d054e(0x12a))]['LatLng'](_0x50cd98[0x1], _0x50cd98[0x0]), new kakao['maps'][(_0x2d054e(0x32b))](_0x50cd98[0x3], _0x50cd98[0x2]));
            _0x2a7739[_0x2d054e(0x23c)] = _0x39a6fd, _0x39a6fd = null, _0x18b3e8 = null, _0x334a43 = null, _0x2e6bec = null, _h_setProgressStop(), setTimeout(function() {
                const _0x19c850 = _0x2d054e;
                $(_0x19c850(0x292))['sortable'](_0x19c850(0x1a0)); {
                    _h_OnSortChangeTOC($('#TOC_LIST'));
                }
            }, 0x3e8), swal[_0x2d054e(0x376)](), _h_onFinishAddPointFromDataString(_0x4bc105);
        }
    }, 0x64);
}

function HM_createAutoPoint(_0x29f298, _0x1e2c08, _0x223193, _0x19c616, _0x3a7ea0, _0x3304c9, _0x3b2086, _0x35dcc7, _0x52adde, _0x1ffb0a, _0x430f7b, _0x394ba5, _0x462d18, _0x21e0f3, _0x4c7539, _0x49a592, _0x3aa598, _0x18a010) {
    const _0x401578 = _0x3a1a23;
    if (_0x1e2c08[_0x401578(0x37d)]('&BOTTOM_X=') < 0x0 && _0x1e2c08[_0x401578(0x37d)](_0x401578(0x3df)) < 0x0 && _0x1e2c08[_0x401578(0x37d)](_0x401578(0x2be)) < 0x0) _0x1e2c08 = _0x1e2c08 + '&BOTTOM_X=#BOTTOM_X#';
    if (_0x1e2c08['indexOf'](_0x401578(0x3c7)) < 0x0 && _0x1e2c08[_0x401578(0x37d)](_0x401578(0x1fa)) < 0x0 && _0x1e2c08[_0x401578(0x37d)](_0x401578(0x242)) < 0x0) _0x1e2c08 = _0x1e2c08 + '&BOTTOM_Y=#BOTTOM_Y#';
    if (_0x1e2c08[_0x401578(0x37d)](_0x401578(0x218)) < 0x0 && _0x1e2c08[_0x401578(0x37d)]('?TOP_X=') < 0x0 && _0x1e2c08[_0x401578(0x37d)]('/TOP_X=') < 0x0) _0x1e2c08 = _0x1e2c08 + _0x401578(0x13d);
    if (_0x1e2c08[_0x401578(0x37d)](_0x401578(0x356)) < 0x0 && _0x1e2c08['indexOf'](_0x401578(0x3be)) < 0x0 && _0x1e2c08[_0x401578(0x37d)](_0x401578(0xe0)) < 0x0) _0x1e2c08 = _0x1e2c08 + _0x401578(0x32e);
    if (_0x1e2c08[_0x401578(0x37d)](_0x401578(0x1ac)) < 0x0 && _0x1e2c08[_0x401578(0x37d)](_0x401578(0x179)) < 0x0 && _0x1e2c08[_0x401578(0x37d)]('/W=') < 0x0) _0x1e2c08 = _0x1e2c08 + _0x401578(0x316);
    if (_0x1e2c08[_0x401578(0x37d)](_0x401578(0xe3)) < 0x0 && _0x1e2c08['indexOf'](_0x401578(0x244)) < 0x0 && _0x1e2c08[_0x401578(0x37d)](_0x401578(0x150)) < 0x0) _0x1e2c08 = _0x1e2c08 + '&H=#H#';
    _0x1e2c08 = _h_replacePercentFromUrl(_0x1e2c08), _h_setColorMap(h_oMap, h_divMap);
    if (h_oProvinceOverlay == null) h_oProvinceOverlay = new kakao[(_0x401578(0x12a))][(_0x401578(0x2b3))]({});
    _h_setProgress2(h_divMap['id']), oHM = {
        'UID': Date[_0x401578(0x14c)]() + Math[_0x401578(0x365)](),
        'sCallUrl': _0x1e2c08,
        'map': h_oMap,
        'fX': 0x0,
        'fY': 0x0,
        'fAlpha': _0x29f298,
        'sUrl': '',
        'nW': 0x0,
        'nH': 0x0,
        'oExtent': null,
        'div_map': h_divMap,
        'nType': 0x5,
        'aPointOrLineOrPolygon': null,
        'aLabel': null,
        'nLabelMinZoom': _0x3b2086,
        'nLabelMaxZoom': _0x35dcc7,
        'sLayerNM': _0x223193,
        'sDataString': '',
        'zIndex': 0x0,
        'bVisible': _0x3304c9,
        'heatmapOverlay': null,
        'sPointSymbolType': _0x19c616,
        'sPointSymbolColor': _0x3a7ea0,
        'sLegend': _0x52adde,
        'SELECT_LABEL': _0x1ffb0a,
        'SELECT': _0x430f7b,
        'WHERE_LABEL': _0x394ba5,
        'WHERE': _0x462d18,
        'ETC_LABEL': _0x21e0f3,
        'ETC': _0x4c7539,
        'sClassValURL': _0x49a592,
        'sLABEL_CONTORL': _0x3aa598,
        'nBuffer': _0x18a010,
        'aBufferCircle': null,
        'nAuto': !![]
    }, _h_GetPointFromUrl(oHM), _h_addLayerToTOC(oHM), oHM = null;
}

function HM_createPoint(_0x4f7196, _0x3d97db, _0x50ba4b, _0x44397b, _0x5b5685, _0x54374f, _0x5cfde1, _0x43b9d8, _0x81f3fd, _0x2796b3, _0x251ddd, _0x429850, _0x22ea5d, _0x45b57f, _0x116044, _0x54cdda, _0x4bef90, _0x2d3f63) {
    const _0x20dd87 = _0x3a1a23;
    _0x3d97db = _h_replacePercentFromUrl(_0x3d97db), _h_setColorMap(h_oMap, h_divMap);
    if (h_oProvinceOverlay == null) h_oProvinceOverlay = new kakao[(_0x20dd87(0x12a))]['CustomOverlay']({});
    _h_setProgress2(h_divMap['id']), oHM = {
        'UID': Date[_0x20dd87(0x14c)]() + Math[_0x20dd87(0x365)](),
        'sCallUrl': _0x3d97db,
        'map': h_oMap,
        'fX': 0x0,
        'fY': 0x0,
        'fAlpha': _0x4f7196,
        'sUrl': '',
        'nW': 0x0,
        'nH': 0x0,
        'oExtent': null,
        'div_map': h_divMap,
        'nType': 0x5,
        'aPointOrLineOrPolygon': null,
        'aLabel': null,
        'nLabelMinZoom': _0x5cfde1,
        'nLabelMaxZoom': _0x43b9d8,
        'sLayerNM': _0x50ba4b,
        'sDataString': '',
        'zIndex': 0x0,
        'bVisible': _0x54374f,
        'heatmapOverlay': null,
        'sPointSymbolType': _0x44397b,
        'sPointSymbolColor': _0x5b5685,
        'sLegend': _0x81f3fd,
        'SELECT_LABEL': _0x2796b3,
        'SELECT': _0x251ddd,
        'WHERE_LABEL': _0x429850,
        'WHERE': _0x22ea5d,
        'ETC_LABEL': _0x45b57f,
        'ETC': _0x116044,
        'sClassValURL': _0x54cdda,
        'sLABEL_CONTORL': _0x4bef90,
        'nBuffer': _0x2d3f63,
        'aBufferCircle': null,
        'nAuto': ![]
    }, _h_GetPointFromUrl(oHM), _h_addLayerToTOC(oHM), oHM = null;
}

function HM_setJsonLabel(_0x109650, _0xeeee9e) {
    const _0x48450e = _0x3a1a23;
    if (_0x109650[_0x48450e(0x37d)]('[') >= 0x0) {
        if (_0x109650['indexOf'](']') >= 0x0) {
            HM_setJsonMultiLabel(_0x109650, _0xeeee9e), _0x109650 = null, _0xeeee9e = null;
            return;
        }
    }
    if (_0x109650 == null) return;
    let _0x355562 = _0x109650[_0x48450e(0x1c4)](_0x48450e(0x345))[0x0],
        _0x3bda50 = _0x109650[_0x48450e(0x1c4)](_0x48450e(0x345))[0x1],
        _0x47f8bd = ![],
        _0xdc90be = _0xeeee9e['length'];
    for (let _0x1c3c84 = 0x0; _0x1c3c84 < _0xdc90be; _0x1c3c84++) {
        let _0xa45382 = _0xeeee9e[_0x1c3c84]['content'][_0x48450e(0x1c4)](_0x48450e(0x16b));
        for (let _0x16b711 = 0x0; _0x16b711 < _0xa45382['length']; _0x16b711++) {
            _0xa45382[_0x16b711][_0x48450e(0x37d)](_0x3bda50 + ':') == 0x0 && (_0x47f8bd = !![], _0xeeee9e[_0x1c3c84][_0x48450e(0x3e6)] = _0x355562 + _0x48450e(0x26f) + _0xa45382[_0x16b711][_0x48450e(0x1c4)](':')[0x1]);
        }
        if (_0x47f8bd == ![]) return;
        _0xa45382 = null;
    }
    _0x109650 = null, _0x3bda50 = null, _0x355562 = null, _0xeeee9e = null;
}

function HM_setJsonMultiLabel(_0x50e017, _0x52b6be) {
    const _0x420116 = _0x3a1a23;
    if (_0x50e017 == null) return;
    let _0x556287 = _0x50e017['split'](_0x420116(0x345))[0x0],
        _0xaf50b1 = _0x50e017[_0x420116(0x1c4)](_0x420116(0x345))[0x1],
        _0xd19c06 = new Array(),
        _0xc5fdc8 = 0x0,
        _0x3b7d04 = 0x0,
        _0x436fdb = 0x0;
    for (let _0x71108b = 0x0; !![]; _0x71108b++) {
        _0x3b7d04 = _0xaf50b1[_0x420116(0x37d)]('[', _0xc5fdc8);
        if (_0x3b7d04 == -0x1) break;
        _0x436fdb = _0xaf50b1[_0x420116(0x37d)](']', _0x3b7d04);
        if (_0x436fdb == -0x1) break;
        _0xd19c06[_0x420116(0x29a)](_0xaf50b1['substring'](_0x3b7d04 + 0x1, _0x436fdb)), _0xc5fdc8 = _0x436fdb;
    }
    let _0x138da3 = ![],
        _0x5f14a7 = _0x52b6be[_0x420116(0x363)];
    for (let _0x2f8cca = 0x0; _0x2f8cca < _0x5f14a7; _0x2f8cca++) {
        let _0x3e16a3 = _0x52b6be[_0x2f8cca]['content']['split'](_0x420116(0x16b)),
            _0x1af29b = _0xaf50b1;
        for (let _0x1b379d = 0x0; _0x1b379d < _0x3e16a3[_0x420116(0x363)]; _0x1b379d++) {
            for (let _0x510c91 = 0x0; _0x510c91 < _0xd19c06[_0x420116(0x363)]; _0x510c91++) {
                if (_0x3e16a3[_0x1b379d][_0x420116(0x37d)](_0xd19c06[_0x510c91] + ':') == 0x0) {
                    _0x138da3 = !![], _0x1af29b = _0x1af29b[_0x420116(0xd2)]('[' + _0xd19c06[_0x510c91] + ']', _0x3e16a3[_0x1b379d][_0x420116(0x1c4)](':')[0x1]);
                    break;
                }
            }
        }
        if (_0x138da3 == !![]) _0x52b6be[_0x2f8cca][_0x420116(0x3e6)] = _0x556287 + _0x420116(0x26f) + _0x1af29b;
        if (_0x138da3 == ![]) return;
        _0x1af29b = null, _0x3e16a3 = null;
    }
    _0xd19c06 = null, _0x50e017 = null, _0xaf50b1 = null, _0x556287 = null, _0x52b6be = null;
}

function _h_GetPointFromUrl(_0x16a408, _0x32343f) {
    const _0x272ab0 = _0x3a1a23;
    if (_0x32343f === undefined) _0x32343f = ![];
    if (_0x32343f == !![] && _0x16a408[_0x272ab0(0x298)] == ![]) _0x16a408[_0x272ab0(0x34a)] = !![];
    _h_setProgressStart();
    let _0x1dc775 = _0x16a408[_0x272ab0(0x383)][_0x272ab0(0x20b)]()[_0x272ab0(0x387)](),
        _0x92409b = _0x16a408[_0x272ab0(0x383)][_0x272ab0(0x20b)]()['getLat'](),
        _0x2ec6cc = _0x16a408[_0x272ab0(0x1e6)][_0x272ab0(0x2d5)],
        _0x262252 = _0x16a408[_0x272ab0(0x1e6)][_0x272ab0(0xba)],
        _0x861df = _0x16a408[_0x272ab0(0x383)]['getBounds'](),
        _0x5d378e = _0x16a408[_0x272ab0(0x383)];
    if (_0x16a408['bVisible'] == ![]) _0x5d378e = null;
    let _0x34e666 = _0x16a408[_0x272ab0(0x131)];
    _0x34e666 = _0x34e666['replace']('#BOTTOM_X#', _0x861df[_0x272ab0(0x31e)]()[_0x272ab0(0x387)]()), _0x34e666 = _0x34e666[_0x272ab0(0xd2)](_0x272ab0(0x2b2), _0x861df[_0x272ab0(0x31e)]()[_0x272ab0(0xac)]()), _0x34e666 = _0x34e666[_0x272ab0(0xd2)](_0x272ab0(0x105), _0x861df['getNorthEast']()[_0x272ab0(0x387)]()), _0x34e666 = _0x34e666['replace']('#TOP_Y#', _0x861df['getNorthEast']()[_0x272ab0(0xac)]()), _0x34e666 = _0x34e666[_0x272ab0(0xd2)]('#W#', _0x2ec6cc), _0x34e666 = _0x34e666[_0x272ab0(0xd2)]('#H#', _0x262252), _0x861df = null;
    let _0x7e1e5c = _0x34e666;
    _0x34e666 = _h_GetBase64Url(_0x34e666);
    let _0x542a05 = new XMLHttpRequest();
    _0x542a05[_0x272ab0(0x3e0)](_0x272ab0(0x1ce), _0x39f5f3), _0x542a05[_0x272ab0(0x3e2)]('GET', _0x34e666), _0x542a05[_0x272ab0(0x332)] = function() {
        const _0x13a0ef = _0x272ab0;
        alert(_0x13a0ef(0x279));
    }, _0x542a05[_0x272ab0(0x284)]();

    function _0x39f5f3() {
        const _0x54066e = _0x272ab0;
        _0x542a05 = null;
        let _0x2b9619 = this['responseText'];
        if (_0x2b9619[_0x54066e(0x363)] < 0xa || _0x2b9619[_0x54066e(0x12e)](0x0, 0x6) == _0x54066e(0x12b)) {
            if (_0x2b9619[_0x54066e(0x37d)](h_csNODATA) > 0x0) _h_showErrorAlertForBizFile(_0x54066e(0x1c0) + _0x2b9619, _0x7e1e5c), _h_setProgressStop(), _0x2b9619 = _0x54066e(0x21f), _0x16a408['nType'] == 0x5 && (_0x16a408[_0x54066e(0x1ad)] != null && HM_removeHeatMapNoReleaseMemory(_0x16a408));
            else {
                if (_0x2b9619[_0x54066e(0x37d)](h_csNODATA) < 0x0) {
                    _h_showErrorAlertForBizFile(_0x54066e(0xf1) + _0x2b9619, _0x7e1e5c), HM_removeHeatMap(_0x16a408), _h_removeLayerFromTOCByOHM(oHM), _h_setProgressStop();
                    return;
                }
            }
        } else {
            if (_0x2b9619[_0x54066e(0x12e)](0x0, 0x4) == 'SQL:') {
                _0x2b9619 = _0x2b9619['substring'](0x4), _h_copyToClipboard(_0x2b9619), HM_removeHeatMap(_0x16a408), _h_removeLayerFromTOCByOHM(oHM), _h_setProgressStop();
                return;
            }
        }
        _0x7e1e5c = null;
        let _0xc4d64a = _0x2b9619['split']('#|#');
        _0x2b9619 = null;
        let _0x598c5b = _0xc4d64a[0x0],
            _0x508b02 = _0xc4d64a[0x1];
        _0x16a408[_0x54066e(0xb1)] = _0x598c5b;
        let _0xc6e9c6 = new Array(),
            _0x4797d2 = new Array(),
            _0x3bb155 = _0x508b02[_0x54066e(0x1c4)]('||')[0x0][_0x54066e(0x1c4)]('^'),
            _0x40f472 = _0x3bb155[_0x54066e(0x363)];
        for (let _0x1541ab = 0x0; _0x1541ab < _0x40f472; _0x1541ab++) _0xc6e9c6[_0x54066e(0x29a)](Number(_0x3bb155[_0x1541ab][_0x54066e(0x1c4)]('~')[0x0]));
        _0x3bb155 = _0x508b02[_0x54066e(0x1c4)]('||')[0x1][_0x54066e(0x1c4)]('^');
        for (let _0xa818fb = 0x0; _0xa818fb < _0x40f472; _0xa818fb++) _0x4797d2['push'](_0x3bb155[_0xa818fb]);
        let _0x3bf438 = new kakao[(_0x54066e(0x12a))][(_0x54066e(0x2f5))]({
                'map': _0x5d378e,
                'minLevel': 0x13
            }),
            _0x369f79 = ![],
            _0x27e2a2 = null;
        $[_0x54066e(0xe1)](_0x598c5b, function(_0x5dcf85) {
            const _0x4191f6 = _0x54066e;
            if (_0x16a408['sLABEL_CONTORL'] != '') HM_setJsonLabel(_0x16a408[_0x4191f6(0x295)], _0x5dcf85[_0x4191f6(0x384)]);
            if (_0x16a408[_0x4191f6(0x298)] == !![] || _0x16a408[_0x4191f6(0x34a)] == !![]) {
                if (_0x16a408['aPointOrLineOrPolygon'] != null) {
                    _h_reloadLayerLegend(_0x16a408), HM_removeHeatMapNoReleaseMemory(_0x16a408);
                    if (typeof _0x16a408['aPointOrLineOrPolygon_Markers_ZOOM'] != _0x4191f6(0x2fd)) _0x16a408[_0x4191f6(0xbe)] = null;
                    if (typeof _0x16a408[_0x4191f6(0x1a5)] != 'undefined') _0x16a408['aOverlay_ZOOM'] = null;
                }
                if (_0x16a408[_0x4191f6(0x393)] != null) {
                    _0x16a408[_0x4191f6(0x393)]['clear'](), _0x16a408['aLabel'][_0x4191f6(0x328)](null), _0x16a408[_0x4191f6(0x393)][_0x4191f6(0x113)]();
                    if (typeof _0x16a408[_0x4191f6(0x2ae)] != _0x4191f6(0x2fd)) _0x16a408['aPointOrLineOrPolygon_Labels_ZOOM'] = null;
                }
            }
            let _0x3ab835 = _0x5dcf85[_0x4191f6(0x384)][_0x4191f6(0x363)];
            if (_0x3ab835 > 0x0) {
                if (_0x5dcf85['point'][0x0]['label'][_0x4191f6(0x363)] > 0x1) _0x369f79 = !![];
                _0x369f79 == !![] && (_0x27e2a2 = new kakao[(_0x4191f6(0x12a))][(_0x4191f6(0x2f5))]({
                    'map': null,
                    'minLevel': 0x13
                }));
            }
            let _0x38bad5 = [],
                _0x1ee706 = [],
                _0xf698b4 = null,
                _0x4019f9 = [],
                _0x443349 = null,
                _0x77ac3f = [],
                _0x28b927 = null,
                _0x3fa195 = [],
                _0x1ec57b = null,
                _0x33a715 = [],
                _0x24f631 = null,
                _0x1b3176 = [],
                _0x2d4975 = [],
                _0x596903 = null,
                _0x52e55 = [],
                _0x1e54e5 = null,
                _0x39a380 = [],
                _0x1e0284 = null,
                _0x5e3a6b = [],
                _0x47f084 = null,
                _0x5519d3 = [],
                _0xc09e5e = null,
                _0x3555be = [],
                _0x51a922 = [],
                _0x15d056 = null,
                _0x3184ad = [],
                _0xf42306 = null,
                _0x4327ec = [],
                _0x330476 = null,
                _0x40f1dd = [],
                _0x263dc0 = null,
                _0x50b2fc = [],
                _0x1c5175 = null,
                _0xb7d59 = [];
            _0x24f631 = _0x1b3176, _0x1ec57b = _0x33a715, _0x28b927 = _0x3fa195, _0x443349 = _0x77ac3f, _0xf698b4 = _0x4019f9, _0xc09e5e = _0x3555be, _0x47f084 = _0x5519d3, _0x1e0284 = _0x5e3a6b, _0x1e54e5 = _0x39a380, _0x596903 = _0x52e55, _0x1c5175 = _0xb7d59, _0x263dc0 = _0x50b2fc, _0x330476 = _0x40f1dd, _0xf42306 = _0x4327ec, _0x15d056 = _0x3184ad;
            let _0x4d3e06 = [],
                _0x110050 = [],
                _0x14c14e = [];
            _0x4d3e06[0x2] = _0x1b3176, _0x4d3e06[0x3] = _0x24f631, _0x4d3e06[0x4] = _0x33a715, _0x4d3e06[0x5] = _0x1ec57b, _0x4d3e06[0x6] = _0x3fa195, _0x4d3e06[0x7] = _0x28b927, _0x4d3e06[0x8] = _0x77ac3f, _0x4d3e06[0x9] = _0x443349, _0x4d3e06[0xa] = _0x4019f9, _0x4d3e06[0xb] = _0xf698b4, _0x4d3e06[0xc] = _0x1ee706, _0x110050[0x2] = _0x3555be, _0x110050[0x3] = _0xc09e5e, _0x110050[0x4] = _0x5519d3, _0x110050[0x5] = _0x47f084, _0x110050[0x6] = _0x5e3a6b, _0x110050[0x7] = _0x1e0284, _0x110050[0x8] = _0x39a380, _0x110050[0x9] = _0x1e54e5, _0x110050[0xa] = _0x52e55, _0x110050[0xb] = _0x596903, _0x110050[0xc] = _0x2d4975, _0x14c14e[0x2] = _0xb7d59, _0x14c14e[0x3] = _0x1c5175, _0x14c14e[0x4] = _0x50b2fc, _0x14c14e[0x5] = _0x263dc0, _0x14c14e[0x6] = _0x40f1dd, _0x14c14e[0x7] = _0x330476, _0x14c14e[0x8] = _0x4327ec, _0x14c14e[0x9] = _0xf42306, _0x14c14e[0xa] = _0x3184ad, _0x14c14e[0xb] = _0x15d056, _0x14c14e[0xc] = _0x51a922;
            _0x369f79 == ![] && (_0x51a922 = null, _0x15d056 = null, _0x3184ad = null, _0xf42306 = null, _0x4327ec = null, _0x330476 = null, _0x40f1dd = null, _0x263dc0 = null, _0x50b2fc = null, _0x1c5175 = null, _0xb7d59 = null, _0x14c14e = null);
            let _0x102aef = ![];
            if (_0x16a408['nAuto'] == ![]) {
                _h_ShowLoadingFileMessageForJson();
                let _0x6dfa53 = Swal[_0x4191f6(0xf0)]();
                if (_0x6dfa53 != null) _0x6dfa53[_0x4191f6(0x32f)]('strong')[_0x4191f6(0x3c6)] = _0x4191f6(0x37a);
                setTimeout(function() {
                    const _0x13c3f7 = _0x4191f6;
                    _h_GetZoomPointArray(_0x16a408, _0x5dcf85, 0x2, _0x1b3176, _0x3555be, _0xb7d59, _0x38bad5, ![]);
                    if (_0x6dfa53 != null) _0x6dfa53[_0x13c3f7(0x32f)](_0x13c3f7(0x290))[_0x13c3f7(0x3c6)] = '빠른\x20속도\x20처리를\x20위해\x20데이터\x20가공\x20중...(2/6)\x20';
                    setTimeout(function() {
                        const _0x392366 = _0x13c3f7;
                        _h_GetZoomPointArray(_0x16a408, _0x5dcf85, 0x4, _0x33a715, _0x5519d3, _0x50b2fc, _0x38bad5, ![]);
                        if (_0x6dfa53 != null) _0x6dfa53[_0x392366(0x32f)]('strong')[_0x392366(0x3c6)] = '빠른\x20속도\x20처리를\x20위해\x20데이터\x20가공\x20중...(3/6)\x20';
                        setTimeout(function() {
                            const _0x46f912 = _0x392366;
                            _h_GetZoomPointArray(_0x16a408, _0x5dcf85, 0x6, _0x3fa195, _0x5e3a6b, _0x40f1dd, _0x38bad5, ![]);
                            if (_0x6dfa53 != null) _0x6dfa53[_0x46f912(0x32f)](_0x46f912(0x290))[_0x46f912(0x3c6)] = _0x46f912(0x39f);
                            setTimeout(function() {
                                const _0x515d9c = _0x46f912;
                                _h_GetZoomPointArray(_0x16a408, _0x5dcf85, 0x8, _0x77ac3f, _0x39a380, _0x4327ec, _0x38bad5, ![]);
                                if (_0x6dfa53 != null) _0x6dfa53['querySelector'](_0x515d9c(0x290))[_0x515d9c(0x3c6)] = _0x515d9c(0x371);
                                setTimeout(function() {
                                    const _0x2b278a = _0x515d9c;
                                    _h_GetZoomPointArray(_0x16a408, _0x5dcf85, 0xa, _0x4019f9, _0x52e55, _0x3184ad, _0x38bad5, ![]);
                                    if (_0x6dfa53 != null) _0x6dfa53['querySelector'](_0x2b278a(0x290))['textContent'] = _0x2b278a(0x130);
                                    setTimeout(function() {
                                        const _0x2e8a7f = _0x2b278a;
                                        _h_GetZoomPointArray(_0x16a408, _0x5dcf85, 0xc, _0x1ee706, _0x2d4975, _0x51a922, _0x38bad5, ![]), _0x102aef = !![];
                                        if (_0x6dfa53 != null) _0x6dfa53[_0x2e8a7f(0x32f)](_0x2e8a7f(0x290))[_0x2e8a7f(0x3c6)] = _0x2e8a7f(0x175);
                                    }, 0x1);
                                }, 0x1);
                            }, 0x1);
                        }, 0x1);
                    }, 0x1);
                }, 0x1);
            } else {
                _h_GetZoomPointArray(_0x16a408, _0x5dcf85, 0x2, _0x1b3176, _0x3555be, _0xb7d59, _0x38bad5, !![]);
                for (let _0x510e9f = 0x2; _0x510e9f <= 0xc; _0x510e9f++) {
                    _0x4d3e06[_0x510e9f] = _0x1b3176, _0x110050[_0x510e9f] = _0x3555be;
                    if (_0x369f79 == !![]) _0x14c14e[_0x510e9f] = _0xb7d59;
                }
                _0x102aef = !![];
            }
            var _0x4d14c1 = setInterval(function() {
                const _0x49a56a = _0x4191f6;
                if (_0x102aef == !![]) {
                    clearInterval(_0x4d14c1), _0x4d14c1 = null;
                    let _0x291374 = h_oMap[_0x49a56a(0x330)]();
                    if (_0x291374 < 0x2) _0x291374 = 0x2;
                    if (_0x291374 > 0xc) _0x291374 = 0xc;
                    _0x3bf438[_0x49a56a(0x21a)](_0x4d3e06[_0x291374]), _0x16a408[_0x49a56a(0x1ad)] = _0x3bf438;
                    if (_0x369f79 == !![]) _0x16a408[_0x49a56a(0x393)] = _0x27e2a2;
                    else _0x16a408['aLabel'] = null;
                    _0x16a408[_0x49a56a(0xbe)] = _0x4d3e06, _0x16a408[_0x49a56a(0x1a5)] = _0x110050, _0x16a408['aPointOrLineOrPolygon_Labels_ZOOM'] = _0x14c14e, _0x16a408[_0x49a56a(0x29d)] = _0x5dcf85;
                    if (_0x369f79 == !![] && _0x16a408['bVisible'] == !![]) {
                        h_nNoFireBoundChangedForSpeed++;
                        if (h_nNoFireBoundChangedForSpeed > 0x3e8) h_nNoFireBoundChangedForSpeed = 0x0;
                        _h_setVisiableLabelMapExtent(_0x16a408[_0x49a56a(0x393)], _0x14c14e[_0x291374], 0x3e8, _0x16a408[_0x49a56a(0x205)], h_nNoFireBoundChangedForSpeed);
                    }
                    if (_0x16a408[_0x49a56a(0x19e)] > 0x0) _h_CreateBufferOnPoint(_0x16a408, _0x16a408[_0x49a56a(0x19e)]);
                    _0x4d3e06 = null, _0x110050 = null, _0x14c14e = null;
                    let _0x4d5693 = new kakao[(_0x49a56a(0x12a))][(_0x49a56a(0x10d))](new kakao[(_0x49a56a(0x12a))][(_0x49a56a(0x32b))](_0x38bad5[0x1], _0x38bad5[0x0]), new kakao[(_0x49a56a(0x12a))][(_0x49a56a(0x32b))](_0x38bad5[0x3], _0x38bad5[0x2]));
                    _0x16a408['oExtent'] = _0x4d5693, _0x4d5693 = null, _0x110050 = null, _0x3bf438 = null, _0x27e2a2 = null, _h_setProgressStop(), setTimeout(function() {
                        const _0x1326fd = _0x49a56a;
                        $(_0x1326fd(0x292))['sortable'](_0x1326fd(0x1a0)); {
                            _h_OnSortChangeTOC($(_0x1326fd(0x292)));
                        }
                    }, 0x3e8), swal['close']();
                }
            }, 0x64);
        });
    }
}

function HM_createOD(_0x48238a, _0x360b43, _0x8cccf7, _0xc59e1f, _0x30c241, _0x4656c0) {
    const _0x19ee00 = _0x3a1a23;
    _0x360b43 = _h_replacePercentFromUrl(_0x360b43), _0x360b43 = _h_replacePlusFromUrl(_0x360b43), _0x360b43 = _h_replaceShapFromUrl(_0x360b43), _h_setColorMap(h_oMap, h_divMap), _h_setProgress2(h_divMap['id']), oHM = {
        'UID': Date[_0x19ee00(0x14c)]() + Math[_0x19ee00(0x365)](),
        'sCallUrl': _0x360b43,
        'map': h_oMap,
        'fX': 0x0,
        'fY': 0x0,
        'fAlpha': _0x48238a,
        'sUrl': '',
        'sLegend': '',
        'nW': 0x0,
        'nH': 0x0,
        'oExtent': null,
        'div_map': h_divMap,
        'nType': _0x4656c0,
        'aPointOrLineOrPolygon': null,
        'aLabel': null,
        'nLabelMinZoom': -0x1,
        'nLabelMaxZoom': -0x1,
        'sLayerNM': _0x8cccf7,
        'sDataString': _0x30c241,
        'zIndex': 0x0,
        'bVisible': _0xc59e1f,
        'heatmapOverlay': null,
        'sPointSymbolType': null,
        'sPointSymbolColor': null,
        'nAuto': !![]
    }, h_aCallStackArray[oHM[_0x19ee00(0x263)]] = h_nCallStackLoc, _h_GetODFromUrl(oHM, h_nCallStackLoc), _h_addLayerToTOC(oHM), oHM = null;
}

function _h_GetODFromUrl(_0x496e7e, _0x3a22a3) {
    const _0x29db3f = _0x3a1a23;
    _h_setProgressStart();
    let _0x1b8ad3 = _0x496e7e[_0x29db3f(0x131)],
        _0x3417a3 = ![];
    if (_0x1b8ad3[_0x29db3f(0x37d)]('?DB=XYZString') > 0x0 || _0x1b8ad3[_0x29db3f(0x37d)](_0x29db3f(0x3dd)) > 0x0) _0x3417a3 = !![];
    let _0x3616de = _0x1b8ad3,
        _0x3a816e = new XMLHttpRequest();
    _0x3a816e[_0x29db3f(0x3e0)]('load', _0x4f2b01), _0x3a816e[_0x29db3f(0x332)] = function() {
        alert('Heatmap\x20서버와의\x20통신에\x20실패하였습니다.\x0a(주된\x20원인:\x20광고차단기능\x20및\x20인트라넷\x20설정\x20등)');
    }, _0x1b8ad3 = _h_GetBase64Url(_0x1b8ad3), _0x3a816e[_0x29db3f(0x3e2)](_0x29db3f(0x201), _0x1b8ad3), _0x3a816e['send']();

    function _0x4f2b01() {
        const _0x59eb00 = _0x29db3f;
        _0x3a816e = null, _h_setProgressStop();
        let _0x4b2f79 = this[_0x59eb00(0x254)];
        if (_0x4b2f79[_0x59eb00(0x363)] < 0xa || _0x4b2f79[_0x59eb00(0x12e)](0x0, 0x6) == _0x59eb00(0x12b)) {
            if (_0x4b2f79[_0x59eb00(0x37d)](h_csNODATA) > 0x0) _h_showErrorAlertForBizFile(_0x59eb00(0xf1) + _0x4b2f79, _0x3616de);
            else _h_showErrorAlertForBizFile(_0x59eb00(0xf1) + _0x4b2f79, _0x3616de);
            HM_removeHeatMap(_0x496e7e), _h_removeLayerFromTOCByOHM(_0x496e7e);
            return;
        } else {
            if (_0x4b2f79[_0x59eb00(0x12e)](0x0, 0x4) == 'SQL:') {
                _0x4b2f79 = _0x4b2f79[_0x59eb00(0x36a)](0x4), _h_copyToClipboard(_0x4b2f79), HM_removeHeatMap(_0x496e7e), _h_removeLayerFromTOCByOHM(_0x496e7e);
                return;
            }
        }
        _0x3616de = null;
        let _0x26d80e = _0x4b2f79[_0x59eb00(0x1c4)]('#|#'),
            _0x47f478 = _0x26d80e[0x0],
            _0x3fdeda = _0x26d80e[0x1],
            _0x3ecc40 = _0x26d80e[0x2];
        _0x496e7e[_0x59eb00(0xb1)] = _0x47f478, _0x496e7e[_0x59eb00(0x3d1)] = _0x3fdeda, _0x496e7e['aPointOrLineOrPolygon'] = _h_mb_addXRayMap(_0x496e7e[_0x59eb00(0x263)], _0x496e7e['sUrl'], _0x3ecc40, _0x496e7e['fAlpha'], _0x496e7e[_0x59eb00(0x205)]), h_bBottomAutoMapLegendShow == !![] && (typeof CreateLegend == _0x59eb00(0x297) && typeof RemoveLegend == _0x59eb00(0x297) && (RemoveLegend(_0x496e7e), CreateLegend(_0x496e7e))), _0x496e7e = null;
    }
}
let h_adivODLayer = null,
    h_saODLayerID = null,
    h_odivODLayerParent = null,
    fPreLat = 0x0,
    fPreLng = 0x0,
    fPreZoom = 0x0,
    h_mb_bMapMovingByMB = ![];

function _h_mb_getODLayerByID(_0x417c59) {
    const _0x440a8f = _0x3a1a23;
    if (h_adivODLayer == null) return null;
    if (h_adivODLayer[_0x440a8f(0x363)] == 0x0) return null;
    let _0x3b7030 = h_adivODLayer[_0x440a8f(0x363)];
    for (let _0x58e875 = 0x0; _0x58e875 < _0x3b7030; _0x58e875++)
        if (h_saODLayerID[_0x58e875] == _0x417c59) return h_adivODLayer[_0x58e875];
    return null;
}

function _h_mb_removeODLayerByID(_0x38b5ed) {
    const _0x1e2a9f = _0x3a1a23;
    if (h_adivODLayer == null) return;
    if (h_adivODLayer['length'] == 0x0) return;
    let _0x43e10c = h_adivODLayer['length'];
    for (let _0x350d14 = 0x0; _0x350d14 < _0x43e10c; _0x350d14++) h_saODLayerID[_0x350d14] == _0x38b5ed && (h_saODLayerID[_0x1e2a9f(0x3e3)](_0x350d14, 0x1), h_adivODLayer[_0x1e2a9f(0x3e3)](_0x350d14, 0x1));
    return;
}

function _h_mb_addODLayer(_0x177f8d, _0x415183) {
    const _0x41d8b9 = _0x3a1a23;
    if (h_saODLayerID == null) h_saODLayerID = new Array();
    if (h_adivODLayer == null) h_adivODLayer = new Array();
    h_saODLayerID['push'](String(_0x177f8d)), h_adivODLayer['push'](_0x415183);
    let _0x445d83 = h_adivODLayer[_0x41d8b9(0x363)];
}

function _h_mb_setLayerIdx(_0x2d73fe, _0x14d19f) {
    const _0x40636f = _0x3a1a23;
    let _0x30aa6c = _h_mb_getODLayerByID(_0x2d73fe);
    if (_0x30aa6c == null) return;
    _0x30aa6c[_0x40636f(0x287)](_0x40636f(0x11f), _0x14d19f), _0x30aa6c = null;
}

function _h_mb_setLayeyAlpha(_0x89c47d, _0x9b99c2) {
    const _0x2c8005 = _0x3a1a23;
    let _0x15454e = _h_mb_getODLayerByID(_0x89c47d);
    if (_0x15454e == null) return;
    _0x15454e['children'](_0x2c8005(0x199))['css'](_0x2c8005(0x11c), _0x9b99c2), _0x15454e = null;
}
let _h_n_MB_Call_Loc = 0x0;
window[_0x3a1a23(0x3e0)](_0x3a1a23(0x12d), function(_0x4f9a0b) {
    const _0xd248e9 = _0x3a1a23;
    if (_0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x283)][_0xd248e9(0x37d)]('SEND_MAIN|OD_') == 0x0) {
        window[_0xd248e9(0x378)][_0xd248e9(0x239)](_0x4f9a0b[_0xd248e9(0x1f7)], '*'), _0x4f9a0b[_0xd248e9(0x1f7)] = null;
        return;
    }
    if (_0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x283)][_0xd248e9(0x37d)]('OD_LOADED') == 0x0) {
        h_mb_bMapMovingByMB = ![], _h_setProgressStop();
        if (h_odivODLayerParent == null && h_saODLayerID['length'] > 0x0) h_odivODLayerParent = _h_mb_getODLayerByID(h_saODLayerID[0x0])[_0xd248e9(0x378)]()[_0xd248e9(0x378)]();
        if (h_odivODLayerParent != null)
            for (let _0x372ee0 = 0x0; _0x372ee0 < h_adivODLayer[_0xd248e9(0x363)]; _0x372ee0++) {
                let _0x3b32c8 = h_odivODLayerParent['offset']()[_0xd248e9(0x173)] * -0x1 + 'px',
                    _0x30096e = h_odivODLayerParent[_0xd248e9(0x2d0)]()[_0xd248e9(0x37f)] * -0x1 + 'px';
                h_adivODLayer[_0x372ee0]['css']({
                    'left': _0x3b32c8,
                    'top': _0x30096e
                }), _0x3b32c8 = null, _0x30096e = null, sID = null;
            }
        _h_mb_getODLayerByID(_0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x263)])['css']('opacity', '1.0');
        if (_h_getHM_ByID(_0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x263)])[_0xd248e9(0x310)] == ![]) _h_mb_hideODLayer(_0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x263)]);
        _0x4f9a0b['data']['MODE'] = _0xd248e9(0x352), window[_0xd248e9(0x378)]['postMessage'](_0x4f9a0b[_0xd248e9(0x1f7)], '*');
        return;
    }
    if (_0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x283)][_0xd248e9(0x37d)]('MAP_MOVE') == 0x0 || _0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x283)][_0xd248e9(0x37d)](_0xd248e9(0x37c)) == 0x0 || _0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x283)][_0xd248e9(0x37d)](_0xd248e9(0x1e9)) == 0x0) {
        h_mb_bMapMovingByMB = !![];
        let _0xdb1235 = 0x13 - _0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x17a)];
        if (_0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0xdb)] != fPreLat || _0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x1a2)] != fPreLng || _0xdb1235 != fPreZoom) {
            let _0x5e2a1d = _0x4f9a0b[_0xd248e9(0x1f7)]['UID'],
                _0x21cd4b = _h_mb_getODLayerByID(_0x5e2a1d);
            if (_0x21cd4b == null) return;
            if (h_odivODLayerParent == null) h_odivODLayerParent = _0x21cd4b[_0xd248e9(0x378)]()[_0xd248e9(0x378)]();
            map[_0xd248e9(0x24b)](new kakao['maps'][(_0xd248e9(0x32b))](_0x4f9a0b[_0xd248e9(0x1f7)]['LAT'], _0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x1a2)]));
            if (_0xdb1235 != map[_0xd248e9(0x330)]()) map[_0xd248e9(0x2e1)](_0xdb1235);
            _0x21cd4b[_0xd248e9(0x287)]({
                'left': h_odivODLayerParent[_0xd248e9(0x2d0)]()['left'] * -0x1,
                'top': h_odivODLayerParent[_0xd248e9(0x2d0)]()[_0xd248e9(0x37f)] * -0x1
            }), _h_n_MB_Call_Loc++;
            if (_h_n_MB_Call_Loc > 0x3e8) _h_n_MB_Call_Loc = 0x0;
            HM_MB_MoveEnd(_0x5e2a1d, _h_n_MB_Call_Loc), fPreLat = _0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0xdb)], fPreLng = _0x4f9a0b['data']['LNG'], fPreZoom = _0xdb1235;
        }
    }
    if (_0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x283)][_0xd248e9(0x37d)]('DRAG_START') == 0x0) _h_mb_hideODCallByXRayMap(_0x4f9a0b['data'][_0xd248e9(0x263)]);
    else {
        if (_0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x283)][_0xd248e9(0x37d)](_0xd248e9(0x37c)) == 0x0) _h_mb_hideODCallByXRayMap(_0x4f9a0b['data'][_0xd248e9(0x263)]);
        else {
            if (_0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x283)][_0xd248e9(0x37d)](_0xd248e9(0x212)) == 0x0) _h_mb_showODCallByXRayMap(_0x4f9a0b[_0xd248e9(0x1f7)]['UID']);
            else {
                if (_0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x283)][_0xd248e9(0x37d)](_0xd248e9(0x1e9)) == 0x0) _h_mb_showODCallByXRayMap(_0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x263)]);
                else _0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x283)]['indexOf'](_0xd248e9(0x338)) == 0x0 && (_0x4f9a0b[_0xd248e9(0x1f7)]['MESSAGE'] = _0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x2f1)][_0xd248e9(0x124)]('\x0a', _0xd248e9(0x16b)), _0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x2f1)] = _0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x2f1)]['replaceAll']('\x09', '\x20|\x20'), _0x4f9a0b[_0xd248e9(0x1f7)]['MESSAGE'][_0xd248e9(0x363)] > 0xbb8 && (_0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x2f1)] = _0x4f9a0b[_0xd248e9(0x1f7)]['MESSAGE'][_0xd248e9(0x124)](_0xd248e9(0x16b), _0xd248e9(0xdc)), _0x4f9a0b[_0xd248e9(0x1f7)]['MESSAGE'] = _0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x2f1)]['substring'](0x0, 0x1770) + _0xd248e9(0x135)), Swal['fire']({
                    'icon': _0xd248e9(0x219),
                    'title': _0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x180)],
                    'html': _0x4f9a0b[_0xd248e9(0x1f7)][_0xd248e9(0x2f1)],
                    'customClass': 'swal-wide'
                }));
            }
        }
    }
    _0x4f9a0b[_0xd248e9(0x1f7)] = null;
});

function HM_MB_DragStartByXRayMap() {
    const _0x2b4d5f = _0x3a1a23;
    return;
    if (h_odivODLayerParent == null) return;
    h_odivODLayerParent[_0x2b4d5f(0x287)](_0x2b4d5f(0x2ea), _0x2b4d5f(0x250));
}

function HM_MB_DragEndByXRayMap() {
    const _0x2f238a = _0x3a1a23;
    return;
    if (h_odivODLayerParent == null) return;
    h_odivODLayerParent['css'](_0x2f238a(0x2ea), '');
}

function HM_MB_MoveEnd(_0x1d45bf, _0x44f980, _0x4a1a1e, _0x557b9e, _0xfe7e87) {
    setTimeout(function() {
        _0x44f980 == _h_n_MB_Call_Loc && (h_mb_bMapMovingByMB = ![]), _0x1d45bf = null;
    }, 0x12c);
}

function _h_mb_addXRayMap(_0x3bb27e, _0x107b01, _0x386c27, _0x195dbd, _0x591ae4) {
    const _0x2d436b = _0x3a1a23;
    _h_setProgressTemplate(0x3), _h_setProgressStart();
    let _0x4263e4 = _0x107b01 + _0x2d436b(0x1d2),
        _0x435767 = _0x107b01 + _0x2d436b(0x36c);
    _0x107b01[_0x2d436b(0x37d)](_0x2d436b(0xc2)) > 0x0 && (_0x4263e4 = _0x107b01 + _0x2d436b(0x1cc), _0x435767 = _0x107b01 + '/Location2.txt');
    let _0x5800f4 = _0x2d436b(0x1cd) + _0x3bb27e + _0x2d436b(0x2fc) + _0x4263e4 + _0x2d436b(0x165) + _0x435767 + _0x2d436b(0x1af) + _0x386c27;
    _0x5800f4 = _0x5800f4 + _0x2d436b(0x140) + map['getCenter']()[_0x2d436b(0x387)]() + '&Y=' + map['getCenter']()['getLat']() + '&ZOOM=' + map[_0x2d436b(0x330)]();
    let _0x15f7f5 = $(_0x2d436b(0x3d9))['width'](),
        _0x4cc5a9 = $('#map')[_0x2d436b(0x25f)](),
        _0x52947c = 0x0,
        _0xeccfa = '<div\x20style=\x22opacity:\x20' + _0x195dbd + _0x2d436b(0x2c6) + _0x3bb27e + _0x2d436b(0x13c) + _0x15f7f5 + _0x2d436b(0xe6) + _0x4cc5a9 + _0x2d436b(0x231) + _0x5800f4 + _0x2d436b(0x32c);
    _0xeccfa = _0x2d436b(0x3b8) + _0x3bb27e + _0x2d436b(0xb5) + _0x591ae4 + _0x2d436b(0x14a) + _0x52947c + _0x2d436b(0x18a) + _0xeccfa + _0x2d436b(0xe9);
    let _0x266f22 = $(_0xeccfa);
    return _h_mb_addODLayer(_0x3bb27e, _0x266f22), _0xeccfa = null, $(_0x2d436b(0x2f6))[_0x2d436b(0x378)]()[_0x2d436b(0x378)]()[_0x2d436b(0x398)](h_adivODLayer), _0x266f22;
}

function _h_mb_removeODLayer(_0x7ebd5, _0x3adf71) {
    const _0x3e65d3 = _0x3a1a23;
    _0x3adf71[_0x3e65d3(0x30d)](), _h_mb_removeODLayerByID(_0x7ebd5);
}

function _h_mb_showODLayer(_0x1c506a) {
    const _0x14af6c = _0x3a1a23;
    let _0x5e506a = _h_mb_getODLayerByID(_0x1c506a);
    if (_0x5e506a == null) return;
    _0x5e506a[_0x14af6c(0x3af)](), _0x5e506a = null;
}

function _h_mb_hideODLayer(_0x3040e4) {
    const _0x40ef54 = _0x3a1a23;
    let _0x10fe8d = _h_mb_getODLayerByID(_0x3040e4);
    if (_0x10fe8d == null) return;
    _0x10fe8d[_0x40ef54(0x260)](), _0x10fe8d = null;
}

function callFunc(_0x235cb3) {
    const _0x326f54 = _0x3a1a23;
    var _0x3f66c9 = document[_0x326f54(0x243)]('vals')[_0x326f54(0x24a)];
    let _0x1414f9 = new Object();
    _0x1414f9['MODE'] = 'MB_ZOOM_REPAIR', _0x1414f9[_0x326f54(0x191)] = _0x3f66c9[_0x326f54(0x1c4)](',')[0x0], _0x1414f9[_0x326f54(0xd3)] = _0x3f66c9[_0x326f54(0x1c4)](',')[0x1], _0x1414f9[_0x326f54(0x178)] = _0x3f66c9[_0x326f54(0x1c4)](',')[0x2], document[_0x326f54(0x243)](_0x235cb3)[_0x326f54(0x38f)][_0x326f54(0x239)](_0x1414f9, '*'), _0x1414f9 = null;
}

function _h_mb_callSetArea(_0x80f61, _0x2a8173, _0x187f47, _0x46a465) {
    const _0xcbaeba = _0x3a1a23;
    let _0x19bfa0 = getCircleCoord(_0x2a8173, _0x187f47, _0x46a465),
        _0x145542 = new Object();
    _0x145542['MODE'] = 'MB_USER_AREA', _0x145542[_0xcbaeba(0x30c)] = _0x19bfa0, document[_0xcbaeba(0x243)](_0x80f61)[_0xcbaeba(0x38f)][_0xcbaeba(0x239)](_0x145542, '*'), _0x145542 = null;
}

function _h_mb_callSetShape(_0x4d857c, _0x146447) {
    const _0x1ec2b3 = _0x3a1a23;
    let _0x40217f = h_setClosureCoords(_0x146447),
        _0x6ec4b5 = new Object();
    _0x6ec4b5['MODE'] = _0x1ec2b3(0x13e), _0x6ec4b5[_0x1ec2b3(0x30c)] = _0x40217f, document[_0x1ec2b3(0x243)](_0x4d857c)[_0x1ec2b3(0x38f)][_0x1ec2b3(0x239)](_0x6ec4b5, '*'), _0x6ec4b5 = null;
}

function _h_mb_callDeleteArea(_0x53bec5) {
    const _0x4bb1a6 = _0x3a1a23;
    _h_removeTmpMarkers(), _h_removeTmpCircle();
    let _0x2a78b8 = new Object();
    _0x2a78b8[_0x4bb1a6(0x283)] = _0x4bb1a6(0x315), document[_0x4bb1a6(0x243)](_0x53bec5)[_0x4bb1a6(0x38f)]['postMessage'](_0x2a78b8, '*'), _0x2a78b8 = null;
}

function callSetClustering(_0x23528e) {
    const _0x116cfc = _0x3a1a23;
    let _0x39fe26 = new Object();
    _0x39fe26['MODE'] = _0x116cfc(0x186), document['getElementById'](_0x23528e)[_0x116cfc(0x38f)][_0x116cfc(0x239)](_0x39fe26, '*'), _0x39fe26 = null;
}

function callSeleteClustering(_0x20744c) {
    const _0x35a9af = _0x3a1a23;
    let _0x404ae4 = new Object();
    _0x404ae4['MODE'] = _0x35a9af(0x39e), document['getElementById'](_0x20744c)['contentWindow']['postMessage'](_0x404ae4, '*'), _0x404ae4 = null;
}

function _h_mb_callSetColor(_0x3001c4, _0x3e8763) {
    const _0x221484 = _0x3a1a23;
    let _0x43f0b8 = new Object();
    _0x43f0b8[_0x221484(0x283)] = _0x221484(0xcf), _0x43f0b8['COLOR_RAMP'] = _0x3e8763, document['getElementById'](_0x3001c4)[_0x221484(0x38f)][_0x221484(0x239)](_0x43f0b8, '*'), _0x43f0b8 = null;
}

function _h_mb_callGetODTable(_0x3a25c3, _0x106f9f) {
    const _0xf9411a = _0x3a1a23;
    let _0x111b4b = new Object();
    _0x111b4b[_0xf9411a(0x283)] = 'MB_USER_TABLE_DETAIL', _0x111b4b['NM'] = _0x106f9f, document[_0xf9411a(0x243)](_0x3a25c3)[_0xf9411a(0x38f)][_0xf9411a(0x239)](_0x111b4b, '*'), _0x111b4b = null;
}

function callGetODTableForSelected(_0x3557dd, _0x9c4325) {
    const _0xd900ca = _0x3a1a23;
    let _0x41c99b = new Object();
    _0x41c99b[_0xd900ca(0x283)] = _0xd900ca(0x1dd), _0x41c99b['NM'] = _0x9c4325, document[_0xd900ca(0x243)](_0x3557dd)['contentWindow']['postMessage'](_0x41c99b, '*'), _0x41c99b = null;
}

function _h_mb_callGetTotalAndSelectedSummary(_0x142387, _0x22f0df, _0x968b17) {
    const _0x21519d = _0x3a1a23;
    let _0x59e7c0 = new Object();
    _0x59e7c0[_0x21519d(0x283)] = _0x21519d(0x10f), _0x59e7c0['NM'] = _0x22f0df, _0x59e7c0[_0x21519d(0x285)] = _0x968b17, document['getElementById'](_0x142387)['contentWindow']['postMessage'](_0x59e7c0, '*'), _0x59e7c0 = null;
}

function callGetSummary(_0x1ba5fb, _0x2206b1) {
    const _0x597f2e = _0x3a1a23;
    let _0x5877e5 = new Object();
    _0x5877e5['MODE'] = 'MB_USER_SUMMARY', _0x5877e5['NM'] = _0x2206b1, document['getElementById'](_0x1ba5fb)['contentWindow'][_0x597f2e(0x239)](_0x5877e5, '*'), _0x5877e5 = null;
}

function callGetSummaryorSelected(_0x5e2e20, _0x1a18b2, _0x57d8ad) {
    const _0x2a7b6c = _0x3a1a23;
    let _0x16221c = new Object();
    _0x16221c['MODE'] = _0x2a7b6c(0x2f3), _0x16221c['NM'] = _0x1a18b2, _0x16221c[_0x2a7b6c(0x285)] = _0x57d8ad, document[_0x2a7b6c(0x243)](_0x5e2e20)[_0x2a7b6c(0x38f)][_0x2a7b6c(0x239)](_0x16221c, '*'), _0x16221c = null;
}

function getCircleCoord(_0x2a3c0d, _0x47da03, _0x2ed1cb) {
    var _0x1517dd = '';
    with(Math) {
        var _0xa7d40d = _0x2ed1cb / 6378.8,
            _0x4ca17b = PI / 0xb4 * _0x2a3c0d,
            _0x4e478f = PI / 0xb4 * _0x47da03;
        for (var _0x3d8a4e = 0x0; _0x3d8a4e <= 0x168; _0x3d8a4e += 0xf) {
            var _0x20b31d = PI / 0xb4 * _0x3d8a4e,
                _0x86b4fd = asin(sin(_0x4ca17b) * cos(_0xa7d40d) + cos(_0x4ca17b) * sin(_0xa7d40d) * cos(_0x20b31d)),
                _0x337ede = atan2(sin(_0x20b31d) * sin(_0xa7d40d) * cos(_0x4ca17b), cos(_0xa7d40d) - sin(_0x4ca17b) * sin(_0x86b4fd)),
                _0x47644f = (_0x4e478f - _0x337ede + PI) % (0x2 * PI) - PI;
            if (_0x1517dd != '') _0x1517dd += ',';
            _0x1517dd += parseFloat(_0x47644f * (0xb4 / PI)) + '^' + parseFloat(_0x86b4fd * (0xb4 / PI));
        }
    }
    return _0x1517dd;
}

function _h_mb_getCircleLineDetail_Meter(_0x1a9c37, _0x7bbb4d, _0x1e9e17) {
    const _0xa92cee = _0x3a1a23;
    let _0x2bfdfe = new Array();
    with(Math) {
        let _0x318a9a = _0x1e9e17 / 0x3e8 / 6378.8,
            _0x5ca8f6 = PI / 0xb4 * _0x1a9c37,
            _0x2d9f01 = PI / 0xb4 * _0x7bbb4d;
        for (let _0x434c87 = 0x0; _0x434c87 <= 0x168; _0x434c87 += 0xa) {
            let _0x2eef78 = PI / 0xb4 * _0x434c87,
                _0x4304c3 = asin(sin(_0x5ca8f6) * cos(_0x318a9a) + cos(_0x5ca8f6) * sin(_0x318a9a) * cos(_0x2eef78)),
                _0x4ebca9 = atan2(sin(_0x2eef78) * sin(_0x318a9a) * cos(_0x5ca8f6), cos(_0x318a9a) - sin(_0x5ca8f6) * sin(_0x4304c3)),
                _0x530824 = (_0x2d9f01 - _0x4ebca9 + PI) % (0x2 * PI) - PI;
            _0x2bfdfe[_0xa92cee(0x29a)](new kakao[(_0xa92cee(0x12a))][(_0xa92cee(0x32b))](parseFloat(_0x4304c3 * (0xb4 / PI)), parseFloat(_0x530824 * (0xb4 / PI))));
        }
    }
    let _0x2955cc = new kakao[(_0xa92cee(0x12a))][(_0xa92cee(0x3cf))]({
        'path': _0x2bfdfe,
        'strokeWeight': 0x6,
        'strokeColor': '#FF0000',
        'strokeOpacity': 0x1,
        'zIndex': 0x186a0
    });
    return _0x2bfdfe = null, _0x2955cc;
}
var h_bm_fWhiteMaskOutLineAlpha = 0x0,
    h_bm_fWhiteMaskFillAlpha = 0.35,
    h_bm_bWhiteMaskOutLineAlphaOnlyOne = ![];

function _h_mb_setMaskCircleForOutLine() {
    const _0x2bec5c = _0x3a1a23;
    let _0x381405 = ![];
    if (h_bm_fWhiteMaskOutLineAlpha == 0x0) _0x381405 = !![];
    h_bm_fWhiteMaskOutLineAlpha = 0.2, h_bm_fWhiteMaskFillAlpha = 0.2;
    if (h_oTempWhiteCircle_ForTop == null) return;
    _0x381405 && (h_oTempWhiteCircle_ForTop[_0x2bec5c(0x328)](null), h_oTempWhiteCircle_ForTop = null, h_oTempWhiteCircle_ForTop = _h_mb_getMaskCircle_Meter(h_oTempCircle['getPosition']()[_0x2bec5c(0xac)](), h_oTempCircle[_0x2bec5c(0xc3)]()[_0x2bec5c(0x387)](), h_oTempCircle[_0x2bec5c(0x1e0)]()), h_oTempWhiteCircle_ForTop['setMap'](map));
}

function _h_mb_setMaskShapeForOutLine() {
    const _0xcb7ceb = _0x3a1a23;
    let _0xba7d04 = ![];
    if (h_bm_fWhiteMaskOutLineAlpha == 0x0) _0xba7d04 = !![];
    h_bm_fWhiteMaskOutLineAlpha = 0.2, h_bm_fWhiteMaskFillAlpha = 0.2;
    if (h_oTempWhiteShape_ForTop == null) return;
    _0xba7d04 && (h_oTempWhiteShape_ForTop[_0xcb7ceb(0x328)](null), h_oTempWhiteShape_ForTop = null, h_oTempWhiteShape_ForTop = _h_mb_getMaskShape(h_oTempShape['getPath']()), h_oTempWhiteShape_ForTop[_0xcb7ceb(0x328)](map));
}

function _h_mb_setMaskCircleForOutLineOnlyOne() {
    _h_mb_setMaskCircleForOutLine(), h_bm_bWhiteMaskOutLineAlphaOnlyOne = !![];
}

function _h_mb_setMaskShapeForOutLineOnlyOne() {
    _h_mb_setMaskShapeForOutLine(), h_bm_bWhiteMaskOutLineAlphaOnlyOne = !![];
}

function _h_mb_setMaskCircleForFill() {
    const _0x43c487 = _0x3a1a23;
    let _0x19d9bc = ![];
    if (h_bm_fWhiteMaskOutLineAlpha != 0x0) _0x19d9bc = !![];
    h_bm_fWhiteMaskOutLineAlpha = 0x0, h_bm_fWhiteMaskFillAlpha = 0.75;
    if (h_oTempWhiteCircle_ForTop == null) return;
    _0x19d9bc && (h_oTempWhiteCircle_ForTop[_0x43c487(0x328)](null), h_oTempWhiteCircle_ForTop = null, h_oTempWhiteCircle_ForTop = _h_mb_getMaskCircle_Meter(h_oTempCircle[_0x43c487(0xc3)]()[_0x43c487(0xac)](), h_oTempCircle[_0x43c487(0xc3)]()[_0x43c487(0x387)](), h_oTempCircle['getRadius']()), h_oTempWhiteCircle_ForTop[_0x43c487(0x328)](map));
}

function _h_mb_setMaskShapeForFill() {
    const _0x15c6e0 = _0x3a1a23;
    let _0x3fe262 = ![];
    if (h_bm_fWhiteMaskOutLineAlpha != 0x0) _0x3fe262 = !![];
    h_bm_fWhiteMaskOutLineAlpha = 0x0, h_bm_fWhiteMaskFillAlpha = 0.75;
    if (h_oTempWhiteShape_ForTop == null) return;
    _0x3fe262 && (h_oTempWhiteShape_ForTop['setMap'](null), h_oTempWhiteShape_ForTop = null, h_oTempWhiteShape_ForTop = _h_mb_getMaskShape(h_oTempShape[_0x15c6e0(0x2a5)]()), h_oTempWhiteShape_ForTop[_0x15c6e0(0x328)](map));
}

function _h_mb_getMaskCircle_Meter(_0x1b6cf6, _0x3541d2, _0x222570) {
    const _0x3b9961 = _0x3a1a23;
    let _0x1a5533 = h_divMap[_0x3b9961(0x275)],
        _0x2cd279 = _h_getMapLengthMeter(),
        _0x221289 = _0x2cd279 / _0x1a5533,
        _0x47db55 = _0x221289 * 0x2;
    _0x222570 += _0x47db55;
    let _0x5195c3 = new Array(),
        _0x2dc092 = [new kakao[(_0x3b9961(0x12a))][(_0x3b9961(0x32b))](0xb4, 0x0), new kakao['maps'][(_0x3b9961(0x32b))](0x0, 0x5a), new kakao[(_0x3b9961(0x12a))][(_0x3b9961(0x32b))](0xb4, 0x5a), new kakao[(_0x3b9961(0x12a))]['LatLng'](0x5a, 0x0)];
    _0x5195c3[_0x3b9961(0x29a)](_0x2dc092);
    let _0x4f7af2 = new Array();
    with(Math) {
        let _0x22ff95 = _0x222570 / 0x3e8 / 6378.8,
            _0x6a57fd = PI / 0xb4 * _0x1b6cf6,
            _0x5b86f0 = PI / 0xb4 * _0x3541d2;
        for (let _0x5902d3 = 0x0; _0x5902d3 <= 0x168; _0x5902d3 += 0xa) {
            let _0x1aa21e = PI / 0xb4 * _0x5902d3,
                _0x251dcf = asin(sin(_0x6a57fd) * cos(_0x22ff95) + cos(_0x6a57fd) * sin(_0x22ff95) * cos(_0x1aa21e)),
                _0x821262 = atan2(sin(_0x1aa21e) * sin(_0x22ff95) * cos(_0x6a57fd), cos(_0x22ff95) - sin(_0x6a57fd) * sin(_0x251dcf)),
                _0x13eec7 = (_0x5b86f0 - _0x821262 + PI) % (0x2 * PI) - PI;
            _0x4f7af2[_0x3b9961(0x29a)](new kakao[(_0x3b9961(0x12a))][(_0x3b9961(0x32b))](parseFloat(_0x251dcf * (0xb4 / PI)), parseFloat(_0x13eec7 * (0xb4 / PI))));
        }
    }
    if (_0x4f7af2['length'] >= 0x3) _0x5195c3[_0x3b9961(0x29a)](_0x4f7af2);
    _0x4f7af2 = null;
    let _0x518565 = new kakao[(_0x3b9961(0x12a))]['Polygon']({
        'map': h_oMap,
        'path': _0x5195c3,
        'strokeWeight': 0x6,
        'strokeColor': _0x3b9961(0x27c),
        'strokeOpacity': h_bm_fWhiteMaskOutLineAlpha,
        'fillColor': 'RGB(255,255,255)',
        'fillOpacity': h_bm_fWhiteMaskFillAlpha,
        'zIndex': 0x96b43e
    });
    return (h_isMobile == !![] || h_isTablet == !![]) && (_0x518565 = new kakao[(_0x3b9961(0x12a))][(_0x3b9961(0x3cf))]({
        'map': h_oMap,
        'path': _0x5195c3,
        'strokeWeight': 0x6,
        'strokeColor': _0x3b9961(0x27c),
        'strokeOpacity': h_bm_fWhiteMaskOutLineAlpha,
        'fillColor': _0x3b9961(0x3f0),
        'fillOpacity': h_bm_fWhiteMaskFillAlpha,
        'zIndex': 0x96b43e
    })), h_bm_bWhiteMaskOutLineAlphaOnlyOne == !![] && (h_bm_bWhiteMaskOutLineAlphaOnlyOne = ![], _h_mb_setMaskCircleForFill()), _0x518565;
}

function _h_mb_getMaskShape(_0x5384c9) {
    const _0x632206 = _0x3a1a23;
    let _0x5ca268 = h_divMap[_0x632206(0x275)],
        _0x5eb2e7 = _h_getMapLengthMeter(),
        _0x35a800 = _0x5eb2e7 / _0x5ca268,
        _0x15e856 = _0x35a800 * 0x2,
        _0x1b4c0a = new Array(),
        _0xb2411a = [new kakao['maps'][(_0x632206(0x32b))](0xb4, 0x0), new kakao[(_0x632206(0x12a))][(_0x632206(0x32b))](0x0, 0x5a), new kakao['maps']['LatLng'](0xb4, 0x5a), new kakao[(_0x632206(0x12a))]['LatLng'](0x5a, 0x0)];
    _0x1b4c0a['push'](_0xb2411a);
    let _0x5db237 = _0x5384c9['length'],
        _0x49af2f = [];
    for (i = 0x0; i < _0x5db237; i++) _0x49af2f['push'](_0x5384c9[i]);
    _0x49af2f[_0x632206(0x29a)](_0x5384c9[0x0]);
    if (_0x49af2f[_0x632206(0x363)] >= 0x3) _0x1b4c0a[_0x632206(0x29a)](_0x49af2f);
    _0x49af2f = null;
    let _0x219328 = new kakao[(_0x632206(0x12a))][(_0x632206(0x3e5))]({
        'map': h_oMap,
        'path': _0x1b4c0a,
        'strokeWeight': 0x6,
        'strokeColor': _0x632206(0x27c),
        'strokeOpacity': h_bm_fWhiteMaskOutLineAlpha,
        'fillColor': 'RGB(255,255,255)',
        'fillOpacity': h_bm_fWhiteMaskFillAlpha,
        'zIndex': 0x96b43e
    });
    return (h_isMobile == !![] || h_isTablet == !![]) && (_0x219328 = new kakao[(_0x632206(0x12a))][(_0x632206(0x3cf))]({
        'map': h_oMap,
        'path': _0x1b4c0a,
        'strokeWeight': 0x6,
        'strokeColor': 'RGB(0,0,0)',
        'strokeOpacity': h_bm_fWhiteMaskOutLineAlpha,
        'fillColor': _0x632206(0x3f0),
        'fillOpacity': h_bm_fWhiteMaskFillAlpha,
        'zIndex': 0x96b43e
    })), h_bm_bWhiteMaskOutLineAlphaOnlyOne == !![] && (h_bm_bWhiteMaskOutLineAlphaOnlyOne = ![], _h_mb_setMaskCircleForFill()), _0x219328;
}
let m_nCallMBMove = 0x0;

function _h_mb_showODCallByXRayMap(_0x29df00) {
    const _0x3999f5 = _0x3a1a23;
    if (h_adivODLayer == null) return;
    if (h_adivODLayer[_0x3999f5(0x363)] == null) return;
    if (h_odivODLayerParent == null) h_odivODLayerParent = _h_mb_getODLayerByID(h_saODLayerID[0x0])[_0x3999f5(0x378)]()['parent']();
    h_mb_bMapMovingByMB = ![], m_nCallMBMove++;
    let _0x4a260c = m_nCallMBMove;
    setTimeout(function() {
        const _0x55dda9 = _0x3999f5;
        if (m_nCallMBMove == _0x4a260c) {
            if (h_adivODLayer == null) return;
            if (h_adivODLayer[_0x55dda9(0x363)] == null) return;
            let _0x4c8d73 = new Object();
            _0x4c8d73[_0x55dda9(0x283)] = 'MB_MAP_MOVE', _0x4c8d73['LAT'] = map['getCenter']()[_0x55dda9(0xac)](), _0x4c8d73['LNG'] = map[_0x55dda9(0x20b)]()[_0x55dda9(0x387)](), _0x4c8d73[_0x55dda9(0x17a)] = map[_0x55dda9(0x330)]();
            for (let _0x51b822 = 0x0; _0x51b822 < h_adivODLayer['length']; _0x51b822++) {
                if (h_saODLayerID[_0x51b822] != _0x29df00) {
                    let _0x2adaa7 = h_saODLayerID[_0x51b822];
                    document[_0x55dda9(0x243)](_0x2adaa7)[_0x55dda9(0x38f)][_0x55dda9(0x239)](_0x4c8d73, '*'), _0x2adaa7 = null;
                }
                let _0x23523f = h_odivODLayerParent['offset']()[_0x55dda9(0x173)] * -0x1 + 'px',
                    _0x2851bb = h_odivODLayerParent[_0x55dda9(0x2d0)]()['top'] * -0x1 + 'px',
                    _0x2896d8 = h_adivODLayer[_0x51b822]['css'](_0x55dda9(0x173)),
                    _0x16c155 = h_adivODLayer[_0x51b822]['css'](_0x55dda9(0x37f));
                if (_0x23523f != _0x2896d8 || _0x2851bb != _0x16c155) h_adivODLayer[_0x51b822]['css']({
                    'left': _0x23523f,
                    'top': _0x2851bb
                });
                _0x23523f = null, _0x2851bb = null, _0x16c155 = null, _0x16c155 = null, h_adivODLayer[_0x51b822]['css'](_0x55dda9(0x22b)) == _0x55dda9(0x1b3) && (h_adivODLayer[_0x51b822][_0x55dda9(0x287)](_0x55dda9(0x11c), _0x55dda9(0x22f)), h_adivODLayer[_0x51b822][_0x55dda9(0x287)](_0x55dda9(0x22b), _0x55dda9(0x276)), h_adivODLayer[_0x51b822][_0x55dda9(0x3bf)]({
                    'opacity': 0x1
                }, 0x1f4));
            }
            _0x4c8d73 = null;
        }
        fFunc = null, oPara = null;
    }, 0x64);
}

function _h_mb_hideODCallByXRayMap(_0x5615fa) {
    const _0x1d9016 = _0x3a1a23;
    if (h_adivODLayer == null) return;
    if (h_adivODLayer[_0x1d9016(0x363)] == 0x0) return;
    h_mb_bMapMovingByMB = ![];
    for (let _0x2d8abc = 0x0; _0x2d8abc < h_adivODLayer[_0x1d9016(0x363)]; _0x2d8abc++) {
        h_saODLayerID[_0x2d8abc] != _0x5615fa && (h_adivODLayer[_0x2d8abc][_0x1d9016(0x287)](_0x1d9016(0x22b), 'hidden'), h_adivODLayer[_0x2d8abc][_0x1d9016(0x287)]('opacity', _0x1d9016(0x22f)));
    }
}

function _h_mb_ResizeiFrameCallByJS() {
    const _0x110ab2 = _0x3a1a23;
    if (h_adivODLayer == null) return;
    if (h_adivODLayer['length'] == 0x0) return;
    let _0x2a9dd3 = $('#map')[_0x110ab2(0x2d3)](),
        _0x6a5213 = $(_0x110ab2(0x3d9))[_0x110ab2(0x25f)]();
    h_odivODLayerParent[_0x110ab2(0x2d3)](_0x2a9dd3 + 'px'), h_odivODLayerParent[_0x110ab2(0x25f)](_0x6a5213 + 'px');
    for (let _0x2e60ec = 0x0; _0x2e60ec < h_adivODLayer[_0x110ab2(0x363)]; _0x2e60ec++) {
        h_adivODLayer[_0x2e60ec]['width'](_0x2a9dd3 + 'px'), h_adivODLayer[_0x2e60ec][_0x110ab2(0x25f)](_0x6a5213 + 'px');
        let _0x4d3bf8 = h_saODLayerID[_0x2e60ec];
        _0x4d3bf8 = _0x4d3bf8['replaceAll']('.', '\x5c.'), $('#' + _0x4d3bf8)[_0x110ab2(0x2d3)](_0x2a9dd3 + 'px'), $('#' + _0x4d3bf8)[_0x110ab2(0x25f)](_0x6a5213 + 'px'), _0x4d3bf8 = null;
    }
    _h_mb_showODCallByXRayMap('');
}
let m_nCallCircleOrShapeOpacityLoc = 0x0;

function _h_mb_setOpacityForUserCircleOrShapeResize(_0x4c5301) {
    const _0x3f55c2 = _0x3a1a23;
    if (h_adivODLayer == null) return;
    if (h_adivODLayer[_0x3f55c2(0x363)] == 0x0) return;
    m_nCallCircleOrShapeOpacityLoc++;
    if (m_nCallCircleOrShapeOpacityLoc > 0x3e8) m_nCallCircleOrShapeOpacityLoc = 0x0;
    let _0x235c68 = m_nCallCircleOrShapeOpacityLoc;
    for (let _0x4a76d8 = 0x0; _0x4a76d8 < h_adivODLayer[_0x3f55c2(0x363)]; _0x4a76d8++) {
        if (h_adivODLayer[_0x4a76d8][_0x3f55c2(0x287)](_0x3f55c2(0x1ed)) == _0x3f55c2(0x116)) {
            if (h_adivODLayer[_0x4a76d8][_0x3f55c2(0x287)](_0x3f55c2(0x22b)) == 'visible') {
                if (_0x4c5301 == ![]) {
                    if (h_adivODLayer[_0x4a76d8][_0x3f55c2(0x287)](_0x3f55c2(0x11c)) != _0x3f55c2(0x262)) {
                        let _0x1aedad = h_adivODLayer[_0x4a76d8];
                        setTimeout(function() {
                            _0x235c68 == m_nCallCircleOrShapeOpacityLoc && _0x1aedad['animate']({
                                'opacity': 0x1
                            }, 0xc8), _0x1aedad = null;
                        }, 0xfa);
                    }
                } else {
                    if (h_adivODLayer[_0x4a76d8][_0x3f55c2(0x287)](_0x3f55c2(0x11c)) != '0.2') h_adivODLayer[_0x4a76d8][_0x3f55c2(0x3bf)]({
                        'opacity': 0.2
                    }, 0xc8);
                }
            }
        }
    }
}

function _h_mb_SyncingTopLeft() {
    const _0x3bd834 = _0x3a1a23;
    if (h_adivODLayer == null) return;
    if (h_adivODLayer[_0x3bd834(0x363)] == null) return;
    if (h_odivODLayerParent == null) h_odivODLayerParent = _h_mb_getODLayerByID(h_saODLayerID[0x0])[_0x3bd834(0x378)]()[_0x3bd834(0x378)]();
    let _0x2933fe = new Object();
    _0x2933fe[_0x3bd834(0x283)] = 'MB_MAP_MOVE', _0x2933fe[_0x3bd834(0xdb)] = map[_0x3bd834(0x20b)]()['getLat'](), _0x2933fe[_0x3bd834(0x1a2)] = map[_0x3bd834(0x20b)]()[_0x3bd834(0x387)](), _0x2933fe[_0x3bd834(0x17a)] = map[_0x3bd834(0x330)]();
    for (let _0x468af2 = 0x0; _0x468af2 < h_adivODLayer['length']; _0x468af2++) {
        document['getElementById'](h_saODLayerID[_0x468af2])['contentWindow']['postMessage'](_0x2933fe, '*');
        let _0x23c0cd = h_odivODLayerParent['offset']()[_0x3bd834(0x173)] * -0x1 + 'px',
            _0x1153ff = h_odivODLayerParent[_0x3bd834(0x2d0)]()['top'] * -0x1 + 'px',
            _0x37c6ca = h_adivODLayer[_0x468af2][_0x3bd834(0x287)](_0x3bd834(0x173)),
            _0x38c0b3 = h_adivODLayer[_0x468af2][_0x3bd834(0x287)]('top');
        if (_0x23c0cd != _0x37c6ca || _0x1153ff != _0x38c0b3) h_adivODLayer[_0x468af2][_0x3bd834(0x287)]({
            'left': _0x23c0cd,
            'top': _0x1153ff
        });
        _0x23c0cd = null, _0x1153ff = null, _0x38c0b3 = null, _0x38c0b3 = null, _0x2933fe = null;
    }
    _0x2933fe = null;
}

function _h_pow(_0x4d17a4, _0x5bf51e) {
    var _0x456abf = _0x4d17a4;
    while (--_0x5bf51e) {
        _0x456abf *= _0x4d17a4;
    }
    return _0x456abf;
}

function h_XYArray2Coords(_0xaf38a8) {
    const _0x5e6bad = _0x3a1a23;
    let _0x131288 = _0xaf38a8[_0x5e6bad(0x363)];
    if (_0x131288 < 0x3) return '';
    let _0x96e75f = '';
    for (i = 0x0; i < _0x131288; i++) {
        if (_0x96e75f != '') _0x96e75f = _0x96e75f + ',';
        _0x96e75f = _0x96e75f + _0xaf38a8[i]['x'] + '^' + _0xaf38a8[i]['y'];
    }
    if (_0xaf38a8[0x0]['x'] == _0xaf38a8[_0x131288 - 0x1]['x'] && _0xaf38a8[0x0]['y'] == _0xaf38a8[_0x131288 - 0x1]['y']) {} else {
        if (_0x96e75f != '') _0x96e75f = _0x96e75f + ',';
        _0x96e75f = _0x96e75f + _0xaf38a8[0x0]['x'] + '^' + _0xaf38a8[0x0]['y'];
    }
    return _0x96e75f;
}

function h_Coords2XYArray(_0x4dfe34) {
    const _0x340007 = _0x3a1a23,
        _0x568398 = [],
        _0x59501d = _0x4dfe34[_0x340007(0x1c4)](',');
    for (const _0x27d283 of _0x59501d) {
        const [_0x6f9337, _0x36cb30] = _0x27d283[_0x340007(0x1c4)]('^');
        _0x568398[_0x340007(0x29a)]({
            'x': parseFloat(_0x6f9337),
            'y': parseFloat(_0x36cb30)
        });
    }
    return _0x568398;
}

function h_Coords2Array(_0x33805a) {
    const _0x3195f9 = _0x3a1a23,
        _0x2e6947 = [],
        _0x3c12d8 = _0x33805a[_0x3195f9(0x1c4)](',');
    for (const _0x90fea6 of _0x3c12d8) {
        const [_0x68bf81, _0x437662] = _0x90fea6['split']('^');
        _0x2e6947[_0x3195f9(0x29a)]([parseFloat(_0x68bf81), parseFloat(_0x437662)]);
    }
    return _0x2e6947;
}

function h_setClosureCoords(_0x36dda9) {
    const _0x1f9414 = _0x3a1a23;
    let _0x506d12 = _0x36dda9['split'](',');
    if (_0x506d12[_0x1f9414(0x363)] < 0x3) return _0x36dda9;
    if (_0x506d12[0x0] != _0x506d12[_0x506d12[_0x1f9414(0x363)] - 0x1]) _0x36dda9 = _0x36dda9 + ',' + _0x506d12[0x0];
    return _0x506d12 = null, _0x36dda9;
}

function _h_GetDistant(_0x9d3458, _0x52330a, _0x5479f9, _0x512a1d) {
    return Math['sqrt'](_h_pow(_0x5479f9 - _0x9d3458, 0x2) + _h_pow(_0x512a1d - _0x52330a, 0x2));
}

function _h_GetDistanceByGeo(_0x13cdfc, _0x271218, _0x48aeb7, _0x568bb0) {
    const _0x3cf3cd = _0x3a1a23,
        _0x2d308b = 0x18e3,
        _0x242c75 = _h_deg2rad(_0x48aeb7 - _0x13cdfc),
        _0x1416c5 = _h_deg2rad(_0x568bb0 - _0x271218),
        _0x59b7d9 = Math[_0x3cf3cd(0x24d)](_0x242c75 / 0x2) * Math['sin'](_0x242c75 / 0x2) + Math[_0x3cf3cd(0x23f)](_h_deg2rad(_0x13cdfc)) * Math[_0x3cf3cd(0x23f)](_h_deg2rad(_0x48aeb7)) * Math[_0x3cf3cd(0x24d)](_0x1416c5 / 0x2) * Math['sin'](_0x1416c5 / 0x2),
        _0x48c1e7 = 0x2 * Math[_0x3cf3cd(0x3bd)](Math[_0x3cf3cd(0x333)](_0x59b7d9), Math[_0x3cf3cd(0x333)](0x1 - _0x59b7d9)),
        _0x42c2b3 = _0x2d308b * _0x48c1e7 * 0x3e8;
    return _0x42c2b3;
}

function _h_deg2rad(_0x3f25b2) {
    return _0x3f25b2 * (Math['PI'] / 0xb4);
}

function _h_FastFloor(_0x5bc969, _0xff6196) {
    return ~~(_0x5bc969 * _0xff6196) / _0xff6196;
}

function _h_CleanStringForJson(_0x5c2360) {
    const _0x270185 = _0x3a1a23;
    return _0x5c2360 = _0x5c2360[_0x270185(0xd2)](/\\n/g, '\x5cn')['replace'](/\\'/g, '\x5c\x27')['replace'](/\\"/g, '\x5c\x22')[_0x270185(0xd2)](/\\&/g, '\x5c&')[_0x270185(0xd2)](/\\r/g, '\x5cr')[_0x270185(0xd2)](/\\t/g, '\x5ct')[_0x270185(0xd2)](/\\b/g, '\x5cb')[_0x270185(0xd2)](/\\f/g, '\x5cf'), _0x5c2360 = _0x5c2360['replace'](/[\u0000-\u0019]+/g, ''), _0x5c2360;
}

function _h_GetBase64Url(_0x320c9a) {
    const _0x3a92f7 = _0x3a1a23;
    let _0x2b7d1c = _h_GetUrlAndParaArray(_0x320c9a);
    if (_0x2b7d1c == null) return _0x320c9a;
    if (_0x2b7d1c[_0x3a92f7(0x363)] != 0x2) return _0x320c9a;
    return _0x320c9a = null, _0x2b7d1c[0x0] + 'BASE64=' + btoa(encodeURI(_0x2b7d1c[0x1]));
}

function _h_isContainForCiecle(_0x49908c, _0x1f59a1, _0x3e561d, _0x219649, _0x4f3d1e) {
    const _0x208d1b = _0x3a1a23;
    let _0x1aa283 = 0x615210,
        _0x1975a9 = (_0x3e561d - _0x49908c) * Math['PI'] / 0xb4,
        _0x2ab167 = (_0x219649 - _0x1f59a1) * Math['PI'] / 0xb4,
        _0x4bcb8a = _0x49908c * Math['PI'] / 0xb4,
        _0x344218 = _0x3e561d * Math['PI'] / 0xb4,
        _0x8d5f19 = Math[_0x208d1b(0x24d)](_0x1975a9 / 0x2) * Math[_0x208d1b(0x24d)](_0x1975a9 / 0x2) + Math[_0x208d1b(0x24d)](_0x2ab167 / 0x2) * Math['sin'](_0x2ab167 / 0x2) * Math[_0x208d1b(0x23f)](_0x4bcb8a) * Math[_0x208d1b(0x23f)](_0x344218),
        _0x2772cd = 0x2 * Math[_0x208d1b(0x3bd)](Math[_0x208d1b(0x333)](_0x8d5f19), Math[_0x208d1b(0x333)](0x1 - _0x8d5f19)),
        _0x1c83b9 = _0x1aa283 * _0x2772cd;
    if (_0x1c83b9 <= _0x4f3d1e) return !![];
    else return ![];
}
var h_sContainForShapeCoordsPre = '',
    h_oContainForShapePre = null;

function _h_isContainForShape(_0x20097d, _0x52f393, _0x2554f9) {
    let _0x45fe2d = null;
    if (h_sContainForShapeCoordsPre == _0x2554f9) _0x45fe2d = h_oContainForShapePre;
    else _0x45fe2d = h_Coords2Array(_0x2554f9);
    const _0x194833 = _0x45fe2d['length'];
    let _0x138078 = ![];
    for (let _0x4045ba = 0x0, _0x559078 = _0x194833 - 0x1; _0x4045ba < _0x194833; _0x559078 = _0x4045ba++) {
        const _0x58d761 = _0x45fe2d[_0x4045ba][0x0],
            _0x53e4d5 = _0x45fe2d[_0x4045ba][0x1],
            _0x1ff81a = _0x45fe2d[_0x559078][0x0],
            _0x4980f1 = _0x45fe2d[_0x559078][0x1],
            _0x219655 = _0x53e4d5 > _0x20097d !== _0x4980f1 > _0x20097d && _0x52f393 < (_0x1ff81a - _0x58d761) * (_0x20097d - _0x53e4d5) / (_0x4980f1 - _0x53e4d5) + _0x58d761;
        _0x219655 && (_0x138078 = !_0x138078);
    }
    return h_sContainForShapeCoordsPre = _0x2554f9, h_oContainForShapePre = _0x45fe2d, _0x2554f9 = null, _0x45fe2d = null, _0x138078;
}

function _h_getURLParameters(_0x3c9aff, _0x5d7c03) {
    const _0x1a75a2 = _0x3a1a23;
    if (_0x3c9aff[_0x1a75a2(0x37d)]('?') > 0x0) {
        let _0x3d3fa2 = _0x3c9aff[_0x1a75a2(0x1c4)]('?'),
            _0x406be0 = _0x3d3fa2[0x1]['split']('&'),
            _0x382147 = new Array(_0x406be0[_0x1a75a2(0x363)]),
            _0x2c61f5 = new Array(_0x406be0['length']),
            _0x5e3e3a = 0x0;
        for (_0x5e3e3a = 0x0; _0x5e3e3a < _0x406be0[_0x1a75a2(0x363)]; _0x5e3e3a++) {
            let _0xb2e4db = _0x406be0[_0x5e3e3a][_0x1a75a2(0x1c4)]('=');
            _0x382147[_0x5e3e3a] = _0xb2e4db[0x0];
            if (_0xb2e4db[0x1] != '') _0x2c61f5[_0x5e3e3a] = unescape(_0xb2e4db[0x1]);
            else _0x2c61f5[_0x5e3e3a] = _0x1a75a2(0x141);
        }
        for (_0x5e3e3a = 0x0; _0x5e3e3a < _0x406be0[_0x1a75a2(0x363)]; _0x5e3e3a++) {
            if (_0x382147[_0x5e3e3a] == _0x5d7c03) return _0x2c61f5[_0x5e3e3a];
        }
        return '';
    }
}

function _h_getValueFromContent(_0x1fe883, _0x30c837) {
    const _0x11162c = _0x3a1a23;
    let _0x5ea614 = '',
        _0x381747 = _0x1fe883[_0x11162c(0x1c4)]('<br>');
    for (i = 0x0; i < _0x381747[_0x11162c(0x363)]; i++) {
        let _0x2b1ff3 = _0x381747[i][_0x11162c(0x1c4)](':');
        if (_0x2b1ff3[_0x11162c(0x363)] == 0x2) {
            if (_0x2b1ff3[0x0] == _0x30c837) {
                _0x5ea614 = _0x2b1ff3[0x1];
                break;
            }
        }
        _0x2b1ff3 = null;
    }
    return _0x381747 = null, _0x1fe883 = null, _0x30c837 = null, _0x5ea614;
}

function _h_checkPolygonFromContentByIdx(_0x271e80, _0x12f037) {
    const _0x249585 = _0x3a1a23;
    let _0x4b86b0 = '',
        _0x97159a = ![],
        _0x2ff798 = _0x271e80[_0x249585(0x1c4)](_0x249585(0x16b));
    _0x4b86b0 = _0x2ff798[_0x12f037][_0x249585(0x1c4)](':')[0x1];
    if (_0x4b86b0[_0x249585(0x1c4)](',')[_0x249585(0x363)] >= 0x3) _0x97159a = !![];
    return _0x2ff798 = null, _0x271e80 = null, _0x4b86b0 = null, _0x97159a;
}

function _h_getPolygonFromContentByIdx(_0x4b0610, _0x59a3a0) {
    let _0x1575cc = '',
        _0xdfa134 = _0x4b0610['split']('<br>');
    return _0x1575cc = _0xdfa134[_0x59a3a0]['split'](':')[0x1], _0xdfa134 = null, _0x4b0610 = null, _0x1575cc;
}

function _h_getRemoveBUFFER_COORDS(_0x97c1bf) {
    const _0x1fe9cc = _0x3a1a23;
    let _0x7717a0 = _0x97c1bf[_0x1fe9cc(0x1c4)](_0x1fe9cc(0x16b));
    for (let _0x1685fa = 0x0; _0x1685fa < _0x7717a0[_0x1fe9cc(0x363)]; _0x1685fa++)
        if (_0x7717a0[_0x1685fa][_0x1fe9cc(0x37d)](_0x1fe9cc(0xfb)) == 0x0) {
            _0x7717a0[_0x1fe9cc(0x3e3)](_0x1685fa, 0x1);
            break;
        }
    return _0x97c1bf = _0x7717a0[_0x1fe9cc(0x163)](_0x1fe9cc(0x16b)), _0x7717a0 = null, _0x97c1bf;
}

function _h_getValueFromContentByIdx(_0x5d4bd9, _0x52c519) {
    const _0x1c681d = _0x3a1a23;
    let _0x4096aa = '',
        _0x5af804 = _0x5d4bd9[_0x1c681d(0x1c4)](_0x1c681d(0x16b));
    return _0x4096aa = _0x5af804[_0x52c519]['split'](':')[0x1], _0x5af804 = null, _0x5d4bd9 = null, parseInt(_0x4096aa);
}
let h_oShapeOpt = null,
    h_oShapeManager = null,
    h_bShapeDrawStart = ![],
    h_bShapeEditMode = ![],
    h_bShapeDrawing = ![];

function h_initShapeManager() {
    const _0x30c991 = _0x3a1a23;
    h_oShapeOpt == null && (h_oShapeOpt = {
        'map': h_oMap,
        'drawingMode': [kakao[_0x30c991(0x12a)][_0x30c991(0x138)][_0x30c991(0x30f)][_0x30c991(0x2f4)]],
        'guideTooltip': [_0x30c991(0x2c2), _0x30c991(0x318), _0x30c991(0xf3)],
        'polylineOptions': {
            'draggable': !![],
            'editable': !![],
            'strokeColor': _0x30c991(0x10c),
            'hintStrokeStyle': 'dash',
            'hintStrokeOpacity': 0.5
        },
        'polygonOptions': {
            'draggable': !![],
            'editable': !![],
            'strokeColor': _0x30c991(0x10c),
            'fillColor': _0x30c991(0x10c),
            'fillOpacity': 0.5,
            'hintStrokeStyle': _0x30c991(0x229),
            'hintStrokeOpacity': 0.5
        }
    }), h_oShapeManager == null && (h_oShapeManager = new kakao[(_0x30c991(0x12a))][(_0x30c991(0x138))][(_0x30c991(0x1b6))](h_oShapeOpt), h_oShapeManager['addListener'](_0x30c991(0x369), function(_0x451fec) {
        h_bShapeDrawStart == !![] && h_bShapeEditMode == ![] && (_h_StopEditModeForShape(), _0x451fec = null), h_bShapeEditMode = ![], h_bShapeDrawStart = ![], h_bShapeDrawing = ![];
    }), h_oShapeManager[_0x30c991(0x257)]('state_changed', function(_0x5bab9e) {
        _h_checkShapeEditingMode();
    }), h_oShapeManager[_0x30c991(0x257)](_0x30c991(0x125), function(_0x448b62) {
        h_bShapeDrawStart = ![];
    }));
}

function _h_checkShapeEditingMode() {
    const _0x2ea99c = _0x3a1a23;
    if (h_oTempShape == null) return;
    if (h_oShapeManager == null) return;
    if (h_oTempShape['getPath']()['length'] < 0x1) return;
    if (h_oShapeManager[_0x2ea99c(0x397)]()[_0x2ea99c(0xda)][_0x2ea99c(0x363)] < 0x1) return;
    let _0x4d0e02 = h_oTempShape[_0x2ea99c(0x2a5)]()[_0x2ea99c(0x363)],
        _0x2902a4 = h_oShapeManager['getData']()[_0x2ea99c(0xda)][0x0][_0x2ea99c(0x171)][_0x2ea99c(0x363)];
    if (_0x4d0e02 - 0x1 != _0x2902a4) {
        __sendSyncShapeBlank();
        return;
    }
    let _0x1face5 = ![];
    for (let _0x3f4644 = 0x0; _0x3f4644 < _0x2902a4; _0x3f4644++) {
        if (h_oTempShape[_0x2ea99c(0x2a5)]()[_0x3f4644][_0x2ea99c(0xac)]()['toFixed'](0x7) != h_oShapeManager[_0x2ea99c(0x397)]()[_0x2ea99c(0xda)][0x0][_0x2ea99c(0x171)][_0x3f4644]['y'][_0x2ea99c(0x182)](0x7) || h_oTempShape['getPath']()[_0x3f4644]['getLng']()[_0x2ea99c(0x182)](0x7) != h_oShapeManager['getData']()[_0x2ea99c(0xda)][0x0][_0x2ea99c(0x171)][_0x3f4644]['x'][_0x2ea99c(0x182)](0x7)) {
            __sendSyncShapeBlank();
            return;
        }
    }
}

function _h_userArea_Non_Interactive_Map() {
    const _0x44ddfc = _0x3a1a23;
    map['setDraggable'](![]), map[_0x44ddfc(0x170)](![]);
}

function _h_userArea_Set_Interactive_Map() {
    const _0x3025db = _0x3a1a23;
    map[_0x3025db(0x3dc)](!![]), map[_0x3025db(0x170)](!![]);
}

function _h_userArea_Non_Interactive_ODLayer() {
    const _0x57f337 = _0x3a1a23;
    let _0x4dc493 = h_adivODLayer;
    if (_0x4dc493 == null) return;
    for (let _0x49048b = 0x0; _0x49048b < _0x4dc493[_0x57f337(0x363)]; _0x49048b++) {
        _0x4dc493[_0x49048b][_0x57f337(0x287)]('pointer-events', _0x57f337(0x250)), _0x4dc493[_0x49048b][_0x57f337(0x3bf)]({
            'opacity': 0.3
        }, 0x1f4);
    }
    _0x4dc493 = null;
}

function _h_userArea_Set_Interactive_ODLayer() {
    const _0x72bd83 = _0x3a1a23;
    let _0x5ac8be = h_adivODLayer;
    if (_0x5ac8be == null) return;
    for (let _0x373ea8 = 0x0; _0x373ea8 < _0x5ac8be[_0x72bd83(0x363)]; _0x373ea8++) {
        _0x5ac8be[_0x373ea8][_0x72bd83(0x287)]('pointer-events', ''), _0x5ac8be[_0x373ea8][_0x72bd83(0x3bf)]({
            'opacity': 0x1
        }, 0x1f4);
    }
    _0x5ac8be = null;
}

function _h_userArea_Non_Interactive_PTLayer() {
    const _0x4ad130 = _0x3a1a23;
    $(_0x4ad130(0x151))[_0x4ad130(0x378)]()['css'](_0x4ad130(0x2ea), _0x4ad130(0x250)), $('img[src*=\x22marker/svg2png_30Col.php\x22]')[_0x4ad130(0x378)]()['animate']({
        'opacity': 0.3
    }, 0x1f4);
}

function _h_userArea_Non_Interactive_DensityLayer() {
    const _0x10d912 = _0x3a1a23;
    $(_0x10d912(0x221))[_0x10d912(0x378)]()[_0x10d912(0x287)](_0x10d912(0x2ea), _0x10d912(0x250)), $(_0x10d912(0x221))[_0x10d912(0x378)]()['animate']({
        'opacity': 0.3
    }, 0x1f4);
}

function _h_userArea_Set_Interactive_PTLayer() {
    const _0x18179b = _0x3a1a23;
    $(_0x18179b(0x151))[_0x18179b(0x378)]()[_0x18179b(0x3bf)]({
        'opacity': 0x1
    }, 0x1f4);
    let _0x5ee939 = setTimeout(function() {
        const _0x3e873c = _0x18179b;
        $(_0x3e873c(0x151))[_0x3e873c(0x378)]()[_0x3e873c(0x287)](_0x3e873c(0x2ea), ''), $(_0x3e873c(0x151))[_0x3e873c(0x378)]()[_0x3e873c(0x3a0)](_0x3e873c(0x2ea)), $(_0x3e873c(0x151))[_0x3e873c(0x378)]()['removeClass'](_0x3e873c(0x11c));
    }, 0x1f4);
}

function _h_userArea_Set_Interactive_DensityLayer() {
    const _0x3fc5e6 = _0x3a1a23;
    $(_0x3fc5e6(0x221))[_0x3fc5e6(0x378)]()[_0x3fc5e6(0x3bf)]({
        'opacity': 0x1
    }, 0x1f4);
    let _0x248337 = setTimeout(function() {
        const _0x63b391 = _0x3fc5e6;
        $(_0x63b391(0x221))[_0x63b391(0x378)]()['css'](_0x63b391(0x2ea), ''), $(_0x63b391(0x221))[_0x63b391(0x378)]()[_0x63b391(0x3a0)](_0x63b391(0x2ea)), $(_0x63b391(0x221))['parent']()['removeClass']('opacity');
    }, 0x1f4);
}

function __createSyncShapeDrag(_0x291736) {
    HM_createTempShape(_0x291736), _0x291736 = null;
}

function __deleteSyncShapeDrag() {
    HM_removeTempShape();
}

function HM_removeTempShape() {
    _h_userArea_Set_Interactive_ODLayer(), _h_userArea_Set_Interactive_PTLayer(), _h_userArea_Set_Interactive_DensityLayer(), _h_userArea_Set_Interactive_Map(), _h_BlankModeForShape(), h_removeTopTempWhiteCircle();
}

function HM_createTempShape(_0x1517fa) {
    const _0x4c1976 = _0x3a1a23;
    _0x1517fa == '' ? (h_initShapeManager(), h_oShapeManager[_0x4c1976(0x125)](), h_bShapeDrawStart = !![], h_oShapeManager[_0x4c1976(0xa7)](kakao[_0x4c1976(0x12a)][_0x4c1976(0x138)]['OverlayType'][_0x4c1976(0x2f4)])) : _h_drawTempShape(_0x1517fa, !![], !![]);
}

function _h_drawTempShape(_0x51bd80, _0x521e92, _0x593c8c) {
    const _0x26bcaa = _0x3a1a23;
    _h_returnInfoWindowsAndShiftPoint();
    if (_0x521e92 == !![]) _h_onChangeTempShapeForAreaSummary(_0x51bd80);
    if (_0x593c8c == !![]) _h_onChangeMasterTempShapeForSlave(_0x51bd80);
    if (h_oTempShape != null) h_oTempShape['setMap'](null);
    h_oTempShape = null;
    let _0x5724ee = h_Coords2XYArray(_0x51bd80),
        _0x2a66bf = _0x5724ee[_0x26bcaa(0x363)],
        _0x577f25 = [];
    for (i = 0x0; i < _0x2a66bf; i++) _0x577f25[_0x26bcaa(0x29a)](new kakao[(_0x26bcaa(0x12a))][(_0x26bcaa(0x32b))](_0x5724ee[i]['y'], _0x5724ee[i]['x']));
    if (_0x5724ee[0x0]['y'] != _0x5724ee[_0x2a66bf - 0x1]['y'] || _0x5724ee[0x0]['x'] != _0x5724ee[_0x2a66bf - 0x1]['x']) _0x577f25[_0x26bcaa(0x29a)](new kakao[(_0x26bcaa(0x12a))][(_0x26bcaa(0x32b))](_0x5724ee[0x0]['y'], _0x5724ee[0x0]['x']));
    let _0x5ab461 = new kakao['maps']['Polyline']({
        'map': h_oMap,
        'path': _0x577f25,
        'strokeColor': _0x26bcaa(0x246),
        'strokeStyle': _0x26bcaa(0x15f),
        'fillColor': '#000',
        'fillOpacity': 0x0,
        'zIndex': 0xf423f
    });
    h_oTempShape = _0x5ab461, _0x5ab461 = null, _0x577f25 = null, _0x5724ee = null, _0x51bd80 = null, h_setTopTempWhiteShape();
    if (h_oShapeManager != null) h_oShapeManager['cancel']();
}

function _h_BlankModeForShape() {
    const _0xc26af4 = _0x3a1a23;
    if (h_oShapeManager != null) {
        h_oShapeManager[_0xc26af4(0x125)]();
        if (h_oShapeManager[_0xc26af4(0x397)]() != null) {
            if (h_oShapeManager[_0xc26af4(0x397)]()[_0xc26af4(0xda)][_0xc26af4(0x363)] > 0x0) h_oShapeManager[_0xc26af4(0x30d)](h_oShapeManager[_0xc26af4(0x1fe)]()[_0xc26af4(0xda)][0x0]);
        }
    }
    if (h_oTempShape != null) h_oTempShape[_0xc26af4(0x328)](null);
    h_oTempShape = null;
}

function _h_EditModeForShape() {
    const _0x1743a2 = _0x3a1a23;
    _h_userArea_Non_Interactive_ODLayer(), _h_userArea_Non_Interactive_PTLayer(), _h_userArea_Non_Interactive_DensityLayer(), _h_userArea_Non_Interactive_Map();
    if (h_oTempShape == null) return;
    if (h_oShapeManager == null) h_initShapeManager();
    h_oShapeManager[_0x1743a2(0x125)](), h_bShapeDrawStart = !![], h_bShapeEditMode = !![], h_bShapeDrawing = !![];
    let _0x504d16 = h_oTempShape['getPath'](),
        _0x174c1d = _0x504d16['length'];
    h_oShapeManager['select'](kakao[_0x1743a2(0x12a)][_0x1743a2(0x138)][_0x1743a2(0x30f)][_0x1743a2(0x2f4)]);
    for (let _0xf74e66 = 0x0; _0xf74e66 < _0x174c1d; _0xf74e66++) {
        if (_0xf74e66 < _0x174c1d - 0x1) kakao[_0x1743a2(0x12a)][_0x1743a2(0x303)]['trigger'](h_oMap, _0x1743a2(0x38a), {
            'latLng': _0x504d16[_0xf74e66]
        });
        else {
            if (_0x504d16[_0xf74e66]['equals'](_0x504d16[0x0]) == ![]) kakao[_0x1743a2(0x12a)][_0x1743a2(0x303)]['trigger'](h_oMap, _0x1743a2(0x38a), {
                'latLng': _0x504d16[_0xf74e66]
            });
        }
    }
    setTimeout(function() {
        const _0x42d770 = _0x1743a2;
        let _0x47cf60 = $(_0x42d770(0x15b));
        if (_0x47cf60 != null) {
            if (_0x47cf60[_0x42d770(0x363)] > 0x0) _0x47cf60[0x0][_0x42d770(0x38a)]();
        }
    }, 0x1), h_oTempShape[_0x1743a2(0x328)](null), h_removeTopTempWhiteShape();
}

function _h_StopEditModeForShape() {
    const _0x3de754 = _0x3a1a23;
    _h_userArea_Set_Interactive_ODLayer(), _h_userArea_Set_Interactive_PTLayer(), _h_userArea_Set_Interactive_DensityLayer(), _h_userArea_Set_Interactive_Map();
    if (h_oShapeManager == null) return;
    if (h_oShapeManager[_0x3de754(0x397)]() == null) return;
    if (h_oShapeManager[_0x3de754(0x397)]()[_0x3de754(0xda)][_0x3de754(0x363)] < 0x1) return;
    let _0x312e14 = h_oShapeManager[_0x3de754(0x397)]()[_0x3de754(0xda)][0x0][_0x3de754(0x171)],
        _0x43d48d = h_XYArray2Coords(_0x312e14);
    _h_drawTempShape(_0x43d48d, !![], !![]), h_oShapeManager[_0x3de754(0x30d)](h_oShapeManager[_0x3de754(0x1fe)]()[_0x3de754(0xda)][0x0]), _0x312e14 = null, _0x43d48d = null;
}

function HM_setSyncTempEndShape(_0x525615) {
    _h_userArea_Set_Interactive_ODLayer(), _h_userArea_Set_Interactive_PTLayer(), _h_userArea_Set_Interactive_DensityLayer(), _h_userArea_Set_Interactive_Map(), _h_drawTempShape(_0x525615, ![], ![]), h_setTopTempWhiteShape(), _0x525615 = null;
}

function HM_CancelDrawShape() {
    _h_userArea_Set_Interactive_ODLayer(), _h_userArea_Set_Interactive_PTLayer(), _h_userArea_Set_Interactive_DensityLayer(), _h_userArea_Set_Interactive_Map();
    if (h_oShapeManager == null) return;
    h_oShapeManager['cancel'](), aCoords = null, sCoords = null;
}

function __createSyncAreaDrag(_0x2ad930, _0x3fe136, _0x29d65f) {
    HM_createTempCircle(_0x2ad930, _0x3fe136, _0x29d65f);
}

function __deleteSyncAreaDrag() {
    HM_removeTempCircle();
}

function HM_setAutoResizeTempCircleVar(_0x4cfe55) {
    h_bTempCircleAutoSize = _0x4cfe55;
}

function HM_setSyncTempCircleVar(_0x45bd25) {
    h_fTempCircleSync = _0x45bd25;
}

function HM_createTempCircle(_0x595574, _0x4c8eef, _0x346da2) {
    const _0x9530c5 = _0x3a1a23;
    let _0x15473f = _0x346da2;
    if (_0x15473f < 0x0) {
        let _0x57ba92 = _h_getMapDiagonalLengthMeter();
        _0x15473f = Math[_0x9530c5(0x2b7)](_0x57ba92 / 0x28), _0x15473f = Math[_0x9530c5(0x2b7)](_0x15473f / 0xa) * 0xa;
        if (_0x15473f < 0x64) _0x15473f = 0x64;
        if (_0x15473f > 0x1388) _0x15473f = 0x1388;
    }
    _0x595574 > 0x0 && _0x4c8eef > 0x0 ? _h_drawTempCircle(new kakao[(_0x9530c5(0x12a))][(_0x9530c5(0x32b))](_0x4c8eef, _0x595574), _0x15473f, !![], !![]) : (_h_drawTempCircle(h_oMap[_0x9530c5(0x20b)](), _0x15473f, !![], !![]), _h_setCircleAutoResize_R());
}

function HM_removeTempCircle() {
    const _0x20c5a6 = _0x3a1a23;
    if (h_oTempCircle != null) h_oTempCircle['setMap'](null);
    h_oTempCircle = null;
    if (h_oTempCircleMarker != null) h_oTempCircleMarker[_0x20c5a6(0x328)](null);
    h_oTempCircleMarker = null, h_removeTopTempWhiteCircle();
}

function HM_createTempCircleByLatLng(_0x5c5bde, _0x52b954) {
    const _0x41ec1d = _0x3a1a23;
    let _0x3f3478 = _h_getMapDiagonalLengthMeter(),
        _0xcd21ac = Math[_0x41ec1d(0x2b7)](_0x3f3478 / 0x14);
    _0xcd21ac = Math[_0x41ec1d(0x2b7)](_0xcd21ac / 0xa) * 0xa;
    if (_0xcd21ac < 0x64) _0xcd21ac = 0x64;
    _h_drawTempCircle(new kakao[(_0x41ec1d(0x12a))]['LatLng'](_0x5c5bde, _0x52b954), _0xcd21ac, !![], !![]);
}

function HM_setSyncTempCircle(_0x451200, _0x10e828) {
    if (h_fTempCircleSync == ![]) return;
    _h_drawTempCircle(_0x451200, _0x10e828, ![], ![]), _h_mb_setOpacityForUserCircleOrShapeResize(!![]);
}

function HM_setSyncTempStartCircle() {
    if (h_fTempCircleSync == ![]) return;
    h_bDraggingTempCircle = !![], h_removeTopTempWhiteCircle(), _h_mb_setOpacityForUserCircleOrShapeResize(!![]);
}

function HM_setSyncTempEndCircle() {
    if (h_fTempCircleSync == ![]) return;
    h_bDraggingTempCircle = ![], h_setTopTempWhiteCircle(), _h_mb_setOpacityForUserCircleOrShapeResize(![]);
}

function _h_getTempCircleR_m() {
    const _0x5cf2ae = _0x3a1a23;
    if (h_oTempCircle != null && h_oTempCircle != null) return h_oTempCircle[_0x5cf2ae(0x1e0)]();
    else return -0x1;
}

function _h_getTempCirclCenter() {
    const _0x1a306f = _0x3a1a23;
    if (h_oTempCircle != null && h_oTempCircleMarker != null) return h_oTempCircleMarker[_0x1a306f(0xc3)]();
    else return null;
}

function _h_setTempCirclCenterByUserMouseMove() {
    h_oTempCircle['setPosition'](_h_getTempCirclCenter());
}

function _h_onChangeTempCircleForAreaSummary(_0x2057e6, _0x505d05) {
    const _0x4ee469 = _0x3a1a23;
    _h_isEmptyForObjectAndFunction(_0x4ee469(0x1e4)) == ![] && onEventForChangeTempCircle_ByHeatmapLib(_0x2057e6, _0x505d05);
}

function _h_onChangeTempShapeForAreaSummary(_0x4c03ea) {
    const _0x417d68 = _0x3a1a23;
    _h_isEmptyForObjectAndFunction(_0x417d68(0x13f)) == ![] && onEventForChangeTempShape_ByHeatmapLib(_0x4c03ea);
}

function _h_onChangeMasterTempShapeForSlave(_0x42f61a) {
    const _0xeb631c = _0x3a1a23;
    _h_isEmptyForObjectAndFunction(_0xeb631c(0x265)) == ![] && onEventForTempShapeEndSync_ByHeatmapLib(_0x42f61a), _0x42f61a = null;
}

function _h_onChangeMasterTempCircleForSlave(_0xb4460d, _0x2790ed) {
    const _0x250c8d = _0x3a1a23;
    if (h_fTempCircleSync == ![]) return;
    _h_isEmptyForObjectAndFunction(_0x250c8d(0x1c5)) == ![] && onEventForTempCircleDragSync_ByHeatmapLib(_0xb4460d, _0x2790ed);
}

function _h_onChangeStartMasterTempCircleForSlave() {
    if (h_fTempCircleSync == ![]) return;
    _h_isEmptyForObjectAndFunction('onEventForTempCircleStartSync_ByHeatmapLib') == ![] && onEventForTempCircleStartSync_ByHeatmapLib();
}

function _h_onChangeEndMasterTempCircleForSlave() {
    if (h_fTempCircleSync == ![]) return;
    _h_isEmptyForObjectAndFunction('onEventForTempCircleEndSync_ByHeatmapLib') == ![] && onEventForTempCircleEndSync_ByHeatmapLib();
}

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
            'strokeColor': '#000',
            'strokeStyle': 'dashed',
            'fillColor': '#000',
            'fillOpacity': 0x0,
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
    _0x4843a5['setMap'](map), _0x4843a5[_0x3ea234(0x3dc)](!![]), h_bHideCenterMaker == !![] ? _0x4843a5[_0x3ea234(0x16c)](0x0) : (_0x4843a5[_0x3ea234(0x16c)](0.8), kakao[_0x3ea234(0x12a)][_0x3ea234(0x303)][_0x3ea234(0x257)](_0x4843a5, _0x3ea234(0x38a), function() {
        _h_drawTempCircle_marker_click();
    }), kakao[_0x3ea234(0x12a)]['event'][_0x3ea234(0x257)](_0x4843a5, 'dragstart', function() {
        _h_drawTempCircle_marker_dragstart();
    }), kakao['maps'][_0x3ea234(0x303)][_0x3ea234(0x257)](_0x4843a5, _0x3ea234(0x252), function() {
        _h_drawTempCircle_marker_dragend();
    }), $(h_divMap)[_0x3ea234(0xf4)](function(_0x1e14c6) {
        _h_drawTempCircle_marker_mouseUp();
    }), kakao[_0x3ea234(0x12a)]['event'][_0x3ea234(0x257)](_0x4843a5, 'mouseover', function() {
        _h_drawTempCircle_marker_mouseover();
    }), kakao[_0x3ea234(0x12a)][_0x3ea234(0x303)][_0x3ea234(0x257)](_0x4843a5, _0x3ea234(0x1c9), function() {
        _h_drawTempCircle_marker_mouseout();
    })), h_oTempCircle = _0x49700a, h_oTempCircleMarker = _0x4843a5, _0x4843a5 = null, _0x49700a = null, h_setTopTempWhiteCircle();
}

function HM_drawResizeTempCircle(_0x22d31f) {
    _h_drawTempCircle(_h_getTempCirclCenter(), _0x22d31f, ![], !![]), _h_mb_setOpacityForUserCircleOrShapeResize(!![]);
}
let m_nCllIDForTopTempWhiteCircleOrShape = 0x0;

function h_setTopTempWhiteCircleColor() {
    _h_mb_setMaskCircleForCotLine();
}

function h_setTopTempWhiteCircle() {
    if (h_oTempCircle == null) return;
    if (h_bDraggingTempCircle == !![]) return;
    h_removeTopTempWhiteCircle(), m_nCllIDForTopTempWhiteCircleOrShape++;
    let _0x5102ad = m_nCllIDForTopTempWhiteCircleOrShape;
    setTimeout(function() {
        const _0x4748ba = _0x3192;
        if (m_nCllIDForTopTempWhiteCircleOrShape == _0x5102ad) {
            h_isMobile != !![] && h_isTablet != !![] && (h_oTempWhiteCircle_ForTop = _h_mb_getMaskCircle_Meter(h_oTempCircle[_0x4748ba(0xc3)]()[_0x4748ba(0xac)](), h_oTempCircle[_0x4748ba(0xc3)]()[_0x4748ba(0x387)](), h_oTempCircle[_0x4748ba(0x1e0)]()), h_oTempWhiteCircle_ForTop[_0x4748ba(0x328)](map));
            let _0x1f43df = $(_0x4748ba(0x24c))['parent']()[_0x4748ba(0x287)](_0x4748ba(0x11f)),
                _0x2d15b5 = $(_0x4748ba(0x24c))[_0x4748ba(0x378)]()[_0x4748ba(0x287)](_0x4748ba(0x2ea));
            if (_0x1f43df != 0x1869f) $(_0x4748ba(0x24c))[_0x4748ba(0x378)]()[_0x4748ba(0x287)](_0x4748ba(0x11f), 0x1869f);
            if (_0x2d15b5 != _0x4748ba(0x250)) $(_0x4748ba(0x24c))[_0x4748ba(0x378)]()[_0x4748ba(0x287)](_0x4748ba(0x2ea), _0x4748ba(0x250));
            h_setTopTempWhiteCircleOrShape2();
            return;
        } else {}
    }, 0x320);
}

function h_removeTopTempWhiteCircle() {
    const _0x3db4c0 = _0x3a1a23;
    h_removeTopTempWhiteCircle2();
    if (h_oTempWhiteCircle_ForTop == null) return;
    h_oTempWhiteCircle_ForTop[_0x3db4c0(0x328)](null), h_oTempWhiteCircle_ForTop = null;
}

function h_setTopTempWhiteShape() {
    if (h_oTempShape == null) return;
    h_removeTopTempWhiteShape(), m_nCllIDForTopTempWhiteCircleOrShape++;
    let _0x36643b = m_nCllIDForTopTempWhiteCircleOrShape;
    setTimeout(function() {
        const _0x49294f = _0x3192;
        if (m_nCllIDForTopTempWhiteCircleOrShape == _0x36643b) {
            h_isMobile != !![] && h_isTablet != !![] && (h_oTempWhiteShape_ForTop = _h_mb_getMaskShape(h_oTempShape['getPath']()), h_oTempWhiteShape_ForTop['setMap'](map));
            let _0x263023 = $(_0x49294f(0x24c))[_0x49294f(0x378)]()[_0x49294f(0x287)](_0x49294f(0x11f)),
                _0x9fddb4 = $('[id^=\x27daum-maps-shape-\x27]')['parent']()[_0x49294f(0x287)](_0x49294f(0x2ea));
            if (_0x263023 != 0x1869f) $(_0x49294f(0x24c))[_0x49294f(0x378)]()['css'](_0x49294f(0x11f), 0x1869f);
            if (_0x9fddb4 != _0x49294f(0x250)) $(_0x49294f(0x24c))[_0x49294f(0x378)]()[_0x49294f(0x287)](_0x49294f(0x2ea), _0x49294f(0x250));
            h_setTopTempWhiteCircleOrShape2();
            return;
        } else {}
    }, 0x320);
}

function h_removeTopTempWhiteShape() {
    const _0x1263d7 = _0x3a1a23;
    h_removeTopTempWhiteShape2();
    if (h_oTempWhiteShape_ForTop == null) return;
    h_oTempWhiteShape_ForTop[_0x1263d7(0x328)](null), h_oTempWhiteShape_ForTop = null;
}
let m_hoTopTempWhiteCircleOrShapeToTopSVG_ori = null,
    m_hoTopTempWhiteCircleOrShapeToTopSVG = null,
    m_h_bTopTempWhiteCircleOrShape = ![];

function h_setTopTempWhiteCircleOrShape2() {
    const _0xf29aa5 = _0x3a1a23;
    if (m_hoTopTempWhiteCircleOrShapeToTopSVG == null) {
        let _0x486ad6 = $(_0xf29aa5(0x24c))[_0xf29aa5(0x378)]()[_0xf29aa5(0x378)]()[_0xf29aa5(0x241)]();
        m_hoTopTempWhiteCircleOrShapeToTopSVG = $(_0xf29aa5(0x24c))[_0xf29aa5(0x378)]()[_0xf29aa5(0x241)](), m_hoTopTempWhiteCircleOrShapeToTopSVG_ori = $(_0xf29aa5(0x24c))[_0xf29aa5(0x378)](), _0x486ad6['empty'](), m_hoTopTempWhiteCircleOrShapeToTopSVG['empty'](), _0x486ad6[_0xf29aa5(0x28b)](m_hoTopTempWhiteCircleOrShapeToTopSVG), $(_0xf29aa5(0x24c))[_0xf29aa5(0x378)]()[_0xf29aa5(0x378)]()[_0xf29aa5(0x378)]()[_0xf29aa5(0x28b)](_0x486ad6), _0x486ad6[_0xf29aa5(0x287)](_0xf29aa5(0x11f), 0x2), _0x486ad6['css'](_0xf29aa5(0x2ea), 'none'), _0x486ad6 = null;
    }
    m_hoTopTempWhiteCircleOrShapeToTopSVG[_0xf29aa5(0x2df)](), m_hoTopTempWhiteCircleOrShapeToTopSVG[_0xf29aa5(0x287)]('left', m_hoTopTempWhiteCircleOrShapeToTopSVG_ori[_0xf29aa5(0x287)](_0xf29aa5(0x173))), m_hoTopTempWhiteCircleOrShapeToTopSVG[_0xf29aa5(0x287)](_0xf29aa5(0x37f), m_hoTopTempWhiteCircleOrShapeToTopSVG_ori[_0xf29aa5(0x287)]('top')), m_hoTopTempWhiteCircleOrShapeToTopSVG['css'](_0xf29aa5(0x2d3), m_hoTopTempWhiteCircleOrShapeToTopSVG_ori[_0xf29aa5(0x287)](_0xf29aa5(0x2d3))), m_hoTopTempWhiteCircleOrShapeToTopSVG[_0xf29aa5(0x287)](_0xf29aa5(0x25f), m_hoTopTempWhiteCircleOrShapeToTopSVG_ori[_0xf29aa5(0x287)](_0xf29aa5(0x25f)));
    let _0xc04cf3 = m_hoTopTempWhiteCircleOrShapeToTopSVG_ori[0x0][_0xf29aa5(0x1ff)][_0xf29aa5(0x33a)][_0xf29aa5(0x2d3)],
        _0x14306f = m_hoTopTempWhiteCircleOrShapeToTopSVG_ori[0x0][_0xf29aa5(0x1ff)][_0xf29aa5(0x33a)][_0xf29aa5(0x25f)];
    m_hoTopTempWhiteCircleOrShapeToTopSVG[0x0][_0xf29aa5(0x386)](_0xf29aa5(0x1ff), _0xf29aa5(0xe5) + '\x20' + _0xc04cf3 + '\x20' + _0x14306f);
    let _0x5a3bab = null,
        _0x232db6 = $(_0xf29aa5(0x24c))[_0xf29aa5(0x363)];
    for (let _0x5d8fd1 = 0x0; _0x5d8fd1 < _0x232db6; _0x5d8fd1++) {
        if ($(_0xf29aa5(0x24c))[_0x5d8fd1]['zIndex'] == 0x96b43e) {
            _0x5a3bab = $('[id^=\x27daum-maps-shape-\x27]')[_0x5d8fd1];
            break;
        }
    }
    h_oTempWhiteCircle_ForTop != null && (h_oTempWhiteCircle_ForTop['setMap'](null), h_oTempWhiteCircle_ForTop = null), h_oTempWhiteShape_ForTop != null && (h_oTempWhiteShape_ForTop['setMap'](null), h_oTempWhiteShape_ForTop = null), m_hoTopTempWhiteCircleOrShapeToTopSVG[_0xf29aa5(0x28b)](_0x5a3bab), _0x5a3bab = null, m_h_bTopTempWhiteCircleOrShape = !![], _h_mb_setOpacityForUserCircleOrShapeResize(![]);
}

function h_removeTopTempWhiteCircle2() {
    const _0x3e9144 = _0x3a1a23;
    if (m_hoTopTempWhiteCircleOrShapeToTopSVG != null) m_hoTopTempWhiteCircleOrShapeToTopSVG[_0x3e9144(0x2df)]();
    m_h_bTopTempWhiteCircleOrShape = ![];
}

function h_removeTopTempWhiteShape2() {
    const _0x250403 = _0x3a1a23;
    if (m_hoTopTempWhiteCircleOrShapeToTopSVG != null) m_hoTopTempWhiteCircleOrShapeToTopSVG[_0x250403(0x2df)]();
    m_h_bTopTempWhiteShape = ![];
}
let _h_map_distance_measurement_drawing_mode = ![],
    _h_map_distance_measurement_drawingFlag = ![],
    _h_map_distance_measurement_moveLine = null,
    _h_map_distance_measurement_clickLine = [],
    _h_map_distance_measurement_distanceOverlay = null,
    _h_map_distance_measurement_dots = [],
    _h_map_distance_measurement_FinishOverlay = [],
    _h_map_distance_measurement_aID = [],
    _h_map_distance_measurement_sTmpID = '';

function H_map_distance_measurement_StartDraw() {
    const _0x57f944 = _0x3a1a23;
    _h_map_distance_measurement_drawing_mode = !![], _h_map_distance_measurement_sTmpID = Date['now']() + Math[_0x57f944(0x365)](), _h_userArea_Non_Interactive_ODLayer(), _h_userArea_Non_Interactive_PTLayer(), _h_userArea_Non_Interactive_DensityLayer();
}

function H_map_distance_measurement_DeleteTotalDraw() {
    _h_map_distance_measurement_drawing_mode = ![], H_map_distance_measurement_delete_clickLine(), H_map_distance_measurement_deleteDistnce(), H_map_distance_measurement_deleteCircleDot(), H_map_distance_measurement_deleteTotalDistnce(), H_map_distance_measurement_deleteID(), _h_userArea_Set_Interactive_ODLayer(), _h_userArea_Set_Interactive_PTLayer(), _h_userArea_Set_Interactive_DensityLayer();
}

function H_map_distance_measurement_DeleteDrawByID(_0x158843) {
    const _0x1fca9c = _0x3a1a23;
    let _0x45ea2e = -0x1;
    for (i = 0x0; i < _h_map_distance_measurement_aID['length']; i++) {
        if (_h_map_distance_measurement_aID[i] == _0x158843) {
            _0x45ea2e = i;
            break;
        }
    }
    if (_0x45ea2e < 0x0) return;
    _h_map_distance_measurement_clickLine[_0x45ea2e]['setMap'](null), _h_map_distance_measurement_clickLine[_0x1fca9c(0x3e3)](_0x45ea2e, 0x1), _h_map_distance_measurement_FinishOverlay[_0x45ea2e]['setMap'](null), _h_map_distance_measurement_FinishOverlay['splice'](_0x45ea2e, 0x1), _h_map_distance_measurement_aID[_0x1fca9c(0x3e3)](_0x45ea2e, 0x1);
    let _0x35d592 = _h_map_distance_measurement_dots['length'];
    for (i = _0x35d592 - 0x1; i >= 0x0; i--) {
        if (_0x158843 == _h_map_distance_measurement_dots[i]['id']) {
            if (_h_map_distance_measurement_dots[i]['circle']) _h_map_distance_measurement_dots[i][_0x1fca9c(0xc8)][_0x1fca9c(0x328)](null);
            if (_h_map_distance_measurement_dots[i][_0x1fca9c(0x1a1)]) _h_map_distance_measurement_dots[i][_0x1fca9c(0x1a1)]['setMap'](null);
            _h_map_distance_measurement_dots['splice'](i, 0x1);
        }
    }
}

function H_map_distance_measurement_ClickMap(_0x58a926) {
    const _0x2f39ce = _0x3a1a23;
    let _0x42415e = _0x58a926[_0x2f39ce(0x2fa)];
    H_map_distance_measurement_ClickMap2(_0x42415e), _0x58a926 = null, _0x42415e = null;
}

function H_map_distance_measurement_ClickMap2(_0x58a3ae) {
    const _0x2da858 = _0x3a1a23;
    if (!_h_map_distance_measurement_drawingFlag) _h_map_distance_measurement_drawingFlag = !![], _h_map_distance_measurement_clickLine[_0x2da858(0x29a)](new kakao[(_0x2da858(0x12a))]['Polyline']({
        'map': map,
        'path': [_0x58a3ae],
        'strokeWeight': 0x3,
        'strokeColor': _0x2da858(0x2ee),
        'strokeOpacity': 0x1,
        'strokeStyle': 'solid'
    })), _h_map_distance_measurement_moveLine = new kakao[(_0x2da858(0x12a))][(_0x2da858(0x3cf))]({
        'strokeWeight': 0x3,
        'strokeColor': '#db4040',
        'strokeOpacity': 0.5,
        'strokeStyle': _0x2da858(0x2e4)
    }), H_map_distance_measurement_displayCircleDot(_0x58a3ae, 0x0, _h_map_distance_measurement_sTmpID);
    else {
        let _0x23c9e6 = _h_map_distance_measurement_clickLine[_h_map_distance_measurement_clickLine[_0x2da858(0x363)] - 0x1]['getPath']();
        _0x23c9e6[_0x2da858(0x29a)](_0x58a3ae), _h_map_distance_measurement_clickLine[_h_map_distance_measurement_clickLine['length'] - 0x1]['setPath'](_0x23c9e6);
        let _0x16e0ed = Math[_0x2da858(0x2b7)](_h_map_distance_measurement_clickLine[_h_map_distance_measurement_clickLine[_0x2da858(0x363)] - 0x1]['getLength']());
        H_map_distance_measurement_displayCircleDot(_0x58a3ae, _0x16e0ed, _h_map_distance_measurement_sTmpID);
    }
}

function H_map_distance_measurement_MouseMoveMap(_0x363736) {
    const _0x5b22e9 = _0x3a1a23;
    let _0x546833 = _0x363736[_0x5b22e9(0x2fa)];
    H_map_distance_measurement_MouseMoveMap2(_0x546833), _0x546833 = null, _0x363736 = null;
}

function H_map_distance_measurement_MouseMoveMap2(_0x91de6f) {
    const _0xee79d8 = _0x3a1a23;
    if (_h_map_distance_measurement_drawingFlag) {
        let _0x217502 = _h_map_distance_measurement_clickLine[_h_map_distance_measurement_clickLine[_0xee79d8(0x363)] - 0x1][_0xee79d8(0x2a5)](),
            _0x182a89 = [_0x217502[_0x217502[_0xee79d8(0x363)] - 0x1], _0x91de6f];
        _h_map_distance_measurement_moveLine[_0xee79d8(0x20f)](_0x182a89), _h_map_distance_measurement_moveLine[_0xee79d8(0x328)](map);
        let _0x22b681 = Math[_0xee79d8(0x2b7)](_h_map_distance_measurement_clickLine[_h_map_distance_measurement_clickLine[_0xee79d8(0x363)] - 0x1]['getLength']() + _h_map_distance_measurement_moveLine[_0xee79d8(0x38d)]()),
            _0x470664 = '<div\x20class=\x22dotOverlay\x20distanceInfo\x22>총거리\x20<span\x20class=\x22number\x22>' + _0x22b681 + _0xee79d8(0x306);
        H_map_distance_measurement_showDistance(_0x470664, _0x91de6f);
    }
}

function H_map_distance_measurement_ReceiveFinishMessage() {
    _h_userArea_Set_Interactive_ODLayer(), _h_userArea_Set_Interactive_PTLayer(), _h_userArea_Set_Interactive_DensityLayer();
}

function H_map_distance_measurement_Finish(_0x269bdd) {
    H_map_distance_measurement_Finish2(), _0x269bdd = null;
}

function H_map_distance_measurement_Finish2() {
    const _0x5b3279 = _0x3a1a23;
    if (_h_map_distance_measurement_drawingFlag) {
        let _0x5e98d3 = _h_map_distance_measurement_sTmpID;
        _h_map_distance_measurement_aID[_0x5b3279(0x29a)](_0x5e98d3), _h_map_distance_measurement_moveLine[_0x5b3279(0x328)](null), _h_map_distance_measurement_moveLine = null;
        let _0x13665f = _h_map_distance_measurement_clickLine[_h_map_distance_measurement_clickLine[_0x5b3279(0x363)] - 0x1][_0x5b3279(0x2a5)]();
        if (_0x13665f['length'] > 0x1) {
            _h_map_distance_measurement_dots[_h_map_distance_measurement_dots['length'] - 0x1][_0x5b3279(0x1a1)] && (_h_map_distance_measurement_dots[_h_map_distance_measurement_dots[_0x5b3279(0x363)] - 0x1][_0x5b3279(0x1a1)][_0x5b3279(0x328)](null), _h_map_distance_measurement_dots[_h_map_distance_measurement_dots['length'] - 0x1][_0x5b3279(0x1a1)] = null);
            let _0x3aeaa9 = Math[_0x5b3279(0x2b7)](_h_map_distance_measurement_clickLine[_h_map_distance_measurement_clickLine[_0x5b3279(0x363)] - 0x1][_0x5b3279(0x38d)]()),
                _0x1afef0 = H_map_distance_measurement_getTimeHTML(_0x3aeaa9, _0x5e98d3);
            H_map_distance_measurement_showDistance_ForFinish(_0x1afef0, _0x13665f[_0x13665f['length'] - 0x1]);
        } else H_map_distance_measurement_delete_clickLine(), H_map_distance_measurement_deleteCircleDot(), H_map_distance_measurement_deleteDistnce();
        _h_map_distance_measurement_drawingFlag = ![], _h_map_distance_measurement_drawing_mode = ![], __sendMessageFinishDrawDistance(), _0x5e98d3 = null;
    }
}

function H_map_distance_measurement_getCoords() {
    const _0xb94313 = _0x3a1a23;
    let _0x4b5608 = '',
        _0x27ce65, _0x2a0117;
    _h_map_distance_measurement_clickLine[_0xb94313(0x363)];
    for (_0x27ce65 = 0x0; _0x27ce65 < _h_map_distance_measurement_clickLine[_0xb94313(0x363)]; _0x27ce65++) {
        let _0x592ad6 = _h_map_distance_measurement_clickLine[_0x27ce65][_0xb94313(0x2a5)](),
            _0x15ff00 = '';
        for (_0x2a0117 = 0x0; _0x2a0117 < _0x592ad6[_0xb94313(0x363)]; _0x2a0117++) {
            if (_0x15ff00 != '') _0x15ff00 += ',';
            _0x15ff00 += _0x592ad6[_0x2a0117][_0xb94313(0x387)]() + '^' + _0x592ad6[_0x2a0117][_0xb94313(0xac)]();
        }
        if (_0x4b5608 != '') _0x4b5608 += _0xb94313(0xa9);
        _0x4b5608 += _0x15ff00, _0x15ff00 = null;
    }
    return _0x4b5608;
}

function H_map_distance_measurement_sendCoords() {
    let _0x4b1553 = H_map_distance_measurement_getCoords();
    __sendMessageGetDistanceCoords(_0x4b1553), _0x4b1553 = null;
}

function H_map_distance_measurement_setCoords(_0x3a357a, _0x146f46 = ![]) {
    const _0x60bc1d = _0x3a1a23;
    if (_0x146f46 == ![]) H_map_distance_measurement_DeleteTotalDraw();
    let _0x1b4bf9 = _0x3a357a[_0x60bc1d(0x1c4)](_0x60bc1d(0xa9)),
        _0x53b79f, _0x3d4e9d;
    for (_0x53b79f = 0x0; _0x53b79f < _0x1b4bf9[_0x60bc1d(0x363)]; _0x53b79f++) {
        H_map_distance_measurement_StartDraw();
        let _0x41e0c6 = _0x1b4bf9[_0x53b79f][_0x60bc1d(0x1c4)](',');
        for (_0x3d4e9d = 0x0; _0x3d4e9d < _0x41e0c6[_0x60bc1d(0x363)]; _0x3d4e9d++) {
            let _0x3773ca = new kakao[(_0x60bc1d(0x12a))]['LatLng'](parseFloat(_0x41e0c6[_0x3d4e9d][_0x60bc1d(0x1c4)]('^')[0x1]), parseFloat(_0x41e0c6[_0x3d4e9d]['split']('^')[0x0]));
            H_map_distance_measurement_ClickMap2(_0x3773ca), _0x3773ca = null;
        }
        H_map_distance_measurement_Finish2(), _h_map_distance_measurement_drawing_mode = ![], _0x41e0c6 = null;
    }
    _0x1b4bf9 = null;
}

function H_map_distance_measurement_delete_clickLine() {
    const _0x5cd5d3 = _0x3a1a23;
    let _0x344cef;
    for (_0x344cef = 0x0; _0x344cef < _h_map_distance_measurement_clickLine[_0x5cd5d3(0x363)]; _0x344cef++) {
        _h_map_distance_measurement_clickLine[_0x344cef] && _h_map_distance_measurement_clickLine[_0x344cef][_0x5cd5d3(0x328)](null);
    }
    _h_map_distance_measurement_clickLine = [];
}

function H_map_distance_measurement_showDistance(_0x1db8a7, _0x97b288) {
    const _0x427491 = _0x3a1a23;
    _h_map_distance_measurement_distanceOverlay ? (_h_map_distance_measurement_distanceOverlay[_0x427491(0xea)](_0x97b288), _h_map_distance_measurement_distanceOverlay[_0x427491(0x286)](_0x1db8a7)) : _h_map_distance_measurement_distanceOverlay = new kakao[(_0x427491(0x12a))][(_0x427491(0x2b3))]({
        'map': map,
        'content': _0x1db8a7,
        'position': _0x97b288,
        'xAnchor': 0x0,
        'yAnchor': 0x0,
        'zIndex': 0xdbba3
    });
}

function H_map_distance_measurement_showDistance_ForFinish(_0x22a41e, _0x40ebb3) {
    const _0x2b4de2 = _0x3a1a23;
    _h_map_distance_measurement_FinishOverlay[_0x2b4de2(0x29a)](new kakao[(_0x2b4de2(0x12a))][(_0x2b4de2(0x2b3))]({
        'map': map,
        'content': _0x22a41e,
        'position': _0x40ebb3,
        'xAnchor': 0x0,
        'yAnchor': 0x0,
        'zIndex': 0xdbba9
    })), H_map_distance_measurement_deleteDistnce();
}

function H_map_distance_measurement_deleteDistnce() {
    const _0x8ae22e = _0x3a1a23;
    _h_map_distance_measurement_distanceOverlay && (_h_map_distance_measurement_distanceOverlay[_0x8ae22e(0x328)](null), _h_map_distance_measurement_distanceOverlay = null);
}

function H_map_distance_measurement_deleteTotalDistnce() {
    const _0x1293b7 = _0x3a1a23;
    let _0x5c2a86;
    for (_0x5c2a86 = 0x0; _0x5c2a86 < _h_map_distance_measurement_FinishOverlay['length']; _0x5c2a86++) {
        _h_map_distance_measurement_FinishOverlay[_0x5c2a86] && _h_map_distance_measurement_FinishOverlay[_0x5c2a86][_0x1293b7(0x328)](null);
    }
    _h_map_distance_measurement_FinishOverlay = [];
}

function H_map_distance_measurement_deleteID() {
    _h_map_distance_measurement_aID = [];
}

function H_map_distance_measurement_displayCircleDot(_0x5ca421, _0x4e0748, _0x320283) {
    const _0x3d5151 = _0x3a1a23;
    let _0x4eeac1 = new kakao[(_0x3d5151(0x12a))][(_0x3d5151(0x2b3))]({
        'content': '<span\x20class=\x22dot\x22></span>',
        'position': _0x5ca421,
        'zIndex': 0xdbba1
    });
    _0x4eeac1[_0x3d5151(0x328)](map);
    let _0x2c0ebe = null;
    _0x4e0748 > 0x0 && (_0x2c0ebe = new kakao[(_0x3d5151(0x12a))][(_0x3d5151(0x2b3))]({
        'content': _0x3d5151(0x23d) + _0x4e0748 + _0x3d5151(0x306),
        'position': _0x5ca421,
        'yAnchor': 0x1,
        'zIndex': 0xdbba2,
        'disableDoubleClickZoom': ![]
    }), _0x2c0ebe[_0x3d5151(0x328)](map)), _h_map_distance_measurement_dots[_0x3d5151(0x29a)]({
        'circle': _0x4eeac1,
        'distance': _0x2c0ebe,
        'id': _0x320283
    });
}

function H_map_distance_measurement_deleteCircleDot() {
    const _0x276f27 = _0x3a1a23;
    let _0xb60904;
    for (_0xb60904 = 0x0; _0xb60904 < _h_map_distance_measurement_dots[_0x276f27(0x363)]; _0xb60904++) {
        _h_map_distance_measurement_dots[_0xb60904][_0x276f27(0xc8)] && _h_map_distance_measurement_dots[_0xb60904][_0x276f27(0xc8)][_0x276f27(0x328)](null), _h_map_distance_measurement_dots[_0xb60904][_0x276f27(0x1a1)] && _h_map_distance_measurement_dots[_0xb60904][_0x276f27(0x1a1)][_0x276f27(0x328)](null);
    }
    _h_map_distance_measurement_dots = [];
}

function H_map_distance_measurement_getTimeHTML(_0x4d0996, _0x23f49a) {
    const _0x150300 = _0x3a1a23;
    let _0x2ff577 = _0x4d0996 / 0x43 | 0x0,
        _0x21a627 = '',
        _0x2a4cc9 = '';
    _0x2ff577 > 0x3c && (_0x21a627 = '<span\x20class=\x22number\x22>' + Math[_0x150300(0x17e)](_0x2ff577 / 0x3c) + _0x150300(0x1d5));
    _0x2a4cc9 = _0x150300(0x234) + _0x2ff577 % 0x3c + _0x150300(0x1b7);
    let _0x134ef7 = _0x4d0996 / 0xe3 | 0x0,
        _0x19a393 = '',
        _0x5ce80d = '';
    _0x134ef7 > 0x3c && (_0x19a393 = '<span\x20class=\x22number\x22>' + Math['floor'](_0x134ef7 / 0x3c) + '</span>시간\x20');
    _0x5ce80d = _0x150300(0x234) + _0x134ef7 % 0x3c + _0x150300(0x1b7);
    let _0x1e3fb9 = _0x150300(0x110);
    return _0x1e3fb9 += _0x150300(0x162), _0x1e3fb9 += _0x150300(0x183), _0x1e3fb9 += '\x20\x20\x20\x20<li>', _0x1e3fb9 += '\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22label\x22>총거리</span><span\x20class=\x22number\x22>' + _0x4d0996 + _0x150300(0x313), _0x1e3fb9 += _0x150300(0x183), _0x1e3fb9 += '\x20\x20\x20\x20<li>', _0x1e3fb9 += '\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22label\x22>도보</span>' + _0x21a627 + _0x2a4cc9, _0x1e3fb9 += '\x20\x20\x20\x20</li>', _0x1e3fb9 += '\x20\x20\x20\x20<li>', _0x1e3fb9 += _0x150300(0x25a) + _0x19a393 + _0x5ce80d, _0x1e3fb9 += '\x20\x20\x20\x20</li>', _0x1e3fb9 += _0x150300(0x1e5) + _0x23f49a + _0x150300(0xc1), _0x1e3fb9 += _0x150300(0x119), _0x1e3fb9 += _0x150300(0x183), _0x1e3fb9 += _0x150300(0x1c2), _0x1e3fb9;
}

function H_map_distance_measurement_removeLineByEvent(_0x335e2e) {
    H_map_distance_measurement_DeleteDrawByID(_0x335e2e);
}
let _h_map_distance_measurement_workpath_mode = ![],
    _h_map_distance_measurement_workpath_start_Marker = null,
    _h_map_distance_measurement_workpath_end_Marker = null;

function H_map_distance_measurement_StartWorkPath() {
    _h_map_distance_measurement_workpath_mode = !![], H_map_distance_measurement_RemoveMarker(), _h_userArea_Non_Interactive_ODLayer(), _h_userArea_Non_Interactive_PTLayer(), _h_userArea_Non_Interactive_DensityLayer();
}

function H_map_distance_measurement_ClickMapForWorkPath(_0x49cc1d) {
    const _0x2bb6ce = _0x3a1a23;
    let _0x3ab6ff = _0x49cc1d[_0x2bb6ce(0x2fa)];
    if (_h_map_distance_measurement_workpath_start_Marker == null) _h_map_distance_measurement_workpath_start_Marker = new kakao[(_0x2bb6ce(0x12a))]['Marker']({
        'position': _0x3ab6ff,
        'zIndex': 0x1869f
    }), _h_map_distance_measurement_workpath_start_Marker[_0x2bb6ce(0x328)](map), __sendMessageDoneWorkPathStartPoint();
    else {
        _h_map_distance_measurement_workpath_end_Marker = new kakao[(_0x2bb6ce(0x12a))][(_0x2bb6ce(0xfc))]({
            'position': _0x3ab6ff,
            'zIndex': 0x1869f
        }), _h_map_distance_measurement_workpath_end_Marker[_0x2bb6ce(0x328)](map);
        let _0x2afb9b = _h_map_distance_measurement_workpath_start_Marker[_0x2bb6ce(0xc3)]()[_0x2bb6ce(0x387)]() + '^' + _h_map_distance_measurement_workpath_start_Marker[_0x2bb6ce(0xc3)]()[_0x2bb6ce(0xac)]() + '^' + _h_map_distance_measurement_workpath_end_Marker[_0x2bb6ce(0xc3)]()[_0x2bb6ce(0x387)]() + '^' + _h_map_distance_measurement_workpath_end_Marker[_0x2bb6ce(0xc3)]()[_0x2bb6ce(0xac)]();
        __sendMessageDoneWorkPathEndPoint(_0x2afb9b), _0x2afb9b = null;
    }
    _0x49cc1d = null, _0x3ab6ff = null;
}

function H_map_distance_measurement_DropWorkPath() {
    _h_map_distance_measurement_workpath_mode = ![], H_map_distance_measurement_RemoveMarker(), _h_userArea_Set_Interactive_ODLayer(), _h_userArea_Set_Interactive_PTLayer(), _h_userArea_Set_Interactive_DensityLayer();
}

function H_map_distance_measurement_FinishWorkPath(_0x278344) {
    H_map_distance_measurement_DropWorkPath(), H_map_distance_measurement_setCoords(_0x278344, !![]);
}

function H_map_distance_measurement_RemoveMarker() {
    _h_map_distance_measurement_workpath_start_Marker != null && (_h_map_distance_measurement_workpath_start_Marker['setMap'](null), _h_map_distance_measurement_workpath_start_Marker = null), _h_map_distance_measurement_workpath_end_Marker != null && (_h_map_distance_measurement_workpath_end_Marker['setMap'](null), _h_map_distance_measurement_workpath_end_Marker = null);
}