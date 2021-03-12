// slice: Retorna uma parte da String que esta invocando a funcao iniciando
// na posicao passada no primeiro parametro, ou da posicao passada no 
// primeiro parametro ate o fim, caso o segundo parametro nao seja informado
"JavaScript".slice(0, 4);
// resultado = 'Java'

"JavaScript".slice(4);
// resultado = 'Script'

"JavaScript".slice(0, -6);
// resultado = 'Java'

"JavaScript".slice(-6);
// resultado = 'Script'

// split: Retorna um array contendo o resultado da divisao da String original
//  de acordo com o criterio passado por parametro
"C;Java;JavaScript;Ruby".split(";");
// resultado = [ 'C', 'Java', 'JavaScript', 'Ruby' ]

//  substring: Similar ao slice, nao aceita valores negativos como parametro 
// e permite a inversao dos parametros
"JavaScript".substring(0, 4);
// resultado = 'Java'

"JavaScript".substring(4, 0);
// resultado = 'Java'

"JavaScript".substring(4);
// resultado = 'Script