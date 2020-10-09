const BaseService = require("./BaseService");
const PersonFactory = require("../PersonFactory");
const { db } = require("../DatabaseConnection");

module.exports = class StudentService extends BaseService {
  static defaultTable = "teachers";

  static async createTeacher(person) {
    const newPerson = PersonFactory.makePerson(
      person.firstName,
      person.lastName,
      person.dateOfBirth
    );
    const statement = db.prepare(this.createQueryBuilder(newPerson));
    statement.run({ ...newPerson });
    return newPerson;
  }
};