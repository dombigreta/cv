const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();

const dbUrl = require('./config/keys').mongoDbUri;

mongoose.connect(dbUrl, (err) => {
    if(err){
        console.log(`${err}`);
    }
});
app.use(bodyParser.json(),session({     secret:'work hard',
                                        resave:true,
                                        saveUninitialized:false,
                                        store: new MongoStore({mongooseConnection: mongoose.connection})
}));

/**Routes */
const UserAuthRoute = require('./Routes/UserRoute');
app.use('/user', UserAuthRoute);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`app listens on port: ${port}`));