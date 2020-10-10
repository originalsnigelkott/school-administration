const express = require("express");
const BaseRouteFunctions = require("./BaseRouteFunctions");

module.exports = class BaseRoutes {
  constructor(service) {
    this.router = express.Router();
    
    this.router.get("/", async (req, res) => {
      BaseRouteFunctions.getAll(req, res, service);
    });

    this.router.get("/:id", async (req, res) => {
      BaseRouteFunctions.getById(req, res, service);
    });

    this.router.put("/:id", async (req, res) => {
      BaseRouteFunctions.update(req, res, service);
    });

    this.router.delete("/:id", async (req, res) => {
      BaseRouteFunctions.delete(req, res, service);
    });

    this.router.post("", async (req, res) => {
      BaseRouteFunctions.create(req, res, service);
    });
  }

  getRouter() {
    return this.router;
  }
}