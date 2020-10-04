const Person = require("./Person");

module.exports = class Student extends Person {
  constructor(firstName, lastName, dateOfBirth, nickName) {
    super(firstName, lastName, dateOfBirth);
    this.nickName = nickName;
  }
}