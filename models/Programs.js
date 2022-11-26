const mongoose = requrie('mongoose');

const ProgramSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    hosts: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date
    }, 
    attendence: {
        type: [[Date,[Number]]],
    },
    daysOfWeek: {
        type: [Number] // 0-6 to denote Monday - Sunday
    }
})

module.exports = Program = mongoose.model('program', ProgramSchema);