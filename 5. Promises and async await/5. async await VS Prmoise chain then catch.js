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

// OP: Caught error: Error!

// Explanation:
// The delay function is a promise that rejects after 2 seconds.
// The fetchData function now calls delay(2000) and uses .then() to handle the successful resolution of the promise.
// If the promise resolves, 'Data fetched' is logged.
// The .catch() is used to handle any errors (i.e., if the promise rejects), and 'Caught error: Error!' will be logged.






// Why have error handling in both?
// ------------------------------------
// Even though "Promise-based syntax"and "async/await" are different in how they are written, both are just tools to work with asynchronous code. 
// 1. Promise-based syntax uses .then() and .catch() to manage results and errors, which makes chaining asynchronous calls more readable in some cases.
// 2. async/await syntax makes the code look more like synchronous code, which can be easier to read and write, especially when you have multiple asynchronous calls. However, it still works on top of promises.


// +--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
// | Aspect                   | Promise Chaining (`.then()`/`.catch()`)                    | `async/await`                                                |
// +--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
// | Syntax                   | `.then()` for handling resolved promises, `.catch()` for errors | `async` function with `await` for resolving promises, `try/catch` for error handling |
// +--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
// | Error Handling           | `.catch()` catches errors or rejections in the chain      | `try/catch` handles errors during `await` in an `async` function |
// +--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
// | Code Flow                | Asynchronous code flows in chains of `.then()`            | Code looks more synchronous, as `await` pauses execution until the promise resolves |
// +--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
// | Readability              | Can be harder to read with many chained promises           | Easier to read, especially when there are multiple asynchronous calls |
// +--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
// | Use Case                 | Good for simple chains of promises                        | Ideal for complex sequences of asynchronous operations, easier to manage with `try/catch` |
// +--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
// | Execution Order          | Promises execute in the order they are chained            | Promises execute in the order of the `await` statements, making them appear synchronous |
// +--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
// | Parallelism              | Use `Promise.all()` or `Promise.race()` for handling multiple promises | `await` will execute promises sequentially, but you can use `Promise.all()` in combination to handle parallel execution |
// +--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
// | Handling Multiple Promises| Requires separate handling for multiple promises using `Promise.all` or `Promise.race` | Can still handle multiple promises using `Promise.all` or `Promise.allSettled` with `await` |
// +--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
// | Error Propagation        | Errors propagate to the next `.catch()` block in the chain | Errors are propagated through `catch` blocks in the `try/catch` structure |
// +--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
// | Example Code             | `promise.then(result => { ... }).catch(error => { ... })` | `async function() { try { await promise } catch(error) { ... } }` |
// +--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+


