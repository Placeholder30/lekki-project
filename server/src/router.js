const express = require("express");
const router = express.Router();
const { login, register } = require("./controllers/userController");
const {
  getAllProducts,
  getAProduct,
  getAllMenProducts,
  getAllWomenProducts,
  addProduct,
} = require("./controllers/productsController");

//user login and registration routes
router.post("/api/register", register);
router.post("/api/login", login);

//get products routes
router.get("/api/products/all", getAllProducts);
router.get("/api/products/women", getAllWomenProducts);
router.get("/api/products/men", getAllMenProducts);
router.get("/api/products/product/:id", getAProduct);

//add products
router.post("/api/products/add", addProduct);
module.exports = router;
