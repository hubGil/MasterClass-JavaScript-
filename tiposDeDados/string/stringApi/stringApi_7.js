// concat: Retorna uma nova String resultante da concatenacao da que esta
//  invocando a funcao e da outra passada por parametro
"Java".concat("Script");
// resultado = 'JavaScript'

"Data".concat("Flex");
// resultado = 'DataFlex'

// padStart: Completa a String com caracteres no inicio
"Script".padStart(10, "Java");
// resultado = 'JavaScript'

// padEnd: Completa a String com caracteres no fim
"C".padEnd(3, "+");
// resultado = 'C++'

// repeat: Repete um caractere
"C".concat("+".repeat(2));
// resultado = 'C++'

// trim: Elimina espacos em branco no inicio e no fim
" Self ".trim();
// resultado = 'Self'

// trimLeft: Elimina espacos em branco no inicio
" Scheme ".trimLeft();
// resultado = 'Scheme ';

// trimRight: Elmina espacos em branco no fim
" Perl ".trimRight();
// resultado = ' Perl'