// Recursive setTimeout

setTimeout(() => {
  console.log("Timeout 1");
  setTimeout(() => console.log("Timeout 2"), 0);
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => {
    console.log("Timeout 3");
    Promise.resolve().then(() => console.log("Promise 2"));
  }, 0);
});

// Output: Promise 1, Timeout 1, Timeout 3, Promise 2, Timeout 2.



/*
1. Promises execute (Promise 1), 
2. then Timeout 1, 
3. Timeout 3, Promise 2, 
4. Timeout 2.

*/
