const express = require('express');
const route = express.Router();
const UserSchema = require('../models/UserModel');
const UserMiddleWares = require('../middleWares/UserMiddleware');


route.post('/', function(req,res){
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
                res.redirect('/user/errorpage');
            }
            console.log(`${user}`);
        })

    }
});

route.get('/profile', UserMiddleWares.requiresLogin, function(res,req,err){
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

route.post('/login', function(req,res){
    UserSchema.authenticateUser(req.body.username, req.body.password, function(user){
        res.send(user);
    });
})

route.get('/errorpage', function(req,res){
    res.send('<div>There was an error!</div>');
})

module.exports = route;