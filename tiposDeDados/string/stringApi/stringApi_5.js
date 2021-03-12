// match: Retorna partes da String com base na RegExp passada por parâmetro
"C++".match(/\+/g);
// resultado = [ '+', '+' ]

// search: Retorna a primeira posicao encontrada com base na RegExp passada por parâmetro
"Java".search(/a/);
// resultado = 1

// replace: Retorna uma nova String resultante da substituicao da String ou
//  RegExp passada no primeiro parâmetro pelo segundo parâmetro
"JavaScript".replace("Java", "Ecma");
// resultado = 'EcmaScript

"JavaScript".replace(/a/g, 4);
// resultado = 'J4v4Script'