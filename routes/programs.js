const express = require('express');
const router = express.Router();
const {createProgram, delProgram, editProgram, getProgram} = require('../controllers/Programs.js');


router.post('/',createProgram);
router.delete('/',delProgram);
router.put('/',editProgram);
router.get('/',getProgram);

module.exports = router;