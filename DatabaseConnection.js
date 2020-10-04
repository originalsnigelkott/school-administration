const Database = require("better-sqlite3");
const AppStrings = require("./AppStrings");

class DatabaseConnection {
  constructor() {
    this.db = new Database(AppStrings.dbPath);
    console.log("Connected to database.")
  };

  getDatabaseConnection() {
    return this.db;
  }
}

const db = new DatabaseConnection();
Object.freeze(db)

exports.db = db.getDatabaseConnection();