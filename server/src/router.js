const express = require("express");
const router = express.Router();
const { sequelize, User } = require("../models/index");

router.get("/", async (req, res) => {
  console.log("database Schema has been created");
  res.status(200).json({
    message: "Welcome to the home endpoint",
  });
});

router.post("/createUser", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await User.create({ firstName, email, lastName, password });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
});
module.exports = router;
