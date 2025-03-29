(function () {
    console.log(this);
  })();
  

//   Output:

// In browsers: Window object.
// In Node.js: {} (empty object).
// Explanation: In a non-strict IIFE, this refers to the global object.



// ------------------------------------------------------------------------------------
// The output of the IIFE (Immediately Invoked Function Expression) in Node.js as {} (empty object || module.exports) rather than
//  the global object  is due to the way Node.js handles the module wrapper function.

// (function (exports, require, module, __filename, __dirname) {
//            (function () {
//                  console.log(this); // {} (empty object)
//            })();
// });



// 1. Scope Inside the Wrapper Function:
// Inside the wrapper function, the value of this is set to module.exports (an empty object {} by default).
// This means at the top level of a module, this refers to module.exports.

// 2. Inside the IIFE:
// """""""""""The IIFE is executed within the module's context, not the global context""""""""""". ((make it note))
// Since this in the module context is initialized as module.exports (or {}), the this inside the IIFE inherits the same value.
