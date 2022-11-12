const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    joinDate: {
        type: Date,
        required: true,
    },
    level: {
        type: Number,
        required: true,
    }
});

module.exports = User = mongoose.model('user', UserSchema, "users");
