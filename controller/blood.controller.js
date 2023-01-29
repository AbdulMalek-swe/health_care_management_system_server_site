const {
     postBloodService, 
    getBloodService ,
    updateBloodService} = require("../service/blood.service");

module.exports.getBlood = async (req, res, next) => {
    try {
        const result = await getBloodService();
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
module.exports.postBlood = async (req, res, next) => {
    try {
        // console.log(req.body)
        const bloodData = req.body;
        const result = await postBloodService(bloodData);
         
        res.status(200).json({
            error:"successfull ",
            result: result 
        })
    }
    catch (error) {
         console.log(error.message)
        res.status(400).json({
            error:error.message
        })
    }
} 

module.exports.updateBlood = async (req, res, next) => {
    try {
        const {status} = req.body;
   
        const result = await updateBloodService(req.params.id,status);
        res.status(200).json({
            result: result
        }) 
    }
    catch (error) {
        console.log(error.message)
        res.status(400).json({
            result: error.message
        })
    }
}
// module.exports.deleteAppointment = async (req, res, next) => {
//     try {
//         console.log(req.params.id)
//         const result = await deleteAppointmentService(req.params.id);
//         res.status(200).json({
//             result: result
//         }) 
//     }
//     catch (error) {
        
//         res.status(400).json({
//             result: error.message
//         })
//     }
// }