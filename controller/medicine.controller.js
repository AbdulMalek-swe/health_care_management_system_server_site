const {
    getMedicineService,
    getMedicineServiceById,
    postMedicineService,
    deleteMedicineServiceById
} = require("../service/Medicine.service");

module.exports.getMedicine = async (req, res, next) => {
    try {
        // console.log(req.query);
       let category =req.query; 
    //    console.log(category);
        if(!category.category){
            category ={}
        }
        let queries = {};
        if(req.query.page){
            const {page=0,limit=10} = req.query;
            const skip = parseInt(page)*parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
           }
        const result = await getMedicineService(category,queries);
        res.status(200).json({
            message: "success",
            result: result 
        })
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports.postMedicine = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await postMedicineService(data);
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
module.exports.getMedicineById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await getMedicineServiceById(id);
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
module.exports.deleteMedicineById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await deleteMedicineServiceById(id);
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