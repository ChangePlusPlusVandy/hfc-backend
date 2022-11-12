const express = require('express');
const router = express.Router();
const {createBeneficiary} = require('../controllers/Beneficiary.js')

// Import controller functions above 

// Declare routes below
router.post('/beneficiary',createBeneficiary);

module.exports = router