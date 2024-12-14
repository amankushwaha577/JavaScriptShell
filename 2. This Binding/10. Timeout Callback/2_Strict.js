'use strict';

setTimeout(function () {
  console.log(this);
}, 1000);

//   Output:

//   In browsers: Window object.
//   In Node.js: Timeout object.

// Explanation:
// 1. In Browsers:
// Even in strict mode, when using setTimeout with a regular function, the this value inside the callback is still 
// the global object (window) because setTimeout calls the function with the global context.
// Strict mode does not affect this behavior in browsers.

// 2. In Node.js:
// In Node.js, the callback function is executed in the context of the Timeout object, not the global object.
// Therefore, this refers to the Timeout object, even in strict mode.
  