const express = require("express");
const studentRouter = express.Router();
const StudentService = require("../services/StudentService");

studentRouter.get("/", async (req, res) => {
  const students = await StudentService.getAll();
  res.json(students);
});

studentRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const student = await StudentService.getById(id);
  res.json(student);
});

studentRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  await StudentService.update(id, updates);
  res.sendStatus(204);
});
studentRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await StudentService.delete(id);
  res.sendStatus(204);
});

studentRouter.post("", async (req, res) => {
  const student = req.body;
  const newStudent = await StudentService.createStudent(student);
  res.status(201).json(newStudent);
});

module.exports = studentRouter;
