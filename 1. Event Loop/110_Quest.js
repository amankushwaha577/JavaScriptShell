// Mixed micro and macro tasks
setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => console.log("Timeout 2"), 0);
});

Promise.resolve().then(() => console.log("Promise 2"));

// Promises (Promise 1 and Promise 2) execute before setTimeout (Timeout 1).
// Timeout 2 runs after Timeout 1.
// Output: Promise 1, Promise 2, Timeout 1, Timeout 2.