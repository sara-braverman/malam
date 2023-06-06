const sequelize = require('./database');
const User = require('../models/House');

sequelize.sync().then(() => {
  console.log('Database synchronized');
}).catch(error => {
  console.log('Error synchronizing database:', error);
});

