/*
Promises in JavaScript :
-----------------------
A Promise is an asynchronous operation that may complete in the future, either successfully (fulfilled) or with an error (rejected).

Promise States : A promise can be in one of these three states:
---------------
1. Pending → Initial state, operation not completed yet.
2. Fulfilled → Operation completed successfully.
3. Rejected → Operation failed. */

/*

1. Creating a Promise: A promise is created using the new Promise() constructor.*/

    const myPromise = new Promise((resolve, reject) => {
        let success = true; // Simulating success or failure
        setTimeout(() => {
        if (success) {
            resolve("Operation successful!"); // Fulfilled
        } else {
            reject("Operation failed!"); // Rejected
        }
        }, 5000);
    });


/*
2. A. Handling Promises: Use .then(), .catch(), and .finally() to handle promise results. */

    myPromise
    .then((result) => {
        console.log("Success:", result); // Runs if resolved
    })
    .catch((error) => {
        console.log("Error:", error); // Runs if rejected
    })
    .finally(() => {
        console.log("Execution completed"); // Always runs
    });

    //OP: Success: Operation successful!  (Only after 5 sec)
    //    Execution completed


/*
3. Async/Await (Simplified Promise Handling) : Instead of using .then(), we can use async/await. */

    async function fetchData() {
        try {
        let result = await myPromise;
        console.log("Result:", result);
        } catch (error) {
        console.log("Error:", error);
        } finally {
        console.log("Execution completed");
        }
    }
    
    fetchData();
    

    