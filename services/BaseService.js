const { db } = require("../core/DatabaseConnection");

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
    const keys = Object.keys(updates);
    const baseQuery = `UPDATE ${table} SET ${keys.map((k) => k + "= ?").join(", ")}`;
    return baseQuery + this.getWhereQuery({ id });
  }

  static deleteQueryBuilder(id, table = this.defaultTable) {
    const baseQuery = `DELETE FROM ${table}`;
    return baseQuery + this.getWhereQuery({ id });
  }

  static createQueryBuilder(object) {
    const keys = Object.keys(object);
    const query = `INSERT INTO ${this.defaultTable} (${keys.join(", ")}) VALUES (${keys.map((k) => "@" + k).join(", ")})`;
    return query;
  }

  static getWhereQuery(params) {
    let whereQuery = "";
    if (params) {
      const keys = Object.keys(params);
      whereQuery = ` WHERE ${keys.map((k) => k + "= ?").join("AND ")}`;
    }
    return whereQuery;
  }
};
