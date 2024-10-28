const User = require("../db");
const {updateUserTypes} = require("../types");

module.exports = async (req,res)=>{
    try{
        const body = req.body;
        const {success} = updateUserTypes.safeParse(body);
        if(success){
            const id = req.userId;
            await User.findOneAndUpdate({_id:id},body);

            return res.status(200).json({
                massage:"user information updated successfully"
            })
        }

        return res.status(403).json({
            massage:"invalid inputs"
        })
     

    }catch(e){
        console.log(e);
        res.status(403).json({
            massage:"something wents wrong"
        })
    }
}