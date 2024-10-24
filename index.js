require('dotenv').config();
const User = require("./db");
const userRout = require("./routes/userRout");
const acountRout = require("./routes/acountRout");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user",userRout);
app.use("/api/v1/acount",acountRout);

app.use((err,req,res,next)=>{
   res.status(500).send("internal server error!!");
});

app.listen(3000,()=>{
    console.log("app is listenig");
})
