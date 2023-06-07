const express = require("express");
const cors = require('cors');
const sequelize = require('./config/database');
const sync = require('./config/sync')

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/houses", require("./routes‏/houseRoutes"));

// Connect to database and start server
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to database');
    app.listen(3200, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((error) => {
    console.error('Unable to connect to database:', error);
  });
