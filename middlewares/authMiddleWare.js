const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const authMiddleWare = (req,res,next)=>{
    const authHeader = req.headers.authorizations;
    try{
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(403).json({});
        }
        
        const token = authHeader.split(" ")[1];
        const decode = jwt.verify(token,secret);
        if(decode.id){
            next();
        }else{
            res.status(403).json({});
        }

    }catch(e){
        console.log(e);
        return res.status(403).json({ })

    }
}