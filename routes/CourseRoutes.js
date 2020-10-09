const express = require("express");
const courseRouter = express.Router();
const CourseService = require("../services/CourseService");

courseRouter.get("/", async (req, res) => {
  const courses = await CourseService.getAll();
  res.json(courses);
});

courseRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const course = await CourseService.getById(id);
  res.json(course);
});

module.exports = courseRouter;
