const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated, isAdmin } = require("../controller/auth");
const { createOrder, getOrderById, getAllOrders, updateStatus, getOrderStatus } = require("../controller/order")
const { getUserById, pushOrderInPurchaseList } = require("../controller/user");
const { updateStock } = require("../controller/product")


//params
router.param("userId", getUserById);
router.param("productId", getOrderById);

//Actual Routes

//create order
router.post("/order/create/:userId", isSignedIn, isAuthenticated, pushOrderInPurchaseList, updateStock
    , createOrder)

//read
router.get("/order/all/:userId", isSignedIn, isAuthenticated, isAdmin, getAllOrders)

router.get("order/status/:userId", getOrderStatus)

router.put("/order/:orderId/status/:userId", isSignedIn, isAdmin, isAuthenticated, updateStatus)
module.exports = router;