/*
Scenario 1: Poll Queue is Empty : If there were no I/O operations in the Poll Phase. Than it means Poll Queue is empty.
--------------------------------  Than Poll phase will be skipped.

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

setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("Promise"));

/*

 Output:
            1. nextTick
            2. Promise
            3. setTimeout
            4. setImmediate 

Code Run:
---------
1. setTimeout(() => console.log("setTimeout"), 0);
      a. Registers a Timer (setTimeout) with a 0ms delay (minimum delay is ~1ms in reality).
      b. The callback () => console.log("setTimeout") is added to the Timers Phase queue.

2. setImmediate(() => console.log("setImmediate"));
      a. Registers a Check Phase callback (setImmediate).
      b. The callback () => console.log("setImmediate") is added to the Check Phase queue.

3. process.nextTick(() => console.log("nextTick"));
      a. Registers a microtask (nextTick).
      b. The callback () => console.log("nextTick") is added to the nextTick queue (higher priority than Promises).

4. Promise.resolve().then(() => console.log("Promise"));
      a. Registers a microtask (Promise.then).
      b. The callback () => console.log("Promise") is added to the Microtask (Promise) queue.


Step 0: Micro Tasks (executed before event loop continues)
        OP:
            1. nextTick
            2. Promise

Step 1: Timer Phase 
        () => console.log("setTimeout"), 0  => Suppose Callback of setTimeout() is ready now because of High CPU.

        OP:
            1. nextTick
            2. Promise
            3. setTimeout ( Let Callback is ready because of High CPU )


Step 2: I/O Callbacks Phase, Poll Phase     => Skip them as there are no file read operation.

Step 3: Check Phase : 
        () => console.log("setImmediate")   => setImmediate() executes.

        OP:
            1. nextTick
            2. Promise
            3. setTimeout
            4. setImmediate      
*/

/*
Step 0: Micro Tasks (executed before event loop continues)
        OP:
            1. nextTick
            2. Promise

Step 1: Timer Phase 
        () => console.log("setTimeout"), 0  => Suppose Callback of setTimeout() is not ready

        Skip this cycle.

Step 2: I/O Callbacks Phase, Poll Phase     => Skip them as there are no file read operation.

Step 3: Check Phase : 
        () => console.log("setImmediate")   => setImmediate() executes.

        OP:
            1. nextTick
            2. Promise
            3. setImmediate  

Next Event Loop Cycle :
======================

Step 1: Timer Phase 
        () => console.log("setTimeout"), 0  => Suppose Callback of setTimeout() is ready now.

        OP:
            1. nextTick
            2. Promise
            3. setImmediate            
            4. setTimeout
*/




/*
The order of setTimeout(0) and setImmediate() is non-deterministic when they are scheduled from the main module (not within an I/O cycle). 

This is because:
----------------
a. setTimeout(0) is scheduled in the Timers Phase, but the actual delay depends on the system's performance 
   (it's not truly 0ms, but a minimum of ~1ms in modern browsers/Node.js).

b. Since this code runs in the main module (not inside an I/O cycle), the order of setTimeout(0) and setImmediate() is not guaranteed. 
   It can vary depending on system latency.

    Possible Outputs:
    1. If the setTimeout(0) callback is ready by the time the event loop reaches the timer Phase:
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