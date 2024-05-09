const express = require('express');
const holdingsController = require('../controllers/holdings.controller');
const router = express.Router();

// Get user holdings by id
router.get('/', holdingsController.getUserHoldingsById);

// Add new holding
router.post('/', holdingsController.addHoldingByUserId);

// Get all user holdings
router.get('/admin', holdingsController.getAllUserHoldings);

module.exports = router;