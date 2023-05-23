const mongoose = require("mongoose")
const dotenv = require('dotenv')
const color = require('colors')

dotenv.config({path:"./.env"})


mongoose.connect(process.env.MONGO_URL).then(()=>{

    console.log("connected".yellow)
}).catch((err)=>{
    console.log(err)
})