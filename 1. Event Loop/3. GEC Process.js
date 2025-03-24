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
1. The GEC is pushed onto the Call Stack when execution starts.

                Global Execution Context (GEC) is created
                |
                |----> second() Execution Context (EC)
                |        |
                |        |----> first() Execution Context (EC)
                |        |          |----> first() finishes and is popped
                |        |
                |        |----> second() finishes and is popped
                |
                |----> Global Execution Context is removed after execution ends

        Execution Flow
        1. GEC is created.
        2. second() is called → New Execution Context is pushed onto the stack.
        3. first() is called inside second() → New Execution Context is created for first().

        4. Now see,
           first() dont have any call now so.
                   OP : console.log("First");

           first() finishes → Execution Context is popped.

        5. Now back to second(),
                   OP: console.log("Second");

           second() finishes → Execution Context is popped.
                   

        6. Run rest of the code. 
           
           console.log("Global End");

2. When all code is executed, it is popped off the stack.
*/