const {signInTypes} = require("../types");

const signinMiddleWare = (req,res,next)=>{
    const bodyPayload = req.body;
    const {success} = signInTypes.safeParse(bodyPayload);
    if(!success){
        return res.satatus(400).json({
            massage:"invalid input"
        })
    }

    next();

}

module.exports = signinMiddleWare;