/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = 'da37898d48db505fe667d173abc72170';
const baseURL = 'api.openweathermap.org/data/2.5/weather';


/* Function called by event listener */

const eventListener = function() {

    const APIcall = `https://api.openweathermap.org/data/2.5/weather?zip=${zip.value}&appid=${apiKey}&units=metric`;
    getWeather(APIcall).then((data) => {
        postData('/all', { city: data.name, date: newDate, temp: data.main.temp, Content: feelings.value });
        getData('/all');
    }).catch((data) => {
        alert(data);
    });


};

// Event listener to add function to existing HTML DOM element
const zip = document.getElementById('zip');
const feelings = document.getElementById('feelings');
const generate = document.getElementById('generate');

generate.addEventListener('click', eventListener);


/* Function to GET Web API Data*/
const getWeather = async function(call) {
    const data = await fetch(call).then((response) => {
        if (!response.ok) throw error;
        return response;
    }).catch((error) => {
        const msg = `Can't GET Weather Check ZIP Code: ${error}`;
        alert(msg);
    });

    try {
        const allData = await data.json();
        return allData;
    } catch (error) {
        console.log("Can't GET Data from API: ", error);
    }
};


/* Function to POST data */
const postData = async(url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("Can't POST Data To Server: ", error);
    }
};



/* Function to GET Project Data */
const getData = async(url = '') => {
    const response = await fetch(url);

    try {
        const allData = await response.json();
        console.log(allData);
        document.getElementById('city').innerHTML = `Weather For ${allData.data.city}`
        document.getElementById('date').innerHTML = `Date\n${allData.data.date}`;
        document.getElementById('temp').innerHTML = `Temperature\n${allData.data.temp}`;
        document.getElementById('content').innerHTML = ` Your feeling today is\n${allData.data.feelings}`;
    } catch (error) {
        console.log("Can't GET Data From Server:", error);
    }
};