// Handling Errors in Promises and Async Functions :

/* 1. Handling Errors in Promises :
-----------------------------------
a. Errors thrown inside a promise automatically reject the promise,
b. which is caught by the .catch() handler. */

    new Promise((resolve, reject) => {
        throw new Error("Promise Error");
    }).catch((error) => console.log("Caught:", error.message));

    // Output: Caught: Promise Error


    // Same using async await :
    async function handlePromiseError() {
        try {
            await new Promise((resolve, reject) => {
                throw new Error("Promise Error");
            });
        } catch (error) {
            console.log("Caught:", error.message);
        }
    }



/*2. Handling Errors in Async Functions :
---------------------------------------- 
a. Inside test(), await Promise.reject("Rejected!") is encountered.
b. it throws the rejection reason ("Rejected!") as an error.
c. The next line (console.log(This won't log);) is never executed.
d. The catch block is triggered and logs "Caught: Rejected!" */

    async function test() {
        const result = await Promise.reject("Rejected!");
        console.log("This won't log");
    }
    test().catch((error) => console.log("Caught:", error));
    // Output: Caught: Rejected!



