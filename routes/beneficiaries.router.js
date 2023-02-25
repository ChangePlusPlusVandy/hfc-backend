const express = require("express");

const {
    createBeneficiary,
    deleteBeneficiary,
    editBeneficiary,
    getBeneficiary,
    archiveBeneficiary,
    unarchiveBeneficiary,
    updateAssessment,
} = require("../controllers/beneficiaries.controllers.js");

const router = express.Router();

// Declare routes below
router.post("/", createBeneficiary);
router.delete("/", deleteBeneficiary);
router.put("/:beneficiaryId", editBeneficiary);
router.get("/", getBeneficiary);
router.patch("/archive/:beneficiaryId", archiveBeneficiary);
router.patch("/unarchive/:beneficiaryId", unarchiveBeneficiary);
router.patch("/:beneficiaryId/assessment", updateAssessment);

module.exports = router;
