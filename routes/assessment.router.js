const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
    CreateAssessment,
    UpdateAssessment,
    DeleteAssessment,
    GetAssessmentById,
} = require("../controllers/assessments.controller.js");

router.post("/", CreateAssessment);
router.put("/", UpdateAssessment);
router.delete("/", DeleteAssessment);
router.get("/", GetAssessmentById);

module.exports = router;
