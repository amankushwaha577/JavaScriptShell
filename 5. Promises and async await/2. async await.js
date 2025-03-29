/*
Que. What is Async/Await?
Ans. async and await are modern JavaScript features that simplify working with asynchronous code.
     1. They make Promise-based code look more like synchronous code.
     2. async functions always return a promise.
     3. await pauses execution until the promise resolves.
*/

/*
1. Basic Syntax :
----------------- 
a. async forces fetchData to return a promise.
b. .then(console.log) logs the resolved value.*/

async function fetchData() {
    return "Hello, World!";     
}
fetchData().then(console.log); // "Hello, World!"



/*
2. Using await with Promises :
------------------------------ 
a. await waits for promise to resolve before moving to the next line.
b. here The await expression pauses the execution of the getData() function for 2 seconds, 
   making the code look synchronous even though it's asynchronous. */

async function getData() {
    let promise = new Promise((resolve) => setTimeout(() => resolve("Data Loaded!"), 5000));
    let result = await promise;
    console.log(result); // "Data Loaded!" (after 5 seconds)
}
getData();


  
/*
3. Handling Errors with try...catch :
------------------------------------- 
a. If fetch fails, catch will handle the error.*/

async function fetchData() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
fetchData();
  


/*
Note: async functions always return a promise. */
async function getValue() {
    return 42;
}

getValue() // <Pomise> It will not be a normal value, It will be a Promise.
getValue().then(console.log); // 42
  