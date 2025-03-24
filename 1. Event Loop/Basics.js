/*
Event Loop :
------------
Since JavaScript is single-threaded, it uses the event loop to manage asynchronous code without blocking the main thread.
a. Browser has JS engine. JS engine have callstack.

📌 Components of the Event Loop :   
---------------------------------
1. Call Stack (Execution Stack) : a). Keeps track of function calls.
                                  b). If a function calls another function, it gets pushed onto the stack; 
                                                                            when finished, it gets popped off.
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


3. MacroTask Queue | Callback Queue | Task Queue | Message Queue) :
*/