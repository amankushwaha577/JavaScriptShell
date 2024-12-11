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


// Key Concept
// Execution Order:
// ------------------------------------------------
// Synchronous code runs first.
// Then, micro-tasks (e.g., Promises) are processed in the order they are added.
// Finally, macro-tasks (e.g., setTimeout) are processed in the order they are added.


// Important Points in This Example:

// Even though setTimeout with 0 ms delay runs as soon as possible, it is a macro-task and always waits until all micro-tasks are completed.
// Promises (.then) are always micro-tasks and run before macro-tasks.