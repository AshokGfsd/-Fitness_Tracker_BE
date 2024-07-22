const Goal = require("../models/goals");

const goalController = {
  getAllGoalsController: async (request, response) => {
    try {
      const userId = request.userId;
      const goals = await Goal.find({ userId }).sort({ _id: -1 });
      response.status(200).json({ messsage: "Fetched all goals", goals });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },
  createGoalController: async (request, response) => {
    try {
      const { body } = request;
      const userId = request.userId;
      const newGoal = new Goal({ ...body, userId });
      const savedGoal = await newGoal.save();
      response.status(200).json({ messsage: "Goal created", savedGoal });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },
  deleteGoalController: async (request, response) => {
    try {
      const { goalId } = request.params;
      const goal = await Goal.findByIdAndDelete(goalId);
      if (!goal) {
        return response.status(400).json("Incorrect ID no goal found");
      }
      response.status(200).json({ messsage: "Goal deleted" });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },
};

module.exports = goalController;
