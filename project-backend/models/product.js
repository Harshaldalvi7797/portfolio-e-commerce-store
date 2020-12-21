/** @format */

const mongoose = require("mongoose");
const { objectId } = mongoose.Schema;
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 1000
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 2000
  },
  price: {
    type: Number,
    required: true,
    maxlength: 32,
    trim: true
  },
  category: {
    type: objectId,
    ref: "Category",
    required: true
  },
  stock: {
    type: Number
  },
  sold: {
    type: Number,
    default: 0
  },
  photo: {
    data: Buffer,
    contentType: String
  }
});
module.exports = mongoose.model("Product", productSchema);
