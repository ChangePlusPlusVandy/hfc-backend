const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

const ProgramSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    hosts: [
        {
            type: ObjectId,
            //required: true,
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
    daysOfWeek: {
        type: [Number], // 0-6 to denote Monday - Sunday
    },
    dateAdded: {
        type: Date,
        required: true,
    },
    archived: {
        type: Boolean,
        required: true,
    },
    attendance: {
        type: [
            {
                date: { type: Date },
                attendees: [{ type: Schema.Types.ObjectId, ref: 'Attendee' }]
            }
        ],
        required: true,
    },
    roster: [
        { type: Schema.Types.ObjectId, ref: 'Beneficiary' }
    ],
});

module.exports = Program = mongoose.model("program", ProgramSchema);
