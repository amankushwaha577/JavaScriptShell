/*
Scenario 1: Poll Queue is Empty : If there were no I/O operations in the Poll Phase. Than Poll phase will be skipped.
--------------------------------

Key Takeaway ✅ :
1. If there is no I/O operation, ItsetTimeout(0) executes before setImmediate().
2. If an I/O operation is present, setImmediate() executes before setTimeout(0).

OP:
    1. nextTick
    2. Promise
    3. setTimeout
    4. setImmediate  ✅ (Check Phase runs first since Poll is empty)

Step 1: Micro Tasks (executed before event loop continues)
        OP:
            1. nextTick
            2. Promise

Step 2: Timer Phase 
        () => console.log("setTimeout"), 0  => setTimeout(0) executes.

        OP:
            1. nextTick
            2. Promise
            3. setTimeout


Step 3: I/O Callbacks Phase, Poll Phase     => Skip them as there are no file read operation.

Step 4: Check Phase : 
        () => console.log("setImmediate")   => setImmediate() executes.

        OP:
            1. nextTick
            2. Promise
            3. setTimeout
            4. setImmediate      
*/
setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("Promise"));



/*
The order of setTimeout(0) and setImmediate() is non-deterministic when they are scheduled from the main module (not within an I/O cycle). 

This is because:
a. setTimeout(0) is scheduled in the Timers Phase, but the actual delay depends on the system's performance 
   (it's not truly 0ms, but a minimum of ~1ms in modern browsers/Node.js).

b. Since this code runs in the main module (not inside an I/O cycle), the order of setTimeout(0) and setImmediate() is not guaranteed. 
   It can vary depending on system latency.

    Possible Outputs:
    1. If the setTimeout(0) callback is ready by the time the event loop reaches the Timers Phase:
       OP:
            nextTick
            Promise
            setTimeout
            setImmediate

    2. If the setTimeout(0) callback is not yet ready (e.g., due to system delays), setImmediate() may run first:
       OP:
            nextTick
            Promise
            setImmediate
            setTimeout

So, output is possible but not guaranteed. Both orders are correct.
*/