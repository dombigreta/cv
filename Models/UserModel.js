const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALTING_NUMBER = 10

/** this schema is used for creating a new user */

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    username:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    passwordConf:{
        type:String,
        required:true
    }
});

UserSchema.pre('save', function(next){
    const user = this;
    bcrypt.hash(user.password, SALTING_NUMBER, function(err, hash){
        if(err){
            console.log(`${err}`);
        }
        user.password = hash;
        next();
    })
});

UserSchema.statics.authenticateUser = function(email, password, callback){
    User.findOne({email:email}).exec(function(err, user){
        if(err){
            return callback(err);
        }
        if(!user){
            var error = new Error("User not found");
            err.status = 401;
            return callback(error);
        }
        bcrypt.compare(password, user.password,function(err, result){
            if(result == true){
                return callback(user);
            }
            else{
                return callback();
            }
        })
    });
}

var User = mongoose.model('User',UserSchema);
module.exports = User;