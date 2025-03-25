/*
Event Loop :
------------
Since JavaScript is single-threaded, it uses the event loop to manage asynchronous code without blocking the main thread.

    a. Browser has JS engine. JS engine have callstack. Inside Callbacks program ( GEC ) runs.
    b. When Asyc code comes in GEC, It is moved to "Web API Environment".
       All the Asyn functions or operations are moved in "Web API Environment" and browser waits them too complete.
       Ex : There is a timer of 5sec.
            After 5 sec it will be moved in Callback  Queue.
    c. Now here comes picture of Event Loop.
       On the basis of Priority Event Loop put the task from Queue to Callstack.


                                    Asyn Code -------------(1)------------------
                                                                                ↓
    |  CallStack  |                                                      |    Web API   |
    |             |                                                      |  Environment |
    ---------------                                                      ----------------
            ↑  (4)                   ---------------                          |
            ------------------------ |  Event Loop |                          |                                                                                                   
                                     ---------------                          | (2)                                               
                                            ↑  (3)                            |
                        =========================================  <--------- |
                          Micro Task Queue ( Highest Prioirty )
                        =========================================
                        =========================================
                           Callback  Queue ( Lower Prioirty )
                        =========================================                       

📌 Components of the Event Loop :   
---------------------------------
1. Call Stack (Execution Stack) : a). Keeps track of function calls.
                                  b). If a function calls another function, it gets pushed onto the stack; 
                                                                            when finished, it gets popped off.
                                     ->The Call Stack manages execution contexts in a Last In, First Out (LIFO) order.
                                  c). Executes synchronous code line by line.


2. Web APIs : a). Browser provides APIs that run asynchronously.
                  Ex : 
                  i).   Timer APIs (setTimeout, setInterval, setImmediate)
                  ii).  Network Requests (fetch, WebSockets).
                  iii). DOM Event Handlers - addEventListener(event, callback).
                        Ex : click, keypress, etc.

                            document.addEventListener("click", () => {
                                    console.log("Document Clicked");
                            });
                   iv). Microtask APIs (High Priority) : Promise.then(callback) → Runs before setTimeout.

               b). These don’t block the main thread.


3. MacroTask Queue | Callback Queue | Task Queue | Message Queue :

            a. Stores callbacks from Web APIs (like setTimeout).
            b. Once the call stack is empty, the event loop moves tasks from this queue to the stack.

4. Microtask Queue :

            a. Contains tasks from Promises (.then(), catch(), finally()) and MutationObserver.
            b. Always executed before the callback queue.
*/