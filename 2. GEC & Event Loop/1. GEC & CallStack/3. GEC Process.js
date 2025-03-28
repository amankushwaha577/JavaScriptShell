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
Stack Representation :
---------------------

Here Pushed means, Pushed in CallStack.
The Call Stack manages execution contexts in a Last In, First Out (LIFO) order.


1. The GEC is pushed onto the Call Stack when execution starts.
        1. Call Stack:  
        ---------------  
        |  GEC        |  
        ---------------  

        2. Memory Allocation Phase: 
           a. `first` function is stored in memory as a reference. 
           b. `second` function is stored in memory as a reference. 


        3.  Execution Phase starts :
        
                → `second()` is called → New Execution Context is pushed  
                                     ---------------  
                                     | second EC   |  
                ---------------      ---------------  
                |  GEC        |  ->  |  GEC        |  
                ---------------      ---------------  

                → `first()` is called inside `second()` → New Execution Context is pushed  

                                                              ---------------
                                                              | first EC    |        
                                     ---------------          ---------------   
                                     | second EC   |          | second EC   |  
                ---------------      ---------------          ---------------   
                |  GEC        |  ->  |  GEC        |     ->   |  GEC        |    
                ---------------      ---------------          ---------------   


                → `first()` finishes → Execution Context is popped  
                                     ---------------  
                                     | second EC   |  
                ---------------      ---------------  
                |  GEC        |  ->  |  GEC        |  
                ---------------      ---------------  

                → `second()` finishes → `console.log("Global End")` runs, then GEC is popped 
                ---------------  
                |  GEC        |  
                ---------------  
                
2. All code is executed, GEC is popped off the stack
*/