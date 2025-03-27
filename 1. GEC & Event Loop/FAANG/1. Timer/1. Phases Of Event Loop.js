/*
The event loop is the heart of Node.js, allowing it to handle asynchronous operations efficiently. 
It runs in a single-threaded process but can handle many concurrent operations using non-blocking I/O.

Execution Order of JS code :
----------------------------
1️⃣ Run synchronous code (before the event loop starts).
2️⃣ Run process.nextTick() & Promises (before moving to the next phase).
3️⃣ Go through all event loop phases in order.
4️⃣ Repeat the loop again! 🔄

Phases of Event Loop:
1. Timers Phase :
-----------------
        a. Here callbacks from setTimeout() and setInterval() are Executed. If their timer’s delay has elapsed.
        b. Note: Timers don’t execute exactly at the specified delay due to the queueing mechanism.

2. I/O Callbacks Phase :
------------------------
        a. We have executed our timer callbacks now execute other callbacks, 
           Now, Here I/O callbacks are executed (e.g., from network operations, file system operations).

3. Idle, Prepare Phase (Internal) :
----------------------------------
        a. Used internally by Node.js.
        b. Generally ignored in userland applications.

4. Poll Phase
        Retrieves new I/O events.

        Executes I/O-related callbacks (excluding setImmediate()).

        If there are no timers pending:

        If the poll queue is not empty, execute all callbacks.

        If the poll queue is empty, wait for new I/O events.

5. Check Phase
Executes setImmediate() callbacks.

This phase runs after the poll phase.

6. Close Callbacks Phase
Executes callbacks for closed events (e.g., socket.on('close', callback)).

5️⃣ Check Phase ✅ → Executes setImmediate() callbacks (runs after I/O tasks).

6️⃣ Close Callbacks Phase 🚪 → Executes cleanup functions for closed sockets/files.
*/



setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));

Promise.resolve().then(() => console.log("Promise"));

process.nextTick(() => console.log("nextTick"));

/*
OP:
    nextTick
    Promise
    setTimeout / setImmediate (depends on the environment)

a. process.nextTick() runs first.
b. Microtasks (Promise.then()) run next.
c. setTimeout(0) and setImmediate() execution order depends on whether the event loop is already in the poll phase.
*/