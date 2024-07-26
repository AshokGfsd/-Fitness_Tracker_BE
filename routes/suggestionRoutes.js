const express = require("express");
const auth = require("../middlewares/auth");
const suggestionController = require("../controllers/suggestionController");
const suggestionRouter = express.Router();

suggestionRouter.get(
  "/",
  auth.verifyToken,
  suggestionController.getAllSuggestionsController
);
suggestionRouter.get(
  "/today",
  auth.verifyToken,
  suggestionController.getTodaySuggestionsController
);
suggestionRouter.post(
  "/",
  auth.verifyToken,
  suggestionController.createSuggestionController
);
suggestionRouter.delete(
  "/:suggestionId",
  auth.verifyToken,
  suggestionController.deleteSuggestionController
);

module.exports = suggestionRouter;
