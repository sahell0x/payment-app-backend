const express = require("express");
const signUpMiddleware = require("../middlewares/signupMiddleWare");
const signinMiddleWare = require("../middlewares/signinMiddleWare");
const authMiddleWare = require("../middlewares/authMiddleWare");
const singUpRoute = require("../route fucntions/singUpRoute");
const signInRoute = require("../route fucntions/signInRoute");
const searchRoute = require("../route fucntions/searchRoute");
const updateUserRoute = require("../route fucntions/updateUserRoute");

const router = express.Router();

router.post("/signup", signUpMiddleware, singUpRoute);

router.post("/signin",signinMiddleWare,signInRoute);

router.get("/bulk",searchRoute);

router.put("/",authMiddleWare,updateUserRoute);

module.exports = router;
