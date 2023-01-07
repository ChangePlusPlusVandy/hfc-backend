const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const ProgramSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    hosts: [
        {
            type: ObjectId,
            required: true,
        },
    ],
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    attendence: {
        type: [[Date, [Number]]],
    },
    daysOfWeek: {
        type: [Number], // 0-6 to denote Monday - Sunday
    },
    dateAdded: {
        type: Date,
        required: true,
    },
    archived: {
        type: Boolean,
        required: true
    },
    attendees:{
        type: [Date,[ObjectId]],
        required: true
    },
});

module.exports = Program = mongoose.model("program", ProgramSchema);
