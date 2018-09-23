const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();

const dbUrl = require('./config/keys').mongoDbUri;

mongoose.connect(dbUrl, (err) => {
    if(err){
       //for debugging
        console.log(`${err}`);
    }
});

app.use(bodyParser.json(), session({
    secret:'work hard',
    resave:true,
    saveUninitialized:false,
    store: new MongoStore(mongoose.connection)
}));

const port = process.env.port || 5000;



app.listen(port, () => console.log(`app listens on port: ${port}`));