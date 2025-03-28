// Mixed micro and macro tasks
setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => console.log("Timeout 2"), 0);
});

Promise.resolve().then(() => console.log("Promise 2"));

// Output: Promise 1, Promise 2, Timeout 1, Timeout 2.

/*
1. Promises (Promise 1 and Promise 2) execute before setTimeout.
2. Timeout 1 comes before Timeout 2 in code
   so Timeout 1 run before Timeout 2.
*/