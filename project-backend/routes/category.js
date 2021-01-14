const express = require("express")
const router = express.Router()

const { getCategoryById, createCategory, getCategory, getAllCategory, updateCategory, removeCategory } = require("../controller/category")
const { isSignedIn, isAdmin, isAuthenticated } = require("../controller/auth")
const { getUserById } = require("../controller/user")
router.param("userId", getUserById)
router.param("categoryId", getCategoryById)



router.post("/category/create/:userId", isSignedIn, isAdmin, isAuthenticated, createCategory)

//read
router.get("/category/:categoryId", getCategory)
router.get("/categories", getAllCategory)

//update

// router.put("/category/:categoryId/:userId", isSignedIn, isAdmin, updateCategory)
router.put(
    "/category/:categoryId",

    updateCategory
);

//delete
router.delete("/category/categoryId/:userId", isSignedIn, isAdmin, isAuthenticated, removeCategory)



module.exports = router