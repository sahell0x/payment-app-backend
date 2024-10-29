const express = require("express");
const authMiddleWare = require("../middlewares/authMiddleWare");
const router = express.Router();

router.get("/balance",authMiddleWare)



module.exports = router;