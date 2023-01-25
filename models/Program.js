const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const ProgramSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    hosts: [
        {
            type: ObjectId,
            ref: "User",
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
                attendees: [{ type: ObjectId, ref: "Beneficiary" }],
            },
        ],
        required: true,
    },
    roster: [{ type: ObjectId, ref: "Beneficiary" }],
});

module.exports = Program = mongoose.model("program", ProgramSchema);
