const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const {Schema}=mongoose;
const WorkshopSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    hosts: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    ],
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    numAttendees: {
        type: Number,
        required: true,
    },
    attendees: [
        {
            type: Schema.Types.ObjectId,
            ref: "Beneficiary",
            required: true,
        },
    ],
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    archived: {
        type: Boolean,
        default: false,
    },
});

module.exports = Workshop = mongoose.model("Workshop", WorkshopSchema);
