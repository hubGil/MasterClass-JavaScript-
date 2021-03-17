const languages = new Map([ ["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]]);

// spreedOperator
console.log(...languages);

for (const [language, year] of languages) {
  console.log(language, year)
}