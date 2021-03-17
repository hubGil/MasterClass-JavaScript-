const classicLanguages = [ "Fortran", "Lisp", "COBOL"];
const modernLanguages = ["Python", "Ruby",  "JavaScript"];

// SpreedOperator
const languages = [...classicLanguages, ...modernLanguages];


// Mais antigo
for (let i = 0; i < languages.length; i++){
  console.log(languages[i]);
}

// ES5
for(let i in languages){
  console.log(languages[i])
}

// ES5
languages.forEach(language => console.log(language));

// ES6
for (const language of languages) {
  console.log(language);
}