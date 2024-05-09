const user = require('../models/holdings.model');

//Get user holdings by id
const getUserHoldingsById = async (req, res) => {
    const { id_user } = req.query; // {id_user}
    console.log(`id_user: ${id_user}`); // Add this line
    const holdings = await user.getUserHoldingsById({ id_user }); 
    res.status(200).json({
        data: holdings
    });
}

// Add new holding to user
const addHoldingByUserId = async (req, res) => {
    const newHolding = req.body;
    const response = await user.addHoldingByUserId(newHolding)
    res.status(201).json({
        "holding added": response,
        data: newHolding
    });
}

//Get all user holdings
const getAllUserHoldings = async (req, res) => {
    const holdings = await user.getAllUserHoldings();
    res.status(200).json({
        data: holdings
    });
}


module.exports = {
    getUserHoldingsById,
    getAllUserHoldings,
    addHoldingByUserId
};  