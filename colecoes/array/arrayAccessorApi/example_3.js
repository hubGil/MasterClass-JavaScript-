const languages = ["Smalltalk", "C++", "Simula", "Haskell", "Schema"];
const inicioPesquisa = 0;
const fimPesquisa = 2;

console.log(languages.slice(inicioPesquisa, fimPesquisa));

console.log(languages.slice(2, 4));
// Se nao passar o segundo parâmetro, ele utiliza o primeiro passado e percorre até o final
console.log(languages.slice(1));