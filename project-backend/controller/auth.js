/** @format */

const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { validationResult } = require("express-validator");
// router.get("/signout", (req, res) => {
//   res.send("user signout");
// });
exports.signout = (req, res) => {};
exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array()[0].msg });
  }
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({ err: "not able" });
    }
    res.json(user);
    console.log(user);
  });
};
