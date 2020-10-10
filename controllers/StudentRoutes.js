const StudentService = require("../services/StudentService");
const BaseRoutes = require("./BaseRoutes");

class StudentRoutes extends BaseRoutes {
  constructor() {
    super(StudentService);
  }
}

module.exports = new StudentRoutes().getRouter();
