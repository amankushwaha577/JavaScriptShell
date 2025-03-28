// process.nextTick (Node.js)
process.nextTick(() => console.log("Next Tick"));
Promise.resolve().then(() => console.log("Promise"));
setTimeout(() => console.log("Timeout"), 0);
console.log("End");

// Output: End, Next Tick, Promise, Timeout.

/*
1. process.nextTick has higher priority than Promises in Node.js.
2. Order: End, Next Tick, Promise, Timeout.
*/


