const Ambulance = require("../model/ambulance.model");

module.exports.postAmbulanceService = async (data) => {
    // console.log(data.brand);
    const user =await Ambulance(data).save();
    return result;
}