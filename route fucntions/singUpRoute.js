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
 
     const userToken = jwt.sign({ id: response._id }, secret);
     res.status(200).json({
       massage: "user created successfully",
       token: userToken,
     });
   } catch (e) {
     console.log(e)
     res.status(500).send("server error");
   }
 }