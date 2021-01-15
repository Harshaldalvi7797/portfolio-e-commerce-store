const express = require("express");
const router = express.Router();

const { getProductById, createProduct, getProduct, photo, removeProduct, updateProduct, getAllProducts
  , getAllUniqueCategories } = require("../controller/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controller/auth");
const { getUserById } = require("../controller/user");

//all of params
router.param("userId", getUserById);
router.param("productId", getProductById);

//all of actual routes
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

//read routes
router.get("/product/:productId", getProduct)
router.get("/product/photo/:productId", photo)

//delete routes
router.delete("/removeproduct/:productId/:userId", isSignedIn,
  isAuthenticated,
  isAdmin, removeProduct)
router.put("/updateproduct/:productId/:userId", isSignedIn,
  isAuthenticated,
  isAdmin, updateProduct)

//listing route

router.get("/products", getAllProducts)
router.get("/products/categories", getAllUniqueCategories)
module.exports = router;
