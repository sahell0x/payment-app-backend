const {User} = require("../db");
const {updateUserTypes} = require("../types");
const bcrypt = require("bcrypt");

module.exports = async (req,res)=>{
    try{
        const body = req.body;
        const {success} = updateUserTypes.safeParse(body);
        if(success){
            if(body.password){
                const hashedPassword = await bcrypt.hash(body.password,10);
                body.password = hashedPassword;
            }
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