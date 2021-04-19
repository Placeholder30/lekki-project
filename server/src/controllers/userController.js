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
    const UUID = user;
    const token = createToken(UUID);
    res.status(200).json({
      firstName,
      token,
      authenticated: true,
      email,
    });
  } catch (err) {
    //handle registration errors
    res.status(400).json({ message: err.errors[0].message });
  }
};
exports.login = async function (req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    //check if user doesn't exist in db
    //render register page
    if (!user) {
      res.status(400).json({ message: "create an account first" });
    }
    const { UUID, firstName } = user;

    // if user exists, check password matches hashed password
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      User.update({ lastLogin: Date.now() }, { where: { UUID } });
      const token = createToken(UUID);
      res.status(200).json({
        firstName,
        token,
        authenticated: true,
        email,
        UUID,
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
  res.status(200).json({ authenticated: false });
};
