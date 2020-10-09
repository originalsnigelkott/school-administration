const express = require("express");
const teacherRouter = express.Router();
const TeacherService = require("../services/TeacherService");

teacherRouter.get("/", async (req, res) => {
  const teachers = await TeacherService.getAll();
  res.json(teachers);
});

teacherRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const teacher = await TeacherService.getById(id);
  res.json(teacher);
});

teacherRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  await TeacherService.update(id, updates);
  res.sendStatus(204);
});
teacherRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await TeacherService.delete(id);
  res.sendStatus(204);
});

teacherRouter.post("", async (req, res) => {
  const teacher = req.body;
  const newTeacher = await TeacherService.createTeacher(teacher);
  res.status(201).json(newTeacher);
});

module.exports = teacherRouter;

