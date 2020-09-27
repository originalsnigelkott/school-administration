const mockStudents = require("../mockData/MockStudents");

module.exports = class StudentService{
  constructor() {}

  static getAllStudents() {
    const students = mockStudents;
    return students;
  };

  static getStudentById() {};

  static updateStudent() {};

  static deleteStudent() {};
}