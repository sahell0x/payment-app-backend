const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const User = require("../db");
const express = require("express");
const userTypes = require("../types");
const signUpMiddleware = require("../middlewares/signupMiddleWare");

const router = express.Router();

router.post("/signup", signUpMiddleware, async (req, res) => {
  try {
        const response = await User.create(req.body);

           const userToken = jwt.sign({userName:response.userName},secret);
           res.status(200).json({jwt_token:userToken});

  } catch (e){
    console.log(e);
    res.status(400).send("somthing want wrong from catch");
  }
});

module.exports = router;
