const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = process.env.JWT_SECRET;
const {User} = require("../db");
const {Acount} = require("../db");

module.exports = async (req, res) => {
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
     const userId = response._id;

     await Acount.create({      // give user some initial balance
        userId:userId,
        balance:  1 + Math.random() * 10000
     })
 
     const userToken = jwt.sign({ id: userId }, secret);
     res.status(200).json({
       massage: "user created successfully",
       token: userToken,
     });
   } catch (e) {
     console.log(e)
     res.status(500).send("server error");
   }
 }