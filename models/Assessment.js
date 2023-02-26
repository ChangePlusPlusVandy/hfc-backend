const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema({
    beneficiary: {
        type: mongoose.ObjectId,
        //required: true
    },
    dateTaken: {
        type: Date,
        default: () => Date.now(),
        //required: true
    },
    mentalHealthAnswers: {
        type: [Number],
    },
    lifeSkillsAnswers: {
        type: [Number],
    },
    socialSkillsAnswers: {
        type: [Number],
    },
    educationAnswers: {
        type: [Number],
    },
    vocationAnswers: {
        type: [Number],
    },
    mentalHealthScore: { type: Number },
    lifeSkillsScore: { type: Number },
    socialSkillsScore: { type: Number },
    educationScore: { type: Number },
    vocationScore: { type: Number },
    totalScore: { type: Number },
});

module.exports = Assessment = mongoose.model("Assessment", AssessmentSchema);
