const { db } = require("../DatabaseConnection");

module.exports = class BaseService {
  static async getAll() {
    const statement = db.prepare(this.selectQueryBuilder());
    const data = await statement.all();
    return data;
  }

  static async getById(id) {
    const statement = db.prepare(this.selectQueryBuilder({ id }));
    const data = await statement.get([id]);
    return data;
  }

  static async update(id, updates) {
    const statement = db.prepare(this.updateQueryBuilder(id, updates));
    await statement.run([...Object.values(updates), id]);
  }

  static async delete(id) {
    const statement = db.prepare(this.deleteQueryBuilder(id));
    await statement.run([id]);
  }

  static selectQueryBuilder(params, table = this.defaultTable) {
    const baseQuery = `SELECT * FROM ${table}`;
    return baseQuery + this.getWhereQuery(params);
  }

  static updateQueryBuilder(id, updates, table = this.defaultTable) {
    const baseQuery = `UPDATE ${table} SET `;
    return (
      baseQuery + this.getUpdateQuery(updates) + this.getWhereQuery({ id })
    );
  }

  static deleteQueryBuilder(id, table = this.defaultTable) {
    const baseQuery = `DELETE FROM ${table}`;
    return baseQuery + this.getWhereQuery({ id });
  }

  static getWhereQuery(params) {
    let whereQuery = "";
    if (params) {
      whereQuery = " WHERE ";
      const keys = Object.keys(params);
      keys.forEach((key, i) => {
        whereQuery += `${key} = ?`;
        if (i < keys.length - 1) {
          whereQuery += " AND ";
        }
      });
    }
    return whereQuery;
  }

  static getUpdateQuery(updates) {
    let updateQuery = "";
    if (updates) {
      const keys = Object.keys(updates);
      keys.forEach((key, i) => {
        updateQuery += `${key} = ?`;
        if (i < keys.length - 1) {
          updateQuery += ", ";
        }
      });
    }
    return updateQuery;
  }
};
