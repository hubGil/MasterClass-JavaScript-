## Object API

A Object API nos permite realizar diversas operações importantes com os objetos.

> Object.assign faz a cópia das propriedades dos objetos passados por parâmetro para o objeto alvo, que é retornado.

> Object.keys retorna as chaves das propriedades do objeto

> Object.values retorna os valores das propriedades do objeto

> Object.entries retorna as propriedades do objeto em pares de chave e valor

> Object.is compara dois objetos, considerando os tipos de dados, de forma similar ao operador ===

## defineProperty
- configurable - Permite que uma deerminada propriedade seja apagada
- enumerable - Permite que uma determinada propriedade seja enumerada
- value - Define o valor de uma determinada propriedade
- writable - permite que uma determinada propriedade tenha seu valor modificado

## PreventExtensions, Seal e Freeze
- preventExtensions - Impede que o objeto tenha novas propriedades, mas permite modificar ou remover as propriedades existentes

- seal - Impede que o objeto tenha novas propriedades ou apague propriedades existentes, mas permite modificar propriedades existentes

- freeze - Impede que o objeto tenha novas propriedades, apague ou modifique propriedades existentes.

> LEMBRE-SE - Não é possível alterar o prótotipo do objeto, que se torna imutável.

<table>
  <caption>Exemplo</caption>
  <tbody>
    <tr> 
      <th scope="col"></th>
      <th scope="col">Create</th>
      <th scope="col">Read</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
    <tr>
      <th scope="row">Object.preventExtensions</th>
      <td>nos</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
    </tr>
    <tr>
      <th scope="row">Object.seal</th>
      <td>nos</td>
      <td>yes</td>
      <td>yes</td>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">Object.freeze</th>
      <td>nos</td>
      <td>yes</td>
      <td>no</td>
      <td>no</td>
    </tr>
  </tbody>
</table>