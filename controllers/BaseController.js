const express = require("express");
const BaseControllerFunctions = require("./BaseControllerFunctions");

module.exports = class BaseController {
  constructor(service) {
    this.router = express.Router();
    
    this.router.get("/", async (req, res, next) => {
      BaseControllerFunctions.getAll(req, res, next, service);
    });

    this.router.get("/:id", async (req, res, next) => {
      BaseControllerFunctions.getById(req, res, next, service);
    });

    this.router.put("/:id", async (req, res, next) => {
      BaseControllerFunctions.update(req, res, next, service);
    });

    this.router.delete("/:id", async (req, res, next) => {
      BaseControllerFunctions.delete(req, res, next, service);
    });

    this.router.post("", async (req, res, next) => {
      BaseControllerFunctions.create(req, res, next, service);
    });
  }

  getRouter() {
    return this.router;
  }
}