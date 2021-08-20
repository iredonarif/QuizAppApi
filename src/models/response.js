const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const Response = mongoose.model(
    "Response",
    new mongoose.Schema({
        text: {
            type: String,
            required: true
        },
        is_correct: {
            type: Boolean,
            default: false
        },
        question: {
            type: Schema.Types.ObjectId,
            ref: "Question"
        },
    }, { timestamps: true})
);

module.exports = Response;