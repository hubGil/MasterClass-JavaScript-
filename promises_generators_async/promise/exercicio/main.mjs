// Você pode utilizar a operação Array.prototype.map para converter um array em outro e ainda a operação Array.prototype.filter
// para filtrar os dados. Você pode querer ignorar um grupo de captura, 
// para isso utiliza a notação ?: dentro do grupo, por exemplo (?: where (.+))?
import {Database} from "./database";

try {
  const database = new Database(); 
  database.execute("create table author (id number, name string, age number, city string, state string, country string)").then(function(){
    return Promise.all([
      database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)"),
      database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)"),
      database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)")
    ]).then( function(){
      return database.execute("select name, age from author").then(function(result){
        console.log(result);
      })
    })
  }).catch(function(e){
    console.log(e.message);
  });
  // database.execute("delete from author where id = 2");
  // database.execute("select name, age from author where id = 1");
  // console.log(database);
  // console.log(JSON.stringify(database, undefined, " "));
  // console.log(JSON.stringify(database.execute("select name, age from author where id = 1"), undefined, " "));
  // database.execute("delete from author where id = 2");
  // console.log(JSON.stringify(database.execute("select name, age from author"), undefined, " "));
} 

// catch (e){
//   console.log(e.message);
// }
