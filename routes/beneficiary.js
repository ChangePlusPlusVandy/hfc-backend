const express = require('express');
const router = express.Router();
const {createBeneficiary, deleteBeneficiary} = require('../controllers/Beneficiary.js')

// Import controller functions above 

// Declare routes below
router.post('/',createBeneficiary);
router.delete('/beneficiary', deleteBeneficiary);
module.exports = router