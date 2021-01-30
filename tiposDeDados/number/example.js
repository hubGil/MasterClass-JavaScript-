console.log(`O tipo de base é decimal: ${new Number(10)}`);
console.log(`O tipo de base é exadecimal: ${new Number(0xff)}`);
console.log(`O tipo de base é binário: ${new Number(0b10)}`);
console.log(`O tipo de base é octa: ${new Number(0o10)}`);

// Os métodos toExponential, toFixed e toPrecision:
//  podem ser utilizados para mudar
//  a forma como um número é representado.

let n = new Number(10);

// toExponential é a notação cientifica, muito utilizado na física e matemática.
// multiplica o pa

const multiPlicaOParametroNa2 = (valor, parametro) => {
  return valor.toExponential(parametro);
};

console.log(multiPlicaOParametroNa2(123.4, 10));
console.log(multiPlicaOParametroNa2(1234.5, 10));

// toFixed é a quantidade de casas após a virgula

const adicionarZerosAposVirgula = (valor, quantidadeDeZeros) => {
  return valor.toFixed(quantidadeDeZeros);
};

console.log(adicionarZerosAposVirgula(10, 5));

// toPrecision indica o número total de acordo com a quantidade enviada por parametro

const completaOTamanho = (valor, quantidade) => {
  return valor.toPrecision(quantidade);
};

console.log(completaOTamanho(123.4, 10));
