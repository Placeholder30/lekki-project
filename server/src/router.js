const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const { sequelize, User } = require("./models/index");

router.get("/", async (req, res) => {
  res.status(200).json({
    message: "Welcome to the home endpoint",
  });
});

router.post("/register", userController.register);
router.post("/login", userController.login);
module.exports = router;
