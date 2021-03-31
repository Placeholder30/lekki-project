const { User } = require("../models/index");
const bcrypt = require("bcryptjs");
const { createToken } = require("../middlewares/authentication");

exports.register = async function (req, res) {
  let { firstName, lastName, email, password } = req.body;
  //do validation before database request
  let salt = bcrypt.genSaltSync(10);
  password = bcrypt.hashSync(password, salt);

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.status(200).json({
      message: `You've successfully registered ${user.firstName}`,
      name: user.firstName,
    });
  } catch (err) {
    //handle registration errors
    res.status(400).json({ message: err.errors });
  }
};
exports.login = async function (req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    const { UUID, firstName } = user;
    //check if user doesn't exist in db
    //render register page
    if (user === null) {
      res.status(400).json({ message: "create an account first" });
    }

    // if user exists, check password matches hashed password
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const token = createToken(UUID);
      res.status(200).json({
        message: `Hi, ${firstName}`,
        // name: firstName,
        token,
        authenticated: true,
      });
    } else {
      //handle invalid password error
      res
        .status(400)
        .json({ message: "invalid username, or password or both, heh" });
    }
  } catch (err) {
    //handle login errors, send a nice message to user
    console.log(err);
    res.status(400).json({ message: "Please fill the required fields" });
  }
};
exports.logout = function (req, res) {
  res.status(200).json({ message: "you are currently logged out" });
};
