/**
 * @jest-environment jsdom
 */
import 'regenerator-runtime/runtime'; //To defined regeneratorRuntime 


import { handleSubmit } from './formHandler'

jest.mock('./checkEmpty');
import { checkEmpty } from './checkEmpty'





const $ = require('jquery');


test('Testing handleSubmit', async() => {


    document.body.innerHTML =
        `
    <input id="name" type="text" 
    name="input" value="" placeholder="Name">

    <input type="submit" name="" value="submit" 
    onclick="return Client.handleSubmit(event)" 
    onsubmit="return Client.handleSubmit(event)">

    <div id="score_tag"></div>
    <div id="agreement"></div>
    <div id="subjectivity"></div>
    <div id="confidence"></div>
    <div id="irony"></div>`;

    //manipulation document to create mouse event 
    var event = document.createEvent("MouseEvents");


    //Mockup implemention of alert funciton 
    jest.spyOn(window, 'alert').mockImplementation((error) => {
        throw new Error(error)
    })

    //Mockup implemention of checkEmpty
    checkEmpty.mockImplementation(res => {
        return {
            score_tag: 'P+',
            agreement: 'AGREEMENT',
            subjectiviy: 'OBJECTIVE',
            confidence: '50',
            irony: 'NONIRONIC',
            status: {
                msg: 'OK'
            }
        }
    })

    //Call Function to set Values to Dummy html document
    await expect(handleSubmit(event))
        .resolves


    await expect($('#agreement').text())
        .toBe('The different elements have the same polarity.');

    await expect($('#confidence').text())
        .toBe('With 50% of confidence.');

})