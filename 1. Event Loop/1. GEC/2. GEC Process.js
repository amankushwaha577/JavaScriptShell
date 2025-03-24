console.log(x);  // undefined (Hoisting)

var x = 10;

function greet() {
  console.log("Hello!");
}

greet();  // "Hello!"

/*
1. The GEC is pushed onto the Call Stack when execution starts.

                Global Execution Context (GEC) is created
                |
                |----> Memory Allocation Phase:
                |      
                |        x = undefined (Hoisting)
                |        greet = function reference
                |
                |
                |----> Execution Phase starts
                |
                |----> console.log(x); is executed
                |        OP: undefined (Since x is hoisted but not assigned yet)
                |
                |----> x = 10;  (Value is now assigned to x)
                |
                |----> greet() is called → New Execution Context is pushed
                |        |
                |        |----> Inside greet() Execution Context
                |        |        OP: console.log("Hello!");
                |        |
                |        |----> greet() finishes and is popped
                |
                |----> Global Execution Context continues
                |
                |----> All code is executed, GEC is popped off the Call Stack


2. When all code is executed, the Global Execution Context is popped off the stack.
*/


/*
Global Execution Context (GEC) is created:
   1. Call Stack:  
   ---------------  
   |  GEC        |  
   ---------------  

   2. Memory Allocation Phase: 
      - `x` is hoisted with `undefined`.  
      - `greet` function is stored in memory as a reference.  

   3. Execution Phase starts**  

        → `console.log(x);` executes (outputs `undefined`)  
        ---------------  
        |  GEC        |  
        ---------------  

        → `x = 10;` (Variable is assigned a value)  
        ---------------  
        |  GEC        |  
        ---------------  

        → `greet()` is called → New Execution Context is pushed  
        ---------------      ---------------  
        |  GEC        |  ->  | greet EC    |  
        ---------------       ---------------  
                              |  GEC        |  
                              ---------------  

        → Inside `greet()`, `console.log("Hello!");` executes (outputs `"Hello!"`)  

        → `greet()` finishes → Execution Context is popped  
        ---------------  
        |  GEC        |  
        ---------------  

   4. All code is executed, GEC is popped off the stack
*/