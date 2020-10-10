const express = require("express");
const BaseControllerFunctions = require("./BaseControllerFunctions");

module.exports = class BaseController {
  constructor(service) {
    this.router = express.Router();
    
    this.router.get("/", async (req, res) => {
      BaseControllerFunctions.getAll(req, res, service);
    });

    this.router.get("/:id", async (req, res) => {
      BaseControllerFunctions.getById(req, res, service);
    });

    this.router.put("/:id", async (req, res) => {
      BaseControllerFunctions.update(req, res, service);
    });

    this.router.delete("/:id", async (req, res) => {
      BaseControllerFunctions.delete(req, res, service);
    });

    this.router.post("", async (req, res) => {
      BaseControllerFunctions.create(req, res, service);
    });
  }

  getRouter() {
    return this.router;
  }
}