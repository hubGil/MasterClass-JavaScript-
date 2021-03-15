const database = {
  tables: {},
  createTable(statement){
    const regeXp = /(\w+) (\w+) ([a-z]+) \((.+)\)/;
    const parsedStatement = statement.match(regeXp);
    const tableName = parsedStatement[3]
    this.tables[tableName] = {
      columns:{},
      data: []
    }
    let columns = parsedStatement[4];
    columns = columns.split(", ");
    for (let column of columns) {
      column = column.split(" ");
      const name = column[0];
      const type = column[1];
      this.tables[tableName].columns[name] = type;
    }
  },
  execute(statement){
    if(statement.startsWith("create table")){
      return this.createTable(statement);
    }
  
  }
};
database.execute("create table author (id number, name string, age number, city string, state string, country string)");

console.log(database);
console.log(JSON.stringify(database, undefined, " "));
