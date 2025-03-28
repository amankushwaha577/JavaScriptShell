// Async/Await with multiple await calls

async function test() {
    console.log("Async 1");
    await Promise.resolve();
    console.log("Async 2");
    await Promise.resolve();
    console.log("Async 3");
  }
  
  console.log("Start");
  test();
  console.log("End");


// Output: Start, Async 1, End, Async 2, Async 3.

/*
1. Synchronous code (Start, Async 1, End) executes first.
2. Each await defers subsequent code to a micro-task.
*/
