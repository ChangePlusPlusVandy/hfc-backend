const express = require("express");
const router = express.Router();
const verifyAdmin = require("../middleware/verifyAdmin.js");
const verifyUser = require("../middleware/verifyUser.js");

const {
    createProgram,
    delProgram,
    editProgram,
    getProgram,
    getProgramsByBenId,
} = require("../controllers/programs.controllers.js");

router.post("/", verifyUser, createProgram);
router.delete("/", verifyAdmin, delProgram);
router.put("/", verifyAdmin, editProgram);
router.get("/", verifyUser, getProgram);
router.get("/beneficiary", verifyUser, getProgramsByBenId);

module.exports = router;
