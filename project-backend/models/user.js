/** @format */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 37
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    maxlength: 37
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  userinfo: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  salt: String,
  roll: {
    type: Number,
    default: 0
  },
  purchases: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model("User", userSchema);
