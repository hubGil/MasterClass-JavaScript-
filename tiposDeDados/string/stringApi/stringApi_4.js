// localeCompare é ótimo para ordenar palavras como por exemplo:
// "a".localCompare("b") = resultado -1
// "-a".localCompare("b") = resultado -1
// Ou seja nao corre o risco erros devido as acentuacao

// localeCompare: Retorna -1 se a String passada por parâmetro for maior,

"C++".localeCompare("Ruby");
// resultado = -1

// localeCompare: Retorna 1 se for menor
"Python".localeCompare("Java");
// resultado = 1

// localeCompare: Retorna 0 se for igual
"JavaScript".localeCompare("JavaScript");
// resulado = 0