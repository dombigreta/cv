const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.port || 5000;
const dbUrl = require('./config/keys').mongoDbUri;

app.use(bodyParser.json());


mongoose.connect(dbUrl, (err) => {
    if(err){
       //for debugging
        console.log(`${err}`);
    }
});


app.listen(port, () => console.log(`app listens on port: ${port}`));