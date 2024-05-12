const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

// Create a new user
router.post('/', userController.createUser);

// Get all users
router.get('/', userController.getUsers);

// Get first users
router.get('/first', userController.getFirstUser);

module.exports = router;