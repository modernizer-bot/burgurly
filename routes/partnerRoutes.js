const passport = require("passport");
const mongoose=require('mongoose');
const User=mongoose.model('users');

module.exports=(app)=>{
    //partner
        app.post('/api/partner/detail',(req,res)=>{
        const {RestaurantName,RestaurantAddress,location}=req.body;
        req.user.RestaurantName=RestaurantName;
        req.user.RestaurantAddress=RestaurantAddress;
        req.user.location=location
        req.user.save();
        res.send(req.user);
    })

    app.post('/api/partner/menu',(req,res)=>{
      const {currentSection,name,price,stock,image}=req.body;
        req.user[currentSection].push({
          name,
          price,
          stock,
          image
        })
        req.user.save();
    })
    app.get('/api/partner/menu',(req,res)=>{
        res.send(req.user.dishes);
    })
}