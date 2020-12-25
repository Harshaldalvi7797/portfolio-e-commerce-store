/** @format */

var express = require("express");
var router = express.Router();

const { body, check } = require("express-validator");

const { signup, signout } = require("../controller/auth");
router.post(
  "/signup",
  [check("name", "must be at least 5 chars long").isLength({ min: 5 })],
  signup
);

// router.post("/signup", signup);
router.get("/signout", signout);
module.exports = router;
