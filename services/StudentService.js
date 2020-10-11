const { dbTables } = require("../core/AppStrings");
const BaseService = require("./BaseService");

module.exports = class StudentService extends BaseService {
  static defaultTable = dbTables.STUDENTS;
};
