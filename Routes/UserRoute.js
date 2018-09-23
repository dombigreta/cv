const express = require('express');
const route = express.Router();
const UserSchema = require('../Models/UserModel');
const UserMiddleWares = require('../MiddleWares/UserMiddleware');

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

router.get('/profile', UserMiddleWares.requiresLogin, function(res,req,err){
    if(err){
        console.log(`${err}`);
    }
})

route.get('/logout', function(req,res,next){
    if(req.session){
        req.session.destroy(function(err){
                if(err){
                    return next(err);
                }
                return res.redirect('/');
        })
    }
});