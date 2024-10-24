const userTypes = require("../types");


const signUpMiddleware = (req,res,next)=>{
    const userPayload = req.body;
    const parsedBody = userTypes.safeParse(userPayload);

    if (!parsedBody.success) {
        res.status(400).send("invalid input!!");
        return;
    }
    next();
}

module.exports = signUpMiddleware;