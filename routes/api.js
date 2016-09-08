var express = require("express");
var router = express.Router();
var user = require("./user");
var task = require("./task");

router.use("/user",user);
router.use("/task",task);

module.exports = router;