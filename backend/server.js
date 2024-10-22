const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet'); // Helmet for secure HTTP headers
const xss = require('xss-clean'); // xss-clean to prevent XSS
const authRoutes = require('./routes/authRoutes');
require('./config/db'); // Initialize database

const app = express();

// Apply security middlewares
app.use(helmet()); // Secure headers with Helmet
app.use(xss());    // Sanitize user input to prevent XSS

// Enable CORS and parse JSON requests
app.use(cors());
app.use(bodyParser.json());

// API routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
