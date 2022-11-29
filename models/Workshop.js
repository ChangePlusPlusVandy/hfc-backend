const mongoose=require('mongoose')
const User = require('./User')
const WorkshopSchema = new mongoose.Schema({
    workshopID:{
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    hosts: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    numAttendees:{
            type: Number,
            required: true
    },
    attendees: [{
            type: mongoose.Schema.Types.ObjectId,
            required: true
    }]

})

module.exports = Workshop = mongoose.model('workShop', WorkshopSchema, 'workshop');