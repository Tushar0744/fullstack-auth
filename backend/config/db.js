// backend/config/db.js
const { Sequelize } = require('sequelize');

// Load environment variables from .env file
require('dotenv').config();

// Create a new instance of Sequelize and connect to PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME,      // Database name
  process.env.DB_USER,      // Database username
  process.env.DB_PASS,      // Database password
  {
    host: process.env.DB_HOST,   // Database host, typically 'localhost'
    dialect: 'postgres',         // We are using PostgreSQL
    port: process.env.DB_PORT || 5432, // Port number (default is 5432 for PostgreSQL)
  }
);

// Test the connection to the database
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
