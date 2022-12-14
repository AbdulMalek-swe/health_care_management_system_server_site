const {
     postAmbulanceService
 } = require("../service/ambulance.service");
module.exports.postAmbulance = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await postAmbulanceService(data);
        res.status(200).json({
            message: "success",
            result: result
        })
    }
    catch (error) {
        res.status(500).json({
            error: error
        })
    }
}