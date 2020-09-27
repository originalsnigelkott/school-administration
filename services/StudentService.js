const mockStudents = require("../mockData/MockStudents");

module.exports = class StudentService {
  constructor() {}

  static getAllStudents() {
    const students = mockStudents;
    return students;
  }

  static getStudentById(id) {
    const student = mockStudents.find((s) => s.id == id);
    console.log(`Student: ${student}`);
    return student;
  }

  static updateStudent() {}

  static deleteStudent() {}
};
