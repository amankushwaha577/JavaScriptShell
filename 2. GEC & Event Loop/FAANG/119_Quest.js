// Complex nesting of Promises and setTimeout

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  Promise.resolve().then(() => {
    console.log("Promise 2");
    setTimeout(() => console.log("Timeout 2"), 0);
  });
});

console.log("End");

// End, Promise 1, Promise 2 (synchronous + micro-tasks) execute first.
// Timeout 1, then Timeout 2 (macro-tasks) execute.
// Output: End, Promise 1, Promise 2, Timeout 1, Timeout 2.