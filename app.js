const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json())
app.use(cors())
app.use("/images",express.static("images"))
const review = require("./routes/review.route")
const user = require("./routes/user.route")
const doctor = require("./routes/doctor.route");
const appointment = require("./routes/appointment.route");
const medicine = require("./routes/medicine.route");
const medicineBrand = require("./routes/medicineBrand.route");
const ambulance = require("./routes/ambulance.route");
const payment = require("./routes/payment.route");
const { verifyToken } = require("./middleware/verifyToken");
const { verifyAdmin } = require("./middleware/verifyAdmin");

app.use('/',review)
app.use('/api/v1',user)
app.use('/api/v1',doctor)
app.use('/api/v1',appointment)
app.use('/api/v1',medicine)
app.use('/api/v1' , medicineBrand) 
app.use('/api/v1',ambulance) 
app.use('/api/v1',payment)

module.exports = app;