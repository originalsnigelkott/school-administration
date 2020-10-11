const { v4: uuidv4 } = require("uuid");

const { db } = require("../core/DatabaseConnection");
const { NotFound } = require("../core/ErrorHandling/Errors");
const { QueryFactory, queryTypes } = require("../core/QueryFactory");

module.exports = class BaseService {
  static async getAll() {
    const statement = db.prepare(
      QueryFactory.makeQuery(queryTypes.SELECT, { table: this.defaultTable })
    );
    const data = statement.all();
    return data;
  }

  static async getById(id) {
    const statement = db.prepare(
      QueryFactory.makeQuery(queryTypes.SELECT, {
        table: this.defaultTable,
        params: { id },
      })
    );
    const data = await statement.get([id]);
    if(!data) {
      throw new NotFound(this.defaultTable.slice(0, this.defaultTable.length - 1))
    }
    return data;
  }

  static async update(id, updates) {
    const statement = db.prepare(
      QueryFactory.makeQuery(queryTypes.UPDATE, {
        table: this.defaultTable,
        id,
        updates,
      })
    );
    statement.run([...Object.values(updates), id]);
  }

  static async delete(id) {
    const statement = db.prepare(
      QueryFactory.makeQuery(queryTypes.DELETE, {
        table: this.defaultTable,
        id,
      })
    );
    statement.run([id]);
  }

  static async create(object) {
    object.id = uuidv4();
    const statement = db.prepare(
      QueryFactory.makeQuery(queryTypes.CREATE, {
        table: this.defaultTable,
        object,
      })
    );
    statement.run(object);
    return object;
  }
};
