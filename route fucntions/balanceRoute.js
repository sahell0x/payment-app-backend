const {Acount} = require("../db");
module.exports = (req,res)=>{
    try{

    }catch(e){
        console.log(e);
        return res.status(403).json({
            massage:"somthing wents wrong"
        })
    }
}