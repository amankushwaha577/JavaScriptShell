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

   To handle them, you must use a global error handler like window.onerror or wrap the asynchronous function in a Promise.
*/

    try {
      setTimeout(() => {
        throw new Error("Timeout Error");
      }, 0);
    } catch (error) {
      console.log("Caught:", error.message);
    }

    // op : Timeout Error

