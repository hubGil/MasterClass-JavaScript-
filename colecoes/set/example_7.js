let array = [];
array.push(10);
array.push(10);
array.push(10);
console.log(array);
console.log(array.length);

const set = new Set();

set.add(10);
set.add(10);
set.add(10);
console.log(set);
console.log(set.size);

const set2 = new Set(array);
array = Array.from(set2);
console.log(array);
console.log(array.length);