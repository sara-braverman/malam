const router = require("express").Router();
const houseController = require('../controllers‏/houseController');

// Define the routes for creating, retrieving, and updating house records
router.post('/', houseController.createHouse);
router.get('/:id', houseController.getHouseById);
router.put('/:id', houseController.updateHouseById);

module.exports = router;
