// Ao declarar uma variável sem var, let ou const ela é criada no escopo global
// Nunca declare variáveis sem var, let e const e evite a utilização de var.
// Var = Permite a redeclaração e reatribuição

var pi = 3.141592;
console.log(pi);

var pi = 3;
console.log(pi);

if (true) {
  var pi = "Dentro do if";
}

console.log(pi);

// Let = Respeita o bloco de atribuição permitindo reatribuição,
// mas não a redeclaração

let pi2 = 3.141592;
console.log(pi2);

pi2 = 3;
console.log(pi2);

if (pi2) {
  let pi2 = 5;
}

console.log(pi2);

// Const = Respeita o bloco da função e não permite reatribuição e nem redeclaração

const pi3 = 3.141592;
console.log(pi3);

const pi3 = 3;

if (true) {
  const pi3 = 5;
}

console.log(pi3);
