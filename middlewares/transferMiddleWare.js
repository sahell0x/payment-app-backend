const {transferTypes} = require("../types");

module.exports = async (req,res,next)=>{
    try{
        const body = req.body;
         const {success} = transferTypes.safeParse(body);
         if(success){
           return next();
         }
         return res.status(400).json({
            massage:"invalid inputs",
         });

    }catch(e){
        console.log(e);
        return res.status(400).json({
            massage:"bad request"
        });
    }
}