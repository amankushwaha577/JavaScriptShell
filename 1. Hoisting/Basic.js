/*
Hoisting is javascript's default behaviour in which javascript moves variable declaration to the top.

| Declaration Type     | Hoisted?  | Initialized? | Scope          | Notes |
|----------------------|-----------|--------------|----------------|------------------------------------------------------------|
| var                  | ✅ Yes    | ❌ No       | Function Scope | Hoisted but **not initialized** (undefined).               |
| let                  | ✅ Yes    | ❌ No       | Block Scope    | Hoisted but **not initialized** (Temporal Dead Zone error).|
| const                | ✅ Yes    | ❌ No       | Block Scope    | Hoisted but **not initialized** (Temporal Dead Zone error).|
| Function Declaration | ✅ Yes    | ✅ Yes      | Function Scope | Fully hoisted (can be called before declaration).          |
| Function Expression  | ✅ Yes    | ❌ No       | Block Scope    | Variable hoisted but function is **not initialized**.      |
| Arrow Function       | ✅ Yes    | ❌ No       | Block Scope    | Works like `let/const`, not accessible before declaration. |


📝 Key Takeaways :
-----------------
1. var is hoisted as undefined.
2. let and const are hoisted but throw an error if accessed before declaration.

3. Function Declarations are fully hoisted.
4. Function Expressions and Arrow Functions are hoisted as  (undefined : if var) or  (TDZ : if let/const).
*/




/*
1. Variable Hoisting with var :
-----------------------------

a. The "var a" declaration is hoisted to the top of the scope, 
b. but its assignment (a = 10) is not. 
   At the time of the console.log, a is declared but a is assigned "undefined" until the actual assignment. */

console.log(a);
var a = 10;
// OP: undefined



/*
2. Variable Hoisting with let and const
---------------------------------------

a. let and const declarations are hoisted but remain in a "temporal dead zone" (TDZ) until their initialization. 
b. Accessing them before initialization results in a ReferenceError. */

console.log(b);
let b = 20;
// OP: ReferenceError: Cannot access 'b' before initialization

console.log(z);
const z = 30;
// OP: ReferenceError: Cannot access 'z' before initialization




/*
3. Function Declaration Hoisting :
--------------------------------

a. Function declarations are fully hoisted, 
b. meaning both the function's declaration and its body are moved to the top of the scope. 
   meaning they can be called before they are defined. */

greet();
function greet() {
  console.log("Hello!");
}
// OP: Hello!



/*
4. Function Expression Hoisting :
-------------------------------

a. In function expression function expression is assigned to a variable. 
b. The variable is hoisted, but this variable is not initialized with its function.
   
   Note : Also value of this variable depends on type of variable - var/let/const
          if it's var       -> undefined
          if it's let/const -> TDZ*/

sayHello(); // The variable sayHello is hoisted but it's undefined currently.

var sayHello = function () {
  console.log("Hi!");
};
// OP: TypeError: sayHello is not a function




/*
5. Hoisting with Arrow Functions:
---------------------------------

a. Arrow functions are treated like function expressions. */

console.log(sum(2, 3)); //  sum = undefined currently.
var sum = (a, b) => a + b;

// OP: TypeError: sum is not a function




