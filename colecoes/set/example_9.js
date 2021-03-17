let array = [10, 10, 10];
let set = [];

array.forEach(element => {
  if(!set.includes(element)){
    set.push(element);
  }
});

console.log(set)


