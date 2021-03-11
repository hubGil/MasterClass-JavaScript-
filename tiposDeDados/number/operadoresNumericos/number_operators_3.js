// Nao confundir o operador bit a bit '|' com o operador booleano '||' 
4 | 3;
// Essa conta é feita pela linguagem utilizando binário, por exemplo:
(4).toString(2).padStart(32, 0);
// resultado = '00000000000000000000000000000100'
(3).toString(2).padStart(32, 0);
// resultado = '00000000000000000000000000000011'
// quando visualizamos o final do binario temos 100 e 011, ou seja
// se fizer um a um teremos o resultado 111.
// com isso podemos validar com o 0b111 o resultado 7

3 & 1;
5 ^ 2;
~2;
4 << 2;
128 >> 1;
-2 >>> 1;