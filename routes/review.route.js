const express = require("express");
const reviewController = require("../controller/review.controller");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();
//  brand get and update data 
router
  .route("/review")
  .get(reviewController.getReview)
  .post(verifyToken, reviewController.postReview)
router
  .route("/review/:id")
  .patch(verifyToken,reviewController.updateReview)
  .delete(verifyToken, reviewController.deleteReview)
module.exports = router;