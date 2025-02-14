const User = require("../models/User");

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
