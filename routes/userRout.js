const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const User = require("../db");
const express = require("express");
const signUpMiddleware = require("../middlewares/signupMiddleWare");

const router = express.Router();

router.post("/signup", signUpMiddleware, async (req, res) => {
  try {
    const body = req.body;
    const user = await User.findOne({ email: body.email });

    if (user) {
      return res.json({
        massage: "username  already exist",
      });
    }

    const response = await User.create(req.body);

    const userToken = jwt.sign({ id: response._id }, secret);
    res.status(200).json({
      massage: "user created successfully",
      token: userToken,
    });
  } catch (e) {
    console.log(e)
    res.status(500).send("server error");
  }
});

router.post("/signin",)

module.exports = router;
