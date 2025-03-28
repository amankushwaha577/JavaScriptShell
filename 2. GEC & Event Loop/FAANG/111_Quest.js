// Async/Await with Promises
async function test() {
  console.log("Async 1");
  await Promise.resolve();
  console.log("Async 2");
}

console.log("Start");
test();
console.log("End");


// Output: Start, Async 1, End, Async 2.

/*
1. Synchronous code (Start, Async 1, End) runs first.
2. The await adds the continuation (console.log("Async 2")) to the micro-task queue.
*/