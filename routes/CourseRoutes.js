const express = require("express");
const courseRouter = express.Router();
const CourseService = require("../services/CourseService");

courseRouter.get("/", async (req, res) => {
  const courses = await CourseService.getAll();
  res.json(courses);
});

module.exports = courseRouter;
