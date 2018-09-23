const express = require('express');
const route = express.Router();
const UserSchema = require('../Models/userModel');

route.post('/', function(req,res){
    /**if every required fied is filled */
    if(req.body.email && req.body.username && req.body.password && req.body.passwordConf){
        var userData = {
            email:req.body.email,
            username:req.body.username,
            password:req.body.password,
            passwordConf:req.body.passwordConf
        }

        UserSchema.create(userData, function(err,user){
            if(err){
                console.log(`${err}`);
                res.redirect('/errorpage');
            }
            console.log(`${user}`);
        })

    }
});