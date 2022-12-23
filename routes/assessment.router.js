const express = require("express");
const router = express.Router();

const {
    createAssessment,
    updateAssessment,
    deleteAssessment,
    getAssessmentById,
} = require("../controllers/assessments.controller.js");

router.post("/", createAssessment);
router.put("/", updateAssessment);
router.delete("/", deleteAssessment);
router.get("/", getAssessmentById);

module.exports = router;
