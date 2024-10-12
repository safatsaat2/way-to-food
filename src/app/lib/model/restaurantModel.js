const { default: mongoose } = require("mongoose");

const restaurantModel= new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    city:String,
    number:Number,
    password:String
});

export const restaurantSchema= mongoose.models.restaurants
|| mongoose.model("restaurants", restaurantModel)