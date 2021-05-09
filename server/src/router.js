const express = require("express");
const router = express.Router();
const { login, logout, register } = require("./controllers/userController");
const {
  getProducts,
  addProduct,
  populateDb,
} = require("./controllers/productsController");
const { createOrder, showOrder } = require("./controllers/orderController");
const { verifyToken } = require("./middlewares/authentication");
const { verifyInputs } = require("./middlewares/errorHandler");

//user login and registration routes
router.post("/api/register", verifyInputs, register);
router.post("/api/login", login);
router.post("/api/logout", logout);
//get products routes
router.get("/api/products", getProducts);

//add products
// router.post("/api/products", populateDb);
router.post("/api/products", addProduct);
//place and view orders
router.get("/api/order/:userId", verifyToken, showOrder);
router.post("/api/order", verifyToken, createOrder);
module.exports = router;
