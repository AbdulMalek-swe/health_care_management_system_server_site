const express = require("express");
const ambulance = require("../controller/ambulance.controller");
 
const router = express.Router();
//  brand get and update data 
router
  .route("/medicine")
//   .get(medicine.getMedicine)
  .post( ambulance.postAmbulance)
// router
//   .route("/medicine/:id")
//   .get( verifyToken, medicine.getMedicineById)
  
module.exports = router;   