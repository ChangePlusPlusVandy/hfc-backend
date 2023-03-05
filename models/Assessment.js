const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema({
    beneficiary: {
        type: mongoose.ObjectId,
        //required: true
        // TODO: A reference (careful that it's not an array)
    },
    dateTaken: {
        type: Date,
        default: () => Date.now(),
        //required: true
    },
    mentalHealthQs: {
        type: [
            {
                question: { type: String },
                answer: { type: Number },
                text: { type: String },
            },
        ],
    },
    lifeSkillsQs: {
        type: [
            {
                question: { type: String },
                answer: { type: Number },
                text: { type: String },
            },
        ],
    },
    socialSkillsQs: {
        type: [
            {
                question: { type: String },
                answer: { type: Number },
                text: { type: String },
            },
        ],
    },
    educationQs: {
        type: [
            {
                question: { type: String },
                answer: { type: Number },
                text: { type: String },
            },
        ],
    },
    vocationQs: {
        type: [
            {
                question: { type: String },
                answer: { type: Number },
                text: { type: String },
            },
        ],
    },

    mentalHealthScore: { type: Number },
    lifeSkillsScore: { type: Number },
    socialSkillsScore: { type: Number },
    educationScore: { type: Number },
    vocationScore: { type: Number },
    totalScore: { type: Number },
});

module.exports = Assessment = mongoose.model("Assessment", AssessmentSchema);
