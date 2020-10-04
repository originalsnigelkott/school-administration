const Person = require("./Person");

module.exports = class Teacher extends Person {
  constructor(firstName, lastName, dateOfBirth) {
    super(firstName, lastName, dateOfBirth);
  }
};
