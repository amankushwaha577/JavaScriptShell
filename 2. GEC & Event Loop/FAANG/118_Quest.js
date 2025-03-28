// Mixed async functions and Promises
async function test() {
    console.log("Async Start");
    await Promise.resolve();
    console.log("Async End");
  }
  
  console.log("Start");
  test();
  Promise.resolve().then(() => console.log("Promise"));
  console.log("End");
  
// Output: Start, Async Start, End, Async End, Promise.

/*
1. Synchronous (Start, Async Start, End) runs first.
2. Then Async End and Promise (micro-tasks) execute.
*/
