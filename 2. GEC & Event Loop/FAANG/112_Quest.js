// Nested Promises and setTimeout
setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  Promise.resolve().then(() => console.log("Promise 2"));
});

console.log("End");


// End executes first.
// Both Promise 1 and Promise 2 execute before Timeout.
// Output: End, Promise 1, Promise 2, Timeout.