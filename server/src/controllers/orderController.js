const { Order, Product } = require("../models/index");

//use bulkCreate Illi
const createOrder = function (req, res) {
  const { cart } = req.body;
  console.log(cart);
  cart.forEach(async (item) => {
    try {
      const order = await Order.create({
        productId: item.UUID,
        userId: item.userId,
        orderQuantity: item.quantity,
      });
    } catch (error) {
      res.status(401).json({ message: error });
    }
  });
  res.status(201).json({ message: "orders created" });
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
      const { orderId, orderDate, orderQuantity, Product } = product;
      const { dataValues } = Product;
      const newObj = { orderId, orderDate, orderQuantity, ...dataValues };
      products.push(newObj);
    });

    res.status(200).json({ message: products });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

module.exports = { showOrder, createOrder };
