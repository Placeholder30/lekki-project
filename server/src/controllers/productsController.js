const { Product } = require("../models/index");
const productsJson = require("../data/products");

const getProducts = async function (req, res) {
  const products = await Product.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  res.status(200).json(products);
};

const addProduct = async function (req, res) {
  const { name, category, imageUrl, alt } = req.body;
  try {
    const product = await Product.create({ name, category, imageUrl, alt });
    res.status(201).json({ message: product });
  } catch (err) {
    res.status(401).json({
      message: err,
    });
    console.log(err);
  }
};

// secure this end point with some sort of auth
const populateDb = function (req, res) {
  productsJson.forEach(async ({ name, id, imageUrl, alt, category, price }) => {
    try {
      const result = await Product.create({
        id,
        name,
        category,
        imageUrl,
        alt,
        price,
      });
      res.status(201).json({ message: result });
    } catch (err) {
      res.status(401).json({
        message: err,
      });
      console.err;
    }
  });
};

module.exports = { getProducts, addProduct, populateDb };
