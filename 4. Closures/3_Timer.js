function createTimers() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }
}

createTimers(); // 3, 3, 3


// Explanation:
// Similar to the loop closure example, var causes the i variable to be shared across all the setTimeout callbacks. 
// By the time the timers execute, the loop has already completed, and i is 3.




// Fixing Closure with Timers Using let
function createTimers() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }
}

createTimers(); // 0, 1, 2

// Explanation:

// Using let ensures that each setTimeout captures its own value of i, and the output is as expected (0, 1, 2).
