const TeacherService = require("../services/TeacherService");
const BaseController = require("./BaseController");

class TeacherController extends BaseController {
  constructor() {
    super(TeacherService);
  }
};

module.exports = new TeacherController().getRouter();
