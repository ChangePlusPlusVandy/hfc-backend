const express = require('express');
const router = express.Router();
const {createBeneficiary, deleteBeneficiary, editBeneficiary, getBeneficiary} = require('../controllers/Beneficiary.js')



// Declare routes below
router.post('/',createBeneficiary);
router.delete('/', deleteBeneficiary);
router.put('/', editBeneficiary);
router.get('/', getBeneficiary);

module.exports = router