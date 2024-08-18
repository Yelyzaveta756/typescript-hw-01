// Завдання
// function merge (objA, objB) {
//       return Object.assign(objA, objB);
//     }
    
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  
  console.log(merge({ dog: "York-terrier" }, { bark: "loud" }));