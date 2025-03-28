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

// Explanation:
// In the global scope, var a is hoisted, so console.log(a) logs undefined.
// Inside the function, var b is hoisted, so console.log(b) also logs undefined.


// 1. Hoisting in the Global Scope :
//    ----------------------------------
//    Before the code executes, JavaScript’s engine processes variable and function declarations in two phases:
//     A. Memory Creation Phase (Hoisting): Declarations (var and function) are moved to the top of their respective scope.
//     B. Execution Phase: Code runs line by line.

//     After the hoisting, the global scope looks like this:
        var a;            // `var a` is hoisted to the top, initialized to `undefined`.
        function test() { // `test` is hoisted with its full definition.
          console.log(b);
          var b = 10;
        }

//      Key Points:
//      i).var a is hoisted to the top of the global scope but not initialized with 5 yet.
//      ii).The function test is hoisted completely, making it available for use.


// 2. Execution Phase in the Global Scope
//    ----------------------------------------
//    Now the code starts executing line by line:
//    A. console.log(a);
//       At this point, a is declared but not initialized, so its value is undefined.
//       Output: undefined

//    B. var a = 5;
//       Now, a is assigned the value 5.

//    C. Function Declaration (function test())
//       The function test was already hoisted and defined during the memory creation phase, 
//       so this line does nothing during execution.

//    D. Function Call (test();)
//       The control moves into the test function.


// 3. Inside the test Function
//    -------------------------------------
//    When test is called, a new function execution context is created. 
//    Just like the global scope, the function scope also undergoes hoisting.
//    A. Memory Creation Phase in test:
//       var b is hoisted to the top of the test function, initialized to undefined.
          function test() {
            var b; // Hoisted to the top, initialized to `undefined`.
            console.log(b);
            b = 10;
          }
//    B. Execution Phase in test:  
          console.log(b);  //undefined
//        i. At this point, b is declared but not initialized, so its value is undefined.     
          var b = 10;  
//        ii. Now, b is assigned the value 10. 
//        iii. End of test Function: The function completes execution, and the test function’s execution context is destroyed.



