const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(5), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 2000);
});

promise1
  .then((result) => {
    console.log(result);
    return promise2;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

// 5
// 10

// 1. promise1 resolves after 1 second, and then promise2 is chained and resolved after 2 seconds. 
//    The result is logged in order.

// 2. If an error occurs at any point in the promise chain, it will be caught in the catch block.
