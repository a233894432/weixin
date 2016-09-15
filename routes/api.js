var express = require("express");
var router = express.Router();
var user = require("./user");
var task = require("./task");
var message = require("./message");
var contact = require("./contact");

router.use("/user", user);
router.use("/task", task);
router.use("/message", message);
router.use("/contact", contact);

module.exports = router;