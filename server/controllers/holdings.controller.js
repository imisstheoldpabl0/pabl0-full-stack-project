const holdingsModel = require('../models/holdings.model');
const { getFirstUser } = require('../models/user_queries');

//Get user holdings by id
const getUserHoldingsById = async (req, res) => {
    const { id_user } = req.query; // {id_user}
    console.log(`id_user: ${id_user}`);
    const getHoldings = await holdingsModel.getUserHoldingsById({ id_user });
    res.status(200).json({
        data: getHoldings
    });
}

/* // Add new holding to user
const addHoldingByUserId = async (req, res) => {
    const newHolding = req.body;
    const response = await user.addHoldingByUserId(newHolding)
    res.status(201).json({
        "holding added": response
        data: newHolding
    });
} */

// Add/Modify holding (post with option for put)
const modifyHoldingById = async (req, res) => {
    const { id_user, id_crypto, crypto_amount } = req.query;
    console.log(`id_user: ${id_user, id_crypto, crypto_amount}`);
    console.log(`id_crypto: ${id_crypto}`);
    console.log(`crypto_amount: ${crypto_amount}`);
    //const postHoldings = await holdingsModel.modifyHoldingById({ id_user, id_crypto, crypto_amount });
    res.status(200).json({
        data: postHoldings
    });
}

const updateCryptoAmount = async (req, res) => {
    const { id_user, id_crypto, crypto_amount } = req.body;
    console.log(`id_user: ${id_user, id_crypto, crypto_amount}`);
    console.log(`id_crypto: ${id_crypto}`);
    console.log(`crypto_amount: ${crypto_amount}`);
    const putHoldings = await holdingsModel.updateCryptoAmount({ id_user, id_crypto, crypto_amount });
    res.status(200).json({
        data: putHoldings
    });
}

//Get all user holdings
const getAllUserHoldings = async (req, res) => {
    const getAllHoldings = await holdingsModel.getAllUserHoldings();
    res.status(200).json({
        data: getAllHoldings
    });
}

const getFirstUserHoldings = async (req, res) => {
    const getFirstHoldings = await holdingsModel.getFirstUserHoldings();
    res.status(200).json({
        data: getFirstHoldings
    });
}

module.exports = {
    getUserHoldingsById,
    getAllUserHoldings,
    modifyHoldingById,
    updateCryptoAmount,
    getFirstUserHoldings,
};  