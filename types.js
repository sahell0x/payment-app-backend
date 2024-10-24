const z = require("zod");

const userTypes = mongoose.Schema({
    userName: z.string().max(30),
    passWord: z.string().min(6),
    firstName: z.string().min(3).max(30),
    lastName: z.string().min(3).max(30),
  });

  module.exports=userTypes;