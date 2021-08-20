const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const Question = mongoose.model(
    "Question",
    new mongoose.Schema({
        text: {
            type: String,
            required: true
        },
        points: {
            type: Number,
            required: true
        },
        responses: [{
            type: Schema.Types.ObjectId,
            ref: "Response"
        }],
    }, { timestamps: true })
);

module.exports = Question;
