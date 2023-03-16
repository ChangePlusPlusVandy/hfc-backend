const mongoose = require("mongoose");
const { Schema } = mongoose;

const AssessmentSchema = new mongoose.Schema({
    beneficiary: {
        type: Schema.Types.ObjectId,
        ref: "Beneficiary",
        required: true,
    },
    dateTaken: {
        type: Date,
        default: () => Date.now(),
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
