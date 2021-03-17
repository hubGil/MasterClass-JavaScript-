const frameworks = [
  {
    name: "Angular.js",
    contributor: 1548
  }, 
  {
    name: "Ember.js",
    contributor: 749
  },
  {
    name: "Vue.js",
    contributor: 240
  }
]

const result = frameworks.find(framework =>  framework.name === "Angular.js")

console.log(result)