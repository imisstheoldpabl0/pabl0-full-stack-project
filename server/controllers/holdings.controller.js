const user = require('../models/holdings.model');

//Get user holdings by id
const getUserHoldingsById = async (req, res) => {
    const { id_user } = req.query; // {id_user}
    console.log(`id_user: ${id_user}`);
    const holdings = await user.getUserHoldingsById({ id_user });
    res.status(200).json({
        data: holdings
    });
}

/* // Add new holding to user
const addHoldingByUserId = async (req, res) => {
    const newHolding = req.body;
    const response = await user.addHoldingByUserId(newHolding)
    res.status(201).json({
        "holding added": response,
        data: newHolding
    });
} */

// Modify holding (post with option for put)
const modifyHoldingById = async (req, res) => {
    const { id_user, id_crypto, crypto_amount } = req.query;
    console.log(`id_user: ${id_user, id_crypto, crypto_amount}`);
    console.log(`id_crypto: ${id_crypto}`);
    console.log(`crypto_amount: ${crypto_amount}`);
    const holdings = await user.modifyHoldingById({ id_user, id_crypto, crypto_amount });
    res.status(200).json({
        data: holdings
    });
}

const updateCryptoAmount = async (req, res) => {
    const { id_user, id_crypto, crypto_amount } = req.body;
    console.log(`id_user: ${id_user, id_crypto, crypto_amount}`);
    console.log(`id_crypto: ${id_crypto}`);
    console.log(`crypto_amount: ${crypto_amount}`);
    const holdings = await user.updateCryptoAmount({ id_user, id_crypto, crypto_amount });
    res.status(200).json({
        data: holdings
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
    modifyHoldingById,
    updateCryptoAmount
};  