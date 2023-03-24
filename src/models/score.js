const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

module.exports = sequelize.define('score', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});