
setTimeout(() => console.log("setTimeout"), 0);

for (let i = 0; i < 1000000000; i++) {}
// Blocking synchronous code in a loop : The for loop blocks the event loop, delaying both microtasks and macrotasks.

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// End
// Promise
// setTimeout


/*
1. The synchronous for loop blocks the event loop until it completes.

2. console.log("End") is executed after the loop.
3. Micro-task (Promise) is executed next.

4. Finally, the macro-task (setTimeout) runs.

Key Takeaways:
-------------
1. Microtasks (Promises) run before Macrotasks (setTimeout).
2. The for loop blocks the event loop, delaying both microtasks and macrotasks.
3. Synchronous code always runs first.
*/