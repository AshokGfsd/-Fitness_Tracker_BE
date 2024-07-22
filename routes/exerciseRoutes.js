const express = require("express");
const auth = require("../middlewares/auth");
const exerciseController = require("../controllers/exerciseController");
const exerciseRouter = express.Router();

exerciseRouter.get(
  "/",
  auth.verifyToken,
  exerciseController.getAllExercisesController
);
exerciseRouter.post(
  "/",
  auth.verifyToken,
  exerciseController.createExerciseController
);
exerciseRouter.delete(
  "/:exerciseId",
  auth.verifyToken,
  exerciseController.deleteExerciseController
);

module.exports = exerciseRouter;
