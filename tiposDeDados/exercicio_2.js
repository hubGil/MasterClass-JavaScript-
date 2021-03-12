const content = String("create table author (id number, name string, age number, city string, state string, country string)")
const regexp = /create table (\w+) \((.+)\)/
const contentAuthor = regexp.exec(content)[1]
const contentColumns = regexp.exec(content)[2];

const tableName = contentAuthor
const columns = contentColumns
const columnsArray = contentColumns.split(", ")

console.log(` Author: ${tableName} \n Columns: ${columns}`)
console.log(columnsArray)