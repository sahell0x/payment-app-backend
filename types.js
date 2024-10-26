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

  module.exports= {signUpTypes,signInTypes};