const express = require("express");
const bloodController = require("../controller/blood.controller");
 
const router = express.Router();
//  brand get and update data 
router
  .route("/blood")
  .get(bloodController.getBlood)
  .post(bloodController.postBlood)
  router
  .route("/blood/:id")
  .patch(bloodController.updateBlood)
   
 
module.exports = router;