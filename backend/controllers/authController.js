const User = require("../models/User");

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = new User({ email, password });
    await user.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
