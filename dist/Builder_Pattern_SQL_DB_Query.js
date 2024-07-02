class QueryBuilder {
    constructor() {
        this.table = "";
        this.whereParams = [];
        this.orderBy = "";
    }
    from(table) {
        this.table = table;
        return this;
    }
    where(condition) {
        this.whereParams.push(condition);
        return this;
    }
    order(condition) {
        this.orderBy = condition;
        return this;
    }
    build() {
        return new DatabaseQuery(this.table, this.whereParams, this.orderBy);
    }
}
class DatabaseQuery {
    constructor(table, whereParams, orderBy) {
        this.table = table;
        this.whereParams = whereParams;
        this.orderBy = orderBy;
    }
    query() {
        let query = `SELECT * FROM ${this.table}`;
        if (this.whereParams.length) {
            query += ` WHERE ${this.whereParams.join(" AND ")}`;
        }
        if (this.orderBy) {
            query += ` ORDER BY ${this.orderBy}`;
        }
        // Тут ми виконуємо запит до бази даних, наразі лише виводимо текст запиту.
        console.log(`Executing query: ${query}`);
    }
}
// Використання
const builder = new QueryBuilder();
const dbQuery = builder
    .from("Users")
    .where("age > 21")
    .where('status = "active"')
    .order("lastName")
    .build();
dbQuery.query(); // Executing query: SELECT * FROM Users WHERE age > 21 AND status = "active" ORDER BY lastName
export {};
//# sourceMappingURL=Builder_Pattern_SQL_DB_Query.js.map