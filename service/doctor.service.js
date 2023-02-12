const Doctor = require("../model/doctor.model")
module.exports.getDoctorService = async()=>{
  const result =await Doctor.find({}).sort({viewCount:-1});
  return result;
}
module.exports.postDoctorService = async(data)=>{
  const result =await Doctor(data).save();
  return result;
}
module.exports.getDoctorServiceById = async(id)=>{
  const result =await Doctor.findOne({_id:id});
  return result;
}
module.exports.cancelDoctorServiceById = async(id)=>{
 
  const result =await Doctor.deleteOne({_id:id});
  return result;
}


