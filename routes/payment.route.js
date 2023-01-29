const express = require("express");
const paymentController = require("../controller/payment.controller");
 
const router = express.Router();
//  brand get and update data 
router
  .route("/init")
  .post(paymentController.getPayment)
   
  router
  .route("/success")
  .post(paymentController.successPayment)
  router
  .route("/fail")
  .post(paymentController.failPayment)
  router
  .route("/cancel")
  .post(paymentController.cancelPayment)
module.exports = router;