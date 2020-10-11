const { dbTables } = require("../core/AppStrings");
const BaseService = require("./BaseService");

module.exports = class CourseService extends BaseService {
  static defaultTable = dbTables.COURSES;
}