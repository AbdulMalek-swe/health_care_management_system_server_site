const express = require("express");
const medicine = require("../controller/medicine.controller");
const { verifyAdmin } = require("../middleware/verifyAdmin");
const { verifyToken } = require("../middleware/verifyToken");

const router = express.Router();
//  brand get and update data 
router
  .route("/medicine")
  .get(medicine.getMedicine)
  .post(verifyToken,verifyAdmin, medicine.postMedicine)
router
  .route("/medicine/:id")
  .get( verifyToken, medicine.getMedicineById)
  router
  .route("/medicine/:id")
  .delete( medicine.deleteMedicineById)

module.exports = router;