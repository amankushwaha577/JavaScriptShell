//  setImmediate vs setTimeout (Node.js)
setImmediate(() => console.log("Immediate"));
setTimeout(() => console.log("Timeout"), 0);

console.log("End");

// Output: End, Immediate, Timeout.

// GPT - In Node.js, the order of setImmediate and setTimeout may vary depending on implementation, but typically setImmediate runs first.
// But in reality because of powerful CPU setTimeout gets ready on Timer Phase and get executed first.

/*
Possible Outputs:
    1. If the setTimeout(0) callback is ready by the time the event loop reaches the timer Phase:
       OP:
            setTimeout
            setImmediate

    2. If the setTimeout(0) callback is not yet ready (e.g., due to system delays), setImmediate() may run first:
       OP:
            setImmediate
            setTimeout
*/