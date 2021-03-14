const content = "create table author (id number, name string, age number, city string, state string, country string)";
const regeXp = /(\w+) (\w+) ([a-z]+) \((.+)\)/;
const parsedStatement = content.match(regeXp);
const tableName = parsedStatement[3]
let columns = parsedStatement[4];
columns = columns.split(", ");

const database = {
  tables: { 
    [tableName]:{
      columns:{

      },
      data: []
    }
  }
};
for (let column of columns) {
 column = column.split(" ");
 const name = column[0];
 const type = column[1];
 database.tables[tableName].columns[name] = type;
}

console.log(JSON.stringify(database, undefined, " "));
