const { sequelize, User } = require("../models/index");

exports.register = async function (req, res) {
  const { firstName, lastName, email, password, address } = req.body;
  try {
    const user = await User.create({
      firstName,
      email,
      lastName,
      password,
      address,
    });
    res
      .status(200)
      .json({ message: `You've successfully registered ${user.firstName}` });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });
    res.status(200).json({ message: user.email });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
