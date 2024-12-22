const delay = (ms) => new Promise((resolve, reject) => setTimeout(() => reject('Error!'), ms));

async function fetchData() {
  try {
    await delay(2000);
    console.log('Data fetched');
  } catch (error) {
    console.log('Caught error:', error);
  }
}

fetchData();

// OP: Caught error: Error!

// If the promise is rejected, the error will be caught by the catch block within the async function, 
// preventing unhandled promise rejections.


// Explanation:
// -----------------
// 1. async marks the function as asynchronous, allowing you to use await inside it.
// 2. await pauses the execution until the promise resolves or rejects.
// 3. try/catch is used for error handling. If the promise is rejected, the error will be caught in the catch block.






// Why have error handling in both?
// ------------------------------------
// Even though "Promise-based syntax"and "async/await" are different in how they are written, both are just tools to work with asynchronous code. 
// 1. Promise-based syntax uses .then() and .catch() to manage results and errors, which makes chaining asynchronous calls more readable in some cases.
// 2. async/await syntax makes the code look more like synchronous code, which can be easier to read and write, especially when you have multiple asynchronous calls. However, it still works on top of promises.


const delay2 = (ms) => new Promise((resolve, reject) => setTimeout(() => reject('Error!'), ms));

function fetchData2() {
  delay2(2000)
    .then(() => {
      console.log('Data fetched');
    })
    .catch((error) => {
      console.log('Caught error:', error);
    });
}

fetchData2();

