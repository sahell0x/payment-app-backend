const { json } = require("express");

module.exports = async (req,res)=>{
    try{

        const id = req.userId;


     

    }catch(e){
        console.log(e);
        res.status(403).json({
            massage:"something wents wrong"
        })
    }
}