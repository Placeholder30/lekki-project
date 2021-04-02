const express = require("express");
const router = express.Router();
const { login, logout, register } = require("./controllers/userController");
const {
  getAllProducts,
  getAProduct,
  getAllMenProducts,
  getAllWomenProducts,
  addProduct,
} = require("./controllers/productsController");
const { cart } = require("./controllers/cartController");
const { verifyToken } = require("./middlewares/authentication");

//user login and registration routes
router.post("/api/register", register);
router.post("/api/login", login);
router.get("/api/logout", logout);
//get products routes
router.get("/api/products/all", getAllProducts);
router.get("/api/products/women", getAllWomenProducts);
router.get("/api/products/men", getAllMenProducts);
router.get("/api/products/product/:id", getAProduct);

//add products
router.post("/api/products/add", addProduct);
router.post("/api/cart", verifyToken, cart);
module.exports = router;
