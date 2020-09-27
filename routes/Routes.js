const express = require("express");
const router = express.Router();
const studentRoutes = require("./StudentRoutes");

router.use("/students", studentRoutes);

router.get("/", (req, res, next) => {
  res.json("Hello, world!");
});

module.exports = router;
