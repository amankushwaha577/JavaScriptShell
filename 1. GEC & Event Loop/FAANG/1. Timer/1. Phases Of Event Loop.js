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

        setTimeout(() => {
        console.log("Timers Phase: setTimeout executed");
        }, 0);


2. I/O Callbacks Phase :
------------------------
        a. We have executed our timer callbacks now execute other callbacks, 
           Now, Here I/O callbacks are executed.
        b. Handles errors from network requests, file operations, and other asynchronous tasks.

        const fs = require("fs");

        fs.readFile(__filename, () => {
        console.log("I/O Callbacks Phase: File read completed");
        });


3. Idle, Prepare Phase (Internal) :
----------------------------------
        a. Used internally by Node.js.
        b. Generally ignored in userland applications.


4. Poll Phase  (Most Important Phase) :
---------------------------------------
        a. Handles incoming connections, network requests, and new events.
        b. Executes all available I/O callbacks (except those scheduled in Check or Timers phases).
        c. If there are no I/O tasks in the queue =>, it waits for new events 
           if there are pending setImmediate() callbacks => it moves to the Check phase.


5. Check Phase :
----------------
        a. Executes setImmediate() callbacks.
        b. This phase runs after the poll phase.
            setImmediate(() => {
            console.log("Check Phase: setImmediate executed");
            });


6. Close Callbacks Phase :
--------------------------
        a. Executes when an object (like a socket) is closed.

            const net = require("net");

            const server = net.createServer();
            server.on("connection", (socket) => {
            console.log("Client connected");
            socket.end();
            });

            server.listen(3000, () => {
            const client = net.connect(3000);
            client.on("close", () => {
                console.log("Close Callbacks Phase: Client connection closed");
            });
            });

*/



setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
fs.readFile(__filename, () => {
  console.log("File read complete (Poll Phase)");
});
process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("Promise"));


/*
OP:
    nextTick
    Promise
    setTimeout / setImmediate (order depends on the poll phase timing)
    File read complete (Poll Phase)



a. process.nextTick() runs first.
b. Microtasks (Promise.then()) run next.
c. setTimeout(0) and setImmediate() execution order depends on whether the event loop is already in the poll phase.
*/