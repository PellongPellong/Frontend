let today_Year, today_month, today_date, today_hour, today_min, today_sec, today_day;
const dayOfWeek = new Date().getDay();

let new_today_hour;
let new_today_min;

function timeReset(dateDom, timeDom) {
    return $.ajax({
        url: 'https://mms.gislab.co.kr:444/mms_new/GEONET.getTimeStamp.php',
        success: function(data) {
            let split_res = data.split('^')[0];
            today_Year = split_res.slice(0, 4);
            today_month = split_res.slice(4, 6);
            today_date = split_res.slice(6, 8);
            today_hour = split_res.slice(8, 10);
            today_min = split_res.slice(10, 12);
            today_sec = split_res.slice(12, 14);

            new_today_hour = today_hour;
            new_today_min = today_min;

            if (dateDom) {
                dateDom.textContent = today_Year + "." + today_month + "." + today_date + ".(" + curDay() + ")";
            }
            timeDom.textContent = "Update. " + today_hour + "시 " + today_min + "분 기준";
        },
        error: function(xhr) {
            alert("상태 : " + xhr.status);
        },
    });

}

function curDay() {
    let day;
    switch (dayOfWeek) {
        case 0:
            {
                day = "일"
                break;
            }
        case 1:
            {
                day = "월"
                break;
            }
        case 2:
            {
                day = "화"
                break;
            }
        case 3:
            {
                day = "수"
                break;
            }
        case 4:
            {
                day = "목"
                break;
            }
        case 5:
            {
                day = "금"
                break;
            }
        case 6:
            {
                day = "토"
                break;
            }

    }
    return day;
}

// 날씨 
function setWeather(lat, lng) {
    $.ajax({
        url: 'https://mms.gislab.co.kr:444/mms_new/weather/getWeather.php?LNG=' + lng + '&LAT=' + lat,
        success: function(data) {
            const weatherData = [
                ["sunny", "맑음-없음"],
                ["sunny-cloudy", "구름많음-없음"],
                ["cloudy", "흐림-없음"],
                ["sunny-rainy", "맑음-비", "맑음-비/눈", "맑음-소나기", "맑음-빗방울"],
                ["sunny-snow", "맑음-눈", "맑음-빗방울/눈날림", "맑음-눈날림"],
                ["drizzle", "구름많음-비", "구름많음-비/눈", "구름많음-소나기", "구름많음-빗방울"],
                ["snow", "구름많음-눈", "구름많음-빗방울/눈날림", "구름많음-눈날림", "흐림-눈", "흐림-빗방울/눈날림", "흐림-눈날림"],
                ["rainy", "흐림-비", "흐림-비/눈", "흐림-소나기", "흐림-빗방울"]
            ];

            const split_data = data.split("|")
            const current_data = [split_data[0], split_data[1].split("^")[1], split_data[2].split("^")[1], split_data[5].split("^")[1]];
            const next_data = [split_data[10], split_data[11].split("^")[1], split_data[12].split("^")[1], split_data[15].split("^")[1]];
            const weather = [current_data[1] + "-" + current_data[2], next_data[1] + "-" + next_data[2]];

            weather.forEach((item, i) => {
                let dom = i == 0 ? ".current" : ".next";
                let temp = i == 0 ? current_data[3] : next_data[3];
                weatherData.forEach((data, k) => {
                    if (data.includes(item)) {
                        document.querySelector(".head-sub").querySelector(dom).querySelector(".weather").classList.add(data[0]);
                        document.querySelector(".head-sub").querySelector(dom).querySelector(".celsius").textContent = temp + "°";
                    }
                })
            })
        },
        error: function(xhr) {
            alert("상태 : " + xhr.status);
        },
    });
}