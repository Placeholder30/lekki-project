const { Order, Product } = require("../models/index");

exports.createOrder = async function (req, res) {
  const { productId, userId } = req.body;

  try {
    const order = await Order.create({ productId, userId });
    res.status(201).json({ message: order });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

exports.showOrder = async function (req, res) {
  const { userId } = req.params;

  try {
    const product = await Order.findAll({
      where: { userId },
      include: [Product],
    });
    res.status(200).json({ message: product });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
