const Medicine = require("../model/medicine.model");
const MedicineBrand = require("../model/medicineBrand.model");
module.exports.getMedicineService = async (data,queries) => {
    const result = await Medicine.find(data).skip(queries.skip)
        .limit(queries.limit)
        const totalProduct = await Medicine.countDocuments(data);
        const page = Math.ceil(totalProduct / queries.limit);
    return { page,totalProduct, result };
}
module.exports.postMedicineService = async (data) => {
    const user = await MedicineBrand.findOne({ id: data.brand.id });
    const result = await Medicine(data).save();
    if (user.name === data.brand.name) {
        user.medicine.push(result._id);
        await MedicineBrand.updateOne({ _id: data.brand.id }, { medicine: user.medicine }, {})
    }
    return result;
}
module.exports.getMedicineServiceById = async (id) => {
    const result = await Medicine.findOne({ _id: id }).populate("brand.id");
    return result;
}
module.exports.deleteMedicineServiceById =async (id)=>{
    const result = await Medicine.deleteOne({_id:id})
    return result; 
}