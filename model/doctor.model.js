const mongoose = require("mongoose");
const validator = require("validator");
const doctorSchema = mongoose.Schema({
     name:{
        type:String,
        required:[true,"please provide a name"],
        trim:true
     },
     imgUrl:{
        type:String,
        required:[true,"please provide img url"],
        validate: [validator.isURL, "Please provide a valid url"],
     },
     qualification:{
        type:String,
        required:[true,"please provide qualification"],
        trim:true
     },
     specialist:{
        type:String,
        required:[true,"please provide special activity"],
        trim:true
     },
     chamber:{
        type:String,
        required:[true,"please provide chamber"],
        trim:true
     },
     bmdcNo:{
        type:String,
        required:[true,"please provide bmdc no"],
        trim:true
     },
     experience:{
        type:String,
        required:[true,"please provide experience"],
        trim:true
     },
     fee:{
        type:String,
        required:[true,"please provide fee"],
        
     }
},
{
    timestamps:true
})
const Doctor = new mongoose.model("Doctor", doctorSchema);
module.exports = Doctor 