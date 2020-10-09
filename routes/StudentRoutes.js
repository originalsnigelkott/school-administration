const express = require("express");
const studentRouter = express.Router();
const StudentService = require("../services/StudentService");
const BaseRouteFunctions = require("./BaseRouteFunctions");

studentRouter.get("/", async (req, res) => {
  BaseRouteFunctions.getAll(req, res, StudentService);
});

studentRouter.get("/:id", async (req, res) => {
  BaseRouteFunctions.getById(req, res, StudentService);
});

studentRouter.put("/:id", async (req, res) => {
  BaseRouteFunctions.update(req, res, StudentService);
});

studentRouter.delete("/:id", async (req, res) => {
  BaseRouteFunctions.delete(req, res, StudentService);
});

studentRouter.post("", async (req, res) => {
  BaseRouteFunctions.create(req, res, StudentService);
});

module.exports = studentRouter;
