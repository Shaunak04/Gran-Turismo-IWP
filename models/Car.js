const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    brandName: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    engine: {
        type: String,
        required: true,
    },
    wheeldrive: {
        type: String,
        required: true,
    },
    horsepower: {
        type: String,
        required: true,
    },
    torque: {
        type: String,
        required: true,
    },
    seats: {
        type: String,
        required: true,
    },
    colors: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Cars", CarSchema);