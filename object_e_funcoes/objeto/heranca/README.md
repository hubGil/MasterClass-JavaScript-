# Herança
O principal objetivo da herança é permitir o reuso de código por meio do compartilhamento de propriedades entre objetos, evitando a duplicação.

> Cuidado: Na linguagem a herança é realizada entre objetos e não classes, mais conhecida como herança baseada em prototipos.

A propriedade __proto__ é uma referência para o protótipo do objeto

### hasOwnProperty

O método hasOwnProperty pode ser utilizado para determinar se uma propriedade pertence ao objeto, os métodos Object.setPrototypeOf e Object.getPrototypeOf permitem a interação com o protótipo do objeto.

### Object.create

Com o método Object.create é possível criar um objeto passando o seu protótipo por parâmetro

> Sem o seu protótipo o objeto perde algumas operações importantes

Caso a mesma propriedade exista no objeto e no seu protótipo, a propriedade do próprio objeto é retornada, fazendo a sombra à propriedade do protótipo

