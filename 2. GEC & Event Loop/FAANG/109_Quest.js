// Chained Promises
Promise.resolve().then(() => {
  console.log("Promise 1");
  return Promise.resolve();
}).then(() => console.log("Promise 2"));

// Output: Promise 1, Promise 2.

/*
1. The first .then() executes (Promise 1), and another .then() is chained.
2. The second .then() executes after the first one.
*/