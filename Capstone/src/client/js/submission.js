import fetch from 'node-fetch';
import { calcDate } from './datepicker'
import { fillData } from './trip-info'

const $ = require('jquery');
const btn = $('#submit-btn');
const user_input = $('#user-input')


/**
 * Function to fetch data from weather api  and bring preview photo
 * @param name_of_city 
 * @param latitude 
 * @param longitude
 */
async function submit(value, lat, lng) {

    try {


        const diff = calcDate();
        let response;

        //decide for current weather OR prediction
        if (diff > 7) {
            response = await fetch(`http://localhost:8081/forecast/${lat}&${lng}`);

        } else {
            response = await fetch(`http://localhost:8081/current/${lat}&${lng}`);
        }
        const resimg = await fetch(`http://localhost:8081/pixabay/${value}`);

        //Json Object
        const img = await resimg.json()
        const info = await response.json();

        fillData(img, info, diff)
    } catch (error) {
        alert(error)
    }



}

export {
    submit
}