const express = require("express");
const userController = require("../controller/user.controller");
const upload = require("../middleware/uploader");
const { verifyToken } = require("../middleware/verifyToken");
const router = express.Router();
//  brand get and update data 
router
  .route("/sign")
  .post( userController.postSignUp)
router
  .route("/login")
  .post(userController.postSignIn)
router
  .route("/getme")
  .get(verifyToken , userController.getMe)
module.exports = router;