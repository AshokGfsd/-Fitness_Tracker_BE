const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  foodName: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  carbohydrates: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Food", foodSchema, "food");
