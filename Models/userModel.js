const mongoose = require('mongoose');

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

var User = mongoose.model('User',UserSchema);
module.exports = User;