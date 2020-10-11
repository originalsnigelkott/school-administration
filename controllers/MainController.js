const express = require("express");
const studentRouter = require("./StudentController");
const teacherRouter = require("./TeacherController");
const courseRouter = require("./CourseController");

class MainController {
  constructor() {
    this.router = express.Router();
    this.router.use("/students", studentRouter);
    this.router.use("/teachers", teacherRouter);
    this.router.use("/courses", courseRouter);

    this.router.get("/", (req, res) => {
      res.json("Hello, world!");
    });
  }

  getRouter() {
    return this.router;
  }
}

module.exports = new MainController().getRouter();
