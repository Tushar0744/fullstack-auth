// backend/controllers/auth/protectedController.js
const User = require('../../models/userModel');

exports.getProtected = async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from JWT token (set by middleware)

    const user = await User.findByPk(userId, {
      attributes: ['id', 'name', 'email'], // Fetch only specific user details
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return user details and message
    res.status(200).json({ user, message: 'Protected route accessed' });
  } catch (err) {
    res.status(500).json({ error: 'Error accessing protected route' });
  }
};
