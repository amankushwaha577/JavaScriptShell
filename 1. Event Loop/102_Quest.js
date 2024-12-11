setTimeout(() => console.log("Timeout 1"), 0);

setTimeout(() => {
  console.log("Timeout 2");
  Promise.resolve().then(() => console.log("Promise inside Timeout 2"));
}, 0);

Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => console.log("Promise 2"));

// Promise 1
// Promise 2
// Timeout 1
// Timeout 2
// Promise inside Timeout 2

// Micro-tasks (Promise.then) are executed before any pending macro-tasks (setTimeout).
// Promise 1 and Promise 2 are resolved first.

// Then Timeout 1 executes.
// Next, Timeout 2 executes, and its nested Promise is queued in the micro-task queue, which runs immediately after Timeout 2.