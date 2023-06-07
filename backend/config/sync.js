const sequelize = require('./database');
const User = require('../models/House');

// Synchronize the database with the House model
sequelize.sync().then(() => {
  console.log('Database synchronized');
}).catch(error => {
  console.log('Error synchronizing database:', error);
});

