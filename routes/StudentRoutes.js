const express = require("express");
const studentRouter = express.Router();

const mockStudents = require("./mockData/MockStudents");

studentRouter.get("/", (req, res) => {
  res.json(mockStudents);
});

module.exports = studentRouter;
