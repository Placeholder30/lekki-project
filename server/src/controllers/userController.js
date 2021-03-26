const { sequelize, User } = require("../models/index");
const bcrypt = require("bcryptjs");

exports.register = async function (req, res) {
  let { firstName, lastName, email, password, address } = req.body;

  let salt = bcrypt.genSaltSync(10);
  password = bcrypt.hashSync(password, salt);

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
    const user = await User.findOne({ where: { email } });
    console.log("i ran", user);
    if (user === null)
      res.status(400).json({ message: "create an account first" });
    const result = await bcrypt.compare(password, user.password);

    if (result) {
      res
        .status(200)
        .json({ message: `You've logged in sucessfully ${user.firstName}` });
    } else {
      res
        .status(403)
        .json({ message: "invalid username, or password or both, heh" });
    }
  } catch (error) {
    res.status(500).json({ message: "an internal server error occured" });
  }
};
