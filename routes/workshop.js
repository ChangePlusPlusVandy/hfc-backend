const express = require('express');
const router = express.Router();
const {createWorkshop, editWorkshop, getWorkshop, deleteWorkshop} = require('../controllers/Workshop')

// Import controller functions above 

// Declare routes below
router.post('/',createWorkshop);
router.delete('/', deleteWorkshop);
router.put('/', editWorkshop);
router.get('/', getWorkshop);

module.exports = router