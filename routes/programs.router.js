const express = require("express");
const router = express.Router();
const {
    createProgram,
    delProgram,
    editProgram,
    getProgram,
    getProgramsByBenId
} = require("../controllers/programs.controllers.js");

router.post("/", createProgram);
router.delete("/", delProgram);
router.put("/", editProgram);
router.get("/", getProgram);
router.get("/beneficiary", getProgramsByBenId);

module.exports = router;
