// Interleaved Promises and setTimeout
setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => console.log("Timeout 2"), 0);
});

Promise.resolve().then(() => {
  console.log("Promise 2");
  Promise.resolve().then(() => console.log("Promise 3"));
});

// Output: Promise 1, Promise 2, Promise 3, Timeout 1, Timeout 2.


/*
1. All micro-tasks (Promise 1, Promise 2, Promise 3) run before macro-tasks (Timeout 1, Timeout 2).
2. Timeout 1 comes first so executed first. than Timeout 2
*/

