const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    //They log in with hfc email, so shouldn't we add this as a field????
    firebaseUID: {
        type: String,
    },
    firstName: {
        type: String,
        //required: true
    },
    lastName: {
        type: String,
        //required: true
    },
    joinDate: {
        type: Date,
        default: () => Date.now(),
        //required: true,
    },
    level: {
        type: Number,
        default: 0,
        //required: true,
    },
    languages: {
        type: [String],
    },
    phoneNumber: {
        type: String,
    },
    archived: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("User", UserSchema);
