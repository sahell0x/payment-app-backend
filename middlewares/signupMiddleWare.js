const {signUpTypes} = require("../types");


const signUpMiddleware = (req,res,next)=>{
    const userPayload = req.body;
    const {success} = signUpTypes.safeParse(userPayload);

    if (!success) {
        return res.status(400).send("invalid input!!");
    }
    next();
}

module.exports = signUpMiddleware;