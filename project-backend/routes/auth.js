/** @format */

var express = require("express");
var router = express.Router();

const {signout} = require("../controller/auth");
router.get("/signout", signout);
module.exports = router;
