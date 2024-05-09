const user = require('../models/holdings.model');

const getUserHoldingsById = async (req, res) => {
    const { id_user } = req.query; // {id_user}
    const holdings = await user.getUserHoldingsById(id_user);
    res.status(200).json({
        data: holdings
    });
}

const getAllUserHoldings = async (req, res) => {
    const holdings = await user.getAllUserHoldings();
    res.status(200).json({
        data: holdings
    });
}


module.exports = {
    getUserHoldingsById,
    getAllUserHoldings,
};  