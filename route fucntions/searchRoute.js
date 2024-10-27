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

        res.status(200).json({users:users});

    }catch(e){
        console.log(e);
        res.status(403).json({users:[]});
    }
}