const express = require('express')
const bodyParser = require('body-parser')
//const mongoose = require('mongoose')

//and create our instances
const app = express()
const router = express.Router()

//set our port to either a predetermined port number if you have set 
//it up, or 3001
const port = process.env.API_PORT || 3001;

//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')

    // and remove cacheing so we get the recent data
    res.setHeader('Cache-Control', 'no-cache')
    next()
})

//now we can set the route path & initialize the API
router.get('/api', router)

//starts the server and listens for requests
app.listen(port, () => {
    console.log(`api running on port ${port}`)
})
