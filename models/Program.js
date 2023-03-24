const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const ProgramSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    hosts: {
        type: [{ type: ObjectId, ref: "User" }],
        required: true,
        unique: false,
    },
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
    schedule: {
        Sunday: {
            startTime: { type: String },
            endTime: { type: String }
        },
        Monday: {
            startTime: { type: String },
            endTime: { type: String }
        },
        Tuesday: {
            startTime: { type: String },
            endTime: { type: String }
        },
        Wednesday: {
            startTime: { type: String },
            endTime: { type: String }
        },
        Thursday: {
            startTime: { type: String },
            endTime: { type: String }
        },
        Friday: {
            startTime: { type: String },
            endTime: { type: String }
        },
        Saturday: {
            startTime: { type: String },
            endTime: { type: String }
        }
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
                attendees: [{ type: ObjectId, ref: "Beneficiary" }],
            },
        ],
        required: true,
    },
    roster: [{ type: ObjectId, ref: "Beneficiary" }],
});

module.exports = Program = mongoose.model("program", ProgramSchema);
