/*
1. Error Handling with try...catch :
------------------------------------
The try...catch block is used to handle synchronous errors in JavaScript. 

a. try runs the code block and, if an error occurs, it jumps to catch.
b. catch contains the logic to handle the error.
c. finally is optional and executes after try or catch.*/

try {
  // Code that might throw an error
} catch (error) {
  // Handle the error here
} finally {
  // (Optional) Code that always runs, regardless of success or failure
}



try {
  setTimeout(() => {
    throw new Error("Timeout Error");
  }, 0);
} catch (error) {
  console.log("Caught:", error.message);
}

// op : Uncaught Timeout Error

// Explanation: try...catch cannot catch errors in asynchronous code. 
//              The setTimeout callback executes after the try block has already exited.






// 2. Error Handling in Promises
// ------------------------------------
// Promises use .catch() for error handling.
new Promise((resolve, reject) => {
  reject("Error occurred");
})
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// Key Points:
//------------------
// If an error occurs in the executor function or a .then() block, it gets caught by .catch().
// Unhandled promise rejections can be caught globally using process.on('unhandledRejection') (Node.js) or window.onunhandledrejection (browser).




// 3. Error Handling in Async/Await
// ------------------------------------
// With async/await, errors can be caught using try...catch.
async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }

// Key Points:
// -----------
// Errors in await expressions are caught by catch.
// Rejected promises can bubble up unless explicitly handled.