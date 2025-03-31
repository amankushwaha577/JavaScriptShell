/*
typeof Operator :
-----------------
You can check the data type of a variable using typeof.
*/


console.log(typeof 42);        // "number"
console.log(typeof "Hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"  (This is a known JavaScript bug!)

console.log(typeof {});        // "object"
console.log(typeof []);        // "object"
console.log(typeof [5,7]);     // "object"
console.log(typeof function(){}); // "function"

console.log(typeof 123n);      // "bigint"
console.log(typeof Symbol());  // "symbol"
