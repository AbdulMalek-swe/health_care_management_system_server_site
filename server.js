const app = require("./app");
const { dbConnect } = require("./utils/DbCollection");
const env = require("dotenv").config();
dbConnect()
 
app.listen(process.env.PORT, () => {
    console.log("server running on port",process.env.PORT);
    ("server is running on port", process.env.PORT); 
})  