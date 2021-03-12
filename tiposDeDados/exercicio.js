const createTable = "create table author (id number, name string, age number, city string, state string, country string)"
const regexp = /create table ([a-z]+) \((.+)\)/;
const parsedCreateTable = createTable.match(regexp)
let columns = parsedCreateTable[2]
columns = columns.split(", ");

console.log(author);