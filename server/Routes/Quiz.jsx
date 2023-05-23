const express = require("express")

const quizRouter = express.Router();

const {register} = require('../Controllers/auth')



quizRouter.route('/register').post(register)