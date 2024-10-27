const User = require("../db");

module.exports = async (req,res)=>{
    const filter = req.query.filter || "";
    try{
        const users = await User.find({
            $or:[
                {
                    firstName:{$regex:filter,$options:"i"}

                },{
                    lastName:{$regex:filter,$options:"i"}
                }
            ]
        });

        res.status(200).json({users:users.map((user)=>{
            return {
                email:user.email,
                firstName:user.firstName,
                lastName:user.lastName,
                _id:user._id
            }
        })});

    }catch(e){
        console.log(e);
        res.status(403).json({users:[]});
    }
}