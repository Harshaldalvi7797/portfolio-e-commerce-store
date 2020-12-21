/** @format */

import mongoose from "mongoose";
const crypto = require("crypto");
const uuidv1 = require("uuidv1/v1");

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
  encry_password: {
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
userSchema
  .virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function() {
    return this._password;
  });

userSchema.method = {
  autheticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function(plainpassword) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};

module.exports = mongoose.model("User", userSchema);
