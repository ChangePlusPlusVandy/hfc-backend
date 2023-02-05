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
    answer1: {
        type: Number,
    },
    answer2: {
        type: Number,
    },
    answer3: {
        type: Number,
    },
    answer4: {
        type: Number,
    },
    answer5: {
        type: Number,
    },
    answer6: {
        type: Number,
    },
    answer7: {
        type: Number,
    },
    answer8: {
        type: Number,
    },
    answer9: {
        type: Number,
    },
    answer10: {
        type: Number,
    },
    answer11: {
        type: Number,
    },
    answer12: {
        type: String,
    },
    answer13: {
        type: String,
    },
    answer14: {
        type: Number,
    },
    answer15: {
        type: Number,
    },
    answer16: {
        type: Number,
    },
});

module.exports = Assessment = mongoose.model("Assessment", AssessmentSchema);
