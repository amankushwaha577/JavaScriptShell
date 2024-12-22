const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3]).then((results) => {
  console.log(results);
});

// OP: [1, 2, 3]

// Promise.all waits for all promises to resolve. 
// It returns an array of results in the order the promises were passed, regardless of when they resolve.

