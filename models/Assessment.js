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
    mentalHealthScores: {
        type: [{ Date, Number }],
        //required: true
    },
    financialLitScores: {
        type: [{ Date, Number }],
        //required: true
    },
    englishScores: {
        type: [{ Date, Number }],
        //required: true
    },
    computerSkillScores: {
        type: [{ Date, Number }],
        //required: true
    },
    eduAdvancementScores: {
        type: [{ Date, Number }],
        //required: true
    },
    lifeAdvancementScores: {
        type: [{ Date, Number }],
        //required: true
    },
    humanRightsScores: {
        type: [{ Date, Number }],
        //required: true
    },
});

module.exports = Assessment = mongoose.model("Assessment", AssessmentSchema);
