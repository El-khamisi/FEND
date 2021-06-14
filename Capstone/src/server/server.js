var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const fetch = require('node-fetch')
const cors = require('cors')
const serverReq = require('./serverReq')

/*server function to respond to GET requests */
const reqs = require('./serverReq')


dotenv.config()
const app = express()

app.use(reqs)
app.use(express.static('dist'))
app.use(cors())
console.log(__dirname)



/**
 * Root rooting for server
 * @returns send index.html home page 
 */
app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
        // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Server listening on port 8081!')
})