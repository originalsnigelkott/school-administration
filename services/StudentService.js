const BaseService = require("./BaseService");
const PersonFactory = require("../core/PersonFactory");
const { db } = require("../core/DatabaseConnection");

module.exports = class StudentService extends BaseService {
  static defaultTable = "students";

  static async create(person) {
    const newPerson = PersonFactory.makePerson(
      person.firstName,
      person.lastName,
      person.dateOfBirth,
      person.nickName
    );
    const statement = db.prepare(this.createQueryBuilder(newPerson));
    statement.run({ ...newPerson });
    return newPerson;
  }
};
