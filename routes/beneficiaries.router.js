const express = require("express");

const {
    createBeneficiary,
    deleteBeneficiary,
    editBeneficiary,
    getBeneficiary,
} = require("../controllers/beneficiaries.controllers.js");

const router = express.Router();

// Declare routes below
router.post("/", createBeneficiary);
router.delete("/", deleteBeneficiary);
router.put("/", editBeneficiary);
router.get("/", getBeneficiary);

module.exports = router;
