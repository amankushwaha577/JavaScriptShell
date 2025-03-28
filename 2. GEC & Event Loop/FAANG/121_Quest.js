console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  return Promise.resolve();
}).then(() => console.log("Promise 2"));

setTimeout(() => console.log("Timeout 2"), 100);

console.log("End");

// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2

/*
1. Synchronous code runs first.
2. Then, micro-tasks (e.g., Promises) are processed in the order they are added.
3. Finally, macro-tasks (e.g., setTimeout) are processed in the order they are added.
*/