# WeakSet

WeakSet é um objeto, similar ao Set, que permite apenas valores do tipo Object e mantém as referências de forma fraca, sendo volátil e não iterável.

> add: Adiciona um elemento

> has: Retorna true se o elemento existir

> delete: Remove um elemento

> Cuidado - Valores diferentes de Object não serão aceitas.

Weakset serve para criar coleçoes de elementos onde a gente nao tem uma preocupacao com possiveis vazamento de memoria, e no momento que estes objetos nao sao mais referenciados o garbage colector faz o trabalho de retirar ele da memoria.