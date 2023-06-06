const router = require("express").Router();
const houseController = require('../controllers‏/houseController');

router.post('/', houseController.createHouse);
router.get('/:id', houseController.getHouseById);
router.put('/:id', houseController.updateHouseById);

module.exports = router;
