// 1. Destructuring:
//    Destructuring allows you to extract values from arrays or properties from objects into distinct variables.
// --------------------------------------------------------------------------------------------------------

// Array Destructuring
const [a, b] = [1, 2, 3];
console.log(a, b); // Output: 1 2

// Object Destructuring
const obj = { x: 10, y: 20 };
const { x, y } = obj;
console.log(x, y); // Output: 10 20

const user = { name: "Alice", address: { city: "Zagreb", country: "Croatia" } };
const { address: { city, country } } = user;
console.log(city, country); // Output: Zagreb Croatia




// 2. Rest/Spread Syntax
// Rest is used to collect remaining elements.
// Spread is used to unpack elements.
// ----------------------------------------------------------------------------------------------------------

// Rest Syntax
const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // Output: 1
console.log(tail); // Output: [2, 3, 4]

// Spread Syntax
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // Output: [1, 2, 3, 4]

// Combining Objects/Arrays:

// Combining Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Combining Arrays
const arr11 = [1, 2];
const arr22 = [3, 4];
const combinedArr = [...arr11, ...arr22];
console.log(combinedArr); // Output: [1, 2, 3, 4]





// 3. Working with Nested Objects/Arrays
// ----------------------------------------------------------------------------------------------------------
const nestedObj = { a: { b: { c: 5 } } };
const { a: { b: { c } } } = nestedObj;
console.log(c); // Output: 5

const nestedArr = [[1, 2], [3, 4]];
const [,[second]] = nestedArr;
console.log(second); // Output: 3





// Interview Output-Based Questions
// ----------------------------------------------------------------------------------------------------------

const obj5 = { a: 1, b: 2, c: 3 };
const { r, ...rest } = obj5;
console.log(r, rest);
// OP: 1 { b: 2, c: 3 }

const arr = [1, [2, 3], 4];
const [first, [secondd], fourth] = arr;
console.log(first, secondd, fourth);
// OP: 1 2 4

const obj10 = { x: 1, y: { z: 2 } };
const obj20 = { ...obj10 };  // Explanation: Shallow copying with spread doesn't deep copy nested objects.
obj20.y.z = 3;
console.log(obj10.y.z);
// OP: 3

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; //Explanation: A new array is created with the spread operator, so the references differ.
console.log(numbers === newNumbers);
// OP: false

const userr = { name: "John", age: 30 };
const newUser = { ...userr, age: 25 };
console.log(newUser.age);  // Explanation: The age property in user is overwritten in newUser.
// OP: 25




