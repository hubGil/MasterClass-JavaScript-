function createIterable(...array){
  return {
    [Symbol.iterator](){      
      let i = 0;
      return {
        next(){
          if(i < array.length){
            return {
              value: array[i++],
              done: false
            }
          }else{
            return {
              value: undefined,
              done: true
            }
          }
        }
      }
    }
  }
}

const iterable = createIterable("Fortran", "Lisp", "COBOL");
for (const iter of iterable) {
  console.log(iter);
}
// }
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());