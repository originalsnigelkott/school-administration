const { v4: uuidv4 } = require("uuid");

module.exports = class Person {
  constructor(firstName, lastName, dateOfBirth, id = uuidv4()) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
};
