# Expressões regulares
As expressões regulares são estruturas formadas por uma sequência de caracteres
que especificam uma padrão formal que serve para validar, extrair ou mesmo substituir caracteres dentro de uma string.

### Metacaracteres

> . - O ponto representa qualquer caractere.

> \ - A barra é utilizada antes de acaracteres especiais, com o objetivo de escapá-los

> ^ - Inicia com um determinado caractere

> $ - Finaliza com um determinado caractere

> \w - Representa o conjunto [a-zA-Z0-9_]

> \W - Representa o conjunto [^a-zA-Z0-9_]

> \d - Representa o conjunto [0-9]

> \D - Representa o conjunto [^0-9]

> \s - Representa um espaço em branco 

> \S - Representa um não espaço em branco

> \n - Representa uma quebra de linha 

> \t - Representa um tab

## Grupos de caracteres

> [abc] - Aceita qualquer caractere dentro do grupo, nesse caso a, b e c.

> [^abc] - Não aceita qualquer caractere dentro do grupo, nesse caso a, b ou c.

> [0-9] - Aceita qualquer caractere entre 0 e 9

> [^0-9] - Não aceita quaquer caractere entre 0 e 9

## Quantificadores

Os quantificadores podemser aplicados a caracteres, grupos, conjuntos ou metacaracteres.

> {n} - Quantifica um número específico

> {n,} - Quantifica um número mínimo

> {n,m} - quantifica um número mínimo e um número máximo

> ? - Zero ou um

> \* - Zero ou mais

> \+ - Um ou mais

## Grupos de Captura

> () -  Determina um grupo de captura para realizar a extração de valores de uma determinada String


