const { Pool } = require("pg");
const queries = require("./queries"); // Queries SQL

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: "5432",
    database: "postgres",
    password: "123456",
});

const getFavoritesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getFavoritesByEmail, [email]);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

const users = {
    getFavoritesByEmail,
    //deleteEntry
};

module.exports = users;