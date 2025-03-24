function first() {
        console.log("First");
}
      
function second() {
        first();
        console.log("Second");
}
      
second();
console.log("Global End");

/*
1. **Global Execution Context (GEC) is created**
                |
                |----> Memory Allocation Phase:
                |        first = function reference
                |        second = function reference
                |
                |----> Execution Phase starts
                |
                |----> second() is called → New Execution Context is pushed
                |        |
                |        |----> Inside second() Execution Context
                |        |        |
                |        |        |----> first() is called → New Execution Context is pushed
                |        |        |        |
                |        |        |        |----> Inside first() Execution Context
                |        |        |        |        OP: console.log("First");
                |        |        |        |
                |        |        |        |----> first() finishes and is popped
                |        |        |
                |        |        |----> Back to second()
                |        |        |        OP: console.log("Second");
                |        |
                |        |----> second() finishes and is popped
                |
                |----> Back to Global Execution Context
                |        OP: console.log("Global End");
                |
                |----> All code is executed, GEC is popped off the Call Stack.
*/
