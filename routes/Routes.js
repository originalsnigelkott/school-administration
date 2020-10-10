const express = require("express");
const studentRoutes = require("./StudentRoutes");
const teacherRoutes = require("./TeacherRoutes");
const courseRoutes = require("./CourseRoutes");

class Routes {
  constructor() {
    this.router = express.Router();
    this.router.use("/students", studentRoutes);
    this.router.use("/teachers", teacherRoutes);
    this.router.use("/courses", courseRoutes);

    this.router.get("/", (req, res) => {
      res.json("Hello, world!");
    });
  }

  getRouter() {
    return this.router;
  }
};

module.exports = new Routes().getRouter();
