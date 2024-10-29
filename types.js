const z = require("zod");

const signUpTypes = z.object({
    email: z.string().max(50).email(),
    password: z.string().min(6),
    firstName: z.string().min(3).max(30),
    lastName: z.string().min(3).max(30),
  });

  const signInTypes = z.object({
    email:z.string().email(),
    password:z.string()
  })

  const updateUserTypes = z.object({
    password: z.string().min(6).optional(),
    firstName: z.string().min(3).max(30).optional(),
    lastName: z.string().min(3).max(30).optional()
  })

  const transferTypes = z.object({
    amount:z.number().min(1),
    to:z.string()
  });

  module.exports= {signUpTypes,signInTypes,updateUserTypes,transferTypes};