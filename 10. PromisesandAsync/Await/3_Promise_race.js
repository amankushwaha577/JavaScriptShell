const promise1 = new Promise((resolve) => setTimeout(() => resolve('first'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('second'), 2000));

Promise.race([promise1, promise2]).then((result) => {
  console.log(result);
});

// OP: first

// Promise.race resolves as soon as the first promise resolves. 
// In this case, promise1 resolves first, so its result is logged.