const { Sequelize } = require('sequelize')
const {development} = require('./config.json')

// Create a new Sequelize instance, passing in the data from the development object
const sequelize = new Sequelize(development.database, development.username , development.password, {
  host: 'localhost',
  dialect: 'mysql',
});


module.exports = sequelize;
