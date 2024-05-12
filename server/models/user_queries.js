const userQueries = {
    createUser: `
    INSERT INTO users(first_name,last_name,username,email,password,login_status)
    VALUES ($1,$2,$3,$4,$5,$6)
    `,
    getUsers: `
    SELECT * FROM users;
    `,
    getFirstUser:`
    SELECT * FROM users 
    ORDER BY id_user ASC LIMIT 1
    `,
};

module.exports = userQueries;