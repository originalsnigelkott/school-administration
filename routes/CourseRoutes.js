const express = require("express");
const courseRouter = express.Router();
const CourseService = require("../services/CourseService");
const BaseRouteFunctions = require("./BaseRouteFunctions");

courseRouter.get("/", async (req, res) =>
  BaseRouteFunctions.getAll(req, res, CourseService)
);

courseRouter.get("/:id", async (req, res) => 
  BaseRouteFunctions.getById(req, res, CourseService)
);

courseRouter.put("/:id", async (req, res) =>
  BaseRouteFunctions.update(req, res, CourseService)
);

courseRouter.delete("/:id", async (req, res) =>
  BaseRouteFunctions.delete(req, res, CourseService)
);

courseRouter.post("/", async (req, res) =>
  BaseRouteFunctions.create(req, res, CourseService)
);

module.exports = courseRouter;
