/** @format */

const mongoose = require("mongoose");

const { objectId } = mongoose.Schema;

const productCartSchema = new mongoose.Schema({
  product: { type: objectId, ref: "Product" },
  name: String,
  count: Number,
  price: Number
});
const ProductCart = mongoose.model("ProductCart", productCartSchema);
const orderSchema = new mongoose.Schema(
  {
    products: [productCartSchema],
    transaction_id: {},
    amount: { type: Number },
    address: String,
    updated: Date,
    user: {
      type: objectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = { Order, ProductCart };
