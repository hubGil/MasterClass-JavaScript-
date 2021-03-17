# WeakMap

WeakMap é um objeto, similar ao Map, que permite apenas chaves do tipo Object 
e mantém as referências de forma fraca, sendo volátil e não iterável.

> set: Adicona um par de chave e valor

> has: Retorna true se a chave existir

> get: Retorna o valor de uma determinada chave

> delete: Remove um par de chave e valor

> Lembre-se: WEAK nao permite chaves que de outros tipos alem de objetos

> Cuidado: Sem a referência para a chave não é possível acessar o valor

O principal ponto em relação ao WeakMap é você implementar uma coleção com referencia fraca para que nao tenha que se preocupa em remover os elementos utilizando algum tipo de cash, o deixando sem preocupação com vazamento de memoria.
