const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.status(200).json({ message: "welcome to the home endpoint" });
});

const port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log(` App is listening on port ${port} `);
});

db();
