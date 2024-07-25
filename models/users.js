const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
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
  },
  age: {
    type: Number,
    default: null,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    default: null,
  },
  weight: {
    type: Number,
    default: null,
  },
  height: {
    type: Number,
    default: null,
  },
  otp: {
    type: Number,
    default: "",
  },
});

module.exports = mongoose.model("Users", userSchema, "users");
