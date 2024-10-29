const mongoose = require("mongoose");
const {Acount} = require("../db");

module.exports = async (req,res)=>{
    try{
        const userId = req.userId;
        const session = await mongoose.startSession();

        session.startTransaction();
        const { amount, to } = req.body;

        amount *= 100; // convert into intizer and suppport our decimal policy that we are storing numbers as intizer in db to get rid of floating-point precision error;

        const acount = await Acount.findOne({userId:userId}).session(session);

        if(!acount || acount.balance < amount){
            await session.abortTransaction();
            return res.status(400).json({
                massage:"insufficient balance"
            });
        }

        const toAcount = await Acount.findOne({userId:to}).session(session);

        if(!toAcount){
            await session.abortTransaction();
            return res.status(400).json({
                massage:"invalid acount",
            });
        }

        await Acount.updateOne({userId:userId},{$inc:{balance: -amount}}).session(session);

        await Acount.updateOne({userId:to},{$inc:{balance: amount}}).session(session);
        
        //commit transaction
        await session.commitTransaction();

        return res.status(200).json({
            massage:"Transfer successful",
        });

    }catch(e){

        console.log(e);

        return res.status(400).json({
            massage:"bad request",
        })
    }
}