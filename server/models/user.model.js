const pool = require("../config/bd_pgsql.js"); // Conexion a la BD
const queries = require("./user_queries.js"); // Queries SQL

const createUser = async (user) => {
  const { first_name, last_name, username, email, password, login_status } = user;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.createUser, [ // add SQL query in file
      first_name,
      last_name,
      username,
      email,
      password,
      login_status,
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getUsers = async () => {
  let client, result;
  try {
      client = await pool.connect();
      const data = await client.query(queries.getUsers)
      result = data.rows
  } catch (err) {
      console.log(err);
      throw err;
  } finally {
      client.release();
  }
  return result
};

const users = {
  createUser,
  getUsers,
};

module.exports = users;