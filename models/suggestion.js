const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  stage: {
    type: String,
    enum: ["Under weight", "Normal weight", "Over weight", "Obese"],
    required: true,
  },
  type: {
    type: String,
    enum: ["exercise", "food", "goal"],
    required: true,
  },
  details: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("Suggestion", suggestionSchema, "suggestion");
