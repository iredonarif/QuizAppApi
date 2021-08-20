const mongoose = require("mongoose");

const Session = mongoose.model(
    "Session",
    new mongoose.Schema({
        start_time: Date,
        end_time: Date,
        num_questions: Number
    },
    { timestamps: true})
);

module.exports = Session;