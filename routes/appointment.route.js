const express = require("express");
const appointmentController = require("../controller/appointment.controller");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();
//  brand get and update data 
router
  .route("/appointment")
  .get(appointmentController.getAppointment)
  .post(appointmentController.postAppointment)
router
  .route("/appointment/:id")
  .delete(verifyToken, appointmentController.deleteAppointment)
   

module.exports = router;