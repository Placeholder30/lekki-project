const { Order } = require("../models/index");
exports.pay = async function (req, res) {
  const { productId, userId } = req.body;
  try {
    const order = await Order.create({
      productId,
      userId,
    });

    res.status(201).json({ message: order });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error });
  }
};

// const result = await Order.findAll({
//   where: { userId: userId },
//   include: "User",
// });
