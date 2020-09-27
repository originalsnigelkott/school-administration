const express = require("express");
const studentRouter = express.Router();
const StudentService = require("../services/StudentService");


studentRouter.get("/", async (req, res) => {
  const students = await StudentService.getAllStudents();
  res.json(students);
});

studentRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(`Id: ${id}`);
  const student = await StudentService.getStudentById(id);
  res.json(student);
});

module.exports = studentRouter;
