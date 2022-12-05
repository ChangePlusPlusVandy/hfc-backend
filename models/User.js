const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    //They log in with hfc email, so shouldn't we add this as a field????

    username: {
        type: String,
        unique: true,
        //required: true
    },
    firstName: {
        type: String,
        //required: true
    },
    lastName: {
        type: String,
        //required: true
    },
    password: {
        type: String,
        //required: true,
    },
    name: {
        type: String,
        //required: true,
    },
    joinDate: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
        //required: true,
    },
    level: {
        type: Number,
        default: 0,
        //required: true,
    },
});

module.exports = User = mongoose.model("user", UserSchema);
