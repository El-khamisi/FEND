const $ = require('jquery')
const main = $('#main')
import noimg from '../assets/noimg.jpg'


/**
 * Function to create DOM element represent a trip's data
 * @param Json_img_obj
 * @param Json_weather_data_obj
 * @param days_to_trip
 */
function fillData(img, info, diff) {

    const data = info.data[0];

    let url = noimg;
    let div = '';
    if (img.total != 0) {
        url = img.hits[0].largeImageURL;
    }

    //Check How long will the journey take
    if (diff > 7) {
        div =
            `
    <div class="trip ${info.city_name}">
        <img src=${url}>
        <div>
        <p>
        A trip to ${info.city_name} after ${diff}Days.<br>
        *Latitude: ${info.lat}<br>
        *Longitude: ${info.lon}.<br>
        Temperature: ${data.temp}C <br>
        Weather: <img src=https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png width="20" height="20"> ${data.weather.description}<br>
        With Relative humidity ${data.rh}%
        </p>
        </div>
        <button id="${info.city_name}">delete</button>

    </div>
`;
    } else {
        div =
            `
    <div class="trip ${data.city_name}">
        <img src=${url}>
        <div>
        <p>
        A trip to ${data.city_name} after ${diff}Days.<br>
        *Latitude: ${data.lat}<br>
        *Longitude: ${data.lon}.<br>
        Temperature: ${data.temp}C <br>
        Weather: <img src=https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png width="20" height="20"> ${data.weather.description}<br>
        With Relative humidity ${data.rh}%
        </p>
        </div>
        <button id="${data.city_name}">delete</button>

    </div>
    `;
    }


    main.append(div);
    $(`#${data.city_name}`).on('click', (event) => {
        event.preventDefault();
        $(`.${data.city_name}`).hide();
    })

}


export {
    fillData
}