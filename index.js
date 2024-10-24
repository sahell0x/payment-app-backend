require('dotenv').config();
const User = require("./db");
const userRout = require("./routes/userRout");
const express = require("express");

const app = express();

app.use("/api/v1",userRout);


app.listen(3000,()=>{
    console.log("app is listenig");
})
