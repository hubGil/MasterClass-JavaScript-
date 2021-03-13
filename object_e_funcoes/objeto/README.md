## Objeto

Um objeto é uma coleção dinâmica de propriedades definidas por chaves, que podem
ser do tipo String ou Symbol, e valores que podem ser de qualquer tipo de dado.

É possível criar objetos de várias formas: pela notação literal, por meio de uma função construtora ou do método create da Object API.

> Lembre-se: Se vc criar um objeto da forma mais simples {}, e adicionar o ";" o interpretador irá se confundir e pensar que é o fechamento de um bloco de código.

Uma das diversas maneiras de atribui propriedades a um objeto é durante a sua inicialização, pela notação literal.

> Cuidado -> Dependendo da chave é necessário declará-la diretamente como string

As chaves também podem ser computadas em tempo de execução, mas esta funcionalidade só funciona do ES6 para frente.

Além da notação literal, é possível atribuir propriedades aos objetos por meio da sua referência

> Assim como na notação literal, é possível computar as chaves de um objeto em tempo de execução por meio da sua referência

Cada uma das propriedades de um objeto podem ser consultadas por meio da sua referência, de forma direta, também é possível consultar cada uma das propriedades de um objeto por meio da computação das chaves.

#### Modelo Objetos

<table>
    <thead>  
      <tr>
        <th scope="col">Chave</th>
        <th scope="col">Valor</th>   
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>title</td>
      <td>Clean Code</td>    
    </tr>
    <tr>
      <td>author</td>
      <td>Robert C. Martin</td>      
    </tr>
     <tr>
      <td>pages</td>
      <td>464</td>      
    </tr>
     <tr>
      <td>language</td>
      <td>English</td>      
    </tr>
     <tr>
      <td>available</td>
      <td>true</td>      
    </tr>
  </tbody>
</table>