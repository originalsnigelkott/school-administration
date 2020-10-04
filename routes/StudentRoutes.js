const express = require("express");
const studentRouter = express.Router();
const StudentService = require("../services/StudentService");


studentRouter.get("/", async (req, res) => {
  const students = await StudentService.getAllStudents();
  res.json(students);
});

studentRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const student = await StudentService.getStudentById(id);
  res.json(student);
});

studentRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updates = await req.body;
  try {
    await StudentService.updateStudent(id, updates);
    res.sendStatus(204);
  }
  catch(e){
    console.log(e.message);
    res.sendStatus(500);
  }
})
studentRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await StudentService.deleteStudent(id);
  res.sendStatus(204);
})

module.exports = studentRouter;
