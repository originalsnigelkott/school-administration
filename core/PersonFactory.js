const Student = require("./models/Student");
const Teacher = require("./models/Teacher");

module.exports = class PersonFactory {
  static makePerson(firstName, lastName, dateOfBirth, nickName) {
    if (nickName) {
      return new Student(firstName, lastName, dateOfBirth, nickName);
    }
    if (!nickName) {
      return new Teacher(firstName, lastName, dateOfBirth);
    }
    throw new Error("Could not create person.");
  }
};
