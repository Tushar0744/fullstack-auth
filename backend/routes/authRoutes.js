// backend/routes/authRoutes.js
const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { signup } = require('../controllers/auth/signupController');
const { login } = require('../controllers/auth/loginController');
const { getProtected } = require('../controllers/auth/protectedController');
const { logout } = require('../controllers/auth/logoutController');

const router = express.Router();

// Auth routes
router.post('/signup', signup); // Signup route
router.post('/login', login);   // Login route
router.get('/protected', protect, getProtected); // Protected route (requires authentication)
router.get('/logout', logout);  // Logout route

module.exports = router;
