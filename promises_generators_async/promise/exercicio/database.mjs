import Parser from "./parse"
import DatabaseError from "./DatabaseError"

export class Database {
  constructor(){
    this.tables = {};
    this.parser = new Parser();
  }
  createTable(parsedStatement){
    let [, tableName, columns] = parsedStatement
    this.tables[tableName] = {
      columns:{},
      data: []
    }
    columns = columns.split(", ");
    for (let column of columns) {
      column = column.split(" ");
      const [name, type] = column[0];
      this.tables[tableName].columns[name] = type;
    }
  }
  insert(parsedStatement){
    let [,tableName, columns, values] = parsedStatement;
    columns = columns.split(", ");
    values = values.split(", ");
    let row = {};
    for (let i = 0; i < columns.length; i++){
      const column = columns[i];
      const value = values[i]
      row[column] = value;
    
    }
   this.tables[tableName].data.push(row);
  }
  select(parsedStatement){
    let [, columns, tableName, whereClause] = parsedStatement;
    columns = columns.split(", ");
    let rows = this.tables[tableName].data;
    
     if(whereClause) {
      const [columWhere, valueWhere] = whereClause.split(" = ")
      rows = rows.filter(row => row[columWhere] === valueWhere);
    }
    rows = rows.map(row => {
      let selectedRow = {};
      columns.forEach(column =>  {
        selectedRow[column] = row[column];
      });
      return selectedRow;
    })
    console.log(rows);
    return []
  }
  delete(parsedStatement){
    let [valor1, tableName, whereClause] = parsedStatement;

    if(whereClause){
      let [columWhere, valueWhere] = whereClause.split(" = ");
      this.tables[tableName].data = this.tables[tableName].data.filter(row => {
        return row[columWhere] !== valueWhere;
      })
    }else{
      this.tables[tableName].data = [];
    };
    
  }
  execute(statement){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{  
        const result = this.parser.parse(statement);
        
        if(result){
          return this[result.command](result.parsedStatement);
        }
        const message = `Syntax error: "${statement}"`;
        reject(new DatabaseError(statement, message));
        }, 1000)
    })
  }
}