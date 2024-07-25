const Exercise = require("../models/exercise");

const getAllExercisesController = async (request, response) => {
  try {
    const userId = request.userId;
    const exercises = await Exercise.find({ user: userId }).sort({ _id: -1 });
    response.status(200).json({ messsage: "Fetched all exercies", exercises });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const createExerciseController = async (request, response) => {
  try {
    const { body } = request;
    const userId = request.userId;
    const newExercise = new Exercise({ ...body, user:userId });
    const savedExercise = await newExercise.save();
    response.status(200).json({ messsage: "Exercise created", savedExercise });
  } catch (error) {
    console.log(error)
    response.status(500).json({ error: error.message });
  }
};

const deleteExerciseController = async (request, response) => {
  try {
    const { exerciseId } = request.params;
    console.log(exerciseId, "dfsdf");
    const exercise = await Exercise.findByIdAndDelete(exerciseId);
    if (!exercise) {
      return response.status(400).json("Incorrect ID no exercise found");
    }
    response.status(200).json({ messsage: "Exercise deleted", exercise });
  } catch (error) {
    console.log(error, "asds");
    response.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllExercisesController,
  createExerciseController,
  deleteExerciseController,
};
