const mongoose = require("mongoose");
const { Schema } = mongoose;

const AssessmentSchema = new mongoose.Schema({
    // TODO: change from reference to an object (with populate)
    beneficiary: {
        type: Schema.Types.ObjectId,
        ref: "Beneficiary",
        required: true,
    },
    dateTaken: {
        type: Date,
        default: () => Date.now(),
    },
    educationVocationQs: {
        type: [
            {
                question: { type: String },
                answer: { type: Number },
                text: { type: String },
            },
        ],
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
    educationVocationScore: { type: Number },
    mentalHealthScore: { type: Number },
    lifeSkillsScore: { type: Number },
    socialSkillsScore: { type: Number },
    totalScore: { type: Number },
});

module.exports = Assessment = mongoose.model("Assessment", AssessmentSchema);
