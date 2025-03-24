// process.nextTick (Node.js)
process.nextTick(() => console.log("Next Tick"));
Promise.resolve().then(() => console.log("Promise"));
setTimeout(() => console.log("Timeout"), 0);
console.log("End");

// process.nextTick has higher priority than Promises in Node.js.
// Order: End, Next Tick, Promise, Timeout.
// Output: End, Next Tick, Promise, Timeout.

