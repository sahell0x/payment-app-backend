const express = require("express");
const authMiddleWare = require("../middlewares/authMiddleWare");
const balanceRoute = require("../route fucntions/balanceRoute");
const router = express.Router();

router.get("/balance",authMiddleWare,balanceRoute);

module.exports = router;