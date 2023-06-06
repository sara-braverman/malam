const House = require('../models/House');

//createHouse
const createHouse = async (req, res) => {
    const { address, currentValue, loanAmount, risk } = req.body;
    House.create({
        address,
        currentValue,
        loanAmount,
        risk
    })
        .then((house) => {
            res.status(201).json(house);
        })
        .catch((err) => {
            console.log('Error:', err);
            res.status(500).json({ error: 'Internal server error' });
        });
};

const getHouseById = async (req, res) => {
    const { id } = req.params;
    House.findByPk(id)
        .then((house) => {
            if (!house) {
                res.status(404).json({ error: 'House not found' });
            } else {
                res.json(house);
            }
        })
        .catch((err) => {
            console.log('Error:', err);
            res.status(500).json({ error: 'Internal server error' });
        });
};

const updateHouseById = async (req, res) => {
    const { id } = req.params;
    const { address, currentValue, loanAmount, risk } = req.body;

    House.findByPk(id)
        .then((house) => {
            if (!house) {
                res.status(404).json({ error: 'House not found' });
            } else {
                house.update({
                    address: address || house.address,
                    currentValue: currentValue || house.currentValue,
                    loanAmount: loanAmount || house.loanAmount,
                    risk: risk || house.risk
                })
                    .then(() => {
                        res.json(house);
                    })
                    .catch((err) => {
                        console.log('Error:', err);
                        res.status(500).json({ error: 'Internal server error' });
                    });
            }
        })
        .catch((err) => {
            console.log('Error:', err);
            res.status(500).json({ error: 'Internal server error' });
        });
};

module.exports = {
    createHouse,
    getHouseById,
    updateHouseById
}
