# Execution Context

O Execution Context é o ambiente onde o código é executado, sendo composto pelo variable object, scope chain e this. 

<table>
  <thead>
    <tr>
      <th>Execution Context Slack</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Active Execution Context</td>
    </tr>
     <tr>
      <td>...</td>
    </tr>
     <tr>
      <td>Execution Context 2</td>
    </tr>
     <tr>
      <td>Execution Context 1</td>
    </tr>
     <tr>
      <td>Global Execution Context </td>
    </tr>
  </tbody>
</table>

> Dentro de uma função é possível acessar variáveis existentes fora dela, por meio da scope chain. 

> Não é possível acessar de fora de uma variável que foi declarada dentro de uma função

Toda função tem uma variável this que contém a referência para o objeto responsável pela sua invocação.
