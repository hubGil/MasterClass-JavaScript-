const sum = function(a, b) {
  return a + b;
}

const subtract = function(a, b) {
  return a - b;
}

const calculate = function(fn){
  return function(a, b){
    return fn(a, b);
  }
}

console.log(calculate(sum)(2, 2));
console.log(calculate(subtract)(2, 2));