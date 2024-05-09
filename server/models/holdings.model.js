const pool = require("../config/bd_pgsql.js"); // Conexion a la BD
const queries = require("./holdings_queries.js"); // Queries SQL

const getUserHoldingsById = async (holding) => {
    const { id_user } = holding;
    let client, result;
    try {
        client = await pool.connect();
        console.log(`Executing query: ${queries.getUserHoldingsById}`);
        console.log(`With id_user: ${id_user}`);
        const data = await client.query(queries.getUserHoldingsById, [id_user,]);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
};

// latest
const modifyHoldingById = async (changeHolding) => {
    const { id_user, id_crypto, crypto_amount } = changeHolding;
    let client, result;
    try {
        client = await pool.connect();
        const userExists = await client.query(queries.userExists, [id_user]);
        const hasThatCrypto = await client.query(queries.hasThatCrypto, [id_crypto]);

        // if the user does not exist throw error and return
        if (userExists.rows.length === 0) {
            console.log(err);
            result = ('The user does not exist');
            return result;
        }
        
        // if the user DOES exist BUT DOESNT have that coin, add (POST) to id_crypto and crypto_amount(Create a new row for that specific crypto and amount)
        if (userExists.rows.length !== 0 && hasThatCrypto.rows.length === 0) {
            const data = await client.query(queries.addNewCrypto, [id_crypto, crypto_amount]);
            result = data.rowCount;
            console.log(result);
            return result;
        }

        // if the user does exist AND has that coin, modify (PUT) to id_crypto and crypto_amount WHERE id_user=$1 (Modify the row where that crypto is with the correct amount)
        if (userExists.rows.length !== 0 && hasThatCrypto.rows.length !== 0) {
            updateCryptoAmount();
            console.log(result);
            return result;
        }

    } catch (err) {
        console.log(err);
        throw err;

    } finally {
        client.release();
        return changeHolding;
    }
}

// Only executes if the user exists AND has that crypto to update the crypto_amount value in the table
// still have to pass on id_user to this function from the previous function ?????
const updateCryptoAmount = async (changeHolding) => {
    const { id_user, id_crypto, crypto_amount } = changeHolding;
    try {
        const client = await pool.connect();
        const data = await client.query(queries.updateCryptoAmount, [id_user, id_crypto, crypto_amount]);
        result = data.rowCount;
        console.log(result);
    } catch {
        console.log(err);
        throw err;

    } finally {
        client.release();
    }
}

// old one
/* const addHoldingByUserId = async (newHolding) => {
    const { id_user, id_crypto, crypto_amount } = newHolding;
    try {
        // Check if the user exists
        const client = await pool.connect();
        const userResult = await client.query('SELECT id_user FROM users WHERE id_user = $1', [id_user]);

        // If the user does not exist, throw an error
        if (userResult.rows.length === 0) {
            throw new Error(`User with id ${id_user} does not exist`);
        }

        // If the user exists, insert the new holding without id_user
        await client.query('INSERT INTO holdings (id_crypto, crypto_amount) VALUES ($1, $2)', [id_crypto, crypto_amount]);

    } catch (error) {
        console.log(error);
    }
}; */

const getAllUserHoldings = async () => {
    let client, result;
    try {
        client = await pool.connect();
        console.log(`Executing query: ${queries.getAllUserHoldings}`);
        const data = await client.query(queries.getAllUserHoldings)
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
};

const holdings = {
    getUserHoldingsById,
    getAllUserHoldings,
    modifyHoldingById,
    updateCryptoAmount,
};

module.exports = holdings;