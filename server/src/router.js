const express = require("express");
const router = express.Router();
const { login, logout, register } = require("./controllers/userController");
const { getProducts, addProduct } = require("./controllers/productsController");
const { pay } = require("./controllers/paymentController");
const { verifyToken } = require("./middlewares/authentication");

//user login and registration routes
router.post("/api/register", register);
router.post("/api/login", login);
router.get("/api/logout", logout);
//get products routes
router.get("/api/products", getProducts);

//add products
router.post("/api/products", addProduct);
router.post("/api/pay", verifyToken, pay);
module.exports = router;
