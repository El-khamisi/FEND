import fetch from 'node-fetch';
import { calcDate } from './datepicker'
import { fillData } from './trip-info'

const $ = require('jquery');
const btn = $('#submit-btn');
const user_input = $('#user-input')


async function submit(value, lat, lng) {

    try {

        //return 1 for Forecast 
        //return 0 for Current
        const diff = calcDate();
        let response;
        if (diff == 1) {
            response = await fetch(`http://localhost:8081/forecast/${lat}&${lng}`);

        } else {
            response = await fetch(`http://localhost:8081/current/${lat}&${lng}`);
        }
        const resimg = await fetch(`http://localhost:8081/pixabay/${value}`);

        const img = await resimg.json()
        const info = await response.json();

        fillData(img, info)
    } catch (error) {
        alert(error)
    }



}

export {
    submit
}