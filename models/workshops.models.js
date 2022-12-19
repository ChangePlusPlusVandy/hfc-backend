const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const WorkshopSchema = new mongoose.Schema({
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
      type: ObjectId,
      required: true,
    },
  ],
});

module.exports = Workshop = mongoose.model("Workshop", WorkshopSchema);
