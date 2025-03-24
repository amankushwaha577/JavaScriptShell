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

/*
Here Pushed means, Pushed in CallStack.
The Call Stack manages execution contexts in a Last In, First Out (LIFO) order.


Global Execution Context (GEC) is created**  
   1. Call Stack:  
   ---------------  
   |  GEC        |  
   ---------------  

   2. Memory Allocation Phase: 
      - `second` function is stored in memory as a reference. 
      - `first` function is stored in memory as a reference. 

   3. `second()` is called → New Execution Context is pushed  
   ---------------      ---------------  
   |  GEC        |  ->  | second EC   |  
   ---------------       ---------------  
                         |  GEC        |  
                         ---------------  

   4. `first()` is called inside `second()` → New Execution Context is pushed  
   ---------------      ---------------      ---------------  
   |  GEC        |  ->  | second EC   |  ->  | first EC    |  
   ---------------       ---------------      ---------------  
                         |  GEC        |      | second EC   |  
                         ---------------      ---------------  
                                              |  GEC        |  
                                              ---------------  

   5.`first()` finishes → Execution Context is popped  
   ---------------      ---------------  
   |  GEC        |  ->  | second EC   |  
   ---------------       ---------------  
                         |  GEC        |  
                         ---------------  

   6. `second()` finishes → `console.log("Global End")` runs, then GEC is popped 
   ---------------  
   |  GEC        |  
   ---------------  
*/