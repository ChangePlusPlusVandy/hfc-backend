const express = require("express");
const verifyAdmin = require("../middleware/verifyAdmin.js");
const verifyUser = require("../middleware/verifyUser.js");

const {
    createAssessment,
    updateAssessment,
    deleteAssessment,
    getAssessmentById,
} = require("../controllers/assessments.controller.js");

const router = express.Router();

// Declare routes below
router.post("/", verifyUser, createAssessment);
router.put("/", verifyAdmin, updateAssessment);
router.delete("/", verifyAdmin, deleteAssessment);
router.get("/", verifyUser, getAssessmentById);

module.exports = router;
