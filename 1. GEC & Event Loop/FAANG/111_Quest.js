// Async/Await with Promises
async function test() {
  console.log("Async 1");
  await Promise.resolve();
  console.log("Async 2");
}

console.log("Start");
test();
console.log("End");


// Explanation:
// Synchronous code (Start, Async 1, End) runs first.
// await pauses, allowing Async 2 to execute later as a micro-task.

// Output: Start, Async 1, End, Async 2.