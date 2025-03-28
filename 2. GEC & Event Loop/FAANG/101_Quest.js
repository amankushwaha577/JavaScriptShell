console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Start
// End
// Promise
// Timeout

/*
1. console.log("Start") is executed first.

2. setTimeout callback is added to the macro-task queue.          
3. The Promise .then() callback is added to the micro-task queue.

4. console.log("End") is executed.

The event loop processes the micro-task queue first, so console.log("Promise") runs before the setTimeout callback.
Finally, the setTimeout callback runs.
*/