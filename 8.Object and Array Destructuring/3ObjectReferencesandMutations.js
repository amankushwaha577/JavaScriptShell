// 1. Object References and Mutations
// -------------------------------------------------------------
const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 2;
console.log(obj1.a); // Output: 2

// Explanation:
// Objects are reference types in JavaScript. obj2 is not a copy of obj1; it’s a reference to the same memory location.
// Modifying obj2.a also changes obj1.a because both variables point to the same object.

let arr = [1, 2, 3];
let newArr = arr;
newArr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]

// Explanation:

// Arrays are also reference types. newArr references the same array in memory as arr.
// Modifying newArr (e.g., by pushing an element) directly affects arr.


