const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    googleId:String,
    type:String,
    displayName:String,
    RestaurantName:String,
    RestaurantAddress:String,
    location:{
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
          },
          coordinates: {
            type: [Number],
            required: true
          }
    },
    email:Array,
    photo:Array
})
mongoose.model('users',userSchema);