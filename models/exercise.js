const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  exerciseType: {
    type: String,
    required: true,
  },
  caloriesBurnt: {
    type: Number,
    required: true,
  },
});

exerciseSchema.virtual("imageSrc").get(function () {
  console.log(this.exerciseType);
  switch (this.exerciseType) {
    case "yoga":
      return "https://images.pexels.com/photos/16148425/pexels-photo-16148425/free-photo-of-black-and-white-photo-of-women-in-yoga-poses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    case "strengthTraining":
      return "image-link-for-type2";
    case "aerobics":
      return "https://images.pexels.com/photos/5209197/pexels-photo-5209197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    case "cycling":
      return "https://images.pexels.com/photos/13877085/pexels-photo-13877085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    case "walking":
      return "https://images.pexels.com/photos/5867971/pexels-photo-5867971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    case "running":
      return "https://images.pexels.com/photos/18492717/pexels-photo-18492717/free-photo-of-sport-marathon-fitness-athlete.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  }
});

module.exports = mongoose.model("Exercise", exerciseSchema, "exercise");
