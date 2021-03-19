# Generators

Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa.

Os generators utilizam o método next para iterar sobre os valores disponíveis durante a execução da função.

> Ao encontrar um yield, a execuçao da função é pausada até o método next ser invocado novamente.

O retorno do método next é um objeto contendo value e done, seguindo o protocolo de iteraçao

> Por meio do yield é possivel retornar valores de forma similar ao return

Além disso, também é possível enviar um valor para dentro do generator por meio do método next

> Também temos o método de return que encerra o generator podendo retornar um valor específico

O método throw lança uma exceçao dentro do generator interrompendo o fluxo de execuçao caso a excecao nao tenha sido tratada adequadamente

Como os generators implementam o protocolo de iteraçao é possível utilizá-los com Symbol.iterator de forma simples

> Alem disso, é possível utilizar generators para sincronizar chamadas assincronas d forma similar ao async/await
