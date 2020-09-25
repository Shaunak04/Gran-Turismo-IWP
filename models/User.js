const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("Users", UserSchema);