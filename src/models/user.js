const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

module.exports = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userPwd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});