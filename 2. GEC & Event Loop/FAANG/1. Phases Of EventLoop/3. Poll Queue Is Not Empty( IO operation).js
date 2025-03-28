/*
Scenario 2: Poll Queue is't Empty : If there is I/O operation in the Poll Phase.
----------------------------------  

Both Scenarios✅ :

1. If there is no I/O operation, than setTimeout(0) executes before setImmediate() :
   -------------------------------------------------------------------------------
      But It depends on system performance. 
      suppose our CPU performance is too high that setTimeout(0) callback is always ready before reaching Timer phase.
      Than event loop can peacefully execute this callback in first event loop.
      That's why we always considers that setTimeout(0) runs before setImmediate() if there is no I/o operation.

   a. If setTimeout(0) callback is ready before reaching Timer phase : Than it will be executed now.
   b. If setTimeout(0) callback is not ready before reaching Timer phase : Than it will be executed in next event loop's Timer phase

2. If an I/O operation is present, setImmediate() executes before setTimeout(0).
*/

const fs = require('fs');

fs.readFile(__filename, () => {  // I/O operation (Poll Phase)
  setTimeout(() => console.log("setTimeout"), 0);
  setImmediate(() => console.log("setImmediate"));
  process.nextTick(() => console.log("nextTick"));
  Promise.resolve().then(() => console.log("Promise"));
});

/*

 Output:
            1. nextTick
            2. Promise
            3. setImmediate
            4. setTimeout  

Code Run:
---------
1. fs.readFile(__filename, callback) :
      a. Starts an I/O operation (file reading).
      b. The callback is registered in the I/O Callbacks Phase queue (but won’t run yet).


Event Loop Phase :
-----------------

Step 0: Micro Tasks (executed before event loop continues) : Skip, No microTask yet.
        OP: 

Step 1: Timer Phase :
        No expired timers (setTimeout(0) hasn’t been called yet) 
        => Skips to next phase.

Step 2: I/O Callbacks Phase :
        No pending I/O callbacks (since fs.readFile is still reading).
        => Skips to next phase.

Step 3: Poll Phase :
        Pahse 1 : Checks if fs.readFile is done:

                  a. If not done, the event loop waits here (blocks until I/O completes).
                  b. If done, it moves the callback to the I/O Callbacks Phase queue.

                  Once the file is read, the callback (() => { ... }) is executed immediately in the Poll Phase.

        Phase 2: Inside the I/O Callback :
                 Now, the callback runs synchronously inside the Poll Phase:
                  () => {
                     setTimeout(() => console.log("setTimeout"), 0);  // Timers Phase
                     setImmediate(() => console.log("setImmediate")); // Check Phase
                     process.nextTick(() => console.log("nextTick")); // Microtask (nextTick)
                     Promise.resolve().then(() => console.log("Promise")); // Microtask (Promise)
                  }

                  a. setTimeout(() => ..., 0)    : Registers a Timer (setTimeout) with a 0ms delay (minimum delay is ~1ms in reality).
                  b. setImmediate(() => ...)     : Registers a Check Phase callback (setImmediate).
                  c. process.nextTick(() => ...) : Registers a microtask (nextTick) in nextTick queue.
                  d. Promise.resolve()           : Registers a microtask (Promise.then) in Microtask queue.

        Phase 3: Microtasks Run (Before Next Phase):
                 Before proceeding to the next Event Loop phase, Node.js always runs:

                 OP :
                 nextTick
                 Promise


Step 4: Check Phase : 
        () => console.log("setImmediate")   => setImmediate() executes.

        OP:
            1. nextTick
            2. Promise
            3. setImmediate      


Next Event Loop Cycle :
======================

Step 1: Timer Phase 
        () => console.log("setTimeout"), 0  => Callback of setTimeout() is ready now.

        OP:
            1. nextTick
            2. Promise
            3. setImmediate            
            4. setTimeout
*/


