// backend/controllers/auth/signupController.js
const bcrypt = require('bcryptjs');
const User = require('../../models/userModel');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const user = await User.create({ name, email, password: hashedPassword }); // Save the user in DB
    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
