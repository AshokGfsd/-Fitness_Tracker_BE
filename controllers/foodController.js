const Food = require("../models/food");

const foodController = {
  getAllFoodsController: async (request, response) => {
    try {
      const userId = request.userId;
      const foods = await Food.find({ user: userId }).sort({ _id: -1 });
      response.status(200).json({ messsage: "Fetched all foods", foods });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },
  createFoodController: async (request, response) => {
    try {
      const { body } = request;
      const userId = request.userId;
      const newFood = new Food({ ...body, user: userId });
      const savedFood = await newFood.save();
      response.status(200).json({ messsage: "Food created", savedFood });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },
  deleteFoodController: async (request, response) => {
    try {
      const { foodId } = request.params;
      const food = await Food.findByIdAndDelete(foodId);
      if (!food) {
        return response.status(400).json("Incorrect ID no food found");
      }
      response.status(200).json({ messsage: "Food deleted" });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },
};

module.exports = foodController;
