const express = require("express");
const auth = require("../middlewares/auth");
const foodController = require("../controllers/foodController");
const foodRouter = express.Router();

foodRouter.get(
  "/",
  auth.verifyToken,
  foodController.getAllFoodsController
);
foodRouter.post(
  "/",
  auth.verifyToken,
  foodController.createFoodController
);
foodRouter.delete(
  "/:foodId",
  auth.verifyToken,
  foodController.deleteFoodController
);

module.exports = foodRouter;
