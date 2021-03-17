const frameworks = [
  {
      name: "Angular.js",
      contributors: 1548
  },
  {
    name: "Ember.js",
    contributors: 740
  },
  {
    name: "Vue.js",
    contributors: 240
  }
];

const result = frameworks.filter(elemento => elemento.contributors < 1000);
console.log(result);