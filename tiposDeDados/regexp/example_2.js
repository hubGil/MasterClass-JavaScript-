let regExp = /^(\w+)@(\w+)(\.\w{2,3})+$/
let result = regExp.exec("jhon@gmail.com");
console.log(result);
// resultado = [   'jhon@gmail.com',  index: 0,   input: 'jhon@gmail.com',
// groups: undefined
// ]

console.log(result.index);
// resultado = 0

console.log(result.input);
// resultado = jhon@gmail.com