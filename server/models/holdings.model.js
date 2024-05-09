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
};

module.exports = holdings;