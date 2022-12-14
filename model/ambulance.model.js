const mongoose = require("mongoose");
const validator = require("validator");
const AmbulanceSchema = mongoose.Schema({
     name:{
        type:String,
        required:[true,"please provide a name"],
        trim:true,
        lowercase:true
     },
     img:{
        type:String,
        required:[true,"please provide img url"],
        validate: [validator.isURL, "Please provide a valid url"],
     },
     description:{
        type:String,
        required:[true,"please provide qualification"],
        trim:true
     },
     category:{
        type:String,
        required:[true,"please provide special activity"],
        trim:true
     },
     chamber:{
        type:String,
        required:[true,"please provide chamber"],
        trim:true
     },
     contact:{
        type:Number,
        required:[true,"please provide bmdc no"],
        trim:true
     },
     location:{
        type:String,
        required:[true,"please provide fee"],
        trim:true
     }
},
{
    timestamps:true
})
const Ambulance = new mongoose.model("Ambulance", AmbulanceSchema);
module.exports = Ambulance 