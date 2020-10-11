module.exports = class AppStrings {
  static dbPath = `${process.cwd()}/database/school.db`;
  static dbTables = {
    STUDENTS: "students",
    TEACHERS: "teachers",
    COURSES: "courses",
  }
};
