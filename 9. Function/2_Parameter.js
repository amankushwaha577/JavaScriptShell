// 1. Default Parameters
// Allows setting default values for parameters.

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // Output: "Hello, Guest!"
console.log(greet("Ananya")); // Output: "Hello, Ananya!"

// 2. Rest Parameters
// Allows a function to accept an indefinite number of arguments as an array.
// Syntax: ...rest

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
