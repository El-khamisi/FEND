/**
 * @jest-environment jsdom
 */
import 'regenerator-runtime/runtime'; //To defined regeneratorRuntime 

const $ = require('jquery')



test('Calculate difference between dates', () => {

    document.body.innerHTML =
        `
    <input type="date" id="date" value="2021-10-02">
    `;


    //return 1 for Forecast 
    //return 0 for Current
    const datepicker = require('./datepicker')

    expect(datepicker.calcDate()).toBe(1);
})