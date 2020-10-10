const CourseService = require("../services/CourseService");
const BaseRoutes = require("./BaseRoutes");

class CourseRoutes extends BaseRoutes {
  constructor() {
    super(CourseService);
  }
}

module.exports = new CourseRoutes().getRouter();
