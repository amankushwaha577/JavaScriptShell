function createTimers() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }
}

createTimers(); // 3, 3, 3

/*
Explanation:
------------
Similar to the loop closure example, var causes the i variable to be shared across all the setTimeout callbacks. 
By the time the timers execute, the loop has already completed, and i is 3. */



function createTimers() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }
}

createTimers(); // 0, 1, 2

/*
1. Fixing Closure with Timers Using let:
----------------------------------------
a. Using let ensures that each setTimeout captures its own value of i, and the output is as expected (0, 1, 2). */





function createTimers() {
  for (var i = 0; i < 3; i++) {
    (function(i) { // Create a new function scope
      setTimeout(function() {
        console.log(i);
      }, 1000);
    })(i); // Pass `i` as a parameter to preserve its value
  }
}

createTimers(); // 0, 1, 2

// Each setTimeout closes over its own i, so the correct value is logged.

/*
2. Alternative Fix Using Closures (IIFE): If you must use var, wrap the function inside an Immediately Invoked Function.
----------------------------------------

a. Inside the IIFE, i is now scoped inside the function, not shared globally.
   (function (i) { Clusure } )(i)

b. IIFE creates a new execution context for each iteration, ensuring that i is stored individually.
*/
