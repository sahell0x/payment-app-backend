const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = process.env.JWT_SECRET;
const User = require("../db");
const express = require("express");
const signUpMiddleware = require("../middlewares/signupMiddleWare");
const signinMiddleWare = require("../middlewares/signinMiddleWare");

const router = express.Router();

router.post("/signup", signUpMiddleware, async (req, res) => {
   const body = req.body;
  try {
    
    const user = await User.findOne({ email: body.email });

    if (user) {
      return res.json({
        massage: "email  already taken",
      });
    }
    const hashedPassword = await bcrypt.hash(body.password,10);
      body.password = hashedPassword;
    const response = await User.create(body);

    const userToken = jwt.sign({ id: response._id }, secret);
    res.status(200).json({
      massage: "user created successfully",
      token: userToken,
    });
  } catch (e) {
    console.log(e)
    res.status(500).send("server error");
  }
});

router.post("/signin",signinMiddleWare,async (req,res)=>{
   try{
    const body = req.body;
    const response = await User.findOne({email:body.email});
 
    if(response){
      if(body.password === response.password){
        return  res.status(200).json({
           massage:"login successfully",
        })
      }
    }
 
    return res.status(400).json({
     massage:"invalid email or password",
    })
   }catch(e){
      console.log(e);
      res.status(500).json({
        massage:"internal server error"
      })
   }
})

module.exports = router;
