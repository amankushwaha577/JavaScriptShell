// 1. Function Declarations
// Syntax: function functionName() { }
// Hoisted to the top of their scope.

console.log(sum(3, 4)); // Output: 7 (hoisted)
function sum(a, b) {
  return a + b;
}



// 2. Function Expressions
// Syntax: const functionName = function() { }
// Not hoisted.

console.log(multiply(3, 4)); // Output: ReferenceError (not hoisted)
const multiply = function(a, b) {
  return a * b;
};



// 3. Arrow Functions
// Syntax: const functionName = () => { }
// Shorter syntax.
// Lexical this binding (inherits this from the surrounding scope).
// Cannot be used as constructors.

const greet = () => "Hello, world!";
console.log(greet()); // Output: "Hello, world!"

const add = (a, b) => a + b;
console.log(add(2, 5)); // Output: 7


