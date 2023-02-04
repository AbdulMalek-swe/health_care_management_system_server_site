const {
     postAmbulanceService,
     getAmbulanceService
 } = require("../service/ambulance.service");
 module.exports.getAmbulance = async (req, res, next) => {
    try {
        
        const result = await getAmbulanceService();
        res.status(200).json({
            message: "success",
            result: result
        })
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: error
        })
    }
}
module.exports.postAmbulance = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        const result = await postAmbulanceService(data);
        res.status(200).json({
            message: "success",
            result: result
        })
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: error
        })
    }
}