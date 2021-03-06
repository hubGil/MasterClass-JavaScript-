// function createIterable(...array){
//   return{
//     [Symbol.iterator](){
//       let i = 0
//       return{
//           next(){
//             if(i< array.length){
//               return {
//                 value: array[i++],
//                 done: false
//               }
//             }else{
//               return {
//                 value: undefined,
//                 done: true
//               }
//             }
//           }
//       }
//     }
//   }
// }
function createIterable(...array){
  return{
    *[Symbol.iterator](){
      let i = 0
      while (i < array.length) {
         yield array[i++]        
      }
      
    }
  }
}

const languages = createIterable("Fortran", "Lisp", "COBOL");
for (const language of languages) {
  console.log(language)
}