/*
Execution order of setTimeout vs. setImmediate :
-----------------------------------------------
The execution order of setTimeout vs. setImmediate in Node.js depends on when they are scheduled in the event loop.

A. setImmediate is executed in the Check phase of the event loop
B. setTimeout(0) is executed in the Timers phase, 

Que. When does setTimeout(0) run first?
Ans. If setTimeout(0) and setImmediate() are called from the main script (not inside an I/O callback).

        setTimeout(() => console.log("setTimeout"), 0);
        setImmediate(() => console.log("setImmediate"));
        console.log("End");

        OP :
        End
        setTimeout
        setImmediate

        Why?
        a. Synchronous code runs first: console.log("End")
        b. setTimeout(0) runs in the Timer Phase (first macrotask phase).
        c. setImmediate() runs in the Check Phase (after Timer Phase).



Que. When does setImmediate() run first?
Ans. If both are inside an I/O callback (like fs.readFile()).

        const fs = require("fs");
        fs.readFile(__filename, () => {
            setTimeout(() => console.log("setTimeout"), 0);
            setImmediate(() => console.log("setImmediate"));
        });

        OP:
        setImmediate
        setTimeout
*/

