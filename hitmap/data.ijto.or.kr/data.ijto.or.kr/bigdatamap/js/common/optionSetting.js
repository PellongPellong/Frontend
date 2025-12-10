/* 아이프레임 URL */
const optionList = {
    jeju: {
        url: {
            left: '/bigdatamap/html/jeju/gis.jsp?CD=50&FILE=mms1_any_mega.biz&BIZ_PARA=COMPANY_ID&BIZ_PARA2=50_PUBLIC_MMS&LEGEND_LOCATION=LEFT&BASELEGEND=TRUE&MMS_PUBLIC=TRUE&MOVE=TRUE',
            right: '/bigdatamap/html/jeju/gis.jsp?CD=50&FILE=mms2_any_mega.biz&BIZ_PARA=COMPANY_ID&BIZ_PARA2=50_PUBLIC_MMS&LEGEND_LOCATION=RIGHT&BASELEGEND=TRUE&MMS_PUBLIC=TRUE&MOVE=TRUE',
        },
        ai: false,
        live: false,
        centerPosition: {
            lat: 33.4892792,
            lng: 126.4983426,
        }
    },
}

const optionSetting = {
    url: null,
    ai: null,
    live: null,
    init() {
        let link = location.href;
        let siteCode = link.split("/")[4];
        this.url = optionList[siteCode].url;
        this.ai = optionList[siteCode].ai;
        this.live = optionList[siteCode].live;
        this.centerPosition = optionList[siteCode].centerPosition;
    }
}