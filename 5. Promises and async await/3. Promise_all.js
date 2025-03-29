/*
Promise.all() runs multiple promises in parallel, reducing wait time. 
On the other hand if you try to do it using loop it will take time because it will resolve Promise one after another. */

/* 1. Reolve using .then :
--------------------------*/

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3]).then((results) => {
  console.log(results);
});
// OP: [1, 2, 3]


/* 2. Reolve using async-await :
-------------------------------*/
async function fetchAll() {
  const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
  const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
  const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

  const results = await Promise.all([promise1, promise2, promise3]);
  // Promise.all() takes array of Promises & waits for all promises to resolve. 
  // It returns an array of results in the order the promises were passed, regardless of when they resolve.

  console.log(results); // [1, 2, 3]
}
fetchAll();


/*
3. Avoiding await in a loop :
-----------------------------
If you were to await each promise separately in a loop, it would run sequentially and take 6 seconds instead of 3:

This executes one after another (1s + 2s + 3s = 6s). */

async function fetchSequential() {
  const res1 = await new Promise((resolve) => setTimeout(() => resolve(1), 1000));
  const res2 = await new Promise((resolve) => setTimeout(() => resolve(2), 2000));
  const res3 = await new Promise((resolve) => setTimeout(() => resolve(3), 3000));

  console.log([res1, res2, res3]); // Takes 6 seconds
}
fetchSequential();
