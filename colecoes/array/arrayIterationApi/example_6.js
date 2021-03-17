const frameworks = [
  {
    name: "Angular.js",
    contributors: 1548
  },
  {
    name: "Ember.js",
    contributors: 739
  },
  {
    name: "Vue.js",
    contributors: 240
  }
];

const valorInicialTotal = 0;
const result = frameworks.reduce((total, framework)=>{
  return total + framework.contributors;
}, valorInicialTotal);
// o segundo parâmetro "0" é o valor inicial do parâmetro "total"

console.log(result);