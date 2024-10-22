// backend/controllers/auth/logoutController.js

// For JWT, logout is handled client-side by removing the token
exports.logout = (req, res) => {
  res.status(200).json({ message: 'Logout successful' });
};
