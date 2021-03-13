const functionalLanguage = { 
  paradigm: "Functional"
};
const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975;

const javaScript = Object.create(functionalLanguage);
javaScript.name = "javaScript";
javaScript.year = 1995;

for (let key in scheme){
  console.log(key, scheme.hasOwnProperty(key));
}



