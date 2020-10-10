const TeacherService = require("../services/TeacherService");
const BaseRoutes = require("./BaseRoutes");

class TeacherRoutes extends BaseRoutes {
  constructor() {
    super(TeacherService);
  }
};

module.exports = new TeacherRoutes().getRouter();
