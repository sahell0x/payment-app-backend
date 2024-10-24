require('dotenv').config();
const User = require("./db");
const userRout = require("./routes/userRout");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1",userRout);


app.listen(3000,()=>{
    console.log("app is listenig");
})
