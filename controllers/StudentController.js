const StudentService = require("../services/StudentService");
const BaseController = require("./BaseController");

class StudentController extends BaseController {
  constructor() {
    super(StudentService);
  }
}

module.exports = new StudentController().getRouter();
