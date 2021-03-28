exports.allProducts = async function (req, res) {
  res.send("You'll find it all here");
};
exports.menProducts = async function (req, res) {
  res.send("Welcome to the male section");
};

exports.womenProducts = async function (req, res) {
  res.send("welcome to the female section");
};
