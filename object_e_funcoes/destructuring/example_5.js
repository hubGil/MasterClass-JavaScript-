const language = {
  name: "C",
  author: "Dennis Ritchie",
  year: 1972,
  company: {
    name: "Bell Labs"
  }
}

const {name, author, year, company: {name}} = language;
console.log(name, author, year, company)