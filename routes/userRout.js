const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = process.env.JWT_SECRET;
const User = require("../db");
const express = require("express");
const signUpMiddleware = require("../middlewares/signupMiddleWare");
const signinMiddleWare = require("../middlewares/signinMiddleWare");
const singUpRoute = require("../route fucntions/singUpRoute");

const router = express.Router();

router.post("/signup", signUpMiddleware, singUpRoute);

router.post("/signin",signinMiddleWare,async (req,res)=>{
  const body = req.body;
   try{
    
    const response = await User.findOne({email:body.email});
 
    if(response){
      const isMatched = await bcrypt.compare(body.password,response.password);
      if(isMatched){
        return res.status(200).json({
          massage:"login successfully"
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
