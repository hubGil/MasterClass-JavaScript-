# Promises

As promises são objetos responsáveis por modelar comportamento assíncrono, permitindo o seu tratamento de uma forma mais fácil e direta, para criar uma promise basta instanciá-la, executando a função resolve em caso de sucesso, sendo tratado por meio de then

> É possível centralizar o tratamento de uma promise encadeando seus retornos

Podemos executar várias promises ao mesmo tempo, retornando após todas terem sucesso usando Promise.all.

Também podemos executar várias promises ao mesmo tempo, retornando após a primeira ter sucesso usando Promise.race
