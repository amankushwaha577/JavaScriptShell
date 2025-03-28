console.log("A");

setTimeout(() => {
  console.log("B");
  setTimeout(() => console.log("C"), 0);
}, 0);

Promise.resolve().then(() => {
  console.log("D");
  Promise.resolve().then(() => console.log("E"));
});

console.log("F");

// A
// F
// D
// E
// B
// C

/*
1. Synchronous code executes first: console.log("A") and console.log("F").

2. The micro-tasks are executed next:
    console.log("D")
    Nested Promise (console.log("E")).

3. The macro-tasks are executed:
    setTimeout for console.log("B").
    Nested setTimeout for console.log("C").
*/