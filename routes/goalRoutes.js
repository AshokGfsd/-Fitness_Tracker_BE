const express = require("express");
const auth = require("../middlewares/auth");
const goalController = require("../controllers/goalController");
const goalRouter = express.Router();

goalRouter.get(
  "/",
  auth.verifyToken,
  goalController.getAllGoalsController
);
goalRouter.post(
  "/",
  auth.verifyToken,
  goalController.createGoalController
);
goalRouter.delete(
  "/:goalId",
  auth.verifyToken,
  goalController.deleteGoalController
);
goalRouter.put(
  "/:goalId",
  auth.verifyToken,
  goalController.update
);

module.exports = goalRouter;
