const Student = require("../models/Student");

const mockStudents = [
  new Student("Per", "Olsson", "870101"),
  new Student("Andreas", "Andersson", "920101"),
  new Student("Isabelle", "Larsson", "890101"),
  new Student("Clas", "Sjöström", "770101"),
  new Student("Frida", "Jonsson", "980101"),
  new Student("Orvar", "Orvarsson", "010101"),
]

module.exports = mockStudents;