const express = require("express");
const userTypes = require("../types");
const signUpMiddleware = require("../middlewares/signupMiddleWare");

const router = express.Router();

router.post("/signup",signUpMiddleware,(req,res)=>{
    res.send("user created!!");
})



module.exports = router;