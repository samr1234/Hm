const express = require("express")
const app = express()
const color = require('colors')
const dotenv = require('dotenv')

// connection file
require('./Models/Connection.jsx')

const errorHandling = require('./Middlewares/error')

dotenv.config({path:"./.env"})

const port = process.env.PORT || 6000

app.use(errorHandling)

app.listen(port,()=>{
    console.log("server running".cyan)
})