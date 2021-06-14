import { submit } from './submission'

const $ = require('jquery');
const list = $('#country');
const fetch = require("node-fetch"); //for jest usage
const user_input = $('#user-input')
const btn = $('#submit-btn');



let listOfdata = {};
let inputlength = user_input.val().length;

//Refresh lookup autocomplete drop-down list  
setInterval(() => {
    if (user_input.val().length != inputlength && user_input.val().length != 0) {
        inputlength = user_input.val().length;
        handlesearch(user_input.val());
    }

}, 1500);



/**
 * Search by first few letters 
 * And store in object
 * @param city_name
 */
async function handlesearch(inputText) {

    listOfdata = {};
    list.html('');
    try {

        const response = await fetch(`http://localhost:8081/search/${inputText}`)
        const json = await response.json();

        for (let i = 0; i < Math.min(json.geonames.length, 10); i++) {
            const name = json.geonames[i].name
            if (`${name}` in listOfdata == false) {
                listOfdata[`${name}`] = {
                    lat: json.geonames[i].lat,
                    lng: json.geonames[i].lng
                }
                const option = document.createElement('option');
                option.setAttribute('value', name);
                list.append(option)
            }
        }
        // console.log(listOfdata)


    } catch (error) {

        alert(error)
    }
}

/**
 * Click event to Submit button
 */
btn.on('click', async(event) => {

    event.preventDefault();

    try {

        const value = user_input.val();
        if (value.length == 0 || value in listOfdata == false)
            throw new Error("Type destination correctly OR wait  while API response and TRY AGAIN later")


        const cur = listOfdata[`${value}`];
        const lat = cur.lat;
        const lng = cur.lng;

        await submit(value, lat, lng);

    } catch (error) {
        alert(error)
    }



})
export {
    handlesearch
}