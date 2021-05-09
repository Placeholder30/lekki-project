const { User, TokenBlacklist } = require("../models/index");
const bcrypt = require("bcryptjs");
const { createToken } = require("../middlewares/authentication");

const register = async function (req, res) {
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
      UUID: user.UUID,
    });
  } catch (err) {
    //handle registration errors
    res.status(400).json({ message: err.errors[0].message });
  }
};
const login = async function (req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
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
      // handle invalid password error
      res
        .status(400)
        .json({ message: "invalid username, or password or both, heh" });
    }
  } catch (err) {
    // handle login errors, send a nice message to user
    res
      .status(400)
      .json({ message: "invalid username, or password or both, heh" });
  }
};
const logout = function (req, res) {
  // const token = req.body;
  // TokenBlacklist.create({ token });
  res.status(200).json({ authenticated: false });
};

module.exports = { login, register, logout };
