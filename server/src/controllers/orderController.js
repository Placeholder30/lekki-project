const { Order, Product } = require("../models/index");

const createOrder = async function (req, res) {
  const { productId, userId } = req.body;

  try {
    const order = await Order.create({ productId, userId });
    res.status(201).json({ message: order });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

const showOrder = async function (req, res) {
  const { userId } = req.params;
  try {
    const products = [];
    const orders = await Order.findAll({
      where: { userId },
      include: [Product],
    });
    orders.map((product) => {
      const { orderId, orderDate, Product } = product;
      const { dataValues } = Product;
      const newObj = { orderId, orderDate, ...dataValues };
      products.push(newObj);
    });

    res.status(200).json({ message: products });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

module.exports = { showOrder, createOrder };
