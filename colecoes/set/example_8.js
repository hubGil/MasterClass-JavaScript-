let array = [10, 10, 10];
console.log(array);

const obj = {};
array.forEach( Element => obj[element] = undefined);

array = Object.keys(obj);
console.log(array);


