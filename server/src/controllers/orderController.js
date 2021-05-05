const { Order, Product } = require("../models/index");

const createOrder = async function (req, res) {
  const { cart } = req.body;
  const items = cart.map((item) => {
    let tempObj = {
      productId: item.UUID,
      userId: item.userId,
      orderQuantity: item.quantity,
    };
    return tempObj;
  });

  try {
    const orders = await Order.bulkCreate(items);
    res.status(201).json({ message: orders });
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
