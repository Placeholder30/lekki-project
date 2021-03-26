const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./router");
const { sequelize, User } = require("./models/index");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(router);

const port = 5000;
app.listen(process.env.PORT || port, async () => {
  console.log(` App is listening on port ${port} `);
  await User.sync({ alter: true });
  await sequelize.authenticate();
  console.log("database connected");
});
