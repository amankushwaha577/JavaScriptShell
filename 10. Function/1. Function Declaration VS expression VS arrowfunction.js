
/*
1. Function Declarations :
--------------------------
    a. Syntax: function functionName() { }
    b. Hoisted to the top of their scope. */

console.log(sum(3, 4)); // Output: 7 (hoisted)
function sum(a, b) {
  return a + b;
}


/*
2. Function Expressions :
-------------------------
    a. Syntax: const functionName = function() { }
    b. Not hoisted. */

console.log(multiply(3, 4)); // Output: ReferenceError (not hoisted)
const multiply = function(a, b) {
  return a * b;
};


/*
3. Arrow Functions :
-------------------
    a. Syntax: const functionName = () => { }
    b. Shorter syntax.
    c. Lexical this binding (inherits this from the surrounding scope).
    d. Cannot be used as constructors. */

const greet = () => "Hello, world!";
console.log(greet()); // Output: "Hello, world!"

const add = (a, b) => a + b;
console.log(add(2, 5)); // Output: 7


