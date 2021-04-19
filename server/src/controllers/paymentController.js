const { Order } = require("../models/index");
exports.pay = async function (req, res) {
  const { ProductUUID, UserUUID } = req.body;
  try {
    const order = await Order.create({
      orderDate: Date.now(),
      ProductUUID,
      UserUUID,
    });
    res.status(201).json({ message: order });
  } catch (error) {
    res.status(401).json({ message: error });
    console.error;
  }
};
