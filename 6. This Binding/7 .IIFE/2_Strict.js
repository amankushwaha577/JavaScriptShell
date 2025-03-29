'use strict';

(function () {
  console.log(this);
})();
// Output:
// In browsers: undefined
// In Node.js: undefined

/*
1. Why undefined in Strict Mode?
-------------------------------
a. When you execute an IIFE, it’s treated like a regular function.
   In strict mode, if a function is not called with an explicit this value, this defaults to undefined.

b. Important Notes: This behavior applies only to functions. 
                    Arrow functions behave differently because they do not have their own this.
*/


( () => {  // Gloal context
    console.log(this);
  })();
// Output:
// 1. In browsers: undefined.
// 2. In Node.js: {} (empty object).

