const jwt = require("jsonwebtoken");

const createToken = function (id) {
  const token = jwt.sign({ data: id }, process.env.JWT_SECRET, {
    expiresIn: "12h",
  });
  return token;
};

const verifyToken = function (req, res, next) {
  try {
    const payload = req.headers.authorization;
    const token = payload.split(" ");
    jwt.verify(token[1], process.env.JWT_SECRET);
    next();
  } catch ({ message }) {
    res.status(401).json({
      message,
    });
  }
};

module.exports = { createToken, verifyToken };
