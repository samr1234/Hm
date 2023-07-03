const express = require("express")
const app = express()
const color = require('colors')
const dotenv = require('dotenv')
const cors = require('cors');
// connection file
require('./Models/Connection.jsx')

const quizRouter = require('./Routes/Quiz.jsx')

const errorHandling = require('./Middlewares/error')


dotenv.config({path:"./.env"})

const port = process.env.PORT || 6000

app.use(express.json())
// app.use(errorHandling)
app.use(cors({
    credentials: true,
    origin:'http://localhost:5173'
}));
app.use(quizRouter)


app.listen(port,()=>{
    console.log("server running "+port.cyan)
})