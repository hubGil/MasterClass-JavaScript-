const frameworks = [
  {
    name: "Angular.js",
    contributors: 1548
  },
  {
    name: "Ember.js",
    contributors: 746
  },
  {
    name: "Vue.js",
    contributors: 240
  }  
];

const result = frameworks.every(framework => framework.name.includes("js"));
// Retorna tru se todos tiverem o que foi passado por parametro, nesse caso o js
const result = frameworks.some(framework => framework.name.includes("js"));
// Retorna tru se algum tiver o que foi passado por parametro, nesse caso o js

console.log(result)