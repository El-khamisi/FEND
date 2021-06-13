var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')
const cors = require('cors')
const { response } = require('express')



dotenv.config()
const app = express()

app.use(express.static('dist'))
app.use(cors())
console.log(__dirname)
const geonames_username = process.env.geonames_username;
const weatherKey = process.env.weatherKey;
const pixabay = process.env.pixabay;



app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
        // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Server listening on port 8081!')
})


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