require('dotenv').config();
const User = require("./db");
const userRoute = require("./routes/userRoute");
const acountRoute = require("./routes/acountRoute");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user",userRoute);
app.use("/api/v1/acount",acountRoute);

app.use((err,req,res,next)=>{
   res.status(500).send("internal server error!!");
});

app.listen(3000,()=>{
    console.log("app is listenig");
})
