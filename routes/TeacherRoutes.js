const express = require("express");
const teacherRouter = express.Router();
const TeacherService = require("../services/TeacherService");
const BaseRouteFunctions = require("./BaseRouteFunctions");

teacherRouter.get("/", async (req, res) =>
  BaseRouteFunctions.getAll(req, res, TeacherService)
);

teacherRouter.get("/:id", async (req, res) =>
  BaseRouteFunctions.getById(req, res, TeacherService)
);

teacherRouter.put("/:id", async (req, res) => {
  BaseRouteFunctions.update(req, res, TeacherService);
});
teacherRouter.delete("/:id", async (req, res) => {
  BaseRouteFunctions.delete(req, res, TeacherService);
});

teacherRouter.post("", async (req, res) => {
  const teacher = req.body;
  const newTeacher = await TeacherService.createTeacher(teacher);
  res.status(201).json(newTeacher);
});

module.exports = teacherRouter;
