const express = require("express");
const studentRouter = express.Router();
const StudentService = require("../services/StudentService");


studentRouter.get("/", async (req, res) => {
  const students = await StudentService.getAllStudents();
  res.json(students);
});

module.exports = studentRouter;
