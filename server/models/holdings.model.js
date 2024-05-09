const pool = require("../config/bd_pgsql.js"); // Conexion a la BD
const queries = require("./holdings_queries.js"); // Queries SQL

const getUserHoldingsById = async (holding) => {
    const { id_user } = holding;
    let client, result;
    try {
        client = await pool.connect();
        console.log(`Executing query: ${queries.getUserHoldingsById}`);
        console.log(`With id_user: ${id_user}`);
        const data = await client.query(queries.getUserHoldingsById, [
            id_user,
        ]);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
};

const addHoldingByUserId = async (newHolding) => {
    const { id_user, id_crypto, crypto_amount } = newHolding;
    let client, result;
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
};

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
    addHoldingByUserId,
};

module.exports = holdings;