(function () {
    console.log(this);
  })();
  

//   Output:

// In browsers: Window object.
// In Node.js: {} (empty object).
// Explanation: In a non-strict IIFE, this refers to the global object.

