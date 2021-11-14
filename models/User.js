const mongoose=require('mongoose');
const dishes=require('./Dish');
const userSchema=new mongoose.Schema({
    googleId:String,
    type:String,
    displayName:String,
    RestaurantName:String,
    RestaurantAddress:String,
    location:{
        type: {
            type: String, 
            enum: ['Point'],
            required: false
          },
          coordinates: {
            type: [Number],
            required: false
          }
    },
    email:Array,
    photo:Array
})
mongoose.model('users',userSchema);