const express = require('express');
const holdingsController = require('../controllers/holdings.controller');
const router = express.Router();

// Get user holdings by id
//http://localhost:3000/holdings
router.get('/', holdingsController.getUserHoldingsById);

// Add new holding (post)
//http://localhost:3000/holdings
router.post('/', holdingsController.modifyHoldingById);

// Update holdings
//http://localhost:3000/holdings
router.put('/', holdingsController.updateCryptoAmount);

// Get all user holdings
//http://localhost:3000/admin
router.get('/admin', holdingsController.getAllUserHoldings);

//Get first user holdings
//http://localhost:3000/admin/first
router.get('/admin/first', holdingsController.getFirstUserHoldings);

module.exports = router;