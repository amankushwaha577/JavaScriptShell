// IIFE (Immediately Invoked Function Expressions) :
// An IIFE is a JavaScript function that is executed immediately after it is defined. 
// It helps in creating a new scope, isolating variables, and avoiding polluting the global scope. Here’s a breakdown:

// 1. Scope and Variable Isolation
// IIFEs create their own scope, isolating variables from the outer/global scope. 
// This prevents naming conflicts and keeps variables private.
(function () {
    let a = 10;
    console.log(a); // Output: 10
})();

console.log(typeof a); // Output: "undefined" (a is not accessible outside the IIFE)


// 2. Passing Parameters to IIFEs
// You can pass arguments to an IIFE like a regular function. This is useful for configuring behavior or passing dependencies.
(function (name) {
    console.log(`Hello, ${name}!`);
})("Ananya");

// Output: "Hello, Ananya!"


// 3. Using IIFEs for Module-Like Behavior
// IIFEs are commonly used to create modules by returning an object with methods and variables.
const Counter = (function () {
    let count = 0;

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
    };
})();

console.log(Counter.increment()); // Output: 1
console.log(Counter.decrement()); // Output: 0





// Interview Output-Based Questions
// ---------------------------------------------

(function () {
    var x = 5;
    console.log(x);
})();
console.log(typeof x);

// OP:
// 5
// "undefined"

// Explanation: x is scoped to the IIFE and is not accessible outside of it.


(function (a, b) {
    console.log(a + b);
})(10, 20);

//  OP: 30


const myIIFE = (function () {
    let message = "Hello, IIFE!";
    return message;
})();
console.log(myIIFE); // "Hello, IIFE!"

// The IIFE immediately executes and returns the value of message, which is stored in myIIFE.



(function () {
    "use strict";
    var a = 10;
    delete a; // SyntaxError
    console.log(a); // this line will not execute
})();

// Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.



(function (x) {
    var result = x * x;
    console.log(result);
})(5);
// OP : 25

