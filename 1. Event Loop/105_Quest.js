setTimeout(() => console.log("setTimeout"), 0);

for (let i = 0; i < 1000000000; i++) {}

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// End
// Promise
// setTimeout


// Explanation:
// ----------------------------
// The synchronous for loop blocks the event loop until it completes.
// console.log("End") is executed after the loop.

// Micro-task (Promise) is executed next.

// Finally, the macro-task (setTimeout) runs.