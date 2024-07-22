const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const goalRouter = require("./routes/goalRoutes");
const exerciseRouter = require("./routes/exerciseRoutes");
const foodRouter = require("./routes/foodRoutes");
const cookieParser = require("cookie-parser");
const requestLogger = require("./utils/logger");
const unknownEndpoint = require("./utils/Error");
const { URL } = require("./utils/config");

app = express();
app.use(
  cors({
    origin: URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/users", requestLogger, userRouter);
app.use("/goals", requestLogger, goalRouter);
app.use("/exercises", requestLogger, exerciseRouter);
app.use("/foods", requestLogger, foodRouter);
app.use(unknownEndpoint);

module.exports = app;
