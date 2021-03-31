const jwt = require("jsonwebtoken");

exports.createToken = function (id) {
  const token = jwt.sign({ data: id }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 12,
  });
  return token;
};

exports.verifyToken = function (req, res, next) {
  try {
    const payload = req.headers.authorization;
    const verifiedPayload = jwt.verify(payload, process.env.JWT_SECRET);
    res.status(200).json({ message: "authenticated" });
    next();
  } catch (err) {
    res.status(400).json({
      message: "Not authenticated",
    });
  }
};
