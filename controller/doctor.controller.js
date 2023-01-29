const {
    postDoctorService,
    getDoctorService,
    getDoctorServiceById,
    cancelDoctorServiceById
     } = require("../service/doctor.service")
module.exports.getDoctor = async (req, res, next) => {
    try {
        const result = await getDoctorService();
        res.status(200).json({
            result: result
        })
    }
    catch (error) {
        
        res.status(400).json({
            result: error.message
        })
    }
}
module.exports.postDoctor = async (req, res, next) => {
    try { 
            console.log(req.body);
        const result = await postDoctorService(req.body);
        res.status(200).json({
            result: result
        })
    }
    catch (error) {
         console.log(error.message);
        res.status(400).json({
            result: error.message
        })
    }
}
module.exports.getDoctorById = async (req, res, next) => {
    try {

        const result = await getDoctorServiceById(req.params.id);
        res.status(200).json({
            result: result
        })
    }
    catch (error) {
      
        res.status(400).json({
            result: error.message
        })
    }
}
module.exports.cancelDoctorById = async (req, res, next) => {
    try {
        
        const result = await cancelDoctorServiceById(req.params.id);
        res.status(200).json({
            result: result
        })
    }
    catch (error) {
        res.status(400).json({
            result: error.message
        })
    }
}
