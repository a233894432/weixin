var express = require("express");
var router = express.Router();
var user = require("./user");
var task = require("./task");
var message = require("./message");

router.use("/user", user);
router.use("/task", task);
router.use("/message", message);

module.exports = router;