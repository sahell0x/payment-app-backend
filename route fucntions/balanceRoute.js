const {Acount} = require("../db");
module.exports = async(req,res)=>{
    try{
        const userId = req.userId;
        const response = await Acount.findOne({userId:userId});

        if(response){
            return res.status(200).json({
                balance:response.balance
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