const book1 = {
  name: "Refactoring",
  author: "Martin Fowler"
}
const book2 = {
  name: "Refactoring",
  author: "Martin Fowler"
}

// Copia de objetos utilizando JASON
const book3 = JASON.parse(JASON.stringify(book2));

//  Comparação de objetos
console.log(JSON.stringify(book1) === JSON.stringify(book2))
// resposta = true