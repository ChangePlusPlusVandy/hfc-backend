const express = require('express');
const router = express.Router();
const {createBeneficiary, deleteBeneficiary, editBeneficiary, getBeneficiary} = require('../controllers/Beneficiary.js')

// Import controller functions above 

// Declare routes below
router.post('/',createBeneficiary);
router.delete('/beneficiary', deleteBeneficiary);
router.put('/beneficiary', editBeneficiary);
router.get('/beneficiaries', getBeneficiary);

module.exports = router