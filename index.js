const express=require('express');
const app=express();
const cookieSession=require('cookie-session');
const passport=require('passport');
const keys = require('./config/keys');
const mongoose=require('mongoose');

require('./models/User');
require('./services/passport');
app.use(cookieSession({
    age:1000 * 60 * 60 * 24,
    keys:['dfevvieiciecjejje']
}))
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect(keys.mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{console.log('connected to mongodb');})
// const User=mongoose.model('users');
// User.find({}).then((result)=>console.log(result))
// .catch((err)=>console.log(err))
require('./routes/authRoutes')(app);
app.listen(5000);