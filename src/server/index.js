var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const realAPIResponse = require('./realAPI.js')
const fetch = require('node-fetch');

const dotenv = require('dotenv');
dotenv.config();

// global variables
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
let Input = []

const app = express()

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use(express.static('dist'))

console.log(__dirname)

// post function

app.post('/api', async function (req, res) {
    Input = req.body.url;
    console.log(`You submitted: ${Input}`);
    const apiURL = `${baseURL}key=${apiKey}&url=${Input}&lang=en`
    const response = await fetch(apiURL)
    const newData = await response.json()
    console.log(newData)
    res.send(newData)
})

// get function


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(realAPIResponse)
})


