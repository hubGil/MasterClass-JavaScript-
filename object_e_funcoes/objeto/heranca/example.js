const functionalLanguage = { 
  paradigm: "Functional"
};
// Object.setPrototypeOf(scheme, functionalLanguage); faz a mesma coisa que o __proto__
const scheme = {
  name: "Scheme",
  year: 1975,
  __proto__: functionalLanguage
};
// Object.setPrototypeOf(javaScript, functionalLanguage); faz a mesma coisa que o __proto__
const javaScript = {
  name: "javaScript",
  year: 1995,
  __proto__: functionalLanguage
};

for (let key in scheme){
  console.log(key, scheme.hasOwnProperty(key));
}



