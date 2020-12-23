/** @format */

var express = require("express");
var router = express.Router();

const { signup } = require("../controller/auth");
router.post("/signup", signup);

const { signout } = require("../controller/auth");
router.get("/signout", signout);
module.exports = router;
