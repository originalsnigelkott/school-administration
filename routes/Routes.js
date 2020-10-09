const express = require("express");
const router = express.Router();
const studentRoutes = require("./StudentRoutes");
const teacherRoutes = require("./TeacherRoutes");
const courseRoutes = require("./courseRoutes");

router.use("/students", studentRoutes);
router.use("/teachers", teacherRoutes);
router.use("/courses", courseRoutes);

router.get("/", (req, res) => {
  res.json("Hello, world!");
});

module.exports = router;
