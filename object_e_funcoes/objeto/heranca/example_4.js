
// Passando o {} na função, libera os métodos do Objeto
const functionalLanguage = Object.create({});
functionalLanguage.paradigm = "Functional";

const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975;

const javaScript = Object.create(functionalLanguage);
javaScript.name = "javaScript";
javaScript.year = 1995;
javaScript.paradigm = "OO"

console.log(javaScript);
console.log(javaScript.paradigm);
console.log(javaScript.__proto__.paradigm);
// console.log(Object.getPrototypeOf(javaScript).paradigm);

for (let key in scheme){
  console.log(key, scheme.hasOwnProperty(key));
}



