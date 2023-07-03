const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const User = require('../Models/User.jsx')
const jwt = require('jsonwebtoken')


const register =(req,res,next)=>{

    const {name,email,password} = req.body;
    console.log(req.body)

    if(!name || !email || !password){

        return res.status(400).json({msg:"Please enter all fields"})
    }
    if(password.length < 6){

        return res.status(400).json({msg:"Password must be at least 6 characters"})
    }
    if (!email.includes("@")){

        return res.status(400).json({msg:"Please enter a valid email"})
    }
    let hashPassword=bcrypt.hashSync(password,10);

    User.findOne({email:email}).then(userFound=>{

        if(userFound){

            return res.status(400).json({msg:"User already exists"})
        }
        // let otp= 1000000 + parseInt(Math.random()*9000000);
        // sendMail(otp);
       
            const register = User.create({
                name,
                email,
                password:hashPassword,
                // phone
            }).then(userCreated=>{
                
                res.status(201).json({msg:"User created successfully"})
            }).catch(err=>{
                res.status(500).json({msg:err})
            }
            )
           
        

      

    })

    
}

const login =(req,res,next)=>{


    const {email,password} = req.body;
    console.log("email",email,password)

    if(!email ){

        return res.status(400).json({msg:"Please enter email"})
    }
    if(!password){

        return res.status(400).json({msg:"Please enter passwords"})
    }
    if (!email.includes("@")){
        return res.status(400).json({msg:"Please enter a valid email"})
    }
    User.findOne({email:email}).then(userFound=>{
        if(!userFound){
                
                return res.status(400).json({msg:"User not found"})
            }
            // compare password
            let comparePassword= bcrypt.compareSync(password,userFound.password);
            if(!comparePassword){
                return res.status(400).json({msg:"Invalid password"})
            }
            // create token 
            jwt.sign(
                {email:userFound.email,
                id:userFound._id},'sdadadadasd',{},(err,token)=>{
                if(err){
                    return res.status(500).json({msg:"Server error"})
                }
                
                 res.cookie("token",token).json(userFound)
         
            })
            
    }).catch(err=>{
        res.status(500).json({msg:"Server error"})
    }
    )

}


module.exports= {register,login}