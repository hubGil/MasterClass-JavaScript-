// Os tipos de dados na linguagem JavaScript se dividem em primitivos e objetos
// O primitivos são imutáveis, ou seja, ao longo do tempo seu valor não é alterado

console.log(`verificando o tipo de 10: ${typeof 10}`);
console.log(`verificando o tipo de JavaScript: ${typeof "JavaScript"}`);
console.log(`verificando o tipo de true: ${typeof true}`);
console.log(`verificando o tipo de Symbol: ${typeof Symbol("iterator")}`);
console.log(`verificando o tipo de null: ${typeof null}`);
console.log(`verificando o tipo de undefined: ${typeof undefined}`); //valor padrão na linguagem

typeof function sum(a, b) {
  return a + b;
};

typeof { name: "Linus Torvald" };

typeof [1, 2, 3, 4, 5, 6, 7, 8, 9];

typeof /[a-zA-Z_$]/;

typeof new Date();
