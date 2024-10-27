const bcrypt = require("bcrypt");
const User = require("../db");


module.exports = async (req,res)=>{
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
  }