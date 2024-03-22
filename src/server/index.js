const express = require("express");
const { json, urlencoded } = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { errorMiddlewares } = require("../middlewares/error");
const { notFound } = require("../middlewares/notFound");

module.exports = function restApiServer(app) {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(express.static("public"));
  app.use("/ping", (req, res, next) => {
    try {
      console.log("Checking the API status: Everything is OK");
      res.status(200).json("ping");
    } catch (error) {
      next(new CustomError("Ping Error", "NotFoundData", 500));
    }
  });

  app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
  });

  app.use(errorMiddlewares);
  app.use(notFound);
};
