const user = require('../models/user.model');

const createUser = async (req, res) => {
    const newUser = req.body; // {first_name, last_name, username, email, password, login_status}
    const response = await user.createUser(newUser);

    
    res.status(201).json({
        "user_created": response,
        data: newUser
    });
}

const getUsers = async (req, res) => {
    const users = await user.getUsers();
    res.status(200).json({
        data: users
    });
} 

module.exports = {
    createUser,
    getUsers,
};  