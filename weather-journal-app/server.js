// Setup empty JS object to act as endpoint for all routes
projectData = {};
const port = 8000;

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();



/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const listening = function() {
    console.log(`Now listening to Port ${port}`);
};

app.listen(port, listening);

app.get('/all', (req, res) => {
    res.send(projectData);
    projectData = {};
    console.log(`Responded by projectData`);
});

app.post('/all', (req, res) => {

    const Entity = {
        city: req.body.city,
        date: req.body.date,
        temp: req.body.temp,
        feelings: req.body.Content.length === 0 ? null : req.body.Content
    };
    projectData["data"] = Entity;
    console.log('Data is loaded');
    console.log(projectData);
});