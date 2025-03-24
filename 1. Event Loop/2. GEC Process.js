console.log(x);  // undefined (Hoisting)

var x = 10;

function greet() {
  console.log("Hello!");
}

greet();  // "Hello!"

/*
Step-by-step Execution:
----------------------
Step 1: Memory Creation Phase
        x → undefined (hoisting)
        greet → Stores function reference

Step 2: Execution Phase
        console.log(x); → Prints undefined
        x = 10; → Assigns 10 to x
        greet(); → Calls the function and prints "Hello!"
*/