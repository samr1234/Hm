const express = require('express')
const mongoose = require('mongoose')


const register = (req,res,next)=>{

    if (!email || !password || !name) {

        return res.send({ error: "please add all the fields" })
    }

    if (password < 8) {

        return res.send({ error: "password should be atleast 8 characters long" })
    }

    if (!email.includes("@")) {

        return res.send({ error: "please enter a valid email" })
    }

    userCollection.findOne({ email: email }).then((userFound) => {

        if (userFound != null) {

            return res.send("user already exists")
        }
        bcrypt.hash(password, 12).then((hashPassword) => {
            const UserSignup = new userCollection({
                name: name,
                email: email,
                password: hashPassword
            })

            UserSignup.save().then(() => {
                // through gmail verification
                res.send("user saved successfully")
            })
        })
            .catch((err) => {

                res.send({ error: "error occured while saving user" })
            })
    }).catch((err) => {

        res.send({ error: "error occured while finding user" })
    })


}

module.exports= {register}