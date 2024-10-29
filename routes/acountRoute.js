const express = require("express");
const authMiddleWare = require("../middlewares/authMiddleWare");
const transferMiddleWare = require("../middlewares/transferMiddleWare");
const balanceRoute = require("../route fucntions/balanceRoute");
const transferRoute = require("../route fucntions/transferRoute");
const router = express.Router();

router.get("/balance",authMiddleWare,balanceRoute);

router.post("/transfer",authMiddleWare,transferMiddleWare,transferRoute);

module.exports = router;