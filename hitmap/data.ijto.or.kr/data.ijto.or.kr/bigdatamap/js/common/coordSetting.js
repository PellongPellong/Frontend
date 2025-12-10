/*

● 좌표정보
1. center는 중심좌표
2. point는 시청이나 구청좌표
3. category는 카테고리 좌표
4. live는 라이브 스트리밍 좌표

*/


/* 좌표는 여기에 추가하면 됩니다. */
const coordList = {
    jeju: {
        pointLat: 33.4892792,
        pointLng: 126.4983426,
        categoryCoord: [{
            lat: 33.4892792,
            lng: 26.4983426,
            radius: 3000
        }, ],
        liveLat: 33.4892792,
        liveLng: 127.3372000,
        cctv: {
            minX: 126.13175355564287,
            maxX: 127.057362871025,
            minY: 33.111369748583236,
            maxY: 33.52034914045218
        }
    },
}


/* 이 코드는 고정 코드입니다. */
const coordSetting = {
    centerLat: null,
    centerLng: null,
    pointLat: null,
    pointLng: null,
    categoryCoord: [],
    liveLat: null,
    liveLng: null,
    cctv: null,

    init() {
        let link = location.href;
        let siteCode = link.split("/")[5];

        // 중심좌표 지정
        // this.centerLat = mapOption.center.Ma;
        // this.centerLng = mapOption.center.La;
        this.centerLat = coordList[siteCode].pointLat;
        this.centerLng = coordList[siteCode].pointLng;

        // 지점(시청이나 구청)좌표 지정
        this.pointLat = coordList[siteCode].pointLat;
        this.pointLng = coordList[siteCode].pointLng;

        // 카테고리 좌표 지정
        this.categoryCoord = coordList[siteCode].categoryCoord;

        // 라이브 스트링 좌표 지정
        this.liveLat = coordList[siteCode].liveLat;
        this.liveLng = coordList[siteCode].liveLng;

        // CCTV 좌표 지정
        this.cctv = coordList[siteCode].cctv;
    }
}