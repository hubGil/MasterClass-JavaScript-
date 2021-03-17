const languages = ["Fortran", "Lisp", "COBOl"];

const iterator = languages[Symbol.iterator]();
// cada vez que é criado ele retorna o valor, para que termine o array é necessario executar varias vezes
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());