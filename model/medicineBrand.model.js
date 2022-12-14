const mongoose = require("mongoose");
const validator = require("validator");
const {ObjectId} = mongoose.Schema.Types;
const medicineBrandSchema = mongoose.Schema({
    medicine: [{
        type: ObjectId,
        ref: "Medicine"
    }],
    name: {
        type: String,
        required: [true, "please provide a name"],
        trim: true,
        unique:true,
        lowarecase:true
    },
    description: {
        type: String,
        required: [true, "please describe some description"],
        trim: true
    },
    imgRef:{
        type:String,
        required:[true,"please provide img url"],
        validate: [validator.isURL, "Please provide a valid url"],
     },
    location: {
        type: String,
        required: [true, "please provide location name"],
        trim: true
    },
    status: {
    type:String,
    enum:["active","inactive"],
    default:"active"
    }
},
    {
        timestamps: true
    })
const MedicineBrand = new mongoose.model("MedicineBrand", medicineBrandSchema);
module.exports = MedicineBrand;