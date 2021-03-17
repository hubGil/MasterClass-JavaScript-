const languages = ["Python", "C", "Java"];
console.log(languages);
// languages.slice(posicaoParaRetirar, quantidadeParaDeletar, parametroParaAdicionar)


console.log(languages.slice(1, 0, "C++", "C#"));
console.log(languages.slice(1, 2, "C"));