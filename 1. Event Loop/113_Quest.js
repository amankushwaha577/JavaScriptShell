//  setImmediate vs setTimeout (Node.js)
setImmediate(() => console.log("Immediate"));
setTimeout(() => console.log("Timeout"), 0);

console.log("End");

// In Node.js, the order of setImmediate and setTimeout may vary depending on implementation, but typically setImmediate runs first.
// Output: End, Immediate, Timeout.