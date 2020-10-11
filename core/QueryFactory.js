const queryTypes = {
  SELECT: 1,
  DELETE: 2,
  UPDATE: 3,
  CREATE: 4,
};

class QueryFactory {
  static makeQuery(queryType, queryParts = { table: "", params: {}, id: "", update: {}, object: {}}) {
    switch(queryType) {
      case queryTypes.SELECT: {
        return this.#getSelectQuery(queryParts.params, queryParts.table);
      }
      case queryTypes.DELETE: {
        return this.#getDeleteQuery(queryParts.id, queryParts.table);
      }
      case queryTypes.UPDATE: {
        return this.#getUpdateQuery(queryParts.id, queryParts.updates, queryParts.table);
      }
      case queryTypes.CREATE: {
        return this.#getCreateQuery(queryParts.object, queryParts.table);
      }
    }
  }
  
  static #getSelectQuery(params, table) {
    const baseQuery = `SELECT * FROM ${table}`;
    return baseQuery + this.#getWhereQuery(params);
  }

  static #getUpdateQuery(id, updates, table) {
    const keys = Object.keys(updates);
    const baseQuery = `UPDATE ${table} SET ${keys.map((k) => k + "= ?").join(", ")}`;
    return baseQuery + this.#getWhereQuery({ id });
  }

  static #getDeleteQuery(id, table) {
    const baseQuery = `DELETE FROM ${table}`;
    return baseQuery + this.#getWhereQuery({ id });
  }

  static #getCreateQuery(object, table) {
    const keys = Object.keys(object);
    const query = `INSERT INTO ${table} (${keys.join(", ")}) VALUES (${keys.map((k) => "@" + k).join(", ")})`;
    return query;
  }

  static #getWhereQuery(params) {
    let whereQuery = "";
    if (params) {
      const keys = Object.keys(params);
      whereQuery = ` WHERE ${keys.map((k) => k + "= ?").join("AND ")}`;
    }
    return whereQuery;
  }
}


module.exports = {
  queryTypes,
  QueryFactory
};