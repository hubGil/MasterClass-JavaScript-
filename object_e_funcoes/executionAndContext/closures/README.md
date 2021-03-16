# Closures

Na linguagem javascript, toda função permite a utilização de variáveis que não foram declaradas e nem passadas por parâmetro

> O problema é que como as funções sáo de primeira classe, dependendo da situação poderia existir uma ambiguidade e isso foi resolvido com o conceito de closure.

A caracteristica das closures é manter o scope chance como statico

> Resumindo, a closure é uma função com um scope chain estático que é definida no momento em que a função é criada, por isso, doas as funções na linguagem JavaScript são closures.

Apesar de estático,o scope chain faz referência para objetos que estão na memória e podem ser compartilhados por mais de uma função.