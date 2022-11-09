const mongoose = require('mongoose');

const BeneficiarySchema = new mongoose.Schema({
    name: {
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
        unique: true
    }, 
    email: {
        type: [String], 
        unique: true,
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

module.exports = Beneficiary = mongoose.model('beneficiary', BeneficiarySchema);