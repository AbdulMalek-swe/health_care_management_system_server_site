const Appointment = require("../model/appointment.model");

module.exports.getAppointmentService = async(email)=>{
      const date = new Date()
    const result =await Appointment.find({userEmail:email}).sort({ })
    
    return result;
  }
  module.exports.postAppointmentService = async(data)=>{
    const result =await  Appointment(data).save()
    return  result;
  }
  module.exports.deleteAppointmentService = async(id)=>{
     const result = await Appointment.deleteOne({_id:id});
     return result;
  }