const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),  // Set VARCHAR(100) size
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),  // Set VARCHAR(100) size
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),  // Set VARCHAR(100) size
    allowNull: false,
    field: 'password'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'updated_at'
  },
}, {
  tableName: 'users'  // Mapping to the "users" table
});

module.exports = User;
