const $ = require('jquery')
const main = $('#main')
import noimg from '../assets/noimg.jpg'


function fillData(img, info) {

    const data = info.data[0];

    let url = noimg;
    if (img.total != 0) {
        url = img.hits[0].largeImageURL;
    }
    const div =
        `
    <div class="trip ${data.city_name}">
        <img src=${url}>
        <div>
        <p>
        City name: ${data.city_name}<br>
        Temperature: ${data.temp}C <br>
        Weather: ${data.weather.description}
        </p>
        </div>
        <button id="${data.city_name}">delete</button>

    </div>
    `;
    main.append(div);
    $(`#${data.city_name}`).on('click', (event) => {
        event.preventDefault();
        $(`.${data.city_name}`).hide();
    })

}


export {
    fillData
}