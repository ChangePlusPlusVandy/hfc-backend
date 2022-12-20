const mongoose = require('mongoose');

const BeneficiarySchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    phone: {
        type: String,
    }, 
    email: {
        type: String, 
    },
    languages: {
        type: [String],
    }, 
    nationality: {
        type: [String],
    }, 
    eduLvl: {
        type: [String],
    }, 
    bday: {
        type: Date,
        required: true
    }, 
    age: {
        type: Number,
        required: true
    }, 
    gender: {
        type: String,
        required: true
    }, 
    visitReason: { 
        type: String,
    }, 
    joinDate: {
        type: Date,
        required: true
    }, 
    archived: {
        type: Boolean,
    },
    attendenceRecord: {
        type: [{Date,Number}]
    }, 
    registrations: {
        type: [Number]
    }, 
    interests: {
        type: [String]
    }, 
    needs: {
        type: [String]
    }, 
    sponsorInfo: {
        type: String
    }, 
    referrals: {
        type: [String]
    }
});

module.exports = Beneficiary = mongoose.model('beneficiary', BeneficiarySchema, 'beneficiaries');