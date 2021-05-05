const verifyInputs = function (req, res, next) {
  let { firstName, email, password, password2 } = req.body;

  if (password != password2)
    res.status(400).json({ message: "passwords do not match" });
  if (!firstName)
    res.status(400).json({ message: "firstname is a required field" });
  if (!email) res.status(400).json({ message: "email is a required field" });
  next();
};

module.exports = { verifyInputs };
