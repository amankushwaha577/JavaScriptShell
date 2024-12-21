// 1. Variable Hoisting with var
// -----------------------------------
console.log(a);
var a = 10;
// OP: undefined

// Explanation:
// The var a declaration is hoisted to the top of the scope, 
// but its assignment (a = 10) is not. At the time of the console.log, a is declared but not assigned a value, so it logs undefined.



// 2. Variable Hoisting with let and const
// ------------------------------------
console.log(b);
let b = 20;
// OP: ReferenceError: Cannot access 'b' before initialization

console.log(z);
const z = 30;
// OP: ReferenceError: Cannot access 'z' before initialization

// Explanation:
// let and const declarations are hoisted but remain in a "temporal dead zone" (TDZ) until their initialization. 
// Accessing them before initialization results in a ReferenceError.



// 3. Function Declaration Hoisting
// -------------------------------------
greet();

function greet() {
  console.log("Hello!");
}
// OP: Hello!

// Explanation:
// Function declarations are fully hoisted, 
// meaning both the function's declaration and its body are moved to the top of the scope.



// 4. Function Expression Hoisting
// -------------------------------------
sayHello();

var sayHello = function () {
  console.log("Hi!");
};
// OP: TypeError: sayHello is not a function

// Explanation:
// The var sayHello declaration is hoisted, but its value (the function expression) is not. 
// At the time of the call, sayHello is undefined, and calling undefined as a function throws a TypeError



