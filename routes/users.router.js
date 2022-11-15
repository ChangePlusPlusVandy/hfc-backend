const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//const { createUser, deleteBeneficiary, editBeneficiary } = require('../controllers/Beneficiary.js')
const { CreateUser, GetUserById, GetUsers, UpdateUser, DeleteUser } = require('../controllers/users.controllers.js')
// Import controller functions above 

// Declare routes below
//router.post('/user', CreateUser);

router.post('/', CreateUser);
router.put('/user/:userId', UpdateUser);
router.get('/users', GetUsers);
router.get('/:userId', GetUserById);
router.delete('/user/:userId', DeleteUser);

module.exports = router;
