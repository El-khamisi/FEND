var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')
const cors = require('cors')




dotenv.config()
const app = express()

app.use(express.static('dist'))
app.use(cors())
console.log(__dirname)
const geonames_username = process.env.geonames_username;
const weatherKey = process.env.weatherKey;
const pixabay = process.env.pixabay;



/**
 * Test routing to check status response of server
 * @returns send sample object
 */
app.get('/test', function(req, res) {
    res.json({
        username: '5amisi',
        password: 'password'
    })
})


/**
 * /search Routing path
 * @returns Json obj of searching in cities' names 
 */
app.get('/search/:name_startsWith', async function(req, res) {
    const name_startsWith = req.params.name_startsWith;

    const APIrequest = `http://api.geonames.org/searchJSON?name_startsWith=${name_startsWith}&maxRows=10&username=${geonames_username}`;

    try {
        const response = await fetch(APIrequest);
        const json = await response.json();

        res.json(json)

    } catch (error) {
        alert(error);
    }
})

/**
 * /current Routing path
 * @returns weather in a week or less 
 */
app.get('/current/:latlng', async function(req, res) {
    const latlng = req.params.latlng.split('&')
    const lat = latlng[0]
    const lng = latlng[1]

    const APIrequest = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${weatherKey}`;

    try {
        const response = await fetch(APIrequest);
        const json = await response.json();

        res.json(json)
    } catch (error) {
        alert(error)
    }
})


/**
 * /forecast Routing path
 * @returns predict weather in more than a week
 */
app.get('/forecast/:latlng', async function(req, res) {
    const latlng = req.params.latlng.split('&')
    const lat = latlng[0]
    const lng = latlng[1]

    const APIrequest = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherKey}`;

    try {
        const response = await fetch(APIrequest);
        const json = await response.json();

        res.json(json)
    } catch (error) {
        alert(error)
    }
})

/**
 * /pixabay Routing path
 * @returns Image for city 
 */
app.get('/pixabay/:city', async function(req, res) {
    const city = req.params.city;
    const APIrequest = `https://pixabay.com/api/?key=${pixabay}&q=${city}&image_type=photo`;

    try {
        const response = await fetch(APIrequest);
        const json = await response.json();

        res.json(json)
    } catch (error) {
        alert(error)
    }
})


module.exports = app;