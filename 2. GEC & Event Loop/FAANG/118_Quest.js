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
  

//   Synchronous (Start, Async Start, End) runs first.
// Then Async End and Promise (micro-tasks) execute.
// Output: Start, Async Start, End, Async End, Promise.