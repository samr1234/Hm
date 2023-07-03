const express = require("express")

const quizRouter = express.Router();

const {register,login} = require('../Controllers/auth.jsx')



quizRouter.route('/register').post(register);
quizRouter.route('/login').post(login);

module.exports=quizRouter;