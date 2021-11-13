const mongoose=require('mongoose');
const dishes=require('./Dish');
const userSchema=new mongoose.Schema({
    googleId:String,
    type:String,
    displayName:String,
    RestaurantName:String,
    RestaurantAddress:String,
    sideDish:[dishes],
    MainCourse:[dishes],
    drink:[dishes],
    soup:[dishes],
    appetizer:[dishes],
    dessert:[dishes],
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