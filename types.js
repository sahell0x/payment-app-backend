const z = require("zod");

const signUpTypes = z.object({
  email: z.string().max(50).email(),
  password: z.string().min(6),
  firstName: z.string().min(3).max(30),
  lastName: z.string().min(3).max(30),
});

const signInTypes = z.object({
  email: z.string().email(),
  password: z.string(),
});

const updateUserTypes = z.object({
  password: z.string().min(6).optional(),
  firstName: z.string().min(3).max(30).optional(),
  lastName: z.string().min(3).max(30).optional(),
});

const transferTypes = z.object({
  amount: z.number().min(1).refine(
    (n) => {
      const decimalPart = n.toString().split(".")[1];
      return !decimalPart || decimalPart.length <= 2;
    },
    {
      message:
        "Only integers or floats with up to 2 decimal places are allowed",
    }
  ),

  to: z.string(),
});

module.exports = { signUpTypes, signInTypes, updateUserTypes, transferTypes };
