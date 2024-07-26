const Suggestion = require("../models/suggestion");

const suggestionController = {
  getAllSuggestionsController: async (request, response) => {
    try {
      const suggestions = await Suggestion.find();
      response
        .status(200)
        .json({ messsage: "Fetched all suggestions", suggestions });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },
  getTodaySuggestionsController: async (request, response) => {
    try {
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth();
      const year = today.getFullYear();

      const suggestions = await Suggestion.find({
        createdAt: {
          $gte: new Date(year, month, day),
          $lt: new Date(year, month, day + 1),
        },
      });
      response
        .status(200)
        .json({ messsage: "Fetched Today suggestions", suggestions });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },
  createSuggestionController: async (request, response) => {
    try {
      const { age, gender, stage, type } = request.body;
      const userId = request.userId;
      let details = { ...request.body };

      delete details.age;
      delete details.gender;
      delete details.stage;
      delete details.type;

      const newSuggestion = new Suggestion({
        details,
        user: userId,
        age,
        gender,
        stage,
        type,
      });
      const savedSuggestion = await newSuggestion.save();
      response
        .status(200)
        .json({ messsage: "suggestion created", savedSuggestion });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },
  deleteSuggestionController: async (request, response) => {
    try {
      const { suggestionId } = request.params;
      const userId = request.userId;

      const suggestion = await Suggestion.findById(suggestionId);

      if (!suggestion) {
        return response
          .status(400)
          .json({ message: "Incorrect ID no suggestion found" });
      }
      if (suggestion.user.toString() != userId) {
        return response.status(400).json({
          message: "its can't delete by your only creater can be delete",
        });
      }
      await Suggestion.findByIdAndDelete(suggestionId);

      response.status(200).json({ messsage: "suggestion deleted" });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  },
};

module.exports = suggestionController;
