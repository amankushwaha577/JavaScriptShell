/*
1. Error Handling with try...catch :
------------------------------------
The try...catch block is used to handle synchronous errors in JavaScript. 

a. try runs the code block and, if an error occurs, it jumps to catch.
b. catch contains the logic to handle the error.
c. finally is optional and executes after try or catch. */

try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Optional block that runs regardless of whether an error occurred
}



/* 1. Basic Try-Catch :
-----------------------
OP : An error occurred: x is not defined */

try {
  let result = 10 / x; // x is not defined (ReferenceError)
} catch (error) {
  console.error("An error occurred:", error.message);
}



/* 2. Error Handling in Async/Await :
-------------------------------------
a. Inside the try block, await Promise.reject("Rejected!") is encountered.
b. it throws the rejection reason ("Rejected!") as an error.
c. The try block execution stops immediately after the rejection.
   The next line (console.log(result);) is never executed.
d. The catch block is triggered and logs "Caught: Rejected!".*/

async function test() {
  try {
    const result = await Promise.reject("Rejected!");
    console.log(result);
  } catch (error) {
    console.log("Caught:", error);
  }
}
test();

// OP: Caught: Rejected!



/* 3. try...catch cannot catch errors in asynchronous code :
----------------------------------------------------------

a. try...catch cannot catch errors in asynchronous code.
b. The setTimeout callback executes after the try block has already exited. 
   i).  setTimeout schedules its callback function for execution after the current synchronous code completes.
   ii.  The try block finishes execution before the function inside setTimeout run.
   iii  When throw new Error("Timeout Error") executes, there’s no catch block active, so the error is uncaught.
*/

try {
  setTimeout(() => {
    throw new Error("Timeout Error");
  }, 0);
} catch (error) {
  console.log("Caught:", error.message);
}

// op : Timeout Error



new Promise((resolve, reject) => {
  throw new Error("Promise Error");
}).catch((error) => console.log("Caught:", error.message));

// OP: Caught: Promise Error

// Explanation: Errors thrown inside a promise automatically reject the promise, which is caught by the .catch() handler.

async function test() {
  const result = await Promise.reject("Rejected!");
  console.log("This won't log");
}

test().catch((error) => console.log("Caught:", error));

// OP : Caught: Rejected!

// Explanation: Since test() is an async function, the rejected promise is propagated to the .catch() on the function call.

// 1. How async Functions Work :
//    A. When you define an async function, it always returns a promise, no matter what the function body contains.
//    B. If the function explicitly or implicitly returns a value, that value is wrapped in a resolved promise:
async function resolvedTest() {
  return "Resolved Value";
}
resolvedTest().then((value) => console.log(value)); // Output: Resolved Value
//    C. If an error is thrown inside the async function or a Promise.reject() is encountered, the promise it returns becomes rejected.

// 2. Why Not Attach .catch() Inside test()?
//    A. You could handle the error inside the test() function itself with a try...catch,
//       but attaching .catch() externally provides more flexibility. For example:
async function test() {
  try {
    const result = await Promise.reject("Rejected!");
    console.log(result);
  } catch (error) {
    console.log("Caught inside test:", error);
  }
}
test(); // Output: Caught inside test: Rejected!

// Summary
// You’re calling test() and attaching .catch() externally because:
// -----------------------------------------------------------------
// 1. test() is an async function that returns a promise.
// 2. This allows errors to be caught and handled by .catch() where test() is called, making the code more modular and flexible.

Promise.resolve()
  .then(() => {
    throw new Error("Error in then");
  })
  .catch((error) => {
    console.log("Caught:", error.message);
    return "Recovered";
  })
  .then((result) => console.log("Result:", result));

// Caught: Error in then
// Result: Recovered

// Explanation: The error is caught by .catch() and returns a value,
// allowing the promise chain to recover and pass Recovered to the next .then().

async function test() {
  try {
    setTimeout(() => {
      throw new Error("Async Error");
    }, 0);
  } catch (error) {
    console.log("Caught:", error.message);
  }
}
test();

// OP: Uncaught Async Error

// Explanation: Errors in setTimeout are not caught by try...catch.
// To handle them, you must use a global error handler like window.onerror or wrap the asynchronous function in a Promise.

async function test() {
  try {
    return await Promise.reject(new Error("Rejected Promise"));
  } catch (error) {
    console.log("Caught:", error.message);
  }
}
test().then((result) => console.log("Result:", result));

// Caught: Rejected Promise
// Result: undefined

// Explanation: The catch block handles the error, but the function does not return anything, so the resolved value is undefined.

// 1. why this function does not return anything ?
// -------------------------------------------------
//     Since the catch block doesn’t explicitly return any value, the function implicitly returns "undefined".

// 2. Why doesn’t the original return execute?
// -------------------------------------------------
//     A. The return statement before the await
return await Promise.reject(new Error("Rejected Promise"));
//     B. This does not complete successfully because Promise.reject() triggers an error.
//     C. As soon as the promise is rejected, the try block stops execution, and control moves to the catch block.
//     D. The original return is skipped entirely.

(async function () {
  try {
    return await 10;
  } catch (error) {
    console.log("Caught:", error.message);
  }
})();

// OP: No error; the function resolves with 10.

// Explanation: await works with any value, resolving non-promise values to themselves.

(async function () {
  try {
    return await 10;
  } catch (error) {
    console.log("Caught:", error.message);
  }
})().then((result) => console.log("Result:", result));

// op: Result: 10
