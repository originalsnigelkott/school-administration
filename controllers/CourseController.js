const CourseService = require("../services/CourseService");
const BaseController = require("./BaseController");

class CourseController extends BaseController {
  constructor() {
    super(CourseService);
  }
}

module.exports = new CourseController().getRouter();
