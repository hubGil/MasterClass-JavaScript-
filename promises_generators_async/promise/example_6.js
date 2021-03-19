function sum(a, b) {
  return new Promise(function(resolve, reject){
    if(!a || !b) return reject("Invalid input");
    setTimeout(()=>{
      resolve(a + b);
    }, 1000)

  })
};

console.time("Performance");
Promise.all([
  sum(2,2),
  sum(4,4)
]).then(function(values){
  const [a, b] = values;
  return sum(a,b).then(function (result){
    console.log(result);
    console.timeEnd("Performance");
  })
    }).catch(function (e){
  console.log(e);
})