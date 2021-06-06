var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
const fetch = require('node-fetch')
const cors = require('cors')



dotenv.config()
const app = express()

app.use(express.static('dist'))
app.use(cors())
console.log(__dirname)
const application_key = process.env.API_KEY;



app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
        // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})


app.get('/test/:formtext', async function(req, res) {
    const formText = req.params.formtext;
    console.log(formText);

    try {
        const apiURL = `https://api.meaningcloud.com/sentiment-2.1?lang=en&key=${application_key}&txt=${formText}`;
        const fetch_response = await fetch(apiURL);
        const json = await fetch_response.json();
        res.json(json);
    } catch (errorr) {
        alert(error);
    }
})