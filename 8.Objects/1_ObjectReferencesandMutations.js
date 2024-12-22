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



// 2. Destructuring and Rest/Spread Operators
// --------------------------------------------------------------
const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;
console.log(a); // Output: 1
console.log(rest); // Output: { b: 2, c: 3 }

// Explanation:

// The destructuring syntax { a, ...rest } extracts the property a and assigns the remaining properties to the rest object.
// The ...rest operator gathers the rest of the object into a new object.

const arr2 = [1, 2, 3, 4];
const [first, ...rest2] = arr2;
console.log(first); // Output: 1
console.log(rest2); // Output: [2, 3, 4]

// Explanation:

// Array destructuring allows extracting the first element into first and the remaining elements into rest using the spread/rest operator.

const obj20 = { x: 1, y: 2 };
const obj21 = { y: 3, z: 4 };
const merged = { ...obj20, ...obj21 };
console.log(merged); // Output: { x: 1, y: 3, z: 4 }

// Explanation:
// The spread operator ... combines properties from obj1 and obj2 into a new object.
// If properties overlap (e.g., y), the value from the latter object (obj2) overwrites the earlier one.




