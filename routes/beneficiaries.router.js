const express = require("express");
const verifyAdmin = require("../middleware/verifyAdmin.js");
const verifyUser = require("../middleware/verifyUser.js");

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
router.post("/", verifyUser, createBeneficiary);
router.delete("/", verifyAdmin, deleteBeneficiary);
router.put("/:beneficiaryId", verifyAdmin, editBeneficiary);
router.get("/", verifyUser, getBeneficiary); // see maybe not :beneficiaryId
router.get("/:beneficiaryId", verifyUser, getBeneficiary);
// router.get("/:id", getBeneficiaryByReadableId);
router.patch("/archive/:beneficiaryId", verifyAdmin, archiveBeneficiary);
router.patch("/unarchive/:beneficiaryId", verifyAdmin, unarchiveBeneficiary);
router.patch("/:beneficiaryId/assessment", verifyUser, updateAssessment);

module.exports = router;
