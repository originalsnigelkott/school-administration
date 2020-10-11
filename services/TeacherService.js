const { dbTables } = require("../core/AppStrings");
const BaseService = require("./BaseService");

module.exports = class TeacherService extends BaseService {
  static defaultTable = dbTables.TEACHERS;
};
