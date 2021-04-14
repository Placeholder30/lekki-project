const { Product } = require("../models/index");

exports.getProducts = async function (req, res) {
  const products = await Product.findAll({
    attributes: { exclude: ["UUID", "createdAt", "updatedAt"] },
  });
  res.status(200).json(products);
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
