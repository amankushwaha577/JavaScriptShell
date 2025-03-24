console.log("script start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise1");
}).then(() => {
  console.log("promise2");
});

console.log("script end");

// script start
// script end
// promise1
// promise2
// setTimeout


// console.log("script start") and console.log("script end") run synchronously.
// Promise.then callbacks (promise1 and promise2) are micro-tasks and run before setTimeout (macro-task).
