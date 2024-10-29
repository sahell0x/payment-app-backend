const {Acount} = require("../db");
module.exports = async(req,res)=>{
    try{
        const userId = req.userId;
        const acount = await Acount.findOne({userId:userId});

        if(acount){
            return res.status(200).json({
                balance:acount.balance
            })
        }

        return res.status(403).json({});

    }catch(e){
        console.log(e);
        return res.status(403).json({
            massage:"somthing wents wrong"
        })
    }
}