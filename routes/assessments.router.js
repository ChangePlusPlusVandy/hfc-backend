const express = require("express");

const {
    createAssessment,
    updateAssessment,
    deleteAssessment,
    getAssessmentById,
} = require("../controllers/assessments.controller.js");

const router = express.Router();

// Declare routes below
router.post("/", createAssessment);
router.put("/", updateAssessment);
router.delete("/", deleteAssessment);
router.get("/", getAssessmentById);

module.exports = router;
