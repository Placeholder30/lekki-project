const express = require("express");
const {
  allProducts,
  menProducts,
  womenProducts,
} = require("./controllers/productsController");
const { login, register } = require("./controllers/userController");
const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).json({
    message: "Welcome to the home endpoint",
  });
});

//user login and registration routes
router.post("/api/register", register);
router.post("/api/login", login);

//get products routes
router.get("/api/products/all", allProducts);
router.get("/api/products/men", menProducts);
router.get("/api/products/women", womenProducts);

module.exports = router;
