const BaseService = require("./BaseService");
const { db } = require("../DatabaseConnection");

module.exports = class StudentService extends BaseService {
  static defaultTable = "students";

  static async getAllStudents() {
    const statement = db.prepare(this.selectQueryBuilder());
    const students = await statement.all();
    return students;
  }

  static async getStudentById(id) {
    const statement = db.prepare(this.selectQueryBuilder({ id }));
    const student = await statement.get([id]);
    return student;
  }

  static async updateStudent(id, updates) {
    console.log(this.updateQueryBuilder(id, updates));
    const statement = db.prepare(this.updateQueryBuilder(id, updates));
    await statement.run([...Object.values(updates), id]);
  }

  static deleteStudent() {}
};
