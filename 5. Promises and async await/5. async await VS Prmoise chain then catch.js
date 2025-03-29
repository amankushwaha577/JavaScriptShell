/*
Why have error handling in both? :
---------------------------------
Even though "Promise-based syntax"and "async/await" are different in how they are written, both are just tools to work with asynchronous code. 
1. Promise-based syntax uses .then() and .catch() to manage results and errors, which makes chaining asynchronous calls more readable in some cases.
2. async/await syntax makes the code look more like synchronous code, which can be easier to read and write, especially when you have multiple asynchronous calls. However, it still works on top of promises.


+--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
| Aspect                   | Promise Chaining (`.then()`/`.catch()`)                    | `async/await`                                                |
+--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
| Syntax                   | `.then()` for handling resolved promises, `.catch()` for errors | `async` function with `await` for resolving promises, `try/catch` for error handling |
+--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
| Error Handling           | `.catch()` catches errors or rejections in the chain      | `try/catch` handles errors during `await` in an `async` function |
+--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
| Code Flow                | Asynchronous code flows in chains of `.then()`            | Code looks more synchronous, as `await` pauses execution until the promise resolves |
+--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
| Readability              | Can be harder to read with many chained promises           | Easier to read, especially when there are multiple asynchronous calls |
+--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
| Execution Order          | Promises execute in the order they are chained            | Promises execute in the order of the `await` statements, making them appear synchronous |
+--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
| Parallelism              | Use `Promise.all()` or `Promise.race()` for handling multiple promises | `await` will execute promises sequentially, but you can use `Promise.all()` in combination to handle parallel execution |
+--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
| Error Propagation        | Errors propagate to the next `.catch()` block in the chain | Errors are propagated through `catch` blocks in the `try/catch` structure |
+--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+
| Example Code             | `promise.then(result => { ... }).catch(error => { ... })` | `async function() { try { await promise } catch(error) { ... } }` |
+--------------------------+-----------------------------------------------------------+-------------------------------------------------------------+


*/