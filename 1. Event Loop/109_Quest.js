Promise.resolve().then(() => {
  console.log("Promise 1");
  return Promise.resolve();
}).then(() => console.log("Promise 2"));

// Output: Promise 1, Promise 2.

// Explanation:
// The first .then() executes (Promise 1), and another .then() is chained.
// The second .then() executes after the first one.
// Output: Promise 1, Promise 2.