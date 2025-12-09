class LocationListLoad {
    constructor(info = {}) {
        this.wrap = info.wrap;
        this.wrapDom = document.querySelector("#" + this.wrap)
        this.url = info.url;
        this.markerDataArray = []
    }

    init() {
        this.dataArray = []
        this.markerDataArray = []
        this.wrapDom.querySelector(".location-list").innerHTML = ""
        $.ajax({
            url: this.url,
            success: (response) => {
                const parseArray = JSON.parse(response)
                console.log("parseArray", parseArray)
                parseArray.linkData.map((data) => {
                    let x = data.positionX;
                    let y = data.positionY;
                    if (data.positionY > 100) {
                        data.positionX = y;
                        data.positionY = x;
                    }
                    return data;
                })
                this.dataArray = [...parseArray.linkData]
                this.createList()
            },
            error: (error) => {
                console.log(error)
            }
        })
    }

    async createList() {
        await this.createLiDom();
        this.popDataLoad();
        this.listClickEvent();
        this.addMarkerForMap(); // top10 gis 지도 연결 

    }

    createLiDom() {
        return new Promise((resolve, reject) => {
            try {
                this.dataArray.forEach((data, index) => {

                    const li = document.createElement("li")
                    li.className = "location-item";
                    li.innerHTML = this.createLinkDom(data, index)
                    this.wrapDom.querySelector(".location-list").append(li);
                    const markerData = {
                        spotNm: [data.name],
                        lat: data.positionX,
                        lot: data.positionY,
                        img: data.imgUrl,
                        addr: data.address_load,
                        se: this.wrap,
                        radius: data.radius
                    }
                    this.markerDataArray.push(markerData)
                })
                resolve(null)
            } catch (error) {
                reject(error)
                console.log(error)
            }
        })

    }

    createLinkDom(data, index) {
        let dateTag = "";
        let popSum = data.population
        popSum = popSum.toLocaleString()
        if (data.eventEndDate != "-") {

            let eventEndTag = data.eventEndDate.split("-");
            let eventStartTag = data.eventStartDate.split("-");
            dateTag = `<span class="info-period">(${eventStartTag[0]}. ${eventStartTag[1]}. ${eventStartTag[2]}. ~ ${eventEndTag[0]}. ${eventEndTag[1]}. ${eventEndTag[2]}.)</span>`
        }
        const tag = `
        <a href="#" class="location-link">
            <span class="link-num">${index+1}</span>
            <div class="link-img">
                <img src="${data.imgUrl}" alt="">
            </div>
            <div class="link-info">
                <strong class="info-title">${data.name}</strong>
                ${dateTag }
                <div class="info-detail">
                 <span class="detail-num">${data.population.toLocaleString()}명</span>
                </div>
            </div>
        </a>
       `
        return tag;
    }

    popDataLoad() {
        this.dataArray.forEach((data, index) => {
            $.ajax({
                url: "https://jeju.mms.gislab.co.kr/mms_new/GEONET.getAreaWeekInfoByLatlng.php?X=" + data.positionX + "&Y=" + data.positionY + "&R=" + data.radius,
                success: (response) => {
                    let dataArray;
                    let popSum = 0;
                    let outPopSum2 = 0;
                    let prevSum;
                    let outPopSum = 0;

                    try {
                        const dayOfWeek = new Date().getDay();
                        dataArray = JSON.parse(response);
                        console.log(dataArray, "상세 남녀 인구")
                        popSum = dataArray[0].IN_NOW_POP_SUM + dataArray[8].OUT_NOW_POP_SUM;
                        let popSum2 = 0;

                        for (let key in dataArray[8]) {
                            if (key.indexOf("_SUM") > -1) continue;
                            outPopSum += Math.round(dataArray[8][key])
                        }

                        // outPopSum = dataArray[8].OUT_NOW_POP_SUM
                        prevSum = dataArray[dayOfWeek + 1][today_hour] + dataArray[dayOfWeek + 9][today_hour]

                        if (dataArray[dayOfWeek + 1][today_hour] == 0 || dataArray[dayOfWeek + 9][today_hour] == 0) {
                            throw new Error("데이터 0")
                        }
                        let popDiff = (popSum / prevSum);

                        let diffClass = popDiff > 1 ? "up" : "down";
                        diffClass = popDiff == 1 ? "" : diffClass
                        popSum = Math.round(popSum);
                        popDiff = popDiff > 1 ? Math.ceil(popDiff * 100) / 100 : Math.floor(popDiff * 100) / 100
                        const result = {
                            data,
                            popSum,
                            popDiff,
                            diffClass,
                            index
                        }

                        const span = document.createElement("span")
                        span.className = "detail-contrast"
                        const spanText = "지난주대비 " + popDiff + "배"
                        span.innerHTML = spanText;
                        console.log(this.wrapDom.querySelectorAll(".location-link")[index].querySelector(".info-title").textContent)
                        this.wrapDom.querySelectorAll(".location-link")[index].querySelector(".detail-num").textContent = outPopSum.toLocaleString() + "명"
                        this.wrapDom.querySelectorAll(".location-link")[index].classList.add(diffClass)
                        // this.wrapDom.querySelectorAll(".location-link")[index].querySelector(".link-info .info-detail .detail-num").textContent = Math.round(outPopSum).toLocaleString() + "명"
                        this.wrapDom.querySelectorAll(".location-link")[index].querySelector(".link-info .info-detail").append(span)

                    } catch (error) {
                        console.log("로드 에러", error)
                    }
                },
                error: (error) => {
                    console.log("상세 남녀 인구 api 에러", error)
                }
            })
        })
    }

    listClickEvent() {
        this.wrapDom.querySelectorAll(".location-list .location-item").forEach((item, i) => {
            const link = item.querySelector(".location-link");
            link.onclick = (e) => {
                e.preventDefault()
                window.parent.offSpecialButton();
                document.listForm.placeName.value = encodeURI(this.dataArray[i].name);
                document.listForm.position.value = encodeURI(this.dataArray[i].positionX + "/" + this.dataArray[i].positionY);
                document.listForm.addr.value = encodeURI(this.dataArray[i].address_load + "/" + this.dataArray[i].address);
                document.listForm.round.value = encodeURI(this.dataArray[i].radius);
                document.listForm.startDate.value = encodeURI(this.dataArray[i].eventStartDate);
                document.listForm.endDate.value = encodeURI(this.dataArray[i].eventEndDate);

                document.listForm.adjustRange.value = true

                let data2 = {
                    address_name: this.dataArray[i].address,
                    category_group_code: "",
                    category_group_name: "",
                    category_name: "",
                    distance: "",
                    id: "",
                    phone: "",
                    place_name: this.dataArray[i].name,
                    place_url: "",
                    road_address_name: this.dataArray[i].address_load,
                    x: this.dataArray[i].positionX,
                    y: this.dataArray[i].positionY,

                }
                // console.log(data2)
                mainMapMove(data2)
                listForm.submit()


            }
        })
    }

    addMarkerForMap() {
        const latArray = []
        const lotArray = []
        const addrArray = []

        const receiveData = []
        this.markerDataArray.forEach((data, i) => {

            if (latArray.indexOf(data.lat) > -1 && lotArray.indexOf(data.lot) > -1 && latArray.length > 0 && lotArray.length > 0) {

                receiveData[latArray.indexOf(data.lat)].spotNm.push(data.spotNm)


            } else if (addrArray.indexOf(data.addr) > -1 && addrArray.length > 0) {
                receiveData[addrArray.indexOf(data.addr)].spotNm.push(data.spotNm)
            } else {
                latArray.push(data.lat)
                lotArray.push(data.lot)
                addrArray.push(data.addr)
                receiveData.push(data)
            }

        })
        console.log(receiveData)

        window.parent.top10CategoryClick(this.wrap, receiveData)
    }
}