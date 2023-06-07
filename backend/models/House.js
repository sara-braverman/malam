const { Sequelize } = require('sequelize')
const sequelize = require('../config/database');

// Define the House model using Sequelize
const House = sequelize.define('House', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  currentValue: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  loanAmount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  risk: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
});

module.exports = House;
