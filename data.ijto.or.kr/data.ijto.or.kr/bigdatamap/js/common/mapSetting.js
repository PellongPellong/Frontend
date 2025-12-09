const mapSetting = {
    centerLat: null,
    centerLng: null,
    pointLat: null,
    pointLng: null,
    categoryCoord: [],
    liveLat: null,
    liveLng: null,
    cctv: null,

    init() {
        // 중심좌표 지정
        this.centerLat = coordSetting.centerLat;
        this.centerLng = coordSetting.centerLng;

        // 지점좌표 지정
        this.pointLat = coordSetting.pointLat;
        this.pointLng = coordSetting.pointLng;

        // 카테고리 좌표 지정
        this.categoryCoord = coordSetting.categoryCoord;

        // 라이브 스트링 좌표 지정
        this.liveLat = coordSetting.liveLat;
        this.liveLng = coordSetting.liveLng;

        // CCTV 좌표 지정
        this.cctv = coordSetting.cctv;
    }
}

coordSetting.init(); // 좌표 세팅 실행
mapSetting.init(); // 맵 세팅 실행