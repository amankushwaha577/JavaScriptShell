console.log(a);
var a = 5;

function test() {
  console.log(b);
  var b = 10;
}
test();

// OP:
// undefined
// undefined

// After hoisting :
var a;          // Hoisted to the top (initialized as undefined)
console.log(a); // undefined
a = 5;          // Assignment happens here

function test() {
  var b;          // Hoisted within function scope (initialized as undefined)
  console.log(b); // undefined
  b = 10;         // Assignment happens here
}

test(); // Function call

/*
Before the code executes, JavaScript’s engine processes variable and function declarations in two phases:
    A. Memory Creation Phase (Hoisting): Declarations (var and function) are moved to the top of their respective scope.
    B. Execution Phase: Code runs line by line.

Step By Step :
-------------
1. Hoisting in the Global Scope :  "var a" & "function test()" is hoisted.

        var a;             // `var a` is hoisted to the top, initialized to `undefined`.
        function test() {  // `test` is hoisted with its full definition.
          console.log(b);
          var b = 10;
        }

2. Execution Phase in the Global Scope : Now the code starts executing line by line:

        console.log(a);
        var a = 5;

        function test() {
          console.log(b);
          var b = 10;
        }
        test();

   A. console.log(a); =>  OP : undefined.
   B. var a = 5;      =>  Now, a is assigned the value 5.

   C. Function Declaration (function test()) =>
      The function test was already hoisted and defined during the memory creation phase, 
      so this line does nothing during execution.

   D. Function Call (test();) =>   When test is called, a new function execution context is created. 

3. Inside the test Function EC:
   A. Memory Creation Phase in test: var b is Hoisted to the top, initialized to `undefined`.

          function test() {
            var b; // Hoisted to the top, initialized to `undefined`.
            console.log(b);
            b = 10;
          }

   B. Execution Phase in test:  

          console.log(b);
          var b = 10;

      a. console.log(b);  =>  OP : undefined.
      b. var a = 10;      =>  Now, a is assigned the value 5.
 
      End of test Function: The function completes execution, and the test function’s execution context is destroyed.
*/



