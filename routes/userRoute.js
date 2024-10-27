const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = process.env.JWT_SECRET;
const User = require("../db");
const express = require("express");
const signUpMiddleware = require("../middlewares/signupMiddleWare");
const signinMiddleWare = require("../middlewares/signinMiddleWare");
const singUpRoute = require("../route fucntions/singUpRoute");
const signInRoute = require("../route fucntions/signInRoute");

const router = express.Router();

router.post("/signup", signUpMiddleware, singUpRoute);

router.post("/signin",signinMiddleWare,signInRoute);

module.exports = router;