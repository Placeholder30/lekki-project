const express = require("express");
const router = express.Router();
const { login, logout, register } = require("./controllers/userController");
const {
  getProducts,
  getAProduct,

  addProduct,
} = require("./controllers/productsController");
const { cart } = require("./controllers/cartController");
const { verifyToken } = require("./middlewares/authentication");

//user login and registration routes
router.post("/api/register", register);
router.post("/api/login", login);
router.get("/api/logout", logout);
//get products routes
router.get("/api/products/", getProducts);

router.get("/api/product/:id", getAProduct);

//add products
router.post("/api/products/", addProduct);
router.post("/api/cart", verifyToken, cart);
module.exports = router;
