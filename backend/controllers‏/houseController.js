const House = require('../models/House');

// Function to calculate the risk based on the current value and loan amount
function getRisk(currentValue, loanAmount) {
    let risk = loanAmount / currentValue;
    if (risk > 0.5) risk = risk + 0.1;
    return Math.min(risk, 1);
}

// Function to create a new house record
const createHouse = async (req, res) => {
    const { address, currentValue, loanAmount } = req.body;
    let risk;
    if (currentValue && loanAmount)
        risk = getRisk(currentValue, loanAmount);

    // Create a new house record using the House model
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

// Function to get a house record by ID
const getHouseById = async (req, res) => {
    const { id } = req.params;
    // Find a house record with the given ID using the House model
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

// Function to update a house record by ID
const updateHouseById = async (req, res) => {
    const { id } = req.params;
    const { address, currentValue, loanAmount } = req.body;
    let risk;
    if (currentValue && loanAmount)
        risk = getRisk(currentValue, loanAmount);

    // Find a house record with the given ID using the House model
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
