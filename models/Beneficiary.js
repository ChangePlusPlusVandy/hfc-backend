const mongoose = require("mongoose");
const { Schema } = mongoose;

const BeneficiarySchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    languages: {
        type: [String],
        required: true,
    },
    nationality: {
        type: [String],
    },
    eduLvl: {
        type: String,
    },
    bday: {
        type: Date,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    visitReason: {
        type: String,
    },
    joinDate: {
        type: Date,
        required: true,
        default: () => Date.now(),
    },
    archived: {
        type: Boolean,
        default: false,
        required: false,
    },
    interests: {
        type: [String],
    },
    needs: {
        type: String,
    },
    sponsorInfo: {
        type: String,
    },
    referrals: {
        type: String,
    },
    staffNotes: {
        type: String,
    },
    address: {
        type: String,
    },
    assessments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Assessment",
        },
    ],
    photo: {
        type: String, // change this when we know how to store photos
    },
    hasBankAccountIntake: {
        type: Boolean,
    },
    hasBankAccountCompletion: {
        type: Boolean,
    },
    englishLvlIntake: {
        type: Number,
    },
    englishLvlCompletion: {
        type: Number,
    },
    computerSkillsIntake: {
        type: Number,
    },
    computerSkillsCompletion: {
        type: Number,
    },
    emotionalWellnessIntake: {
        type: Number,
    },
    emotionalWellnessCompletion: {
        type: Number,
    },
    incomeIntake: {
        type: Number,
    },
    incomeCompletion: {
        type: Number,
    },
    savingsIntake: {
        type: Number,
    },
    savingsCompletion: {
        type: Number,
    },
    hasFoundWorkCompletion: {
        type: Boolean,
    },
});

module.exports = Beneficiary = mongoose.model(
    "Beneficiary",
    BeneficiarySchema,
    "beneficiaries"
);
