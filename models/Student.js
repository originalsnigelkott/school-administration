const Person = require("./Person");

module.exports = class Student extends Person {
  constructor(firstName, lastName, dateOfBirth) {
    super(firstName, lastName, dateOfBirth);
  }
}