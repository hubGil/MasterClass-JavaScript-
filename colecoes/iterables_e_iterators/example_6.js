const languages = new Map([["Fortran", 1957], ["Lisp", 1958], ["COBOl", 1959]]);

const iterator = languages.entries();
const iteratorKeys = languages.keys();
const iteratorValues = languages.values();
// cada vez que é criado ele retorna o valor, para que termine o array é necessario executar varias vezes
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iteratorKeys.next());
console.log(iteratorKeys.next());
console.log(iteratorKeys.next());
console.log(iteratorKeys.next());
console.log(iteratorValues.next());
console.log(iteratorValues.next());
console.log(iteratorValues.next());
console.log(iteratorValues.next());