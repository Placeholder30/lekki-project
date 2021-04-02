const products = require("../data/products");
const { Product } = require("../models/index");

exports.getAllProducts = async function (req, res) {
  res.status(200).json(products);
};
exports.getAllMenProducts = async function (req, res) {
  res.send("Welcome to the male section");
};

exports.getAllWomenProducts = async function (req, res) {
  res.send("welcome to the female section");
};
exports.getAProduct = async function (req, res) {
  res.send(`it appears you want to buy a ${req.params.id}`);
};

exports.addProduct = async function (req, res) {
  const { name, category, imageUrl } = req.body;
  try {
    const product = await Product.create({ name, category, imageUrl });
    res.status(201).json({ message: product });
  } catch (err) {
    res.status(401).json({
      message: err,
    });
    console.log(err);
  }
};
